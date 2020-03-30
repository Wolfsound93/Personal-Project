import React, { Component } from 'react';
import './DisplayTrip.css';
import { connect } from 'react-redux';
import { getTrips, deleteTrip } from '../../redux/reducers/tripReducer';
import { Redirect } from 'react-router-dom';

class DisplayTrip extends Component {
  constructor() {
    super();

    this.state = {
      trips: false
    };
  }
  componentDidMount() {
    this.props.getTrips();
    this.setState({ trips: true });
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state.trips) {
      return this.props.getTrips();
    }
  }

  render() {
    // if (this.state.trips === '') {
    //   return <Redirect to='/home' />;
    // }
    console.log(this.props.trip);
    const mappedTrips = this.props.trip.map((val, index) => {
      return (
        <div id='root-displytrip' key={index}>
          <div className='trip-container'>
            <h4>Trip 1</h4>
            <div className='box1'>
              <h5>ORIGIN:</h5>
              <h6>{val.origin}</h6>
            </div>
            <div className='box2'>
              <h5>FUEL STOP:</h5>
              <h6>{val.fuel_stops_location}</h6>
            </div>
            <div className='box3'>
              <h5>TOTAL SPENT:</h5>
              <h6>{val.fuel_expenses}</h6>
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
              <h6>{val.destination}</h6>
            </div>
            <div className='box6'>
              <h5>TOTAL MILES:</h5>
              <h6>{val.mileage}</h6>
            </div>
            <div className='box7'>
              <button>Edit Trip</button>
              <button onClick={() => this.props.deleteTrip(val.trip_id)}>
                Delete Trip
              </button>
            </div>
          </div>
        </div>
      );
    });

    return <>{mappedTrips}</>;
  }
}

// export default DisplayTrip;
const mapStateToProps = initialState => {
  return {
    trip: initialState.tripReducer.trip
  };
};

export default connect(mapStateToProps, { getTrips, deleteTrip })(DisplayTrip);
//3.3.20
