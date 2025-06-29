import { use, useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";



export default function Vendas(){
  const [produto,setProduto] = useState({})

  useEffect(()=>{
    Axios.post("/users/find",{"email":localStorage.getItem("email")},{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(response=>{
      setProduto({"user":response.data.id})
    }).catch(error=>{
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
  
  const mudar = (name, value)=>{
    setProduto(prevProduto=>({
      ...prevProduto,
      [name]:value
    })
    )
  }
  const enviar = (e)=>{
    e.preventDefault()
    console.log(produto)
    Axios.post("/products",produto,{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(response=>{

    }).catch(error=>{

    })
  }
  
	return(
		<Layout>
      <div className="grid grid-cols-2 justify-around">
        <fieldset className="fieldset bg-base-200 w-xs  p-4">
          <h1 className="text-center text-xl">Descreva seu produto</h1>

          <label className="label">Nome</label>
          <input type="text" onChange={(e)=>mudar(e.target.id, e.target.value)} id="name" className="input" placeholder="Nome do produto" />

          <label className="label">Descricao</label>
          <input type="text" onChange={(e)=>mudar(e.target.id, e.target.value)} id="description" className="input" placeholder="Descricao do produto" />

          <label className="label">Preço</label>
          <input type="number" onChange={(e)=>mudar(e.target.id, e.target.value)} id="price" className="input" placeholder="preço" />

          <label className="label">Categoria</label>
          <input type="text" onChange={(e)=>mudar(e.target.id, e.target.value)} id="category" className="input" placeholder="preço" />

          <label className="label">Marca</label>
          <input type="text" onChange={(e)=>mudar(e.target.id, e.target.value)} id="brand" className="input" placeholder="preço" />

          <label className="label">Imagem</label>
          <input type="file" onChange={(e)=>{mudar(e.target.id, e.target.files[0])}} id="imageUrl" className="file-input" />

          <button type="submit" onClick={(e)=>enviar(e)} className="btn btn-accent mt-5">Publicar</button>
        </fieldset>
        <div>
          <h1>Seus produtos</h1>

        </div>
      </div>
      
		</Layout>
	)
}