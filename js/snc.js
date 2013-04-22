/*
 * the individual functions inside (document).ready() {}
 * can also be inside individual <script> elements in 
 * the header of the HTML file.
 */	
$(document).ready(function() {
	 $(function() { 
		    $('#canvas').sketch();
	 });
	
	$(function() {
		$('#statues').slides({
			preload: true,
			effect: 'slide, fade',
			crossfade: true,
			slideSpeed: 350,
			fadeSpeed: 500,
			generatePagination: false
		});
	});
	
//	$('').click(function() { //button.demos
//    	// no border around all (except the one selected) 
//		$('').not(this).stop().animate({ borderWidth:"0px" }); 
//    	// Make a border around this 
//		$(this).stop().animate({ borderWidth:"4px" });
//	});
	
	$('a.colorbutton').click(function my() { 
    	// no border around all (except the one selected) 
		$('a.colorbutton').not(this).stop().animate({ borderWidth:"0px" });
//		$('button.demos').not(this).stop().animate({ borderWidth:"0px" });
    	// Make a border around this 
		$(this).stop().animate({ borderWidth:"4px" });
//		$('button.demos').animate({ borderWidth:"4px" });
	});
	
	$('a.tool').click(function() {
	    // Make all images (except this) transparent
		$('a.tool').not(this).stop().animate({ opacity: 0.1 }, 300);
	    // Make this opaque
		$(this).stop().animate({ opacity: 1.0 }, 300);
	});
		 
	$(".colorpicker").hide();
	
	$('div.colorpicker').mouseleave(function() { //mouseleave
		$(".colorpicker").hide('slow');
	});
	 
	$("a.wheel").click(function() {
		 $(".colorpicker").fadeToggle();   
	 });
});
