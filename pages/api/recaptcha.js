export default async function validateCaptcha(req, res) {
  try {
    const secret_key = process.env.RECAPTCHA_SECRETKEY;
    const token = req.body;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
    await fetch(url, {
      method: 'post',
    })
      .then((response) => response.json())
      .then((google_response) => {
        if (google_response.success == true) {
          res.status(200).json({ google_response });
        } else {
          res.status(401).json({ google_response });
        }
      })
      .catch((err) => {
        console.error(error);
        res.status(401).json({ google_response });
      });
  } catch (error) {
    console.error(error);
  }
}
