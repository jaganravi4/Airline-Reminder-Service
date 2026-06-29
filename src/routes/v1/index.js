const express = require("express");

const router = express.Router();

const ticketRouter = require("./ticket-routes");

router.use("/tickets", ticketRouter);

module.exports = router;
