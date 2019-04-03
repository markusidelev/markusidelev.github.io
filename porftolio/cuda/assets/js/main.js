$(document).ready(function (){
	$('span.nav-menu_btn').click(function(){
		if($('nav').hasClass('open')){
			$('nav').removeClass('open');
		} else{
			$('nav').toggleClass('open');
		}
	})
});

function changeToCross(x) {
	x.classList.toggle("change");
};


$("nav a").not(":first").click(function(e)	{
	e.preventDefault();
	$('nav').removeClass('open');
	$('.nav-menu_btn').removeClass('change');
	var href=$(this).attr("href");
	$("html,body").animate({scrollTop:$(href).offset().top},1000);
});

$("nav a").click(function(e)	{
	e.preventDefault();
	var href=$(this).attr("href");
	$("html,body").animate({scrollTop:$(href).offset().top},1000);
});

$(".big_btn").click(function(e)	{
	e.preventDefault();
	var href=$(this).attr("href");
	$("html,body").animate({scrollTop:$(href).offset().top},1000);
});

$(".author .animated").hover(function(){
	$(".author .animated").toggleClass("rubberBand infinite");
});