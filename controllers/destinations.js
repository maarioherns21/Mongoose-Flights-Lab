const Flight = require("../models/flight");

module.exports = {
  create,
};

function create(req, res) {
  Flight.findById(req.params.id, function (err, destinationDb) {
    destinationDb.destinations.push(req.body);

    destinationDb.save(function (err) {
      console.log(destinationDb);

      res.redirect(`/flights/${destinationDb._id}`);
    });
  });
}
