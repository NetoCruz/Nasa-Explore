import React, { Component } from "react";
import RoverPhoto from "./RoverPhoto";

import { NASA_KEY } from "../API_KEYS";
class Rover extends Component {
  state = {
    loading: true,
    error: null,
    images: [],
    rover: "curiosity",
    camera: "FHAZ",
    sol: "1000"
  };

  handleRover = e => {
    this.setState({ rover: e.target.value }, this.fetchData);
  };

  handleCamera = e => {
    this.setState({ camera: e.target.value }, this.fetchData);
  };

  handleSol = e => {
    this.setState({ sol: e.target.value }, this.fetchData);
  };

  componentDidMount() {
    this.fetchData();
  }

  // fetchData = async () => {
  //   let cam = this.state.camera;
  //   let rover = this.state.rover;
  //   this.setState({ loading: true, error: null });
  //   try {
  //     const response = await fetch(
  //       `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&camera=${cam}&api_key=${NASA_KEY}`
  //     );
  //     const data = await response.json();

  //     this.setState({
  //       loading: false,
  //       images: data.photos,
  //       camera: cam,
  //       rover: rover
  //     });
  //   } catch (error) {
  //     this.setState({ loading: false, error: true });
  //   }
  //   // console.log(this.state.data.results.photos[0].camera);
  // };

  fetchData = e => {
    let cam = this.state.camera;
    let rover = this.state.rover;
    let sol = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${cam}&api_key=${NASA_KEY}`;

    try {
      fetch(imageUrl)
        .then(response => response.json())
        .then(data => {
          this.setState({
            images: data.photos,
            loading: false,
            camera: cam,
            rover: rover
          });
        });
    } catch (error) {
      this.setState({ loading: true, error: true });
      console.log("Error with Fetching : ", error);
    }
  };

  render() {
    if (this.state.loading === true) {
      return (
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
    return (
      <div>
        <div class="bg-primary text-center py-5 mb-4">
          <div class="container">
            <h1 class="font-weight-light text-white">Mars Rovers Photos</h1>
          </div>
        </div>
        <div>
          <form class="d-flex justify-content-center" onSubmit={this.fetchData}>
            <div class="form-group p-3 shadow col-md-6">
              <label htmlFor="rover"> Rover: </label>
              <select
                class="form-control col-md-6"
                onChange={this.handleRover}
                id="rover"
              >
                <option value="curiosity"> Curiosity</option>
                <option value="opportunity">Opportunity</option>
                <option value="spirit">Spirit</option>
              </select>
              <label htmlFor="camera"> &nbsp;Camera Type: </label>
              <select
                class="form-control col-md-6"
                onChange={this.handleCamera}
                id="rover"
              >
                <option value="fhaz">FHAZ (Front Hazard)</option>
                <option value="rhaz">RHAZ (Rear Hazard)</option>
                <option value="navcam">NAVCAM (Navigation Cam)</option>
              </select>
              <label htmlFor="sol"> &nbsp;Martian Sol: 1000-2000 </label>
              <input
                type="number"
                onChange={this.handleSol}
                value={this.state.sol}
                max="2000"
                min="1000"
              />
            </div>
          </form>
          <RoverPhoto img={this.state.images} />
        </div>
      </div>
    );
  }
}

export default Rover;
