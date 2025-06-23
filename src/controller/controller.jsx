import axios from 'axios';

//const tokem = localStorage.getItem("tokem")
//headers:{
//    Authorization:"Bearer "+tokem 
//  }
// Envia uma requisição post

const Axios = axios.create({
  baseURL: "http://localhost:8080/api",
  
});


export default Axios