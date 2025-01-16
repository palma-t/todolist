import { showProjectTasks } from "./showtasks";
import deleteImg from "./images/delete-white.svg"
import { allProjects } from "./projectconstructor";
import { populateProjectStorage } from "./storage";

function showProjectsMenu(array) {
    let projectNav = document.querySelector(".projectList");
    projectNav.innerHTML = "";

    for(let project of array.tasks) {
        let projectMenuDiv = document.createElement("div");
        projectMenuDiv.classList.add("project-menu-div");

        let projectButton = document.createElement("button");
        projectButton.classList.add("project");
        projectButton.setAttribute("data-project-title", project.title);
        projectButton.innerText = project.title;
        console.log(projectButton);

        let deleteProjectButton = document.createElement("img");
        deleteProjectButton.src = deleteImg;
        deleteProjectButton.classList.add("delete-style");

        deleteProjectButton.addEventListener("click", () => {
            project.tasks = "";
            projectMenuDiv.remove();
            allProjects.removeTask(project.title);
            localStorage.removeItem(project.title);
            populateProjectStorage(allProjects.title, allProjects);
        })

        projectMenuDiv.appendChild(projectButton);
        projectMenuDiv.appendChild(deleteProjectButton);
        projectNav.appendChild(projectMenuDiv);
    }

    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("click", event => {
            const projectTitle = event.target.getAttribute("data-project-title");
            console.log(projectTitle)
            //aller chercher dans le localStorage?
            showProjectTasks(projectTitle);
        });
    })
}


export { showProjectsMenu, showProjectTasks }