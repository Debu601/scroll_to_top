
$(document).ready(function(){
	// mobile menu starts here
	$(".res-menu").click(function(){
		$(".menu").slideToggle();
	});
	// mobile menu ends here
	
	// video pop up starts here
	$('#youtube-video').magnificPopup({
		type:'iframe',
		iframe: {
		  patterns: {
			youtube: {
			  index: 'youtube.com/',
			  id: 'v=',
			  src: 'https://www.youtube.com/embed/j7pWYn7PKO8'
			}
		  },
		  srcAction: 'iframe_src',
		}
	});
	
	// video pop up ends here
	
	// skills bar starts here
	$('.skillbar').skillBars({
		// options here
	});
	// skills bar ends here
	
	// counter.js starts here
	$('.counter-number').each(function () {
		$(this).prop('Counter',0).animate({
        Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	// counter.js ends here
	
	// mixitup.js ends here
	var mixer = mixitup('.portfolio-content');
	// mixitup.js ends here
	
	// magnific popup.js ends here
	$(document).ready(function() {
	  $('.popup-link').magnificPopup({type:'image'});
	});
	// magnific popup.js ends here
	
	// owl carousel starts here
	$(".slider-active").owlCarousel({
		loop: true,
		nav: true,
		autoplay: true,
		animateIn:'fadeIn',
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
		
	})
	// owl carousel ends here
	
	// circular-progress-bar starts here
	
	  $('#progressbar-circle-seo').circleProgress({
		value: 0.55,
		size: 200,
		fill: '#177cf2',
		thickness: 2,
		emptyFill: '#FFF',
		animationStartValue: 1,
		animation: { duration: 3000}
	  }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progressbar-percentage').html(Math.round(55 * progress) + '<i>%</i>');
	  });
	
	  $('#progressbar-circle-web').circleProgress({
		value: 0.60,
		size: 200,
		fill: '#177cf2',
		thickness: 2,
		emptyFill: '#FFF',
		animation: { duration: 3000}
	  }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progressbar-percentage').html(Math.round(60 * progress) + '<i>%</i>');
	  });
	
	  $('#progressbar-circle-marketing').circleProgress({
		value: 0.90,
		size: 200,
		fill: '#177cf2',
		thickness: 2,
		emptyFill: '#FFF',
		animation: { duration: 3000}
	  }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progressbar-percentage').html(Math.round(90 * progress) + '<i>%</i>');
	  });
	
	// circular-progress-bar ends here
	
	
	
	
});
// scrollToTop
$(document).ready(function(){		
	$('.scrolltotop').click(function(){
		$("html").animate({scrollTop:0}, 1000);
		return false;
	});
	
	$(window).scroll(function(){
		var dis = $(window).scrollTop();
		
		if ( dis > 400 ) {
			$('.scrolltotop').fadeIn();
		}
		else {
			$('.scrolltotop').fadeOut();
		}
	});
	
});
// sticky menu stats here
$(document).ready(function(){		
	$(window).on('scroll',function() {    
	    var scroll = $(window).scrollTop();
	    if (scroll < 200) {
		    $(".header-area").removeClass("sticky");
	    }
	    else{
		    $(".header-area").addClass("sticky");
	   }
    });
});
// preloader stats here
$(document).ready(function(){		
	$('body').addClass('preloader-active');

    $(window).on('load', function() { 
        $('.preloader').fadeOut();
        $('.preloader-spinner').delay(350).fadeOut('slow');
        $('body').removeClass('preloader-active');
    });
});