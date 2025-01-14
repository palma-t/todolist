function chooseProject(array) {
    let projectSelect = document.querySelector("#project-select")

    for(let project in array.tasks) {
        let option = document.createElement("option");
        option.value = project.title;
        option.innerText = project.title;
        
        projectSelect.appendChild(option);
    }
}

export { chooseProject }
