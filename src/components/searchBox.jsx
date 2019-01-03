import React from "react";
import "./searchBox.css";

const SearchBox = ({ searchQuery, searchOn, onInput }) => {
  return (
    <div className="search-box">
      {/* <div>Search</div> */}
      <input
        type="text"
        value={searchQuery}
        onChange={onInput}
        placeholder="search.."
      />
    </div>
  );
};

export default SearchBox;
