const button = document.querySelector("#submit-button")
let avatar_image = document.querySelector("#avatar")
let image_input = document.querySelector("#avatar-file")



let createFormVariables = () => {

    // let image_BASE64;
    let first_name = document.querySelector("#first_name").value
    let last_name = document.querySelector("#last_name").value
    let age = document.querySelector("#age").value
    let category = document.querySelector("#category")
.value
    
    // Phone number
    
    let ddd = document.querySelector("#ddd").value
    let phone_number = document.querySelector("#phone-number").value

    // End phone number

    let email = document.querySelector("#email-input").value

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

        id: id++,
        // avatar: image_BASE64,
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

const cardsArray = JSON.parse(localStorage.getItem('rivals') || '[]')

button.addEventListener("click", function(){
    addToArray(cardsArray)
    addToLocalStorage(cardsArray)
    console.log(cardsArray)

})



// Avatar image


avatar_image.addEventListener("click", () => {
    image_input.click()
})

//Add maximum image size

let maximumImageSize = () => {
       if(typeof(image_input.files) != undefined){
        let size = parseFloat(image_input.files[0].size / 1024).toFixed(2)
        if(size)
        alert(size + 'kb')
    }
}

let imagePreview = () => {
    image_input.addEventListener("change", (event) => {
        let reader = new FileReader();

        reader.onload = () => {
            maximumImageSize()
            avatar_image.src = reader.result
            image_BASE64 = reader.result
        }

        reader.readAsDataURL(image_input.files[0])
    }) 

}

imagePreview()


//Save in localStorage

let addToLocalStorage = (array) => {
    // Check if is null
    localStorage.setItem("rivals", JSON.stringify(array.slice(0, 10)))
}











