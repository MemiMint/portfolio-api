import { Request, Response } from "express";

export interface IProjectController {
  GetProjects: (req: Request, res: Response) => Promise<any>;
  GetProject: (req: Request, res: Response) => Promise<any>;
  CreateProject: (req: Request, res: Response) => Promise<any>;
  DeleteProject: (req: Request, res: Response) => Promise<any>;
  UpdateProject: (req: Request, res: Response) => Promise<any>;
}
