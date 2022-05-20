import { config } from "dotenv";
import { transporter } from "../config/mailer";
import { SendMailOptions } from "nodemailer";


config();

export const sendEmail = async (
  email: string,
  name: string,
  message: string
): Promise<string> => {
  try {
    const mailOPtion: SendMailOptions = {
      from: name,
      to: process.env.GMAIL_USER,
      subject: "propuesta de trabajo",
      html: `
      Got a message from
      Email: ${email}
      Name: ${name}
      Message: ${message}
    `,
    };

    await transporter.sendMail(mailOPtion);

    return Promise.resolve("Your message has been sent");
  } catch (error) {
    console.error(error);
    return Promise.reject("Something went wrong.");
  }
};
