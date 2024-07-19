import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/addToCardSlice";

const AddToProduct = () => {
  const [productImg, setProductImg] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s.todo);
  const createProduct = () => {
    if (
      productImg.trim() === "" ||
      productName.trim() === "" ||
      productPrice.trim() === "" ||
      productDesc.trim() === ""
    ) {
      alert("Заполните поле!!!");
    } else {
      let newProduct = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        url: productImg,
        name: productName,
        price: productPrice,
        category: productCategory,
        desc:productDesc
      };
      setProductImg("");
      setProductName("");
      setProductPrice("");
      setProductCategory("");
      setProductDesc("")

      return dispatch(addProducts(newProduct));
    }
  };
console.log(product, 'pro');
  return (
    <div id="addToProduct">
      <div className="container">
        <div className=" max-w-md mx-auto  ">
          <div class="relative z-0 w-full mb-6 group mt-9">
            <input
              onChange={(e) => setProductImg(e.target.value)}
              value={productImg}
              type="text"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-16  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ProductImg
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              type="text"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-16  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ProductName
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductDesc(e.target.value)}
              value={productDesc}
              type="text"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-16  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ProductDesc
            </label>
          </div>
          <div className="flex items-center justify-center">
            <div class="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
                type="text"
                name="repeat_password"
                id="floating_repeat_password"
                class="block py-2.5 px-16  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_repeat_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ProductPrice
              </label>
            </div>


          
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              className=" border-x-4 border-y-4 border-black rounded-lg"
            >
              <option value="">select</option>
              <option value="man">man</option>
              <option value="women">women</option>
              <option value="kids">kids</option>
            </select>
          </div>
          <button
            onClick={() => createProduct()}
            type="button"
            class="py-2.5 px-5 me-2 mb-2 ml-16 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            AddProduct
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToProduct;
