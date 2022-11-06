const emailForm = document.querySelector(".email-form");
emailForm.addEventListener("submit", handleEmailSubmit);

function handleEmailSubmit(event) {
    event.preventDefault();

    const inputValue = event.target.querySelector("input").value;

    const emailIsValid = validateEmail(inputValue);

    if (!emailIsValid) emailForm.classList.add("error");
    else emailForm.classList.remove("error");
}

function validateEmail(email) {
    const atSplit = email.split("@");
    if (atSplit.length !== 2) return false;

    const dotSplit = email.split(".");
    if (dotSplit.length < 2) return false;

    let isValid = true;

    atSplit.forEach(element => {
        if (!element || [...element][0] === ".") isValid = false;
    });

    dotSplit.forEach(element => {
        if (!element) isValid = false;
    });

    return isValid;
}