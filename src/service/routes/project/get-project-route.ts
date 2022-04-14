import { Application } from "express";
import { GetProjectController } from "../../../controller/projects";
import { IRoute } from "../IRoute";

export class GetProjectRoute implements IRoute {
  private app: Application;
  private controller: GetProjectController;

  constructor(_app: Application) {
    this.app = _app;
    this.controller = new GetProjectController();
  }

  public Init = () => {
    this.app.get("/project/:id", this.controller.GetProject);
  };
}
