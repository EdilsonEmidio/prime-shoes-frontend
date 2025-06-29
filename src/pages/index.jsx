import Cadastro from "./cadastro";
import Carrinho from "./carrinho";
import Home from "./home";
import Login from "./login";
import Pedidos from "./pedidos";
import Perfil from "./perfil";
import Vendas from "./vendas";


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
  },
  {
    element:<Vendas/>,
    path:"/vendas"
  },
  {
    element:<Carrinho/>,
    path:"/carrinho"
  }
]

export default pages