import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";
import { Bounce,} from "react-toastify";
import Card from "../components/cardProduto";
import CardProduto from "../components/cardProduto";
import { useNavigate } from "react-router-dom";



export default function Vendas(){
  const [produto,setProduto] = useState({"user":localStorage.getItem("id")})
  const [produtos, setProdutos] = useState([])
  const navigate = useNavigate()
 
  const mudar = (name, value)=>{
    setProduto(prevProduto=>({
      ...prevProduto,
      [name]:value
    })
    )
  }
  const enviarProduto = (e)=>{
    e.preventDefault()
    console.log(produto)
    Axios.post("/products",produto,{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(response=>{
      console.log(response.data) 
      navigate

    }).catch(error=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    Axios.get("/products/user/"+localStorage.getItem("id"),{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(response=>{
      setProdutos(response.data)
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })
  },[])

	return(
		<Layout>
      <div className="flex mt-2">
        <fieldset className="fieldset bg-base-200 w-xs p-4 rounded-xl">
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
          {/*
          <label className="label">Imagem</label>
          <input type="file" onChange={(e)=>{mudar(e.target.id, e.target.files[0])}} id="image" className="file-input" />
          */}
          <button type="submit" onClick={(e)=>enviarProduto(e)} className="btn btn-accent mt-5">Publicar</button>
        </fieldset>
        
        <div className="ml-5 w-full">
          <h1>Seus produtos</h1>
          <div className="flex gap-5">
            {
              produtos.map((produto)=>{
                return <CardProduto url={"/editar/produto"} clicavel={true} key={produto.id} produto={produto} />
              })
            }
          </div>
        </div>
      </div>
      
		</Layout>
	)
}