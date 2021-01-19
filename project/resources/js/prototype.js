import axios from "@/plugns/axios.js"; 

// Install vue-prototype 
export default {
	install: (app) => {
		app.prototype.$http = axios;
		app.prototype.$priceformat  = (price) =>{
		
			// Create our number formatter.
			var formatter = new Intl.NumberFormat('ar-IQ', {
				style: 'currency',
				currency: "IQD",
			});
  
			return formatter.format(price); 
		}

		
		app.prototype.$env = {

			joinUrl: (path)=>{
				
				return new URL(path, process.env.MIX_APP_URL).toString()
			}
		}
	}
}