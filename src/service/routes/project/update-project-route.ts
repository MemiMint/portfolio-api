import { Application } from "express";
import { UpdateProjectController } from "../../../controller/projects";
import { IRoute } from "../IRoute";

export class UpdateProjectRoute implements IRoute {
  private app: Application;
  private controller: UpdateProjectController;

  constructor(_app: Application) {
    this.app = _app;
    this.controller = new UpdateProjectController();
  }

  public Init = () => {
    this.app.put("/project/:id", this.controller.UpdateProject);
  };
}
