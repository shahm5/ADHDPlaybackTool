import React, { useState } from "react";
import { Reflection } from "./Reflection";
import { Breathing } from "./Breathing";
import { Exercises } from "./Exercises";
import { MathGame } from "./MathGame";
import { Reminder } from "./Reminder";
import { BrainDump } from "./BrainDump";

export const Pause = ({ index }) => {
  const pickPause = () => {
    let pages, count;
    pages = [
      <Breathing />,
      <Reflection />,
      <Reminder />,
      <MathGame />,
      <BrainDump />,
      <Exercises />,
    ];
    count = Math.floor(Math.random() * pages.length);
    return pages[index];
  };
  return <div>{pickPause()}</div>;
};
