import React, { Component } from "react";
import "./css/index.css";
class Photos extends Component {
  render() {
    return (
      <div>
        <section class="showcase">
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
        </section>
      </div>
    );
  }
}

export default Photos;
