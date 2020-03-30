//added useState
import React, { Component } from 'react';
import './AddTrip.css';
import { connect } from 'react-redux';
import { addTrip } from '../../redux/reducers/tripReducer';
import { Link } from 'react-router-dom';

class AddTrip extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: '',
      milage: null,
      fuel_stops_location: '',
      fuel_expenses: null
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  handleSave = () => {
    const {
      origin,
      destination,
      mileage,
      fuel_expenses,
      fuel_stops_location
    } = this.state;

    const newTrip = {
      origin,
      destination,
      mileage,
      fuel_expenses,
      fuel_stops_location
    };
    this.props.addTrip(newTrip);
  };
  render() {
    return (
      <div id='addTrip-root'>
        <div className='trip-info'>
          <h5>ORIGIN</h5>
          <input
            name='origin'
            onChange={this.handleInput}
            placeholder='Where did you start your trip?'
          />

          <h5>DESTINATION</h5>
          <input
            name='destination'
            onChange={this.handleInput}
            placeholder='where did you end you trip?'
          />

          <h5>TOTAL MILES</h5>
          <input
            name='mileage'
            onChange={this.handleInput}
            placeholder='how many miles were driven?'
          />
          <div id='stops-root'>
            <div className='total-box'>
              <h5>FUEL STOPS</h5>
              <h5>TOTAL SPENT</h5>
            </div>

            <div className='stop-inputs'>
              <textarea
                name='fuel_stops_location'
                onChange={this.handleInput}
                placeholder='where did you fuel? (locations)&#13;&#10;stop one - "2525 preston rd, Plano TX 75093"&#13;&#10;stop two - "500 E St, Dallas TX 72441"&#13;&#10;stop three - "1900 Industrial South St, Huston TX 73299"&#13;&#10;3 STOPS MAX!'
              />

              <input
                name='fuel_expenses'
                onChange={this.handleInput}
                placeholder='how much did you spent?'
              />
            </div>

            <h5>RECEIPT</h5>
            <input name='receipts' type='file' className='upload-btn' />
          </div>
          <Link to='DisplayTrip'>
            <button onClick={this.handleSave} className='save-btn'>
              save trip
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trip: state.tripReducer.addTrip
  };
};

export default connect(mapStateToProps, { addTrip })(AddTrip);
