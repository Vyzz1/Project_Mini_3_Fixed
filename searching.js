import { fetchApi } from "./fetchApi.js";
export const searching_module = (button, input, box) => {
  var Arr_Search = [];
  const search = () => {
    const value = input.value;
    if (value !== null && value !== "" && value !== undefined) {
      var str = `http://localhost:3000/products?q=${value}`;
      fetchApi(str)
        .then((result) => {
          Arr_Search = result.map(function (item, index) {
            return `
                <div class="col-xl-2 class="item_num_${index}">
                  <div class="hover_item">
                    <span class="left-top"> </span>
                    <span class="right-top"> </span>
                    <span class="left-bottom"> </span>
                    <span class="right-botom"> </span>
                    <div class="inner-box">
                      <div class="inner-img">
                        <img src="${item.thumbnail}">
                        <div class="inner-sale">-${item.discountPercentage}%</div>
                      </div>
                      <div class="inner-name">${item.title}</div>
                      <div class="catagory">
                        <div class=inner-price>$ ${item.price}</div>
                        <div class=inner-stock> Stock : ${item.stock}</div>
                      </div>
                    </div>
                  </div>
                </div>
              `;
          });
          if (Arr_Search.length === 0) {
            box.innerHTML = `
                    <div class="col-xl-12 failed">
                     Không có sản phẩm nào
                 </div>
            `;
          } else {
            box.innerHTML = Arr_Search.join("");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };
  button.addEventListener("click", search);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      search();
    }
  });
};
