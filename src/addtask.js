import { Task } from "./taskconstructor"

createTask() {
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
        //ajout a default project ou named project
    })

    taskForm.appendChild(inputName);
    taskForm.appendChild(inputDescription);
    taskForm.appendChild(buttonSubmit);



    //ajouter un addeventlistener au bouton pour générer 
    // une nouvelle tache avec new Task
    // et trouver comment faire apparaitre l'ensemble
    
}