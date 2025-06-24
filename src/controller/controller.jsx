import axios from 'axios';

const token = localStorage.getItem("token")
//headers:{
//    Authorization:"Bearer "+token
//  }

const Axios = axios.create({
  baseURL: "http://localhost:8080/api",
  
});


export default Axios