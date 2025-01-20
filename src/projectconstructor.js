import { populateProjectStorage } from "./storage";

class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(this);
  }

  removeTask(taskTitle) {
    this.tasks = this.tasks.filter((task) => task.title !== taskTitle);
  }
}

let allTasksProject = new Project();
allTasksProject.title = "All Tasks";
populateProjectStorage(allTasksProject.title, allTasksProject);

let allProjects = new Project();
allProjects.title = "All Projects";
populateProjectStorage(allProjects.title, allProjects);

function getProjectByTitle(title) {
  return allProjects[title];
}

export { Project, allTasksProject, allProjects, getProjectByTitle };
