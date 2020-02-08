import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Heatmap extends Component {

  //Default focus/zoom on the Ontario-ish region
  static defaultProps = {
    center: {
      lat: 45.4215,
      lng: -75.6972
    },
    zoom: 5
  };

  getHeatmapData = () => {
    const testData = [
      { lat: 55.5, lng: 34.56 },
      { lat: 34.7, lng: 28.4 }
    ]

    return {
      positions: this.generatePositions(10000),
      options: {
        radius: 20,
        opacity: 0.6
      }
    }
  }

  generatePositions = (length) => {
    const res = [];
    let lat = 0;
    let lng = 0;

    for(let i=0; i < length; i++) {
      lat = Math.floor(Math.random() * 180) - 90;
      lng = Math.floor(Math.random() * 360) - 180
      res.push({ lat, lng })
    }
    return res;
  }


  constructor(props) {
    super(props);
    this.state = {
      heatMapData: this.getHeatmapData()
    }
    //Fetch the heatmap data?
  }

  handleApiLoaded = (map, maps) => {
    console.log(map);
    console.log(maps);
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyANE_oRMmlJn8potIPdqYUCf3-4KUQZ490' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
          heatmapLibrary={true}
          heatmap={this.state.heatMapData ? this.state.heatMapData : {}}
        ></GoogleMapReact>
      </div>
    )
  }
}

export default Heatmap