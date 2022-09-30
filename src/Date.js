import React from "react";
import "./Date.css";

export default function CurrentDate(props) {
  let weekDays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Suturday"
  ]
  
  let hour = props.dataDate.getHours();
  let minutes = props.dataDate.getMinutes();
  let month = props.dataDate.getMonth();
  hour<10? hour="0"+hour : hour = hour.toString();
  minutes<10? minutes="0"+minutes: minutes = minutes.toString();
  month<10? month="0"+month: month = month.toString();

  return (
    <div className="Date col-3">
      <h3>{weekDays[props.dataDate.getDay()]}</h3>
      <h3>{props.dataDate.getDate()}.{month}</h3>
      <h3 id="day-time">{hour +":"+ minutes}</h3>      
    </div>
  );
}
