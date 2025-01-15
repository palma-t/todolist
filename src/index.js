import "./styles.css";
import { showOverdueTasks, showProjectTasks, showTasks, showTodayTasks, showUpcomingTasks } from "./showtasks.js"
import { allProjects, allTasksProject } from "./projectconstructor.js";
import { createTask } from "./createtask.js";
import { showProjectsMenu } from "./showprojects.js";
import { createProject } from "./createproject.js"
import { chooseProject } from "./project-select.js"
import { getStorageItem } from "./storage.js";

//Deal with opening and closing the task's form
const popup1 = document.getElementById("taskForm");

popup1.addEventListener('submit', function(event) {
    event.preventDefault();
});

const overlay = document.getElementById("overlay");
const closeButton1 = document.getElementById("closeButton");
const submitButton1 = document.querySelector("#taskFormButton");

let addTaskButton = document.querySelector("#addTask");
addTaskButton.addEventListener("click", () => {
    //Adding projects' option to the tasks' form
    chooseProject(allProjects);

    popup1.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

overlay.addEventListener("click", () => {
    popup1.classList.add("hidden");
    overlay.classList.add("hidden");
});

closeButton1.addEventListener("click", () => {
    popup1.classList.add("hidden");
    overlay.classList.add("hidden");
});

submitButton1.addEventListener("click", () => {
    popup1.classList.add("hidden");
    overlay.classList.add("hidden");
})

//Deal with project's form
const popup2 = document.getElementById("projectForm");

popup2.addEventListener('submit', function(event) {
    event.preventDefault();
});

const closeButton2 = document.getElementById("closeButton");
const submitButton2 = document.querySelector("#projectFormButton");

let addProjectButton = document.querySelector("#project-title");
addProjectButton.addEventListener("click", () => {
    popup2.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

closeButton2.addEventListener("click", () => {
    popup2.classList.add("hidden");
    overlay.classList.add("hidden");
});

submitButton2.addEventListener("click", () => {
    popup2.classList.add("hidden");
    overlay.classList.add("hidden");
})

// Deal with showing tasks and projects
createTask();
createProject();

//Deal with menu choices
let todayButton = document.querySelector("#today");
todayButton.addEventListener("click", () => {
    showTodayTasks(getStorageItem(allTasksProject.title));
});

let upcomingButton = document.querySelector("#upcoming");
upcomingButton.addEventListener("click", () => {
    showUpcomingTasks(getStorageItem(allTasksProject.title));
});

let overdueButton = document.querySelector("#overdue");
overdueButton.addEventListener("click", () => {
    showOverdueTasks(getStorageItem((allTasksProject.title)));
});

let showTasksButton = document.querySelector("#allTasks");
showTasksButton.addEventListener("click", () => {
    showTasks(getStorageItem(allTasksProject.title));
});

//Always effective
showTasks(getStorageItem(allTasksProject.title));
showProjectsMenu(getStorageItem(allProjects.title));

