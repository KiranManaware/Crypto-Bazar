import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const {user}=useSelector(state=>state.auth)
  const { theme } = useSelector((state) => state.coins);
  const {cartItems}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  // Logout function
  const handleLogout=()=>{
    dispatch(logOutUser())
  }

  return (
    <nav
      className={
        theme
          ? "z-10 sticky w-full top-0 right-0 bg-gray-900   px-10  shadow-xl  border-b border-gray-800 py-5 flex item-center justify-between "
          : "z-10 sticky w-full top-0 right-0 px-10 bg-white  shadow border  py-5 flex item-center justify-between "
      }
    >
      <Link to={"/"} className="text-2xl font-bold text-blue-400 uppercase">
        <span className="text-green-400">crypto</span> - bazar
      </Link>
      <span>
        {user ? (
          <>
            <button onClick={handleLogout} className="bg-red-600 text-white  px-5 py-2 text-sm font-bold rounded-sm mx-3">
              Logout
            </button>
            <Link
              to={"/cart"}
              className="bg-blue-500 text-white px-5 py-2  text-sm font-bold rounded-sm mx-3"
            >
              Cart ({cartItems.length})
            </Link>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="bg-green-400 text-white px-5 py-2  text-sm font-bold rounded-sm mx-3"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="bg-green-400 text-white px-5 py-2  text-sm font-bold rounded-sm mx-3 fo"
            >
              Register
            </Link>
          </>
        )}
      </span>
    </nav>
  );
};

export default Navbar;
