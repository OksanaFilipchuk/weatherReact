import React from "react";
import CurrentCity from "./CurrentCity";
import Form from "./Form";
import WeatherIcon from "./WeatherIcon";
import Date from "./Date";
import ProposedCity from "./ProposedCity";
import WindHumid from "./WindHumid";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container container-box">
        <div className="row">
          <CurrentCity />
          <Form />
        </div>
        <div className="row">
          <WeatherIcon />
          <Date />
          <ProposedCity />
          <WindHumid />
        </div>
      </div>
    </div>
  );
}
