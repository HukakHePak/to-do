
export const HIGH_CONTAINER = document.querySelector('.container');

export const FORMS = {
    name: HIGH_CONTAINER.firstElementChild,
    add: HIGH_CONTAINER.querySelector('.add'),
    task: HIGH_CONTAINER.lastElementChild,
}
HIGH_CONTAINER.lastElementChild.remove();

export const LOW_CONTAINER = HIGH_CONTAINER.cloneNode(true);
LOW_CONTAINER.firstElementChild.textContent = "LOW";

HIGH_CONTAINER.after(LOW_CONTAINER);




console.log(LOW_CONTAINER);