import React from 'react';
import './styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import { MoreInformation } from './MoreInformation';
import { HomePage } from './HomePage';
import {ProgressBar} from './ProgressBar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact componenent={HomePage}/>
        <Route path='/home' exact component={HomePage}/>
        {/* <Route path='/more' exact component={MoreInformation}/> */}
        <Route path='/progress' exact component={ProgressBar}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
