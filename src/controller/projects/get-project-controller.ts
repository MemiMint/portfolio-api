import { Request, Response } from "express";
import { GetProjectDataAcess } from "../../data-access/project";
import { IProject } from "../../model/project/IProject";

export class GetProjectController {
  private DataAccess: GetProjectDataAcess;

  constructor() {
    this.DataAccess = new GetProjectDataAcess();
  }

  public GetProject = async (req: Request, res: Response) => {
    try {
      const project: IProject = await this.DataAccess.GetProject(req.params.id);

      if (!project) {
        return res.status(404).json({
          message: "Project does not exist"
        });
      }

      return res.status(200).json(project);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Something went wrong"
      });
    }
  };
}
