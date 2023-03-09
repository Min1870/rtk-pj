import { RiShoppingCart2Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToFav } from "../services/productSlice";
import { addToCart } from "../services/cartSlice";

const Card = ({ product }) => {

  const dispatch = useDispatch();


  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <img src={product?.image} height={"100px"} className="d-block mx-auto mb-3" alt="" />
        <h5>{product?.title.substring(0, 20)}...</h5>
        <p className="fw-bold text-primary">${product?.price}</p>
        <button onClick={() => dispatch(addToCart(product))} className="btn btn-outline-primary me-3">
          <RiShoppingCart2Fill />
        </button>
        <button onClick={() => dispatch(addToFav(product))} className="btn btn-outline-danger">
          <AiFillHeart />
        </button>
      </div>
    </div>
  );
};

export default Card;
