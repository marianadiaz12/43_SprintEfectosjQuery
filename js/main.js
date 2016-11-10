$(document).ready(function(){
	$('.col-whi').hover(function() {
	$(this).addClass("nar");
	},
	function() {
	$(this).removeClass('nar');
	});

	$('input').focus(function(){
        $(this).css('outline-color', '#FF0000');
     });

	$('h1').mouseenter(function(){
		$(this).animate({fontSize: '7em'}, 'slow');
	});
	$('h1').mouseleave(function(){
		$(this).animate({fontSize: '4em'}, 'slow');
	});
});
