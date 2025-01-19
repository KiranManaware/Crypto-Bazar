import React from "react";
import SearchForm from "../components/SearchForm";
import TrendingCoins from "../components/TrendingCoins";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const {theme}=useSelector(state=>state.coins)
  const {user}=useSelector(state=>state.auth)
  const navigate=useNavigate();
  if(!user){
    navigate('/login')
  }
  return (
    <div
      className={
        theme
          ? "mx-auto min-h-[90vh] flex items-center justify-center flex-col  md:px-16 md:py-10 p-20  bg-gray-900 "
          : "mx-auto min-h-[90vh] flex items-center justify-center flex-col  md:px-16 md:py-10 p-20 "
      }
    >
      <SearchForm /> 
      <TrendingCoins/>
      
      
    </div>
  );
};

export default Home;
