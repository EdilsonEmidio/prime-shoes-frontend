import Cadastro from "./cadastro";
import Home from "./home";
import Login from "./login";


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
  }
]

export default pages