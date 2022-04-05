const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: { type: String, enum: ["AUS", "DFW", "DEN", "LAX", "SAN"] },
  arrival: { type: Date },
});

const flightSchema = new Schema({
  airline: String,
  flightNo: Number,
  airport: String,
  arriving: Boolean,
  departs: Date,
  destinations: [destinationSchema],
  ticketNew: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
});

module.exports = mongoose.model("Flight", flightSchema);
