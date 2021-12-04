import { FORMS } from "./view.js";
import { MAX_CONTAINER_HIGH  } from "./view.js";

export function createNewTask(form) {
    let input = form.firstElementChild;
    let value = input.value;
    
    if(checkMaxHigh(form.parentNode) && value != '') {   
        let task = FORMS.task.cloneNode(true);
        task.children[1].textContent = checkOversize(value, 26);
    
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

function checkMaxHigh(form) {
    return form.children.length < MAX_CONTAINER_HIGH;
}

function checkOversize(str, max) {
    let counter = 0;
    let allcount = 0;

    for(let w of str) {
        counter++;
        allcount++;
        if(w == ' ') {
            counter = 0;
        }
        if(counter > max) 
            return str.slice(0, allcount);
    }
    return str;
}


