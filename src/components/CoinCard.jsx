import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <div className="border rounded-md border-gray-600 flex  flex-col items-center  p-4  ">
      <img className="h-24 m-5 mt-10" src={coin?.large} alt="" />
      <h2
        className={
          coin?.name.length > 20
            ? "text-gray-600 text-center font-bold text-lg "
            : "text-gray-600 text-center font-bold text-4xl "
        }
      >
        {coin?.name}
      </h2>
      <h2 className="text-gray-600 font-bold text-3xl my-3 ">
        Symbol : {coin?.symbol}
      </h2>
      <Link to={`/coin/${coin?.id}`} className="text-center md:w-1/2 py-3 my-5  hover:bg-green-600 duration-200 w-full bg-green-500 text-white font-bold text-xl rounded-sm">
        View Coin
      </Link>
    </div>
  );
};

export default CoinCard;
