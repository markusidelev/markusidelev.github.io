
$(document).ready(function (){
	$('span.button_menu').click(function(){
		if($('ul.navig').hasClass('open')){
			$('ul.navig').removeClass('open');
		} else{
			$('ul.navig').toggleClass('open');
		}
	})
});

$("nav a").click(function(e)	{
	e.preventDefault();
	$('ul.navig').removeClass('open');
	$('.button_menu').removeClass('change');
	var href=$(this).attr("href");
	$("html,body").animate({scrollTop:$(href).offset().top},1000);
});

$(".head_buttons a").click(function(e)	{
	e.preventDefault();
	var href=$(this).attr("href");
	$("html,body").animate({scrollTop:$(href).offset().top},1000);
});

function changeToCross(x) {
	x.classList.toggle("change");
};