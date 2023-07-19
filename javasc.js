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