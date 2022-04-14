import { ProjectCollection } from "../../model/project";
import { IProject } from "../../model/project/IProject";

export class GetProjectsDataAccess {
  public GetProjects = async (): Promise<IProject[]> => {
    let projects: IProject[];
    const docs = await ProjectCollection.find();

    projects = docs;

    return projects;
  };
}
