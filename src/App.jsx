import { BrowserRouter, Route, Routes } from "react-router-dom"
import pages from "./pages"




function App() {

  return (
    <BrowserRouter>
      <Routes>
        {
          pages.map((pages,index)=>
            (<Route index={index} path={pages.path} element={pages.element}/>))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
