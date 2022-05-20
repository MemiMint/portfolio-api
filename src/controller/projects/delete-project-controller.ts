import { Request, Response } from "express";
import { DeleteProjectDataAccess } from "../../data-access/project";

export class DeleteProjectController {
  private DataAcess: DeleteProjectDataAccess;

  constructor() {
    this.DataAcess = new DeleteProjectDataAccess();
  }

  DeleteProject = async (req: Request, res: Response) => {
    try {
      const deletedProject = await this.DataAcess.DeleteProject(req.params.id);

      return res.status(200).json({
        project: deletedProject
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Something Went Wrong",
      });
    }
  };
}
