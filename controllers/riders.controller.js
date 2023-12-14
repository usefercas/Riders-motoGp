const Rider = require('../models/Rider.model');

module.exports.list = function(req, res, next) {
  Rider.find()
    .then(riders => res.render("riders/list", { riders }))
    .catch(error => next(error));
}

module.exports.details = function(req, res, next) {
  const {id} = req.params
  Rider.findById(id)

    .then(rider => res.render("riders/details", { rider }))// meter un condicional de errores
    .catch(error => next(error));
}
