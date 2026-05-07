import nodemailer from "nodemailer";

export const sendContactEmail = async ({ name, email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <h2>New message from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  await transporter.sendMail({
    from: `"Kelvin Kiprono" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name.split(" ")[0]}!`,
    html: `
      <h2>Hey ${name.split(" ")[0]}, got your message!</h2>
      <p>Thanks for reaching out. I received your message about <strong>${subject}</strong> and will reply within 24 hours.</p>
      <p>— Kelvin Kiprono<br>Full-Stack Developer | Nairobi, Kenya</p>
    `,
  });
};
