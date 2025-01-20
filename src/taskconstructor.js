class Task {
  constructor(title, description, project, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.project = project;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  deleteTask() {}
}

export { Task };
