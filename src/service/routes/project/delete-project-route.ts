import { Application } from "express";
import { DeleteProjectController } from "../../../controller/projects";
import { IRoute } from "../IRoute";

export class DeleteProjectRoute implements IRoute {
  private app: Application;
  private controller: DeleteProjectController;

  constructor(_app: Application) {
    this.app = _app;
    this.controller = new DeleteProjectController();
  }

  public Init = () => {
    this.app.delete("/project/:id", this.controller.DeleteProject);
  };
}
