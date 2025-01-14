function showProjectsMenu(array) {
    let projectNav = document.querySelector("#projectList");

    for(let project of array.tasks) {
        let projectName = document.createElement("div");
        projectName.innerText = project.title;

        projectNav.appendChild(projectName);
    }
}

function showProjectTasks() {


}


export { showProjectsMenu, showProjectTasks }