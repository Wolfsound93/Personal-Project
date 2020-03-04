//FUNCTION TO ENDPOINTS IN INDEX.JS
//GETTING INFO FROM DATABASE THROUGH SQL FILES

//GET
const getTrips = (req, res) => {
  const db = req.app.get('db');
  db.get_trip()
    .then(trips => res.status(200).json(trips))
    .catch(err => console.log(err));
};

//POST

//DELETE

module.exports = {
  getTrips
};
