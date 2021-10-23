// Add new element

const form = document.querySelector('form')
const todo = document.querySelector('#todo')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTaskInput = form.elements.new_task

    if(!newTaskInput.value) return;

   addNewTaskElement(newTaskInput.value)
    newTaskInput.value = '';

});

// Create new element

const addNewTaskElement = function(taskString) {
    const newTaskRow = document.createElement('div');
    const newItem = document.createElement('div');
    const newPlaceholder1 = document.createElement('div');    
    const newPlaceholder2 = document.createElement('div');
    const newPlaceholder3 = document.createElement('div');

    newTaskRow.className = 'row';    
    newItem.innerText = `${taskString}`;
    newItem.className = 'item';
    newItem.draggable = 'true';
    newPlaceholder1.className = 'placeholder';
    newPlaceholder2.className = 'placeholder';
    newPlaceholder3.className = 'placeholder';


    todo.appendChild(newTaskRow);
    newTaskRow.appendChild(newPlaceholder1);
    newPlaceholder1.appendChild(newItem);
    newTaskRow.appendChild(newPlaceholder2);
    newTaskRow.appendChild(newPlaceholder3);

    newItem.addEventListener('dragstart', dragstart)
    newItem.addEventListener('dragend', dragend)

    newPlaceholder1.addEventListener('dragover', dragover)
    newPlaceholder1.addEventListener('dragenter', dragenter)
    newPlaceholder1.addEventListener('dragleave', dragleave)
    newPlaceholder1.addEventListener('drop',  (e) => dragdrop(e, newItem))

    newPlaceholder2.addEventListener('dragover', dragover)
    newPlaceholder2.addEventListener('dragenter', dragenter)
    newPlaceholder2.addEventListener('dragleave', dragleave)
    newPlaceholder2.addEventListener('drop',  (e) => dragdrop(e, newItem))

    newPlaceholder3.addEventListener('dragover', dragover)
    newPlaceholder3.addEventListener('dragenter', dragenter)
    newPlaceholder3.addEventListener('dragleave', dragleave)
    newPlaceholder3.addEventListener('drop',  (e) => dragdrop(e, newItem))

    return newTaskRow;

};

// Drag & Drop

const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)


for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', (e) => dragdrop(e, item))
}

function dragstart(event) {
    console.log("dragstart")
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide'), 0
    })
}

function dragend(event) {    
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')

}

function dragdrop(event, item) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}


