import React, { Component } from 'react';
import './DisplayTrip.css';

class DisplayTrip extends Component {
  render() {
    return (
      <div id='root-displytrip'>
        <div className='trip-container'>
          <h4>Trip 1</h4>
          <div className='box1'>
            <h5>ORIGIN:</h5>
            <h6></h6>
          </div>
          <div className='box2'>
            <h5>FUEL STOPS:</h5>
            <h6></h6>
          </div>
          <div className='box3'>
            <h5>TOTAL SPENT:</h5>
          </div>
          <div className='box4'>
            <h5>RECEIPTS:</h5>
            <div className='img-container'>
              <div className='img-1'></div>
              <div className='img-2'></div>
              <div className='img-3'></div>
            </div>
          </div>
          <div className='box5'>
            <h5>DESTINATION:</h5>
            <h6></h6>
          </div>
          <div className='box6'>
            <h5>TOTAL MILES:</h5>
            <h6></h6>
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
