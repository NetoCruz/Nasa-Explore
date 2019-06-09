import React, { Component } from "react";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={require("./images/NASA.svg")}
              width="70"
              height="70"
              class="d-inline-block align-center"
              alt=""
            />
            Nasa-Explore
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
