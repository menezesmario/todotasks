'use strict';


const createTask = (newTask, status='') => {
    let task = document.createElement('li');
    task.classList.add('taskItem');
    task.innerHTML = `
        <div class="taskSection">
            <div class="cardTask">
                <div class="taskHeader">
                    <span id="nameTask">${newTask}</span>                            
                    <span id="deadline">20 sep</span>
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





{/* <li id="taskItem">
    <div class="taskSection">
        <div class="cardTask">
            <div class="taskHeader">
                <span id="nameTask">Tarefa</span>                            
                <span id="deadline">20 sep</span>
            </div>
            <div class="taskInfo">
                <span id="creation">Criado em</span>
                <span id="status">Status:</span>
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
</li> */}