import { createTask } from "./createtask"

//Deal with opening and closing the task's form
const popup1 = document.getElementById("taskForm");

popup1.addEventListener("submit", function (event) {
  event.preventDefault();
});

const overlay = document.getElementById("overlay");
const closeButton1 = document.getElementById("closeButton");
const submitButton1 = document.querySelector("#taskFormButton");

overlay.addEventListener("click", () => {
    popup1.classList.add("hidden");
    overlay.classList.add("hidden");
  });
  
  closeButton1.addEventListener("click", () => {
    popup1.classList.add("hidden");
    overlay.classList.add("hidden");
  });
  
  submitButton1.addEventListener("click", () => {
      const taskInput = document.getElementById("taskN");

          if(taskInput.validity.valueMissing){
              taskInput.setCustomValidity("You forgot the task's name!");
              console.log("no name");
          } else {
              taskInput.setCustomValidity("");
              popup1.classList.add("hidden");
              overlay.classList.add("hidden");
              createTask();
          }
  });
  
  //Deal with project's form
  const popup2 = document.getElementById("projectForm");
  
  popup2.addEventListener("submit", function (event) {
    event.preventDefault();
  });
  
  const closeButton2 = document.getElementById("closeButton");
  const submitButton2 = document.querySelector("#projectFormButton");
  
  let addProjectButton = document.querySelector("#project-title");
  addProjectButton.addEventListener("click", () => {
    popup2.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
  
  closeButton2.addEventListener("click", () => {
    popup2.classList.add("hidden");
    overlay.classList.add("hidden");
  });
  
  submitButton2.addEventListener("click", () => {
    popup2.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  export { popup1, overlay }