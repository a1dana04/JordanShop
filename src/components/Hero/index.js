import React from 'react';
import bg from "../../assets/img/bg.png"
import but from "../../assets/img/hero-but.png"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Hero = () => {
   
    return (
        <div style={{
            background :`url(${bg})no-repeat center/cover`,
            minHeight: "100vh",
        }} className=' relative'>
            <div className="container">
               
                <div className="hero flex items-center justify-center gap-20 absolute bottom-0">
           <div>
            <h5 className='text-white ml-20 font-bold'>CHOOSE COLOR : </h5>
           <img src={but} alt="img" />
           </div>
            <div className="hero-btn">
               <Link to={"/addToProduct"}> <button className='bg-white p-3 font-bold ' >ADD TO CART </button></Link>
               <Link to={"/bayNow"}>
               <button className=' text-white p-3 border-inherit font-bold ml-5'>BUY NOW</button>
               </Link>
            </div>
            <div className="hero-text text-white">
                <h1 className='font-bold'>INSPIRATION</h1>
                <p className='text-xs'>Inspired by the design of the latest Air Jordan game shoe, <br />the Jordan Jumpman 2021 helps up-and-coming players level <br />up their game. </p>
            </div>

                </div>
            </div>
            
        </div>
    );
};

export default Hero;