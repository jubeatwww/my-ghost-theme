var html = $('html');

$(function () {
    darkMode();
    carousel();
    processRelatedTags();
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
    const splide = document.querySelector('.splide');
    if (!splide) {
        return;
    }
    new Splide(splide, {
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

function processRelatedTags() {
    const currentTag = document.querySelector('#current-tag-name');
    if (!currentTag) {
        return;
    }

    const relatedTags = document.querySelectorAll('.tag-item');
    const tagSet = new Set();
    relatedTags.forEach(tag => {
        if (tag.dataset.slug === currentTag.value) {
            tag.remove();
        }
        if (tagSet.has(tag.dataset.slug)) {
            tag.remove();
            return;
        }
        tagSet.add(tag.dataset.slug);
    });
}
