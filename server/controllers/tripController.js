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

const getUserTrips = (req, res) => {
  const db = req.app.get('db');
  const { user_id } = req.session.user;
  db.trip
    .get_user_trip(user_id)
    .then(user_id => res.status(200).json(user_id))
    .catch(err => console.log(err));
};

//POST

//DELETE

module.exports = {
  getTrips,
  getUserTrips
};
