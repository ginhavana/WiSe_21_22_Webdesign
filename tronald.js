let celeb = document.getElementById('celeb');
let quote = document.getElementById('quote');
let btn = document.getElementById('btn');
var ask;

function ask()
{
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
        alert(ask.responseText);
      } 
	  else 
	  {
        alert('There was a problem with the request.');
      }
    }
}

btn.addEventListener('click', ask);