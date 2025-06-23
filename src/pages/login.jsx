import { useState } from "react";
import Form from "../template/form";
import Axios from "../controller/controller";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";



export default function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault()

    Axios.post("/users/auth",{
      "email":email,
      "password":password
      
    }).then((response)=>{
      localStorage.setItem("token",response.data)
      navigate("/")

    }).catch((e)=>{
      toast.error("Credenciais erradas: "+e.getMessage,{
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
    <Form title={"Login"}>
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
      <button className="btn btn-link" onClick={()=>navigate("/Cadastro")}>Não tem uma conta?</button>
      <ToastContainer />
    </Form>
  )
}