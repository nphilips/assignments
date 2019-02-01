

// window.addEventListener('keypress', function(event){
//     console.log(event)
// })


// var box = document.getElementById('square')

// window.addEventListener('mouseover', function(){
//     box.style.background.color='blue'
// })

document.getElementById("square").addEventListener("mouseover", blueBox);

function blueBox(){
    this.style.backgroundColor= "blue";
}