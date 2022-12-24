$(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("is-active");
    $(".nav").toggleClass("is-active");
    $(".overlay").toggleClass("is-active");
    $("body").toggleClass("fixed");
});

$(".overlay").on("click", function () {
    $(".hamburger").removeClass("is-active");
    $(".nav").removeClass("is-active");
    $(".overlay").removeClass("is-active");
    $("body").removeClass("fixed");
});

const dropbtn = $(".dropbtn");
const dropbtnIcon = $(".dropbtn-icon");

dropbtn.on("click", function () {
    $(".dropdown-content").toggleClass("is-active");
    $(".dropbtn-icon-up").toggleClass("active");
    $(".dropbtn-icon-down").toggleClass("active");
});

const dropLinks = $(".drop-link");

dropLinks.on("click", function () {
    $(".hamburger").removeClass("is-active");
    $(".nav").removeClass("is-active");
    $(".overlay").removeClass("is-active");
    $("body").removeClass("fixed");
});

window.addEventListener("scroll", function () {
    wScroll = this.scrollY;

    if (wScroll >= 500) {
        $(".top-btn").addClass("active");
    } else {
        $(".top-btn").removeClass("active");
    }
});
