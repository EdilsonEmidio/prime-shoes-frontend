


export default function CardItem({produto}){
	return(
		<div className="card bg-base-100 w-96 shadow-sm">
			<div className="card-body">
				<img src={"../../public/"+produto.productVariation.product.imageUrl} alt="" />
				<h2 className="card-title">Nome: {produto.productVariation.product.name}</h2>
				<h2 className="card-title">Marca: {produto.productVariation.product.brand}</h2>
				<h2 className="card-title">Quantidade: {produto.quantity}</h2>
				<h2 className="card-title">Total: {produto.subtotal}</h2>
				<h2 className="card-title">Tamanho: {produto.productVariation.size}</h2>
				<h2 className="card-title">Cor: {produto.productVariation.color}</h2>
			</div>
		</div>
	)
}