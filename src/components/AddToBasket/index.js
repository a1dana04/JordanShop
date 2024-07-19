import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToBasketCard from "./AddToBasketCard";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToBasket = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [showModal, setShowModal] = useState(false); 

  const { basket } = useSelector((s) => s.todo);
  const totalPrice = basket.reduce((acc, el) => {
    return acc + +el.price;
  }, 0);

  const massage = () => {
    toast.success("Ваш заказ успешно отправлен!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const submitToTelegram = async () => {
    let my_id = -1002043264040;
    let token = `7043496915:AAEoRK9THxBn75bvcsgliKltPXT25dHhvcc`;
    let api_url = `https://api.telegram.org/bot${token}/sendMessage`;

    let userInfo = {
      chat_id: my_id,
      parse_model: "html",
      text: `Заказ:
       Имя: ${userName}
       Тел номер:${userPhone}
       Адресс:${userAddress}
      `,
    };

    await axios.post(api_url, userInfo);
    setUserName("");
    setUserPhone("");
    setUserAddress("");
    localStorage.removeItem("basket");
    setShowModal(false); 
    massage();
  };

  return (
    <div id="addToBasket">
      <div className="container">
        <div className="flex items-start gap-40">
          <div className="">
            <div className="addToBasket overflow-scroll w-[600px] h-[450px] ">
              {basket.map((el) => (
                <AddToBasketCard el={el} />
              ))}
            </div>
            <div className="">Общая сумма: {totalPrice}</div>
          </div>
          <div className="">
            <div className="  ">
              <div className="relative z-0 w-full mb-6 group mt-9">
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  name="userName"
                  id="userName"
                  className="block py-2.5 px-16  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="userName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Имя
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  type="text"
                  name="userPhone"
                  id="userPhone"
                  className="block py-2.5 px-16  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="userPhone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Телефон
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setUserAddress(e.target.value)}
                  value={userAddress}
                  type="text"
                  name="userAddress"
                  id="userAddress"
                  className="block py-2.5 px-16  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="userAddress"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Адрес
                </label>
              </div>
              <h1 className="ml-5 mt-5 text-blue-600">
                Ваши данные будут отправлены через телеграм...
              </h1>

              <button
                disabled={userName ? false : true}
                onClick={() => setShowModal(true)} 
                type="button"
                className="py-2.5 px-5 me-2 mb-2 ml-24 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Заказать
              </button>

            
             
          
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"   style={{
              display: showModal ? "flex" : "none",
            }}>
                 
                
                    <div class="relative p-4 w-full max-w-md max-h-full">
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                          type="button"
                          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="popup-modal"
                        >
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 md:p-5 text-center">
                          <svg
                            class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Вы уверены, что хотите отправить заказ?
                          </h3>
                          <button
                            onClick={()=>submitToTelegram()}
                            data-modal-hide="popup-modal"
                            type="button"
                            class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-black-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                          >
                            Да
                          </button>
                          <button
                            onClick={() => setShowModal(false)}
                            data-modal-hide="popup-modal"
                            type="button"
                            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          >
                            Нет
                          </button>
                        </div>
                      
                      </div>
                    </div>
                  </div>
                 
            
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    
    </div>
    
  );
};

export default AddToBasket;
