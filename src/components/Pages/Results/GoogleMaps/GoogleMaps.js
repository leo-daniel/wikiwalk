import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props.name,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '100%',
      height: '100%',
      margin: 'auto',
      position: 'relative',
      zIndex: '0',
      borderRadius: '5px',
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 16 }
        initialCenter = {{ lat: this.props.lat, lng: this.props.lon }}
      >
      {
        this.props.geoArray.map((element) => {
          if (element.lat === null || element.lon === null) {
            return null;
          } else {
            return (
            <Marker
            key = { element.pageid }
            onClick = { this.onMarkerClick }
            title = { element.title }
            position = {{ lat: element.lat, lng: element.lon }}
            name = { element.title }
          />
            )}
        })
      }
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          {this.state.selectedPlace}
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyAZZ8iYpPD1FaIqfqC3j6zevm7Bp2cSa1M')
})(GoogleMapsContainer)