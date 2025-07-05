


export default function CardPedido({pedido, passarId}){

	return(

		<div className="card bg-base-100 shadow-sm hover:cursor-pointer hover:bg-emerald-950"
		 onClick={()=>passarId(pedido.id)}>
			<div className="card-body">
				<h2 className="card-title">{pedido.status}</h2>
				<h2 className="card-title">{pedido.paymentMethod}</h2>
				<h2 className="card-title">{pedido.totalPrice}</h2>
			</div>
		</div>
	)
}