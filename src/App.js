import React, { Component } from "react";
import "./App.css";
import HeroSection from "./components/heroSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSection />
      </div>
    );
  }
}

export default App;
