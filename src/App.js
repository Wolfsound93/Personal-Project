import React, { Component } from 'react';
import Login from './Components/Login/Login';
import Regsiter from './Components/Register/Register';
import Home from './Components/Home/Home';
import MyTrips from './Components/MyTrips/MyTrips';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Login /> */}
        {/* <Regsiter /> */}
        {/* <Home /> */}
        <MyTrips />
      </div>
    );
  }
}

export default App;
