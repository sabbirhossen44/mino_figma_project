
/* home page js start */
$(document).ready(function () {
    $('.overview_slide_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        prevArrow: false,
        nextArrow: false,
    });
});


$(document).ready(function () {
    $('.feedback_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<span class="prev_arrow"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',

    });
});

/* home page js end */


// $('.counter').countUp({
//     'time': 4000,
//     'delay': 10
// });