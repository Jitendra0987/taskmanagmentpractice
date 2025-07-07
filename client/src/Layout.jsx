import { Outlet } from "react-router-dom";
import Topmenu from "../src/component/Navbar";
import Footer from "../src/component/Footer";

const Layout=()=>{
    return(
        <>
          <Topmenu/>
          <Outlet/>
          <Footer/>
        </>
    )
}
export default Layout;