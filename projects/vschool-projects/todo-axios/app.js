function editOption(e) {
  var updates = {
    title: "test"

  };
  axios
    .put(
      `https://api.vschool.io/nickp/todo/${e.target.parentNode.todoID}`,
      updates
    )
    .then(function(response) {
      console.log(response);
      getData();
    });
}

function checkbox(e) {
  var updates = {
    completed: e.target.checked
  };
  axios
    .put(
      `https://api.vschool.io/nickp/todo/${e.target.parentNode.todoID}`,
      updates
    )
    .then(function (response) {
      console.log(response);
      todoListContainer.innerHTML = "";
      getData();
    });
}
function deleteOption(e) {

  axios
    .delete(`https://api.vschool.io/nickp/todo/${e.target.parentNode.todoID}`)
    .then(response => {
      e.target.parentNode.remove();
    });
}

const todoListContainer = document.getElementById("todo-container");

const todoForm = document["add-todo-form"];

function getData() {
  axios
    .get("https://api.vschool.io/nickp/todo")
    .then(response => {
      const todos = response.data;
      console.log(todos);
      listTodos(todos);
    })
    .catch(err => console.log(err));
}

function listTodos(todosArr) {

  console.log(todosArr);

  for (let i = 0; i < todosArr.length; i++) {
    const todoContainer = document.createElement("div");
    const title = document.createElement("h1");
    const price = document.createElement("p");
    const description = document.createElement("p");
    const imgUrl = document.createElement("img");


    var colorArray = ["#9F84BD", "#D81E5B", "#F0544F", "#C6D8D3"]
    todoContainer.style.background = colorArray[i % 4];

    todoContainer.classList.add("todo-container");
    todoContainer.todoID = todosArr[i]._id;
    title.textContent = todosArr[i].title;
    price.textContent = todosArr[i].price;
    description.textContent = todosArr[i].description;
    if (todosArr[i].completed === true) {
      // checkCompleted === checkCompleted;
      title.style.textDecoration = "line-through";
    }
    if (todosArr[i].completed === false) {
      title.style.textDecoration = "none";
    }

    const formArray = ["Options", "edit", "delete"];

    const formOption = document.createElement("select");
    formOption.id = "formOption";
    todoContainer.appendChild(formOption);

    for (let i = 0; i < formArray.length; i++) {
      var option = document.createElement("option");
      option.value = formArray[i];
      option.text = formArray[i];
      option.name = "dropDown";

      formOption.appendChild(option);
    }

    formOption.addEventListener("change", function (e) {
      e.preventDefault();
      if (e.target.value === "delete") {
        deleteOption(e);
      } else if (e.target.value === "edit") {
        editOption(e);
      }
    });

    const checkCompleted = document.createElement("input");
    checkCompleted.setAttribute("type", "checkbox");
    todoContainer.appendChild(checkCompleted);
    if (todosArr[i].completed) {
      checkCompleted.checked = true
    }

    checkCompleted.addEventListener("change", function (e) {
      checkbox(e);
    })
    if (checkCompleted.checked) {
      title.style.textDecoration = "line-through";
    }
      imgUrl.setAttribute("src", todosArr[i].imgUrl);
      imgUrl.style.height = "100px";
      imgUrl.style.width = "100px";

      // Append it to the DOM
      todoContainer.appendChild(title);
      todoContainer.appendChild(price);
      todoContainer.appendChild(description);
      todoContainer.appendChild(imgUrl);
      todoListContainer.appendChild(todoContainer);



    todoForm.addEventListener("submit", e => {
      e.preventDefault();
      const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
      };

      axios
        .post("https://api.vschool.io/nickp/todo", newTodo)
        .then(response => {
          todoListContainer.innerHTML = "";
          getData();
        })
        .catch(err => console.log(err));
    });
  }
}
getData();
