
//Selectors
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');

// const completedNumbers = document.getElementById('completed-numbers');
// let tasksCompleted = completedNumbers.innerText;

//Event Listeners
addButton.addEventListener("click",addTodo); // in event listener we are using addTodo as a reference to the funtion to execute..
// deleting list item
// click anyware in the todo list and chick if click is delete or checked
todoList.addEventListener('click', deleteCheck);


//Functions
function addTodo(event){
    event.preventDefault();
    // console.log('odo');
    
    // create div
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');

    // create LI
    const newlist = document.createElement('li');
    newlist.innerText = todoInput.value;
    newlist.classList.add('todo-item');
    // console.log(newlist.innerText);
    tododiv.appendChild(newlist);


    // checked button
    const completed = document.createElement('button');
    completed.innerHTML = '<i class="fa fa-check"></i>';
    completed.classList.add('complete-btn');
    tododiv.appendChild(completed);


    // delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-btn');
    tododiv.appendChild(deleteButton);


    // append div to ul
    todoList.appendChild(tododiv);
    

    // clear the input every time after appending
    // clear todo input value
    todoInput.value = "";

}


function deleteCheck(event){
    
    const item = event.target; // event.taget to get the target where we clicked..

    if(item.classList[0] === 'delete-btn')  // [0] is to check is the 0th index class is delete-btn
    {
        const todo = item.parentElement;
        todo.remove();
        
    }

    if(item.classList[0] === 'complete-btn')
    {
        const completeBtn = item;
        completeBtn.style.visibility = "hidden";
        // tasksCompleted ++;
        // completedNumbers.innerText  = tasksCompleted;
    }
    
}





// when not using form
// function addTodo(){
    // console.log('odo');
    // alert('odo');
// }

// event.preventDefault();
// It sounds like you’re experiencing an issue where your page is being reloaded every time you click a button. This can happen if you’re using a form element and not preventing the default behavior of the submit button.
// To prevent the page from reloading when you click a button, you can add event.preventDefault() to your event listener function. Here’s an example: