import { Component } from "react";
import { TopBar } from "./TopBar";
import { GoogleMap } from "./GMaps";
// const log = (...args) => console.log.apply(null, ["App -->", ...args]);
const log = (...args: any[]) => console.log("App -->", ...args);


interface State {
  lat: number;
  lng: number;
}

export class App extends Component<object, State> {
  state = {
    lat: -34.397,
    lng: 150.644,
  };

  reposition(city: string) {
    switch (city) {
      case "tel aviv":
        this.setState({ lat: 32.0042938, lng: 34.7615399 });
        break;
      default:
        alert("wrong city");
    }
  }

  render() {
    log(this.state);
    return (
      <div className="app">
        <TopBar><h1>Google Maps Example in React</h1></TopBar>
        <div className="hbox mb20">
          <button onClick={() => this.reposition("tel aviv")}>Tel Aviv</button>
          <input type="number" min="8" max="16" placeholder="8" />
        </div>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}
