//added useState
import React, { Component } from 'react';
import './AddTrip.css';
import { connect } from 'react-redux';
import { addTrip } from '../../redux/reducers/tripReducer';

class AddTrip extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: '',
      total_miles: 0,
      fuel_stops: '',
      total_spent: ''
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  handleSave = () => {
    const {
      origin,
      destination,
      total_miles,
      fuel_stops,
      total_spent
    } = this.state;

    const newTrip = {
      origin,
      destination,
      total_miles,
      fuel_stops,
      total_spent
    };
    console.log(newTrip);
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
            name='total_miles'
            onChange={this.handleInput}
            placeholder='how many miles were driven?'
          />
          <div id='stops-root'>
            <div className='total-box'>
              <h5>FUEL STOPS</h5>
            </div>
            <textarea
              name='fuel_stops'
              onChange={this.handleInput}
              // value={this.state.fuel_stops}
              placeholder='where did you fuel? (locations)&#13;&#10;stop one - "2525 preston rd, Plano TX 75093"&#13;&#10;stop two - "500 E St, Dallas TX 72441"&#13;&#10;stop three - "1900 Industrial South St, Huston TX 73299"&#13;&#10;3 STOPS MAX!'
            />

            <div className='total-box2'>
              <h5>TOTAL SPENT</h5>
            </div>

            <input
              name='total_spent'
              onChange={this.handleInput}
              value={this.props.total_spent}
              placeholder='how much did you spent?'
            />

            <h5>RECEIPT</h5>
            <input name='receipts' type='file' className='upload-btn' />
          </div>
          <button onClick={this.handleSave} className='save-btn'>
            save trip
          </button>
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
