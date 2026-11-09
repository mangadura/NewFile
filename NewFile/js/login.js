const form = document.querySelector(".login_form")
 
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const form_data = new FormData(form)
    
    const email = form_data.get("email")
    const password = form_data.get("password")

    if (email == "mateuscidade@yahoo.com"&& password=="admin") {
        alert("FOI")
    }

})
