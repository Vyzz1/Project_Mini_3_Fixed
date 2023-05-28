import { fetchApi } from "./fetchApi.js";
import { searching_module } from "./searching.js";
const inner_box = document.querySelector("#pro_row");

//First page
fetchApi("http://localhost:3000/products?_page=1&_limit=18").then((result) => {
  const newArr = result.map(function (value, index) {
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
  inner_box.innerHTML = newArr.join("");
});

// Catgory

// Giao diện
const categories_box = document.querySelector("#category_row");
fetchApi("http://localhost:3000/category").then((result) => {
  const category_arr = result.map((value) => {
    return `
                    <div class="col-xl-2">
                        <div class="inner-box box_categories " id="${value}">
                                ${value}
                        </div>
                    </div>    

            `;
  });
  categories_box.innerHTML = category_arr.join("");
});

// Bộ chọn
const categories = document.querySelector("#category_row");

// Bắt sự kiện khi click vào danh mục
categories.addEventListener("click", (event) => {
  const selectedCategory = event.target.id;
  // Xử lý hành động khi một danh mục được chọn
  if (
    selectedCategory !== null &&
    selectedCategory !== undefined &&
    selectedCategory !== ""
  ) {
    fetchApi(`http://localhost:3000/products?q=${selectedCategory}`).then(
      (results) => {
        const Arr_Categories = results.map((value, index) => {
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
        inner_box.innerHTML = Arr_Categories.join("");
      }
    );
  }
});

// First page

// Searching
const button = document.querySelector("#button_search");
const input = document.querySelector("#input");
searching_module(button, input, inner_box);

const page = document.querySelector("#current_page");
let temp = parseInt(page.innerHTML);

// Page change
const next = document.querySelector("#next_page");
const prev = document.querySelector("#back_page");
import { pagination } from "./page.js";
pagination(page, next, prev, inner_box);
