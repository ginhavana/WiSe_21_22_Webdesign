// set a var with 3 colors as 3 items
let colors = ["red", "blue", "yellow"];
	
function nextColor()
{
	// choose a color by returning integer number of product
	// of 3 and a number between 0 and 1
	selectedColor = colors[Math.floor(Math.random()*colors.length)];
	
	// change body style backgroundColor with the choosen text
	document.body.style.backgroundColor = selectedColor;
	// nextColor(false);
}


var next = document.getElementById("next");
// create event 'click' for Element with id 'next' that fire function 'nextColor'
next.addEventListener('click',nextColor);