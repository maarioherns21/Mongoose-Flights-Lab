const express = require("express");
const router = express.Router();
const flightsCtrl = require("../controllers/flights");

router.get("/", flightsCtrl.index);

router.get("/new", flightsCtrl.new);
/* GET users listing. */
router.get("/:id", flightsCtrl.show);
// POST /movies
router.post("/", flightsCtrl.create);

module.exports = router;
