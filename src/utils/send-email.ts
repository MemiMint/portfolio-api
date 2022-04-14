import { transporter } from "../config/mailer";
import { SendMailOptions } from "nodemailer";

export const sendEmail = async (
  email: string,
  name: string,
  message: string
): Promise<string> => {
  try {
    const mailOPtion: SendMailOptions = {
      from: name,
      to: process.env.GMAIL_USER,
      subject: "portfolio",
      html: `
      Got a message from
      Email: ${email}
      Name: ${name}
      Message: ${message}
    `,
    };

    await transporter.sendMail(mailOPtion);

    return Promise.resolve("message sent");
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
