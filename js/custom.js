
$(document).ready(function () {

    //Match Height Starts
    if ($(".match").is(":visible")) {
        MatchHeight();
    }

    // Sticky Menu Starts 
    $(document).scroll(function (e) {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 20) {
            $('.header-sec-outer').addClass('sticky-sec');

        } else {
            $('.header-sec-outer').removeClass('sticky-sec');

        }
    });

    // For mobile sections 
    
    
    if ($(window).width() < 991) {

        if ($(window).width() < 768) {
            $('.navbar-brand').clone().appendTo('.mob-sec-slide');
            $('.nav-right-btn').appendTo('.mob-sec-slide');
            $('.navbar-collapse').appendTo('.mob-sec-slide');
        }   
        else {
            $('.navbar-brand').clone().appendTo('.mob-sec-slide');
            $('.navbar-collapse').appendTo('.mob-sec-slide');

        }
    }





    // Mobile Menu starts
    $(document).on('click', '#hamburguer-menu', function() {
        $('body').addClass('menu-open');
        $('.mob-sec-slide').addClass('slide-open');
    });
    $(document).on('click', '#menu-close', function() {
        $('body').removeClass('menu-open');
        $('.mob-sec-slide').removeClass('slide-open');
        $('.mob-overlay').removeClass('slow-overlay');
    });
    $(document).on('click', '.mob-overlay', function() {
        $('body').removeClass('menu-open');
        $('.mob-sec-slide').removeClass('slide-open');
    });
    // Mobile Menu Ends
    
    // Mobile Menu starts
    $(document).on('click', '#hamburguer-menu', function() {
        $('body').addClass('menu-open');
        $('.collapse.navbar-collapse').addClass('menu-slide-open');
        $('.mob-overlay').addClass("slow-overlay");      
    });
    $(document).on('click', '#mob-close-btn', function() {
        $('body').removeClass('menu-open');
        $('.collapse.navbar-collapse').removeClass('menu-slide-open');
        $('.mob-overlay').removeClass("slow-overlay");       
    });
    $(document).on('click', '.mob-overlay', function() {
        $('body').removeClass('menu-open');
        $('.collapse.navbar-collapse').removeClass('menu-slide-open');
        $('.mob-overlay').removeClass("slow-overlay");       
    });
    // Mobile Menu Ends
      
});

// Match Height Starts 
function MatchHeight() {
    $('.match').matchHeight({});
}
// Match Height Ends 


if ( $('.product__slider-main').length ) {
    var $slider = $('.product__slider-main')
        .on('init', function(slick) {
            $('.product__slider-main').fadeIn(1000);
        })
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            lazyLoad: 'ondemand',
            autoplaySpeed: 3000,
            asNavFor: '.product__slider-thmb'
        });

var $slider2 = $('.product__slider-thmb')
        .on('init', function(slick) {
            $('.product__slider-thmb').fadeIn(1000);
        })
        .slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            asNavFor: '.product__slider-main',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                
                                {
                  breakpoint: 991,
                  settings: {
                    vertical: false,
                    slidesToShow: 6,
                  }
                },
                {
                  breakpoint: 500,
                  settings: {
                    vertical: false,
                    slidesToShow: 4,
                  }
                }
                ]
        });

//remove active class from all thumbnail slides
$('.product__slider-thmb .slick-slide').removeClass('slick-active');

//set active class to first thumbnail slides
$('.product__slider-thmb .slick-slide').eq(0).addClass('slick-active');

// On before slide change match active thumbnail to current slide
$('.product__slider-main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 var mySlideNumber = nextSlide;
 $('.product__slider-thmb .slick-slide').removeClass('slick-active');
 $('.product__slider-thmb .slick-slide').eq(mySlideNumber).addClass('slick-active');
});


 
}












// Count Box

var num;

$('.button-count:first-child').click(function(){
  num = parseInt($('input:text').val());
  if (num > 1) {
    $('input:text').val(num - 1);
  }
  if (num == 2) {
    $('.button-count:first-child').prop('disabled', true);
  }
  if (num == 10) {
    $('.button-count:last-child').prop('disabled', false);
  }
});

$('.button-count:last-child').click(function(){
  num = parseInt($('input:text').val());
  if (num < 10) {
    $('input:text').val(num + 1);
  }
  if (num > 0) {
    $('.button-count:first-child').prop('disabled', false);
  }
  if (num == 9) {
    $('.button-count:last-child').prop('disabled', true);
  }
});