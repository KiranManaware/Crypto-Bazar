import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingCoins } from "../features/coins/coinSlice";
import { Link, useParams } from "react-router-dom";

const TrendingCoins = () => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, trendingCoins } = useSelector(
    (state) => state.coins
  );
  useEffect(() => {
    dispatch(getTrendingCoins());
  },[]);
 
  if (isLoading) {
    return (
      <>
        <h2 className="text-center my-5 text-2xl text-gray-400 font-semibold ">
          Getting Tranding Coins
        </h2>
        <h2 className="text-center text-2xl text-gray-400 font-semibold ">
          Please Wait...
        </h2>
      </>
    );
  }

  return (
    <div className="w-3/4 my-5 text-center">
      <h2 className="text-center text-2xl text-gray-400 font-semibold ">
        Tranding Coins
      </h2>
      <div className="my-2 flex flex-wrap items-center justify-center">
        {trendingCoins?.map((coin) => {
          return (
              <Link to={`/coin/${coin?.item?.id}`}  key={coin?.item?.id} className="p-2 hover:bg-gray-600 durationn-200 font-semibold bg-gray-400 text-lg rounded-md m-2">
              {coin?.item?.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingCoins;
