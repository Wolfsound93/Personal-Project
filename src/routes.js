import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

//components
import Home from './Components/Home/Home';
import MyTrips from './Components/MyTrips/MyTrips';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import DisplayTrip from './Components/DisplayTrip/DisplayTrip';

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/MyTrips' component={MyTrips} />
      <Route path='/Register' component={Register} />
      <Route path='/DisplayTrip' component={DisplayTrip} />
    </Switch>
  </BrowserRouter>
);
