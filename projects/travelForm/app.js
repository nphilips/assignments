var travelForm = document.travelForm
var finishedForm = document.getElementById('finishedForm')

travelForm.addEventListener('submit', function(e){
    e.preventDefault()
    var firstName = travelForm.firstName.value
    var lastName = travelForm.lastName.value
    var age = travelForm.age.value
    var gender = travelForm.gender.value

    var destCheckBoxes= travelForm.destination
    var destCheckBoxValues = []
    for(var i = 0; i< destCheckBoxes.length; i++){
        if(destCheckBoxes[i].checked){
            destCheckBoxValues.push(destCheckBoxes[i].value)
        }
    }

    var dietRestBoxes= travelForm.dietaryRestrictions
    var dietRestValues = []
    for(var i = 0; i< dietRestBoxes.length; i++){
        if(dietRestBoxes[i].checked){
            dietRestValues.push(dietRestBoxes[i].value)
        }
    }

    travelForm.firstName.value = ''
    travelForm.lastName.value = ''
    travelForm.age.value = ''
    travelForm.gender.value = ''
    travelForm.destination.value = ''
    travelForm.dietaryRestrictions.value = ''

    
    alert("First Name: " + firstName + "\n" + 
    "Last Name: " + lastName + "\n" + 
    "Age: " + age + "\n" + 
    "Gender: " +gender + "\n" + 
    "Destinations: " + destCheckBoxValues + "\n" +  
    "Dietary Restrictions: " + dietRestValues)
    //finishedForm.appendChild(p)
})