const highTasks = document.querySelector('.tasks');
export const TASK_TEMPLATE = highTasks.querySelector('.view');

TASK_TEMPLATE.remove();

const lowTasks = highTasks.cloneNode(true);
const headname = lowTasks.querySelector('.tasks__head');
headname.textContent = 'LOW';

highTasks.after(lowTasks);

export const ADD_FORMS = {
    high: highTasks.querySelector('.add'),
    low: lowTasks.querySelector('.add'),
}