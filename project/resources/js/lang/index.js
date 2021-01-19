
// Install vue-prototype 
export default {
	install: (app) => {
		app.prototype.$lang = {
            messages: {},
            validate: {}
        };
	}
}