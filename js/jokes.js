const url = "https://official-joke-api.appspot.com/random_ten";

async function getJoke() {
	const type = document.querySelector(".joke details");
	try {
		const respons = await fetch(url);
		const results = await respons.json();

		console.log(results);

		type.innerHTML = results.type;
	} catch {}
}
getJoke();

/*async function getJokes() {
	const respons = await fetch(url);
	const results = await respons.json();

	displayJokes(results);
	 console.log(results); 
}

getJokes();

function displayJokes(joke) {
	const container = document.querySelector(".container");

	let html = "";

	for (let i = 0; i < joke.length; i++) {
		 console.log(joke[i].punchline); 

		console.log("html", html);

		html += `<div><p>${joke[i].setup}</p></div>`;
		html += `<div><p>${joke[i].punchline}</p></div>`;
	}
	container.innerHTML = html;
}*/
