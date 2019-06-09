import React, { Component } from "react";
class RoverPhoto extends Component {
  render() {
    let photos = this.props.img.map((image, index) => (
      <img key={index} src={image.img_src} alt="" />
    ));

    return <div>{photos}</div>;
  }
}

export default RoverPhoto;
