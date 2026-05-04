import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [80, "Name too long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
      maxlength: [160, "Email too long"],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      minlength: [3, "Subject too short"],
      maxlength: [120, "Subject too long"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message is too short"],
      maxlength: [2000, "Message too long"],
    },
    read: {
      type: Boolean,
      default: false,
    },
    ip: {
      type: String,
      select: false, // hide from API responses
    },
  },
  {
    timestamps: true, // adds createdAt + updatedAt automatically
  }
);

export const Contact = mongoose.model("Contact", contactSchema);
