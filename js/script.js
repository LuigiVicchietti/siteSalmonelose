const navbar = document.getElementById("nav"),
    navList = document.getElementById("navbar-list"),
    navItens = document.querySelectorAll(".navbar-itens"),
    menuMobile = document.getElementById("menuMobile"),
    title = document.getElementById("title"),
    links = document.querySelectorAll(".navbar-links"),
    bottomAnimation = document.querySelectorAll(".bottom_animation"),
    target = document.querySelectorAll("[data-anime]");

const ativarScroll = () => {

    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);

    target.forEach(e => {
        if (windowTop > e.offsetTop) {
            e.classList.add("animate");
        } else {
            e.classList.remove("animate");
        }
    })

    navbar.classList.toggle("active", scrollY > 0);
    title.classList.toggle("active", scrollY > 0);

    navItens.forEach(e => {
        e.classList.toggle("active", scrollY > 0);
    })

    links.forEach((e) => {
        e.classList.toggle("active", scrollY > 0);
    })

    bottomAnimation.forEach((e) => {
        e.classList.toggle("active", scrollY > 0);
    })

    if (scrollY === 0) {
        menuMobile.setAttribute("src", "./assets/img/menu-white.png")
    } else {
        menuMobile.setAttribute("src", "./assets/img/menu-blue.png")
    }
}

const abrirMenu = () => {
    navList.classList.toggle("active")
}

window.addEventListener("scroll", _.debounce(ativarScroll, 80));
menuMobile.addEventListener("click", abrirMenu);