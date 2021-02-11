(() => {
const formButton = document.querySelector('[data-form-button'); 

formButton.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const inputValue = input.value; 
    const taskList = document.querySelector('[data-task-list]')
    const task = document.createElement('li')
    task.classList.add('task-item'); 
    input.value = '';        
    const taskContent = `<span class="task-text">${inputValue}</span>`
    task.innerHTML = taskContent;
    task.appendChild(CheckButton()); 
    task.appendChild(DeleteButton());
    taskList.appendChild(task);
})

const CheckButton = () => {
    const checkButton = document.createElement('i'); 
    checkButton.classList.add('fas', 'fa-check-circle'); 
    checkButton.addEventListener('click', (event) => {
        const taskCompleted = event.target.parentElement;
        taskCompleted.firstElementChild.classList.toggle('task-check')
    })
    return checkButton;
}

const DeleteButton = () => {
    const deleteButton = document.createElement('i'); 
    deleteButton.classList.add('fas', 'fa-trash-alt');
    deleteButton.addEventListener('click', (event) => {
        const deletedElement = event.target.parentElement;
        deletedElement.remove();
    })
    return deleteButton;
}
    
})();