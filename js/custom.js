// JavaScript Document


	$(window).on('load', function() {
	
		"use strict";
						
		
		$(window).stellar({});
		
	});


	$(document).ready(function() {
			
		"use strict";


		/*----------------------------------------------------*/
		/*	Animated Scroll To Anchor
		/*----------------------------------------------------*/
		
		$('.header a[href^="#"], .page a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {
			
			e.preventDefault();

			var target = this.hash,
				$target = jQuery(target);

			if (!target || !$target.length) {
				return false;
			}

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 60 // - 200px (nav-height)
			}, 'slow', 'easeInSine', function () {
				window.location.hash = '1' + target;
			});
			
		});


		/*----------------------------------------------------*/
		/*	Hero Slider - Custom (no Materialize dependency)
		/*----------------------------------------------------*/

		var $heroSlides = $('.slider .slides li');
		var heroTotal = $heroSlides.length;
		var heroCurrent = 0;

		if (heroTotal > 0) {
			setInterval(function() {
				$heroSlides.eq(heroCurrent).removeClass('active');
				heroCurrent = (heroCurrent + 1) % heroTotal;
				$heroSlides.eq(heroCurrent).addClass('active');
			}, 5000);
		}
		
		
		/*----------------------------------------------------*/
		/*	ScrollUp
		/*----------------------------------------------------*/
		
		$.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp', // Element ID
				topDistance: 600, // Distance from top before showing element (px)
				topSpeed: 800, // Speed back to top (ms)
				animation: 'fade', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: '', // Text for element
				scrollImg: false, // Set true to use image
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			};

			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');
			
			// If not using an image display text
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

			// Active point overlay
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
			}

			// Show when scrolled past threshold, hide when back near top
			function onScrolling() {
				var scrolled = window.pageYOffset
					|| document.documentElement.scrollTop
					|| document.body.scrollTop
					|| 0;

				if (scrolled > o.topDistance) {
					$(scrollId).stop(true, true).fadeIn(o.animationInSpeed);
				} else {
					$(scrollId).stop(true, true).fadeOut(o.animationOutSpeed);
				}
			}

			window.addEventListener('scroll', onScrolling, {passive: true});
			document.addEventListener('touchmove', onScrolling, {passive: true});
			document.addEventListener('touchend', onScrolling, {passive: true});

			// Check on page load in case page is already scrolled
			onScrolling();

			// To the top — use jQuery animate for reliable cross-browser/iOS support
			$(scrollId).on('click touchstart', function(event){
				event.preventDefault();
				event.stopPropagation();
				$('html, body').animate({scrollTop: 0}, o.topSpeed);
				return false;
			});

		};
		
		$.scrollUp();


		/*----------------------------------------------------*/
		/*	Services Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.services-holder');
			owl.owlCarousel({
				items: 4,
				loop:true,
				autoplay:true,
				navBy: 1,
				autoplayTimeout: 4500,
				autoplayHoverPause: false,
				smartSpeed: 1500,
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					768:{
						items:2
					},
					991:{
						items:3
					},
					1000:{
						items:4
					}
				}
		});


		/*----------------------------------------------------*/
		/*	Experts Rotator
		/*----------------------------------------------------*/

		var owl = $('.experts-holder');
			owl.owlCarousel({
				loop: true,
				autoplay: true,
				autoplayTimeout: 3500,
				autoplayHoverPause: true,
				smartSpeed: 800,
				dots: true,
				nav: false,
				margin: 24,
				responsive: {
					0:    { items: 1 },
					768:  { items: 2 },
					992:  { items: 3 },
					1200: { items: 4 }
				}
		});


		/*----------------------------------------------------*/
		/*	Portfolio Grid
		/*----------------------------------------------------*/

		$('.grid-loaded').imagesLoaded(function () {

	        // filter items on button click
	        $('.gallery-filter').on('click', 'button', function () {
	            var filterValue = $(this).attr('data-filter');
	            $grid.isotope({
	              filter: filterValue
	            });
	        });

	        // change is-checked class on buttons
	        $('.gallery-filter button').on('click', function () {
	            $('.gallery-filter button').removeClass('is-checked');
	            $(this).addClass('is-checked');
	            var selector = $(this).attr('data-filter');
	            $grid.isotope({
	              filter: selector
	            });
	            return false;
	        });

	        // init Isotope
	        var $grid = $('.masonry-wrap').isotope({
	            itemSelector: '.gallery-item',
	            percentPosition: true,
	            transitionDuration: '0.7s',
	            masonry: {
	              // use outer width of grid-sizer for columnWidth
	              columnWidth: '.gallery-item',
	            }
	        });
	        
	    });


		/*----------------------------------------------------*/
		/*	Single Image Lightbox
		/*----------------------------------------------------*/
				
		$('.image-link').magnificPopup({
		  type: 'image'
		});	


		/*----------------------------------------------------*/
		/*	Video Link #1 Lightbox
		/*----------------------------------------------------*/
		
		$('.video-popup1').magnificPopup({
		    type: 'iframe',		  	  
				iframe: {
					patterns: {
						youtube: {			   
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/SZEflIVnhH8'				
								}
							}
						}		  		  
		});


		/*----------------------------------------------------*/
		/*	Video Link #2 Lightbox
		/*----------------------------------------------------*/
		
		$('.video-popup2').magnificPopup({
		    type: 'iframe',		  	  
				iframe: {
					patterns: {
						youtube: {			   
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/7e90gBu4pas'				
								}
							}
						}		  		  
		});


		/*----------------------------------------------------*/
		/*	Statistic Counter
		/*----------------------------------------------------*/
	
		if ('IntersectionObserver' in window) {
			var counterObserver = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						var $el = $(entry.target);
						var target = parseInt($el.text(), 10);
						$el.prop('Counter', 0).animate({
							Counter: target
						}, {
							duration: 2500,
							easing: 'swing',
							step: function(now) {
								$el.text(Math.ceil(now));
							},
							complete: function() {
								$el.text(target);
							}
						});
						observer.unobserve(entry.target);
					}
				});
			}, { threshold: 0.3, rootMargin: '0px 0px -30px 0px' });

			$('.count-element').each(function() {
				counterObserver.observe(this);
			});
		} else {
			$('.count-element').each(function () {
				$(this).appear(function() {
					var $el = $(this);
					var target = parseInt($el.text(), 10);
					$el.prop('Counter', 0).animate({
						Counter: target
					}, {
						duration: 2500,
						easing: 'swing',
						step: function (now) {
							$el.text(Math.ceil(now));
						},
						complete: function() {
							$el.text(target);
						}
					});
				},{accX: 0, accY: 0});
			});
		}


		/*----------------------------------------------------*/
		/*	Testimonials Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.reviews-holder');
			owl.owlCarousel({
				items: 3,
				loop:true,
				autoplay:true,
				navBy: 1,
				autoplayTimeout: 4500,
				autoplayHoverPause: false,
				smartSpeed: 1500,
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					768:{
						items:2
					},
					991:{
						items:3
					},
					1000:{
						items:3
					}
				}
		});


		$('#datetimepicker').datetimepicker();


		/*----------------------------------------------------*/
		/*	Appointment Form Validation
		/*----------------------------------------------------*/

		$(".appointment-form").validate({
			rules: {
				select: "required",
				name: "required",
				email: {
					required: true,
					email: true
				},
				phone:{
					required: true,
					digits: true,
				}
			},
			messages: {
				select: "This field is required",
				name: "Please enter your name",
				email: "We need your email address to contact you",
				phone: "Please enter a valid number",
			}
		});


		/*----------------------------------------------------*/
		/*	Hero Form Validation
		/*----------------------------------------------------*/

		$(".hero-form").validate({
			rules: {			
				name: "required",
				email: {
					required: true,
					email: true
				},
				phone:{
					required: true,
					digits: true,
				},
				date: "required",
				select: "required",
			},
			messages: {				
				name: "Please enter your name",
				email: "We need your email address to contact you",
				phone: "Please enter a valid number",
				date: "Please enter valid date",
				select: "This field is required",
			}
		});


		/*----------------------------------------------------*/
		/*	Contact Form Validation
		/*----------------------------------------------------*/
		
		$(".contact-form").validate({
			rules: {				
				name: "required",
				email: {
					required: true,
					email: true
				},
				phone:{
					required: true,
					digits: true,
				},
				select: "required",
				subject: "required",
				message: "required",
			},
			messages: {
				select: "This field is required",
				name: "Please enter your name",
				email: "We need your email address to contact you",
				phone: "Please enter a valid number",
				subject: "Please enter no more than (1) characters",
				message: "Please enter no more than (1) characters",
			}
		});


		/*----------------------------------------------------*/
		/*	Comment Form Validation
		/*----------------------------------------------------*/
		
		$(".comment-form").validate({
			rules: {				
				name: "required",
				email: {
					required: true,
					email: true
				},
				phone:{
					required: true,
					digits: true,
				},
				message: "required",
			},
			messages: {
				name: "Please enter your name",
				email: "We need your email address to contact you",
				message: "Please enter no more than (1) characters",
			}
		});


		/*----------------------------------------------------*/
		/*	Newsletter Subscribe Form
		/*----------------------------------------------------*/
	
		$('.newsletter-form').ajaxChimp({
        language: 'cm',
        url: 'http://dsathemes.us3.list-manage.com/subscribe/post?u=af1a6c0b23340d7b339c085b4&id=344a494a6e'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
		});

		$.ajaxChimp.translations.cm = {
			'submit': 'Submitting...',
			0: 'We have sent you a confirmation email',
			1: 'Please enter your email address',
			2: 'An email address must contain a single @',
			3: 'The domain portion of the email address is invalid (the portion after the @: )',
			4: 'The username portion of the email address is invalid (the portion before the @: )',
			5: 'This email address looks fake or invalid. Please enter a real email address'
		};	


	});
