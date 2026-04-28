let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // scroll ke bawah
        navbar.classList.add("navbar-hide");
    } else {
        // scroll ke atas
        navbar.classList.remove("navbar-hide");
    }

    lastScroll = currentScroll;
});