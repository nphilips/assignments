var input = "bookkeeper larry"; // Output: "bokepr lay"

function duplicates(input){
    var newArr = [];
    for (var i=0; i<input.length; i++){
        if(newArr.indexOf(input[i]) == -1){
            newArr.push(input[i])
        }
    }
    return newArr.join('')
}
console.log(duplicates(input))


