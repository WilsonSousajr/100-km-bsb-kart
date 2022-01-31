const button = document.querySelector("#submit-button")
let avatar_image = document.querySelector("#avatar")
let image_input = document.querySelector("#avatar-file")


let createFormVariables = () => {

    // let image_BASE64;
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

        // image_BASE64,
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

        avatar: image_BASE64,
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
    console.log(cards.cardsArray)
})



// Avatar image


avatar_image.addEventListener("click", () => {
    image_input.click()
})


let imagePreview = () => {
    image_input.addEventListener("change", (event) => {
        let reader = new FileReader();

        reader.onload = () => {
            avatar_image.src = reader.result
            image_BASE64 = reader.result
        }

        reader.readAsDataURL(image_input.files[0])
    }) 

}

imagePreview()






