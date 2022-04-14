import { prop, getModelForClass } from "@typegoose/typegoose";
import { IProject } from "./IProject";
import mongoose from "mongoose";

export class ProjectModel implements IProject {
  public _id!: string;

  @prop({ type: String, required: true })
  public title!: string;

  @prop({ type: String, required: true })
  public subtitle!: string;

  @prop({ type: String, required: true })
  public description!: string;

  @prop({ type: String, required: true })
  public link!: string;

  @prop({
    type: mongoose.Schema.Types.Mixed,
    validate: (s: string[] = []) => s.every((s0) => typeof s0 === "string"),
  })
  public tags!: string[];

  @prop({
    type: mongoose.Schema.Types.Mixed,
    validate: (s: string[] = []) => s.every((s0) => typeof s0 === "string"),
  })
  public gallery!: string[];
}

export const ProjectCollection = getModelForClass(ProjectModel);
