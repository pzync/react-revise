import React from "react";
import "./foodCard.css";

const FoodCard = ({ cardImage, cardTitle, cardCategory }) => {
  return (
    <div className="food-card">
      <img src={cardImage} className="food-image" alt="" />
      <h3 className="food-name">
        {cardTitle.length < 60 ? cardTitle : `${cardTitle.substr(0, 55)}...`}
      </h3>
      <p className="food-category">{cardCategory}</p>
      <div className="price-cta-section">
        <div className="food-price">$10.50</div>
        <div className="card-cta">ADD</div>
      </div>
    </div>
  );
};

export default FoodCard;
