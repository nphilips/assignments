const todoListContainer = document.getElementById('todoList-container')
const todoForm = document['add-todo-form']

const url = "https://api.vschool.io/nickp/todo"

function getData()

axios.get("https://api.vschool.io/nickp/todo").then(response =>{
    const todos = response.data
    listTodos(todos)
}).catch(err => console.log(err))

function listTodos(todosArr){
    for(let i=0; i< todosArr; i++){
        // Create Elements
        const todoContainer = document.createElement('div')
        const title = document.createElement('h1')
        const imgUrl = document.createElement('img')
    
        // Edit the element/ Give it content
        todoContainer.classList.add('todo-container')
        title.textContent = todosArr[i].title
        imgUrl.setAttribute('src', todosArr[i].imgUrl)
        
        if(todosArr[i].completed){
            title.style.textDecoration = 'line-through'
        }
        
        // Make content appear on the DOM
        todoContainer.appendChild(title)
        todoContainer.appendChild(imgUrl)
        todoListContainer.appendChild(todoContainer)
    }
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value
    }

    todoForm.title.value = ''

    axios.post(url, newTodo).then(response => {
        todoListContainer.innerHTML = ''
        getData()
    }).catch(err => console.log(err))
})

getData()

