$('.container').click(function () {
    $('.container').not(this).removeClass("active");
    $(this).toggleClass("active");
});

$(document).ready(function () {
    if (window.innerWidth <= 720) {
        $('.desktop').addClass("hidden");
        $('.mobile').removeClass("hidden");
    }
});

$(window).resize(function () {
    if (window.innerWidth <= 720) {
        $('.desktop').addClass("hidden");
        $('.mobile').removeClass("hidden");
    } else {
        $('.mobile').addClass("hidden");
        $('.desktop').removeClass("hidden");
    }
});