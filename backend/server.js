import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:8080",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json({ limit: "10kb" }));

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("? MongoDB connected:", mongoose.connection.host))
  .catch((err) => console.error("? MongoDB error:", err.message));

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Portfolio API running ??" });
});

// Contact route
import { contactRouter } from "./routes/contact.js";
app.use("/api/contact", contactRouter);

// 404
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`?? Server running on http://localhost:${PORT}`);
});
