import React from "react";
import "./WindHumid.css";

export default function WindHumid() {
  return (
    <div className="row ">
      <div className="col-6">
        <h4 className="weather-info" id="description">
          overcast clouds
        </h4>
        <h4>
          wind : <span className="weather-info" id="wind"></span>
          <span className="weather-info"> m/s</span>
        </h4>
        <h4>
          humidity :{" "}
          <span className="weather-info" id="humidity">
            72
          </span>
          <span className="weather-info"> %</span>
        </h4>
      </div>
    </div>
  );
}
