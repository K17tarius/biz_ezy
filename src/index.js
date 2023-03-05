import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Account from "./pages/Registration/Registration";
import RegistrationForm from "./pages/Registration/Registration";
import LoginForm from "./pages/Login/login";
import Vendorlisting from "./pages/VendorListing/vendorlisting";
import AddProduct from "./pages/Vendorshop/vendoradd";
import ProductCards from "./pages/Cart/cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="vendoradd" element={<AddProduct />} />
          <Route path="vendorlisting" element={<Vendorlisting />} />
          <Route path="cart" element={<ProductCards />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
