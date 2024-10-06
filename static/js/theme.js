(function($) {
    'use strict';

			/*==== One Page Nav  ====*/
			  var top_offset = $(".one_page").height() + 0;
			  $(".one_page .finasol_menu .nav_scroll").onePageNav({ currentClass: "current", changeHash: !1, scrollSpeed: 1000, scrollOffset: top_offset, scrollThreshold: 0.5, filter: "", easing: "swing" });
			  $(".nav_scroll > li:first-child").addClass("current");
			  
			  var pksticky = $(".scroll_fixed");
			  $(window).on("scroll", function () {
				  if ($(window).scrollTop() > 200) {
					  pksticky.addClass("prefix");
				  } else {
					  pksticky.removeClass("prefix");
				  }
			  });
				 /*==== transprent menu  ====*/
			  var pktransp = $(".finasol_nav_area");
			  $(window).on("scroll", function () {
				  if ($(window).scrollTop() > 200) {
					  pktransp.addClass("hbg2");
				  } else {
					  pktransp.removeClass("hbg2");
				  }
			  });

			  var rightma = $(".right_sideber_menu i.openclass");
			  var rightmi = $(".right_sideber_menu i.closeclass");
			  var rightmir = $(".right_sideber_menu_inner");
			  rightma.on("click", function () {
				  rightmir.addClass("tx-s-open");
			  });
			  rightmi.on("click", function () {
				  rightmir.removeClass("tx-s-open");
			  });

			/*==== Mobile Menu  ====*/
			$('.mobile-menu nav').meanmenu({
				meanScreenWidth: "990",
				meanMenuContainer: ".mobile-menu",
				onePage: false,
			});
			
			/*==== Top quearys menu  ====*/
			var emsmenu = $(".em-quearys-menu i.t-quearys");
			var emscmenu = $(".em-quearys-menu i.t-close");
			var emsinner = $(".em-quearys-inner");
			emsmenu.on('click', function() {
				emsinner.addClass('em-s-open');
				$(this).addClass('em-s-hiddens');
				emscmenu.removeClass('em-s-hidden');
			});
			emscmenu.on('click', function() {
				emsinner.removeClass('em-s-open');
				$(this).addClass('em-s-hidden');
				emsmenu.removeClass('em-s-hidden');
			});

			/*==== popup mobile menu  ====*/			
			var mrightma = $(".mobile_menu_o i.openclass");
			var mrightmi = $(".mobile_menu_o i.closeclass");
			var mrightmir = $(".mobile_menu_inner");
			var mobile_ov = $(".mobile_overlay");
			var mobile_onep = $(".mobile-menu .mean-nav ul.nav_scroll li");
			/* var mobile_onep = $(".mobile-menu .mean-nav ul#menu-one-page-menu li");*/
			mrightma.on('click', function() {
				mrightmir.addClass('tx-s-open');
				mobile_ov.addClass('mactive');
			});
			mrightmi.on('click', function() {
				mrightmir.removeClass('tx-s-open');
				mobile_ov.removeClass('mactive');
			});
			mobile_onep.on('click', function() {
				mrightmir.removeClass('tx-s-open');
				mobile_ov.removeClass('mactive');
			});	

			/*==== WOW active js ====*/
			new WOW().init();

			/*==== scrollUp  ====*/
			$.scrollUp({
				scrollText: '<i class="icofont-thin-up"></i>',
				easingType: 'linear',
				scrollSpeed: 900,
				animation: 'fade'
			});

			/*==== Venubox  ====*/
			$('.venobox').venobox({
				numeratio: true,
				infinigall: true
			});
			
			/*==== slider active ====*/
			new Swiper('.swiper_active', {
				effect: 'defult',
				grabCursor: false,
				speed: 2000,
				slidesPerView: 1,
				spaceBetween: 30,
				freeMode: false,
				mousewheel: false,
				keyboard: false,
				loop: true,
					autoplay: {
					delay: 8000,								  
					disableOnInteraction: false,
				},
				  pagination: {
					el: '.swiper-pagination',
					clickable: true,
					type: 'progressbar',
				  },
				  navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				  },
				  scrollbar: {
					el: '.scrollbar_false',
					hide: true,
				  },					    
			});
				
			/*==== brand active ====*/
			
			var witrbslick = $('.brand_active');
								
				if(witrbslick.length > 0){
			
				witrbslick.slick({
					infinite: true,
					autoplay: true,
					default: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 5,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 5,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}		
				
			/*==== project active ====*/
			$('.project_act').slick({	
				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1000,					
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '',					
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
				
			/*==== blog active ====*/
			$('.blog_active').slick({	
				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1000,					
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '',					
				arrows: false,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
				
				
			/*==== blog sidebar active ====*/
			$('.blog_sidebar_image_act').slick({	
				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1000,					
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '',					
				arrows: false,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
				
			/*==== testimonial active ====*/
			
			var witrbtslick = $('.test_active');				
			if(witrbtslick.length > 0){
			witrbtslick.slick({
				infinite: true,
				autoplay: true,
				slidesToShow:3,
				spaceBetween: 10,
				autoplaySpeed: 6000,
				speed: 2000,					
				slidesToScroll: 1,
				arrows:true ,
				dots:false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
			}
			
			/*==== portfolio isotop ====*/
			
			$('.portfolio_active').imagesLoaded( function() {
				if ($.fn.isotope) {

					var $portfolio = $('.portfolio_active');

					$portfolio.isotope({

						itemSelector: '.grid-item',

						filter: '*',

						resizesContainer: true,

						layoutMode: 'masonry',

						transitionDuration: '0.8s'

					});

					$('.filter_menu li').on('click', function() {

						$('.filter_menu li').removeClass('current_menu_item');

						$(this).addClass('current_menu_item');

						var selector = $(this).attr('data-filter');

						$portfolio.isotope({

							filter: selector,

						});

					});

				};
			});

			/*==== Mouse Direction Hover Iffect ====*/
			
			$('.tx_dir_effect').directionalHover();
			$('.tx_dir_effect').directionalHover({				
				overlay: "tx_diff_style",				
				easing: "swing",
				speed: 50
			});

			/*==== Bootstrap Accordion  ====*/
			
			$('.faq-part .card').each(function () {
				var $this = $(this);
				$this.on('click', function (e) {
					var has = $this.hasClass('active');
					$('.faq-part .card').removeClass('active ');
					$('.faq-part .collapse').removeClass(' show');
					if (has) {
						$this.removeClass('active ');
					} else {
						$this.addClass('active ');
					}
				});
			});
			
			/*==== counter active ====*/
				
			$('.counter').counterUp({
				delay: 20,
				time: 3000
			});

})(jQuery);




