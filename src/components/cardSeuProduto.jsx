import { useNavigate } from "react-router-dom"
import Axios from "../controller/controller"


export default function CardSeuProduto({url, produto, clicavel}){
  
  const navigate = useNavigate()
  const vai = ()=>{
    if(clicavel)navigate(url+"?id="+produto.id)
  }
  const deletar = ()=>{
    Axios.delete("/products/"+produto.id,{
      headers:{
        Authorization:"Bearer "+localStorage.getItem()
      }
    })
    .then(response=>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
    })
  }
  return(
    <div className="">
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
      <button className="btn btn-soft btn-error w-full" onClick={()=>deletar()}>Deletar</button>
    </div>  
  )
}