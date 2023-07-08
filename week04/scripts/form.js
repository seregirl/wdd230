const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const matchMsg = document.querySelector("#match-message");
const submitBtn = document.querySelector("#submit-btn");

// password2.addEventListener("focusout", checkForm);
submitBtn.addEventListener("click", checkForm)

function checkForm(e) {
	if (password1.value !== password2.value) {
        e.preventDefault();
		matchMsg.textContent = "❗Passwords DO NOT MATCH!";
		matchMsg.style.visibility = "show";
		password2.style.color = "red";
		password2.style.fontSize = "0.7rem";
		password2.value = "";
		password2.focus();
	} else {
		matchMsg.style.display = "none";
		password2.style.color = "#000";
	}
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}