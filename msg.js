const input = document.getElementById("input");
const btn = document.getElementById("btn");

function send()
{
	// show input
	document.getElementById("show").innerHTML = input.value;
	// and delete the field
	document.getElementById("input").value = '';
}
// create event 'click' for Element with id 'btn' that fire function 'send'
btn.addEventListener('click',send);

// create event 'keyup' with Enter for Element with id 'input' that fire function 'send'
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) { //keyCode 13 is key Enter
		event.preventDefault();
		document.getElementById("btn").click();
	}
});