import React, { useState } from "react";
// import CurrentCity from "./CurrentCity";
import WeatherIcon from "./WeatherIcon";
import CurrentTemp from "./CurrentTemp";
import CurrentDate from "./Date";
import WindHumid from "./WindHumid";
import GitHubLink from "./GitHubLink"
import "./App.css";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("lviv")
  let [weatherData, setWeatherData] = useState({
    loaded: false,
    city: "Lviv"   
  });
  
  function handleResponse(response){
      setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      dataDate: new Date(response.data.dt*1000),
      iconCode: response.data.weather[0].icon,
      city: city,
    });
  }

  function changeCity(event){
    event.preventDefault();    
    if(event.target.value){
      setCity(event.target.value)
    } else {
      setCity(event.target.textContent);
      setWeatherData({city: event.target.textContent})
    };
  }

  function handleSubmit(event){
    event.preventDefault();
    setWeatherData({
      city: city,
    });
  }

  let proposedCities = ["Mariupol", "Bucha", "Irpin", "Dnipro", "Kharkiv"];

  if(weatherData.loaded){
    return (
      <div className="App">
        <div className="container container-box">
          <div className="row">
            <div className="col-9">
              <h1 id="city">{weatherData.city}</h1>
            </div>
            <div className="form-container col-3">
              <form id="form" onSubmit={handleSubmit}>
                <input
                  className="city"
                  type="text"
                  name="city"
                  placeholder="enter your city"
                  onChange={changeCity}
                />
                <div className="buttons">
                  <input className="search" type="submit" value="search" />
                  <button className="current">current</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <WeatherIcon iconCode={weatherData.iconCode} size={96}/>
            <CurrentTemp temperature={weatherData.temperature}/>
            <CurrentDate dataDate={weatherData.dataDate} />            
            <div className="ProposedCities col-3">
              {proposedCities.map(el => {
                return (
                  <h6 className="proposed-cities" key={el} onClick={changeCity}>{el}</h6>
                )
              })}
            </div>            
          </div>
          <div className="row">
          <WindHumid humidity={weatherData.humidity} wind={weatherData.wind} description={weatherData.description} />
          </div>
        </div>
        <footer>
          <GitHubLink />
        </footer>      
      </div>
    );
  } else {
    let key = "6ac729d0e998a2a2deed63390521ba84";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading"
  }

  
}
