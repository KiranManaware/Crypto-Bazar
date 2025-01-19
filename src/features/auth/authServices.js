import axios from "axios"

const register=async(formData)=>{
    const response=await axios.post("https://authenticationeskills.vercel.app/api/user/register",formData);
    localStorage.setItem("user",JSON.stringify(response.data))
    return response.data
}
const login =async(formData)=>{
    const response=await axios.post("https://authenticationeskills.vercel.app/api/user/login",formData)
    localStorage.setItem("user",JSON.stringify(response.data))
    return response.data
}

const authServices={register,login};
export default authServices