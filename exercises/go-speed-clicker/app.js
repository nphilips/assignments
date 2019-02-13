var display = document.getElementById('count-display')
var count = 0


display.textContent = count

window.addEventListener('click', function(){
    count++
    display.textContent=count
    // var newCount = count
    localStorage.setItem('Click Count', count)
})

setTimeout
// localStorage.clear()