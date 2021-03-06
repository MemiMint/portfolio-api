import { Request, Response } from "express";
import { sendEmail } from "../../utils/send-email";

export class SendEmailController {
  public SendEMail = async (req: Request, res: Response) => {
    try {
      if (!req.body) {
        return res.status(400).json({
          message: "Invalid Body",
        });
      }

      const response = await sendEmail(req.body.email, req.body.name, req.body.message);

      return res.status(200).json({
        message: response
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Something Went Wrong"
      });
    }
  };
}
