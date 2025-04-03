import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Contact = () => {
    const { theme } = useSelector(state => state.coins)
  
  return (
   
      <div  className={theme?"w-full p-8 rounded-lg  bg-gradient-to-r from-gray-800 to-black":"w-full p-8 rounded-lg  "}>
       

        {/* Contact Info Section */}
        <div className="w-full flex flex-col justify-center">
          <h2 className="text-5xl text-center text-gray-500  font-bold mb-10">
            Contact <span className="text-[#ffde59]">Us</span>
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Get in touch! Whether you have a project idea, want to collaborate,
            or just wish to connect, feel free to reach out. I am always open to
            discussions about web development, UI/UX design, and technology. You
            can easily contact me via email, phone, or social media. Let’s
            create something amazing together
          </p>

          <div className=" flex flex-col space-y-4 items-center justigy-center ">
          <div className="flex items-center gap-3 border rounded-full px-10 py-3  text-gray-500 ">
            <p>9340551923</p>
          </div>
          <div className="flex items-center gap-3 border rounded-full px-10 py-3  text-gray-500">
            <p>kiranmanaware123@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 border rounded-full px-10 py-3 text-gray-500">
            <a
              href="https://www.linkedin.com/in/kiranmanaware2003"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-3 border rounded-full px-10 py-3  text-gray-500">
            <a
              href="https://www.instagram.com/kiranmanaware/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline"
            >
              Instagram Profile
            </a>
          </div>
          </div>
        </div>
      </div>

  );
};

export default Contact;