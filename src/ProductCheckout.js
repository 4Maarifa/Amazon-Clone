import React from "react";

import "./ProductCheckout.css";
import { useStateValue } from "./StateProvider";

function ProductCheckout({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
   
  const removefromBasket = () => {
    console.log({ state });
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="Productcheckout__items">
      <img src={image} />
      <div className="Productcheckout__itemInfo">
        <p>{title}</p>
        <p className="Productcheckout__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="Productcheckout__rating">
         
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          <p></p>
        </div>
        <button onClick={removefromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default ProductCheckout;
