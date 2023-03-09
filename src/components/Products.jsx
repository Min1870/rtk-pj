import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../api";
import ProductLoading from "../Loading/ProductLoading";
import { addProducts } from "../services/productSlice";
import Card from "./Card";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
//   console.log(products);

  const getProductsData = async () => {
    const data = await getData("/products");
    dispatch(addProducts(data));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="my-5 d-flex flex-wrap gap-2">
      { products.length > 0  ? (products?.map((product) => (<Card key={product.id} product={product}/>))) : <ProductLoading/>}
    </div>
  );
};

export default Products;
