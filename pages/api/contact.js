const dotenv = require('dotenv');

dotenv.config();

const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY, SENDGRID_SENDER, SENDGRID_RECIPIENT } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const handler = (req, res) => {
  const { name, email, message } = req.body;

  sgMail
    .send({
      to: SENDGRID_RECIPIENT,
      from: SENDGRID_SENDER,
      subject: `Name: ${name} Email: ${email}`,
      text: `Message:\n${message}`,
    })
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
  res.status(200).send(req.body);
};

export default handler;
