import React, { useEffect, useState } from "react";
import Img from "../assets/Login.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
const Register = () => {
  const { theme } = useSelector((state) => state.coins);
  const { isLoading, isError, message, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // state for formdata
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  // de-structure formData
  const { name, email, password, password2 } = formData;
  // function for set the formdata
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("password mismatched", { position: "top-center" });
    } else {
      dispatch(registerUser(formData));
      setFormData({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/login");
    }
    if (isError && message) {
      toast.error(message, { position: "top-center", theme: "dark" });
    }
  }, [isError, message, user]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div
      className={
        theme ? " min:h-[700px]  px-10  bg-gray-900 " : " min:h-[660px] px-10"
      }
    >
      <div
        className={
          theme
            ? " md:px-20 md:py-8 py-20 mx-auto container border border-gray-900 bg-gray-900"
            : " md:px-20 md:py-8 py-20 mx-auto container"
        }
      >
        <div
          className={
            theme
              ? "shadow-3xl border  border-gray-600  rounded-sm p-5 md:pd-5 pb-20  flex flex-col md:flex-row items-center justify-between"
              : "shadow border  rounded-sm p-4  md:pd-5 pb-20 flex flex-col md:flex-row items-center justify-between"
          }
        >
          <div className=" w-full md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-600 my-3 uppercase ">
              Register Here
            </h1>
            <p className="text-gray-400 text-sm my-4">
              Kindley Enter Your Email Id and Password
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
              className={theme?"text-gray-400   p-3 border-2 border-gray-600 my-3 rounded-sm bg-gray-900  ":"text-gray-400  p-3 border-2 border-gray-300 my-3 rounded-sm   "}
              type="text"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={handleChange}
              />
              <input
              className={theme?"text-gray-400   p-3 border-2 border-gray-600 my-3 rounded-sm bg-gray-900  ":"text-gray-400  p-3 border-2 border-gray-300 my-3 rounded-sm   "}
              type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={handleChange} 
              />
              <input
              className={theme?"text-gray-400   p-3 border-2 border-gray-600 my-3 rounded-sm bg-gray-900  ":"text-gray-400  p-3 border-2 border-gray-300 my-3 rounded-sm   "}
              type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <input
              className={theme?"text-gray-400   p-3 border-2 border-gray-600 my-3 rounded-sm bg-gray-900  ":"text-gray-400  p-3 border-2 border-gray-300 my-3 rounded-sm   "}
              type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
              <button className="text-white font-bold  my-3 text-xl w-1/2 bg-teal-500 py-3 rounded-sm hover:bg-teal-600 duration-200">
                Sign Up
              </button>
            </form>
          </div>
          <div className=" w-1/2 md:block hidden">
            <img className="h-96 " src={Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
