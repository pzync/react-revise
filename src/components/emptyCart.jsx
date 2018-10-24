import React from "react";
import "./emptyCart.css";

const EmptyCart = props => {
  return (
    <div className="empty-cart">
      <h2 className="empty-cart-title">Cart Empty</h2>
      <img
        src={require("../images/dish.svg")}
        alt=""
        className="empty-cart-image"
      />
      <p className="empty-cart-message">Add something yummy to your plate :)</p>
    </div>
  );
};

export default EmptyCart;
