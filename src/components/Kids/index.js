import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BayNowCard from "../BayNow/BayNowCard";
import { useEffect } from "react";
import { kidsCategory } from "../../redux/addToCardSlice";

const Kids = () => {
  const { kids } = useSelector((s) => s.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(kidsCategory());
  }, []);
  return (
    <div id="kids">
        <div className="container">
            <div className="kids flex items-center justify-between p-5 flex-wrap">
            {kids.map((el, idx) => (
        <BayNowCard el={el} key={idx} />
      ))}
            </div>
        </div>
     
    </div>
  );
};

export default Kids;
