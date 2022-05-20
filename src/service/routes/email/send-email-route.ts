import { Application } from "express";
import { config } from "dotenv";
import { SendEmailController } from "../../../controller/email";
import { IRoute } from "../IRoute";

config();

export class SendEmailRoute implements IRoute {
  private app: Application;
  private controller: SendEmailController;

  constructor(_app: Application) {
    this.app = _app;
    this.controller = new SendEmailController();
  }

  public Init = () => {
    this.app.post("/send", this.controller.SendEMail);
  };
}
