$(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("is-active");
    $(".nav").toggleClass("is-active");
    $(".overlay").toggleClass("is-active");
});

$(".overlay").on("click", function () {
    $(".hamburger").removeClass("is-active");
    $(".nav").removeClass("is-active");
    $(".overlay").removeClass("is-active");
});
