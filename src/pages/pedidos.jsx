import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";
import CardPedido from './../components/cardPedido';



export default function Pedidos(){

	const [pedidos, setPedidos] = useState([])

	useEffect(()=>{

		Axios.get("/orders/user/"+localStorage.getItem("email")
			,{
				headers:{
					Authorization:"Bearer "+localStorage.getItem("token")
				}
			})
			.then(response=>{
				//setPedidos(response.data)
				console.log(response)
			})
			.catch(error=>{
				console.log(error)
			})

	},[])
	return(
		<Layout>
			<div className="grid grid-cols-1 text-center justify-items-center">
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h1 className="text-xl">Pedidos</h1>

          {
            pedidos.map((pedido)=>{
              return <CardPedido key={pedido.id} pedido={pedido}/>
            })
          }
          
        </fieldset>
			</div>
		</Layout>
	)

}