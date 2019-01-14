const taskFormEl = document.querySelector('#create-task-form')
const taskListEl = document.querySelector('#tasks')
const taskNameInputEl = document.querySelector('#new-task-description')


//-----
// Functional programming below - this works!
//-----
//taskFormEl.addEventListener('submit', handleFormSubmit)//
//function renderSingleTask (newTask) {
//   const taskEl = document.createElement('li')
//   taskEl.className = 'card'
//   taskEl.innerHTML = `
//     <div>${newTask}</div>
//   `
//   taskListEl.appendChild(taskEl)
// }
//
// function handleFormSubmit (event) {
//   event.preventDefault()
//   const newTask = taskNameInputEl.value
//   //console.log('New task', newTask)
//   renderSingleTask(newTask)
// }
//-----

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const taskFormEl = document.querySelector('#create-task-form')
  taskFormEl.addEventListener('submit', (event) => taskList.handleFormSubmit(event, taskList))
});

class TaskList {
  constructor(){

  }
  renderSingleTask(newTask) {
    const taskEl = document.createElement('li')
    taskEl.className = 'card'
    taskEl.innerHTML = `
      <div>${newTask.text}</div>
    `
    taskListEl.appendChild(taskEl)
  }

  handleFormSubmit (event, obj) {
    event.preventDefault()
    let newTask = new Task(taskNameInputEl.value)
    console.log('New task', newTask)
    console.log("This: ", this)
    console.log(newTask)
    obj.renderSingleTask(newTask)
  }
}

class Task {
  constructor(text){
    this.text = text
  }
}
