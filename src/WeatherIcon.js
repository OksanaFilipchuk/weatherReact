import React from "react";
import "./WeatherIcon.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
  let iconMapping = {
    "01d": "CLEAR_DAY",
    "01n": "ClEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  }

  return (
    <div className="WeatherIcon col-2">
      <ReactAnimatedWeather
      icon={iconMapping[props.iconCode]}
      color={"#4aa8ff"}
      size={props.size}
      animate={true}
      />      
    </div>
  );
}
