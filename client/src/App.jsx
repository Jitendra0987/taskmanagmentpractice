import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout";
import Login from "./pages/Login";

const App=()=>{
  return( 
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path="Login" element={<Login/>} />

      </Route>

    </Routes>
    </BrowserRouter>

    </>
  ) 
}
export default App;