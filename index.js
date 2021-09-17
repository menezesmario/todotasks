'use strict';

// let getData = [
//     {'task': 'Imersão 42', 'status': '', 'deadline': '20/9'},
//     {'task': 'Inglês', 'status': 'checked', 'deadline': '22/9'},
//     {'task': 'Corrida', 'status': '', 'deadline': ''}
// ]

const getData = () => JSON.parse(localStorage.getItem('taskList')) ?? [];
const setData = (data) => localStorage.setItem('taskList', JSON.stringify(data)) 

const createTask = (newTask, deadline, status) => {
    let task = document.createElement('li');
    task.classList.add('taskItem');
    task.innerHTML = `
        <div class="taskSection">
            <div class="cardTask">
                <div class="taskHeader">
                    <span id="nameTask">${newTask}</span>                            
                    <span id="deadline">${deadline}</span>
                </div>
                <div class="taskInfo">
                    <span id="creation"></span>
                    <span id="status">Status: <input type="checkbox" ${status}></span>
                </div>
            </div>
            <div class="btnSection">
                <div id="btnEdit" onclick="updateItem()" class="btnTask update">
                    <span class="material-icons-outlined" style="color: var(--second-color)">
                    edit
                    </span>
                </div>
                <div id="btnRemove" onclick="removeItem()" class="btnTask remove">
                    <span class="material-icons-outlined">
                    delete
                    </span>
                </div>
            </div>
        </div>
    `

    document.getElementById('myList').appendChild(task);
}


const clearList = () => {
    const myList = document.getElementById('myList')
    while(myList.firstChild) {
        myList.removeChild(myList.lastChild);
    }
}

const removeItem = () => {
    let list = document.getElementsByClassName("remove")
    for(let i = 0; i < list.length; i++) {
        list[i].onclick = function() {
            console.log([i])
            const data = getData()
            console.log(data[i]);
            data.splice(i, 1)
            setData(data);
            loadList();
        }        
    }
}

const filterByDeadline = () => {
    console.log('filtrar')
}

const updateItem = () => {
    let list = document.getElementsByClassName("update")
    for(let i = 0; i < list.length; i++) {
        list[i].onclick = function() {
            const data = getData();
            // location.pathname = "/taskregister.html";
            document.getElementById('inputTask').focus();
            let inputTask = document.getElementById('inputTask');
            inputTask.value = data[i].task;
            let inputDeadline = document.getElementById('deadLine');
            inputDeadline.value = data[i].deadline;
            let btnUpdate = document.getElementById('btnNewTask');
            btnUpdate.innerHTML = "Update"
            btnUpdate.onclick = function() {
                data[i].task = inputTask.value;
                data[i].deadline = inputDeadline.value;
                setData(data);
                loadList();
            };           
        }        
    }
}

const loadList = () => {
    clearList();
    const data = getData();
    data.forEach(task => createTask(task.task, task.deadline, task.status));
}


// CURRENT DATE FORMAT
let today = new Date();
let day = today.getDate();
let month = today.getMonth()+1;
let year = today.getFullYear();

if (month < 10) {
    month = '0'+month;
}
let currentDate = `${year}-${month}-${day}`

document.getElementById('deadLine').value = currentDate;

const deadline = document.getElementById('deadLine').value;


const addTask = () => {
    const task = document.getElementById('inputTask').value;
    const deadline = document.getElementById('deadLine').value;
    let currentDate = new Date();
    currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;
    const data = getData();

    if (deadline !== ""){
        
        data.push({'task': task, 'status': '', 'deadline': deadline, 'creation': currentDate})
        setData(data);
        loadList();
    } 

    document.getElementById('inputTask').value = '';
    console.log(data)
}



loadList();

