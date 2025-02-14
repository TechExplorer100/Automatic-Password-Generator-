const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=<>?/{}[]";

function generatePassword() {
    let length = document.getElementById("length").value;
    let includeUppercase = document.getElementById("uppercase").checked;
    let includeLowercase = document.getElementById("lowercase").checked;
    let includeNumbers = document.getElementById("numbers").checked;
    let includeSymbols = document.getElementById("symbols").checked;

    let characters = "";
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters === "") {
        alert("Select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;
    checkStrength(password);
}

function copyPassword() {
    let passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

// Password Strength Checker
function checkStrength(password) {
    let strengthBar = document.getElementById("strengthBar");

    let strength = 0;
    if (/[A-Z]/.test(password)) strength++;  // Uppercase
    if (/[a-z]/.test(password)) strength++;  // Lowercase
    if (/\d/.test(password)) strength++;     // Numbers
    if (/[!@#$%^&*()]/.test(password)) strength++; // Symbols

    if (password.length < 6) strength = 1; // If too short, it's weak

    if (strength === 1) {
        strengthBar.className = "strength-bar weak";
    } else if (strength === 2 || strength === 3) {
        strengthBar.className = "strength-bar medium";
    } else {
        strengthBar.className = "strength-bar strong";
    }
}

// Dark Mode Toggle (Fixed)
const darkModeToggle = document.getElementById("darkModeToggle");

// Set light mode as default
document.body.classList.add("light-mode");
darkModeToggle.checked = false; 

darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
        document.body.classList.remove("light-mode"); // Enable Dark Mode
    } else {
        document.body.classList.add("light-mode"); // Enable Light Mode
    }
});