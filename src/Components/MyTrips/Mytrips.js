import React, { Component } from 'react';
import './Mytrips.css';
import Header from '../Header/Header';
import AddTrip from '../AddTrip/AddTrip';
import DisplayTrip from '../DisplayTrip/DisplayTrip';
import { getTrips } from '../../redux/reducers/tripReducer';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

class MyTrips extends Component {
  constructor() {
    super();
    this.state = {
      view: ''
    };
  }

  //componentdidmount  - axios request to get all trips for specific user. store in state.
  componentDidMount() {
    this.setState({ view: this.props.trip });
    this.props.getTrips();
  }

  addTrip = () => {
    this.setState({ view: 'addTrip' });
  };

  displayTrip = () => {
    this.setState({ view: 'displayTrip' });
  };

  render() {
    // if (this.state.view !== this.props.trip) {
    //   return <Redirect to='/home' />;
    // }
    console.log(this.props);
    return (
      <div className='mytrips-root'>
        <Header />
        <div className='trip-box'>
          <h1>You don't have any trips yet!</h1>
          <button onClick={this.addTrip} className='add-btn'>
            Add trip
          </button>
        </div>
        {/* {this.props.trip.length === 0 ? null : (
          <DisplayTrip trip={this.props.trip} />
        )} */}
        {this.state.view === 'addTrip' ? <AddTrip /> : null}
        <div className='count-box'>
          <button>count all miles</button>
          <button>count total fuel</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = initialState => {
  return {
    trip: initialState.tripReducer.trip
  };
};

export default connect(mapStateToProps, { getTrips })(MyTrips);
