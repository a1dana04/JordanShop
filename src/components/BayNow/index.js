import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BayNowCard from "./BayNowCard";
import { proSort } from "../../redux/addToCardSlice";

const BayNow = () => {
  const { product } = useSelector((s) => s.todo);
  const dispatch = useDispatch();
  return (
    <div id="bayNow">
      <div className="container">
        <div className="p-9">
          {" "}
          <select onChange={(e)=>dispatch(proSort(e.target.value))} className=" w-40 border-x-4 border-y-4 border-black rounded-sm ">
            <option value="expensive">expensive</option>
            <option value="cheap">cheap</option>
          </select>
        </div>
        <div className="bayNow flex items-start flex-wrap justify-between mt-10">
          {product.map((el) => (
            <BayNowCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BayNow;
