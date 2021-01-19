(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router.js */ "./resources/js/router.js");
/* harmony import */ var _plugns_vuetify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/plugns/vuetify.js */ "./resources/js/plugns/vuetify.js");
/* harmony import */ var _prototype_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/prototype.js */ "./resources/js/prototype.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store.js */ "./resources/js/store.js");
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// require('./bootstrap');





vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.productionTip = false;
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_prototype_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

var App = function App() {
  return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! @/App.vue */ "./resources/js/App.vue"));
};

var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  components: {
    App: App
  },
  el: '#app',
  router: _router_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  vuetify: _plugns_vuetify_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  store: _store_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  data: function data() {
    return {
      loading: true
    };
  },
  mounted: function mounted() {
    // load token
    if (localStorage.getItem('user-token', false)) {
      _store_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch('loadToken');
      _store_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch('user');
    }

    this.loading = false;
  }
});

/***/ }),

/***/ "./resources/js/plugns/axios.js":
/*!**************************************!*\
  !*** ./resources/js/plugns/axios.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var http = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "".concat("http://127.0.0.1:8000", "/api/"),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // "Authorization" : `Bearer ${localStorage.getItem("tk")}`,
    'X-Requested-With': 'XMLHttpRequest'
  }
});
http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response) {
    console.log(error.response);
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (http);

/***/ }),

/***/ "./resources/js/plugns/vuetify.js":
/*!****************************************!*\
  !*** ./resources/js/plugns/vuetify.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["default"]({
  icons: {
    iconfont: 'fa4',
    values: {}
  },
  rtl: true // Set Diraction RightToLeft

}));

/***/ }),

/***/ "./resources/js/prototype.js":
/*!***********************************!*\
  !*** ./resources/js/prototype.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugns_axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/plugns/axios.js */ "./resources/js/plugns/axios.js");
 // Install vue-prototype 

/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(app) {
    app.prototype.$http = _plugns_axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

    app.prototype.$priceformat = function (price) {
      // Create our number formatter.
      var formatter = new Intl.NumberFormat('ar-IQ', {
        style: 'currency',
        currency: "IQD"
      });
      return formatter.format(price);
    };

    app.prototype.$env = {
      joinUrl: function joinUrl(path) {
        return new URL(path, "http://127.0.0.1:8000").toString();
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/router.js":
/*!********************************!*\
  !*** ./resources/js/router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store.js */ "./resources/js/store.js");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  routes: [{
    name: 'home',
    path: "/",
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! @/views/Home.vue */ "./resources/js/views/Home.vue"));
    }
  }, {
    name: 'items',
    path: "/items",
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! @/views/UserItems.vue */ "./resources/js/views/UserItems.vue"));
    },
    meta: {
      auth: true
    }
  }, {
    name: 'profile',
    path: "/profile",
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! @/views/Profile.vue */ "./resources/js/views/Profile.vue"));
    },
    meta: {
      auth: true
    }
  }, {
    name: 'signin',
    path: "/signin",
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! @/views/SignIn.vue */ "./resources/js/views/SignIn.vue"));
    },
    meta: {
      guest: true
    }
  }, {
    name: 'signup',
    path: "/signup",
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! @/views/SignUP.vue */ "./resources/js/views/SignUP.vue"));
    },
    meta: {
      guest: true
    }
  }, {
    name: 'notfound',
    path: "*",
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! @/views/error/NotFound.vue */ "./resources/js/views/error/NotFound.vue"));
    }
  }]
});
router.afterEach(function () {
  setTimeout(function () {
    _store_js__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('routerLoading', false);
  }, 1000);
});
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.auth;
  })) {
    if (localStorage.getItem('user-token') == null) {
      next({
        name: 'signin',
        params: {
          nextUrl: to.fullPath
        }
      });
    } else {
      if (to.matched.some(function (record) {
        return record.meta.admin;
      })) {
        _store_js__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('user').then(function (user) {
          if (user.is_admin) {
            next();
          } else {
            next({
              name: 'home'
            });
          }
        });
      } else {
        next();
      }
    }
  } else if (to.matched.some(function (record) {
    return record.meta.guest;
  })) {
    if (localStorage.getItem('user-token')) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }

  _store_js__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('routerLoading', true);
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _plugns_axios_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugns/axios.js */ "./resources/js/plugns/axios.js");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    user: {},
    // user data
    isLogin: false,
    loading: false,
    routerLoading: false
  },
  mutations: {
    SET_USER: function SET_USER(state, user) {
      // set user data 
      state.user = user;
      state.isLogin = !!user.id;
    },
    SET_TOKEN: function SET_TOKEN(state, tk) {
      // strage access token 
      state.token = tk;
      localStorage.setItem('user-token', tk);
      _plugns_axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers.common["Authorization"] = "Bearer ".concat(tk);
    },
    DELETE_TOKEN: function DELETE_TOKEN() {
      // remove access token 
      localStorage.removeItem('user-token');
      _plugns_axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers.common["Authorization"] = "Bearer ";
    },
    SET_LOADING: function SET_LOADING(state, status) {
      // loading
      state.loading = status;
    },
    SET_ROUTER_LOADING: function SET_ROUTER_LOADING(state, status) {
      // loading
      state.routerLoading = status;
    }
  },
  actions: {
    routerLoading: function routerLoading(_ref, status) {
      var commit = _ref.commit;
      commit("SET_ROUTER_LOADING", status);
    },
    login: function login(_ref2, data) {
      var commit = _ref2.commit;
      // LOGIN
      return _plugns_axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].post("/login", data).then(function (resp) {
        commit("SET_TOKEN", resp.data.token);
        return resp;
      });
    },
    register: function register(_ref3, data) {
      var _this = this;

      var commit = _ref3.commit;
      return this.$http.post('/register', data).then(function (resp) {
        _this.login({
          commit: commit
        }, {
          username: data.email,
          password: data.password
        });

        commit("SET_USER", resp.data.data);
        return resp;
      });
    },
    logout: function logout(_ref4) {
      var commit = _ref4.commit;
      // LOGOUT 
      commit("SET_LOADING", true);
      return _plugns_axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user/logout").then(function (resp) {
        commit("SET_USER", {});
        commit("DELETE_TOKEN");
        commit("SET_LOADING", false);
        return resp;
      })["catch"](function () {
        commit("SET_LOADING", false);
      });
    },
    user: function user(_ref5) {
      var commit = _ref5.commit;
      // Get user info 
      commit("SET_LOADING", true);
      return _plugns_axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get("user/profile").then(function (resp) {
        commit("SET_USER", resp.data.data);
        commit("SET_LOADING", false);
        return resp.data.data;
      })["catch"](function () {
        commit("DELETE_TOKEN");
        commit("SET_LOADING", false);
      });
    },
    loadToken: function loadToken(_ref6) {
      var commit = _ref6.commit;
      // get access Token form storage
      var tk = localStorage.getItem('user-token');

      if (tk) {
        commit("SET_TOKEN", tk);
      }

      return tk;
    },
    addItem: function addItem(_ref7, data) {
      var commit = _ref7.commit,
          state = _ref7.state;
      var url = "user/items";

      if (!state.isLogin) {
        url = "/items";
      }

      return _plugns_axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].post(url, data);
    },
    updateProfileUser: function updateProfileUser(_ref8, data) {
      var commit = _ref8.commit;
      return _plugns_axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].put("/user/profile", data).then(function (resp) {
        commit("SET_USER", resp.data.data);
        return resp;
      });
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/d/projects/fridayMarket/project/resources/js/app.js */"./resources/js/app.js");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);