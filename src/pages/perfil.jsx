import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";
import { Bounce, toast, ToastContainer } from "react-toastify";
import axios from "../controller/controller";


export default function Perfil(){

  const [perfil, setPerfil] = useState(
    {
      "city":"",
      "complement":"",
      "neighborhood":'',
      "number":"",
      "state":"",
      "street":"",
      "zipcode":"",
      "user":{
        "name":"",
        "email":"",
        "password":"",
        "role":""
      }
    }
  )
  const mudarUser = (nome, value)=>{
    setPerfil(prevPerfil => ({
      ...prevPerfil,
    user: {
      ...prevPerfil.user,
      [nome]: value
    }
    }));
  }
  const mudarendereco = (nome, value)=>{
    
    setPerfil(prevPerfil => ({
      ...prevPerfil,
      [nome]:value
    }));
  }
  const atualizarUser = (e)=>{
    e.preventDefault()
    
    axios.put("/users",{
      "id":perfil.user.id,
      "name":perfil.user.name,
      "email":perfil.user.email,
      "password":perfil.user.password,
      "role":perfil.user.role,
    },{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    })
    .then(response=>{
      toast.info("Usuario atualizado com sucesso",{
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
    .catch(error=>{

    })
  }
  const atualizarEndereco = (e)=>{
    e.preventDefault()
    
    axios.post("/address",{
      "user":perfil.user.id,
      "zipcode":perfil.zipcode,
      "city":perfil.city,
      "complement":perfil.complement,
      "neighborhood":perfil.neighborhood,
      "number":perfil.number,
      "state":perfil.state,
      "street":perfil.street,
    },{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    })
    .then(response=>{
      toast.info("Endereço atualizado com sucesso",{
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
    .catch(error=>{
      
    })
  }

  useEffect(()=>{
    Axios.post("/address/find",
      {"email":localStorage.getItem("email")},{
        headers:{
          Authorization:"Bearer "+localStorage.getItem("token")
        }
      })
    .then(response=>{
      setPerfil(response.data)
      console.log(response.data)
    })
    .catch(error=>{
      toast.error("Impossivel acessar suas informações: "+error.message,{
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

  return(
    <Layout>
      <div className="grid grid-cols-1 text-center justify-items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h1 className="text-xl">Detalhes do Usuario</h1>

          <label className="label">Nome</label>
          <input type="text" id="name" className="input" value={perfil.user.name}
            onChange={(e)=>mudarUser(e.target.id, e.target.value)} />

          <label className="label">Email</label>
          <input type="email" id="email" className="input" value={perfil.user.email} 
            onChange={(e)=>mudarUser(e.target.id, e.target.value)}/>

          <label className="label">Senha</label>
          <input type="password" id="password" className="input"
            onChange={(e)=>mudarUser(e.target.id, e.target.value)}/>
          
          <label className="label">Seja um Vendedor</label>
          <input type="checkbox" id="role" value={"SALLER"==perfil.user.role?"BUYER":"SALLER"} className="checkbox" 
          checked={perfil.user.role=="SALLER"?true:false}
            onChange={(e)=>mudarUser(e.target.id, e.target.value)}/>
            
          <button className="btn btn-success" onClick={(e)=>atualizarUser(e)}>Atualizar</button>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h1 className="text-xl">Detalhes do Endereço</h1>

          <label className="label">Cidade</label>
          <input type="text" id="city" className="input" value={perfil.city}
            onChange={(e)=>mudarendereco(e.target.id, e.target.value)} />

          <label className="label">Complemento</label>
          <input type="text" id="complement" className="input" value={perfil.complement} 
            onChange={(e)=>mudarendereco(e.target.id, e.target.value)}/>

          <label className="label">Bairro</label>
          <input type="text" id="neighborhood" className="input"
            value={perfil.neighborhood}
            onChange={(e)=>mudarendereco(e.target.id, e.target.value)}/>
          
          <label className="label">Numero</label>
          <input type="text" id="number" className="input"
            value={perfil.number}
            onChange={(e)=>mudarendereco(e.target.id, e.target.value)}/>
          
          <label className="label">Estado</label>
          <input type="text" id="state" className="input"
            value={perfil.state}
            onChange={(e)=>mudarendereco(e.target.id, e.target.value)}/>
          
          <label className="label">Rua</label>
          <input type="text" id="street" className="input"
            value={perfil.street}
            onChange={(e)=>mudarendereco(e.target.id, e.target.value)}/>

          <label className="label">CEP</label>
          <input type="number" id="zipcode" className="input"
            value={perfil.zipcode}
            onChange={(e)=>mudarendereco(e.target.id, e.target.value)}/>
            
          <button className="btn btn-success" onClick={(e)=>atualizarEndereco(e)}>Atualizar</button>
        </fieldset>
      </div>
      <ToastContainer />
    </Layout>
  )
}