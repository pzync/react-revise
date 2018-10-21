import React, { Component } from "react";
import "./App.css";
import HeroSection from "./components/heroSection";
import FoodCard from "./components/foodCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSection />
        <FoodCard />
      </div>
    );
  }
}

export default App;
