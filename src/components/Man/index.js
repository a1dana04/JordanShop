import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { manCategory } from "../../redux/addToCardSlice";

import BayNow from "../BayNow";
import BayNowCard from "../BayNow/BayNowCard";

const Man = () => {
  const { man } = useSelector((s) => s.todo);
  console.log(man);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(manCategory());
  }, []);
  return (
    <div id="man">
      <div className="container">
        <div className="man flex items-center justify-between p-5 flex-wrap">
          {man.map((el) => (
            <BayNowCard el={el}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Man;
