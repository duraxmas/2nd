$(function () {

	$('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close')
  })
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close')
  })
  
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