console.log("Hello from js.")
let counter = document.getElementById('count')
let step = 0
let total = 0
counter.textContent = step
const addBtn = document.getElementById('add')
const saveBtn = document.getElementById('save')
const prevSaves = document.getElementById('prev-saves')
const totalElt = document.getElementById('total-count')
const totalBtn = document.getElementById('total')
addBtn.addEventListener('click', () => {
    step += 1
    counter.textContent = step
})
function saveCount(){
    console.log(counter.textContent)
    total += parseInt(counter.textContent)
    prevSaves.textContent += counter.textContent + ' - '
    counter.textContent = 0
    step = 0
    return total
}
function getTotal(){
    console.log(total)
    totalElt.textContent = '( ' + total + ' )'
}
saveBtn.addEventListener('click', () => {
    saveCount()
})
totalBtn.addEventListener('click', () => {
    getTotal()
})