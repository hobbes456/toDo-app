import "./styles/style.css";

let list = document.querySelector('.items-list');
let items = list.children;

let content = document.querySelector('.content');
let footer = document.querySelector('.footer');
let itemsLeft = footer.querySelector(".items-left");
let newTodo = document.querySelector('.new-todo');

let newItemTemplate = document.getElementById('task-template').content.querySelector('li');

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
}

let newItemCreate = () => {
    if (newTodo.value === '') return;

    let taskText = newTodo.value;
    let task = newItemTemplate.cloneNode(true);
    let taskDescription = task.querySelector('.item-todo');

    let itemCheckBox = task.querySelector('.item-checkbox');
    let itemCheck = task.querySelector('.item-check');

    let date = Date.now();

    taskDescription.textContent = taskText;
    itemCheckBox.id += '_' + date;
    itemCheck.htmlFor += '_' + date;

    list.append(task);
    
    toggleContent();
    itemsChangeLeft();

    newTodo.value = '';
};

newTodo.addEventListener('blur', newItemCreate);
newTodo.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        newItemCreate();
    }
});

list.addEventListener('click', e => {
    if (e.target.classList[0] === 'item-destroy') {
        e.target.closest('li').remove();
        toggleContent();
        itemsChangeLeft();
    }
})