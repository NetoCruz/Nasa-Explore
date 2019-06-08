import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NasaApi from "./components/Nasa-Api";
import Rover from "./components/rover";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <NasaApi />
      <Rover />
    </div>
  );
}

export default App;
