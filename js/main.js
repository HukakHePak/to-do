import { FORMS } from "./view.js";

export function createNewTask(form) {
    if(!checkMaxHeight(form.parentNode)) return;

    let task = FORMS.task.cloneNode(true);
    task.children[1].textContent = form.firstElementChild.value;
    form.firstElementChild.value = '';

    task.onsubmit = () => { 
        task.remove(); 
        return false;
    };

    task.firstElementChild.onclick = () => { 
        task.classList.toggle('checked');
    };

    form.after(task);
}

function checkMaxHeight(form) {
    return form.children.length < 20;
}
