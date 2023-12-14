const mongoose = require("mongoose");

const RiderSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  bike: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  placeOfBirth: {
    type: String,
  },
  height: {
    type: String,
  },
  story: {
    type: String,
  },
});

const Rider = mongoose.model("Rider", RiderSchema);
module.exports = Rider;
