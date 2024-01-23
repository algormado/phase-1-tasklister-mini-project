document.getElementById('taskForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const taskInput = document.getElementById('taskInput');
  const priorityInput = document.getElementById('priority');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    addTask(taskInput.value, priorityInput.value);
    taskInput.value = ''; // Clear the input field
  }
});

function addTask(taskText, priority) {
  const taskList = document.getElementById('taskList');
  const taskItem = document.createElement('li');
  const deleteButton = document.createElement('button');
  const editButton = document.createElement('button');

  taskItem.textContent = `${taskText} (Priority: ${priority}) `;
  taskItem.setAttribute('data-priority', priority);

  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    taskList.removeChild(taskItem);
  });

  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function () {
    const newText = prompt('Edit task:', taskText);
    if (newText !== null) {
      taskItem.textContent = `${newText} (Priority: ${priority}) `;
    }
  });

  taskItem.appendChild(deleteButton);
  taskItem.appendChild(editButton);

  taskList.appendChild(taskItem);
}
