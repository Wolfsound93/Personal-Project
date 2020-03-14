require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

//CONTROLLERS
const auth = require('./controllers/authController');
const stops = require('./controllers/stopsController');
const trip = require('./controllers/tripController');

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
    console.log('DB CONNECTED');
  })
  .catch(res => console.log(res));

app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

app.use(express.json());

//authentication endpoints
app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.get('/auth/logout', auth.logOut);
app.get('/auth/user', auth.get_user);
//trips
app.get('/api/trips', trip.getTrips); // follow the yellow brick road
app.get('/api/user/trips', trip.getUserTrips); //follow the yellow brick road
app.delete('/api/trip/:id', trip.deleteTrip);
app.post('/api/trip', trip.addTrip);
app.put('/api/trip', trip.put_trip);
//stops
app.get('./api/user/stops', stops.getStops);
app.post('/api/stops', stops.addStops);
app.delete('/api/stops/:id', stops.deleteStop);
app.put('/api/stops/:id', stops.put_stop);

app.listen(SERVER_PORT, () => console.log(`the server in on!`));
