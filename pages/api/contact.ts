import { NextApiRequest, NextApiResponse } from 'next';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;

  try {
    await sgMail.send({
      to: process.env.SENDGRID_RECIPIENT || '',
      from: process.env.SENDGRID_SENDER || '',
      subject: `Name: ${name} Email: ${email}`,
      text: `Message:\n${message}`,
    });

    res.status(202).send({ success: true, error: null });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ success: false, error: error.message });
  }
};

export default handler;
