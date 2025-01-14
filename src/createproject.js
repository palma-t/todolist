import { Project, allProjects } from "./projectconstructor"

function createProject() {
    let buttonSubmit = document.querySelector("#projectFormButton")
    buttonSubmit.addEventListener("click", () => {
        let inputName = document.querySelector("#projectN");
        let newProject = new Project(inputName.value, );
        newProject.title = inputName.value;
        allProjects.addTask(newProject);
        console.log(allProjects);
    })
}

export { createProject }