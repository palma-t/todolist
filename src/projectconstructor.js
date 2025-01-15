class Project {
    constructor() {
        this.title = this.title;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
        console.log(this);
    }

    removeTask(taskTitle) {
        this.tasks = this.tasks.filter(task => task.title !== taskTitle);
    }
}

let allTasksProject = new Project();
allTasksProject.title = "All Tasks";

let allProjects = new Project();
allProjects.title = "All Projects";

function getProjectByTitle(title) {
    return allProjects[title];
}

export { Project, allTasksProject, allProjects, getProjectByTitle } 