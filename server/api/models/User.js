const { ObjectID } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  UserID: {
    type: ObjectID,
    required: true
  },
  UserLastName: {
    type: String,
    required: true
  },
  UserFirstName: {
    type: String,
    required: true
  },
  UserDOB: {
    type: Date,
    required: true
  },
  UserEmailAddress: {
    type: String,
    required: true
  },
  UserPassword: {
    type: String,
    required: true
  },
  UserStreetAddress: {
    type: String,
    required: true
  },
  UserPostalCode: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Users", UserSchema);