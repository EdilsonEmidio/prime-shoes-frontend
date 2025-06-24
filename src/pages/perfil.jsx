import { useEffect, useState } from "react";
import Layout from "../template/layout";
import Axios from "../controller/controller";



export default function Perfil(){

  const [perfil, setPerfil] = useState({})

  useEffect(()=>{
    Axios.get("/users/")

  },)
  return(
    <Layout>
      <div>
        
      </div>
    </Layout>
  )
}