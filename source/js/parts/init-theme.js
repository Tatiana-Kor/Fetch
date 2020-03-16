export default function initTheme() {
    $('.js-promo-slider').on("afterChange", function() {

        var colorTheme = $('.slick-active').attr('data-theme');
        
        if (colorTheme == "dark") {
            $('.header').removeClass('header--light').addClass('header--dark');
            $('.promo-slider__slogan').removeClass('promo-slider__slogan--light')
                .addClass('promo-slider__slogan--dark');
        } else {
            $('.header').removeClass('header--dark').addClass('header--light');
            $('.promo-slider__slogan').removeClass('promo-slider__slogan--dark')
                .addClass('promo-slider__slogan--light');
        }
    }
)}
