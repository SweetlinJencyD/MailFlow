const sgMail = require("@sendgrid/mail");

const sendMail = (mails, subject, message) => {
  sgMail.setApiKey(process.env.Mail_Secret);
  console.log("mails", mails);
  console.log("subject", subject);
  console.log("msg", message);
  const msg = {
    to: mails,
    from: "vishnusatheeshdev@gmail.com",
    subject: subject,
    text: message,
  };
  sgMail;
  sgMail
    .send(msg, true)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendMail };
