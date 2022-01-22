import { Nav } from "./styleComponents";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Logo from "../../assets/emart.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { count } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Nav>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="right-item">
          <ul>
            <li>
              <Link to="/wishlist">
                Wishlist
                <FaHeart />
                {count.length === 0 ? "" : <p>{count.length}</p>}
              </Link>
            </li>
            <li>
              <Link to="/cart">
                Cart
                <FaShoppingCart />
                {cartItems.length === 0 ? "" : <p>{cartItems.length}</p>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};
export default Navbar;
