const cron = require("node-cron");
const EmailService = require("../services/email-service");
const transport = require("../config/emailConfig");

const emailService = new EmailService();

const setupJob = () => {
    cron.schedule("*/2 * * * *", async () => {
        const response = await emailService.fetchPendingEmails();
        response.forEach((email) => {
            transport.sendMail(
                {
                    from: "reminder@airline.com",
                    to: email.dataValues.recipientEmail,
                    subject: email.dataValues.subject,
                    text: email.dataValues.content,
                },
                async (error, data) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(data);
                        await emailService.updateTicket(email.dataValues.id, {
                            status: "SUCCESS",
                        });
                    }
                },
            );
        });
        console.log(response);
    });
};

module.exports = {
    setupJob,
};
