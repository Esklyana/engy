$(document).ready(function(){

	$('.news__width').slick({
		dots: true,
		arrows: true,
	  	infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: false
			      }
			    }
			  ]
	});

	$('.burger').click(function(){
		if('none' == $('.menu').css('display')){
			$('.menu').css('display', 'flex');
		} else {
			$('.menu').css('display', 'none');
		}
	});

});