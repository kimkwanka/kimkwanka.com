const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = (req, res) => {
  const { name, email, message } = req.body;

  sgMail
    .send({
      to: process.env.SENDGRID_RECIPIENT,
      from: process.env.SENDGRID_SENDER,
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
