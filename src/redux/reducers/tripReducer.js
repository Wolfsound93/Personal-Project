import axios from 'axios';
require('dotenv').config();

//INITIAL STATE
const initialState = {
  trips: []
};

//CONSTANTS
const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELD = 'RESET_FIELD';
const GET_TRIPS = 'GET_TRIPS';

//ACTION CREATORS
export const updateState = e => {
  return {
    type: UPDATE_STATE,
    payload: e
  };
};

export const getTrips = () => {
  return {
    type: GET_TRIPS,
    payload: axios.get('/api/trips')
  };
};

//REDUCER
export default function tripReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case UPDATE_STATE:
      return {
        ...state,
        ...payload
      };
    case RESET_FIELD:
      return {
        trips: []
      };

    //TRIPS
    case GET_TRIPS + '_FULFILLED':
      return {
        ...state,
        trips: payload.data
      };

    default:
      return state;
  }
}
