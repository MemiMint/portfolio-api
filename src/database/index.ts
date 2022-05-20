import mongoose from "mongoose";
import { config } from "dotenv";
import { options } from "./options";

export abstract class DatabaseConnection {
  private readonly mongodbUri: string;

  constructor() {
    config();
    this.mongodbUri = `mongodb+srv://Yeferson:nnz4lGmSqYYAgFQj@cluster0.uxy9m.mongodb.net/portfolio?retryWrites=true&w=majority`;
  }

  protected GetConnection = async () => {
    mongoose
      .connect(this.mongodbUri, options)
      .then((db) => {
        console.log("Database is connected");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
}
