import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";
import CardProduto from './../components/cardProduto';
import CardVariacaoCompra from "../components/cardVariacaoCompra";



export default function Comprar(){

  const [vari, setVari] = useState([])
  const [produto, setProduto] = useState({})
  const param = new URLSearchParams(window.location.search)

  useEffect(()=>{
    
    Axios.get("/carts/user/"+localStorage.getItem("id"),{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(response=>{
      //console.log(response)
    }).catch((error)=>{
      //console.log(error)
      Axios.post("/carts",
        {"user":localStorage.getItem("id")},
        {
          headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }
      })
    })

    Axios.get("/products/"+param.get("id"),{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(response=>{
      setProduto(response.data)
    }).catch(error=>{
      console.log(error)
    })
    
  },[])

  useEffect(()=>{
    const param = new URLSearchParams(window.location.search)
    Axios.get("/products/variation/"+param.get("id"),{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    })
    .then(response=>{
      setVari(response.data)
    }).catch(error=>{
      console.log(error)
    })
  },[])

  return(
    <Layout>
      <div className="ml-5 mt-5 flex">
        <div className="mr-10 w-xs">
          <h1 className="text-xl">O produto</h1>  
          <CardProduto produto={produto} clicavel={false}/>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-5">As variações do produto</h1>
          <div className="flex gap-3">
            {
              vari.map((variacao)=>{
                return <CardVariacaoCompra key={variacao.id} variacao={variacao}/>
              })
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}