const item1 = document.getElementById('item1')
const item2 = document.getElementById('item2')
const item3 = document.getElementById('item3')
const item4 = document.getElementById('item4')
const item5 = document.getElementById('item5')
const dropZone1 = document.getElementById('card1')
const dropZone2 = document.getElementById('card2')
const form = document.getElementById('form')
const listTasks = document.getElementById('listTasks')
let element
let countId = 1

// item1.addEventListener("dragstart", (event) => {
//   element = event.target
// })
// item2.addEventListener("dragstart", (event) => {
//   element = event.target
// })
// item3.addEventListener("dragstart", (event) => {
//   console.log(event.target);
//   element = event.target
// })
// item4.addEventListener("dragstart", (event) => {
//   element = event.target
// })
// item5.addEventListener("dragstart", (event) => {
//   element = event.target
// })


dropZone1.addEventListener('dragover', (event) => {
  event.preventDefault()
})
dropZone2.addEventListener('dragover', (event) => {
  event.preventDefault()
})

dropZone1.addEventListener('drop', (event) => {
  dropZone1.prepend(element)
})
dropZone2.addEventListener('drop', (event) => {
  dropZone2.prepend(element)
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  countId +
  addTask(e.target[0].value)
})

const addTask = (task) => {
  listTasks.innerHTML += `
  <div id='${countId}' class='cardTask' draggable="true" >
  <p>Task N° ${countId++}</p>
  <p>${task}</p>
  <button>Done</button>
  </div>
    `
}

document.addEventListener('dragstart',(e) => {
// console.log(e.target);
element = e.target
})