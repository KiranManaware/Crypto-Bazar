import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {

  const [text,setText]=useState("");
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/coin/search/${text}`);
    setText("")
  }

  return (
    <>
      <h1 className="text-5xl text-center my-3 font-black text-gray-500">
        Search Any Crypto Coin{" "}
      </h1>
      <p className="text-gray-600 text-sm my-2">
        Get the latest updates related to any crypto currency
      </p>
      <form onSubmit={handleSubmit} className=" w-full flex md:flex-row flex-col md:items-center md:justify-center ">
        <input
          value={text}
          onChange={(e)=>setText(e.target.value)}
          className="md:w-2/4 border-2 w-full p-4 md:mr-3  my-3 rounded-sm placeholder:text-xl placeholder:font-bold focus:outline-green-500 "
          type="text"
          placeholder="Search"
        />
        <button className="md:w-1/4 w-full bg-green-500 md:ml-3 p-4  rounded-sm">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
