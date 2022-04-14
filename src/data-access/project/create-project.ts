import { ProjectCollection } from "../../model/project";
import { IProject } from "../../model/project/IProject";

export class CreateProjectDataAcess {
  public CreateProject = async (project: IProject): Promise<IProject> => {
    const doc = new ProjectCollection({
      title: project.title,
      subtitle: project.subtitle,
      description: project.description,
      link: project.link,
      tags: project.tags,
      gallery: project.gallery,
    }).save();

    return doc;
  };
}
