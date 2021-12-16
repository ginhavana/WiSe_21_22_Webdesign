// set a var with 3 colors as 3 items
var colors = ["red", "blue", "yellow"];
	
function nextColor()
{
	// choose a color by returning integer number of product
	// of 3 and a number between 0 and 1
	selectedColor = colors[Math.floor(Math.random()*colors.length)];
	
	// change body style backgroundColor with the choosen text
	document.body.style.backgroundColor = selectedColor;
	// nextColor(false);
}

let next = document.getElementById("next");
next.addEventListener('click',nextColor);