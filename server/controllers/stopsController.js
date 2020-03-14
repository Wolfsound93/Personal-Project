//FUNCTION TO ENDPOINTS IN INDEX.JS
//GETTING INFO FROM DATABASE THROUGH SQL FILES

//GET
const getStops = (req, res) => {
  const db = req.app.get('db');
  db.stops
    .get_stops()
    .then(stops => res.status(200).json(stops))
    .catch(err => console.log(err));
};
//GET BY USER
const getUserStops = (req, res) => {
  const db = req.app.get('db');
  const { user_id } = req.session.user;
  db.stops
    .get_user_stops(user_id)
    .then(user_id => res.status(200).json(user_id))
    .catch(err => console.log(err));
};
//POST
const addStops = (req, res) => {
  const db = req.app.get('db');
  console.log(req.body);
  const { fuel_stops, total_spent } = req.body.newStop;
  const { user_id } = req.session.user;
  console.log(user_id, req.body);
  db.stops
    .post_stops([fuel_stops, total_spent, stops[0].trip_id])
    .then(stops => {
      console.log(stops);
      db.stops.updateStopsId([stops[0].stops_id, stops[0].stops_id]);
    })
    .then(stops => {
      res.status(200).json(stops);
    })
    .catch(err => console.log(err));
};

//DELETE
const deleteStop = (req, res) => {
  const db = req.app.get('db');
  const stops_id = +req.param.stops_id;

  db.delete_stop(stops_id).then(response => {
    res.status(200).json(response);
  });
};
//PUT
const put_stop = (req, res) => {
  const db = req.app.get('db');
  const { stops } = req.body;
  const stops_id = +req.params.stops_id;

  db.put_stop([stops, stops_id]).then(response => {
    res.status(200).json(response);
  });
};

module.exports = {
  getStops,
  getUserStops,
  addStops,
  deleteStop,
  put_stop
};
