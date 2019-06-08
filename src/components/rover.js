import React, { Component } from "react";
import RoverPhoto from "./RoverPhoto";

import { NASA_KEY } from "../API_KEYS";
class Rover extends Component {
  state = {
    loading: true,
    error: null,
    data: {
      results: []
    }
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${NASA_KEY}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          results: data
        }
      });
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
    console.log(this.state.data.results.photos[0].img_src);
  };

  render() {
    if (this.state.loading === true) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div>
        <p>OOOO</p>
        <RoverPhoto img={this.state.data.results.photos[0].img_src} />
      </div>
    );
  }
}

export default Rover;
