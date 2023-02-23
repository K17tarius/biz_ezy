import { Outlet, Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  )
};

export default Layout;