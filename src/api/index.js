import axios from 'axios';

// init axios

function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

export const api = createInstance();
