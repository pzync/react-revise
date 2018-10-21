import React, { Component } from "react";
import "./foodCard.css";

class FoodCard extends Component {
  // state = {  }
  render() {
    return (
      <div className="food-card">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/iu0vtmhcuvhtt86ed6yh`}
          className="food-image"
          alt=""
        />
        <h3 className="food-name">Awesome Sandwich</h3>
        <p className="food-category">All day breakfast</p>
        <div className="price-cta-section">
          <div className="food-price">$10.50</div>
          <div className="card-cta">ADD</div>
        </div>
      </div>
    );
  }
}

export default FoodCard;
