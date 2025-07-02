



export default function Menu(){

  return(

    <ul className="menu bg-base-300 rounded-box w-56 h-full">
      <h2>Filtros</h2>
      <li>
        <details>
          <summary>Preço</summary>
          <ul>
            <li className="w-3/4 my-1">
              <input type="text" id="preco" className="input input-sm" placeholder="preço maximo"/> 
            </li>
          </ul>
        </details>
        <details>
          <summary>Tamanho</summary>
          <ul>
            <li className="w-3/4">
              <label htmlFor="t40"><input id="t40" type="checkbox" className="checkbox checkbox-sm" />40</label>
            </li>
          </ul>
          
        </details>
      </li>
      <button className="btn btn-sm btn-soft btn-primary mt-5">Filtrar</button>
    </ul>
  )
}