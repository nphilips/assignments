// DOM - (selecting and creating/appending HTML elements)

var todoForm = document.todoForm
var todoContainer = document.getElementById('todo-list')

todoForm.addEventListener('submit', function(e){
    e.preventDefault()
    todoContainer.innerHTML = ''    //clear out current container
    var title = todoForm.title.value
    todoForm.title.value = ''
    var p = document.createElement('p')
    p.textContent = title
    todoContainer.appendChild(p)
})