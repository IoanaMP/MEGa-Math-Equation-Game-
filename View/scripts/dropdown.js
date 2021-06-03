const toggleButton = document.getElementsByClassName('hint')[0];
const navbarLinks = document.getElementsByClassName('help')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

const dropButton = document.getElementsByClassName("dropdown-content");

for (var i = 0; i < dropButton.length; i++) {
    dropButton[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdown = this.nextElementSibling;
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    });
}

// function hintFunction() {
//     document.getElementsByClassName("dropdown-clk").classList.toggle("show");
// }

// window.onclick = function(event) {
//     if(!event)
// }