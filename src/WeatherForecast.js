import axios from "axios";
import React, { useState, useEffect } from "react";
import DayWeatherForecast from "./DayWeatherForecast";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [weatherForecast, setWeatherForecast]=useState(null);

  function handleResponse(response){
    setWeatherForecast(response.data.daily)
    setLoaded(true)
  }

  useEffect(()=>{
    setLoaded(false)
  }, [props.lat, props.lon])

  if(loaded){
    return(
      <div className="WeatherForecast row">
        {weatherForecast.map((el,index) => {
          if(index<6){
            return (
              <div className="col" key={index}>
                 <DayWeatherForecast data={el} />
              </div>
            )
          } else {
            return null
          }
          })
        }
      </div>)
  } else {
    let key = "6ac729d0e998a2a2deed63390521ba84";
    let lon = props.lon;
    let lat = props.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse)
    return <h1 className="loading">Loading...</h1>
  }  
}