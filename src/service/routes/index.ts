import { Application } from "express";
import { SendEmailRoute } from "./email";
import {
  CreateProjectRoute,
  GetProjectRoute,
  GetProjectsRoute,
  UpdateProjectRoute,
  DeleteProjectRoute,
} from "./project";
import { RootRoute } from "./root";
import { IRoute } from "./IRoute";

export class Routes implements IRoute {
  private app: Application;
  private routes: Array<IRoute>;

  constructor(_app: Application) {
    this.app = _app;
    this.routes = [
      new SendEmailRoute(this.app),
      new CreateProjectRoute(this.app),
      new GetProjectsRoute(this.app),
      new GetProjectRoute(this.app),
      new UpdateProjectRoute(this.app),
      new DeleteProjectRoute(this.app),
      new RootRoute(this.app)
    ];
  }

  public Init = () => {
    this.routes.forEach((route) => {
      route.Init();
    });
  };
}
