import { useNavigate } from "react-router-dom"
import Axios from "../controller/controller"
import { Bounce, toast } from "react-toastify";


export default function CardCarrinho({produto}){
  

  const remover = ()=>{
    Axios.delete("/carts/item/"+produto.id,{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(response=>{
      toast.info("Item removido com sucesso",{
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
    }).catch(error=>{
      toast.error("Problema para remover item: "+error.message,{
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
  }

  return(
    <div className={`card bg-base-300 card-md h-fit shadow-sm $`}>
      <figure className="bg-emerald-100 m-1">
        <img className=""
          src={produto.productVariation.product.imageUrl}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{produto.productVariation.product.name}</h1>
        <h2>Quantidade: {produto.quantity}</h2>
        <h2>Preço: {produto.subtotal}</h2>
        <h2>Cor: {produto.productVariation.color}</h2>
        <h2>Tamanho: {produto.productVariation.size}</h2>
      </div>
      <button className="btn btn-soft btn-error m-1" onClick={()=>remover()}>Deletar</button>
    </div>
  )
}