async function getData(){
const url = 'https://spotify23.p.rapidapi.com/search/?q=ariana&type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd10b18052amsh615ed0f0061804bp1d1306jsn7e45e02497c0',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}}
getData();