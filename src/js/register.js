const button = document.querySelector("#submit-button")
let avatar_image = document.querySelector("#avatar")
let image_input = document.querySelector("#avatar-file")
const cont = {
    value: 0 
};

let createFormVariables = () => {

    // let image_BASE64;
    let first_name = document.querySelector("#first_name").value
    let last_name = document.querySelector("#last_name").value
    let age = document.querySelector("#age").value
    let category = document.querySelector("#category")
.value
    
    // Phone number
    
    let ddd = document.querySelector("#ddd").value
    let phone_number = document.querySelector("#phone_number").value

    // End phone number

    let email = document.querySelector("#email").value

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
    validateForm(createFormVariables())
    cont.value = 0;
})

let reloadWindow = () => {
    window.location.reload()
}
//Array length validation

let verifyArrayLength = (array) => {
    if(array.length > 9){
        array.slice(0, 10)
        cardsArray = array
    }
}

// Form validations



let validateForm = (form) => {
    let agree_modal = document.querySelector("#agree-modal")
    let check = document.querySelector("#check")

    for(prop in form){
        if(!form[prop]){
            showAndCloseFillInputsModal()
            console.log(`Preencha o valor ${prop}`)
            formEmptyStyle(prop, true)
        }
        else{
            formEmptyStyle(prop, false)
        }
    }
}

let onlyNumbers = (age, ddd, phone_number) => {
    let age_listener = document.querySelector(`#${age}`)
    let ddd_listener = document.querySelector(`#${ddd}`)
    let phone_listener = document.querySelector(`#${phone_number}`)

    function isNumberKey(evt){
        let charCode = (evt.which) ? evt.which : evt.keyCode;

        if(charCode == 46 || charCode > 31 && (charCode < 48 || charCode > 57)){
            evt.preventDefault();
            return false;
        }

        return true;
    }

    age_listener.addEventListener("keypress", isNumberKey, false)
    ddd_listener.addEventListener("keypress", isNumberKey, false)
    phone_listener.addEventListener("keypress", isNumberKey, false)

}


onlyNumbers(Object.keys(createFormVariables())[2],Object.keys(createFormVariables())[4],Object.keys(createFormVariables())[5]);

let isEmail = (email) => {
    emailRegEx = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
}





//Fill all inputs modal

let showAndCloseFillInputsModal = () => {
    const fill_inputs_modal = document.querySelector("#fill-inputs-modal")
    const close_fill = document.querySelector("#close-fill")
    
    fill_inputs_modal.classList.toggle("toggle")
    

    close_fill.addEventListener("click", () => {
        fill_inputs_modal.classList.remove("toggle")
    })
}



let formEmptyStyle = (prop, boolean) => {
    let empty1 = document.querySelector(`#${prop}`)
    if(boolean === true){
        empty1.style.border = '2px solid red'
        inputsEventListener(empty1)
    }
    else{
        empty1.style.border = '1px solid #CAF0F8'
    }
}

let inputsEventListener = (empty1) => {
    empty1.addEventListener("keyup", () => {
        empty1.style.border = '1px solid #CAF0F8'
        if(empty1.value === ''){
            empty1.style.border = "2px solid red"
        }
    })
}


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

