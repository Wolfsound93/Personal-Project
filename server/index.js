const express = require('express');
const massive = require('massive');
const app = express();
require('dotenv').config();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
    console.log('DB CONNECTED');
  })
  .catch(res => console.log(res));

app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`the server in on!`));
