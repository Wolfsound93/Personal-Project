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
  let { user_id } = req.session.user;
  db.trip
    .get_trip(user_id)
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
    mileage,
    fuel_expenses,
    fuel_stops_location
  } = req.body.newTrip;

  // const { user_id } = req.session.user;
  console.log(req.body.newTrip);
  db.trip
    .post_trip([
      user_id,
      origin,
      destination,
      mileage,
      fuel_expenses,
      fuel_stops_location
    ])
    .then(trip => {
      console.log(trip);
    })
    .catch(err => console.log(err));
};
//DELETE
const deleteTrip = (req, res) => {
  console.log(req.params);
  const db = req.app.get('db');
  const trip_id = +req.params.trip_id;

  db.trip
    .delete_trip(trip_id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
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
