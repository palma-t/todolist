import "./styles.css";
import {
  showOverdueTasks,
  showTasks,
  showTodayTasks,
  showUpcomingTasks,
} from "./showtasks.js";
import { allProjects, allTasksProject } from "./projectconstructor.js";
//import { createTask } from "./createtask.js";
import { showProjectsMenu } from "./showprojects.js";
import { createProject } from "./createproject.js";
import { chooseProject } from "./project-select.js";
import { getStorageItem } from "./storage.js";
import { popup1, overlay } from "./formvalidation.js"

let addTaskButton = document.querySelector("#addTask");
addTaskButton.addEventListener("click", () => {
  //Adding projects' option to the tasks' form
  chooseProject(allProjects);

  popup1.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Deal with showing tasks and projects
//createTask();
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
  showOverdueTasks(getStorageItem(allTasksProject.title));
});

let showTasksButton = document.querySelector("#allTasks");
showTasksButton.addEventListener("click", () => {
  showTasks(getStorageItem(allTasksProject.title));
});

//Always effective
showTasks(getStorageItem(allTasksProject.title));
showProjectsMenu(getStorageItem(allProjects.title));