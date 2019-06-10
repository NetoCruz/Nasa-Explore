import React, { Component } from "react";
import "./css/index.css";

class RoverPhoto extends Component {
  noPhotosHelper() {
    if (!this.props.img.length) {
      return (
        <div>
          <div class="d-flex justify-content-center">
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Not images found</h5>
                  <div class="card-text text-black-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    let photos = this.props.img.map((image, index) => (
      <div class="d-flex justify-content-center">
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-0 shadow">
            <img
              key={index}
              src={image.img_src}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="card-title mb-0" />
              <div class="card-text text-black-50" />
            </div>
          </div>
        </div>
      </div>
      /* <div>
         <img className="container" key={index} src={image.img_src} alt="" />
       </div> */
    ));

    return (
      <div>
        {this.noPhotosHelper()}
        {photos}
      </div>
    );
  }
}

export default RoverPhoto;
