import React from "react";
import FoodCard from "./foodCard";
import "./menuSection.css";

const MenuSection = ({ menu, onAdd, onChange, searchQuery }) => {
  return (
    <div>
      <div className="menu-top-area">
        <h2 className="menu-heading">Menu Items</h2>
        <input
          type="text"
          placeholder="Search.."
          value={searchQuery}
          onChange={onChange}
        />
      </div>
      <div className="cards-section">
        {menu.map(item => (
          <FoodCard
            key={item.recipe_id}
            cardImage={item.image_url}
            cardTitle={item.title}
            cardCategory={item.publisher}
            inCart={item.inCart}
            onAdd={() => onAdd(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
