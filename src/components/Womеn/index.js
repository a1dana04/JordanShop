import React from "react";

import { useDispatch, useSelector } from "react-redux";
import BayNowCard from "../BayNow/BayNowCard";
import { useEffect } from "react";
import { womenCategory } from "../../redux/addToCardSlice";

const Women = () => {
  const { women } = useSelector((s) => s.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(womenCategory());
  }, []);
  return (
    <div id="women">
      <div className="container">
        <div className="women flex items-center justify-between p-5 flex-wrap">
          {women.map((el, idx) => (
            <BayNowCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
