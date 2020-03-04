import React, { Component } from 'react';
import './AddTrip.css';

class AddTrip extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      fuel_stop: '',
      fuel_stops: [],
      total_spent: 0,
      destination: '',
      total_miles: 0
    };
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value})
  }
  handleAddFuelStop = () => {
    if (this.state.fuel_stop) {
      const fuelStopsCopy = [...this.state.fuel_stops];

      fuelStopsCopy.push(this.state.fuel_stop);

      this.setState({
        fuel_stop: '',
        fuel_stops: fuelStopsCopy
      });
    }
  }
  handleSave = () => {
    const {
      origin,
      fuel_stops,
      total_spent,
      destination,
      total_miles
    } = this.state;

    const newTrip = {
      origin,
      fuel_stops,
      total_spent,
      destination,
      total_miles
    }

    console.log(newTrip)
  }
  render() {
    return (
      <div id='addTrip-root'>
        <div className='trip-info'>
          <h5>ORIGIN</h5>
          <input name='origin' onChange={this.handleInput} placeholder='Where did you start your trip?' />

          <h5>FUEL STOP</h5>
          <input name='fuel_stop' onChange={this.handleInput} onBlur={this.handleAddFuelStop} value={this.state.fuel_stop} placeholder='where did you fuel (location)?' />

          <h5>TOTAL SPENT</h5>
          <input name='total_spent' onChange={this.handleInput} placeholder='how much did you spent?' />

          <h5>RECEIPTS</h5>
          <input name='receipts' type='file' className='upload-btn' />

          <h5>DESTINATION</h5>
          <input name='destination' onChange={this.handleInput} placeholder='where did you end you trip?' />

          <h5>TOTAL MILES</h5>
          <input name='total_miles' onChange={this.handleInput} placeholder='how many miles were driven?' />

          <button onClick={this.handleSave} className='save-btn'>save trip</button>
        </div>
      </div>
    );
  }
}

export default AddTrip;
