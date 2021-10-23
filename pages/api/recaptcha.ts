import { NextApiRequest, NextApiResponse } from 'next';
// TODO: Find a fix for ESLint bug "TypeError: Cannot read property 'value' of null"
// Proposed solution didn't work:
// https://github.com/babel/babel-eslint/issues/799#issuecomment-533951967

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { response } = req.body;
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${response}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await recaptchaRes.json();

    res.status(200).send(data);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export default handler;
