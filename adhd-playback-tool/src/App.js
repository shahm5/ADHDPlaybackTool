import React from 'react';
import './styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Video } from './Video';
import { HomePage } from './HomePage';
import { Pause } from './Pause';
import { Reflection } from './Reflection';
import { Breathing } from './Breathing';
import { Exercises } from './Exercises';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact componenent={HomePage}/>
        <Route path='/home' exact component={HomePage}/>
        <Route path='/video' component={Video}/>
        <Route path='/pause' component={Pause}/>
        <Route path='/reflection' component={Reflection}/>
        <Route path='/breathing' component={Breathing}/>
        <Route path='/exercises' component={Exercises}/>
        {/* make a route for homepage */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
