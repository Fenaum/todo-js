class taskObject {
  constructor(id, title, description) {
    this.id = id, (this.title = title);
    this.description = description;
    this.copmletion = false;
  }
}

class taskManager {
  constructor() {
    this.tasks = [];
    this.currentTask = this.tasks[1];
  }

  addtask(id, title, description) {
    const task = new taskObject(id, title, description)
    this.tasks.push(task);
  }

  editTask(id, title, description) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = new taskObject(id, title, description);
    };
    return;
  }

  deleteTask(id) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1)
    }
    return;
  }

  markComplete(id) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].copmletion = true
    }
  }
}

export default { taskObject, taskManager }