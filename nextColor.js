var colors = ["red", "blue", "yellow"];
	
function nextColor()
{
	selectedColor = colors[Math.floor(Math.random()*colors.length)];
	document.body.style.backgroundColor = selectedColor;
	// nextColor(false);
}