var xhr = new XMLHttpRequest()
console.log(xhr)

xhr. onreadystatechange = function(){
    console.log(xhr.readyState)
    if(xhr.readyState === 4 && xhr.status === 200){
        var jsonData = xhr.responseText
        console.log(jsonData)
        var data = JSON.parse(jsonData)
        console.log(data)
    }
}

xhr.open("GET", "http://api.vschool.io/nickp/todo/")
xhr.send()