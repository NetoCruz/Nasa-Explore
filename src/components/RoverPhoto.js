import React, { Component } from "react";
import "./css/index.css";

class RoverPhoto extends Component {
  render() {
    let photos = this.props.img.map((image, index) => (
      //

      <div>
        <img className="container" key={index} src={image.img_src} alt="" />
      </div>
    ));

    return <div>{photos}</div>;
  }
}

export default RoverPhoto;
