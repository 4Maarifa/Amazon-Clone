import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";


function Product({ id, title, image, price, rating, number }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    console.log({ state });
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        number,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
        <p></p>
      </div>

      <img className="product___img" src={image} />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
