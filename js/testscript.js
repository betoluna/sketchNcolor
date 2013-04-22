$(document).ready(function() {
	
	$(function() { 
	    $('#canvas').sketch();
	});
	
	$(function() {
		$('#colorpicker1').farbtastic('#color1');
	});
});

//loaded on <body> translates touch to mouse events
function touchHandler(event) {
	     var touches = event.changedTouches,
	         first = touches[0],
	         type = "";
	     
	     switch(event.type)
	     {
	         case "touchstart": 
	        	 type = "mousedown"; 
	        	 break;
	        	 
	         case "touchmove":  
	        	 type="mousemove"; 
	        	 event.preventDefault();
	        	 break; 
	        	 
	         case "touchend":   
	        	 type="mouseup"; 
	        	 break;
	        	 
	         default: 
	        	 return;
	     }

	     //initMouseEvent(type, canBubble, cancelable, view, clickCount, 
	     //           screenX, screenY, clientX, clientY, ctrlKey, 
	     //           altKey, shiftKey, metaKey, button, relatedTarget);

	     var simulatedEvent = document.createEvent("MouseEvent");
	     simulatedEvent.initMouseEvent(type, true, true, window, 1, 
	                               first.screenX, first.screenY, 
	                               first.clientX, first.clientY, false, 
	                               false, false, false, 0/*left*/, null);

	  	first.target.dispatchEvent(simulatedEvent);
	 }

	 function init() //loaded on <body>
	 {
	     document.addEventListener("touchstart", touchHandler, true);//with 'true' means capturing
	     document.addEventListener("touchmove", touchHandler, true);
	     document.addEventListener("touchend", touchHandler, true);
	     document.addEventListener("touchcancel", touchHandler, true);    
	 }