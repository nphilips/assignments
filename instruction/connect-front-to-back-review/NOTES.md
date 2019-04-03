MISC Notes
---------------
if else statements check to see if a condition is true, then run some code

ex: if(conditionIsTrue){
    runSomeCode()
} 

ex: if(true){
    thisWillRun()
}

We use conditins in for loops, example

ex: for(let i = 0; someCondition; i++){
    run this code
}

ex: for(let i = 0; i < str.length; i++){
    run this code
}


Callback functions
function that is passed in as an argument

Anonymous functions are typically passed in as callbacks (callback functions)

ex: arr.map((item) => item + 1)
The above map method takes a callback function

ex: .get((req, res) => {
    return 'hello'
})

Note: (req, res) => {} is your callback function

Objects contain keys and values
ex: const newObj = {
    keyOne: valueOne,
    name: 'bart'
}

parameters are placeholders for arguments when creating a function

ex: function exFunc(param1, param2){
    return param1 + param2
}


arguments are passed into funcitons when they are called

ex: exFunc(arg1, arg2)


Setting Up
---------------------------------------------------------------------
We created a directory (folder) for our full-stack practice project

create a server file with a folder for the models and another for the routes

Server Notes
-------------------
npm init -y --> Creates a package.json file... Note: seperate from the client package.json folder

install express and mongoose
Node Command: npm i express mongoose

We need to connect to the database
We need to listen to teh port through which the server will receive calls

We need to handle the routes 
Note: the use of app.use() method in reference to the express routes in the routes folder