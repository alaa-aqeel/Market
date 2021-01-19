/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

import Vue from 'vue';
import router from "@/router.js";
import vuetify from "@/plugns/vuetify.js";
import prototype from "@/prototype.js";
import store from "@/store.js";


Vue.config.productionTip = false;

Vue.use(prototype);

const App = () => import("@/App.vue");

const app = new Vue({
    components: {
        App
    },
    el: '#app',
    router,
    vuetify,
    store,
    data(){
        return {

            loading: true
        }
    },
    mounted() {
        // load token
        if (localStorage.getItem('user-token', false)){

            store.dispatch('loadToken')
            store.dispatch('user')
        }  
        this.loading = false
    },
});