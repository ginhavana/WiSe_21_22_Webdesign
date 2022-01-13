let target = document.getElementById('target');
let quote = document.getElementById('quote');
let btn = document.getElementById('btn');
var ask;

function ask()
{
	// fetch('https://api.tronalddump.io/random/quote')
		// .then(response => response.json())
		// .then(data => alert(data.value));

	ask = new XMLHttpRequest();
	ask.onreadystatechange = alertContents;
	ask.open("GET","https://api.tronalddump.io/random/quote",true);
	ask.send();
}

function alertContents()
{
    if (ask.readyState === XMLHttpRequest.DONE)
	{
		if (ask.status === 200)
		{
			var jsonResponse = JSON.parse(ask.responseText);
			target.textContent = jsonResponse.tags;
			quote.textContent = jsonResponse.value;
		} 
		else 
		{
			alert('There was a problem with the request.');
		}
    }
}

btn.addEventListener('click', ask);