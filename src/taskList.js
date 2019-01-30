// class TaskList {
//   constructor(){
//
//   }
//   renderSingleTask(newTask) {
//     const taskEl = document.createElement('li')
//     taskEl.className = 'card'
//     taskEl.innerText = newTask.text
//     taskListEl.appendChild(taskEl)
//   }
//
//   handleFormSubmit (event, obj) {
//     event.preventDefault()
//     let newTask = new Task(taskNameInputEl.value)
//     obj.renderSingleTask(newTask)
//   }
// }


const userInput = document.querySelector('#new-task-description')
const toDoForm = document.querySelector('#create-task-form')
const myTasksContainer = document.querySelector('#tasks')


toDoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addToDo();
  toDoForm.reset();
})

const addToDo = () => {
  const toDoEl = document.createElement('li')
  toDoEl.innerHTML += userInput.value;
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete');
  deleteBtn.innerText = ' X ';
  // deleteBtn.onclick = deleteTask();
  myTasksContainer.append(toDoEl);
  toDoEl.append(deleteBtn)


  deleteBtn.addEventListener ('click', () => {
    // deleteTask()
    toDoEl.remove();
  }
)


}
