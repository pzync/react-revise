import React, { Component } from "react";
import "./App.css";
import HeroSection from "./components/heroSection";
import MenuSection from "./components/menuSection";
import CategoryList from "./components/categoryList";
import CartSection from "./components/cartSection";

const API_KEY = `38348c8d8e6066fe42fcd7fb4a2375bc`;

class App extends Component {
  state = {
    menuItems: [],
    hasLoaded: false,
    categories: [],
    activeCategory: "All Menu Items"
  };

  async componentDidMount() {
    const api_call = await fetch(
      `https://secret-ocean-49799.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=sandwich&count=27`
    );

    const data = await api_call.json();
    const recipes = data.recipes; // get only the recipes array from fetched data

    // The following adds a inCart key (set to FALSE) to each recipe object
    const menuItems = recipes.map(r => ({ ...r, inCart: false }));

    // The following creates a new array 'categories' containing only the unique values
    // Read more here: https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
    const categories = [
      "All Menu Items",
      ...new Set(menuItems.map(m => m.publisher))
    ];

    this.setState({ menuItems, hasLoaded: true, categories });
  }

  handleSelect = item => {
    const activeCategory = item;
    this.setState({ activeCategory });
  };

  handleAdd = foodItem => {
    const menuItems = [...this.state.menuItems];
    const index = menuItems.indexOf(foodItem);
    menuItems[index] = { ...foodItem };
    menuItems[index].inCart = true;
    this.setState({ menuItems });
  };

  render() {
    const { menuItems, categories, activeCategory, hasLoaded } = this.state;

    const filteredMenuItems =
      activeCategory === "All Menu Items"
        ? menuItems
        : menuItems.filter(m => m.publisher === activeCategory);

    return (
      <div className="App">
        <HeroSection />
        <div className="content-section">
          <CategoryList
            list={categories}
            activeItem={activeCategory}
            onSelect={this.handleSelect}
          />

          <MenuSection menu={filteredMenuItems} onAdd={this.handleAdd} />

          <CartSection menu={menuItems} />
        </div>
      </div>
    );
  }
}

export default App;
