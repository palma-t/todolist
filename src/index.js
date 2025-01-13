import "./styles.css";
import { showOverdueTasks, showTasks, showTodayTasks, showUpcomingTasks } from "./showtasks.js"
import { allTasksArray } from "./taskconstructor.js"; // ou from createtasks ?
import { openForm, createTask } from "./createtask.js";

let addTaskButton = document.querySelector("#addTask");
addTaskButton.addEventListener("click", () => {
    openForm();
})

createTask();

function closeForm() {
    document.getElementById("taskForm").style.display = "none";
}
closeForm();

let todayButton = document.querySelector("#addTask");
todayButton.addEventListener("click", () => {
    showTodayTasks();
});

let upcomingButton = document.querySelector("#addTask");
upcomingButton.addEventListener("click", () => {
    showUpcomingTasks();
});

let overdueButton = document.querySelector("#addTask");
overdueButton.addEventListener("click", () => {
    showOverdueTasks();
});

let showAllTasks = document.querySelector("#allTasks");
showAllTasks.addEventListener("click", () => {
    showTasks(allTasksArray);
});

/* les fonctions dont on va avoir besoin (réfléchir aux classes après)
- add a task
- today: look for all tasks with a deadline today and show them
- upcoming: same but for 3 coming days
- all tasks
- add a project
- list all projects under Projects
- select tasks of one project and show them
- sur ce doc: les addeventlisteners pour tout le nav
*/