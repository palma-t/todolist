function showTasks(array) {
    let content = document.querySelector("#content");
    let allTaskTitle = document.createElement("h2");
    allTaskTitle.innerText = "All tasks";
    content.appendChild(allTaskTitle);
    
    for(const task of array) {
        let taskSquare = document.createElement("div");
        let taskTitle = document.createElement("h3");
        taskTitle.innerText = task.title;

        let taskDescription = document.createElement("p");
        taskDescription.innerText = task.description;

        taskSquare.classList.add("task-style");
        taskSquare.appendChild(taskTitle);
        taskSquare.appendChild(taskDescription);

        content.appendChild(taskSquare);
    }
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