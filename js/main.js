import { ADD_FORMS, TASK_TEMPLATE } from "./view.js";

function addNewTask() {
    try {
        const input = this.firstElementChild;
        const newValue = input.value.trim();
        if(newValue.length) {
            const newTask = TASK_TEMPLATE.cloneNode(true);
            const taskValue = newTask.firstElementChild;
            taskValue.textContent = newValue;
            newTask.onsubmit = deleteTask;
            newTask.onchange = changeStatus;
            const tasksContainer = this.nextElementSibling;
            tasksContainer.prepend(newTask);   
        }
    }
    catch(err) {
        console.log(err);
    } 
    this.reset()
    return false;
}

function changeStatus() {
    this.classList.toggle('checked');
    replaceStatus(this);
    return false;
}

function replaceStatus(elem) {
    const elemsContainer = elem.parentElement;
    if(elem.classList.contains('checked'))
        elemsContainer.append(elem);
    else elemsContainer.prepend(elem);
}

function deleteTask() {
    this.remove();
    return false;
}

for(let form in ADD_FORMS) {
    try {
        const addform = ADD_FORMS[form];
        addform.onsubmit = addNewTask;
    }
    catch(err) {
        console.log(err);
    }
}