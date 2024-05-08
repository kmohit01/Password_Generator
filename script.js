const passwordBox = document.getElementById("password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~|}{][></-=";

const capture = document.getElementById("numb");

capture.addEventListener("click", createPassword);

function createPassword() {
    let allChars = upperCase + lowerCase + numbers + symbols; 
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    password = password.split('').sort(() => 0.5 - Math.random()).join(''); 
    passwordBox.value = password;
    console.log(passwordBox.value);
}
