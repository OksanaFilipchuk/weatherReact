import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon() {
  return (
    <div className="WeatherIcon col-6">
      <img id="weather-icon" src="" alt=""></img>
      <h2 id="curentDegree">25</h2>
      <button className="degree active" id="C" href="#">
        °C
      </button>
      <span className="degree">|</span>
      <button className="degree" id="F" href="#">
        °F
      </button>
    </div>
  );
}
