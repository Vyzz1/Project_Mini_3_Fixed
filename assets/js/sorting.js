import { drawProducts } from "./drawProducts.js";
import { select, params, button_ok } from "./variables.js";
export const sorting = () => {
  button_ok.addEventListener("click", () => {
    var value = select.value;
    console.log(value);

    switch (value) {
      case "1":
        params.sort = "price";
        params.order = "asc";
        drawProducts();
        break;
      case "2":
        params.sort = "price";
        params.order = "desc";
        drawProducts();
        break;
      case "3":
        params.sort = "discountPercentage";
        params.order = "desc";
        drawProducts();
        break;
      default:
        break;
    }
  });
};
