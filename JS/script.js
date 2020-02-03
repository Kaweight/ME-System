var elem = document.querySelector('.quotes-wrapper');
var flkty = new Flickity(elem, {
    cellAlign: 'center',
    contain: true,
    autoPlay: true
});


$(function () {
    var stt_is_shown = false;
    $(window).scroll(function () {
        var win_height = 300;
        var scroll_top = $(document).scrollTop();
        if (scroll_top > win_height && !stt_is_shown) {
            stt_is_shown = true;
            $("#button").fadeIn();
        } else if (scroll_top < win_height && stt_is_shown) {
            stt_is_shown = false;
            $("#button").fadeOut();
        }
    });
    $("#button").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
});