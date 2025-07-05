import { useEffect, useState } from "react"
import Axios from "../controller/controller"
import { useNavigate } from "react-router-dom"


export default function CardVariacaoCompra({variacao}){

  const navigate = useNavigate()

  const carrinhar = ()=>{
    Axios.post("/carts/item",{
        "user":localStorage.getItem("id"),
        "productVariation":variacao.id,
        "quantity":1
      },{
        headers:{
          Authorization:"Bearer "+localStorage.getItem("token")
        }
    }).then(response=>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
    })
  }

  const comprar = ()=>{
    Axios.post("/carts/item",{
        "user":localStorage.getItem("id"),
        "productVariation":variacao.id,
        "quantity":1
      },{
        headers:{
          Authorization:"Bearer "+localStorage.getItem("token")
        }
    }).then(response=>{
      navigate("/carrinho")
    }).catch(error=>{
      console.log(error)
    })
  }

  return(
    <div className="card bg-base-300 card-md h-fit shadow-sm p-2">
      <div className="card-body">
        <h1 className="card-title">Cor: {variacao.color}</h1>
        <h1>Tamanho: {variacao.size}</h1>
        <h1>Estoque: {variacao.stock}</h1>
      </div>
      <button onClick={()=>comprar()} className="btn btn-soft btn-accent mb-2">Comprar</button>
      <button onClick={()=>carrinhar()} className="btn btn-soft btn-warning">Adicionar ao Carrinho</button>
    </div>
  )
}