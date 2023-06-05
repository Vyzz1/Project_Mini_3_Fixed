import { drawProducts } from "./drawProducts.js";
import { buton_next, button_back, current_page, params } from "./variables.js";

export const pagination = () => {
  buton_next.addEventListener("click", () => {
    if (params.isNextPage === true) {
      let value = parseInt(current_page.innerHTML);
      if (value < 4) {
        value++;
      }
      current_page.innerHTML = value;
      params.page = value;
      drawProducts();
    }
  });

  button_back.addEventListener("click", () => {
    let value = parseInt(current_page.innerHTML);
    if (value > 1) {
      value--;
    }
    current_page.innerHTML = value;
    params.page = value;
    drawProducts();
  });
};
