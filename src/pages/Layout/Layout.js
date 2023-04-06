import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/leftnav";

const Layout = () => {
  return (
    <>
      <Header></Header>
        <Outlet />
      
      <br></br>
      <Footer></Footer>
    </>
  )
};

export default Layout;