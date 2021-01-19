(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
/* harmony import */ var vuetify_lib_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/directives */ "./node_modules/vuetify/lib/directives/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var header = function header() {
  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @/components/layout/Header.vue */ "./resources/js/components/layout/Header.vue"));
};

var Footer = function Footer() {
  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! @/components/layout/Footer.vue */ "./resources/js/components/layout/Footer.vue"));
}; // const { VBtn, VContainer, VMain, VApp, VIcon } = () => import('vuetify/lib') 




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VBtn"],
    VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VContainer"],
    VMain: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VMain"],
    VApp: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VApp"],
    VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_0__["VIcon"],
    "m-header": header,
    "m-footer": Footer
  },
  directives: {
    Scroll: vuetify_lib_directives__WEBPACK_IMPORTED_MODULE_1__["Scroll"]
  },
  name: 'App',
  data: function data() {
    return {
      fab: false,
      icons: ['mdi-home', 'mdi-email', 'mdi-calendar', 'mdi-delete']
    };
  },
  methods: {
    onScroll: function onScroll(e) {
      if (typeof window === 'undefined') return;
      var top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop: function toTop() {
      this.$vuetify.goTo(0);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=template&id=f348271a&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "v-app",
        [
          _c("m-header"),
          _vm._v(" "),
          _c(
            "v-main",
            [
              _c("v-container", [_c("router-view")], 1),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  directives: [
                    {
                      name: "scroll",
                      rawName: "v-scroll",
                      value: _vm.onScroll,
                      expression: "onScroll"
                    },
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.fab,
                      expression: "fab"
                    }
                  ],
                  staticClass: "ma-4",
                  attrs: {
                    fixed: "",
                    bottom: "",
                    fab: "",
                    dark: "",
                    elevation: "2",
                    color: "#4e5cc1d4"
                  },
                  on: { click: _vm.toTop }
                },
                [_c("v-icon", [_vm._v("fa-arrow-up")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("m-footer")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/App.vue":
/*!******************************!*\
  !*** ./resources/js/App.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f348271a& */ "./resources/js/App.vue?vue&type=template&id=f348271a&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./resources/js/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App.vue?vue&type=template&id=f348271a&":
/*!*************************************************************!*\
  !*** ./resources/js/App.vue?vue&type=template&id=f348271a& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f348271a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=template&id=f348271a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);