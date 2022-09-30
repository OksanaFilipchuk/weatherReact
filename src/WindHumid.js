import React from "react";
import "./WindHumid.css";

export default function WindHumid(props) {
  return (    
    <div className="WindHumid col-6">
      <h4 className="weather-info" id="description">
        {props.description}
      </h4>
      <h4>
        wind: <span className="weather-info" id="wind">{props.wind}</span>
        <span className="weather-info"> m/s</span>
      </h4>
      <h4>
        humidity: <span className="weather-info" id="humidity">{props.humidity}
        </span>
        <span className="weather-info"> %</span>
      </h4>
    </div>
  );
}
