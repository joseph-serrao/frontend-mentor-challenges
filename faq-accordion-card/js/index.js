$('.container').click(function () {
    $('.container').not(this).removeClass("active");
    $(this).toggleClass("active");
});