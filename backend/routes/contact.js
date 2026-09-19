import { Router } from "express";
import { body, validationResult } from "express-validator";
import { Contact } from "../models/Contact.js";
import { sendContactEmail } from "../config/mailer.js";

export const contactRouter = Router();

// ─── Validation rules ─────────────────────────────────────────────────────────
const validateContact = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 2, max: 80 }).withMessage("Name must be 2–80 characters"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Enter a valid email address")
    .normalizeEmail(),

  body("subject")
    .trim()
    .notEmpty().withMessage("Subject is required")
    .isLength({ min: 3, max: 120 }).withMessage("Subject must be 3–120 characters"),

  body("message")
    .trim()
    .notEmpty().withMessage("Message is required")
    .isLength({ min: 10, max: 2000 }).withMessage("Message must be 10–2000 characters"),
];

// ─── POST /api/contact ────────────────────────────────────────────────────────
contactRouter.post("/", validateContact, async (req, res, next) => {
  try {
    // 1. Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: "Validation failed",
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      });
    }

    const { name, email, subject, message } = req.body;
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    // 2. Save to MongoDB
    const contact = await Contact.create({ name, email, subject, message, ip });

    // 3. Send emails (Kelvin + auto-reply) — non-blocking for response
    sendContactEmail({ name, email, subject, message }).catch((err) =>
      console.error("⚠️  Email send error (message was saved):", err.message)
    );

    // 4. Respond immediately — don't wait for email
    res.status(201).json({
      success: true,
      message: "Message received! I'll reply within 24 hours.",
      id: contact._id,
    });
  } catch (err) {
    next(err);
  }
});

// ─── GET /api/contact (admin — list messages) ─────────────────────────────────
contactRouter.get("/", async (req, res, next) => {
  try {
    const adminKey = req.headers["x-admin-key"];
    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const messages = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(100)
      .select("-ip");
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    next(err);
  }
});
