import React from "react";
import "./cartSection.css";
import EmptyCart from "./emptyCart";
import CartItem from "./cartItem";

const CartSection = props => {
  return (
    <div>
      <EmptyCart />
      {/* <div className="filled-cart">
        <h2 className="cart-title">Cart</h2>
        <CartItem />
        <CartItem />
        <hr />
        <div className="cart-total-section">
          <p className="cart-total-label">Subtotal</p>
          <p className="cart-toal-price">$21.00</p>
        </div>
        <button className="checkout-button">CHECKOUT</button>
      </div> */}
    </div>
  );
};

export default CartSection;
