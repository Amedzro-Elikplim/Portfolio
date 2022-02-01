//reference the mobile navbar icon and mobile menu
const barIcon = document.querySelector(".bar-icon");
const mobileMenuDropdown = document.querySelector(".dropdown-menu");
const lists = document.querySelectorAll(".menu-nav-links > li");
const body = document.querySelector(".body");


barIcon.addEventListener('click', () => {
    mobileMenuDropdown.style.display = "block";
    body.style.overflow = "hidden";
});


lists.forEach((element) => {
    element.addEventListener('click', () => {
        mobileMenuDropdown.style.display = "none";
        body.style.overflow = "visible"
    })
})
