const express = require("express");

const TicketController = require("../../controllers/ticket-controller");

const router = express.Router();

router.post("/", TicketController.create);

module.exports = router;
