import "./styles/style.css";
import { ufo } from "./scripts/ufo";

const list = document.querySelector('.items-list');
let items = list.children;

const content = document.querySelector('.content');
const toggleAllButton = content.querySelector('.toggle-all');


const footer = document.querySelector('.footer');
const itemsLeft = footer.querySelector(".items-left");
const buttons = footer.querySelector('.buttons');
const deleteBtn = footer.querySelector('.delete-btn');

const newTodo = document.querySelector('.new-todo');

const newItemTemplate = document.getElementById('task-template').content.querySelector('li');

let toggleAllValid = false;
let filter = "all";

const toggleContent = () => {
    if (items.length === 0) {
        content.classList.remove('content_show');
        footer.classList.remove('footer_show');
    } else {
        content.classList.add("content_show");
        footer.classList.add("footer_show");
    }
};

const itemsChangeLeft = () => {
    let i = 0;
    for (let item of items) {
        if (item.className === 'completed') {
            i++;
        }
    }
    let itemsCount = items.length - i;
    itemsLeft.textContent =
        itemsCount === 1 ? `${itemsCount} item left` : `${itemsCount} items left`;
};

const dblclickEvent = function(e, editInput, taskDescription) {
    e.target.closest("li").classList.add("edited");
    editInput.value = taskDescription.textContent;
    editInput.focus();
};

const blurEvent = function(e, editInput, taskDescription) {
    if (editInput.value === "") {
        editInput.closest("li").remove();
        toggleContent();
        itemsChangeLeft();
    } else {
        taskDescription.textContent = editInput.value;
    }
    e.target.closest("li").classList.remove("edited");
};

const keydownEvent = function(e, editInput) {
    if (e.key === "Enter") {
        editInput.blur();
    }
};

const changeEvent = e => {
    e.target.closest("li").classList.toggle("completed");
    itemsChangeLeft();
}

const newItemCreate = () => {
    if (newTodo.value === '') return;

    if (!toggleAllValid) {
        toggleAllButton.checked = toggleAllValid;
        toggleAllValid = !toggleAllValid;
    }

    const taskText = newTodo.value;
    const task = newItemTemplate.cloneNode(true);
    const taskDescription = task.querySelector('.item-todo');
    const itemCheckBox = task.querySelector('.item-checkbox');
    const itemCheck = task.querySelector('.item-check');
    const editInput = task.querySelector('.edit');

    const date = Date.now();

    taskDescription.textContent = taskText;
    itemCheckBox.id += '_' + date;
    itemCheck.htmlFor += '_' + date;

    taskDescription.addEventListener('dblclick', e => {
        dblclickEvent(e, editInput, taskDescription);
    });

    editInput.addEventListener('blur', e => {
        blurEvent(e, editInput, taskDescription);
    });

    editInput.addEventListener('keydown', e => {
        keydownEvent(e, editInput);
    })

    itemCheckBox.addEventListener('change', e => {
        changeEvent(e);
    })

    list.append(task);
    
    toggleContent();
    itemsChangeLeft();

    newTodo.value = '';
};

const filteredFunction = () => {
    for (let item of items) {
        item.classList.remove("not-visible");
    }
    switch(filter) {
        case "active":
            for (let item of items) {
                if (item.className === "completed") {
                    item.classList.add("not-visible");
                }
            }
            break;
        case "completed":
            for (let item of items) {
                if (item.className !== "completed") {
                    item.classList.add("not-visible");
                }
            }
            break;
    }
}

newTodo.addEventListener('blur', newItemCreate);

newTodo.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        newItemCreate();
    }
});

list.addEventListener('click', e => {
    if (items.length === 1) {
        toggleAllValid = !toggleAllValid;
    }
    if (e.target.className === 'item-destroy') {
        e.target.closest('li').remove();
        toggleContent();
        itemsChangeLeft();
    }
});

toggleAllButton.addEventListener('change', e => {
    if (items.length === 0) {
        e.target.checked = false;
    }

    const allCheckBoxesInItemsList = list.querySelectorAll('.item-checkbox');

    if (e.target.checked) {
        for (let checkbox of allCheckBoxesInItemsList) {
            checkbox.checked = true;
            checkbox.closest("li").classList.add("completed");
        }
    } else {
        for (let checkbox of allCheckBoxesInItemsList) {
            checkbox.checked = false;
            checkbox.closest("li").classList.remove("completed");
        }
    }

    itemsChangeLeft();
});

buttons.addEventListener('click', e => {
    if (!e.target.className === 'btn') return;

    for (let button of buttons.children) {
        button.classList.remove('active');
    }

    e.target.classList.add('active');
    
    if (!e.target.href) return;

    filter = e.target.href.split('#').pop();
});

deleteBtn.addEventListener('click', () => {
    Array.from(items).map(item => {
        if (item.classList.contains("completed")) {
            item.remove();
        }
    });

    if (items.length === 0) {
        toggleAllButton.checked = false;
    }

    itemsChangeLeft();
    toggleContent();
})

setInterval(() => {
    filteredFunction();
}, 100);

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("content")) {
        list.innerHTML = localStorage.getItem("content");

        for (let item of items) {
            if (item.className === "completed") {
                item.querySelector(".item-checkbox").checked = true;
            }

            const editInput = item.querySelector(".edit");
            const taskDescription = item.querySelector(".item-todo");
            const itemCheckBox = item.querySelector(".item-checkbox");

            taskDescription.addEventListener("dblclick", e => {
                dblclickEvent(e, editInput, taskDescription);
            });

            editInput.addEventListener("blur", e => {
                blurEvent(e, editInput, taskDescription);
            });

            editInput.addEventListener("keydown", e => {
                keydownEvent(e, editInput);
            })

            itemCheckBox.addEventListener("change", (e) => {
                changeEvent(e);
            });
        }

        toggleContent();
        itemsChangeLeft();
    }
});

window.onbeforeunload = () => {
    localStorage.setItem("content", list.innerHTML);
}

ufo();