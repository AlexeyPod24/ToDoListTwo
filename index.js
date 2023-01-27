// Selectors
const addButton = document.querySelector('.todo-button');
const toDoInput = document.querySelector('.todo-input');
const toDoUi =  document.querySelector('.todo-list');
const editBtn = document.querySelector('edit-btn')


// Event Listeners
addButton.addEventListener('click', addToDoItem);
toDoUi.addEventListener('click', deleteItem);
toDoUi.addEventListener('click', completeItem);
toDoUi.addEventListener('click', editItem);




// Functions
function addToDoItem(event) {
    // Our button is inside a form which defaults to submitting and resetting the forum, we need to stop that:
    event.preventDefault()
    // Create DIV
    const div = document.createElement('div');
    div.classList.add('todo');
    // Create LI
    const li = document.createElement('li')
    li.innerHTML = `
    <label for="checkbox" class="completed">Completed</label>
    <input type="checkbox"  class="checkbox" name="checkbox">
    <input type="text" class="generated-input" value="${toDoInput.value}" disabled="disabled">`
    li.classList.add('todo-item')
    div.append(li)

    // // Add Local Storage
    // saveLocalStorage(toDoInput.value)

    // Edit button
    const editButton = document.createElement('button')
    editButton.classList.add('edit-btn')
    editButton.innerText = 'Edit'
    div.append(editButton)
    // Delete button
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-btn')
    deleteButton.innerText = `Delete`
    div.append(deleteButton)

    toDoUi.append(div);

    toDoInput.value = '';
   
}

// Delete Function

function deleteItem(e) {
if (e.target.classList[0] === 'delete-btn') {
    const todo = e.target.parentElement;
    todo.remove()

}
}


function editItem(e) {
    if (e.target.classList[0] === 'edit-btn') {
        document.querySelector('.generated-input').disabled = false;
    }
}


function completeItem(e) {
    const checkedMark = document.querySelector('input[type="checkbox"]:checked')
    if (checkedMark) {
        e.target.closest(".todo").querySelector(".generated-input").style.backgroundColor = 'lightgreen'
        e.target.closest(".todo").querySelector(".generated-input").style.textDecoration = 'line-through'
        e.target.closest(".todo").querySelector(".completed").style.textDecoration = 'line-through'
        e.target.closest(".todo").querySelector(".completed").style.backgroundColor = 'lightgreen'
        
    } else {
        e.target.closest(".todo").querySelector(".generated-input").style.backgroundColor = 'white'
        e.target.closest(".todo").querySelector(".generated-input").style.textDecoration = 'none'
        e.target.closest(".todo").querySelector(".completed").style.textDecoration = 'none'
        e.target.closest(".todo").querySelector(".completed").style.backgroundColor = 'lightgray'
    }
}


// function saveLocalStorage(mydiv){
//     // Check if there are todos in Local Storage
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = []
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(mydiv)
//     localStorage.setItem('todos', JSON.stringify('todos'))
// }

// Problems:

// When more than one is checked and you uncheck an input, it stays green until all are unchecked.
// You can edit input with text, but only first one. The rest do not work.
// I suspect it all has to do with e.target.closest

// Todo
// Fix bugs, save button after Edit, save to local storage.
