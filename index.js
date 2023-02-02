// Selectors
const addButton = document.querySelector('.todo-button');
const toDoInput = document.querySelector('.todo-input');
const toDoUi =  document.querySelector('.todo-list');
const editBtn = document.querySelector('edit-btn');
const filterOption = document.querySelector('.filter-todo');





// Event Listeners
addButton.addEventListener('click', addToDoItem);
toDoUi.addEventListener('click', deleteItem);
toDoUi.addEventListener('click', completeItem);
toDoUi.addEventListener('click', editItem);
filterOption.addEventListener('click', filterToDo)





let randomId = ''

   function getRandomId() {
    randomId = new Date().getTime().toString()


   }

   

// Functions
function addToDoItem(event) {
    // Our button is inside a form which defaults to submitting and resetting the forum, we need to stop that:
    event.preventDefault()

    if (toDoInput.value === '') {
        toDoInput.setAttribute('placeholder', 'Please enter text')
    } else {

        // Create DIV
    getRandomId()
    const div = document.createElement('div');
    div.classList.add('todo');
    div.dataset.id = `${randomId}`
    // Create LI
    const li = document.createElement('li')
    li.innerHTML = `
    <input type="checkbox"  class="checkbox" name="checkbox" data-id="${randomId}">
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

    // Save button
    // const saveButton = document.createElement('button')
    // saveButton.className = ('save-btn hideBtn')
    // saveButton.innerText = 'Save'
    // div.append(saveButton)

    // Delete button
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-btn')
    deleteButton.innerText = `Delete`
    div.append(deleteButton)

    toDoUi.append(div);

    toDoInput.value = '';

    
    }
    
   
    
   
    
    

    
   
}

// Delete Function

function deleteItem(e) {
if (e.target.classList[0] === 'delete-btn') {
    const todo = e.target.parentElement;
    todo.remove()

}
}

// Edit Function
function editItem(e) {
    if (e.target.classList[0] === 'edit-btn') {
        e.target.parentElement.querySelector('.generated-input').disabled = false;
        e.target.parentElement.querySelector('.generated-input').focus();
        e.target.classList.add('hideBtn')


        const saveButton = document.createElement('button')
        saveButton.className = ('save-btn')
        saveButton.innerText = 'Save'
        e.target.parentElement.firstChild.append(saveButton)

        document.querySelector('.save-btn').addEventListener('click', saveItem)

        function saveItem() {
            
            e.target.parentElement.querySelector('.generated-input').disabled = true;
            e.target.parentElement.querySelector('.save-btn').remove()
            e.target.parentElement.querySelector('.edit-btn').classList.remove('hideBtn')
  
        }
        
      
    
    
    }

}




// Complete Function
function completeItem(e) {
    const itemWrapper = e.target.closest(".todo");
    if(!itemWrapper) return;
    const checkedMark = itemWrapper.querySelector("[type=checkbox]");
    const input = itemWrapper.querySelector("[type=text]")
    if (checkedMark.checked) {
      input.classList.add("test");
      
    } else
      input.classList.remove("test");
      
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


// function filterToDo(e) {
//  const todos = toDoUi.childNodes;
//  todos.forEach((todo) => {
//     switch(e.target.value) {
//         case "all":
//             todo.style.display = 'flex'
//             break;
//             case "completed":
//                 if(todo.classList.contains('test')) {
//                     todo.style.display = 'flex';
//                 } else {
//                     todo.style.display = 'none';
//                 }

//     }
//  })
// }

function filterToDo(e) {
    let selectedvalue = filterOption.value
    // const checkboxDiv = e.target.closest(".todo").querySelector("[type=checkbox]")
    const todos = toDoUi.childNodes
    todos.forEach((todo) => {
        if (selectedvalue === "completed") {
            const checkedDiv = todo.querySelector("[type=checkbox]:checked");
            if (!checkedDiv) {
                todo.classList.add('removeall')
            }  else {
                todo.classList.remove('removeall')
            }
            
        } else if (selectedvalue === "not-completed") {
            const checkedDiv = todo.querySelector("[type=checkbox]:checked")
            if (checkedDiv) {
                todo.classList.add('removeall')
                
            } else {
                todo.classList.remove('removeall')
            }
        } else if (selectedvalue === 'all') {
            const checkedDiv = todo.querySelector("[type=checkbox]:checked")
            if (checkedDiv || !checkedDiv) {
                todo.classList.remove('removeall')
            }


        }

    })
    
}

