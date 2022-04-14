import mongoose from "mongoose";
import { config } from "dotenv";
import { options } from "./options";

export abstract class DatabaseConnection {
  private readonly mongodbUri: string;

  constructor() {
    config();
    this.mongodbUri = `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`;
  }

  protected GetConnection = async () => {
    mongoose
      .connect(this.mongodbUri, options)
      .then((db) => {
        console.log("Database is connected");
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
