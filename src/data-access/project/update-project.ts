import { ProjectCollection } from "../../model/project";
import { IProject } from "../../model/project/IProject";

export class UpdateProjectDataAcess {
  public UpdateProject = async (
    id: string,
    title: string,
    subtitle: string,
    description: string,
    link: string,
    tags: string[],
    gallery: string[]
  ): Promise<IProject> => {
    const project = (await ProjectCollection.findByIdAndUpdate(id, {
      $set: {
        title,
        subtitle,
        description,
        link,
        tags
      },
    })) as IProject;

    return project;
  };
}
