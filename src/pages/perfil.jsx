import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";
import { Bounce, toast, ToastContainer } from "react-toastify";



export default function Perfil(){

  const [perfil, setPerfil] = useState({})

  useEffect(()=>{
    Axios.post("/users/find", localStorage.getItem("token"))
    .then(response=>{
      setPerfil(response.data)
      console.log(response.data)
    })
    .catch(error=>{
      toast.error("Impossivel acessar suas informações: "+error.message,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    })
  },[])

  return(
    <Layout>
      <div>
        
      </div>
      <ToastContainer />
    </Layout>
  )
}