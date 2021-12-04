import { createNewTask } from "./main.js";

export const HIGH_CONTAINER = document.querySelector('.container');

export const FORMS = {
    name: HIGH_CONTAINER.firstElementChild,
    add: HIGH_CONTAINER.children[1],
    task: HIGH_CONTAINER.lastElementChild,
}
HIGH_CONTAINER.lastElementChild.remove();

FORMS.add.onsubmit = () => { 
    createNewTask(FORMS.add); 
    return false; 
};


export const LOW_CONTAINER = HIGH_CONTAINER.cloneNode(true);
LOW_CONTAINER.firstElementChild.textContent = "LOW";

LOW_CONTAINER.children[1].onsubmit = () => {
    createNewTask(LOW_CONTAINER.children[1]);
    return false;
};

HIGH_CONTAINER.after(LOW_CONTAINER);