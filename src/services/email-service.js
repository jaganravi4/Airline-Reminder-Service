const transport = require("../config/emailConfig");
const TicketRepository = require("../repositories/ticket-repository");

class EmailService {
    constructor() {
        this.ticketRepository = new TicketRepository();
    }

    async createNotification(data) {
        try {
            const date = new Date(data.notificationTime);
            data.notificationTime = date;
            const ticket = await this.ticketRepository.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async sendEmail(mailFrom, mailTo, mailSubject, mailBody) {
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
    }

    async fetchPendingEmails() {
        try {
            const response = await this.ticketRepository.get({
                status: "PENDING",
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateTicket(ticketId, data) {
        try {
            const response = await this.ticketRepository.update(ticketId, data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = EmailService;
