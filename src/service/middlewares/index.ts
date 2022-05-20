import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { IMiddlewares } from "./IMiddlewares";

export class Middlewares implements IMiddlewares {
  private app: Application;

  constructor(_app: Application) {
    this.app = _app;
  }

  public Init = (): void => {
    this.app.use(express.static("public"));
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  };
}
