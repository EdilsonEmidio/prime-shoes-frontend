

export default function Card({produto, comprar}){
  

  return(
    <div className="card bg-base-300 card-sm w-64 shadow-sm">
      <figure className="bg-emerald-100 m-1">
        <img className=""
          src={produto.imageUrl}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{produto.name}</h2>
        <p>Preço: {produto.price}</p>
        <p>{produto.description}</p>
        {comprar && <div className="card-actions justify-evenly">
          <button className="btn btn-sm btn-soft btn-info">Adicionar ao carrinho</button>
          <button className="btn btn-sm btn-soft btn-success">Comprar agora</button>
        </div>}
      </div>
    </div>
  )
}