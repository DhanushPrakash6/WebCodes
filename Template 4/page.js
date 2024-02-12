var toggle = document.querySelector("#log_toggle");
var sign = document.querySelector("#sign_button");
toggle.addEventListener("click", ()=>{
    if(toggle.checked) {
        sign.innerHTML = "Log In";
    }
    else {
        sign.innerHTML = "Sign Up";
    }
});
sign.addEventListener("click", ()=>{
    if(toggle.checked) {
        toggle.checked = false;
        sign.innerHTML = "Sign Up";
    }
    else {
        toggle.checked = true;
        sign.innerHTML = "Log In";
    }
});

//Contact
var name1 = document.querySelector("#user")
var email = document.querySelector("#email")
var message = document.querySelector("#body")
var button = document.querySelector("#contact")
button.addEventListener("click", ()=>{
    open("https://mail.google.com/mail/u/0/?fs=1&to=dhanushprakash194@gmail.com&su=Myself " + name1.value + "&body=" + message.value + "&tf=cm")
});