import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../services/cartSlice";

const ItemCart = ({ product, increasePrice, decreasePrice }) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty((prev) => prev + 1);
    increasePrice(product?.price);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      decreasePrice(product?.price);
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <img
          src={product?.image}
          height={"100px"}
          className="d-block mx-auto mb-3"
          alt=""
        />
        <h5>{product?.title.substring(0, 20)}...</h5>
        <p className="fw-bold text-primary">${product?.price * qty}</p>

        <div className="d-flex gap-3">
          <div className="d-flex gap-2 align-items-center">
            <button onClick={decreaseQty} className="btn btn-outline-primary">
              -
            </button>
            <span>{qty}</span>
            <button onClick={increaseQty} className="btn btn-outline-primary">
              +
            </button>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(product))}
            className="btn btn-outline-danger"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
