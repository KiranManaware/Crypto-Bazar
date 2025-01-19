import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../features/cart/cartSlice';

const CartItem = ({coin}) => {
    const dispatch=useDispatch();
    const handleRemoveFromCart=(id)=>{
        dispatch(removeFromCart(id))
    }

    
  return (
    <div className="relative flex items-center  border border-gray-500 rounded-md p-8 ">
    <img className='h-28 shadow rounded-sm' src={coin?.image?.large} alt="" />
    <div className='text-white  mx-8'>
      <h1 className='text-gray-500 font-bold text-3xl'>{coin.name}</h1>
      <h2 className='text-gray-500 font-bold text-2xl'>Price : {coin?.market_data?.current_price?.inr} INR/-</h2>
      <h3 className='text-gray-500 font-bold text-xl'>Qty :  </h3>
    </div>
    <button onClick={()=>handleRemoveFromCart(coin.id)} className= 'md:absolute   shadow-lg md:right-8 md:bottom-8 py-2 rounded-sm text-white bg-red-600 text-center px-4 font-bold'>Remove</button>
</div>
  )
}

export default CartItem
