import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DayWeatherForecast.css"

export default function DayWeatherForecast(props){
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayDate = new Date(props.data.dt*1000);
    let day = dayDate.getDay();
    let minTemp= Math.round(props.data.temp.min)
    let maxTemp = Math.round(props.data.temp.max)

    return(
        <div className="DayWeatherForecast">
            <h4>{weekDays[day]}</h4>
            <WeatherIcon iconCode={props.data.weather[0].icon} size={44} />
            <div className="minMaxTemp">
                <span className="minTemp">{minTemp}°C</span>
                <span className = "maxTemp">{maxTemp}°C</span>
            </div>
            
        </div>
    )
}