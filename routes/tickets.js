const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../controllers/tickets");

router.get("/tickets/new", ticketsCtrl.new);
router.post("/flights/:id/tickets", ticketsCtrl.addToTicket);

module.exports = router;
