const navbar = document.getElementById("nav"),
    navList = document.getElementById("navbar-list"),
    title = document.getElementById("title"),
    links = document.querySelectorAll(".navbar-links"),
    bottomAnimation = document.querySelectorAll(".bottom_animation"),
    target = document.querySelectorAll("[data-anime]");

const ativarScroll = () => {

    navbar.classList.toggle("active", scrollY > 0);
    // navList.classList.toggle("white", scrollY > 0);
    title.classList.toggle("active", scrollY > 0);

    links.forEach((e) => {
        e.classList.toggle("active", scrollY > 0);
    })

    bottomAnimation.forEach((e) => {
        e.classList.toggle("active", scrollY > 0);
    })
}

const ativarAnimate = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);

    target.forEach(e => {
        if (windowTop > e.offsetTop) {
            e.classList.add("animate");
        } else {
            e.classList.remove("animate");
        }
    })
}




window.addEventListener("scroll", _.debounce(ativarScroll, 80));
window.addEventListener("scroll", _.debounce(ativarAnimate, 80));

window.addEventListener("scroll", ativarScroll);
window.addEventListener("scroll", ativarAnimate);