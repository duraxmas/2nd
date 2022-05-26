$(function () {

  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close')
  })
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close')
  });

  $('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--open')
  });


  if ($(window).width() < 541) {
    $('.timeline__item--measurements').appendTo($('.timeline__items-box'));
  }

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoPlay: true,
  });

  $('.contact-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1511,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.blog__item-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="blog__item-arrow blog__item-arrow-left"><img src="images/slide-arrow-left.svg" alt="previous"></button>',
    nextArrow: '<button type="button" class="blog__item-arrow blog__item-arrow-right"><img src="images/slide-arrow-right.svg" alt="next"></button>',

  });

  var mixer = mixitup('.gallery__main', {
    load: {
      filter: '.living'
    }
  });


})