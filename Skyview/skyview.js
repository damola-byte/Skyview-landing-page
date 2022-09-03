//SKYVIEW JAVASCRIPT

const hamburgerIcon = document.getElementById("hamburger-icon");

const navMenu = document.getElementById("Nav-menu");

// SKYVIEW MENU BAR

hamburgerIcon.addEventListener("click", () => {
    navMenu.classList.toggle("toggle");

    if (
        hamburgerIcon.innerHTML !== `<i class="fa fa-times" aria-hidden="true"></i>`
    ) {
        hamburgerIcon.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
    } else {
        hamburgerIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
});