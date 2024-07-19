import React from 'react';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
    const {details} = useSelector((s)=>s.todo)
    return (
        <div id='details'>
            <div className="container">
                <div className="details flex items-start ">
                  <img src= {details.url} width={400} alt="" />
                  <div className="details-card p-32 text-2xl">
                    <h1>{details.name}</h1>
                    <p className=' mt-3 mb-3'>{details.desc}</p>
                    <h2>${details.price}</h2>
                  </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProductDetails;