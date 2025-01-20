function chooseProject(array) {
  let projectSelect = document.querySelectorAll(".project-select");
  projectSelect.forEach((element) => {
    element.innerHTML = "";

    for (let project of array.tasks) {
      let option = document.createElement("option");
      option.value = project.title;
      option.innerText = project.title;
      console.log(option);
      element.appendChild(option);
    }
  });
}

export { chooseProject };
