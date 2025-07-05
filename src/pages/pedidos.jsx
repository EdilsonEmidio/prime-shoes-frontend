import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";
import CardPedido from './../components/cardPedido';
import { Bounce, toast } from "react-toastify";
import CardItem from "../components/cardItem";


export default function Pedidos(){

	const [pedidos, setPedidos] = useState([])
 	const [items, setItems] = useState([])
	const [id, setId] = useState();

	useEffect(()=>{
		Axios.get("/orders/user/"+localStorage.getItem("email")
			,{
				headers:{
					Authorization:"Bearer "+localStorage.getItem("token")
				}
			})
			.then(response=>{
				setPedidos(response.data)
				console.log(response.data)
			})
			.catch(error=>{
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

	useEffect(()=>{
		
		Axios.get("/orders/"+id,{
				headers:{
					Authorization:"Bearer "+localStorage.getItem("token")
				}
		}).then(response=>{
			setItems(response.data)
			console.log(response.data)
		}).catch(error=>{
			console.log(error)
		})
	},[id])
	return(
		<Layout>
			<div className="grid grid-cols-2 text-center gap-5 justify-items-center">
				<div className="bg-base-200 rounded-box w-full p-4">
          <h1 className="text-xl">Pedidos</h1>

          {
            pedidos.map((pedido)=>{
              return <CardPedido key={pedido.id} pedido={pedido} passarId={setId}/>
            })
          }
          
        </div>
        <div className="bg-base-200 border-base-300 rounded-box w-full p-4">
          <h1 className="text-xl">Itens do pedido</h1>
          <div>
            {
              items.map((item)=>{
                return <CardItem key={item.id} produto={item}/>
              })
            }
          </div>
        </div>
			</div>
		</Layout>
	)

}