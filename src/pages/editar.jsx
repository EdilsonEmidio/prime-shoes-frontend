import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";
import CardProduto from "../components/cardProduto";
import CardVariacao from "../components/cardVariacao";





export default function Editar(){

  const [variacao, setVariacao] = useState()
  const [produto, setProduto] = useState({})
  const [variacoes, setVariacoes] = useState([])

  useEffect(()=>{
    const param = new URLSearchParams(window.location.search)
    setVariacao({"product":param.get("id")})

    Axios.get("/products/variation/"+param.get("id"),{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    })
    .then(response=>{
      console.log(response)
      setVariacoes(response.data)
      setProduto(response.data[0].product)
    }).catch(error=>{
      console.log(error)
    })

  },[])

  const mudar = (name, value)=>{
    setProduto(prevProduto=>({
      ...prevProduto,
      [name]:value
    })
    )
  }
  const enviarVariacao = (e)=>{
    e.preventDefault()

    Axios.post("/products/variation",variacao,{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(response=>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
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

          <label className="label">Preço</label>
          <input type="number" onChange={(e)=>mudar(e.target.id, e.target.value)} id="stock" className="input" placeholder="preço" />
          
          <button type="submit" onClick={(e)=>enviarVariacao(e)} className="btn btn-accent mt-5">Publicar</button>
        </fieldset>
      </div>
    </Layout>
  )
}