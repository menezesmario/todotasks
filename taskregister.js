'use strict';

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
                    <span id="creation">Criado em</span>
                    <span id="status">Status: <input type="checkbox" ${status}></span>
                </div>
            </div>
            <div class="btnSection">
                <div id="edit" class="btnTask">
                    Editar
                </div>
                <div id="remove" class="btnTask remove">
                    Excluir
                </div>
            </div>
        </div>
    `

    document.getElementById('myList').appendChild(task);
}

// DATE FORMAT
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
