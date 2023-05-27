import { fetchApi } from "./fetchApi.js";
import { searching_module } from "./searching.js";
const button = document.querySelector("#button_search");
const input = document.querySelector("#input");
const inner_box = document.querySelector("#pro_row");

fetchApi("http://localhost:3000/products?_page=1&_limit=18").then((result) => {
  const newArr = result.map(function (item, index) {
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
  inner_box.innerHTML = newArr.join("");
});
searching_module(button, input, inner_box);
