//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

const submit = document.querySelector("#submit-btn");
const firstName = document.querySelector("#first-name-input");
const lastName = document.querySelector("#last-name-input");
const emailIn = document.querySelector("#email-input");
const passIn = document.querySelector("#password-input");

firstName.onkeyup = () => {
  firstName.classList.remove("is-valid");
  firstName.classList.remove("is-invalid");
};

lastName.onkeyup = () => {
  lastName.classList.remove("is-valid");
  lastName.classList.remove("is-invalid");
};

emailIn.onkeyup = () => {
  emailIn.classList.remove("is-valid");
  emailIn.classList.remove("is-invalid");
};

passIn.onkeyup = () => {
  passIn.classList.remove("is-valid");
  passIn.classList.remove("is-invalid");
};

submit.onclick = () => {
  if (firstName.value === "") {
    firstName.classList.add("is-invalid");
    firstName.classList.remove("is-valid");
  } else {
    firstName.classList.add("is-valid");
    firstName.classList.remove("is-invalid");
  }

  if (lastName.value === "") {
    lastName.classList.add("is-invalid");
    lastName.classList.remove("is-valid");
  } else {
    lastName.classList.add("is-valid");
    lastName.classList.remove("is-invalid");
  }

  if (validateEmail(emailIn.value)) {
    emailIn.classList.add("is-valid");
    emailIn.classList.remove("is-invalid");
  } else {
    emailIn.classList.add("is-invalid");
    emailIn.classList.remove("is-valid");
  }

  if (passIn.value === "") {
    passIn.classList.add("is-invalid");
    passIn.classList.remove("is-valid");
  } else {
    passIn.classList.add("is-valid");
    passIn.classList.remove("is-invalid");
  }

  if (
    firstName.classList.contains("is-valid") &&
    lastName.classList.contains("is-valid") &&
    emailIn.classList.contains("is-valid") &&
    passIn.classList.contains("is-valid")
  ) {
    alert("Registered successfully");
  }
};
