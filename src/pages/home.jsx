import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Menu from "../components/menu";
import Axios from "../controller/controller";
import { Bounce, toast, ToastContainer } from "react-toastify";
import CardProduto from "../components/cardProduto";


export default function Home(){
  const [produtos,setProdutos] = useState([])

  useEffect(()=>{

    Axios.post("/users/find",
      {"email":localStorage.getItem("email")},{
        headers:{
          Authorization:"Bearer "+localStorage.getItem("token")
        }
      }).then(response=>{
        localStorage.setItem("id",response.data.id)
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
      <div className="flex h-full">
        <Menu/>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 ml-5 mt-3">
          {
            
            produtos.map((produto)=>{
              return <CardProduto url={"/comprar/produto"} clicavel={true} produto={produto} key={produto.id}/>
            })
          }
        </div>
      </div>
    </Layout>
  )

}