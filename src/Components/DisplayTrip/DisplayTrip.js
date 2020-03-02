import React, { Component } from 'react';
import './DisplayTrip.css';

class DisplayTrip extends Component {
  render() {
    return (
      <div id='root-displytrip'>
        <div className='trip-container'>
          <h4>Trip 1</h4>
          <div className='box1'>
            <h5>Origin:</h5>
          </div>
          <div className='box2'>
            <h5>Fuel Stop:</h5>
          </div>
          <div className='box3'>
            <h5>Total Spent:</h5>
          </div>
          <div className='box4'>
            <h5>Receipts:</h5>
          </div>
          <div className='box5'>
            <h5>Destination:</h5>
          </div>
          <div className='box6'>
            <h5>Total Miles:</h5>
          </div>
          <div className='box7'>
            <button>Edit Trip</button>
            <button>Delete Trip</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayTrip;
