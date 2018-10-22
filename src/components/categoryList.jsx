import React from "react";
import "./categoryList.css";

const CategoryList = ({ list, onSelect, activeItem }) => {
  return (
    <ul className="category-list">
      {list.map(item => (
        <li
          key={item}
          className={item === activeItem ? "list-item-active" : "list-item"}
          onClick={() => onSelect(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
