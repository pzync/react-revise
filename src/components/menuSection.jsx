import React from "react";
import FoodCard from "./foodCard";
import "./menuSection.css";
import SearchBox from "./searchBox";

const MenuSection = ({ menu, onAdd, searchOn, searchQuery, onInput }) => {
  return (
    <div>
      <h2 className="menu-heading">Menu Items</h2>
      <SearchBox
        searchQuery={searchQuery}
        searchOn={searchOn}
        onInput={onInput}
      />
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
