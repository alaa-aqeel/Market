import Vue from 'vue'
import Vuex from 'vuex'
import axios from "./plugns/axios.js"; 

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

    user: {}, // user data
    isLogin: false, 
    loading: false,
    routerLoading: false
  },
  mutations: {
    SET_USER(state, user){ // set user data 

        state.user = user
        state.isLogin = !!user.id
    },
    SET_TOKEN(state, tk){ // strage access token 

        state.token = tk
        localStorage.setItem('user-token', tk);
        axios.defaults.headers.common["Authorization"]  = `Bearer ${tk}`;
    },
    DELETE_TOKEN(){ // remove access token 
        
        localStorage.removeItem('user-token');
        axios.defaults.headers.common["Authorization"]  = `Bearer `;
    },
    SET_LOADING(state, status){ // loading

        state.loading = status
    },
    SET_ROUTER_LOADING(state, status){ // loading

        state.routerLoading = status
    }
  },
  actions:{
    routerLoading({commit}, status){

        commit("SET_ROUTER_LOADING", status)
    },
    login({commit}, data){
        // LOGIN
        return axios.post("/login", data)
                .then( resp=>{

                    commit("SET_TOKEN", resp.data.token)
                    return resp
                })
    },
    register({commit}, data){
        return this.$http.post('/register', data).then( resp=>{
            this.login({commit}, {
                    username: data.email,
                    password: data.password 
                });

            commit("SET_USER", resp.data.data);
            return resp 
        });
    },
    logout({commit}){
        // LOGOUT 
        commit("SET_LOADING", true)
        return axios.post("/user/logout")
                .then( resp=> {

                    commit("SET_USER", {})
                    commit("DELETE_TOKEN")
                    commit("SET_LOADING", false)
                    return resp
                }).catch( ()=> {commit("SET_LOADING", false)}) 
    },
    user({commit}){
        // Get user info 
        commit("SET_LOADING", true)
        return axios.get("user/profile")
                .then( resp => {
                    commit("SET_USER", resp.data.data)
                    commit("SET_LOADING", false)
                    return resp.data.data
                }).catch( ()=> {

                    commit("DELETE_TOKEN")
                    commit("SET_LOADING", false)
                }) 
    },
    loadToken({commit}) {
        // get access Token form storage
        let tk = localStorage.getItem('user-token')
        if (tk){ commit("SET_TOKEN", tk); }
        return tk
    },
    addItem({commit, state}, data) {
        let url = "user/items"
        if (!state.isLogin) {
            url = "/items"
        }
        return axios.post(url, data)
    },
    updateProfileUser({commit}, data) {

        return axios.put("/user/profile", data)
                .then( resp => {

                    commit("SET_USER", resp.data.data)
                    return resp 
                })
    }
  },
})


export default store;