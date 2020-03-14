//FUNCTION TO ENDPOINTS IN INDEX.JS
//GETTING INFO FROM DATABASE THROUGH SQL FILES

//GET
const getTrips = (req, res) => {
  const db = req.app.get('db');
  db.trip
    .get_trip()
    .then(trips => res.status(200).json(trips))
    .catch(err => console.log(err));
};
// GET BY USER
const getUserTrips = (req, res) => {
  const db = req.app.get('db');
  console.log(req.session.user);
  let { user_id } = req.session.user.user_id;
  db.trip
    .get_users_trip(user_id)
    .then(user_id => res.status(200).json(user_id))
    .catch(err => console.log(err));
};
//POST
const addTrip = (req, res) => {
  const db = req.app.get('db');
  console.log(req.body);
  let user_id = req.session.user.user_id;
  const {
    origin,
    destination,
    milage,
    fuel_expenses,
    fuel_stops_location
  } = req.body.newTrip;

  // const { user_id } = req.session.user;
  // console.log(user_id, req.body);
  db.trip
    .post_trip([
      origin,
      destination,
      milage,
      user_id,
      fuel_expenses,
      fuel_stops_location
    ])
    .then(trip => {
      db.trip
        .post_trip([
          origin,
          destination,
          milage,
          user_id,
          fuel_expenses,
          fuel_stops,
          fuel_stops_location,
          trip[0].trip_id
          // receipt,
        ])
        .then(trip => {
          console.log(trip);
          db.trip.put_trip([trip[0].trip_id, stops[0].stops_id]);
        });
      //ABOVE//
      res.status(200).json(trip);
    })
    .catch(err => console.log(err));
};
//DELETE
const deleteTrip = (req, res) => {
  const db = req.app.get('db');
  const trip_id = +req.param.trip_id;

  db.delete_trip(trip_id).then(response => {
    res.status(200).json(response);
  });
};
//PUT
const put_trip = (req, res) => {
  const db = req.app.get('db');
  const { trip } = req.body;
  const trip_id = +req.params.trip_id;

  db.put_trip([trip, trip_id]).then(response => {
    res.status(200).json(response);
  });
};

module.exports = {
  getTrips,
  getUserTrips,
  addTrip,
  deleteTrip,
  put_trip
};
