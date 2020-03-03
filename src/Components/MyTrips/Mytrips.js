import React, { Component } from 'react';
import './Mytrips.css';
import Header from '../Header/Header';
import AddTrip from '../AddTrip/AddTrip';
import DisplayTrip from '../DisplayTrip/DisplayTrip';

class MyTrips extends Component {
  constructor() {
    super();
    this.state = {
      view: 'displayTrip'
    };
  }

  addTrip = () => {
    this.setState({ view: 'addTrip' });
  };

  displayTrip = () => {
    this.setState({ view: 'displayTrip' });
  };

  render() {
    return (
      <div className='mytrips-root'>
        <Header />
        <div className='trip-box'>
          <h1>You don't have any trips yet!</h1>
          <button onClick={this.addTrip} className='add-btn'>
            Add trip
          </button>
        </div>
        {this.state.view === 'addTrip' ? <AddTrip /> : <DisplayTrip />}
        <div className='count-box'>
          <button>count all miles</button>
          <button>count total fuel</button>
        </div>
      </div>
    );
  }
}

export default MyTrips;
