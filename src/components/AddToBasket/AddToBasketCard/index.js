import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBasket } from "../../../redux/addToCardSlice";

const AddToBasketCard = ({ el }) => {
  const { basket } = useSelector((s) => s.todo);
  const dispatch = useDispatch();
  console.log(basket);

  return (
    <div id="addToBasketCard">
      <div className="container">
        <div className=" mt-10 ">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={el.url}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {el.name}
              </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {el.price}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className=" ml-56">
                <button
                  onClick={() => dispatch(deleteBasket(el))}
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddToBasketCard;
