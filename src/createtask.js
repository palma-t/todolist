import { Task } from "./taskconstructor";
import { allTasksProject, getProjectByTitle } from "./projectconstructor.js";
import { populateProjectStorage } from "./storage.js";
import { showTasks } from "./showtasks.js";

function createTask() {
    let inputName = document.querySelector("#taskN");
    let inputDescription = document.querySelector("#taskD");
    let selectedProject = document.querySelector("#taskForm-project");
    let selectedDate = document.querySelector("#dueDate");
    let priority = document.querySelector("#taskP");

    let newTask = new Task(
      inputName.value,
      inputDescription.value,
      selectedProject.value,
      selectedDate.value,
      priority.value,
    );
    console.log(newTask);

    if (selectedProject.value) {
      getProjectByTitle(selectedProject.value).addTask(newTask);
    } else {
      newTask.project = "No project";
    }

    allTasksProject.addTask(newTask);
    populateProjectStorage(allTasksProject.title, allTasksProject);
    showTasks(JSON.parse(localStorage.getItem(allTasksProject.title)));
}

function updateTask(task) {
  allTasksProject.removeTask(task.title);

  let inputName = document.querySelector("#newTaskN");
  let inputDescription = document.querySelector("#newTaskD");
  let selectedProject = document.querySelector("#newTaskForm-project");
  let selectedDate = document.querySelector("#newDueDate");
  let priority = document.querySelector("#newTaskP");

  task.title = inputName.value;
  task.description = inputDescription.value;
  task.dueDate = selectedDate.value;
  task.priority = priority.value;

  console.log(task);

  if (selectedProject.value == !task.project) {
    getProjectByTitle(task.project).removeTask(task.title);
    task.project = selectedProject.value;
    getProjectByTitle(selectedProject.value).addTask(task);
  }

  allTasksProject.addTask(task);
  populateProjectStorage(allTasksProject.title, allTasksProject);
  showTasks(JSON.parse(localStorage.getItem(allTasksProject.title)));
}
export { createTask, updateTask };
