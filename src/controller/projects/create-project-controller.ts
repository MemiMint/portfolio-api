import { Request, Response } from "express";
import { CreateProjectDataAcess } from "../../data-access/project";
import { IProject } from "../../model/project/IProject";

export class CreateProjectController {
  private DataAccess: CreateProjectDataAcess;

  constructor() {
    this.DataAccess = new CreateProjectDataAcess();
  }

  CreateProject = async (req: Request, res: Response) => {
    try {
      if (!req.files) {
        return res.status(400).json({
          message: "Files are required",
        });
      }

      const files = req.files as Array<Express.Multer.File>;
      const filenames = files.map((file) => file.filename);

      const project: IProject = req.body;

      if (!project) {
        return res.status(400).json({ message: "Invalid body" });
      }

      project.gallery = filenames;

      const newProject = await this.DataAccess.CreateProject(project);

      if (!newProject) {
        return res.status(500).json({ message: "Something went wrong" });
      }

      return res.status(200).json(newProject);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  };
}
