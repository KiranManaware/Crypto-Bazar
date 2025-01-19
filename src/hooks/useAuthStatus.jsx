import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useAuthStatus=()=>{
    const {user}=useSelector(state=>state.auth)

    const[loggedIn,setLogggedIn]=useState(false)
    const[checkStatus,setCheckStatus]=useState(true)

    useEffect(()=>{
        user?setLogggedIn(true):setLogggedIn(false)
        setCheckStatus(false)
    },[user])

    return {loggedIn,checkStatus};
}

export default useAuthStatus;