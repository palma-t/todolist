import { Project, allProjects } from "./projectconstructor"
import { showProjectsMenu } from "./showprojects.js"

function createProject() {
    let buttonSubmit = document.querySelector("#projectFormButton")
    buttonSubmit.addEventListener("click", () => {
        //checker si ça marche!!
        let inputName = document.querySelector("#projectN");

        let newProject = new Project(inputName.value);
        allProjects.addTask(newProject);
        allProjects[inputName.value] = newProject;

        newProject.title = inputName.value;
        console.log(newProject.title);
        
        showProjectsMenu(allProjects);
    })
}

export { createProject }