import {
  allTasksProject,
  getProjectByTitle,
  allProjects,
} from "./projectconstructor.js";
import { intlFormatDistance } from "date-fns";
import { compareAsc } from "date-fns";
import { isToday } from "date-fns";
import { isThisWeek } from "date-fns";
import deleteImg from "./images/delete.svg";
import editImg from "./images/edit.svg";
import { dateStyling, priorityStyle } from "./task-styling.js";
import { populateProjectStorage } from "./storage.js";
import { editTask } from "./taskedit.js";
import { chooseProject } from "./project-select.js";

function showTasks(array) {
  let content = document.querySelector("#content");
  content.innerHTML = "";
  let allTaskTitle = document.createElement("h2");
  allTaskTitle.innerText = "All tasks";
  content.appendChild(allTaskTitle);

  let gridDiv = document.createElement("div");
  gridDiv.classList.add("task-grid");

  for (let task of array.tasks) {
    let taskSquare = document.createElement("div");
    taskSquare.classList.add("task-style");

    let taskTitle = document.createElement("h3");
    taskTitle.innerText = task.title;

    let completion = document.createElement("input");
    completion.type = "checkbox";

    completion.addEventListener("click", () => {
      if (task.completed === false) {
        task.completed = true;
        console.log(task);
        taskSquare.classList.remove("task-style");
        taskSquare.classList.add("taskDone");
      } else {
        task.completed = false;
        console.log(task);
        taskSquare.classList.add("task-style");
        taskSquare.classList.remove("taskDone");
      }
    });

    let taskTopDiv = document.createElement("div");
    taskTopDiv.appendChild(taskTitle);
    taskTopDiv.appendChild(completion);
    taskTopDiv.classList.add("taskTopDiv");

    let taskDescription = document.createElement("p");
    taskDescription.innerText = task.description;

    let taskProject = document.createElement("p");
    taskProject.innerText = task.project;
    taskProject.classList.add("taskSquare-project");

    let taskDueDate = document.createElement("div");
    let formatedDate = intlFormatDistance(new Date(task.dueDate), new Date());
    dateStyling(task.dueDate, taskDueDate);
    taskDueDate.innerText = formatedDate;

    let taskBottomDiv = document.createElement("div");
    taskBottomDiv.classList.add("taskBottomDiv");

    let priority = document.createElement("div");
    priority.innerText = task.priority;
    priorityStyle(task.priority, priority);

    let iconDiv = document.createElement("div");
    iconDiv.classList.add("iconDiv");

    let editButton = document.createElement("img");
    editButton.src = editImg;
    editButton.classList.add("edit");

    editButton.addEventListener("click", () => {
      editTask(task);
      chooseProject(allProjects);
    });

    let deleteButton = document.createElement("img");
    deleteButton.src = deleteImg;
    deleteButton.classList.add("del");

    deleteButton.addEventListener("click", function () {
      taskSquare.remove();
      allTasksProject.removeTask(task.title);
      localStorage.removeItem(task.title);
      populateProjectStorage(allTasksProject.title, allTasksProject);
    });

    iconDiv.appendChild(editButton);
    iconDiv.appendChild(deleteButton);
    taskBottomDiv.appendChild(priority);
    taskBottomDiv.appendChild(iconDiv);

    taskSquare.appendChild(taskTopDiv);
    taskSquare.appendChild(taskDescription);
    taskSquare.appendChild(taskProject);
    taskSquare.appendChild(taskDueDate);
    taskSquare.appendChild(taskBottomDiv);

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
  gridDiv.classList.add("task-grid");

  for (let task of array.tasks) {
    if (isToday(new Date(task.dueDate))) {
      let taskSquare = document.createElement("div");
      let taskTitle = document.createElement("h3");
      taskTitle.innerText = task.title;

      let taskDescription = document.createElement("p");
      taskDescription.innerText = task.description;

      let taskProject = document.createElement("p");
      taskProject.innerText = task.project;

      let priority = document.createElement("div");
      priority.innerText = task.priority;
      if (priority === "1") {
        priority.classList.add(".priority1");
      } else if (priority === "2") {
        priority.classList.add(".priority2");
      } else if (priority === "3") {
        priority.classList.add(".priority3");
      } else if (priority === "4") {
        priority.classList.add(".priority4");
      }

      let editButton = document.createElement("button");
      editButton.innerText = "Ed";
      editButton.classList.add("edit");

      let removeButton = document.createElement("button");
      removeButton.innerText = "Del";
      removeButton.classList.add("del");

      removeButton.addEventListener("click", function () {
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
  gridDiv.classList.add("task-grid");

  for (let task of array.tasks) {
    if (isThisWeek(new Date(task.dueDate))) {
      let taskSquare = document.createElement("div");
      taskSquare.classList.add("task-style");

      let taskTitle = document.createElement("h3");
      taskTitle.innerText = task.title;

      let completion = document.createElement("input");
      completion.type = "checkbox";

      completion.addEventListener("click", () => {
        if (task.completed === false) {
          task.completed = true;
          console.log(task);
          taskSquare.classList.remove("task-style");
          taskSquare.classList.add("taskDone");
        } else {
          task.completed = false;
          console.log(task);
          taskSquare.classList.add("task-style");
          taskSquare.classList.remove("taskDone");
        }
      });

      let taskTopDiv = document.createElement("div");
      taskTopDiv.appendChild(taskTitle);
      taskTopDiv.appendChild(completion);
      taskTopDiv.classList.add("taskTopDiv");

      let taskDescription = document.createElement("p");
      taskDescription.innerText = task.description;

      let taskProject = document.createElement("p");
      taskProject.innerText = task.project;
      taskProject.classList.add("taskSquare-project");

      let taskDueDate = document.createElement("div");
      let formatedDate = intlFormatDistance(new Date(task.dueDate), new Date());
      dateStyling(task.dueDate, taskDueDate);
      taskDueDate.innerText = formatedDate;

      let taskBottomDiv = document.createElement("div");
      taskBottomDiv.classList.add("taskBottomDiv");

      let priority = document.createElement("div");
      priority.innerText = task.priority;
      priorityStyle(task.priority, priority);

      let iconDiv = document.createElement("div");
      iconDiv.classList.add("iconDiv");

      let editButton = document.createElement("img");
      editButton.src = editImg;
      editButton.classList.add("edit");

      editButton.addEventListener("click", () => {
        editTask(task);
        chooseProject(allProjects);
      });

      let deleteButton = document.createElement("img");
      deleteButton.src = deleteImg;
      deleteButton.classList.add("del");

      deleteButton.addEventListener("click", function () {
        taskSquare.remove();
        allTasksProject.removeTask(task.title);
        localStorage.removeItem(task.title);
        populateProjectStorage(allTasksProject.title, allTasksProject);
      });

      iconDiv.appendChild(editButton);
      iconDiv.appendChild(deleteButton);
      taskBottomDiv.appendChild(priority);
      taskBottomDiv.appendChild(iconDiv);

      taskSquare.appendChild(taskTopDiv);
      taskSquare.appendChild(taskDescription);
      taskSquare.appendChild(taskProject);
      taskSquare.appendChild(taskDueDate);
      taskSquare.appendChild(taskBottomDiv);

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
  gridDiv.classList.add("task-grid");

  for (let task of array.tasks) {
    if (compareAsc(new Date(task.dueDate), new Date()) < 0) {
      let taskSquare = document.createElement("div");
      taskSquare.classList.add("task-style");

      let taskTitle = document.createElement("h3");
      taskTitle.innerText = task.title;

      let completion = document.createElement("input");
      completion.type = "checkbox";

      completion.addEventListener("click", () => {
        if (task.completed === false) {
          task.completed = true;
          console.log(task);
          taskSquare.classList.remove("task-style");
          taskSquare.classList.add("taskDone");
        } else {
          task.completed = false;
          console.log(task);
          taskSquare.classList.add("task-style");
          taskSquare.classList.remove("taskDone");
        }
      });

      let taskTopDiv = document.createElement("div");
      taskTopDiv.appendChild(taskTitle);
      taskTopDiv.appendChild(completion);
      taskTopDiv.classList.add("taskTopDiv");

      let taskDescription = document.createElement("p");
      taskDescription.innerText = task.description;

      let taskProject = document.createElement("p");
      taskProject.innerText = task.project;
      taskProject.classList.add("taskSquare-project");

      let taskDueDate = document.createElement("div");
      let formatedDate = intlFormatDistance(new Date(task.dueDate), new Date());
      dateStyling(task.dueDate, taskDueDate);
      taskDueDate.innerText = formatedDate;

      let taskBottomDiv = document.createElement("div");
      taskBottomDiv.classList.add("taskBottomDiv");

      let priority = document.createElement("div");
      priority.innerText = task.priority;
      priorityStyle(task.priority, priority);

      let iconDiv = document.createElement("div");
      iconDiv.classList.add("iconDiv");

      let editButton = document.createElement("img");
      editButton.src = editImg;
      editButton.classList.add("edit");

      editButton.addEventListener("click", () => {
        editTask(task);
        chooseProject(allProjects);
      });

      let deleteButton = document.createElement("img");
      deleteButton.src = deleteImg;
      deleteButton.classList.add("del");

      deleteButton.addEventListener("click", function () {
        taskSquare.remove();
        allTasksProject.removeTask(task.title);
        localStorage.removeItem(task.title);
        populateProjectStorage(allTasksProject.title, allTasksProject);
      });

      iconDiv.appendChild(editButton);
      iconDiv.appendChild(deleteButton);
      taskBottomDiv.appendChild(priority);
      taskBottomDiv.appendChild(iconDiv);

      taskSquare.appendChild(taskTopDiv);
      taskSquare.appendChild(taskDescription);
      taskSquare.appendChild(taskProject);
      taskSquare.appendChild(taskDueDate);
      taskSquare.appendChild(taskBottomDiv);

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
  gridDiv.classList.add("task-grid");

  for (let task of project.tasks) {
    let taskSquare = document.createElement("div");
    taskSquare.classList.add("task-style");

    let taskTitle = document.createElement("h3");
    taskTitle.innerText = task.title;

    let completion = document.createElement("input");
    completion.type = "checkbox";

    completion.addEventListener("click", () => {
      if (task.completed === false) {
        task.completed = true;
        console.log(task);
        taskSquare.classList.remove("task-style");
        taskSquare.classList.add("taskDone");
      } else {
        task.completed = false;
        console.log(task);
        taskSquare.classList.add("task-style");
        taskSquare.classList.remove("taskDone");
      }
    });

    let taskTopDiv = document.createElement("div");
    taskTopDiv.appendChild(taskTitle);
    taskTopDiv.appendChild(completion);
    taskTopDiv.classList.add("taskTopDiv");

    let taskDescription = document.createElement("p");
    taskDescription.innerText = task.description;

    let taskDueDate = document.createElement("div");
    let formatedDate = intlFormatDistance(new Date(task.dueDate), new Date());
    dateStyling(task.dueDate, taskDueDate);
    taskDueDate.innerText = formatedDate;

    let taskBottomDiv = document.createElement("div");
    taskBottomDiv.classList.add("taskBottomDiv");

    let priority = document.createElement("div");
    priority.innerText = task.priority;
    priorityStyle(task.priority, priority);

    let iconDiv = document.createElement("div");
    iconDiv.classList.add("iconDiv");

    let editButton = document.createElement("img");
    editButton.src = editImg;
    editButton.classList.add("edit");

    editButton.addEventListener("click", () => {
      editTask(task);
      chooseProject(allProjects);
    });

    let deleteButton = document.createElement("img");
    deleteButton.src = deleteImg;
    deleteButton.classList.add("del");

    deleteButton.addEventListener("click", function () {
      taskSquare.remove();
      allTasksProject.removeTask(task.title);
      localStorage.removeItem(task.title);
      populateProjectStorage(allTasksProject.title, allTasksProject);
    });

    iconDiv.appendChild(editButton);
    iconDiv.appendChild(deleteButton);
    taskBottomDiv.appendChild(priority);
    taskBottomDiv.appendChild(iconDiv);

    taskSquare.appendChild(taskTopDiv);
    taskSquare.appendChild(taskDescription);
    taskSquare.appendChild(taskDueDate);
    taskSquare.appendChild(taskBottomDiv);

    gridDiv.appendChild(taskSquare);
  }

  content.appendChild(gridDiv);
}

export {
  showTasks,
  showTodayTasks,
  showUpcomingTasks,
  showOverdueTasks,
  showProjectTasks,
};
