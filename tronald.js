let celeb = document.getElementById('celeb');
let quote = document.getElementById('quote');
var ask;

function ask()
{
	ask = new XMLHttpRequest();
	
	ask.onreadystatechange = alertContents;
	ask.open('GET','tronalddump.api');
	ask.send();
}