import "./styles/style.css";

let list = document.querySelector('.items-list');
let items = list.children;

let content = document.querySelector('.content');
let toggleAllButton = content.querySelector('.toggle-all');


let footer = document.querySelector('.footer');
let itemsLeft = footer.querySelector(".items-left");
let buttons = footer.querySelector('.buttons');
let deleteBtn = footer.querySelector('.delete-btn');

let newTodo = document.querySelector('.new-todo');

let newItemTemplate = document.getElementById('task-template').content.querySelector('li');

let toggleAllValid = false;
let filter = "all";

let toggleContent = () => {
    if (items.length === 0) {
        content.classList.remove('content_show');
        footer.classList.remove('footer_show');
    } else {
        content.classList.add("content_show");
        footer.classList.add("footer_show");
    }
};

let itemsChangeLeft = () => {
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

let newItemCreate = () => {
    if (newTodo.value === '') return;

    if (!toggleAllValid) {
        toggleAllButton.checked = toggleAllValid;
        toggleAllValid = !toggleAllValid;
    }

    let taskText = newTodo.value;
    let task = newItemTemplate.cloneNode(true);
    let taskDescription = task.querySelector('.item-todo');
    let itemCheckBox = task.querySelector('.item-checkbox');
    let itemCheck = task.querySelector('.item-check');
    let editInput = task.querySelector('.edit');

    let date = Date.now();

    taskDescription.textContent = taskText;
    itemCheckBox.id += '_' + date;
    itemCheck.htmlFor += '_' + date;

    taskDescription.addEventListener('dblclick', e => {
        e.target.closest('li').classList.add('edited');
        editInput.value = taskDescription.textContent;
        editInput.focus();
    });

    editInput.addEventListener('blur', e => {
        if (editInput.value === '') {
            editInput.closest('li').remove();
            toggleContent();
            itemsChangeLeft();
        } else {
            taskDescription.textContent = editInput.value;
        }
        e.target.closest("li").classList.remove("edited");
    });

    editInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            editInput.blur();
        }
    })

    itemCheckBox.addEventListener('change', e => {
        e.target.closest('li').classList.toggle('completed');
        itemsChangeLeft();
    })

    list.append(task);
    
    toggleContent();
    itemsChangeLeft();

    newTodo.value = '';
};

let filteredFunction = () => {
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

    let allCheckBoxesInItemsList = list.querySelectorAll('.item-checkbox');

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
    itemsChangeLeft();
    toggleContent();
})

// setInterval(() => {
//     filteredFunction();
// }, 100);

window.addEventListener('keydown', e => {
    if (e.key === 'q') {
        console.log(filter, items);
    }
});