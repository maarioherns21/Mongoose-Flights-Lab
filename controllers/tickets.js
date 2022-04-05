const Ticket = require("../models/ticket");
const Flight = require("../models/flight");
const flight = require("../models/flight");

module.exports = {
  new: newTicket,
  create,
  addToTicket,
};

function addToTicket(req, res) {
  Flight.findById(req.params.id, function (err, flightDocument) {
    flightDocument.ticketNew.push(req.body.ticketId);
    flightDocument.save(function (err) {
      res.redirect(`/flights/${flightDocument._id}`);
    });
  });
}

function create(req, res) {
  Ticket.create(req.body, function (err, ticket) {
    res.redirect("/tickets/new");
  });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    res.render("tickets/new", {
      tickets,
    });
  });
}
