import React from "react";
import { useState } from "react";
import "./Form.css";

export default function Form() {
  let [city, setCity] = useState("");

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    document.querySelector("#city").textContent = city;
  }

  return (
    <div className="form-container col-3">
      {/* <h4>It is 19°C in {city}</h4> */}
      <form id="form">
        <input
          className="town"
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
  );
}
