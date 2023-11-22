import "./styles/style.css";

let list = document.querySelector('.items-list');
let items = list.children;

let content = document.querySelector('.content');
let footer = document.querySelector('.footer');
let itemsLeft = footer.querySelector(".items-left");
let newTodo = document.querySelector('.new-todo');
let title = document.querySelector('.title');

let toggleAllButton = content.querySelector('.toggle-all');

let newItemTemplate = document.getElementById('task-template').content.querySelector('li');

let toggleAllValid = false;

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
    itemsLeft.textContent =
      items.length === 1
        ? `${items.length} item left`
        : `${items.length} items left`;
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
    })

    list.append(task);
    
    toggleContent();
    itemsChangeLeft();

    newTodo.value = '';
};

newTodo.addEventListener('blur', newItemCreate);

newTodo.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        newTodo.blur();
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
});

window.addEventListener('keydown', e => {
    if (e.key === 'q') {
        console.log(items);
    }
})

// 
let i = 0;
title.addEventListener('click', () => {
    if (i === 20) {
        alert('Мои поздравления вы потратили 20 кликов в пустую, как и я свое время на написание этой части шедевра! Счетчик будет скинут, поэтому можете повторить свои действия.');
        i = 0;
    } else {
        i++;
    }
});
// 