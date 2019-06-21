import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Profile from './pages/Profile';
import Challenge from './pages/Challenge';

export default class App extends React.Component {

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Profile} />
          <Route exact path="/challenge" component={Challenge} />
        </BrowserRouter>
      </div>
    );
  }

}

