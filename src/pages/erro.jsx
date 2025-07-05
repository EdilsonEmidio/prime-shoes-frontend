import { useNavigate } from "react-router-dom"



export default function Erro(){
	const navigate = useNavigate()
	return(
		<div className="ml-10 mt-10">
			<h1>ERROR 404</h1>
			<h2>PAGE NOT FOUND</h2>
			<h3 className="mt-3 text-md cursor-pointer hover:text-emerald-500" onClick={()=>navigate("/")}>Clique aqui para voltar</h3>
		</div>
	)
}