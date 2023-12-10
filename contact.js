

var firstNameInput;
var lastNameInput ;
var emailInput;
var telephoneInput;
var messageInput;


function validateInput(input){
    var isValid = true;

    if (input.type === 'email'){
        isValid = /\S+@\S+\.\S+/.test(input.value) && input.value.length > 2;
    }
    else if (input.type === 'tel'){
        isValid = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}$/.test(input.value);
    }
    else if (input.type === 'text'){
        isValid = !/\d/.test(input.value) && !/\s/.test(input.value) && input.value.length > 3;
        // console.log(input.value.length);
    }
    return isValid;
}

function validateAndUpdate(input){
    var isValid = validateInput(input);
    console.log(isValid);
    if(isValid){
        input.style.borderColor = 'green';
    }
    else{
        input.style.borderColor = 'red';
    }
}

document.addEventListener('DOMContentLoaded',function (){
    var firstNameInput = document.getElementById('first-name');
    console.log(firstNameInput);
    var lastNameInput = document.getElementById('last-name');
    var emailInput = document.getElementById('email');
    var telephoneInput = document.getElementById('telephone');
    var messageInput = document.getElementById('message');

    firstNameInput.addEventListener('input', function() {
        validateAndUpdate(firstNameInput);
    });
    lastNameInput.addEventListener('input', function() {
        validateAndUpdate(lastNameInput);
    });
    emailInput.addEventListener('input', function() {
        validateAndUpdate(emailInput);
    });
    telephoneInput.addEventListener('input', function() {
        validateAndUpdate(telephoneInput);
    });
    messageInput.addEventListener('input', function() {
        validateAndUpdate(messageInput);
    });
})


function displayError(fieldName, message) {
    console.log("erooor");
    var errorMessage = document.getElementById('error-message');
    var errorText = document.getElementById('error-text');
    var errorHead = document.getElementById("error-head");
    console.log(fieldName);
    console.log(errorHead);
    errorText.textContent = message;
    errorHead.textContent = fieldName;
    errorMessage.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

}


function checkFormValidity() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const message = document.getElementById('message').value;


    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || telephone.trim() === '' || message.trim() === '') {
        displayError("No all fields are filled","Please fill all the required fields.")
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError("Email","Please enter an valid email.");
        return false;
    }
    var telRegex = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}$/;
    if(!telRegex.test(telephone)){
        displayError("Telephone","Please enter an valid telephone.");
        return false
    }

    return true;
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactUsForm');
    const successMessage = document.getElementById('success-message');
    var faultMessage = document.getElementById("error-message");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const isValid = checkFormValidity();

        if (isValid) {
            successMessage.style.display = 'block';
            faultMessage.style.display = "none";
            window.scrollTo({ top: 0, behavior: 'smooth' });
            form.reset();
        }
    });
});