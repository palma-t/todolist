import { Project, allProjects } from "./projectconstructor";
import { showProjectsMenu } from "./showprojects.js";
import { populateProjectStorage } from "./storage.js";

function createProject() {
  let buttonSubmit = document.querySelector("#projectFormButton");
  buttonSubmit.addEventListener("click", () => {
    let inputName = document.querySelector("#projectN");

    let newProject = new Project(inputName.value);
    allProjects.addTask(newProject);
    allProjects[inputName.value] = newProject;

    newProject.title = inputName.value;
    console.log(newProject.title);

    populateProjectStorage(allProjects.title, allProjects);

    showProjectsMenu(allProjects);
  });
}

export { createProject };
