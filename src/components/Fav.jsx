import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FavCard from "./FavCard";

const Fav = () => {
  const favItems = useSelector((state) => state.product.fav);
  // console.log(favItems)

  return (
    <div className="d-flex flex-wrap gap-3 my-5">
      {favItems.length > 0 ? (
        favItems?.map((item) => <FavCard key={item.id} product={item} />)
      ) : (
        <div>
          <h3>Add Your Favourite</h3>
          <Link to={"/"}>
            <button className="btn btn-outline-danger">Go Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Fav;
