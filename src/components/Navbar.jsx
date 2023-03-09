import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaShopware } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cart = useSelector(state => state.cart.cart)

  const product = useSelector(state => state.product.fav)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"}>
        <p className="navbar-brand mb-0">
          <FaShopware className="text-info" /> MyShop
        </p>
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/cart">
              <button className="btn-primary btn btn-sm">
                <RiShoppingCart2Fill /> {cart?.length}
              </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/fav"}>
                <button className="btn-primary btn btn-sm btn-danger ms-2">
                  <AiFillHeart /> {product?.length}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
