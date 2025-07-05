import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";
import CardProduto from "../components/cardProduto";
import CardVariacao from "../components/cardVariacao";
import { Bounce, toast } from "react-toastify";



export default function Editar(){

  const [variacao, setVariacao] = useState()
  const [produto, setProduto] = useState({})
  const [variacoes, setVariacoes] = useState([])
  const param = new URLSearchParams(window.location.search)

  useEffect(()=>{
    Axios.get("/products/"+param.get("id"),{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(response=>{
      setProduto(response.data)
    }).catch(error=>{
      console.log(error)
    })
  },[])

  useEffect(()=>{
    setVariacao({"product":param.get("id")})
    
    Axios.get("/products/variation/"+param.get("id"),{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    })
    .then(response=>{
      //console.log(response)
      setVariacoes(response.data)
    }).catch(error=>{
      //console.log(error)
    })

  },[])

  const mudar = (name, value)=>{
    setVariacao(prevProduto=>({
      ...prevProduto,
      [name]:value
    })
    )
  }
  const enviarVariacao = (e)=>{
    e.preventDefault()
    console.log(variacao)
    Axios.post("/products/variation",variacao,{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(response=>{
      toast.info("Produto cadastrado com sucesso",{
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
      toast.error("Problema para cadastrar produto: "+error.message,{
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
    <Layout>
      <div className="grid grid-cols-2">
        <div className="text-center flex">
          <div className="mr-10">
            <h1 className="text-xl">Seu produto</h1>
            <CardProduto produto={produto} clicavel={false}/>
          </div>
          <div>
            <h1 className="text-xl">Suas variações</h1>
            {
              variacoes.map((variacao)=>{
                return <CardVariacao key={variacao.id} variacao={variacao}/>
              })
            }
          </div>
        </div>
        <fieldset className="fieldset bg-base-200 w-xs p-4 rounded-xl">
          
          <h1 className="text-center text-xl">Faça sua variação</h1>
          <label className="label">Cor</label>
          <input type="text" onChange={(e)=>mudar(e.target.id, e.target.value)} id="color" className="input" placeholder="Nome do produto" />

          <label className="label">Tamanho</label>
          <input type="text" onChange={(e)=>mudar(e.target.id, e.target.value)} id="size" className="input" placeholder="Descricao do produto" />

          <label className="label">Estoque</label>
          <input type="number" onChange={(e)=>mudar(e.target.id, e.target.value)} id="stock" className="input" placeholder="Estoque do produto" />
          
          <button type="submit" onClick={(e)=>enviarVariacao(e)} className="btn btn-success mt-5">Publicar</button>
        </fieldset>
      </div>
    </Layout>
  )
}