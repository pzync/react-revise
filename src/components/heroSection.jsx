import React, { Component } from "react";
import "./heroSection.css";

class HeroSection extends Component {
  // state = {  }
  render() {
    return (
      <div className="Hero-section">
        <div className="image-area">
          <img
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n2f6sjggu8sbrjgzm7ar`}
            className="hotel-image"
            alt=""
          />
        </div>
        <div className="hotel-details">
          <h2 className="hotel-name">The Classic Place</h2>
          <p className="hotel-location">Koramangala 5th Block</p>
          <div className="hotel-metadata">
            <div className="star-rating">
              <h6>
                4.5 <span className="star-icon">&#9733;</span>
              </h6>
              <p>8700 ratings</p>
            </div>
            <div className="delivery-time">
              <h6>38 min</h6>
              <p>Delivery time</p>
            </div>
            <div className="hotel-rating">
              <h6>$150</h6>
              <p>Cost for two</p>
            </div>
          </div>
        </div>
        <div className="offer-section">
          <h4>&#9728; Offer</h4>
          <p>15% off on all orders before midnight today.</p>
        </div>
      </div>
    );
  }
}

export default HeroSection;
