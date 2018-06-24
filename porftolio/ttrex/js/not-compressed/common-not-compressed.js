$(".author .animated").hover(function(){
    $(".author .animated").toggleClass("rubberBand infinite");
});

$(".up-arrow").hover(function(){
    $(".up-arrow").toggleClass("fadeOutUp infinite");
});



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

$(".up-arrow").click(function(e)	{
	e.preventDefault();
	var href=$(this).attr("href");
	$("html,body").animate({scrollTop:$(href).offset().top},1000);
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
});
