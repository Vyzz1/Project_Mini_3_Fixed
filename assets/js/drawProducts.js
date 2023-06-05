import { fetchApi } from "./fetchApi.js";
import { products_main } from "./variables.js";
import { params } from "./variables.js";
import { API_Products } from "./API.js";
export const drawProducts = () => {
  const api = `${API_Products}?q=${params.q}&_page=${params.page}&_limit=${params.limit}&_sort=${params.sort}&_order=${params.order}`;
  console.log(api);
  fetchApi(api).then((result) => {
    const newArr = result.map((value, index) => {
      return `  
                <div class="col-xl-3 class="item_num_${index}">
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
                </div>`;
    });

    products_main.innerHTML = newArr.join("");
    if (result.length < params.limit) {
      // buton_next.classList.add("remove");
      params.isNextPage = false;
    } else {
      params.isNextPage = true;
    }
  });
};
