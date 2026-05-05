import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { contactRouter } from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Fix CORS — allow all origins in development
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json({ limit: "10kb" }));

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("? MongoDB connected:", mongoose.connection.host))
  .catch((err) => console.error("? MongoDB error:", err.message));

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Portfolio API running ??" });
});

// Routes
app.use("/api/contact", contactRouter);

// 404
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`?? Server running on http://localhost:${PORT}`);
});
