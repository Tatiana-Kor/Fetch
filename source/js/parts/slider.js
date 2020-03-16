function initPromoSlider() {
    $('.js-promo-slider').slick({
    });
}

function initItemSlider() {
    $('.js-item-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-item-preview',
        zIndex: 1,
    });

    $('.js-item-preview').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-item-slider',
        focusOnSelect: true,
        useTransform: false,     
    });
}

function initReccomendSlider() {
    $('.js-item-recommend').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]      
    });
}

export default function initSliders() {
    initPromoSlider();
    initItemSlider();
    initReccomendSlider();
}
  