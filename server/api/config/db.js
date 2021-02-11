const mongoose = require("mongoose");

const dbURI = 'mongodb+srv://sample:sample@stockbud-db.bjlv0.mongodb.net/userdata?retryWrites=true&w=majority';
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/User");