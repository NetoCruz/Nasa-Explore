import React, { Component } from "react";
import "./css/index.css";
class Photos extends Component {
  render() {
    let selectStyle = {
      height: "100vh",
      minHeight: "500px",
      backgroundImage: `url(${this.props.img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "white"
    };
    let textStyle = {
      backgroundColor: "#9D9D9D",

      color: "white"
    };

    return (
      <div>
        <header class="masthead" style={selectStyle}>
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12 text-center">
                <h1 class="font-weight-light">La Foto del Día</h1>
                <p class="lead">By {this.props.character}</p>
              </div>
            </div>
          </div>
        </header>
        <div style={textStyle}>
          <p className="mb-0">{this.props.explanation}</p>
        </div>
        {/* <section class="showcase">
          <h1>Foto del Día</h1>
          <div class="container-fluid p-0">
            <div class="row no-gutters">
              <div class="col-lg-6 order-lg-2 text-white showcase-img">
                <img src={this.props.img} />
              </div>
              <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>{this.props.character}</h2>
                <p class="lead mb-0">{this.props.explanation}</p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    );
  }
}

export default Photos;
