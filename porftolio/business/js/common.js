topbar.hide()


$("nav a").click(function(e)	{
	e.preventDefault();
	var href=$(this).attr("href");
	$("html,body").animate({scrollTop:$(href).offset().top},1000);
});



$(".banner a").click(function(e)	{
	e.preventDefault();
	var href=$(this).attr("href");
	$("html,body").animate({scrollTop:$(href).offset().top},1000);
});

$(".animated").hover(function(){
	$(".animated").toggleClass("rubberBand infinite");
});