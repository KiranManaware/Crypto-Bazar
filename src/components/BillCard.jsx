import React from "react";
import { useSelector } from "react-redux";

const BillCard = () => {
    const{cartItems}=useSelector(state=>state.cart)
    const handleNavigate=()=>{
      navigate('/login')
    }
  return (
    <div className="border border-gray-400 rounded-md p-5 col-span-1 h-64 flex  space-y-3 flex-col ">
      <h1 className="text-gray-400 font-bold text-2xl text-center">
        Your Bill
      </h1>
      <h2 className="text-gray-400 font-semibold text-lg">Total Quantity : {cartItems.reduce((a,b)=>a+b.quantity,0)} </h2>
      <h2 className="text-gray-400 font-semibold text-3xl">Total Amount :{cartItems.reduce((a,c)=> a+c.market_data?.current_price?.inr,0)}</h2>
      <button className="w-full text-white text-center bg-blue-600 py-3 rounded-sm my-2 font-bold">
        Pay Now
      </button>
    </div>
  );
};

export default BillCard;
