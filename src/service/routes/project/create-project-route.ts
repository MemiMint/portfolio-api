import { Application } from "express";
import { CreateProjectController } from "../../../controller/projects";
import { upload } from "../../../config/multer";

export class CreateProjectRoute {
  private app: Application;
  private controller: CreateProjectController;

  constructor(_app: Application) {
    this.app = _app;
    this.controller = new CreateProjectController();
  }

  public Init = () => {
    this.app.post(
      "/project",
      upload.array("gallery"),
      this.controller.CreateProject
    );
  };
}
