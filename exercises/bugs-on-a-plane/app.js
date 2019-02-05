var airlineForm = document.airlineForm;
//var submit = document.getElementByID('submit');
//var query = document.querySelector;

airlineairlineForm.addEventListener("submit", function(e){//airlineFormAlert()
    e.preventDefault()
    var firstName = airlineForm.firstName.value;
    console.log(firstName)
    var lastName = airlineForm.lastName.value;
    console.log(lastName)
    var age = airlineForm.age.value;
    console.log(age)
    var gender = airlineForm.gender.value;
    console.log(gender)
    var location = airlineForm.travel-location.value;
    var diet = [];
    if (airlineForm.vegan.checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (airlineForm.gluten.checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (airlineForm.paleo.checked) {
        diet.push(document.getElementById('paleo').value);
    }
    airlineForm.firstName.value = ''
    airlineForm.lastName.value = ''
    airlineForm.age.value = ''
    airlineForm.gender.value = ''
    airlineForm.location.value = ''
    airlineForm.diet.value = ''
    

    alert("First Name: " + firstName + 
    "\nLast Name: " + lastName + "\nAge: " + age + 
    "\nGender: " + gender + "\nTravel Location: " + 
    location + "\nDiet: " + diet + 
    "\nAwesome, now if you die, it won't be an accident..");
})

