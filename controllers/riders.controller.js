const Rider = require("../models/Rider.model");

module.exports.list = function (req, res, next) {
  const query = {};

  if (req.query.search) {
    const regex = new RegExp(req.query.search, 'i');

    query.name ={ $regex: regex };
  }

  Rider.find(query)
    .then((riders) => res.render("riders/list", { riders }))
    .catch((error) => next(error));
};

module.exports.details = function (req, res, next) {
  const { id } = req.params;
  Rider.findById(id)

    .then((rider) => res.render("riders/details", { rider })) // meter un condicional de errores
    .catch((error) => next(error));
};

//aqui get
module.exports.create = (req, res, next) => {
  res.render("riders/form"); // meter un condicional de errores
};

//aqui post
module.exports.doCreate = function (req, res, next) {
  Rider.create(req.body);
  then((riderDB) => res.redirect(`/riders/${id}`)).catch((err) => {
    //Comprobar err instanceof mongoose.ValidationError

    next(err);
  });
};

module.exports.update = (req, res, next) => {
  const { id } = req.params;
  Rider.findById(id)
    .then((rider) => res.render("riders/form", { rider })) // meter un condicional de errores
    .catch((error) => next(error));
};

module.exports.doUpdate = function (req, res, next) {
  const { id } = req.params;
  const updates = { ...req.body };

  if (req.file) {
    updates.image = req.file.path;
  }

  Rider.findByIdAndUpdate(id, updates, { new: true })
    .then((riderDB) => res.redirect(`/riders/${id}`))
    .catch((err) => {
      //Comprobar err instanceof mongoose.ValidationError

      next(err);
    });
};

module.exports.delete = (req, res, next) => {
  const { id } = req.params;
  Rider.findByIdAndDelete(id)
    .then((rider) => res.redirect("/riders"))
    .catch((error) => next(error));
};
