const mongoose = require("mongoose");

const RiderSchema = mongoose.Schema({
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
