function showProjectsMenu(array) {
    let projectNav = document.querySelector(".projectList");
    projectNav.innerHTML = "";

    for(let project of array.tasks) {
        let projectName = document.createElement("div");
        projectName.classList.add("project")
        projectName.innerText = project.title;
        console.log(projectName);
        projectNav.appendChild(projectName);
    }
}

function showProjectTasks() {


}


export { showProjectsMenu, showProjectTasks }