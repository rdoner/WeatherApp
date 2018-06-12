import axios from 'axios';

const API_KEY = 'df7bbcc50ca29913e364e4584adcbfa7';
//const API_KEY = 'c0be993379f815c0843ebc2443387a5a';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}