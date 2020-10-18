import React from "react";
import "./styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Video from "./Video";
import { HomePage } from "./HomePage";
import { Pause } from "./Pause";
import { Reflection } from "./Reflection";
import { Breathing } from "./Breathing";
import { Exercises } from "./Exercises";
import { MathGame } from "./MathGame";
import { Reminder } from "./Reminder";
import { BrainDump } from "./BrainDump";
import { ProgressBar } from "./ProgressBar";
import { MoreInformation } from "./MoreInformation";
import { NavBar } from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact componenent={HomePage} />
        <Route path="/home" component={Video} />
        <Route path="/pause" component={Pause} />
        <Route path="/reflection" component={Reflection} />
        <Route path="/breathing" component={Breathing} />
        <Route path="/exercises" component={Exercises} />
        <Route path="/MathGame" component={MathGame} />
        <Route path="/Reminder" component={Reminder} />
        <Route path="/BrainDump" component={BrainDump} />
        <Route path="/progress" exact component={ProgressBar} />
        <Route path="/more" exact component={MoreInformation} />
        <Route path="/NavBar" exact component={NavBar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
