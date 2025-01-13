import { allTasksArray } from "./taskconstructor.js";

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

        let del = document.createElement("button");
        del.innerText = "Del"
        del.classList.add("del");

        del.addEventListener("click", function(){
            allTasksArray.deleteTask(task);
            //deleteTask a definir
            //delete du projet?
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