import React, { Component } from 'react';
import './Mytrips.css';
import Header from '../Header/Header';
import AddTrip from '../AddTrip/AddTrip';

class MyTrips extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='trip-box'>
          <h1>You don't have any trips yet!</h1>
          <button className='add-btn'>Add trip</button>
        </div>
        <AddTrip />
      </div>
    );
  }
}

export default MyTrips;
