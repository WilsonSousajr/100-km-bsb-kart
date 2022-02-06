let forms_objectsJSON = localStorage.getItem('rivals')

let forms_objects = JSON.parse(forms_objectsJSON)
let form_card_group = document.querySelector("#form-card-group")



let makeCards = (forms) => {
    form_card_group.innerHTML += `
    
        <div id="form-card" class="form-card">

            <h3 class="categorie">${forms.category}</h3>
            <div class="name-age-avatar">
                <h3>${forms.first_name} ${forms.last_name}</h3>
                <img src="./src/imgs/user.png"/>
                <h3>${forms.age}</h3>
            </div>
            <div class="email-number">
                <h3 class="email">${forms.email}</h3>
                <h3 class="phone-number">(${forms.ddd}) ${forms.phone_number}</h3>
            </div>
        </div>
    `
}
