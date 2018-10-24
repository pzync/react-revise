import React from "react";
import "./cartSection.css";
import EmptyCart from "./emptyCart";
import CartItem from "./cartItem";

const CartSection = ({ menu }) => {
  const menuInCart = menu.filter(m => m.inCart);

  return (
    <div>
      {menuInCart.length ? (
        <div className="filled-cart">
          <h2 className="cart-title">Cart</h2>
          {menuInCart.map(menu => (
            <CartItem cartItem={menu} key={menu.recipe_id} />
          ))}
          <hr />
          <div className="cart-total-section">
            <p className="cart-total-label">Subtotal</p>
            <p className="cart-toal-price">{`$${(
              10.5 * menuInCart.length
            ).toFixed(2)}`}</p>
          </div>
          <button className="checkout-button">CHECKOUT</button>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartSection;
