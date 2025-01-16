import { chooseProject } from "./project-select.js"
import { allProjects } from "./projectconstructor.js"
import { updateTask } from "./createtask.js";

function editTask(task) {
    let body = document.querySelector("body");

    console.log("yo")
    //Create overlay
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    //Create form
    let formDiv = document.createElement("div");
    formDiv.classList.add("form-popup");

    let editForm = document.createElement("form");
    editForm.setAttribute("action", "");
    editForm.classList.add("form-container");
   
    let topEditForm = document.createElement("div");
    topEditForm.classList.add("top-form");

    let editFormTitle = document.createElement("h3");
    editFormTitle.innerText = "Edit task";
    let closeButton = document.createElement("button");

    topEditForm.appendChild(editFormTitle);
    topEditForm.appendChild(closeButton);

    let taskName = document.createElement("input");
    taskName.setAttribute("type", "text");
    taskName.setAttribute("name", "taskN");
    taskName.setAttribute("id", "newTaskN");
    taskName.setAttribute("placeholder", task.title);

    let taskDescription = document.createElement("input");
    taskDescription.setAttribute("type", "text");
    taskDescription.setAttribute("name", "taskD");
    taskDescription.setAttribute("id", "newTaskD");
    taskDescription.setAttribute("placeholder", task.description);

    let customSelect = document.createElement("div");
    customSelect.classList.add("custom-select");
    let selectProject = document.createElement("select");
    selectProject.classList.add("project-select");
    selectProject.setAttribute("id", "newTaskForm-project");
    customSelect.appendChild(selectProject);

    let dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("name", "dueDate");
    dueDate.setAttribute("value", task.dueDate);
    dueDate.setAttribute("min", "2025-01-01");
    dueDate.setAttribute("max", "2026-12-31");
    dueDate.setAttribute("id", "newDueDate");

    let prioritySelect = document.createElement("div");
    prioritySelect.classList.add("custom-select");
    let choosePriority = document.createElement("select");
    choosePriority.setAttribute("name", "taskP");
    choosePriority.setAttribute("id", "newTaskP");
    let option1 = document.createElement("option");
    option1.setAttribute("value", "1");
    option1.innerText = "1";
    let option2 = document.createElement("option");
    option2.setAttribute("value", "2");
    option2.innerText = "2";
    let option3 = document.createElement("option");
    option3.setAttribute("value", "3");
    option3.innerText = "3";
    let option4 = document.createElement("option");
    option4.setAttribute("value", "4");
    option4.innerText = "4";

    choosePriority.appendChild(option1);
    choosePriority.appendChild(option2);
    choosePriority.appendChild(option3);
    choosePriority.appendChild(option4);
    prioritySelect.appendChild(choosePriority);

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "editTaskButton");
    submitButton.classList.add("btn");
    submitButton.innerText = "Modify";

    submitButton.addEventListener("click", () => {
        updateTask(task);
    })

    editForm.appendChild(topEditForm);
    editForm.appendChild(taskName);
    editForm.appendChild(taskDescription);
    editForm.appendChild(customSelect);
    editForm.appendChild(dueDate);
    editForm.appendChild(prioritySelect);
    editForm.appendChild(submitButton);

    formDiv.appendChild(editForm);
    body.appendChild(overlay);
    body.appendChild(formDiv);

    //Prevent form submitting
    formDiv.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    chooseProject(allProjects);

    //Opening and closing form
    overlay.addEventListener("click", () => {
        editForm.classList.add("hidden");
        overlay.classList.add("hidden");
    });
    
    closeButton.addEventListener("click", () => {
        editForm.classList.add("hidden");
        overlay.classList.add("hidden");
    });
    
    submitButton.addEventListener("click", () => {
        editForm.classList.add("hidden");
        overlay.classList.add("hidden");
    })

}

export { editTask }

