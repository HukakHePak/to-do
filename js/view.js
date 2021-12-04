const mainContainer = document.querySelector('.container');

export const CONTAINERS = {
    high: mainContainer,
    low: mainContainer.cloneNode(true),
    maxCount: 20
}

export const FORMS = {
    name: CONTAINERS.high.firstElementChild,
    add: CONTAINERS.high.children[1],
    task: CONTAINERS.high.lastElementChild,
}

CONTAINERS.high.lastElementChild.remove();
CONTAINERS.low.lastElementChild.remove();
CONTAINERS.low.firstElementChild.textContent = "LOW";

CONTAINERS.high.after(CONTAINERS.low);

