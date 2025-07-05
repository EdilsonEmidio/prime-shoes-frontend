import { useNavigate } from "react-router-dom"


export default function CardProduto({url, produto, clicavel}){
  
  const navigate = useNavigate()
  const vai = ()=>{
    if(clicavel)navigate(url+"?id="+produto.id)
  }
  return(
    <div className={`${clicavel ? 'cursor-pointer hover:bg-emerald-950' : ''} card bg-base-300 card-md h-fit shadow-sm $`}
      onClick={()=>vai() }>
      <figure className="bg-emerald-100 m-1">
        <img className=""
          src={"../../public/"+produto.image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{produto.name}</h1>
        <h2>Preço: {produto.price}</h2>
        <h2>Marca: {produto.brand}</h2>
        <h2>Categoria: {produto.category}</h2>
        
        <p>{produto.description}</p>

      </div>
    </div>
  )
}