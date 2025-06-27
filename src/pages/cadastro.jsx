import { Bounce, toast, ToastContainer } from "react-toastify";
import Axios from "../controller/controller";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../template/form";

export default function Cadastro(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    Axios.post("/users/register",{
      "name":name,
      "email":email,
      "password":password
    }).then(()=>{
      
      navigate("/login")

    }).catch((e)=>{
      
      toast.error("Credenciais erradas: "+e.message,{
        position: "top-right",
        autoClose: 5000,
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
    <Form title={"Cadastro"}>
      <label htmlFor="nome" className="floating-label">
        <input type="text" id="nome" placeholder="nome" className="input input-lg" 
          onChange={(e)=> setName(e.target.value)}/>
        <span>Nome</span>
      </label>

      <label htmlFor="email" className="floating-label">
        <input type="text" id="email" placeholder="Email" className="input input-lg" 
          onChange={(e)=> setEmail(e.target.value)}/>
        <span>E-mail</span>
      </label>
    
      <label htmlFor="senha" className="floating-label">
        <input type="text" id="senha" placeholder="Senha" className="input input-lg" 
          onChange={(e)=> setPassword(e.target.value)}/>
        <span>Senha</span>
      </label>
      <button className="btn btn-soft btn-primary" onClick={(e)=>handleSubmit(e)}>
        Confirmar
      </button>
      <button className="btn btn-link" onClick={()=>navigate("/login")}>Já tem uma conta?</button>
      <ToastContainer />
    </Form>
  )
}