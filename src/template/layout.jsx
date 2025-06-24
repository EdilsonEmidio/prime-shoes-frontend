
import { useEffect } from "react"
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"

export default function Layout({children}){

  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login")
    }

  },[])
  
  
  return(
    <>
      <Navbar/>
      {children}
    </>
  )
}