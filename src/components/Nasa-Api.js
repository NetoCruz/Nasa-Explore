import React, { Component } from "react";
import Photos from "./Photos";
class NasaApi extends Component {
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
        /*`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=jtBlYHmFNNyD3f4MeS2gK9wnOQDxwToSFslCVVBm`*/

        `https://api.nasa.gov/planetary/apod?api_key=jtBlYHmFNNyD3f4MeS2gK9wnOQDxwToSFslCVVBm`
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
  };

  render() {
    return (
      <div>
        <Photos
          character={this.state.data.results.copyright}
          explanation={this.state.data.results.explanation}
          img={this.state.data.results.url}
        />
      </div>
    );
  }
}

export default NasaApi;
