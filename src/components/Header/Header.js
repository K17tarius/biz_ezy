import './Header.css';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
