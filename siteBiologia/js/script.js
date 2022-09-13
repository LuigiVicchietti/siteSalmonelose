const navbar = document.getElementById("nav"),
    title = document.getElementById("title"),
    links = document.querySelectorAll(".navbar-links"),
    bottomAnimation = document.querySelectorAll(".bottom_animation"),
    target = document.querySelectorAll("[data-anime]");

const ativarScroll = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.9);

    target.forEach(e => {
        if (windowTop > e.offsetTop) {
            e.classList.add("animate");
        } else {
            e.classList.remove("animate");
        }
    })

    navbar.classList.toggle("active", scrollY > 0);
    title.classList.toggle("active", scrollY > 0);

    links.forEach((e) => {
        e.classList.toggle("active", scrollY > 0);
    })

    bottomAnimation.forEach((e) => {
        e.classList.toggle("active", scrollY > 0);
    })
}

window.addEventListener("scroll", _.debounce(ativarScroll, 80));

window.addEventListener("scroll", ativarScroll);