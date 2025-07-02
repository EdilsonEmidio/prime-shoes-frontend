
import { useEffect } from "react"
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"

export default function Layout({children}){

  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login")
    }

  },[])
  
  
  return(
    <div className="h-screen">
      <Navbar/>
      {children}
      <ToastContainer />
    </div>
  )
}