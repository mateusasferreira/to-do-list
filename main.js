(() => {
const formButton = document.querySelector('[data-form-button'); 

formButton.addEventListener('click', (event) => {
    event.preventDefault();
    const previousTasks = JSON.parse(localStorage.getItem('tasks')) || []; 
    const input = document.querySelector('[data-form-input]');
    const inputValue = input.value; 
    const calendar = document.querySelector('[data-form-date');
    const date = moment(calendar.value).format('MMM do, hh:mm a');
    const taskList = document.querySelector('[data-task-list]')
    const data = {
        date, 
        inputValue,
    }

    const updatedTasks = [...previousTasks, data]
    input.value = '';        
    const task = createTask(data);
    taskList.appendChild(task);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    
})

const createTask = ({date, inputValue}) => { 
    const task = document.createElement('li');
    task.classList.add('task-item');
    const taskContent = `<span class="task-text">${date} ${inputValue}</span>`
    task.innerHTML = taskContent;
    task.appendChild(CheckButton()); 
    task.appendChild(DeleteButton());
    return task;
}

let numeros = [3,2,4,1]; 
numeros.sort((a, b) => a - b); 
console.log(numeros);

const loadTasks = () => {
    const list = document.querySelector('[data-task-list]'); 
    const oldTask = JSON.parse(localStorage.getItem('tasks')); 
    console.log(oldTask)
    // oldTask.sort((a, b) => a.date - b.date);
    oldTask.forEach(task => { 
        list.appendChild(createTask(task));        
    });
}

loadTasks();

    function CheckButton() {
        const checkButton = document.createElement('i');
        checkButton.classList.add('fas', 'fa-check-circle');
        checkButton.addEventListener('click', (event) => {
            const taskCompleted = event.target.parentElement;
            taskCompleted.firstElementChild.classList.toggle('task-check');
        });
        return checkButton;
    }

    function DeleteButton() {
        const deleteButton = document.createElement('i');
        deleteButton.classList.add('fas', 'fa-trash-alt');
        deleteButton.addEventListener('click', (event) => {
            const deletedElement = event.target.parentElement;
            deletedElement.remove();
        });
        return deleteButton;
    }
    
})();

