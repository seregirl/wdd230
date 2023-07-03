const visitsDisplay = document.querySelector("#num-of-visits");

let numVisits = Number(localStorage.getItem("chamber-visits")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;

localStorage.setItem("chamber-visits", numVisits);