"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./source/js/index.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./source/js/index.js":
  /*!****************************!*\
    !*** ./source/js/index.js ***!
    \****************************/

  /*! no exports provided */

  /***/
  function sourceJsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_delete_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/delete-link */ \"./source/js/parts/delete-link.js\");\n/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/slider */ \"./source/js/parts/slider.js\");\n/* harmony import */ var _parts_init_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/init-theme */ \"./source/js/parts/init-theme.js\");\n/* harmony import */ var _parts_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/lazyload */ \"./source/js/parts/lazyload.js\");\n/* harmony import */ var _parts_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/popup */ \"./source/js/parts/popup.js\");\n/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/form */ \"./source/js/parts/form.js\");\n/* harmony import */ var _parts_local_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/local.js */ \"./source/js/parts/local.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n$(document).ready(() => {\r\n    Object(_parts_delete_link__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    Object(_parts_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    Object(_parts_init_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    Object(_parts_lazyload__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    Object(_parts_popup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n    Object(_parts_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n    Object(_parts_local_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n});\n\n//# sourceURL=webpack:///./source/js/index.js?");
    /***/
  },

  /***/
  "./source/js/parts/delete-link.js":
  /*!****************************************!*\
    !*** ./source/js/parts/delete-link.js ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsDeleteLinkJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deleteLink; });\nfunction deleteLink() {\r\n    var fetchLink = $('.js-header').find('.header__logo').attr(\"href\", \"#\");\r\n}\n\n//# sourceURL=webpack:///./source/js/parts/delete-link.js?");
    /***/
  },

  /***/
  "./source/js/parts/form.js":
  /*!*********************************!*\
    !*** ./source/js/parts/form.js ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsFormJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handleFormSubmit; });\nfunction handleFormSubmit() {\r\n\r\n    $('.js-checkout').on('submit', e => {\r\n        e.preventDefault();\r\n\r\n        const $form = $(e.target);\r\n\r\n        const params = {\r\n            formData: $form.serializeArray()\r\n        };\r\n\r\n        const callbackSuccess = () => {\r\n            $('.header-checkout--success, .footer-checkout, .main-checkout__wrapper').toggleClass(\"hidden\");\r\n        }\r\n\r\n        const callbackError = errors => {\r\n            console.group('Ошибка');\r\n            errors.forEach(error => {\r\n                console.log(`${ error.fieldName }: ${ error.message}`)\r\n            });\r\n            console.groupEnd();\r\n        };\r\n\r\n        window.API.onFormSubmit(params, callbackSuccess, callbackError)\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./source/js/parts/form.js?");
    /***/
  },

  /***/
  "./source/js/parts/init-theme.js":
  /*!***************************************!*\
    !*** ./source/js/parts/init-theme.js ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsInitThemeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initTheme; });\nfunction initTheme() {\r\n    $('.js-promo-slider').on(\"afterChange\", function() {\r\n\r\n        var colorTheme = $('.slick-active').attr('data-theme');\r\n        \r\n        if (colorTheme == \"dark\") {\r\n            $('.header').removeClass('header--light').addClass('header--dark');\r\n            $('.promo-slider__slogan').removeClass('promo-slider__slogan--light')\r\n                .addClass('promo-slider__slogan--dark');\r\n        } else {\r\n            $('.header').removeClass('header--dark').addClass('header--light');\r\n            $('.promo-slider__slogan').removeClass('promo-slider__slogan--dark')\r\n                .addClass('promo-slider__slogan--light');\r\n        }\r\n    }\r\n)}\r\n\n\n//# sourceURL=webpack:///./source/js/parts/init-theme.js?");
    /***/
  },

  /***/
  "./source/js/parts/lazyload.js":
  /*!*************************************!*\
    !*** ./source/js/parts/lazyload.js ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsLazyloadJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lazyLoad; });\nfunction lazyLoad() {\r\n\r\n    $('.js-lazy').each((index, el) => {\r\n        const $image = $(el);\r\n        const realSrc = $image.attr('data-srcset');\r\n    \r\n        $image.attr('srcset', realSrc);\r\n      });\r\n    \r\n}\n\n//# sourceURL=webpack:///./source/js/parts/lazyload.js?");
    /***/
  },

  /***/
  "./source/js/parts/local.js":
  /*!**********************************!*\
    !*** ./source/js/parts/local.js ***!
    \**********************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsLocalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return saveToLocalStorage; });\nfunction saveToLocalStorage() {\r\n\r\n    let input = $('.js-field');\r\n    console.log(input);\r\n\r\n    $.each(input, (index, value) => {\r\n        value.value= localStorage.getItem(value.id);\r\n        value.oninput = () => {\r\n            localStorage.setItem(value.id, value.value)\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./source/js/parts/local.js?");
    /***/
  },

  /***/
  "./source/js/parts/popup.js":
  /*!**********************************!*\
    !*** ./source/js/parts/popup.js ***!
    \**********************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsPopupJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initPopup; });\nfunction initPopup() {\r\n\r\n    $('.js-popup-opener').magnificPopup({\r\n        type: 'inline',\r\n        fixedContentPos: true,\r\n    });\r\n    \r\n}\r\n\n\n//# sourceURL=webpack:///./source/js/parts/popup.js?");
    /***/
  },

  /***/
  "./source/js/parts/slider.js":
  /*!***********************************!*\
    !*** ./source/js/parts/slider.js ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function sourceJsPartsSliderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initSliders; });\nfunction initPromoSlider() {\r\n    $('.js-promo-slider').slick({\r\n    });\r\n}\r\n\r\nfunction initItemSlider() {\r\n    $('.js-item-slider').slick({\r\n        slidesToShow: 1,\r\n        slidesToScroll: 1,\r\n        arrows: false,\r\n        fade: true,\r\n        asNavFor: '.js-item-preview',\r\n        zIndex: 1,\r\n    });\r\n\r\n    $('.js-item-preview').slick({\r\n        slidesToShow: 4,\r\n        slidesToScroll: 1,\r\n        asNavFor: '.js-item-slider',\r\n        focusOnSelect: true,\r\n        useTransform: false,     \r\n    });\r\n}\r\n\r\nfunction initReccomendSlider() {\r\n    $('.js-item-recommend').slick({\r\n        slidesToShow: 4,\r\n        slidesToScroll: 1,\r\n        arrows: true,\r\n        responsive: [\r\n            {\r\n                breakpoint: 1190,\r\n                settings: {\r\n                    slidesToShow: 1,\r\n                    slidesToScroll: 1,\r\n                }\r\n            }\r\n        ]      \r\n    });\r\n}\r\n\r\nfunction initSliders() {\r\n    initPromoSlider();\r\n    initItemSlider();\r\n    initReccomendSlider();\r\n}\r\n  \n\n//# sourceURL=webpack:///./source/js/parts/slider.js?");
    /***/
  }
  /******/

});