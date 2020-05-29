$( document ).ready(function() {
//     $('[data-fancybox]').fancybox({
//       youtube : {
//           controls : 0,
//           showinfo : 0
//       }
//   	});
    $('.listproduct .owl-product').owlCarousel({
          loop: true,
          autoplay: false,          
          nav: true,
          responsive: {
              0:{
                  items:2,
                  margin: 0,
              },
              600:{
                  items:3,
                  margin: 10,
              },
              1000:{
                  items:3,
                  margin: 30,
              },
              1200:{
                  items:4,
                  margin: 30,
              }
          }
    });
  	$('.quotes-slider').owlCarousel({
          loop: true,
          autoplay: false,          
          nav: true,
      	  margin: 30,
          responsive: {
              0:{
                  items:2,
                 margin: 10,
              },
              600:{
                  items:2,
                  margin: 10,
              },
              1000:{
                  items:2,
                  margin: 30,
              },
              1200:{
                  items:2,
                  
              }
          }
    });
    $('.owl-press').owlCarousel({
          loop: true,
          autoplay: false,
          margin: 15,
          nav: true,
          responsive: {
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              768:{
                  items:4
              },
              1200:{
                  items:6
              }
          }
	});
  	$('.owl-pop-culture').owlCarousel({
          loop: true,
          autoplay: false,
          margin: 35,
          nav: true,
          responsive: {
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              768:{
                  items:3,
                margin: 30
              },
              1200:{
                  items:4
              }
          }
	});
  var size_span = $(".categories span").length;
  x=5;
  $('.categories span:lt('+5+')').addClass('showspan');
  $('.view_more span').click(function () {
        x= (x+4 <= size_span) ? x+4 : size_span;
        $('.categories span:lt('+x+')').addClass('showspan');
    	size_show = $(".categories span.showspan").size();
    	if (size_span <= size_show ) {
        	$(this).hide();
        };
    });
  if ($('#carousel-3d-img').length > 0) {
  var  carousel_img = new Vue({
    el: '#carousel-3d-img',
    data: {
      slides: 5,
      slideBorder: 0,
      direction: 'ltr',
    },
    components: {
      'carousel-3d': Carousel3d.Carousel3d,
      'slide': Carousel3d.Slide,

    }
   });
  }
  $("#carousel-why").css({'width': widthCarousel });
              	var carousel = $("#carousel-why").waterwheelCarousel({
                    flankingItems: 3,
                    startingItem: 1
                  });
                  var widthCarousel = $('.why-try-one > .wrapper').width();
             	 $("#carousel-why .next").on("click",function(){
                  carousel.next();
                });
                $("#carousel-why .pre").on("click",function(){
                  carousel.prev();
      				});

            var viewportWidth = $(window).width();
             if (viewportWidth <= 413) {
                $('#carousel-why').owlCarousel({
                  nav:false,
                  loop:true,
                 items:1,
              });
            }else{
              	
             }  
  	 var swiper = new Swiper('.section-masonry .swiper-container', {
         pagination: {
    		el: '.swiper-pagination',
    		type: 'bullets',
           clickable:true
  		},
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30,
		nextButton: '.js-mk-awards-slider-next',
   		prevButton: '.js-mk-awards-slider-prev',
       	paginationClickable: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          736: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerColumn: 1,
          },
          414: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          },
          0: {
            //slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          }
        }
    });
	$(".categories span").on("click", function(){
	  var filter = $(this).attr('data-value').toLowerCase();
    	var slidesxcol;
	  $(".categories span")
	  $(".categories span").removeClass("active");
	  $(this).addClass("active");
	  
	  if(filter=="all"){
	  	$("[data-filter]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
        $('.wrap-masonry').removeClass('topIcon');
      if($(".swiper-slide").length > 4)
        slidesxcol = 2;
      else slidesxcol = 1;
      swiper.destroy();
      swiper = new Swiper('.section-masonry .swiper-container', {
         pagination: {
    		el: '.swiper-pagination',
    		type: 'bullets',
           clickable:true
  		},
        slidesPerView: 4,
        slidesPerColumn: slidesxcol,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.js-mk-awards-slider-next',
   		prevButton: '.js-mk-awards-slider-prev',
       	paginationClickable: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
           992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          736: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerColumn: 1,
          },
          414: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          }
        }
    });
	  }
	  else {
		$(".swiper-slide").not("[data-filter='"+filter+"']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
		  $("[data-filter='"+filter+"']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
        $('.wrap-masonry').removeClass('topIcon');
          $('.wrap-masonry').addClass('topIcon');
      console.log($(".swiper-slide").length)
      if($(".swiper-slide").length > 4)
        slidesxcol = 2;
      else slidesxcol = 1;
      swiper.destroy();
      swiper = new Swiper('.section-masonry .swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable:true
        },
        slidesPerView: 4,
        slidesPerColumn: slidesxcol,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.js-mk-awards-slider-next',
   		prevButton: '.js-mk-awards-slider-prev',
       	paginationClickable: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
           992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          736: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerColumn: 1,
          },
          414: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          }
        }
    });
	  }
	});
    $('.js-mk-awards-slider-next').click(function(){
      var mySwiper = document.querySelector('.swiper-container').swiper
    	mySwiper.slideNext(); 
    })
    $('.js-mk-awards-slider-prev').click(function(){
      var mySwiper = document.querySelector('.swiper-container').swiper
    	mySwiper.slidePrev(); 
    });
    fix_height_slider();
  function fix_height_slider() {
    var heightImg = jQuery('.related-products .grid-product__image-wrapper').height();
    jQuery('.related-products button[role="presentation"]').css({
      'top':heightImg/2,
      'margin-top':'-15px',
    });
  }
  setInterval(fix_height_slider(), 1000);
  var heightImgProduct = jQuery('.listproduct .image-wrap .product-image').height();
  $('.listproduct .owl-nav button').css({
    'top':heightImgProduct/2,
    'margin-top':'-35px',
  });
  jQuery(window).resize(function(){
     fix_height_slider()
  });
//   if ($('#mycreanimale').length > 0) {
// 	//var brecrumb = '<div class="content-bgr-wrapper"><ul><li><a href="/">Home</a></li><li class="active">Help</li></ul></div>';
// 	$('#mycreanimale .main-content > .wrapper').prepend('<div class="content-bgr-wrapper"><ul><li><a href="/">Home</a></li><li class="active">Help</li></ul></div>');
// };
  if ($('.template-cart').length > 0) {
	//var brecrumb = '<div class="content-bgr-wrapper"><ul><li><a href="/">Home</a></li><li class="active">Help</li></ul></div>';
	$('.template-cart .main-content').prepend('<nav class="breadcrumb" role="navigation" aria-label="breadcrumbs"><a href="/" title="Accueil">Accueil</a><span aria-hidden="true">|</span><span>Panier</span></nav>');
	};
  if(window.location.href.indexOf("questions-frequentes") > -1) {
       //alert("your url contains the name franky");
    $('.breadcrumb span:last-child').text('Questions/Réponses')
    }
});

$( document ).ready(function() {
//     $('[data-fancybox]').fancybox({
//       youtube : {
//           controls : 0,
//           showinfo : 0
//       }
//   	});
    $('.listproduct .owl-product').owlCarousel({
          loop: true,
          autoplay: false,          
          nav: true,
          responsive: {
              0:{
                  items:2,
                  margin: 0,
              },
              600:{
                  items:3,
                  margin: 10,
              },
              1000:{
                  items:3,
                  margin: 30,
              },
              1200:{
                  items:4,
                  margin: 30,
              }
          }
    });
  	$('.quotes-slider').owlCarousel({
          loop: true,
          autoplay: false,          
          nav: true,
      	  margin: 30,
          responsive: {
              0:{
                  items:2,
                 margin: 10,
              },
              600:{
                  items:2,
                  margin: 10,
              },
              1000:{
                  items:2,
                  margin: 30,
              },
              1200:{
                  items:2,
                  
              }
          }
    });
    $('.owl-press').owlCarousel({
          loop: true,
          autoplay: false,
          margin: 15,
          nav: true,
          responsive: {
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              768:{
                  items:4
              },
              1200:{
                  items:6
              }
          }
	});
  	$('.owl-pop-culture').owlCarousel({
          loop: true,
          autoplay: false,
          margin: 35,
          nav: true,
          responsive: {
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              768:{
                  items:3,
                margin: 30
              },
              1200:{
                  items:4
              }
          }
	});
  var size_span = $(".categories span").length;
  x=5;
  $('.categories span:lt('+5+')').addClass('showspan');
  $('.view_more span').click(function () {
        x= (x+4 <= size_span) ? x+4 : size_span;
        $('.categories span:lt('+x+')').addClass('showspan');
    	size_show = $(".categories span.showspan").size();
    	if (size_span <= size_show ) {
        	$(this).hide();
        };
    });
  if ($('#carousel-3d-img').length > 0) {
  var  carousel_img = new Vue({
    el: '#carousel-3d-img',
    data: {
      slides: 5,
      slideBorder: 0,
      direction: 'ltr',
    },
    components: {
      'carousel-3d': Carousel3d.Carousel3d,
      'slide': Carousel3d.Slide,

    }
   });
  }
  $("#carousel-why").css({'width': widthCarousel });
              	var carousel = $("#carousel-why").waterwheelCarousel({
                    flankingItems: 3,
                    startingItem: 1
                  });
                  var widthCarousel = $('.why-try-one > .wrapper').width();
             	 $("#carousel-why .next").on("click",function(){
                  carousel.next();
                });
                $("#carousel-why .pre").on("click",function(){
                  carousel.prev();
      				});

            var viewportWidth = $(window).width();
             if (viewportWidth <= 413) {
                $('#carousel-why').owlCarousel({
                  nav:false,
                  loop:true,
                 items:1,
              });
            }else{
              	
             }  
  	 var swiper = new Swiper('.section-masonry .swiper-container', {
         pagination: {
    		el: '.swiper-pagination',
    		type: 'bullets',
           clickable:true
  		},
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30,
		nextButton: '.js-mk-awards-slider-next',
   		prevButton: '.js-mk-awards-slider-prev',
       	paginationClickable: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          736: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerColumn: 1,
          },
          414: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          },
          0: {
            //slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          }
        }
    });
	$(".categories span").on("click", function(){
	  var filter = $(this).attr('data-value').toLowerCase();
    	var slidesxcol;
	  $(".categories span")
	  $(".categories span").removeClass("active");
	  $(this).addClass("active");
	  
	  if(filter=="all"){
	  	$("[data-filter]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
        $('.wrap-masonry').removeClass('topIcon');
      if($(".swiper-slide").length > 4)
        slidesxcol = 2;
      else slidesxcol = 1;
      swiper.destroy();
      swiper = new Swiper('.section-masonry .swiper-container', {
         pagination: {
    		el: '.swiper-pagination',
    		type: 'bullets',
           clickable:true
  		},
        slidesPerView: 4,
        slidesPerColumn: slidesxcol,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.js-mk-awards-slider-next',
   		prevButton: '.js-mk-awards-slider-prev',
       	paginationClickable: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
           992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          736: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerColumn: 1,
          },
          414: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          }
        }
    });
	  }
	  else {
		$(".swiper-slide").not("[data-filter='"+filter+"']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
		  $("[data-filter='"+filter+"']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
        $('.wrap-masonry').removeClass('topIcon');
          $('.wrap-masonry').addClass('topIcon');
      console.log($(".swiper-slide").length)
      if($(".swiper-slide").length > 4)
        slidesxcol = 2;
      else slidesxcol = 1;
      swiper.destroy();
      swiper = new Swiper('.section-masonry .swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable:true
        },
        slidesPerView: 4,
        slidesPerColumn: slidesxcol,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.js-mk-awards-slider-next',
   		prevButton: '.js-mk-awards-slider-prev',
       	paginationClickable: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
           992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          736: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerColumn: 1,
          },
          414: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
          }
        }
    });
	  }
	});
    $('.js-mk-awards-slider-next').click(function(){
      var mySwiper = document.querySelector('.swiper-container').swiper
    	mySwiper.slideNext(); 
    })
    $('.js-mk-awards-slider-prev').click(function(){
      var mySwiper = document.querySelector('.swiper-container').swiper
    	mySwiper.slidePrev(); 
    });
    fix_height_slider();
  function fix_height_slider() {
    var heightImg = jQuery('.related-products .grid-product__image-wrapper').height();
    jQuery('.related-products button[role="presentation"]').css({
      'top':heightImg/2,
      'margin-top':'-15px',
    });
  }
  setInterval(fix_height_slider(), 1000);
  var heightImgProduct = jQuery('.listproduct .image-wrap .product-image').height();
  $('.listproduct .owl-nav button').css({
    'top':heightImgProduct/2,
    'margin-top':'-35px',
  });
  jQuery(window).resize(function(){
     fix_height_slider()
  });
//   if ($('#mycreanimale').length > 0) {
// 	//var brecrumb = '<div class="content-bgr-wrapper"><ul><li><a href="/">Home</a></li><li class="active">Help</li></ul></div>';
// 	$('#mycreanimale .main-content > .wrapper').prepend('<div class="content-bgr-wrapper"><ul><li><a href="/">Home</a></li><li class="active">Help</li></ul></div>');
// };
  if ($('.template-cart').length > 0) {
	//var brecrumb = '<div class="content-bgr-wrapper"><ul><li><a href="/">Home</a></li><li class="active">Help</li></ul></div>';
	$('.template-cart .main-content').prepend('<nav class="breadcrumb" role="navigation" aria-label="breadcrumbs"><a href="/" title="Accueil">Accueil</a><span aria-hidden="true">|</span><span>Panier</span></nav>');
	};
  if(window.location.href.indexOf("questions-frequentes") > -1) {
       //alert("your url contains the name franky");
    $('.breadcrumb span:last-child').text('Questions/Réponses')
    }
  
  var div = $('.search_ResItm .image-wrap');
  var width = div.width();
  var rate = parseFloat(380 / 287);
  div.css('height', width * rate);
  
  $(window).resize(function() {
  	  var div = $('.search_ResItm .image-wrap');
      var width = div.width();
      var rate = parseFloat(380 / 287);
      div.css('height', width * rate);
  });
});


