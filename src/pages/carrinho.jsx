import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";
import CardCarrinho from "../components/cardCarrinho";



export default function Carrinho(){

  const [items,setItems] = useState([])
  const [pagamento, setPagamento] = useState("PIX")

  useEffect(()=>{
    Axios.get("/carts/items/"+localStorage.getItem("id"),{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(response=>{
      setItems(response.data)
      console.log(response.data)

    }).catch(error=>{
      console.log(error)
    })
  },[])

  const comprar = ()=>{
    Axios.post("/orders",{
      "user":localStorage.getItem("id"),
      "paymentMethod":pagamento
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
	return(
		<Layout>

			<div className="p-5 bg-base-300">
        <h1 className="text-xl font-bold">Seu Carrinho</h1>
        <div className="flex gap-3">
          {
            items.map((item)=>{
              return <CardCarrinho key={item.id} produto={item} />
            })
          }
        </div>
        <div className="flex gap-5 mt-5">
          <h1 className="text-xl">Forma de pagamento</h1>
          <select className="select w-50" defaultValue="PIX" onChange={(e)=>setPagamento(e.target.value)}>
            <option value="PIX">PIX</option>
            <option value="CREDIT_CARD">CREDIT_CARD</option>
            <option value="DEBIT_CARD">DEBIT_CARD</option>
            <option value="DEPOSIT">DEPOSIT</option>
          </select>
          <button className="btn btn-soft btn-success" onClick={()=>comprar()}>Comprar</button>
        </div>
			</div>
		</Layout>
	)
}