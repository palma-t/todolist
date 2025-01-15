import { showProjectTasks } from "./showtasks";

function showProjectsMenu(array) {
    let projectNav = document.querySelector(".projectList");
    projectNav.innerHTML = "";

    for(let project of array.tasks) {
        let projectButton = document.createElement("button");
        projectButton.classList.add("project");
        projectButton.setAttribute("data-project-title", project.title);
        projectButton.innerText = project.title;
        console.log(projectButton);
        projectNav.appendChild(projectButton);
    }

    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("click", event => {
            const projectTitle = event.target.getAttribute("data-project-title");
            console.log(projectTitle)
            showProjectTasks(projectTitle);
        });
    })
}


export { showProjectsMenu, showProjectTasks }