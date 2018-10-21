import React, { Component } from "react";
import "./App.css";
import HeroSection from "./components/heroSection";
import MenuSection from "./components/menuSection";

const API_KEY = `38348c8d8e6066fe42fcd7fb4a2375bc`;

class App extends Component {
  state = {
    menuItems: [],
    hasLoaded: false
  };

  async componentDidMount() {
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=sandwich&count=18`
    );

    const data = await api_call.json();
    const menuItems = data.recipes;
    console.log(menuItems);
    this.setState({ menuItems, hasLoaded: true });
  }

  render() {
    const { menuItems } = this.state;

    return (
      <div className="App">
        <HeroSection />
        <div className="content-section">
          <div className="category-list-sidebar" />
          <MenuSection menu={menuItems} />
          <div className="cart-section" />
        </div>
      </div>
    );
  }
}

export default App;
