import axios from "axios";


const http = axios.create({
	baseURL: `${process.env.MIX_APP_URL}/api/`,
	headers: {
		'Accept': 'application/json', 
		'Content-Type'  : 'application/json',
		// "Authorization" : `Bearer ${localStorage.getItem("tk")}`,
		'X-Requested-With' : 'XMLHttpRequest'
	}
});

http.interceptors.response
	.use(function (response) {
		
		return response;
	}, function (error) {

		if(error.response){

			console.log(error.response)
		}
		return Promise.reject(error);
	});

export default http;