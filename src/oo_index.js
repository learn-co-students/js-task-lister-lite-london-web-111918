const taskFormEl = document.querySelector('#create-task-form')
const taskListEl = document.querySelector('#tasks')
const taskNameInputEl = document.querySelector('#new-task-description')

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  taskFormEl.addEventListener('submit', (event) => taskList.handleFormSubmit(event, taskList))
});
