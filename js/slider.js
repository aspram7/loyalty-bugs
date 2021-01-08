$(function () {
    $(".partners-items").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,

        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                },
            },
        ],
    });
});
