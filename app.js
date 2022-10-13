console.log("Hello from js.")
let counter = document.getElementById('count')
let step = 0
counter.innerHTML = step
const addBtn = document.getElementById('add')
const saveBtn = document.getElementById('save')
addBtn.addEventListener('click', () => {
    step += 1
    counter.innerHTML = step
})
function saveCount(){
    console.log(counter.innerText)
}
saveBtn.addEventListener('click', () => {
    saveCount()
})