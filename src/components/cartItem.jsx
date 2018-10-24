import React from "react";
import "./cartItem.css";

const CartItem = props => {
  return (
    <div className="cart-item">
      <h3 className="cart-food-name">
        Jalapeno Popper Grilled Cheese Sandwich
      </h3>
      <div className="cart-remove-button">REMOVE</div>
      <div className="cart-food-price">$10.50</div>
    </div>
  );
};

export default CartItem;
