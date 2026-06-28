const transport = require("../config/emailConfig");

const sendEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await transport.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody,
        });
        console.log(response);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    sendEmail,
};
