import axios from "axios";


const http = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/',
	headers: {
		
		'Content-Type'  : 'application/json',
		"Authorization" : `Bearer ${localStorage.getItem("tk")}`,
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