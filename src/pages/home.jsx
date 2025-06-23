import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Card from "../components/card";
import Menu from "../components/menu";
import Axios from "../controller/controller";
import { Bounce, toast } from "react-toastify";


export default function Home(){
  const [produtos,setProdutos] = useState([1,2,3,4,5])

  useEffect(()=>{
    Axios.get("/products").then(response=>{
      setProdutos(response.data)

    }).catch(error=>{

      toast.error("Credenciais erradas: "+error.getMessage,{
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
      <div className="flex">
        <Menu/>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 ml-5 mt-3">
          {
            produtos.map((produto, key)=>{
              return <Card produto={produto} key={key}/>
            })
          }
        </div>
      </div>
      <ToastContainer />
    </Layout>
  )

}