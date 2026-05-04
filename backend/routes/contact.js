import { Router } from "express";
import { body, validationResult } from "express-validator";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

export const contactRouter = Router();

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  subject: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  read: { type: Boolean, default: false },
}, { timestamps: true });

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

const validateContact = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ min: 2, max: 80 }),
  body("email").trim().isEmail().withMessage("Enter a valid email").normalizeEmail(),
  body("subject").trim().isLength({ min: 3, max: 120 }).withMessage("Subject too short"),
  body("message").trim().isLength({ min: 10, max: 2000 }).withMessage("Message too short"),
];

contactRouter.post("/", validateContact, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: "Validation failed",
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      });
    }

    const { name, email, subject, message } = req.body;

    // Save to MongoDB
    const contact = await Contact.create({ name, email, subject, message });
    console.log("? Message saved to MongoDB:", contact._id);

    // Send email non-blocking
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `<h2>New message from ${name}</h2><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    }).then(() => console.log("? Email sent to Kelvin"))
      .catch((err) => console.error("?? Email error:", err.message));

    res.status(201).json({
      success: true,
      message: "Message received! I will reply within 24 hours.",
      id: contact._id,
    });
  } catch (err) {
    console.error("? Contact route error:", err);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});

contactRouter.get("/", async (req, res) => {
  try {
    const adminKey = req.headers["x-admin-key"];
    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const messages = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});
