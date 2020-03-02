import React, { Component } from 'react';
import './Mytrips.css';
import Header from '../Header/Header';
import AddTrip from '../AddTrip/AddTrip';
import DisplayTrip from '../DisplayTrip/DisplayTrip';

class MyTrips extends Component {
  render() {
    return (
      <div className='root-mytrips'>
        <Header />
        <div className='trip-box'>
          <h1>You don't have any trips yet!</h1>
          <button className='add-btn'>Add trip</button>
        </div>
        {/* <AddTrip /> */}
        <DisplayTrip />
        <div className='count-box'>
          <button>count all miles</button>
          <button>count total fuel</button>
        </div>
      </div>
    );
  }
}

export default MyTrips;
