

export default function CardVariacao({variacao}){
  
  return(
    <div className="card bg-base-300 card-md h-fit shadow-sm">
      <div className="card-body">
        <h1 className="card-title">Cor: {variacao.color}</h1>
        <h1>Tamanho: {variacao.size}</h1>
        <h1>Estoque: {variacao.stock}</h1>

      </div>
    </div>
  )
}