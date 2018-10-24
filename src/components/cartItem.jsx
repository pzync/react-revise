import React from "react";
import "./cartItem.css";

const CartItem = ({ cartItem, onRemove }) => {
  return (
    <div className="cart-item">
      <h3 className="cart-food-name">{cartItem.title}</h3>
      <div className="cart-remove-button" onClick={onRemove}>
        REMOVE
      </div>
      <div className="cart-food-price">$10.50</div>
    </div>
  );
};

export default CartItem;
