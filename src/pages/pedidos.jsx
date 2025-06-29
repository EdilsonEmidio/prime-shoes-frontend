import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";
import CardPedido from './../components/cardPedido';
import Card from "./../components/card";


export default function Pedidos(){

	const [pedidos, setPedidos] = useState([])
  const [items, setItems] = useState([])

	useEffect(()=>{

		Axios.get("/orders/user/"+localStorage.getItem("email")
			,{
				headers:{
					Authorization:"Bearer "+localStorage.getItem("token")
				}
			})
			.then(response=>{
				setPedidos(response.data)
			})
			.catch(error=>{
				console.log(error)
			})

	},[])
	return(
		<Layout>
			<div className="grid grid-cols-2 text-center justify-items-center">
				<div className="bg-base-200 rounded-box w-full p-4">
          <h1 className="text-xl">Pedidos</h1>

          {
            pedidos.map((pedido)=>{
              return <CardPedido key={pedido.id} pedido={pedido}/>
            })
          }
          
        </div>
        <div className="bg-base-200 border-base-300 rounded-box w-full p-4">
          <h1 className="text-xl">Detalhes do pedido</h1>
          <div>
            {
              items.map((item)=>{
                return <Card comprar={false} produto={item}/>
              })
            }
          </div>
        </div>
			</div>
		</Layout>
	)

}