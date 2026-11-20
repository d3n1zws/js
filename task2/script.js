
let form = document.querySelector("#form");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submitPassword = document.querySelector("#submit-password");

function showError(input, message) {
    let parent = input.parentElement;

    input.className = "error";
    parent.querySelector("small").textContent = message;
    parent.querySelector("span").textContent = "❗";
}

function showSuccess(input) {
    let parent = input.parentElement;

    input.className = "success";
    parent.querySelector("small").textContent = "";
    parent.querySelector("span").textContent = "✔";
}

function checkName() {
    if (name.value.trim() === "") {
        showError(name, "Username cannot be blank");
        return false;
    }

    showSuccess(name);
    return true;
}

function checkEmail() {
    let emailValue = email.value.trim();

    if (emailValue === "") {
        showError(email, "Email cannot be blank");
        return false;
    }

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        showError(email, "Email is not valid");
        return false;
    }

    showSuccess(email);
    return true;
}

function checkPassword() {
    if (password.value === "") {
        showError(password, "Password cannot be blank");
        return false;
    }

    else if (password.value.length < 8) {
        showError(password, "Password must be at least 8 characters");
        return false;
    }

    showSuccess(password);
    return true;
}

function checkSubmitPassword() {
    if (submitPassword.value === "") {
        showError(submitPassword, "Password cannot be blank");
        return false;
    }

    else if (submitPassword.value !== password.value) {
        showError(submitPassword, "Passwords do not match");
        return false;
    }

    showSuccess(submitPassword);
    return true;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let validName = checkName();
    let validEmail = checkEmail();
    let validPassword = checkPassword();
    let validSubmitPassword = checkSubmitPassword();

    if (
        validName &&
        validEmail &&
        validPassword &&
        validSubmitPassword
    ) {
        alert("Registration successful!");
        form.reset();

        document.querySelectorAll("input").forEach(input => {
            input.className = "";
            input.parentElement.querySelector("span").textContent = "";
        });
    }
});
