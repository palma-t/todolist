import { Task } from "./taskconstructor"
import { allProjects, allTasksProject, getProjectByTitle } from "./projectconstructor.js"

function createTask() {
    let buttonSubmit = document.querySelector("#taskFormButton")
    buttonSubmit.addEventListener("click", () => {
        let inputName = document.querySelector("#taskN");
        let inputDescription = document.querySelector("#taskD");
        let selectedProject = document.querySelector("#project-select");
        let selectedDate = document.querySelector("#dueDate");
        let priority = document.querySelector("#taskP");

        let newTask = new Task(inputName.value, inputDescription.value, selectedProject, selectedDate.value, priority.value);
        console.log(newTask);

        if(selectedProject.value){
            getProjectByTitle(selectedProject.value).addTask(newTask);
        } else {
            newTask.project = "No project";
            //a checker
        }

        allTasksProject.addTask(newTask);
        console.log(allTasksProject);
    })
}

export { createTask }