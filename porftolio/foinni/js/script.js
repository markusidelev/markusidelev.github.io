$(".works-block a").fancybox();

		$(".top-block a").click(function(e){
			e.preventDefault();
		var href=$(this).attr("href");   //#services
		$("html,body").animate({scrollTop:$(href).offset().top},1000);
	});