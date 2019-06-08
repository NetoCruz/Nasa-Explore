import React, { Component } from "react";
class Photos extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <div>{this.props.character}</div>
        <div>{this.props.explanation}</div>
      </div>
    );
  }
}

export default Photos;
