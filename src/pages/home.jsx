import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Card from "../components/card";
import Menu from "../components/menu";
import Axios from "../controller/controller";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosHeaders } from "axios";


export default function Home(){
  const [produtos,setProdutos] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{

    Axios.get("/products",{
      headers:{
          Authorization:"Bearer "+localStorage.getItem("token")
        }
    }).then(response=>{
      setProdutos(response.data)
      console.log(response.data)
    }).catch(error=>{

      toast.error("Falha ao buscar produtos: "+error.message,{
        position: "top-right",
        autoClose: 1000,
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
      <div className="flex">
        <Menu/>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 ml-5 mt-3">
          {
            
            produtos.map((produto, key)=>{
              return <Card comprar={true} produto={produto} key={key}/>
            })
          }
        </div>
      </div>
      <ToastContainer />
    </Layout>
  )

}