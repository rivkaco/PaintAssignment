function init() {
	createMenu();
	initCanvas();
}
var BIGCLICK= 0;

var selectedColour= 0;
	var colours= ["#E32929", "pink", "#F2A140","#438861", "#6f4ac4", "white","salmon"];

function createMenu(){
	var menu= document.getElementById('menu');

		for(var i =0; i<colours.length; i++) {
			
			var realColour= document.createElement('div');
			realColour.style.backgroundColor= colours[i];
			realColour.classList.add("colour");
			realColour.classList.add("clickable");
			realColour.id = colours[i];
			realColour.addEventListener("click", selectColour);
			menu.appendChild(realColour);
		}	
		var erase= document.createElement('img');

			erase.src= "http://www.freeiconspng.com/uploads/eraser-icon-17.png"
			erase.classList.add("colour");
			erase.classList.add("clickable");
					erase.addEventListener("click", clear);
			menu.appendChild(erase);

}
	

function selectColour(e) {
	selectedColour= e.target.id;
	console.log("this is e:", e.target.id)
}
	
	
function initCanvas() { 
	var c = document.getElementById("canvas");
	for (var i =0; i< 50; i++) {
		for (var j= 0; j< 50; j++){
			var pixel = document.createElement("div");
			pixel.className = "pixel";
			pixel.style.left= i*10 + "px";
			pixel.style.top = j*10 + "px";
			pixel.style.height = "10px";
			pixel.style.width = "10px";
			c.appendChild(pixel);
				pixel.addEventListener("mousedown", clickDown);
				pixel.addEventListener("mouseup", clickUp);
				pixel.addEventListener( "mousemove", addcol);

		}
	}
}

function clear(){
		var cleanPix = document.getElementsByClassName("pixel");
		for (var i =0; i< cleanPix.length; i++) {
		cleanPix[i].style.backgroundColor= "white";
		}
	}



function clickDown(e) {
	BIGCLICK= 1;

}

function clickUp(e) {
	BIGCLICK= 0;
}
function addcol(e) {
	
	if (BIGCLICK==1) {
if (selectedColour == 0) {
		alert("please select a colour")
		return;
	}

	var pixel= e.target;
	console.log(pixel);
	
	console.log(selectedColour);
	pixel.style.background= selectedColour;
	}

}
	// var newColour= document.createElement("div");
	// newColour.classList.add("hello");
	// c.appendChild(newSticker);

// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');
 
// var painting = document.getElementById('paint');
// var paint_style = getComputedStyle(painting);
// canvas.width = parseInt(paint_style.getPropertyValue('width'));
// canvas.height = parseInt(paint_style.getPropertyValue('height'));

// var mouse = {x: 0, y: 0};
 
// canvas.addEventListener('mousemove', function(e) {
//   mouse.x = e.pageX - this.offsetLeft;
//   mouse.y = e.pageY - this.offsetTop;
// }, false);

// canvas.addEventListener('mousedown', function(e) {
//     ctx.beginPath();
//     ctx.moveTo(mouse.x, mouse.y);
 
//     canvas.addEventListener('mousemove', onPaint, false);
// }, false);
 
// canvas.addEventListener('mouseup', function() {
//     canvas.removeEventListener('mousemove', onPaint, false);
// }, false);
 
// var onPaint = function() {
//     ctx.lineTo(mouse.x, mouse.y);
//     ctx.stroke();
// };