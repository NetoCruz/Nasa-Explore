import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NasaApi from "./components/Nasa-Api";
import Rover from "./components/rover";
function App() {
  return (
    <div>
      <NasaApi />
      <Rover />
    </div>
  );
}

export default App;
