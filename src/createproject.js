import { Project, allProjects } from "./projectconstructor"
import { showProjectsMenu } from "./showprojects.js"

function createProject() {
    let buttonSubmit = document.querySelector("#projectFormButton")
    buttonSubmit.addEventListener("click", () => {
        let inputName = document.querySelector("#projectN");
        let newProject = new Project();
        newProject.title = inputName.value;
        console.log(newProject.title);
        allProjects.addTask(newProject);
        console.log(allProjects);

        showProjectsMenu(allProjects);
    })
}

export { createProject }