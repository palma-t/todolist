import { allTasksProject, getProjectByTitle } from "./projectconstructor.js";
const { intlFormatDistance } = require("date-fns");
const { compareAsc } = require("date-fns");
const { isToday } = require("date-fns");
const { isThisWeek } = require("date-fns");

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

        let taskDueDate = document.createElement("div");
        let formatedDate = intlFormatDistance(new Date(task.dueDate), new Date());
        let dateStyle = compareAsc(new Date(task.dueDate), new Date());
        if(dateStyle > 0){
            taskDueDate.classList.add("greenStyle");
        }else{
            taskDueDate.classList.add("redStyle");
        }
        taskDueDate.innerText = formatedDate;

        let priority = document.createElement("div");
        priority.innerText = task.priority;
        if(priority === "1"){
            priority.classList.add(".priority1");
        } else if(priority === "2"){
            priority.classList.add(".priority2");
        } else if(priority === "3"){
            priority.classList.add(".priority3");
        }else if(priority === "4"){
            priority.classList.add(".priority4");
        }

        let editButton = document.createElement("button");
        editButton.innerText = "Ed";
        editButton.classList.add("edit");

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
        taskSquare.appendChild(taskDueDate);
        taskSquare.appendChild(priority);
        taskSquare.appendChild(editButton);
        taskSquare.appendChild(removeButton);

        gridDiv.appendChild(taskSquare);
    }

    content.appendChild(gridDiv);
}

function showTodayTasks(array) {
    let content = document.querySelector("#content");
    content.innerHTML = "";
    let pageTitle = document.createElement("h2");
    pageTitle.innerText = "Today's tasks";
    content.appendChild(pageTitle);

    let gridDiv = document.createElement("div");
    gridDiv.classList.add("task-grid")

    for(let task of array.tasks) {
        if(isToday(new Date(task.dueDate))){
            let taskSquare = document.createElement("div");
            let taskTitle = document.createElement("h3");
            taskTitle.innerText = task.title;
    
            let taskDescription = document.createElement("p");
            taskDescription.innerText = task.description;
    
            let taskProject = document.createElement("p");
            taskProject.innerText = task.project;
    
            let priority = document.createElement("div");
            priority.innerText = task.priority;
            if(priority === "1"){
                priority.classList.add(".priority1");
            } else if(priority === "2"){
                priority.classList.add(".priority2");
            } else if(priority === "3"){
                priority.classList.add(".priority3");
            }else if(priority === "4"){
                priority.classList.add(".priority4");
            }
    
            let editButton = document.createElement("button");
            editButton.innerText = "Ed";
            editButton.classList.add("edit");
    
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
            taskSquare.appendChild(priority);
            taskSquare.appendChild(editButton);
            taskSquare.appendChild(removeButton);
    
            gridDiv.appendChild(taskSquare);
        }
    }
    content.appendChild(gridDiv);
}

function showUpcomingTasks(array) {
    let content = document.querySelector("#content");
    content.innerHTML = "";
    let pageTitle = document.createElement("h2");
    pageTitle.innerText = "Upcoming tasks";
    content.appendChild(pageTitle);

    let gridDiv = document.createElement("div");
    gridDiv.classList.add("task-grid")

    for(let task of array.tasks) {
        if(isThisWeek(new Date(task.dueDate))){
            let taskSquare = document.createElement("div");
            let taskTitle = document.createElement("h3");
            taskTitle.innerText = task.title;
    
            let taskDescription = document.createElement("p");
            taskDescription.innerText = task.description;
    
            let taskProject = document.createElement("p");
            taskProject.innerText = task.project;

            let taskDueDate = document.createElement("div");
            let formatedDate = intlFormatDistance(new Date(task.dueDate), new Date());
            let dateStyle = compareAsc(new Date(task.dueDate), new Date());
            if(dateStyle > 0){
                taskDueDate.classList.add("greenStyle");
            }else{
                taskDueDate.classList.add("redStyle");
            }
            taskDueDate.innerText = formatedDate;
    
            let priority = document.createElement("div");
            priority.innerText = task.priority;
            if(priority === "1"){
                priority.classList.add(".priority1");
            } else if(priority === "2"){
                priority.classList.add(".priority2");
            } else if(priority === "3"){
                priority.classList.add(".priority3");
            }else if(priority === "4"){
                priority.classList.add(".priority4");
            }
    
            let editButton = document.createElement("button");
            editButton.innerText = "Ed";
            editButton.classList.add("edit");
    
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
            taskSquare.appendChild(taskDueDate);
            taskSquare.appendChild(priority);
            taskSquare.appendChild(editButton);
            taskSquare.appendChild(removeButton);
    
            gridDiv.appendChild(taskSquare);
        }
    }
    content.appendChild(gridDiv);
}


function showOverdueTasks(array) {
    let content = document.querySelector("#content");
    content.innerHTML = "";
    let pageTitle = document.createElement("h2");
    pageTitle.innerText = "Overdue tasks";
    content.appendChild(pageTitle);

    let gridDiv = document.createElement("div");
    gridDiv.classList.add("task-grid")

    for(let task of array.tasks) {
        if(compareAsc(new Date(task.dueDate), new Date()) < 0){
            let taskSquare = document.createElement("div");
            let taskTitle = document.createElement("h3");
            taskTitle.innerText = task.title;
    
            let taskDescription = document.createElement("p");
            taskDescription.innerText = task.description;
    
            let taskProject = document.createElement("p");
            taskProject.innerText = task.project;

            let taskDueDate = document.createElement("div");
            let formatedDate = intlFormatDistance(new Date(task.dueDate), new Date());
            let dateStyle = compareAsc(new Date(task.dueDate), new Date());
            if(dateStyle > 0){
                taskDueDate.classList.add("greenStyle");
            }else{
                taskDueDate.classList.add("redStyle");
            }
            taskDueDate.innerText = formatedDate;
    
            let priority = document.createElement("div");
            priority.innerText = task.priority;
            if(priority === "1"){
                priority.classList.add(".priority1");
            } else if(priority === "2"){
                priority.classList.add(".priority2");
            } else if(priority === "3"){
                priority.classList.add(".priority3");
            }else if(priority === "4"){
                priority.classList.add(".priority4");
            }
    
            let editButton = document.createElement("button");
            editButton.innerText = "Ed";
            editButton.classList.add("edit");
    
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
            taskSquare.appendChild(taskDueDate);
            taskSquare.appendChild(priority);
            taskSquare.appendChild(editButton);
            taskSquare.appendChild(removeButton);
    
            gridDiv.appendChild(taskSquare);
        }
    }
    content.appendChild(gridDiv);
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

        let taskDueDate = document.createElement("div");
        let formatedDate = intlFormatDistance(new Date(task.dueDate), new Date());
        let dateStyle = compareAsc(new Date(task.dueDate), new Date());
        if(dateStyle > 0){
            taskDueDate.classList.add("greenStyle");
        }else{
            taskDueDate.classList.add("redStyle");
        }
        taskDueDate.innerText = formatedDate;

        let priority = document.createElement("div");
        priority.innerText = task.priority;
        if(priority === "1"){
            priority.classList.add(".priority1");
        } else if(priority === "2"){
            priority.classList.add(".priority2");
        } else if(priority === "3"){
            priority.classList.add(".priority3");
        }else if(priority === "4"){
            priority.classList.add(".priority4");
        }

        let editButton = document.createElement("button");
        editButton.innerText = "Ed";
        editButton.classList.add("edit");

        let removeButton = document.createElement("button");
        removeButton.innerText = "Del"
        removeButton.classList.add("del");

        removeButton.addEventListener("click", function(){
            allTasksProject.removeTask(task.title);
        }); 

        taskSquare.classList.add("task-style");
        taskSquare.appendChild(taskTitle);
        taskSquare.appendChild(taskDescription);
        taskSquare.appendChild(taskDueDate);
        taskSquare.appendChild(priority);
        taskSquare.appendChild(editButton);
        taskSquare.appendChild(removeButton);

        gridDiv.appendChild(taskSquare);
    }

    content.appendChild(gridDiv);
}

export { showTasks, showTodayTasks, showUpcomingTasks, showOverdueTasks, showProjectTasks }