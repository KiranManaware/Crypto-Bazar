import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSpecificCoin } from "../features/coins/coinSlice";
import { addToCart } from "../features/cart/cartSlice";
import Loading from "../components/Loading";
import Error from "../components/Error";

const CoinPage = () => {
  const navigate=useNavigate();
  const { theme, coin, isLoading, isError } = useSelector(
    (state) => state.coins
  );

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSpecificCoin(id));
  }, []);

  const handleAddToCart=(coin)=>{
    dispatch(addToCart(coin))
  }


  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error/>
  }
  return (
    <div
      className={
        theme
          ? "mx-auto min-h-[90vh]   md:px-20 md:py-10 px-8 py-20  bg-gradient-to-r from-gray-800 to-black"
          : "mx-auto min-h-[90vh]   md:px-20 md:py-10 px-8 py-20 "
      }
    >
      <div className={theme?" border border-gray-700 rounded-md p-5":"shadow-xl   rounded-md p-5 "}>
        <div className="flex items-center md:flex-row flex-col   md:space-x-20">
          <img src={coin?.image?.large} className="h-56 m-10" alt="" />
          <div className="flex md:items-start items-center   flex-col">
            <h1 className="my-2 text-gray-600 text-4xl font-bold">{coin?.name}</h1>
            <h1 className="my-2 text-gray-600 text-4xl font-bold">{coin?.symbol}</h1>
            <h1 className="my-2 text-center text-green-600 text-4xl font-bold">Price : {coin?.market_data?.current_price?.inr} INR/-</h1>
            <button onClick={()=>handleAddToCart(coin)} className="p-3 bg-[#ffde59] md:w-1/2 w-full rounded-md my-3 text-black  font-bold text-xl">Add to Cart </button>
          </div>
        </div>
        <div
            dangerouslySetInnerHTML={{ __html: coin?.description?.en }}
            className="text-gray-600 my-5 text-sm"
          ></div>
          <a className="" href={coin?.links?.homepage} target="_blank">
           <p className="p-3 bg-blue-500 w-full text-center text-white  font-bold text-2xl rounded-md my-3"> Official Link</p>
          </a>
      </div>
    </div>
  );
};

export default CoinPage;
