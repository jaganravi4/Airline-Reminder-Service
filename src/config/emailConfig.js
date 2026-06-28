const nodemailer = require("nodemailer");

const {
    MAILTRAP_HOST,
    MAILTRAP_PORT,
    MAILTRAP_USERNAME,
    MAILTRAP_PASSWORD,
} = require("./serverConfig");

const transport = nodemailer.createTransport({
    host: MAILTRAP_HOST,
    port: MAILTRAP_PORT,
    auth: {
        user: MAILTRAP_USERNAME,
        pass: MAILTRAP_PASSWORD,
    },
});

module.exports = transport;
