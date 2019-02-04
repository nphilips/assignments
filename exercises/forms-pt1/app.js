
// var todoForm = document.todoForm
// var todoContainer = document.getElementById('todo-list')

// todoForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     todoContainer.innerHTML = ''    //clear out current container
//     var title = todoForm.title.value
//     todoForm.title.value = ''
//     var p = document.createElement('p')
//     p.textContent = title
//     todoContainer.appendChild(p)
// })
////////////////////////////


var todoForm = document.todoForm
var todoContainer = document.getElementById('todo-list')

todoForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(todoForm.favCandy)
    
    var checkBoxes= todoForm.lifeMeaning
    var checkBoxValues = []
    for(var i = 0; i< checkBoxes.length; i++){
        if(checkBoxes[i].checked){
            checkBoxValues.push(checkBoxes[i].value)
        }
    }
    console.log(checkBoxValues)
})



