$('.slide-items').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 767, // 767px以下のサイズに適用
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});