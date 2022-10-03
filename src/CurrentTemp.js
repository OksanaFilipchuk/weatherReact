import React from "react";
// import { useState } from "react";
import "./CurrentTemp.css"

export default function CurrentTemp(props){
  // let [unit, setUnit]=useState("celsius");
  // let [temperature, setTemperature] = useState(props.temperature);

  return (
      <div className="CurrentTemp col-3">        
        <h2 id="curentDegree">{props.temperature}</h2>
        <button className="degree active" id="C" href="#">
          °C
        </button>
      </div>
    )
  // function showCelsius(){
  //   setTemperature(props.temperature);
  //   setUnit("celsius")

  // }
  // function showFahrenheit(){
  //   setTemperature(Math.round(props.temperature*1.8))
  //   setUnit("fahrenheit")
  // }

  // if(unit==="celsius"){
  //   return (
  //     <div className="CurrentTemp col-3">        
  //       <h2 id="curentDegree">{temperature}</h2>
  //       <button className="degree active" id="C" href="#">
  //         °C
  //       </button>
  //       <span>|</span>
  //       <button className="degree" id="F" href="#" onClick={showFahrenheit}>
  //         °F
  //       </button>
  //     </div>
  //   )
  // } else{
  //   return (
  //     <div className="CurrentTemp col-3">        
  //       <h2 id="curentDegree">{temperature}</h2>
  //       <button className="degree" id="C" href="#" onClick={showCelsius}>
  //         °C
  //       </button>
  //       <span className="degree">|</span>
  //       <button className="degree active" id="F" href="#">
  //         °F
  //       </button>
  //     </div>
  //   )
  // }
}