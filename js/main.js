import { ADD_FORMS, TASK_TEMPLATE } from "./view.js";

export function addNewTask() {
    let input = this.firstElementChild;
    let newValue = input.value.trim();
    if(newValue.length) {
        let newTask = TASK_TEMPLATE.cloneNode(true);
        let taskValue = newTask.firstElementChild;
        taskValue.textContent = newValue;
        newTask.onsubmit = deleteTask;
        newTask.onchange = changeStatus;
        let tasksContainer = this.nextElementSibling;
        tasksContainer.prepend(newTask);   
    }  
    input.value = '';
    return false;
}

function changeStatus() {
    this.classList.toggle('checked');
    replaceStatus(this);
    return false;
}

function replaceStatus(elem) {
    let elemsContainer = elem.parentElement;
    if(elem.classList.contains('checked'))
        elemsContainer.append(elem);
    else elemsContainer.prepend(elem);
}

function deleteTask() {
    this.remove();
    return false;
}

for(let form in ADD_FORMS) {
    let addform = ADD_FORMS[form];
    addform.onsubmit = addNewTask;
}