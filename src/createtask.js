import { Task } from "./taskconstructor"
import { allTasksProject } from "./projectconstructor.js"

function createTask() {
    let buttonSubmit = document.querySelector("#taskFormButton")
    buttonSubmit.addEventListener("click", () => {
        let inputName = document.querySelector("#taskN");
        let inputDescription = document.querySelector("#taskD");
        let newTask = new Task(inputName.value, inputDescription.value)
        allTasksProject.addTask(newTask);
        console.log(allTasksProject);
        //ajout a named project
    })
}

export { createTask }