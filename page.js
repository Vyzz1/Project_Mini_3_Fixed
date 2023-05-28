import { fetchApi } from "./fetchApi.js";

export const pagination = (value, next, prev, box) => {
  let temp = parseInt(value.innerHTML);
  var new_Array = [];
  next.addEventListener("click", () => {
    if (temp < 2) {
      temp = temp + 1;
      value.innerHTML = temp;
    }
    fetchApi(`http://localhost:3000/products?_page=${temp}&_limit=18`).then(
      (result) => {
        new_Array = result.map((value, index) => {
          return `
            <div class="col-xl-2 class="item_num_${index}">
                <div class="hover_item">
                    <span class="left-top"> </span>
                    <span class="right-top"> </span>
                    <span class="left-bottom"> </span>
                    <span class="right-botom"> </span>
                    <div class="inner-box">
                        <div class="inner-img">
                            <img src="${value.thumbnail}">
                            <div class="inner-sale">-${value.discountPercentage}%</div>
                        </div>
                        <div class="inner-name">${value.title}</div>
                        <div class="catagory">
                                <div class=inner-price>$ ${value.price}</div>
                                <div class=inner-stock> Stock : ${value.stock}</div>
                        </div>
                    </div>
                </div>
            </div>
    
    `;
        });
        box.innerHTML = new_Array.join("");
      }
    );
  });
  prev.addEventListener("click", () => {
    if (temp > 1) {
      temp = temp - 1;
      value.innerHTML = temp;
    }
    fetchApi(`http://localhost:3000/products?_page=${temp}&_limit=18`).then(
      (result) => {
        new_Array = result.map((value, index) => {
          return `
              <div class="col-xl-2 class="item_num_${index}">
                  <div class="hover_item">
                      <span class="left-top"> </span>
                      <span class="right-top"> </span>
                      <span class="left-bottom"> </span>
                      <span class="right-botom"> </span>
                      <div class="inner-box">
                          <div class="inner-img">
                              <img src="${value.thumbnail}">
                              <div class="inner-sale">-${value.discountPercentage}%</div>
                          </div>
                          <div class="inner-name">${value.title}</div>
                          <div class="catagory">
                                  <div class=inner-price>$ ${value.price}</div>
                                  <div class=inner-stock> Stock : ${value.stock}</div>
                          </div>
                      </div>
                  </div>
              </div>
      
      `;
        });
        box.innerHTML = new_Array.join("");
      }
    );
  });
};
