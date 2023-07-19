const names = ['name', 'lastName', 'email', 'phoneNumber', 'password', 'confirmPassword'];

nameDok = document.getElementById(names[0]);
nameError = nameDok.nextElementSibling;

lastName = document.getElementById(names[1]);
lastNameError = lastName.nextElementSibling;

email = document.getElementById(names[2]);
emailError = email.nextElementSibling;

phoneNumber = document.getElementById(names[3]);
phoneNumberError = phoneNumber.nextElementSibling;

password = document.getElementById(names[4]);
passwordError = password.nextElementSibling;

confirmPassword = document.getElementById(names[5]);
confirmPasswordError = confirmPassword.nextElementSibling;

password.addEventListener('input',validatePassword);
confirmPassword.addEventListener('input',validatePassword);


const regexPassword = /^[a-zA-Z0-9_\-]+$/;

function validatePassword() {
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    const thisField = this;


    if (thisField === password) {
        if (!regexPassword.test(passwordValue)) {
            passwordError.style.opacity = 1;
            passwordError.textContent = 'Invalid input.';
        } else if (passwordValue !== confirmPasswordValue) {
            confirmPasswordError.style.opacity = 1;
            confirmPasswordError.textContent = 'Passwords do not match.';
        } else {
            passwordError.style.opacity = 0;
            passwordError.textContent = 'a';
            confirmPasswordError.style.opacity = 0;
            validationMessage.textContent = 'a';
        }
    } else if (thisField === confirmPassword) {
        if (passwordValue !== confirmPasswordValue) {
            confirmPasswordError.style.opacity = 1;
            confirmPasswordError.textContent = 'Passwords do not match.';
          } else if (!regexPassword.test(confirmPasswordValue)) {
            passwordError.style.opacity = 1;
            passwordError.textContent = 'Invalid input.';
          } else {
            confirmPasswordError.style.opacity = 0;
            validationMessage.textContent = 'a';
            passwordError.style.opacity = 0;
            passwordError.textContent = 'a';
          }
    }
    
}
