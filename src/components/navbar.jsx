import { useNavigate } from "react-router-dom";
import carrinho from "../assets/carrinho.png"
import perfil from "../assets/perfil.png"
import tenis from "../assets/tenis.png"
import selling from "../assets/selling.png"
import { useEffect, useState } from "react";
import Axios from "../controller/controller";


export default function Navbar({items= 0, total= 0}){

  const navigate = useNavigate()
  const [user,setUser] = useState({"role":"BUYER"})

  const logout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("email")
    navigate("/login")
  }

  useEffect(()=>{
    Axios.post("/users/find",
      {"email":localStorage.getItem("email")},
      {
        headers:{
          Authorization: "Bearer "+localStorage.getItem("token")
        }
      }).then(response=>{
        setUser(response.data)
      }).catch(error=>{

      })
  },[])

  return(

    <div className="navbar bg-emerald-800 shadow-sm p-1">
      <div className="flex p-0 w-full justify-around">
        <div className="flex px-2 hover:bg-emerald-950 rounded-md cursor-pointer" onClick={()=> navigate("/")}>
          <img src={tenis} alt="icone de tenis" className="w-15"/>

          <h1 className="text-3xl ml-3 self-center font-bold " >Prime Shoes</h1>
        </div>


        <div className="flex self-center">

          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-2 hover:bg-emerald-950 rounded-md cursor-pointer">
              <img  src={carrinho} alt="icone de carrinho" className="w-10 h-10"/>
            </div>
            <ul tabIndex={0} className="dropdown-content menu  rounded-xl bg-rose-50 text-black w-30 p-1">
                <li className="p-1" >Items: {items}</li>
                <li className="p-1" >Total: {total}</li>
                <li className="bg-emerald-900 hover:bg-emerald-950 text-emerald-100 rounded-md p-1 cursor-pointer" onClick={()=>navigate("/carrinho")}>Ver carrinho</li>
            </ul>
          </div>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-2 hover:bg-emerald-950 rounded-md cursor-pointer">
              <img src={perfil} alt="icone de perfil" className="w-10 h-10"/>
            </div>
              <ul tabIndex={0} className="dropdown-content menu  rounded-xl bg-rose-50 text-black w-30 gap-1 p-1">
                <li className="hover:bg-gray-300 rounded-md p-1 cursor-pointer" onClick={()=>navigate("/perfil")}>Ver perfil</li>
                <li className="hover:bg-gray-300 rounded-md p-1 cursor-pointer" onClick={()=>navigate("/pedidos")}>Ver pedidos</li>
                <li className="bg-red-900 hover:bg-red-950 text-emerald-100 rounded-md p-1 cursor-pointer" onClick={()=>logout()}>Sair</li>
              </ul>
          </div>
          {user.role=="SALLER" && 

            <div role="button" onClick={()=>navigate("/vendas")}
              className="p-2 hover:bg-emerald-950 rounded-md cursor-pointer">
              <img src={selling} alt="icone de vendas" className="w-10 h-10"/>
            </div>
          }

        </div>
      </div>
    </div>
  )
}