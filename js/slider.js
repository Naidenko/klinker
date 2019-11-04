$(document).ready(function(){
    $('.slider__list').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
    });
});
