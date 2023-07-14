import React, { useState } from "react";

function TimeApp() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  function consoleTime() {
    console.log(time);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={consoleTime}>Get Time</button>
    </div>
  );
}

export default TimeApp;
