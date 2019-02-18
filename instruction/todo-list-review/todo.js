// GET, POST, PUT, DELETE  - Todo Project
    // DOM Manipulation
const todoListContainer = document.getElementById('todolist-container') 
const todoForm = document["todo-form"]


function getTodos(){
    axios.get("https://api.vschool.io/natej/todo").then(response => {
        const todos = response.data
        listToDOM(todos)
    }).catch(error => console.log(error))
}


function listToDOM(todosArr){
    for(let i = 0; i < todosArr.length; i++){
///////// First, Create needed Elements
        const todoContainer = document.createElement('div')
        const todoTitle = document.createElement('h1');
        const checkbox = document.createElement('input')
        const delBtn = document.createElement('button')


///////// Second, Edit the element (text, styles/classes, event listeners)
        todoContainer.classList.add("todo-container")
        todoContainer["data-todoID"] = todosArr[i]._id
        todoTitle.textContent = todosArr[i].title
        checkbox.type = "checkbox"
        checkbox.checked = todosArr[i].completed
        delBtn.textContent = "Delete"
       

        // Checkbox PUT request for updating UI and DB
        checkbox.addEventListener("change", function(e){
            const ID = e.target.parentNode["data-todoID"]
            const updates = {
                completed: e.target.checked
            }
            // put request to mark it true/false completed
            axios.put(`https://api.vschool.io/natej/todo/${ID}`, updates).then(response => {
                todoListContainer.innerHTML = ""
                getTodos()
            })
        })

        // Delete Button DELETE request
        delBtn.addEventListener("click", function(e){
            const ID = e.target.parentNode["data-todoID"]
            axios.delete(`https://api.vschool.io/natej/todo/${ID}`).then(response => {
                e.target.parentNode.remove()
            })
        })

        // Line through on the title
        if(checkbox.checked){
            todoTitle.style.textDecoration = "line-through"
        }

///////// Third, put the elements on the DOM
        todoContainer.appendChild(todoTitle)
        todoContainer.appendChild(checkbox)
        todoContainer.appendChild(delBtn)
        todoListContainer.appendChild(todoContainer)
    }
}


// ADD TODO FORM (POST)
todoForm.addEventListener("submit", function(event){
    event.preventDefault()
  
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value
    }

    todoForm.title.value = ""
    todoForm.description.value = ""

    axios.post("https://api.vschool.io/natej/todo", newTodo).then(response => {
        todoListContainer.innerHTML = ""
        getTodos()
    })
})


getTodos()