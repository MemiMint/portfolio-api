import { Request, Response } from "express";
import { UpdateProjectDataAcess } from "../../data-access/project";
import { IProject } from "../../model/project/IProject";

export class UpdateProjectController {
  private DataAccess: UpdateProjectDataAcess;

  constructor() {
    this.DataAccess = new UpdateProjectDataAcess();
  }

  public UpdateProject = async (req: Request, res: Response) => {
    try {
      const project: IProject = req.body;

      if (!project) {
        return res.status(400).json({
          message: "Invalid body",
        });
      }

      const updatedProject = this.DataAccess.UpdateProject(
        req.params.id,
        project.title,
        project.subtitle,
        project.description,
        project.link,
        project.tags,
        project.gallery
      );

      if (!updatedProject) {
        return res.status(500).json({
          message: "Something Went wrong",
        });
      }

      return res.status(200).json(updatedProject);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  };
}
