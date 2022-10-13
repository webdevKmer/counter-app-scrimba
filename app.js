console.log("Hello from js.")
let counter = document.getElementById('count')
let step = 0
counter.innerHTML = step
const btn = document.getElementById('add') 
btn.addEventListener('click', () => {
    step += 1
    counter.innerHTML = step
    console.log('click', counter.innerText)
})
console.log(counter.innerText)