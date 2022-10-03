import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import CurrentTemp from "./CurrentTemp";
import CurrentDate from "./Date";
import WindHumid from "./WindHumid";
import GitHubLink from "./GitHubLink";
import WeatherForecast from "./WeatherForecast";
import "./App.css";


export default function App() {

  let [city, setCity] = useState("Lviv");
  let [isCurrentCity, setIsCurrentCity] = useState(false);
  let [weatherData, setWeatherData] = useState({
    loaded: false,
    city: "Lviv"   
  });
  
  function handleResponse(response){
    // setCity(response.data.name);
    setWeatherData({
    loaded: true,
    temperature: Math.round(response.data.main.temp),
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed),
    description: response.data.weather[0].description,
    dataDate: new Date(response.data.dt*1000),
    iconCode: response.data.weather[0].icon,
    city: response.data.name,
    lon: response.data.coord.lon,
    lat: response.data.coord.lat,
  });
  setIsCurrentCity(false)
  }

  function addCurrentCoords(){
    navigator.geolocation.getCurrentPosition(addCurrentCity);
    function addCurrentCity(position){ 
      setIsCurrentCity(true)
      setWeatherData({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
        loaded:false,
      })
    }  
    
  }
  
  function changeCity(event){
    event.preventDefault();    
    if(event.target.value){
      setCity(event.target.value)      
    } else {
      setCity(event.target.textContent);
      setWeatherData({city: event.target.textContent});
      setIsCurrentCity(false)
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
                  <button className="current" onClick={addCurrentCoords}>current</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <WeatherIcon iconCode={weatherData.iconCode} size={96}/>
              <WindHumid humidity={weatherData.humidity} wind={weatherData.wind} description={weatherData.description} />
            </div>            
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
          <WeatherForecast lat={weatherData.lat} lon={weatherData.lon}/>
        </div>
        <footer>
          <GitHubLink />
        </footer>      
      </div>
    );
  } else {
    let key = "6ac729d0e998a2a2deed63390521ba84";
    let url;
    if(isCurrentCity){
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${weatherData.lat}&lon=${weatherData.lon}&appid=${key}&units=metric`      
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${key}&units=metric`;      
    }
    axios.get(url).then(handleResponse);
    
    return "Loading"
  }

  
}
