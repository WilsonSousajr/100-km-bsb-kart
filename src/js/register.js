const button = document.querySelector("#submit-button")

let createFormVariables = () => {

    let first_name = document.querySelector("#first-name").value
    let last_name = document.querySelector("#last-name").value
    let age = document.querySelector("#age").value
    let category = document.querySelector("#categories")
.value
    
    // Phone number
    
    ddd = document.querySelector("#ddd").value
    phone_number = document.querySelector("#phone-number").value

    // End phone number

    email = document.querySelector("#email-input").value

    return {
        first_name,
        last_name,
        age,
        category,
        ddd,
        phone_number,
        email,
    }
}


let formCardFactory = function(formVariables){
    return {

        first_name: formVariables.first_name,
        last_name: formVariables.last_name,
        age: formVariables.age,
        category: formVariables.category,
        ddd: formVariables.ddd,
        phone_number: formVariables.phone_number,
        email: formVariables.email,

    }
}

let addToArray = (array) => {
    array.push(formCardFactory(createFormVariables()))
}

const cards = {

    cardsArray: []

}

button.addEventListener("click", function(){
    addToArray(cards.cardsArray)
})



