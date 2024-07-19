import React, { useState } from "react";
import logos from "../../assets/img/logos.svg";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { searchPro } from "../../redux/addToCardSlice";

const Header = () => {
  const { search, basket } = useSelector((s) => s.todo);
  const [searchProduct, setSearchProduct] = useState("");
  console.log(search);
  const dispatch = useDispatch();

  return (
    <div className="header p-5 bg-zinc-950">
      <div className="container">
        <div className="header flex items-center justify-between ">
          <img src={logos} alt="img" />
          <div className="text-white flex items-center gap-10">
            <Link to={"/"}> HOME</Link>
            <Link to={"/man"}>MAN</Link>
            <Link to={"/women"}>WOMEN</Link>
            <Link to={"/kids"}>KIDS</Link>
            <Link to={"/sale"}>SALE</Link>
          </div>

          <div className="text-white flex items-center justify-center gap-5 text-2xl outline-none rounded-sm ">
            <input
              className=" text-black"
              value={searchProduct}
              onChange={(e) => {
                setSearchProduct(e.target.value);
              }}
              type="text"
              placeholder="...search"
            />

            <Link to={"/search"} className=" relative">
              <h1 onClick={() => {
                dispatch(searchPro(searchProduct))
                setSearchProduct("")
              }}>
                {" "}
                <IoSearch />
              </h1>
            </Link>
            <Link to={"/addToBasket"}>
              <BsBag />
              <p className=" absolute top-11 right-24 text-base">
                {basket.length}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
