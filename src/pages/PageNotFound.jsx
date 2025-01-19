import React from 'react'
import { useSelector } from 'react-redux';

const PageNotFound = () => {
  const{theme}=useSelector(state=>state.coins)
  return (
    <div
      className={
        theme
          ? "mx-auto min-h-[90vh]  md:px-16 md:py-10 px-8 py-20  bg-gray-900 "
          : "mx-auto min-h-[90vh]   md:px-16 md:py-10 px-8 py-20 "
      }
    >
      <h1 className="text-center text-5xl font-bold text-red-600 my-10">Page Not Found</h1>
    </div>
  );
}

export default PageNotFound
