import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CoinCard from '../components/CoinCard'
import { getSearchCoins } from '../features/coins/coinSlice'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Error from '../components/Error'

const SearchPage = () => {
  const {theme,coins,isLoading,isError,isSuccess,message}=useSelector(state=>state.coins)

  const dispatch=useDispatch();
  const {searchquery}=useParams();
  console.log(searchquery)
  useEffect(()=>{
    dispatch(getSearchCoins(searchquery))
  },[])


  if(isLoading){
     return <Loading/>
  }
  if(isError){
     return <Error/>
  }
  return (
    <div
      className={
        theme
          ? "mx-auto min-h-[90vh]  md:px-16 md:py-10 px-8 py-20  bg-gradient-to-r from-gray-800 to-black "
          : "mx-auto min-h-[90vh]   md:px-16 md:py-10 px-8 py-20 "
      }
    >
      <h1 className="text-5xl text-center my-3 font-black text-gray-500">
       Your Search
      </h1>

      <div className='my-3  my-5 p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
       {
        coins?.map((coin)=><CoinCard key={coin?.id} coin={coin} />)
       }
      </div>
      
      
    </div>
  )
}

export default SearchPage
