import React, { useEffect, useState } from "react";
import Img from "../assets/Login.png";
import { useDispatch, useSelector } from "react-redux";
import Theme from "../components/Theme";
import { loginUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
const Login = () => {
  const { theme } = useSelector((state) => state.coins);
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, message,user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  // state for formdata
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // de-structure formData
  const { email, password } = formData;
  // function for set the formdata
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    setFormData({
      email: "",
      password: "",
    });
  };
  
  useEffect(() => {
    if(user){
      navigate('/')
    }
    if(isError && message){
      toast.error(message,{position:"top-center",theme:"dark"})
    }
  }, [message, isError,user]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className={theme ? " h-[656px] p-20  bg-gray-900 " : " min:h-[658px] p-20"}
    >
      <div
        className={
          theme
            ? "border border-gray-600 shadow-2xl rounded-sm p-6  md:pd-5 pb-20 flex flex-col md:flex-row items-center justify-between"
            : "shadow border   rounded-sm p-4  md:pd-5 pb-20 flex flex-col md:flex-row items-center justify-between"
        }
      >
        <div className=" w-full md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-600 my-3 uppercase">
            Login
          </h1>
          <p className="text-gray-400 text-sm my-4">
            Kindley Enter Your Email Id and Password
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              className={theme?"p-3 border-2 border-gray-600 my-3 rounded-sm bg-gray-900  text-gray-400 ":" text-gray-400 p-3 border-2 border-gray-300 my-3 rounded-sm   "}
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              className={theme?"p-3 border-2 border-gray-600 my-3 rounded-sm bg-gray-900 text-gray-400  ":"text-gray-400 p-3 border-2 border-gray-300 my-3 rounded-sm   "}
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button className="text-white font-bold my-3 text-xl w-1/2 bg-teal-500 py-3 rounded-sm hover:bg-teal-600 duration-200">
              Sign In
            </button>
          </form>
        </div>
        <div className=" w-1/2  lg:block hidden">
          <img className="h-96 " src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
