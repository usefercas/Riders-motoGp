const mongoose = require("mongoose");

const FavouriteSchema = mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    rider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rider", 
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true,
    },
});

const Favaurite = mongoose.model("Favaurite", FavouriteSchema);
module.exports = Favaurite;