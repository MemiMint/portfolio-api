import { Request, Response } from "express";
import { GetProjectsDataAccess } from "../../data-access/project";
import { IProject } from "../../model/project/IProject";

export class GetProjectsController {
  private DataAccess: GetProjectsDataAccess;

  constructor() {
    this.DataAccess = new GetProjectsDataAccess();
  }

  public GetProjectsDataAccess = async (req: Request, res: Response) => {
    try {
      const projects: IProject[] = await this.DataAccess.GetProjects();

      if (!projects) {
        return res.status(404).json(projects);
      }

      return res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  };
}
