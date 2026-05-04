import nodemailer from "nodemailer";

// ─── Create reusable transporter ─────────────────────────────────────────────
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not your real password)
    },
  });
};

// ─── Send contact notification to Kelvin ─────────────────────────────────────
export const sendContactEmail = async ({ name, email, subject, message }) => {
  const transporter = createTransporter();

  // Email to Kelvin (notification)
  const mailToKelvin = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; background: #0A0F1E; color: #f1f5f9; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: #111827; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b; }
            .header { background: linear-gradient(135deg, #3B82F6, #8B5CF6); padding: 32px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; color: #fff; font-weight: 700; }
            .header p { margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 14px; }
            .body { padding: 32px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; margin-bottom: 6px; }
            .value { font-size: 15px; color: #e2e8f0; background: #1e293b; padding: 12px 16px; border-radius: 8px; border-left: 3px solid #3B82F6; }
            .message-box { font-size: 15px; color: #e2e8f0; background: #1e293b; padding: 16px; border-radius: 8px; line-height: 1.7; border-left: 3px solid #8B5CF6; white-space: pre-wrap; }
            .footer { padding: 20px 32px; border-top: 1px solid #1e293b; text-align: center; font-size: 12px; color: #475569; }
            .badge { display: inline-block; background: #10b981; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Portfolio Message</h1>
              <p>Someone reached out through your portfolio</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">From</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color:#3B82F6;text-decoration:none;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              <span class="badge">Kelvin Kiprono Portfolio</span>
              <p style="margin-top:12px;">Sent at ${new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })} EAT</p>
              <p>Reply directly to this email to respond to ${name}</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  // Auto-reply to the sender
  const autoReply = {
    from: `"Kelvin Kiprono" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name.split(" ")[0]}! — Kelvin Kiprono`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #3B82F6, #8B5CF6); padding: 32px; text-align: center; }
            .header h1 { margin: 0; font-size: 22px; color: #fff; font-weight: 700; }
            .body { padding: 32px; line-height: 1.7; }
            .body p { color: #475569; margin: 0 0 16px; }
            .highlight { background: #eff6ff; border-radius: 8px; padding: 16px; border-left: 3px solid #3B82F6; margin: 20px 0; color: #1e40af; font-size: 14px; }
            .footer { padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8; }
            .social-links { margin: 12px 0; }
            .social-links a { display: inline-block; margin: 0 6px; color: #3B82F6; text-decoration: none; font-weight: 500; font-size: 13px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Hey ${name.split(" ")[0]}, got your message! 👋</h1>
            </div>
            <div class="body">
              <p>Thanks for reaching out through my portfolio. I've received your message about <strong>"${subject}"</strong> and will get back to you within <strong>24 hours</strong>.</p>
              <div class="highlight">
                💡 While you wait, feel free to check out my latest projects on GitHub or connect with me on LinkedIn.
              </div>
              <p>Looking forward to the conversation!</p>
              <p>— Kelvin Kiprono<br><span style="color:#94a3b8;font-size:13px;">Full-Stack Developer | Nairobi, Kenya</span></p>
            </div>
            <div class="footer">
              <div class="social-links">
                <a href="https://github.com/skywalker2004">GitHub</a>
                <a href="mailto:kelvinkipron0659@gmail.com">Email</a>
              </div>
              <p>You're receiving this because you submitted a form on Kelvin's portfolio.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  // Send both emails concurrently
  await Promise.all([
    transporter.sendMail(mailToKelvin),
    transporter.sendMail(autoReply),
  ]);
};
