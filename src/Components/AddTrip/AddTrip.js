import React, { Component } from 'react';
import './AddTrip.css';

class AddTrip extends Component {
  render() {
    return (
      <div id='addTrip-root'>
        <div className='trip-info'>
          <h5>ORIGIN</h5>
          <input placeholder='Where did you start your trip?' />
          <h5>FUEL STOP</h5>
          <input placeholder='where did you fuel (location)?' />
          <h5>TOTAL SPENT</h5>
          <input placeholder='how much did you spent?' />
          <h5>RECEIPTS</h5>
          <input type='file' className='upload-btn' />
          <h5>DESTENATION</h5>
          <input placeholder='where did you end you trip?' />
          <h5>TOTAL MILES</h5>
          <input placeholder='how many miles were driven?' />
          <button className='save-btn'>save trip</button>
        </div>
      </div>
    );
  }
}

export default AddTrip;
