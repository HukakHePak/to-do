const mainContainer = document.querySelector('.container');

export const TASK = mainContainer.lastElementChild;

TASK.remove();

export const CONTAINERS = {
    high: mainContainer,
    low: mainContainer.cloneNode(true),
}

CONTAINERS.low.firstElementChild.textContent = "LOW";
CONTAINERS.high.after(CONTAINERS.low);