import { Task } from "./taskconstructor"

class Project {
    constructor(title, description, priority, tasks) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.tasks = tasks;
    }

    addTask(title, description) {
        let newTask = new Task(title, description);
        this.push(newTask);
    }

    removeTask() {

    }

}

export { Project, addTask, removeTask } 

//ajouter les method dans l'export ?