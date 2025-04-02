import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import BillCard from "../components/BillCard";

const Cart = () => {
  const { theme } = useSelector((state) => state.coins);
  const { cartItems } = useSelector((state) => state.cart);
  if (cartItems.length===0) {
    return (
      <div
        className={
          theme
            ? "mx-auto min-h-[90vh]  md:px-16 md:py-10 px-8 py-20  bg-gray-900 "
            : "mx-auto min-h-[90vh]  flex-col  md:px-16 md:py-10 px-8 py-20 "
        }
      >
       <div className="h1 my-10 text-gray-500 text-center text-3xl font-bold">No Items In Your Cart</div>
      </div>
    );
  }
  return (
    <div
      className={
        theme
          ? "mx-auto min-h-[90vh]  md:px-16 md:py-10 px-8 py-20 bg-gradient-to-r from-gray-800 to-black"
          : "mx-auto min-h-[90vh]  flex-col  md:px-16 md:py-10 px-8 py-20 "
      }
    >
      <div className="border border-gray-500 rounded-sm p-5 grid md:grid-cols-3 grid-cols-1 gap-4  ">
        <div className="border space-y-5 border-gray-500 rounded-md p-5 md:col-span-2 col-span-1 ">
          {cartItems.map((coin) => (
            <CartItem key={coin.id} coin={coin} />
          ))}
        </div>
        <BillCard />
      </div>
    </div>
  );
};

export default Cart;
