const nodemailer = require("nodemailer");
const dns = require("dns");

// Custom lookup that forces IPv4 resolution
function dnsLookup(hostname, options, callback) {
    dns.resolve4(hostname, (err, addresses) => {
        if (err) return callback(err);
        callback(null, addresses[0], 4);
    });
}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 15000,
    socketTimeout: 15000,
    dnsLookup,
});

/**
 * Send a styled confirmation email to the guest.
 */
const sendConfirmationEmail = async (reservation) => {
    const checkin = new Date(reservation.checkin).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const checkout = new Date(reservation.checkout).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin:0;padding:0;background-color:#0d0d0f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d0d0f;padding:40px 20px;">
            <tr>
                <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1a1a1f;border-radius:16px;overflow:hidden;">

                        <!-- Header -->
                        <tr>
                            <td style="padding:40px 40px 20px;text-align:center;border-bottom:1px solid #2e2c29;">
                                <h1 style="margin:0;font-size:32px;color:#c9a96e;font-weight:300;letter-spacing:4px;">AURELIA</h1>
                                <p style="margin:8px 0 0;font-size:11px;color:#9e9b93;letter-spacing:3px;text-transform:uppercase;">Boutique Resort & Spa - Ravello</p>
                            </td>
                        </tr>

                        <!-- Confirmation -->
                        <tr>
                            <td style="padding:40px;">
                                <p style="margin:0 0 4px;font-size:11px;color:#c9a96e;text-transform:uppercase;letter-spacing:2px;">Reservation Confirmation</p>
                                <h2 style="margin:0 0 24px;font-size:26px;color:#e8e4dc;font-weight:400;">
                                    Thank you, ${reservation.name}.
                                </h2>
                                <p style="margin:0 0 30px;font-size:14px;color:#9e9b93;line-height:1.7;">
                                    We are delighted to confirm your upcoming stay at Aurelia. Below are the details of your reservation. Our concierge team will reach out shortly with personalized recommendations for your visit.
                                </p>

                                <!-- Confirmation ID -->
                                <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d0d0f;border-radius:12px;margin-bottom:30px;">
                                    <tr>
                                        <td style="padding:20px;text-align:center;">
                                            <p style="margin:0 0 4px;font-size:11px;color:#9e9b93;text-transform:uppercase;letter-spacing:2px;">Confirmation ID</p>
                                            <p style="margin:0;font-size:24px;color:#c9a96e;font-weight:600;letter-spacing:2px;">${reservation.confirmationId}</p>
                                        </td>
                                    </tr>
                                </table>

                                <!-- Details Grid -->
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="50%" style="padding:12px 0;vertical-align:top;">
                                            <p style="margin:0 0 4px;font-size:11px;color:#9e9b93;text-transform:uppercase;letter-spacing:1px;">Check-in</p>
                                            <p style="margin:0;font-size:15px;color:#e8e4dc;">${checkin}</p>
                                        </td>
                                        <td width="50%" style="padding:12px 0;vertical-align:top;">
                                            <p style="margin:0 0 4px;font-size:11px;color:#9e9b93;text-transform:uppercase;letter-spacing:1px;">Check-out</p>
                                            <p style="margin:0;font-size:15px;color:#e8e4dc;">${checkout}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="50%" style="padding:12px 0;vertical-align:top;">
                                            <p style="margin:0 0 4px;font-size:11px;color:#9e9b93;text-transform:uppercase;letter-spacing:1px;">Room</p>
                                            <p style="margin:0;font-size:15px;color:#e8e4dc;">${reservation.room}</p>
                                        </td>
                                        <td width="50%" style="padding:12px 0;vertical-align:top;">
                                            <p style="margin:0 0 4px;font-size:11px;color:#9e9b93;text-transform:uppercase;letter-spacing:1px;">Guests</p>
                                            <p style="margin:0;font-size:15px;color:#e8e4dc;">${reservation.guests}</p>
                                        </td>
                                    </tr>
                                    ${reservation.requests ? `
                                    <tr>
                                        <td colspan="2" style="padding:12px 0;vertical-align:top;">
                                            <p style="margin:0 0 4px;font-size:11px;color:#9e9b93;text-transform:uppercase;letter-spacing:1px;">Special Requests</p>
                                            <p style="margin:0;font-size:15px;color:#e8e4dc;">${reservation.requests}</p>
                                        </td>
                                    </tr>
                                    ` : ""}
                                </table>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td style="padding:30px 40px;border-top:1px solid #2e2c29;text-align:center;">
                                <p style="margin:0 0 8px;font-size:12px;color:#9e9b93;">
                                    Questions? Contact us at
                                    <a href="mailto:karishmakumavat27@gmail.com.com" style="color:#c9a96e;text-decoration:none;">karishmakumavat27@gmail.com.com</a>
                                </p>
                                <p style="margin:0;font-size:11px;color:#5a5752;">
                                    Aurelia - Boutique Resort & Spa. Ravello, Amalfi Coast, Italy.
                                </p>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;

    const mailOptions = {
        from: process.env.MAIL_FROM,
        to: reservation.email,
        subject: `Reservation Confirmed - ${reservation.confirmationId} | Aurelia Resort`,
        html,
    };

    await transporter.sendMail(mailOptions);
};

/**
 * Send a notification email to the hotel staff.
 */
const sendStaffNotification = async (reservation) => {
    const text = `
New Reservation Received
========================
Confirmation ID: ${reservation.confirmationId}
Name: ${reservation.name}
Email: ${reservation.email}
Phone: ${reservation.phone || "N/A"}
Check-in: ${reservation.checkin}
Check-out: ${reservation.checkout}
Room: ${reservation.room}
Guests: ${reservation.guests}
Special Requests: ${reservation.requests || "None"}
    `.trim();

    await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.SMTP_USER,
        subject: `New Reservation - ${reservation.confirmationId} | ${reservation.name}`,
        text,
    });
};

module.exports = { sendConfirmationEmail, sendStaffNotification };
