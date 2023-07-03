const hamburgerButton = document.querySelector("#hamburger-menu");
const menuItems = document.querySelectorAll("nav a");
hamburgerButton.addEventListener("click", function() {

    if (hamburgerButton.textContent == "☰") {
        hamburgerButton.textContent = "X";
        menuItems.forEach(m => m.classList.add("show-menu"))
    } else {
        hamburgerButton.textContent = "☰";
        menuItems.forEach(m => m.classList.remove("show-menu"))
    }
    
})