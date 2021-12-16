let quotes = ["The Way Get Started Is To Quit Talking And Begin Doing.",
			"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
			"Don&apos;t Let Yesterday Take Up Too Much Of Today.",
			"You Learn More From Failure Than From Success. Don&apos;t Let It Stop You. Failure Builds Character.",
			"It&apos;s Not Whether You Get Knocked Down, It&apos;s Whether You Get Up.",
			"Live as if you were to die tomorrow. Learn as if you were to live forever",
			"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
			"Strive not to be a success, but rather to be of value.",
			"I attribute my success to this: I never gave or took any excuse.",
			"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed.",
			"Every strike brings me closer to the next home run.",
			"Life is what happens to you while you&apos;re busy making other plans.",
			"We become what we think about."];
	
let authors = ["Walt Disney", "Winston Churchill", "Will Rogers", "Alexander Dotsenko", "Vince Lombardi", "Mahatma Gandhi", "Martin Luther King Jr", "Albert Einstein",
			"Florence Nightingale", "Michael Jordan", "Babe Ruth", "John Lennon", "Earl Nightingale"]

let colors = ["yellow", "red", "blue", "green", "purple", "aqua", "#ff3399", "#99cc00", "#00ffcc", "#ccff99", "#ff33cc", "#3333cc", "#ffcccc"]
	
function nextQuote()
{
	const x = Math.floor(Math.random()*quotes.length);
	selectedQuote = quotes[x];
	selectedAuthor = authors[x];
	document.getElementById("quote").innerHTML = selectedQuote;
	document.body.style.backgroundColor = colors[x];
	document.getElementById("author").innerHTML = selectedAuthor;
	document.getElementById("quote").style.backgroundColor = colors[x-1];
		// nextColor(false);
}

const next = document.getElementById("next");
next.addEventListener('click', nextQuote);