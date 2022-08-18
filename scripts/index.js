// // console.log("This is Quyana's To-Do List, purchases.")
// let input = document.querySelector('#task-input')
// let pendingTasks = [];
// let completedTasks = [];
// // const addTask = document.getElementById("task-input")

// const submitTaskButton = document.getElementById('submit-button') 
// submitTaskButton.onclick = function (event) {
//     console.log(event);
//     console.log("TASK ADDED")
// };

// function addPendingTask(pendingTasks) {
//     const taskInput = document.getElementById('task-input').value;
//     pendingTasks.push(taskInput)
//     const pendingTasksContainer = document.getElementById("pending-tasks");
    
//     let allPendingInnerHTML='';

//     for(let pendingTask of pendingTasks) {
//         let string = `<p>${pendingTask}</p>`
//         allPendingInnerHTML = allPendingInnerHTML + string;
//     }
// };

const input = document.getElementById('task-input');
const pendingTasks = document.getElementById('pending-tasks');
const form = document.getElementById('form');
const addTaskButton = document.getElementById('submit-button');
const field = document.getElementById('field');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputString= input.value;

    if (inputString) {
        pendingTasks.innerHTML += `<p>${inputString}</p>`;
        form.reset();
    }
});

addTaskButton.addEventListener('click', () => {
    field.remove();

});
