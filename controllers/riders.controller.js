const Rider = require('../models/Rider.model');

module.exports.list = function(req, res, next) {
  Rider.find()
    .then(riders => res.render("riders/list", { riders }))
    .catch(error => next(error));
}
