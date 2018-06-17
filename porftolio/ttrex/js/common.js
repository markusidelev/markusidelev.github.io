$(".arrow").click(function(e)	{
	e.preventDefault();
	var href=$(this).attr("href");
	$("html,body").animate({scrollTop:$(href).offset().top},1000);
});

$("nav a").not(":first").click(function(e)	{
	e.preventDefault();
	$('ul.navig').removeClass('open');
	$('.button_menu').removeClass('change');
	var href=$(this).attr("href");
	$("html,body").animate({scrollTop:$(href).offset().top},1000);
});

$(".animated").hover(function(){
	$(".animated").toggleClass("rubberBand infinite");
});

var mySwiper = new Swiper ('.team .team-block .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: '3',
    // centeredSlides: true,
    spaceBetween: 20,
    loop: true,


    // If we need pagination
    pagination: {
    	el: '.swiper-pagination',
    	clickable: true,
    },

    // Navigation arrows
    navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
    	el: '.swiper-scrollbar',
    },
    breakpoints:{
    	1024: {

    		slidesPerView: '2',
    	},
    	700:{
    		slidesPerView: '1',
    	}, 
    }
})

// $("input:required").addClass('required');

$(".animated").hover(function(){
	$(".animated").toggleClass("rubberBand infinite");
});

