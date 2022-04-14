import { Application } from "express";
import { GetProjectsController } from "../../../controller/projects";
import { IRoute } from "../IRoute";

export class GetProjectsRoute implements IRoute {
  private app: Application;
  private controller: GetProjectsController;

  constructor(_app: Application) {
    this.app = _app;
    this.controller = new GetProjectsController();
  }

  public Init = () => {
    this.app.get("/projects", this.controller.GetProjectsDataAccess);
  };
}
