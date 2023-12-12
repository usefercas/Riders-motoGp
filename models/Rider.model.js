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
  nationality: {
    type: String,
    required: true,
  },
});

const Rider = mongoose.model("Rider", RiderSchema);
module.exports = Rider;
