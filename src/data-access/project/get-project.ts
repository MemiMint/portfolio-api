import { ProjectCollection, ProjectModel } from "../../model/project";

export class GetProjectDataAcess {
  private model: ProjectModel;

  constructor() {
    this.model = new ProjectModel();
  }

  public GetProject = async (id: string): Promise<ProjectModel> => {
    const doc = await ProjectCollection.findById(id);

    if (doc) {
      this.model._id = doc._id;
      this.model.title = doc.title;
      this.model.subtitle = doc.subtitle;
      this.model.description = doc.description;
      this.model.link = doc.link;
      this.model.tags = doc.tags;
      this.model.gallery = doc.gallery;
    }

    return this.model;
  };
}
