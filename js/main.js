$(document).ready(function () {

  $('#mobilemenu').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  });
   
  

  $(".slider-active").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
  });

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });



  $(".testimonial-active").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
  });




  $(".brand-active").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
  });



});
