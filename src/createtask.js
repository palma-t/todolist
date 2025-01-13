import { Task, allTasks } from "./taskconstructor"

function createTask() {
    let taskForm = document.createElement("form");

    let inputName = document.createElement("input");
    inputName.type = "text";
    inputName.name = "taskName";
    inputName.placeholder = "Task name";

    let inputDescription = document.createElement("input");
    inputDescription.type = "text";
    inputDescription.name = "inputDescription";
    inputDescription.placeholder = "Description";

    let buttonSubmit = document.createElement('input');
    buttonSubmit.type = 'submit';
    buttonSubmit.value = 'Submit';

    buttonSubmit.addEventListener("click", () => {
        let newTask = new Task(inputName.value, inputDescription.value)
        allTasks.push(newTask);
        //ajout a named project
    })

    taskForm.appendChild(inputName);
    taskForm.appendChild(inputDescription);
    taskForm.appendChild(buttonSubmit);

    // trouver comment faire apparaitre l'ensemble
    
}

export { createTask, allTasks }