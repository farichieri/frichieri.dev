import nodemailer from 'nodemailer';

export default async function mail(req, res) {
  const { name, email, message } = JSON.parse(req.body);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: `${process.env.NEXT_PUBLIC_EMAIL_DEV}`,
      subject: `New message from: ${name}`,
      html: `
      <div>
        <p>You have received a new message from the contact form:</p><br>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>
      </div>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: '' });
}
