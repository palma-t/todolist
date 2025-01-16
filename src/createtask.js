import { Task } from "./taskconstructor"
import { allTasksProject, getProjectByTitle } from "./projectconstructor.js"
import { populateProjectStorage } from "./storage.js"
import { showTasks } from "./showtasks.js"

function createTask() {
    let buttonSubmit = document.querySelector("#taskFormButton")
    buttonSubmit.addEventListener("click", () => {
        let inputName = document.querySelector("#taskN");
        let inputDescription = document.querySelector("#taskD");
        let selectedProject = document.querySelector("#taskForm-project");
        let selectedDate = document.querySelector("#dueDate");
        let priority = document.querySelector("#taskP");

        let newTask = new Task(inputName.value, inputDescription.value, selectedProject.value, selectedDate.value, priority.value);
        console.log(newTask);

        if(selectedProject.value){
            getProjectByTitle(selectedProject.value).addTask(newTask);
        } else {
            newTask.project = "No project";
        }

        allTasksProject.addTask(newTask);
        populateProjectStorage(allTasksProject.title, allTasksProject);
        showTasks(JSON.parse(localStorage.getItem(allTasksProject.title)));
    })
}

export { createTask }