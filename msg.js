const x = document.getElementById("input");;
function send()
{
	//$('#input').val('');
	document.getElementById("show").innerHTML = x.value;
	document.getElementById("input").value = '';
	//$('#input').val('');
}

x.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("btn").click();
	}
});