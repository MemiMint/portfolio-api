import express, { Application, application } from "express";
import { config } from "dotenv";
import { DatabaseConnection } from "../../database";
import { Settings } from "../settings";
import { Middlewares } from "../middlewares";
import { Routes } from "../routes";
import { IApp } from "./IApp";

export class App extends DatabaseConnection implements IApp {
  private app: Application;
  private settings: Settings;
  private middlewares: Middlewares;
  private routes: Routes;

  constructor() {
    super();
    config();

    this.app = express();
    this.middlewares = new Middlewares(this.app);
    this.settings = new Settings(this.app);
    this.routes = new Routes(this.app);
  }

  public Init = (): void => {
    this.app.listen(this.app.get("port"), () => {
      this.middlewares.Init();
      this.settings.Init();
      this.routes.Init();
      this.GetConnection();

      console.log(`listening on port:${this.app.get("port")}`);
    });
  };
}
