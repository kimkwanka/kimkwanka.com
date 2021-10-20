const handler = async (req, res) => {
  try {
    const { response } = req.body;
    const recaptchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${response}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
    const data = await recaptchaRes.json();
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
  }
};

export default handler;
