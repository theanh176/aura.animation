import axios from "axios";

export default function callApi(endpoint, method = "GET", data, headers) {
	return axios({
		method: method,
		url: `https://api.fostech.vn/${endpoint}`,
		data: data,
		headers: headers,
	})
		.then((res) => ({ success: true, ...res }))
		.catch((error) => {
			if (error.response) {
				return error.response.data;
			} else if (error.request) {
				// console.error(error.request);
			} else {
				// console.error(error.message);
			}
			// console.error(error.config);
		});
}
