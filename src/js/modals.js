
/* ABOUT MODAL */

let about_modal_button = document.querySelector("#about-image")
let about_modal = document.querySelector("#about-modal")
let close_modal = document.querySelector(".close")

about_modal_button.addEventListener("click", function(){
    about_modal.classList.toggle('toggle')
})

close_modal.addEventListener("click", function(){
    about_modal.classList.toggle('toggle')
})

/* TERMS MODAL */

let terms_modal_link = document.querySelector("#terms-link")
let terms_modal = document.querySelector("#terms")
let close_terms =  document.querySelector("#close-terms")

terms_modal_link.addEventListener("click", function(){
    terms_modal.classList.toggle('toggle')
})

close_terms.addEventListener("click", function(){
    terms_modal.classList.toggle('toggle')
})


