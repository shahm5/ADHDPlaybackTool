import React, { useState } from 'react';
import "./styles/ProgressBar.css";

export const ProgressBar = ({cufrrTime, totalfTime, breakfTime}) => {
  // const [currProgress, setProgress] = useState(0);
  // const [breakSpots, setBreaks] = useState(0);
  let currTime = 24;
  let totalTime = 60;
  let breakTime = 10;

  let currProgress = (currTime / totalTime) * 100;
  let breakSpots = (breakTime / totalTime) * 100;

  return (
    <div className="progress-bar" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent " + (breakSpots - 0.2) + "%,rgb(26, 75, 77) " + (breakSpots - 0.2) + "%,  rgb(26, 75, 77) " + breakSpots + "%)"}}>
      <div className="curr-progress" style={{width: currProgress + "%"}}>
      </div>
    </div>
  );
}