import React, { useEffect, useState, useRef } from 'react';
import './CenteredDiv.css'; // Import your CSS file with the styles

function CenteredDiv() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    let interval;
  
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(true);
  };
  const Stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    
    <div className="centered-container">

      <div className="centered-div">
        <div className="shadowed-div">
          <div className="small-div" >{formatTime(time).hours}</div>
          <div className="small-div">{formatTime(time).minutes}</div>
          <div className="small-div">{formatTime(time).seconds}</div>
        </div>
      </div>
      <div className="centered-div">
        <div className="small-div-btn" onClick={Stop}>Pause</div>
        <div className="small-div-btn" onClick={startStop}>Start</div>
        <div className="small-div-btn" onClick={reset}>Reset</div>
      </div>
      
    </div>
  );
}

function formatTime(seconds) {
  const pad = (value) => String(value).padStart(2, '0');
  const minutes = pad(Math.floor(seconds / 60));
  const hours = pad(Math.floor(minutes / 60));
  const remainingSeconds = pad(seconds % 60);
  
  const displayTime={
    hours:hours,
    minutes:minutes,
    seconds:remainingSeconds
   }
 return displayTime;
}

export default CenteredDiv;
