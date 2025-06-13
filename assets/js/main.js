var html = $('html');

$(function () {
    darkMode();
    carousel();
});

function darkMode() {
    $('.toggle-track').on('click', function () {
        if (html.hasClass('dark-mode')) {
            html.removeClass('dark-mode');
            localStorage.setItem('alto_dark', false);
        } else {
            html.addClass('dark-mode');
            localStorage.setItem('alto_dark', true);
        }
    });
}

function carousel() {
    var splide = $('.splide');
    new Splide(splide[0], {
        type: 'loop',
        speed: 800,
        drag: 'free',
        autoWidth: true,
        arrows: false,
        pagination: false,
        breakpoints: {
            769: {
                focus: "center",
                drag: !0
            }
        }
    }).mount();
}
