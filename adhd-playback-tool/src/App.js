import React from 'react';
import './styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Video from './Video';
import { HomePage } from './HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact componenent={HomePage}/>
        <Route path='/home' exact component={HomePage}/>
        <Route path='/video' exact component={Video}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
