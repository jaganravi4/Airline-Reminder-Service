const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");

const apiRouter = require("./routes/index");
const { setupJob } = require("./utils/job");

const start = () => {
    const app = express();

    app.use(
        bodyParser.urlencoded({
            extended: true,
        }),
    );

    app.use(bodyParser.json());

    app.use("/api", apiRouter);

    app.listen(PORT, () => {
        console.log(`Server started on PORT`, PORT);
        // setupJob();
    });
}

start();