import React from 'react'
import { useSelector } from 'react-redux'
import sec1 from "../assets/section1.png";
import sec2 from "../assets/section2.png";
import about from "../assets/about.png";
import Contact from '../components/Contact';

const WelcomePage = () => {
  const { theme } = useSelector(state => state.coins)

  return (
    <div

      className={
        theme
          ? "mx-auto flex items-center justify-evenly flex-col  md:px-16 md:py-10 p-20 bg-gradient-to-r from-gray-800 to-black"
          : "mx-auto flex items-center justify-evenly flex-col  md:px-16 md:py-10 p-20 "
      }
    >
      {/* hero section */}
      <section className=' min-h-[90vh]  flex items-center justify-evenly flex-col'>
        <h1 className='text-7xl   tracking-wide font-bold text-gray-500 mid-text-center text-center '>Welcome to the Crypto Bazar</h1>
        <p className='text-center text-gray-500 text-lg'>Welcome to Crypto Bazaar, a modern and intuitive cryptocurrency tracking platform designed to provide real-time market insights, trending coins, and detailed information on various cryptocurrencies. Whether you are a crypto enthusiast, investor, or beginner, this platform offers a seamless experience to search, explore, and manage your favorite coins. With secure authentication, a user-friendly interface built using React and Tailwind CSS, and real-time data fetched via APIs, Crypto Bazaar ensures that you stay updated with the latest crypto trends. Get started today and dive into the world of digital assets with ease!The cryptocurrency market has experienced exponential growth, making it essential for investors and enthusiasts to have access to real-time data and insights. Crypto Bazaar is a web-based platform designed to provide users with up-to-date information on various cryptocurrencies, including their prices, trends, and detailed specifications. Users can explore trending coins, search for specific cryptocurrencies, and manage their favourite assets by adding them to a personalized cart. To ensure security and personalized access, the platform requires users to register and log in before viewing in-depth coin details. Built using React, Tailwind CSS, and JavaScript, Crypto Bazaar integrates APIs with Axios to fetch real-time market data while utilizing protected routes for secure navigation. With an intuitive UI, interactive notifications, and seamless data management, Crypto Bazaar aims to enhance the crypto-tracking experience for both beginners and experienced traders.</p>
        <button className='uppercase tracking-widest text-gray-500 border border-gray-300 p-3 w-1/2 text-lg'>the future of money</button>
      </section>

      {/* section 2 */}
      <section className=' min-h-[80vh]   flex flex-col  md:flex-row'>
        <div className='md:w-1/2 w-full flex items-center justify-center'>
          <img src={sec1} className=' w-full' alt="" />
        </div>
        <div className='md:w-1/2  md-full flex flex-col md:items-start items-center justify-center'>
          <h1 className='text-5xl my-5 uppercase  tracking-wide font-bold text-gray-600 '>What is <br /> Cryptocurrency?</h1>
          <button className='my-3 bg-[#ffde59] md:w-1/2 w-full p-3 text-black font-bold text-lg  rounded-full '>The Basics of Digital Currency</button>
          <p className='text-gray-500 text-sm'>Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates on a decentralized system, typically based on blockchain technology. Unlike traditional currencies issued by governments (like INR, USD, or EUR), cryptocurrencies are not controlled by any central authority like a bank or government.</p>
          <p className='text-gray-500 my-3 text-sm'>As the adoption of cryptocurrencies grows, industries such as finance, gaming, and even real estate are exploring their potential for secure and efficient transactions. However, due to regulatory concerns and market volatility, it is crucial for users to research and understand the risks before investing or using digital currencies.</p>
        </div>
      </section>
      {/* SECTION 3 */}
      <section className=" min-h-[80vh] w-full grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rowa-2 gap-4 p-4">
        <div className=" p-10 flex items-center justify-center rounded-xl bg-[#ffde59] text-black font-bold text-3xl uppercase">Payments</div>
        <div className=" p-6 text-white text-center col-span-2">
          <h1 className='text-5xl my-5 uppercase  tracking-wide font-bold text-gray-600'>Cryptocurrency Use Cases</h1>
          <button className='my-3 bg-[#ffde59] w-1/2  p-3 text-lg text-black font-bold  rounded-full '>Beyond Digital Money</button>

        </div>
        <div className="p-10 flex items-center justify-center rounded-xl bg-[#ffde59] text-black font-bold text-3xl uppercase">smart contracts</div>
        <div className=" flex items-center justify-center rounded-xl text-[#ffde59] border border-[#ffde59] text-gray-600 font-bold  text-3xl uppercase">Investment</div>
        <div className="p-6 text-white text-center col-span-2">
          <img src={sec2} className='w-full ' alt="" />
        </div>
        <div className=" flex items-center justify-center rounded-xl text-[#ffde59] text-gray-600  border border-[#ffde59] font-bold text-center text-3xl uppercase">Decentralized Finance (DeFi)</div>
  
      </section >
      {/* section 4 */}
      <section className=' min-h-[80vh]   flex flex-col  md:flex-row'>
        <div className='md:w-1/2 w-full flex items-center justify-center'>
          <img src={about} className=' w-full' alt="" />
        </div>
        <div className='md:w-1/2  md-full flex flex-col md:items-start items-center justify-center'>
          <button className='my-10 bg-[#ffde59]  w-full p-3 text-black font-bold text-lg  rounded-full uppercase '>About us</button>
          <p className='text-gray-500 text-sm'>Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates on a decentralized system, typically based on blockchain technology. Unlike traditional currencies issued by governments (like INR, USD, or EUR), cryptocurrencies are not controlled by any central authority like a bank or government.</p>
          <p className='text-gray-500 my-3 text-sm'>As the adoption of cryptocurrencies grows, industries such as finance, gaming, and even real estate are exploring their potential for secure and efficient transactions. However, due to regulatory concerns and market volatility, it is crucial for users to research and understand the risks before investing or using digital currencies.</p>
        </div>
      </section>
      {/* Contact us */}
      <Contact/>

    </div >
  )
}

export default WelcomePage
