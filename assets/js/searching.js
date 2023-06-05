import { params, input, button_search } from "./variables.js";
import { drawProducts } from "./drawProducts.js";
export const search = () => {
  button_search.addEventListener("click", function () {
    params.category = "";
    params.q = input.value;
    drawProducts();
    // params.q = "";
  });
  input.addEventListener("keydown", function (event) {
    params.category = "";
    if (event.key === "Enter") {
      params.q = input.value;
      drawProducts();
      // params.q = "";
    }
  });
};
