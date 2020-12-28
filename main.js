const enterTodo = document.querySelector('#enterTodo'); //The input for enetering a todo
const addTodo = document.querySelector('#addTodo'); //button for adding a todo
const errorMsg = document.querySelector('#error'); // error message if no item is added
let completedTodoItems = document.querySelector('#completedTodoItems'); //
let todoItemContainer = document.querySelector('#todoItemContainer');
const refresh = document.querySelector('#refresh');
 //Button for adding a todo
addTodo.addEventListener('click', (e) => {
    if (enterTodo.value === "") {
        errorMsg.classList.add('error');
        errorMsg.innerHTML = "Please Enter a Todo!!";
        // set time out for the error message
        setTimeout(() => errorMsg.remove(), 3000);
    } 
    else {
        let todo = document.createElement('div');
        todo.classList.add('todoItem')
        todo.textContent = enterTodo.value;
        todoItemContainer.appendChild(todo);

         // Add cancelButton
         const cancelButton = document.createElement('button');
         cancelButton.classList.add('cancelButton')
         cancelButton.textContent = "X";
         todo.appendChild(cancelButton);

         // For closing a todo

         cancelButton.addEventListener('click',(e) => {
            todoItemContainer.removeChild(todo);
         })
         refresh.addEventListener('click', (e) => { 
             if (todoItemContainer === "" && completedTodoItems === "") {
                 todoItemContainer = "";
                 completedTodoItems = "";
             }
             else{
                todoItemContainer.removeChild(todo);
                completedTodoItems.removeChild(todo)
                refresh.classList.add('refreshButton');
             }
        });
        //  
         todo.addEventListener('click',(e) => {
            todoItemContainer.removeChild(todo);
            completedTodoItems.appendChild(todo);
            cancelButton.style.display ="none";
            todo.classList.remove('todoItem');
            todo.classList.add('completed');
            todo.addEventListener('click',(e) =>{
                completedTodoItems.removeChild(todo);
                todoItemContainer.appendChild(todo);
                todo.classList.remove('completed');
                todo.classList.add('todoItem')
                cancelButton.setAttribute('style', 'display:flex;justify-content:center;align-items:center');
            })
        })

    }
        // clear fields
        enterTodo.value = '';
});





