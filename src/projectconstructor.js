class Project {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
        console.log(this);
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        console.log(this);
    }

}

let allTasksProject = new Project();

export { Project, allTasksProject } 