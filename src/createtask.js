import { Task, allTasksArray } from "./taskconstructor"

function openForm() {
    document.getElementById("taskForm").style.display = "block";
}

function createTask() {
    let buttonSubmit = document.querySelector("#taskFormButton")
    buttonSubmit.addEventListener("click", () => {
        let inputName = document.querySelector("#taskN");
        let inputDescription = document.querySelector("#taskD");
        let newTask = new Task(inputName.value, inputDescription.value)
        allTasksArray.push(newTask);
        console.log(allTasksArray);
        //ajout a named project
    })
}

export { openForm, createTask }