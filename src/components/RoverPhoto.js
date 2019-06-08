import React, { Component } from "react";
class RoverPhoto extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
      </div>
    );
  }
}

export default RoverPhoto;
