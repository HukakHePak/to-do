const highTasks = document.querySelector('.tasks');
export const TASK_TEMPLATE = highTasks.querySelector('.view');
export const ADD_FORMS = {
    high: null,
    low: null,
}

let lowTasks = null;
let headname = null;

try {
    TASK_TEMPLATE.remove();
    lowTasks = highTasks.cloneNode(true);
    headname = lowTasks.querySelector('.tasks__head');
    headname.textContent = 'LOW';
    highTasks.after(lowTasks);
    ADD_FORMS.high = highTasks.querySelector('.add'),
    ADD_FORMS.low =  lowTasks.querySelector('.add');
}
catch (err) {
    console.log(err);
}