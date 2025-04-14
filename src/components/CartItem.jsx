import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../features/cart/cartSlice";
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ coin }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  //Increase Quantity
  const handleIncreaseQuantity=(id)=>{
    dispatch(increaseQuantity(id));
  }
  //Decrease Quantity
  const handleDecreaseQuantity=(id)=>{
    dispatch(decreaseQuantity(id));
  }

  return (
    <div className="relative flex items-center  border border-gray-500 rounded-md p-8 ">
      <img className="h-28 shadow rounded-sm" src={coin?.image?.large} alt="" />
      <div className="text-white  mx-8">
        <h1 className="text-gray-500 font-bold text-3xl">{coin.name}</h1>
        <h2 className="text-gray-500 font-bold text-2xl">
          Price : {coin?.market_data?.current_price?.inr} INR/-
        </h2>
        {/* Quantity */}
        <div className="flex flex-row  items-center justify-evenly border-2 my-3 rounded-3xl border-gray-500 ">
          {
            coin.quantity>1?<button onClick={()=>handleDecreaseQuantity(coin.id)}  className="font-bold  text-2xl">-</button>:<button
            onClick={() => handleRemoveFromCart(coin.id)}
            className="   "
          >
             <FaTrash className="text-red-500" />
          </button>
          }
          <h3 className="text-gray-500 font-bold text-2xl">
            {coin?.quantity}{" "}
          </h3>
          <button onClick={()=>handleIncreaseQuantity(coin.id)} className="font-bold  text-2xl">+</button>
        </div>
        
      </div>
    </div>
  );
};

export default CartItem;
