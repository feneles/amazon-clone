import React from "react";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="product img" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkoutProduct_button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
