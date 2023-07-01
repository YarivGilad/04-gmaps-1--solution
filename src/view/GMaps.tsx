import React, { Component } from "react";
// const log = (...args) => console.log.apply(null, ["GoogleMap -->", ...args]);
const log = (...args: any[]) => console.log("GoogleMap -->", ...args);

interface Props {
    lat: number;
    lng: number;
    zoom: number;
}

export class GoogleMap extends Component<Props> {

  mapRef = React.createRef<HTMLDivElement>();
  theMap: google.maps.Map | null = null;

  shouldComponentUpdate(nextProps: Props) {
    log("shouldComponentUpdate >>>>");
    // log("this.props:", this.props);
    // log("this.state:", this.state);
    // log("nextState:", nextState);
    // log("nextProps:", nextProps);
    // log("<<<< shouldComponentUpdate");
    const map = this.theMap as google.maps.Map;
    map.setCenter({ lat: nextProps.lat, lng: nextProps.lng });
    map.setZoom(nextProps.zoom);
    return false;
  }

  componentDidMount() {
    // log(this.mapRef);
    this.theMap = new google.maps.Map(this.mapRef.current as HTMLDivElement, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }

  render() {
    return <div ref={this.mapRef} className="map-box" />;
  }

}
