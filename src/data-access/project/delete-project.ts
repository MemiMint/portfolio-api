import { ProjectModel, ProjectCollection } from "../../model/project";
import { IProject } from "../../model/project/IProject";

export class DeleteProjectDataAccess {
  private model: ProjectModel;

  constructor() {
    this.model = new ProjectModel();
  }

  public DeleteProject = async (id: string): Promise<IProject> => {
    const doc = (await ProjectCollection.findByIdAndDelete(id)) as IProject;

    this.model.title = doc.title;
    this.model.subtitle = doc.subtitle;
    this.model.description = doc.description;
    this.model.link = doc.link;
    this.model.tags = doc.tags;
    this.model.gallery = doc.gallery;

    return this.model;
  };
}
