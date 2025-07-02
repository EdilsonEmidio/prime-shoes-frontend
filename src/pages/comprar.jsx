import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";
import CardVariacao from "../components/cardVariacao";



export default function Comprar(){

  const [vari, setVari] = useState([])


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

    })
  },[])

  return(
    <Layout>
      <div>
        {
          vari.map((variacao)=>{
            return <CardVariacao key={variacao.id}/>
          })
        }
      </div>
    </Layout>
  )
}