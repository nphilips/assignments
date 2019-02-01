var addition = document.addForm
// var firstAdd = addition.firstAdd.value
// var secAdd = addition.secAdd.value
// var sum = firstAdd + secAdd

var subtraction = document.subForm
var firstSub = subtraction.firstSubInput
var secSub = subtraction.secSubInput
var difference = firstSub - secSub

var multiplication = document.mulForm
var firstMul = multiplication.firstMulInput
var secMul = multiplication.secMulInput
var product = firstMul * secMul


addition.addEventListener("submit", function(e){
    e.preventDefault();
    addition.innerHTML = "";
    var firstAdd = addition.firstAddInput.value;
    var secAdd = addition.secAddInput.value;
    var sum = document.createElement("h1");
    sum.textContent = firstAdd + secAdd;
    addition.appendChild(sum);
    console.log(sum)
})