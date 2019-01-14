class TaskList {
  constructor(){

  }
  renderSingleTask(newTask) {
    const taskEl = document.createElement('li')
    taskEl.className = 'card'
    taskEl.innerText = newTask.text
    taskListEl.appendChild(taskEl)
  }

  handleFormSubmit (event, obj) {
    event.preventDefault()
    let newTask = new Task(taskNameInputEl.value)
    obj.renderSingleTask(newTask)
  }
}
