import React, { useState } from 'react';
import "./styles/ProgressBar.css";

export const ProgressBar = ({active}) => {
  let currTime = 24;
  let totalTime = 50;
  let breakTime = 10;

  let breakSpots = (breakTime / totalTime) * 100;

  return (
    <div className="progress-bar" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent " + (breakSpots - 0.2) + "%,rgb(26, 75, 77) " + (breakSpots - 0.2) + "%,  rgb(26, 75, 77) " + breakSpots + "%)"}}>
      <div className={active ? "curr-progress transition" : "curr-progress"}>
      </div>
    </div>
  );
}