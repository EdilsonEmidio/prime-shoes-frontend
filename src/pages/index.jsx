import Cadastro from "./cadastro";
import Home from "./home";
import Login from "./login";
import Pedidos from "./pedidos";
import Perfil from "./perfil";


const pages = [
  {
    element:<Home/>,
    path:"/"
  },
  {
    element:<Login/>,
    path:"/login"
  },
  {
    element:<Cadastro/>,
    path:"/cadastro"
  },
  {
    element:<Perfil/>,
    path:"/perfil"
  },
  {
    element:<Pedidos/>,
    path:"/pedidos"
  }
]

export default pages