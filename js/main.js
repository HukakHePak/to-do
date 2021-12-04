import { FORMS } from "./view.js";
import { CONTAINERS } from "./view.js";

export function createNewTask(form) {
    let input = form.firstElementChild;
    let value = input.value.trim();
    
    let rightSizeAndNotEmpty = form.children.length < CONTAINERS.maxCount && value.length;

    if(rightSizeAndNotEmpty) {   
        let task = FORMS.task.cloneNode(true);
        task.children[1].textContent = value;
    
        task.onsubmit = () => { 
            task.remove(); 
            return false;
        };

        task.firstElementChild.onclick = () => { 
            task.classList.toggle('checked');
        };
        form.after(task);
    }  
    input.value = '';
    return false;
}

FORMS.add.onsubmit = () => { 
    createNewTask(FORMS.add); 
    return false; 
};

CONTAINERS.low.children[1].onsubmit = () => {
    createNewTask(CONTAINERS.low.children[1]);
    return false;
};

console.log(CONTAINERS.low);