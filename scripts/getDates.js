document.querySelector("#LastModified").innerHTML = "Last Modified: " + document.lastModified;
document.querySelector("#copyright-year").innerHTML = new Date().getFullYear();

const hamburgerButton = document.querySelector("#hamburger-menu");
const menuItems = document.querySelectorAll("nav a");
hamburgerButton.addEventListener("click", function() {

    if (hamburgerButton.textContent == "☰") {
        hamburgerButton.textContent = "X";
        // menuItems.forEach(m => m.style.display = "block")
        menuItems.forEach(m => m.classList.add("show-menu"))
    } else {
        hamburgerButton.textContent = "☰";
        menuItems.forEach(m => m.classList.remove("show-menu"))
        // menuItems.forEach(m => m.style.display = "none")
    }
    
})
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});


// The hamburger button should only show in the mobile view.
// Clicking the hamburger button toggles the main menu items from viewable to not viewable.
// Use a symbol, such as an 'X' to close the hamburger menu.


