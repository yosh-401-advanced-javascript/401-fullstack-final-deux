'use strict';


const express = require('express');
const cors = require('cors');

const router = require('./routes/toys');

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);


module.exports = {
  app,
  start: () => {
    app.listen(4000, () => {
      console.log('App is running on port 4000');
    })
  },
}
