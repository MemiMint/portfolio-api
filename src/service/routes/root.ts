import { Application } from "express";
import { IRoute } from "./IRoute";

export class RootRoute implements IRoute {
  private app: Application;

  constructor(_app: Application) {
    this.app = _app;
  }

  public Init = () => {
    this.app.get("/", (req, res) => {
        res.send({ message: "Hello, world!" });
    });
  };
}
