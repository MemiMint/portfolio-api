import { config } from "dotenv";
import { createTransport } from "nodemailer";

config();

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.APP_PASSWORD,
  },
});
