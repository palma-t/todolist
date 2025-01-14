import { allTasksProject } from "./projectconstructor.js";

function showTasks(array) {
    let content = document.querySelector("#content");
    let allTaskTitle = document.createElement("h2");
    allTaskTitle.innerText = "All tasks";
    content.appendChild(allTaskTitle);

    let gridDiv = document.createElement("div");
    gridDiv.classList.add("task-grid")

    for(let task of array) {
        let taskSquare = document.createElement("div");
        let taskTitle = document.createElement("h3");
        taskTitle.innerText = task.title;

        let taskDescription = document.createElement("p");
        taskDescription.innerText = task.description;

        let removeButton = document.createElement("button");
        removeButton.innerText = "Del"
        removeButton.classList.add("del");

        removeButton.addEventListener("click", function(){
            allTasksProject.removeTask(task);
        }); 

        taskSquare.classList.add("task-style");
        taskSquare.appendChild(taskTitle);
        taskSquare.appendChild(taskDescription);

        gridDiv.appendChild(taskSquare);
    }

    content.appendChild(gridDiv);
}

function showTodayTasks() {


}

function showUpcomingTasks() {

}


function showOverdueTasks() {

}

function showProjectTasks() {


}

export { showTasks, showTodayTasks, showUpcomingTasks, showOverdueTasks, showProjectTasks }