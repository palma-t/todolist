import { Task } from "./taskconstructor"
import { allTasksProject, getProjectByTitle } from "./projectconstructor.js"

function createTask() {
    let buttonSubmit = document.querySelector("#taskFormButton")
    buttonSubmit.addEventListener("click", () => {
        let inputName = document.querySelector("#taskN");
        let inputDescription = document.querySelector("#taskD");
        let selectedProject = document.querySelector("#project-select");

        let newTask = new Task(inputName.value, inputDescription.value, selectedProject);

        getProjectByTitle(selectedProject.value).addTask(newTask);

        allTasksProject.addTask(newTask);
        console.log(allTasksProject);
    })
}

export { createTask }