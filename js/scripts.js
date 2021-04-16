$(document).ready(function(){
    $("body").scrollspy({
        target: ".navbar"
    });
})

$(".nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
});