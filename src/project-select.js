function chooseProject(array) {
    let projectSelect = document.querySelector("#project-select")

    for(let project of array.tasks) {
        let option = document.createElement("option");
        option.value = project.title;
        option.innerText = project.title;
        console.log(option);
        projectSelect.appendChild(option);
    }
}

export { chooseProject }
