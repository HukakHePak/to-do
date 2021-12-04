import { TASK, CONTAINERS } from "./view.js";

export function addNewTask() {
    let input = this.firstElementChild;
    let value = input.value.trim();

    if(value.length) {   
        let task = TASK.cloneNode(true);
        task.children[1].textContent = value;
        task.onsubmit = deleteTask;
        task.onchange = changeStatus;
        this.after(task);
    }  
    input.value = '';
    return false;
}

function changeStatus() {
    this.classList.toggle('checked');
    return false;
}

function deleteTask() {
    this.remove();
    return false;
}

for(let item in CONTAINERS) {
    let form = CONTAINERS[item].children[1];
    form.onsubmit = addNewTask;
}


