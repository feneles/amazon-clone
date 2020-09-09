import React from "react";

function Product({ id, title, rating, image, price }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </div>
      </div>
      <img className="product_image" src={image} alt="item img" />
      <button className="product_button">Add to Basket</button>
    </div>
  );
}

export default Product;
