import { allTasksProject, getProjectByTitle } from "./projectconstructor.js";

function showTasks(array) {
    let content = document.querySelector("#content");
    content.innerHTML = "";
    let allTaskTitle = document.createElement("h2");
    allTaskTitle.innerText = "All tasks";
    content.appendChild(allTaskTitle);

    let gridDiv = document.createElement("div");
    gridDiv.classList.add("task-grid")

    for(let task of array.tasks) {
        let taskSquare = document.createElement("div");
        let taskTitle = document.createElement("h3");
        taskTitle.innerText = task.title;

        let taskDescription = document.createElement("p");
        taskDescription.innerText = task.description;

        let taskProject = document.createElement("p");
        taskProject.innerText = task.project;

        let removeButton = document.createElement("button");
        removeButton.innerText = "Del"
        removeButton.classList.add("del");

        removeButton.addEventListener("click", function(){
            allTasksProject.removeTask(task.title);
        }); 

        taskSquare.classList.add("task-style");
        taskSquare.appendChild(taskTitle);
        taskSquare.appendChild(taskDescription);
        taskSquare.appendChild(taskProject);
        taskSquare.appendChild(removeButton);

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

function showProjectTasks(title) {
    const project = getProjectByTitle(title);

    if (!project) {
        console.log("Project not found");
        return;
    }

    let content = document.querySelector("#content");
    content.innerHTML = "";
    let pageTitle = document.createElement("h2");
    pageTitle.innerText = title;
    content.appendChild(pageTitle);

    let gridDiv = document.createElement("div");
    gridDiv.classList.add("task-grid")

    for(let task of project.tasks) {
        let taskSquare = document.createElement("div");
        let taskTitle = document.createElement("h3");
        taskTitle.innerText = task.title;

        let taskDescription = document.createElement("p");
        taskDescription.innerText = task.description;

        let taskProject = document.createElement("p");
        taskProject.innerText = task.project;

        let removeButton = document.createElement("button");
        removeButton.innerText = "Del"
        removeButton.classList.add("del");

        removeButton.addEventListener("click", function(){
            allTasksProject.removeTask(task.title);
        }); 

        taskSquare.classList.add("task-style");
        taskSquare.appendChild(taskTitle);
        taskSquare.appendChild(taskDescription);
        taskSquare.appendChild(taskProject);
        taskSquare.appendChild(removeButton);

        gridDiv.appendChild(taskSquare);
    }

    content.appendChild(gridDiv);
}

export { showTasks, showTodayTasks, showUpcomingTasks, showOverdueTasks, showProjectTasks }