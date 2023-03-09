import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCard from "./EmptyCard";
import ItemCart from "./ItemCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);

  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const result = cart?.reduce((a, c) => a + c?.price, 0);
    setTotal(result);
  };

  const increasePrice = price => {
    setTotal(total + price)
  }

  const decreasePrice = price => {
    setTotal(total  - price)
  }

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <div className="my-5">
          <div className="row">
            <div className="col-7 py-5 ">
              <div className="">
                {cart?.map((item) => (
                  <ItemCart key={item.id} product={item} increasePrice={increasePrice} decreasePrice={decreasePrice} />
                ))}
              </div>
            </div>
            <div className="col-5 py-5 ">
              <h3 className="text-primary">Total Price</h3>
              <h2 className="text-warning">${total.toFixed(2)}</h2>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCard />
      )}
    </>
  );
};

export default Cart;
