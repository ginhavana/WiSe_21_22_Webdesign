var x;
function send()
{
	x = document.getElementById("input");
	//$('#input').val('');
	document.getElementById("show").innerHTML = x.value;
	document.getElementById("input").value = '';
	//$('#input').val('');
}

var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("btn").click();
	}
});