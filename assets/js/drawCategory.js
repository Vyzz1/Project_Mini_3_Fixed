import { API_CATEGORY } from "./API.js";
import { drawProducts } from "./drawProducts.js";
import { fetchApi } from "./fetchApi.js";
import { categories_main } from "./variables.js";
import { params, current_page } from "./variables.js";
export const drawC = function () {
  fetchApi(API_CATEGORY).then((result) => {
    const newArr = result.map((value) => {
      return `  
    <div class="col-xl-2">
    <div class="inner-box box_categories " id="${value}">
            ${value}
    </div>
    </div>   
     `;
    });
    categories_main.innerHTML = newArr.join("");
  });
  categories_main.addEventListener("click", (event) => {
    params.q = "";
    params.page = 1;
    current_page.innerHTML = params.page;
    const selectedCategory = event.target.id;
    if (
      selectedCategory !== null &&
      selectedCategory !== undefined &&
      selectedCategory !== ""
    ) {
      params.q = selectedCategory;
      drawProducts();
    }
  });
};
