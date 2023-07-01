import React, { ChangeEvent, Component } from "react";
import { TopBar } from "./TopBar";
import { GoogleMap } from "./GMaps";
// const log = (...args) => console.log.apply(null, ["App -->", ...args]);
const log = (...args: any[]) => console.log("App -->", ...args);

interface State {
  lat: number;
  lng: number;
  zoom: number;
}

export class App extends Component<object, State> {
  input = React.createRef<HTMLInputElement>();

  state = {
    lat: -34.397,
    lng: 150.644,
    zoom: 8,
  };

  // reposition = (event: MouseEvent)=> {
  //  const city = (event.target as HTMLElement).dataset.city
  reposition(city: string) {
    switch (city) {
      case "tel aviv":
        this.setState({ lat: 32.0042938, lng: 34.7615399 });
        break;
      case "london":
        this.setState({ lat: 51.528308, lng: -0.3817828 });
        break;
      case "paris":
        this.setState({ lat: 48.8587741, lng: 2.2069754 });
        break;
      default:
        alert("wrong city");
    }
  }
  updateZoom = (event: ChangeEvent) => {
    const z = (event.target as HTMLInputElement).value;
    // const z = (this.input.current as HTMLInputElement).value;
    // log({ z });
    // log("typeof z: ", typeof z);
    this.setState({ zoom: Number(z) }); // parseInt(zoom); // +zoom;
    // this.setState({ zoom: parseInt(z,10) }); // parseInt(zoom); // +zoom;
    // this.setState({ zoom: +z }); // parseInt(zoom); // +zoom;
  };

  render() {
    log(this.state);
    return (
      <div className="app">
        <TopBar>
          <h1>Google Maps Example in React</h1>
        </TopBar>
        <div className="hbox mb20">
          <button
            data-city="tel aviv"
            onClick={() => this.reposition("tel aviv")}
          >
            Tel Aviv
          </button>
          <button data-city="paris" onClick={() => this.reposition("paris")}>
            Paris
          </button>
          <button
            data-city="london"
            onClick={this.reposition.bind(this, "london")}
          >
            London
          </button>
          <input
            ref={this.input}
            type="number"
            min="8"
            max="16"
            placeholder="8"
            onChange={this.updateZoom}
          />
        </div>
        <GoogleMap
          lat={this.state.lat}
          lng={this.state.lng}
          zoom={this.state.zoom}
        />
        {/* <GoogleMap {...this.state} /> */}
      </div>
    );
  }
}
