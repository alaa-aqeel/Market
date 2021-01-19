import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "@/store.js";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name:'home',
            path:"/",
            component: () => import("@/views/Home.vue"),
            
        },
        {
            name:'items',
            path:"/items",
            component: () => import("@/views/UserItems.vue"),
            meta: {
                auth: true
            }
        },
        {   
            name:'profile',
            path:"/profile",
            component: () => import("@/views/Profile.vue"),
            meta: {
                auth: true
            }
        },
        {   
            name:'signin',
            path:"/signin",
            component: () => import("@/views/SignIn.vue"),
            meta: {
                guest: true
            }
        },
        
        {   
            name:'signup',
            path:"/signup",
            component: () => import("@/views/SignUP.vue"),
            meta: {
                guest: true
            }
        },
        {   
            name:'notfound',
            path:"*",
            component: () => import("@/views/error/NotFound.vue"),
        },
    ],  
});

router.afterEach( ()=>{
    setTimeout( ()=> {

        store.dispatch('routerLoading', false)
    }, 1000)
});
router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.auth)) {
        if (localStorage.getItem('user-token') == null){
            next({
                name: 'signin',
                params: { nextUrl: to.fullPath }
            })
        } else {
            if (to.matched.some(record => record.meta.admin)) {
                store.dispatch('user').then( user => {
                    if(user.is_admin){
                        next()
                    } else { 
                        next({name: 'home'}) 
                    }
                })
            } else { next() }
        }
    }  else if (to.matched.some(record => record.meta.guest)) { 
        if (localStorage.getItem('user-token')){
            next(
                {path: "/"
            })
        } else { next() }
    } else { next() }

    store.dispatch('routerLoading', true)
});

export default router;