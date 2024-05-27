const userInput = document.getElementById('userInput')
const nameTask = document.getElementById('nameTask')
let idCounter = 0

userInput.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
    updateStats();
})

const addTask = () => {
    idCounter ++;

    let value = nameTask.value
    list.innerHTML += `
    <div class="task-container" id=${idCounter}>
        <label>
            <input type="checkbox">
            ${value}
        </label>
        <button class="closeBtn">X</button>
    </div>`
    nameTask.value = ''
}

list.addEventListener('click', (event) => {
    if(event.srcElement.nodeName === 'INPUT'){
        updateStats()
    }
    if(event.srcElement.nodeName === 'BUTTON'){
        deleteTask(event.srcElement.parentNode.id);
    }
})

const updateStats = () => {
    let element = list.querySelectorAll('div')
    let checked = list.querySelectorAll('input[type="checkbox"]:checked')
    stats.innerHTML = `
    <p>Task: ${element.length}  Done: ${checked.length}</p>
    `
}

const deleteTask = (id) => {
    let taskToDelete = document.getElementById(id)
    list.removeChild(taskToDelete)
    updateStats()
}
