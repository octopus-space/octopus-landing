"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[717],{

/***/ 93417:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ResponPopup; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js + 2 modules
var grid = __webpack_require__(74250);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 28 modules
var modal = __webpack_require__(97280);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 9 modules
var drawer = __webpack_require__(85265);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
;// CONCATENATED MODULE: ./src/components/ResponPopup/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/components/ResponPopup/index.tsx






var useBreakpoint = grid/* default */.ZP.useBreakpoint;
var Popup = function Popup(_ref) {
  var show = _ref.show,
    modalWidth = _ref.modalWidth,
    onClose = _ref.onClose,
    children = _ref.children,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? false : _ref$closable,
    _ref$maskClosable = _ref.maskClosable,
    maskClosable = _ref$maskClosable === void 0 ? true : _ref$maskClosable,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$bodyStyle = _ref.bodyStyle,
    bodyStyle = _ref$bodyStyle === void 0 ? {} : _ref$bodyStyle;
  var _useBreakpoint = useBreakpoint(),
    md = _useBreakpoint.md;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: md ? /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
      open: show,
      onCancel: onClose,
      width: modalWidth || 420,
      title: title,
      footer: null,
      closable: closable,
      maskClosable: maskClosable,
      style: objectSpread2_default()({
        padding: 0
      }, style),
      className: 'hayPopup' + ' ' + className,
      getContainer: false,
      children: children
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
      title: title,
      open: show,
      placement: "bottom",
      onClose: onClose,
      closable: closable,
      maskClosable: maskClosable,
      style: objectSpread2_default()({
        height: 'auto'
      }, style),
      bodyStyle: objectSpread2_default()({
        height: 'auto',
        maxHeight: '90vh',
        padding: 10
      }, bodyStyle),
      contentWrapperStyle: {
        height: 'auto'
      },
      children: children
    })
  });
};
/* harmony default export */ var ResponPopup = (Popup);

/***/ }),

/***/ 68240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 33 modules
var _umi_production_exports = __webpack_require__(82195);
;// CONCATENATED MODULE: ./src/layouts/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
;// CONCATENATED MODULE: ./src/assets/logo.svg
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgLogo = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 212.186, height: 35 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { x1: 0.5, y1: 0, x2: 0.5, y2: 1, id: "logo_svg__a" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#09E7F5" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#4E52FF" }))), /* @__PURE__ */ React.createElement("path", { d: "M30.836 18.305v-5.612l-.001-.048q-.01-.187-.085-.357-.075-.17-.207-.303-.14-.14-.325-.216-.183-.076-.382-.076-.092 0-.182.016-.086.016-.167.046-.082.03-.157.075-.075.044-.141.1-.066.056-.122.123-.056.067-.099.142-.043.076-.073.158-.03.081-.044.167-.015.086-.015.173v5.612q0 .51-.382.876-.397.382-.967.382h-.377q-.569 0-.967-.382-.38-.367-.38-.876v-7.319q0-3.194-2.344-5.448Q21.092 3.3 17.811 3.3q-3.282 0-5.609 2.238Q9.86 7.792 9.86 10.986v7.319q0 .51-.381.876-.398.382-.967.382-.57 0-.967-.382-.381-.367-.381-.876v-5.612q0-.099-.02-.196-.019-.096-.057-.187-.037-.091-.092-.173-.055-.082-.124-.152-.07-.07-.152-.124-.082-.055-.173-.092-.09-.038-.187-.057-.097-.02-.195-.02-.099 0-.195.02-.097.019-.188.057-.091.037-.173.092-.082.055-.152.124-.07.07-.124.152-.055.082-.092.173-.038.09-.057.187-.02.097-.02.196v5.612q0 1.36.995 2.317.979.941 2.354.941t2.353-.94q.995-.958.995-2.318v-7.319q0-2.343 1.73-4.007Q15.335 5.3 17.81 5.3q2.476 0 4.222 1.68 1.73 1.663 1.73 4.006v7.319q0 1.36.994 2.317.978.941 2.353.941h.377q1.375 0 2.354-.94.995-.958.995-2.318Zm-10.9-2.468q.787-.819.787-1.97 0-1.15-.787-1.968-.8-.831-1.937-.831t-1.937.83q-.787.819-.787 1.97 0 1.15.787 1.969.8.83 1.937.83 1.138 0 1.937-.83Zm-1.153-2.829q.34.354.34.86t-.34.86q-.327.34-.784.34-.456 0-.784-.34-.34-.354-.34-.86t.34-.86q.328-.34.784-.34.457 0 .784.34Zm-2.169 6.479v12q0 .098.02.195.019.097.056.188.038.09.093.172.055.082.124.152.07.07.152.124.082.055.173.093.09.037.187.057.097.019.195.019.099 0 .195-.02.097-.019.188-.056.09-.038.173-.093.082-.054.151-.124.07-.07.125-.152.054-.081.092-.172.038-.091.057-.188.02-.097.02-.195v-12q0-.099-.02-.195-.02-.097-.057-.188-.038-.09-.092-.173-.055-.082-.125-.151-.07-.07-.151-.125-.082-.054-.173-.092-.091-.038-.188-.057-.096-.02-.195-.02-.098 0-.195.02-.096.02-.187.057-.091.038-.173.092-.082.055-.152.125-.07.07-.124.151-.055.082-.093.173-.037.091-.056.188-.02.096-.02.195Zm-3.81 3.577v6.505q0 .099.02.195.018.097.056.188.038.09.092.173.055.082.125.151.07.07.151.125.082.054.173.092.091.038.188.057.096.02.195.02.098 0 .195-.02t.188-.057q.09-.038.173-.092.081-.055.151-.125.07-.07.124-.151.055-.082.093-.173.038-.091.057-.188.019-.096.019-.195v-9.822q0-.385-.247-.679-.216-.257-.542-.343-.34-.089-.664.042-.372.15-.547.51-1.235 2.45-2.556 3.613-.971.856-3.528 1.657-1.081.34-1.75 1.249-.67.91-.67 2.04 0 1.43 1.019 2.442 1.016 1.009 2.45 1.009h.67q1.435 0 2.451-1.009 1.02-1.012 1.02-2.442 0-.099-.02-.195-.02-.097-.057-.188-.038-.091-.092-.173-.055-.082-.125-.152-.07-.07-.151-.124-.082-.055-.173-.092-.091-.038-.188-.057-.096-.02-.195-.02-.098 0-.195.02-.096.019-.187.057-.091.037-.173.092-.082.055-.152.124-.07.07-.124.152-.055.082-.093.173-.037.09-.057.188-.019.096-.019.195 0 .598-.428 1.023-.431.428-1.041.428h-.671q-.61 0-1.041-.428-.428-.425-.428-1.023 0-.473.28-.854.282-.383.737-.527 2.963-.927 4.253-2.064.633-.558 1.234-1.327Zm9.869 0v6.505q0 .099-.02.195-.019.097-.056.188-.038.09-.093.173-.055.082-.124.151-.07.07-.152.125-.082.054-.173.092-.09.038-.187.057-.097.02-.195.02-.099 0-.195-.02-.097-.02-.188-.057-.091-.038-.173-.092-.082-.055-.151-.125-.07-.07-.125-.151-.055-.082-.092-.173-.038-.091-.057-.188-.02-.096-.02-.195v-9.822q0-.385.248-.679.216-.257.542-.343.34-.089.663.042.372.15.548.51 1.235 2.45 2.556 3.613.97.856 3.528 1.657 1.08.34 1.75 1.249.67.91.67 2.04 0 1.43-1.02 2.442-1.015 1.009-2.45 1.009h-.67q-1.434 0-2.45-1.009-1.02-1.012-1.02-2.442 0-.099.02-.195.019-.097.057-.188.037-.091.092-.173.055-.082.124-.152.07-.07.152-.124.082-.055.173-.092.09-.038.187-.057.097-.02.195-.02.099 0 .196.02.096.019.187.057.091.037.173.092.082.055.152.124.07.07.124.152.055.082.092.173.038.09.057.188.02.096.02.195 0 .598.428 1.023.43.428 1.04.428h.672q.61 0 1.04-.428.429-.425.429-1.023 0-.473-.28-.854-.283-.383-.738-.527-2.963-.927-4.253-2.064-.632-.558-1.233-1.327Z", fillRule: "evenodd", fill: "url(#logo_svg__a)" }), /* @__PURE__ */ React.createElement("path", { d: "M53.142 17.65c-.015 3.991-2.928 6.75-7.107 6.736C41.877 24.368 39 21.58 39 17.56c0-3.863 2.961-6.665 7.05-6.662 4.197 0 7.107 2.773 7.092 6.752Zm-3.305-.083c-.009-2.272-1.492-3.67-3.856-3.629-2.235.038-3.688 1.502-3.667 3.698.021 2.275 1.547 3.773 3.805 3.739 2.283-.035 3.727-1.513 3.715-3.805l.003-.003ZM96.088 17.529c.015 4.037-2.813 6.816-6.977 6.854-4.23.04-7.168-2.77-7.159-6.845.01-3.86 2.982-6.654 7.071-6.642 4.14.011 7.05 2.744 7.065 6.633Zm-3.302.116c.025-2.284-1.429-3.715-3.772-3.715-2.246 0-3.727 1.428-3.751 3.622-.024 2.266 1.48 3.811 3.721 3.82 2.292.011 3.775-1.446 3.8-3.727h.002ZM110.55 11.252h3.313c0 2.347-.009 4.634 0 6.917.012 2.252.902 3.24 2.871 3.214 2.117-.029 3.109-1.028 3.127-3.19.015-2.287.003-4.573.003-6.93h3.211v13.041c-1.182-.237-2.264-.48-3.356-.655-.262-.043-.558.166-.844.21-1.18.179-2.37.538-3.537.472-2.771-.16-4.466-1.855-4.761-4.498-.043-.38-.028-.765-.028-1.148v-7.433ZM100.912 20.143v3.88h-3.19V11.413c2.828 0 5.684-.226 8.482.07 2.412.254 3.58 2.179 3.41 4.648-.154 2.249-1.725 3.83-4.119 3.993-1.48.099-2.976.017-4.583.017v.003Zm.063-2.976c1.408 0 2.672.142 3.872-.064.552-.095 1.315-.846 1.354-1.347.036-.452-.724-1.304-1.236-1.382-1.285-.203-2.63-.067-3.99-.067v2.86ZM160.132 24.039h-3.257V11.44c2.889 0 5.786-.217 8.63.07 2.292.229 3.45 2.167 3.31 4.581-.123 2.148-1.561 3.739-3.79 3.985-1.577.174-3.178.154-4.893.226v3.739-.003Zm.039-6.83c1.305 0 2.445.051 3.579-.018.896-.055 1.695-.406 1.728-1.423.033-1.009-.688-1.45-1.616-1.501-1.216-.067-2.44-.018-3.691-.018v2.959ZM69.398 12.626q.649-.044 1.915 0v-1.383h3.284v1.385h6.664v2.988h-6.664c0 1.322.075 2.464.12 3.605.055 1.374.848 2.203 2.286 2.098 1.411-.104 2.801-.466 4.249-.724v3.107c-2.708.7-5.488 1.42-8.021-.328-2.75-1.898-1.559-5.057-1.918-7.755-.576-.078-1.194-.006-1.915-.104v-2.89ZM141.43 22.679c-.13.93-.702 1.623-1.878 1.695-1.1.07-2.06-.814-2-1.851.064-1.093.688-1.768 1.864-1.84 1.098-.067 2.017.81 2.011 1.993l.003.003ZM131.116 13.615c-.76 0-1.294.274-1.294.844 0 1.763 7.205.92 7.18 5.585 0 2.755-2.462 4.318-5.81 4.318-2.31 0-4.518-.646-6.192-1.912l1.42-2.853c1.574 1.067 3.35 1.662 4.872 1.662.837 0 1.446-.273 1.446-.818 0-1.837-7.08-.92-7.08-5.56 0-2.805 2.411-4.343 5.634-4.343 1.98 0 3.983.546 5.708 1.563l-1.522 2.879c-1.7-.87-3.248-1.366-4.365-1.366l.003.001ZM149.116 13.615c-.76 0-1.294.274-1.294.844 0 1.763 7.205.92 7.18 5.585 0 2.755-2.462 4.318-5.81 4.318-2.31 0-4.518-.646-6.192-1.912l1.42-2.853c1.574 1.067 3.35 1.662 4.872 1.662.837 0 1.446-.273 1.446-.818 0-1.837-7.08-.92-7.08-5.56 0-2.805 2.411-4.343 5.634-4.343 1.98 0 3.983.546 5.708 1.563l-1.522 2.879c-1.7-.87-3.248-1.366-4.365-1.366l.003.001ZM182.27 15.427v8.737h-4.44v-1.515c-.888 1.118-2.283 1.713-4.136 1.713-2.943 0-4.694-1.738-4.694-4.195 0-2.456 1.852-4.02 5.253-4.07h3.577v-.148c0-1.266-.888-2.01-2.613-2.01-1.143 0-2.64.372-4.111 1.068l-1.243-2.979c2.157-.942 4.136-1.464 6.394-1.464 3.78 0 5.988 1.786 6.013 4.865v-.002Zm-4.44 4.195v-1.166h-2.688c-1.269 0-1.903.447-1.903 1.39 0 .942.685 1.514 1.851 1.514 1.346 0 2.462-.72 2.74-1.738ZM191.481 14.236c-1.623 0-2.74 1.316-2.74 3.25 0 1.936 1.117 3.251 2.74 3.251 1.192 0 2.131-.472 2.689-1.514l3.323 1.861c-1.09 2.06-3.323 3.228-6.242 3.228-4.237 0-7.054-2.706-7.054-6.802s2.843-6.925 7.105-6.925c2.766 0 4.948 1.166 6.14 3.177l-3.274 1.862c-.608-.87-1.522-1.39-2.688-1.39l.001.002ZM62.284 14.236c-1.623 0-2.74 1.316-2.74 3.25 0 1.936 1.117 3.251 2.74 3.251 1.192 0 2.131-.472 2.689-1.514l3.323 1.861c-1.091 2.06-3.323 3.228-6.242 3.228-4.237 0-7.054-2.706-7.054-6.802s2.842-6.925 7.105-6.925c2.766 0 4.948 1.166 6.14 3.177l-3.274 1.862c-.609-.87-1.522-1.39-2.689-1.39l.002.002ZM212.16 18.63h-9.54c.43 1.514 1.573 2.358 3.12 2.358 1.168 0 2.308-.472 3.222-1.364l2.36 2.308c-1.395 1.54-3.451 2.384-5.988 2.384-4.491 0-7.257-2.706-7.257-6.802s2.868-6.925 7.156-6.925c4.796 0 7.231 3.152 6.928 8.042l-.002-.001Zm-4.366-2.358c0-1.54-1.014-2.582-2.537-2.582-1.522 0-2.436 1.042-2.74 2.582h5.277Z", fill: "#FFF" }));

/* harmony default export */ var logo = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyMTIuMTg2IiBoZWlnaHQ9IjM1Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9Ii41IiB5MT0iMCIgeDI9Ii41IiB5Mj0iMSIgaWQ9ImEiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwOUU3RjUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0RTUyRkYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMzAuODM2IDE4LjMwNXYtNS42MTJsLS4wMDEtLjA0OHEtLjAxLS4xODctLjA4NS0uMzU3LS4wNzUtLjE3LS4yMDctLjMwMy0uMTQtLjE0LS4zMjUtLjIxNi0uMTgzLS4wNzYtLjM4Mi0uMDc2LS4wOTIgMC0uMTgyLjAxNi0uMDg2LjAxNi0uMTY3LjA0Ni0uMDgyLjAzLS4xNTcuMDc1LS4wNzUuMDQ0LS4xNDEuMS0uMDY2LjA1Ni0uMTIyLjEyMy0uMDU2LjA2Ny0uMDk5LjE0Mi0uMDQzLjA3Ni0uMDczLjE1OC0uMDMuMDgxLS4wNDQuMTY3LS4wMTUuMDg2LS4wMTUuMTczdjUuNjEycTAgLjUxLS4zODIuODc2LS4zOTcuMzgyLS45NjcuMzgyaC0uMzc3cS0uNTY5IDAtLjk2Ny0uMzgyLS4zOC0uMzY3LS4zOC0uODc2di03LjMxOXEwLTMuMTk0LTIuMzQ0LTUuNDQ4UTIxLjA5MiAzLjMgMTcuODExIDMuM3EtMy4yODIgMC01LjYwOSAyLjIzOFE5Ljg2IDcuNzkyIDkuODYgMTAuOTg2djcuMzE5cTAgLjUxLS4zODEuODc2LS4zOTguMzgyLS45NjcuMzgyLS41NyAwLS45NjctLjM4Mi0uMzgxLS4zNjctLjM4MS0uODc2di01LjYxMnEwLS4wOTktLjAyLS4xOTYtLjAxOS0uMDk2LS4wNTctLjE4Ny0uMDM3LS4wOTEtLjA5Mi0uMTczLS4wNTUtLjA4Mi0uMTI0LS4xNTItLjA3LS4wNy0uMTUyLS4xMjQtLjA4Mi0uMDU1LS4xNzMtLjA5Mi0uMDktLjAzOC0uMTg3LS4wNTctLjA5Ny0uMDItLjE5NS0uMDItLjA5OSAwLS4xOTUuMDItLjA5Ny4wMTktLjE4OC4wNTctLjA5MS4wMzctLjE3My4wOTItLjA4Mi4wNTUtLjE1Mi4xMjQtLjA3LjA3LS4xMjQuMTUyLS4wNTUuMDgyLS4wOTIuMTczLS4wMzguMDktLjA1Ny4xODctLjAyLjA5Ny0uMDIuMTk2djUuNjEycTAgMS4zNi45OTUgMi4zMTcuOTc5Ljk0MSAyLjM1NC45NDF0Mi4zNTMtLjk0cS45OTUtLjk1OC45OTUtMi4zMTh2LTcuMzE5cTAtMi4zNDMgMS43My00LjAwN1ExNS4zMzUgNS4zIDE3LjgxIDUuM3EyLjQ3NiAwIDQuMjIyIDEuNjggMS43MyAxLjY2MyAxLjczIDQuMDA2djcuMzE5cTAgMS4zNi45OTQgMi4zMTcuOTc4Ljk0MSAyLjM1My45NDFoLjM3N3ExLjM3NSAwIDIuMzU0LS45NC45OTUtLjk1OC45OTUtMi4zMThabS0xMC45LTIuNDY4cS43ODctLjgxOS43ODctMS45NyAwLTEuMTUtLjc4Ny0xLjk2OC0uOC0uODMxLTEuOTM3LS44MzF0LTEuOTM3LjgzcS0uNzg3LjgxOS0uNzg3IDEuOTcgMCAxLjE1Ljc4NyAxLjk2OS44LjgzIDEuOTM3LjgzIDEuMTM4IDAgMS45MzctLjgzWm0tMS4xNTMtMi44MjlxLjM0LjM1NC4zNC44NnQtLjM0Ljg2cS0uMzI3LjM0LS43ODQuMzQtLjQ1NiAwLS43ODQtLjM0LS4zNC0uMzU0LS4zNC0uODZ0LjM0LS44NnEuMzI4LS4zNC43ODQtLjM0LjQ1NyAwIC43ODQuMzRabS0yLjE2OSA2LjQ3OXYxMnEwIC4wOTguMDIuMTk1LjAxOS4wOTcuMDU2LjE4OC4wMzguMDkuMDkzLjE3Mi4wNTUuMDgyLjEyNC4xNTIuMDcuMDcuMTUyLjEyNC4wODIuMDU1LjE3My4wOTMuMDkuMDM3LjE4Ny4wNTcuMDk3LjAxOS4xOTUuMDE5LjA5OSAwIC4xOTUtLjAyLjA5Ny0uMDE5LjE4OC0uMDU2LjA5LS4wMzguMTczLS4wOTMuMDgyLS4wNTQuMTUxLS4xMjQuMDctLjA3LjEyNS0uMTUyLjA1NC0uMDgxLjA5Mi0uMTcyLjAzOC0uMDkxLjA1Ny0uMTg4LjAyLS4wOTcuMDItLjE5NXYtMTJxMC0uMDk5LS4wMi0uMTk1LS4wMi0uMDk3LS4wNTctLjE4OC0uMDM4LS4wOS0uMDkyLS4xNzMtLjA1NS0uMDgyLS4xMjUtLjE1MS0uMDctLjA3LS4xNTEtLjEyNS0uMDgyLS4wNTQtLjE3My0uMDkyLS4wOTEtLjAzOC0uMTg4LS4wNTctLjA5Ni0uMDItLjE5NS0uMDItLjA5OCAwLS4xOTUuMDItLjA5Ni4wMi0uMTg3LjA1Ny0uMDkxLjAzOC0uMTczLjA5Mi0uMDgyLjA1NS0uMTUyLjEyNS0uMDcuMDctLjEyNC4xNTEtLjA1NS4wODItLjA5My4xNzMtLjAzNy4wOTEtLjA1Ni4xODgtLjAyLjA5Ni0uMDIuMTk1Wm0tMy44MSAzLjU3N3Y2LjUwNXEwIC4wOTkuMDIuMTk1LjAxOC4wOTcuMDU2LjE4OC4wMzguMDkuMDkyLjE3My4wNTUuMDgyLjEyNS4xNTEuMDcuMDcuMTUxLjEyNS4wODIuMDU0LjE3My4wOTIuMDkxLjAzOC4xODguMDU3LjA5Ni4wMi4xOTUuMDIuMDk4IDAgLjE5NS0uMDJ0LjE4OC0uMDU3cS4wOS0uMDM4LjE3My0uMDkyLjA4MS0uMDU1LjE1MS0uMTI1LjA3LS4wNy4xMjQtLjE1MS4wNTUtLjA4Mi4wOTMtLjE3My4wMzgtLjA5MS4wNTctLjE4OC4wMTktLjA5Ni4wMTktLjE5NXYtOS44MjJxMC0uMzg1LS4yNDctLjY3OS0uMjE2LS4yNTctLjU0Mi0uMzQzLS4zNC0uMDg5LS42NjQuMDQyLS4zNzIuMTUtLjU0Ny41MS0xLjIzNSAyLjQ1LTIuNTU2IDMuNjEzLS45NzEuODU2LTMuNTI4IDEuNjU3LTEuMDgxLjM0LTEuNzUgMS4yNDktLjY3LjkxLS42NyAyLjA0IDAgMS40MyAxLjAxOSAyLjQ0MiAxLjAxNiAxLjAwOSAyLjQ1IDEuMDA5aC42N3ExLjQzNSAwIDIuNDUxLTEuMDA5IDEuMDItMS4wMTIgMS4wMi0yLjQ0MiAwLS4wOTktLjAyLS4xOTUtLjAyLS4wOTctLjA1Ny0uMTg4LS4wMzgtLjA5MS0uMDkyLS4xNzMtLjA1NS0uMDgyLS4xMjUtLjE1Mi0uMDctLjA3LS4xNTEtLjEyNC0uMDgyLS4wNTUtLjE3My0uMDkyLS4wOTEtLjAzOC0uMTg4LS4wNTctLjA5Ni0uMDItLjE5NS0uMDItLjA5OCAwLS4xOTUuMDItLjA5Ni4wMTktLjE4Ny4wNTctLjA5MS4wMzctLjE3My4wOTItLjA4Mi4wNTUtLjE1Mi4xMjQtLjA3LjA3LS4xMjQuMTUyLS4wNTUuMDgyLS4wOTMuMTczLS4wMzcuMDktLjA1Ny4xODgtLjAxOS4wOTYtLjAxOS4xOTUgMCAuNTk4LS40MjggMS4wMjMtLjQzMS40MjgtMS4wNDEuNDI4aC0uNjcxcS0uNjEgMC0xLjA0MS0uNDI4LS40MjgtLjQyNS0uNDI4LTEuMDIzIDAtLjQ3My4yOC0uODU0LjI4Mi0uMzgzLjczNy0uNTI3IDIuOTYzLS45MjcgNC4yNTMtMi4wNjQuNjMzLS41NTggMS4yMzQtMS4zMjdabTkuODY5IDB2Ni41MDVxMCAuMDk5LS4wMi4xOTUtLjAxOS4wOTctLjA1Ni4xODgtLjAzOC4wOS0uMDkzLjE3My0uMDU1LjA4Mi0uMTI0LjE1MS0uMDcuMDctLjE1Mi4xMjUtLjA4Mi4wNTQtLjE3My4wOTItLjA5LjAzOC0uMTg3LjA1Ny0uMDk3LjAyLS4xOTUuMDItLjA5OSAwLS4xOTUtLjAyLS4wOTctLjAyLS4xODgtLjA1Ny0uMDkxLS4wMzgtLjE3My0uMDkyLS4wODItLjA1NS0uMTUxLS4xMjUtLjA3LS4wNy0uMTI1LS4xNTEtLjA1NS0uMDgyLS4wOTItLjE3My0uMDM4LS4wOTEtLjA1Ny0uMTg4LS4wMi0uMDk2LS4wMi0uMTk1di05LjgyMnEwLS4zODUuMjQ4LS42NzkuMjE2LS4yNTcuNTQyLS4zNDMuMzQtLjA4OS42NjMuMDQyLjM3Mi4xNS41NDguNTEgMS4yMzUgMi40NSAyLjU1NiAzLjYxMy45Ny44NTYgMy41MjggMS42NTcgMS4wOC4zNCAxLjc1IDEuMjQ5LjY3LjkxLjY3IDIuMDQgMCAxLjQzLTEuMDIgMi40NDItMS4wMTUgMS4wMDktMi40NSAxLjAwOWgtLjY3cS0xLjQzNCAwLTIuNDUtMS4wMDktMS4wMi0xLjAxMi0xLjAyLTIuNDQyIDAtLjA5OS4wMi0uMTk1LjAxOS0uMDk3LjA1Ny0uMTg4LjAzNy0uMDkxLjA5Mi0uMTczLjA1NS0uMDgyLjEyNC0uMTUyLjA3LS4wNy4xNTItLjEyNC4wODItLjA1NS4xNzMtLjA5Mi4wOS0uMDM4LjE4Ny0uMDU3LjA5Ny0uMDIuMTk1LS4wMi4wOTkgMCAuMTk2LjAyLjA5Ni4wMTkuMTg3LjA1Ny4wOTEuMDM3LjE3My4wOTIuMDgyLjA1NS4xNTIuMTI0LjA3LjA3LjEyNC4xNTIuMDU1LjA4Mi4wOTIuMTczLjAzOC4wOS4wNTcuMTg4LjAyLjA5Ni4wMi4xOTUgMCAuNTk4LjQyOCAxLjAyMy40My40MjggMS4wNC40MjhoLjY3MnEuNjEgMCAxLjA0LS40MjguNDI5LS40MjUuNDI5LTEuMDIzIDAtLjQ3My0uMjgtLjg1NC0uMjgzLS4zODMtLjczOC0uNTI3LTIuOTYzLS45MjctNC4yNTMtMi4wNjQtLjYzMi0uNTU4LTEuMjMzLTEuMzI3WiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJ1cmwoI2EpIi8+PGc+PHBhdGggZD0iTTUzLjE0MiAxNy42NWMtLjAxNSAzLjk5MS0yLjkyOCA2Ljc1LTcuMTA3IDYuNzM2QzQxLjg3NyAyNC4zNjggMzkgMjEuNTggMzkgMTcuNTZjMC0zLjg2MyAyLjk2MS02LjY2NSA3LjA1LTYuNjYyIDQuMTk3IDAgNy4xMDcgMi43NzMgNy4wOTIgNi43NTJabS0zLjMwNS0uMDgzYy0uMDA5LTIuMjcyLTEuNDkyLTMuNjctMy44NTYtMy42MjktMi4yMzUuMDM4LTMuNjg4IDEuNTAyLTMuNjY3IDMuNjk4LjAyMSAyLjI3NSAxLjU0NyAzLjc3MyAzLjgwNSAzLjczOSAyLjI4My0uMDM1IDMuNzI3LTEuNTEzIDMuNzE1LTMuODA1bC4wMDMtLjAwM1pNOTYuMDg4IDE3LjUyOWMuMDE1IDQuMDM3LTIuODEzIDYuODE2LTYuOTc3IDYuODU0LTQuMjMuMDQtNy4xNjgtMi43Ny03LjE1OS02Ljg0NS4wMS0zLjg2IDIuOTgyLTYuNjU0IDcuMDcxLTYuNjQyIDQuMTQuMDExIDcuMDUgMi43NDQgNy4wNjUgNi42MzNabS0zLjMwMi4xMTZjLjAyNS0yLjI4NC0xLjQyOS0zLjcxNS0zLjc3Mi0zLjcxNS0yLjI0NiAwLTMuNzI3IDEuNDI4LTMuNzUxIDMuNjIyLS4wMjQgMi4yNjYgMS40OCAzLjgxMSAzLjcyMSAzLjgyIDIuMjkyLjAxMSAzLjc3NS0xLjQ0NiAzLjgtMy43MjdoLjAwMlpNMTEwLjU1IDExLjI1MmgzLjMxM2MwIDIuMzQ3LS4wMDkgNC42MzQgMCA2LjkxNy4wMTIgMi4yNTIuOTAyIDMuMjQgMi44NzEgMy4yMTQgMi4xMTctLjAyOSAzLjEwOS0xLjAyOCAzLjEyNy0zLjE5LjAxNS0yLjI4Ny4wMDMtNC41NzMuMDAzLTYuOTNoMy4yMTF2MTMuMDQxYy0xLjE4Mi0uMjM3LTIuMjY0LS40OC0zLjM1Ni0uNjU1LS4yNjItLjA0My0uNTU4LjE2Ni0uODQ0LjIxLTEuMTguMTc5LTIuMzcuNTM4LTMuNTM3LjQ3Mi0yLjc3MS0uMTYtNC40NjYtMS44NTUtNC43NjEtNC40OTgtLjA0My0uMzgtLjAyOC0uNzY1LS4wMjgtMS4xNDh2LTcuNDMzWk0xMDAuOTEyIDIwLjE0M3YzLjg4aC0zLjE5VjExLjQxM2MyLjgyOCAwIDUuNjg0LS4yMjYgOC40ODIuMDcgMi40MTIuMjU0IDMuNTggMi4xNzkgMy40MSA0LjY0OC0uMTU0IDIuMjQ5LTEuNzI1IDMuODMtNC4xMTkgMy45OTMtMS40OC4wOTktMi45NzYuMDE3LTQuNTgzLjAxN3YuMDAzWm0uMDYzLTIuOTc2YzEuNDA4IDAgMi42NzIuMTQyIDMuODcyLS4wNjQuNTUyLS4wOTUgMS4zMTUtLjg0NiAxLjM1NC0xLjM0Ny4wMzYtLjQ1Mi0uNzI0LTEuMzA0LTEuMjM2LTEuMzgyLTEuMjg1LS4yMDMtMi42My0uMDY3LTMuOTktLjA2N3YyLjg2Wk0xNjAuMTMyIDI0LjAzOWgtMy4yNTdWMTEuNDRjMi44ODkgMCA1Ljc4Ni0uMjE3IDguNjMuMDcgMi4yOTIuMjI5IDMuNDUgMi4xNjcgMy4zMSA0LjU4MS0uMTIzIDIuMTQ4LTEuNTYxIDMuNzM5LTMuNzkgMy45ODUtMS41NzcuMTc0LTMuMTc4LjE1NC00Ljg5My4yMjZ2My43MzktLjAwM1ptLjAzOS02LjgzYzEuMzA1IDAgMi40NDUuMDUxIDMuNTc5LS4wMTguODk2LS4wNTUgMS42OTUtLjQwNiAxLjcyOC0xLjQyMy4wMzMtMS4wMDktLjY4OC0xLjQ1LTEuNjE2LTEuNTAxLTEuMjE2LS4wNjctMi40NC0uMDE4LTMuNjkxLS4wMTh2Mi45NTlaTTY5LjM5OCAxMi42MjZxLjY0OS0uMDQ0IDEuOTE1IDB2LTEuMzgzaDMuMjg0djEuMzg1aDYuNjY0djIuOTg4aC02LjY2NGMwIDEuMzIyLjA3NSAyLjQ2NC4xMiAzLjYwNS4wNTUgMS4zNzQuODQ4IDIuMjAzIDIuMjg2IDIuMDk4IDEuNDExLS4xMDQgMi44MDEtLjQ2NiA0LjI0OS0uNzI0djMuMTA3Yy0yLjcwOC43LTUuNDg4IDEuNDItOC4wMjEtLjMyOC0yLjc1LTEuODk4LTEuNTU5LTUuMDU3LTEuOTE4LTcuNzU1LS41NzYtLjA3OC0xLjE5NC0uMDA2LTEuOTE1LS4xMDR2LTIuODlaTTE0MS40MyAyMi42NzljLS4xMy45My0uNzAyIDEuNjIzLTEuODc4IDEuNjk1LTEuMS4wNy0yLjA2LS44MTQtMi0xLjg1MS4wNjQtMS4wOTMuNjg4LTEuNzY4IDEuODY0LTEuODQgMS4wOTgtLjA2NyAyLjAxNy44MSAyLjAxMSAxLjk5M2wuMDAzLjAwM1pNMTMxLjExNiAxMy42MTVjLS43NiAwLTEuMjk0LjI3NC0xLjI5NC44NDQgMCAxLjc2MyA3LjIwNS45MiA3LjE4IDUuNTg1IDAgMi43NTUtMi40NjIgNC4zMTgtNS44MSA0LjMxOC0yLjMxIDAtNC41MTgtLjY0Ni02LjE5Mi0xLjkxMmwxLjQyLTIuODUzYzEuNTc0IDEuMDY3IDMuMzUgMS42NjIgNC44NzIgMS42NjIuODM3IDAgMS40NDYtLjI3MyAxLjQ0Ni0uODE4IDAtMS44MzctNy4wOC0uOTItNy4wOC01LjU2IDAtMi44MDUgMi40MTEtNC4zNDMgNS42MzQtNC4zNDMgMS45OCAwIDMuOTgzLjU0NiA1LjcwOCAxLjU2M2wtMS41MjIgMi44NzljLTEuNy0uODctMy4yNDgtMS4zNjYtNC4zNjUtMS4zNjZsLjAwMy4wMDFaTTE0OS4xMTYgMTMuNjE1Yy0uNzYgMC0xLjI5NC4yNzQtMS4yOTQuODQ0IDAgMS43NjMgNy4yMDUuOTIgNy4xOCA1LjU4NSAwIDIuNzU1LTIuNDYyIDQuMzE4LTUuODEgNC4zMTgtMi4zMSAwLTQuNTE4LS42NDYtNi4xOTItMS45MTJsMS40Mi0yLjg1M2MxLjU3NCAxLjA2NyAzLjM1IDEuNjYyIDQuODcyIDEuNjYyLjgzNyAwIDEuNDQ2LS4yNzMgMS40NDYtLjgxOCAwLTEuODM3LTcuMDgtLjkyLTcuMDgtNS41NiAwLTIuODA1IDIuNDExLTQuMzQzIDUuNjM0LTQuMzQzIDEuOTggMCAzLjk4My41NDYgNS43MDggMS41NjNsLTEuNTIyIDIuODc5Yy0xLjctLjg3LTMuMjQ4LTEuMzY2LTQuMzY1LTEuMzY2bC4wMDMuMDAxWk0xODIuMjcgMTUuNDI3djguNzM3aC00LjQ0di0xLjUxNWMtLjg4OCAxLjExOC0yLjI4MyAxLjcxMy00LjEzNiAxLjcxMy0yLjk0MyAwLTQuNjk0LTEuNzM4LTQuNjk0LTQuMTk1IDAtMi40NTYgMS44NTItNC4wMiA1LjI1My00LjA3aDMuNTc3di0uMTQ4YzAtMS4yNjYtLjg4OC0yLjAxLTIuNjEzLTIuMDEtMS4xNDMgMC0yLjY0LjM3Mi00LjExMSAxLjA2OGwtMS4yNDMtMi45NzljMi4xNTctLjk0MiA0LjEzNi0xLjQ2NCA2LjM5NC0xLjQ2NCAzLjc4IDAgNS45ODggMS43ODYgNi4wMTMgNC44NjV2LS4wMDJabS00LjQ0IDQuMTk1di0xLjE2NmgtMi42ODhjLTEuMjY5IDAtMS45MDMuNDQ3LTEuOTAzIDEuMzkgMCAuOTQyLjY4NSAxLjUxNCAxLjg1MSAxLjUxNCAxLjM0NiAwIDIuNDYyLS43MiAyLjc0LTEuNzM4Wk0xOTEuNDgxIDE0LjIzNmMtMS42MjMgMC0yLjc0IDEuMzE2LTIuNzQgMy4yNSAwIDEuOTM2IDEuMTE3IDMuMjUxIDIuNzQgMy4yNTEgMS4xOTIgMCAyLjEzMS0uNDcyIDIuNjg5LTEuNTE0bDMuMzIzIDEuODYxYy0xLjA5IDIuMDYtMy4zMjMgMy4yMjgtNi4yNDIgMy4yMjgtNC4yMzcgMC03LjA1NC0yLjcwNi03LjA1NC02LjgwMnMyLjg0My02LjkyNSA3LjEwNS02LjkyNWMyLjc2NiAwIDQuOTQ4IDEuMTY2IDYuMTQgMy4xNzdsLTMuMjc0IDEuODYyYy0uNjA4LS44Ny0xLjUyMi0xLjM5LTIuNjg4LTEuMzlsLjAwMS4wMDJaTTYyLjI4NCAxNC4yMzZjLTEuNjIzIDAtMi43NCAxLjMxNi0yLjc0IDMuMjUgMCAxLjkzNiAxLjExNyAzLjI1MSAyLjc0IDMuMjUxIDEuMTkyIDAgMi4xMzEtLjQ3MiAyLjY4OS0xLjUxNGwzLjMyMyAxLjg2MWMtMS4wOTEgMi4wNi0zLjMyMyAzLjIyOC02LjI0MiAzLjIyOC00LjIzNyAwLTcuMDU0LTIuNzA2LTcuMDU0LTYuODAyczIuODQyLTYuOTI1IDcuMTA1LTYuOTI1YzIuNzY2IDAgNC45NDggMS4xNjYgNi4xNCAzLjE3N2wtMy4yNzQgMS44NjJjLS42MDktLjg3LTEuNTIyLTEuMzktMi42ODktMS4zOWwuMDAyLjAwMlpNMjEyLjE2IDE4LjYzaC05LjU0Yy40MyAxLjUxNCAxLjU3MyAyLjM1OCAzLjEyIDIuMzU4IDEuMTY4IDAgMi4zMDgtLjQ3MiAzLjIyMi0xLjM2NGwyLjM2IDIuMzA4Yy0xLjM5NSAxLjU0LTMuNDUxIDIuMzg0LTUuOTg4IDIuMzg0LTQuNDkxIDAtNy4yNTctMi43MDYtNy4yNTctNi44MDJzMi44NjgtNi45MjUgNy4xNTYtNi45MjVjNC43OTYgMCA3LjIzMSAzLjE1MiA2LjkyOCA4LjA0MmwtLjAwMi0uMDAxWm0tNC4zNjYtMi4zNThjMC0xLjU0LTEuMDE0LTIuNTgyLTIuNTM3LTIuNTgyLTEuNTIyIDAtMi40MzYgMS4wNDItMi43NCAyLjU4Mmg1LjI3N1oiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+");

;// CONCATENATED MODULE: ./src/assets/github.svg
var github_defProp = Object.defineProperty;
var github_getOwnPropSymbols = Object.getOwnPropertySymbols;
var github_hasOwnProp = Object.prototype.hasOwnProperty;
var github_propIsEnum = Object.prototype.propertyIsEnumerable;
var github_defNormalProp = (obj, key, value) => key in obj ? github_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var github_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (github_hasOwnProp.call(b, prop))
      github_defNormalProp(a, prop, b[prop]);
  if (github_getOwnPropSymbols)
    for (var prop of github_getOwnPropSymbols(b)) {
      if (github_propIsEnum.call(b, prop))
        github_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgGithub = (props) => /* @__PURE__ */ React.createElement("svg", github_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 40, height: 40 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("mask", { id: "github_svg__a", style: {
  maskType: "alpha"
}, maskUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("rect", { x: 9, y: 9, width: 22, height: 22, rx: 0, fill: "#FFF" }))), /* @__PURE__ */ React.createElement("circle", { cx: 20, cy: 20, fill: "#FFF", fillOpacity: 0.06, r: 20 }), /* @__PURE__ */ React.createElement("g", { mask: "url(#github_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M19.989 9.025C13.918 9.023 9 14.065 9 20.287c0 4.92 3.076 9.104 7.36 10.64.577.149.489-.272.489-.56v-1.95c-3.332.4-3.467-1.862-3.69-2.24-.452-.79-1.52-.992-1.2-1.37.758-.4 1.531.101 2.427 1.459.649.984 1.913.818 2.554.654.14-.592.44-1.12.852-1.53-3.452-.635-4.89-2.796-4.89-5.365 0-1.246.4-2.392 1.185-3.316-.5-1.524.047-2.829.12-3.022 1.427-.131 2.91 1.047 3.025 1.14.81-.224 1.736-.342 2.772-.342 1.036 0 1.969.123 2.786.35.278-.217 1.653-1.229 2.978-1.106.071.194.607 1.469.135 2.972.796.927 1.2 2.083 1.2 3.332 0 2.573-1.448 4.737-4.91 5.361.578.584.936 1.395.936 2.292v2.833c.02.227 0 .45.368.45 4.348-1.503 7.479-5.716 7.479-10.68 0-6.225-4.92-11.264-10.987-11.264Z", fill: "#FFF", fillOpacity: 0.77 })));

/* harmony default export */ var github = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PG1hc2sgaWQ9ImEiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHg9IjkiIHk9IjkiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgcng9IjAiIGZpbGw9IiNGRkYiLz48L21hc2s+PC9kZWZzPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjA2IiByPSIyMCIvPjxnIG1hc2s9InVybCgjYSkiPjxwYXRoIGQ9Ik0xOS45ODkgOS4wMjVDMTMuOTE4IDkuMDIzIDkgMTQuMDY1IDkgMjAuMjg3YzAgNC45MiAzLjA3NiA5LjEwNCA3LjM2IDEwLjY0LjU3Ny4xNDkuNDg5LS4yNzIuNDg5LS41NnYtMS45NWMtMy4zMzIuNC0zLjQ2Ny0xLjg2Mi0zLjY5LTIuMjQtLjQ1Mi0uNzktMS41Mi0uOTkyLTEuMi0xLjM3Ljc1OC0uNCAxLjUzMS4xMDEgMi40MjcgMS40NTkuNjQ5Ljk4NCAxLjkxMy44MTggMi41NTQuNjU0LjE0LS41OTIuNDQtMS4xMi44NTItMS41My0zLjQ1Mi0uNjM1LTQuODktMi43OTYtNC44OS01LjM2NSAwLTEuMjQ2LjQtMi4zOTIgMS4xODUtMy4zMTYtLjUtMS41MjQuMDQ3LTIuODI5LjEyLTMuMDIyIDEuNDI3LS4xMzEgMi45MSAxLjA0NyAzLjAyNSAxLjE0LjgxLS4yMjQgMS43MzYtLjM0MiAyLjc3Mi0uMzQyIDEuMDM2IDAgMS45NjkuMTIzIDIuNzg2LjM1LjI3OC0uMjE3IDEuNjUzLTEuMjI5IDIuOTc4LTEuMTA2LjA3MS4xOTQuNjA3IDEuNDY5LjEzNSAyLjk3Mi43OTYuOTI3IDEuMiAyLjA4MyAxLjIgMy4zMzIgMCAyLjU3My0xLjQ0OCA0LjczNy00LjkxIDUuMzYxLjU3OC41ODQuOTM2IDEuMzk1LjkzNiAyLjI5MnYyLjgzM2MuMDIuMjI3IDAgLjQ1LjM2OC40NSA0LjM0OC0xLjUwMyA3LjQ3OS01LjcxNiA3LjQ3OS0xMC42OCAwLTYuMjI1LTQuOTItMTEuMjY0LTEwLjk4Ny0xMS4yNjRaIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii43NyIvPjwvZz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/x.svg
var x_defProp = Object.defineProperty;
var x_getOwnPropSymbols = Object.getOwnPropertySymbols;
var x_hasOwnProp = Object.prototype.hasOwnProperty;
var x_propIsEnum = Object.prototype.propertyIsEnumerable;
var x_defNormalProp = (obj, key, value) => key in obj ? x_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var x_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (x_hasOwnProp.call(b, prop))
      x_defNormalProp(a, prop, b[prop]);
  if (x_getOwnPropSymbols)
    for (var prop of x_getOwnPropSymbols(b)) {
      if (x_propIsEnum.call(b, prop))
        x_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgX = (props) => /* @__PURE__ */ React.createElement("svg", x_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 40, height: 40 }, props), /* @__PURE__ */ React.createElement("circle", { cx: 20, cy: 20, fill: "#FFF", fillOpacity: 0.06, r: 20 }), /* @__PURE__ */ React.createElement("path", { d: "M15.961 16.783c2.912 1.478 5.371 1.39 5.371 1.39s-.933-3.265 1.95-4.714c2.883-1.448 4.867.994 4.867.994s.504-.139.877-.277c.376-.138.916-.385.916-.385l-.889 1.594 1.369-.145s-.17.247-.717.751c-.548.504-.773.766-.773.766s.196 3.932-1.865 6.957c-2.062 3.026-4.725 4.843-8.594 5.226-3.869.383-6.388-1.192-6.388-1.192s1.69-.097 2.769-.511c1.078-.414 2.629-1.505 2.629-1.505s-2.205-.68-2.997-1.448c-.793-.766-.989-1.221-.989-1.221l2.176-.03s-2.29-1.22-2.939-2.187c-.65-.967-.734-1.902-.734-1.902l1.674.679s-1.39-1.9-1.59-3.378c-.198-1.477.255-2.272.255-2.272s.71 1.332 3.622 2.81Z", fill: "#FFF", fillOpacity: 0.77 }));

/* harmony default export */ var x = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDYiIHI9IjIwIi8+PHBhdGggZD0iTTE1Ljk2MSAxNi43ODNjMi45MTIgMS40NzggNS4zNzEgMS4zOSA1LjM3MSAxLjM5cy0uOTMzLTMuMjY1IDEuOTUtNC43MTRjMi44ODMtMS40NDggNC44NjcuOTk0IDQuODY3Ljk5NHMuNTA0LS4xMzkuODc3LS4yNzdjLjM3Ni0uMTM4LjkxNi0uMzg1LjkxNi0uMzg1bC0uODg5IDEuNTk0IDEuMzY5LS4xNDVzLS4xNy4yNDctLjcxNy43NTFjLS41NDguNTA0LS43NzMuNzY2LS43NzMuNzY2cy4xOTYgMy45MzItMS44NjUgNi45NTdjLTIuMDYyIDMuMDI2LTQuNzI1IDQuODQzLTguNTk0IDUuMjI2LTMuODY5LjM4My02LjM4OC0xLjE5Mi02LjM4OC0xLjE5MnMxLjY5LS4wOTcgMi43NjktLjUxMWMxLjA3OC0uNDE0IDIuNjI5LTEuNTA1IDIuNjI5LTEuNTA1cy0yLjIwNS0uNjgtMi45OTctMS40NDhjLS43OTMtLjc2Ni0uOTg5LTEuMjIxLS45ODktMS4yMjFsMi4xNzYtLjAzcy0yLjI5LTEuMjItMi45MzktMi4xODdjLS42NS0uOTY3LS43MzQtMS45MDItLjczNC0xLjkwMmwxLjY3NC42NzlzLTEuMzktMS45LTEuNTktMy4zNzhjLS4xOTgtMS40NzcuMjU1LTIuMjcyLjI1NS0yLjI3MnMuNzEgMS4zMzIgMy42MjIgMi44MVoiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjc3Ii8+PC9zdmc+");

;// CONCATENATED MODULE: ./src/assets/tg.svg
var tg_defProp = Object.defineProperty;
var tg_getOwnPropSymbols = Object.getOwnPropertySymbols;
var tg_hasOwnProp = Object.prototype.hasOwnProperty;
var tg_propIsEnum = Object.prototype.propertyIsEnumerable;
var tg_defNormalProp = (obj, key, value) => key in obj ? tg_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var tg_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (tg_hasOwnProp.call(b, prop))
      tg_defNormalProp(a, prop, b[prop]);
  if (tg_getOwnPropSymbols)
    for (var prop of tg_getOwnPropSymbols(b)) {
      if (tg_propIsEnum.call(b, prop))
        tg_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgTg = (props) => /* @__PURE__ */ React.createElement("svg", tg_spreadValues({ className: "tg_svg__icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: 200, height: 200 }, props), /* @__PURE__ */ React.createElement("path", { d: "m417.28 795.733 11.947-180.48L756.907 320c14.506-13.227-2.987-19.627-22.187-8.107L330.24 567.467 155.307 512c-37.547-10.667-37.974-36.693 8.533-55.467l681.387-262.826c31.146-14.08 61.013 7.68 49.066 55.466L778.24 795.733c-8.107 38.827-31.573 48.214-64 30.294L537.6 695.467l-84.907 82.346c-9.813 9.814-17.92 17.92-35.413 17.92z", fill: "#FFF", fillOpacity: 0.77 }));

/* harmony default export */ var tg = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0ibTQxNy4yOCA3OTUuNzMzIDExLjk0Ny0xODAuNDhMNzU2LjkwNyAzMjBjMTQuNTA2LTEzLjIyNy0yLjk4Ny0xOS42MjctMjIuMTg3LTguMTA3TDMzMC4yNCA1NjcuNDY3IDE1NS4zMDcgNTEyYy0zNy41NDctMTAuNjY3LTM3Ljk3NC0zNi42OTMgOC41MzMtNTUuNDY3bDY4MS4zODctMjYyLjgyNmMzMS4xNDYtMTQuMDggNjEuMDEzIDcuNjggNDkuMDY2IDU1LjQ2Nkw3NzguMjQgNzk1LjczM2MtOC4xMDcgMzguODI3LTMxLjU3MyA0OC4yMTQtNjQgMzAuMjk0TDUzNy42IDY5NS40NjdsLTg0LjkwNyA4Mi4zNDZjLTkuODEzIDkuODE0LTE3LjkyIDE3LjkyLTM1LjQxMyAxNy45MnoiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjc3Ii8+PC9zdmc+");

// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/layouts/components/Nav.tsx




var items = [{
  icon: github,
  link: "https://github.com/octopus-space",
  label: "github"
}, {
  icon: x,
  link: "https://twitter.com/OctopusSpaceX",
  label: "x"
}, {
  icon: tg,
  link: "https://t.me/OctopusSpaceGlobal",
  label: "telegram",
  className: "telegram"
}, {
  icon: tg,
  link: "https://t.me/OctopusSpace_cn",
  label: "telegram2",
  className: "telegram"
}
// {
//   icon: medium,
//   link: "",
//   label: "medium",
// },
// {
//   icon: discord,
//   link: "",
//   label: "discord",
// },
// {
//   icon: instagram,
//   link: "",
//   label: "instagram",
// },
];
/* harmony default export */ var Nav = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "nav",
    children: items.map(function (item) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        target: "_blank",
        href: item.link,
        className: "navItem",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: item.icon,
          alt: item.label,
          className: item.className
        })
      }, item.label);
    })
  });
});
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(88929);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(9361);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 12 modules
var message = __webpack_require__(68872);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./src/assets/metalet.png
var metalet = __webpack_require__(91198);
;// CONCATENATED MODULE: ./src/components/LoginModal/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 15 modules
var es_button = __webpack_require__(45093);
;// CONCATENATED MODULE: ./src/components/LoginModal/index.tsx









/* harmony default export */ var LoginModal = (function (_ref) {
  var show = _ref.show,
    onClose = _ref.onClose;
  var _useModel = (0,_umi_production_exports.useModel)("wallet"),
    connect = _useModel.connect;
  var handleConnect = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return connect();
          case 3:
            onClose();
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            message/* default */.ZP.error(_context.t0.message || 'unknown error');
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 6]]);
    }));
    return function handleConnect() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    title: "Connect Wallet",
    modalWidth: 390,
    show: show,
    onClose: onClose,
    closable: true,
    bodyStyle: {
      padding: "28px 25px"
    },
    className: "walletModal",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "walletWrap",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.ZP, {
        className: "item",
        type: "primary",
        onClick: handleConnect,
        block: true,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: metalet,
          alt: "",
          className: "icon"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Metalet Wallet"
        })]
      })
    })
  });
});
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 36 modules
var dropdown = __webpack_require__(84819);
;// CONCATENATED MODULE: ./src/assets/wrapping.svg
var wrapping_defProp = Object.defineProperty;
var wrapping_getOwnPropSymbols = Object.getOwnPropertySymbols;
var wrapping_hasOwnProp = Object.prototype.hasOwnProperty;
var wrapping_propIsEnum = Object.prototype.propertyIsEnumerable;
var wrapping_defNormalProp = (obj, key, value) => key in obj ? wrapping_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var wrapping_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (wrapping_hasOwnProp.call(b, prop))
      wrapping_defNormalProp(a, prop, b[prop]);
  if (wrapping_getOwnPropSymbols)
    for (var prop of wrapping_getOwnPropSymbols(b)) {
      if (wrapping_propIsEnum.call(b, prop))
        wrapping_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgWrapping = (props) => /* @__PURE__ */ React.createElement("svg", wrapping_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 36, height: 36 }, props), /* @__PURE__ */ React.createElement("rect", { width: 36, height: 36, rx: 8, fill: "#6E66FA" }), /* @__PURE__ */ React.createElement("path", { d: "M11.052 16.484h13.79c.087 0 .158-.07.158-.158v-1.183a.158.158 0 0 0-.159-.157H12.85l2.858-3.608a.158.158 0 0 0 .018-.166.16.16 0 0 0-.142-.09h-1.437a.318.318 0 0 0-.25.12l-3.344 4.221a.628.628 0 0 0-.071.666.634.634 0 0 0 .57.355Zm-.477 4.653h11.99l-2.86 3.607a.158.158 0 0 0 .127.256h1.437c.097 0 .19-.044.25-.12l3.344-4.221a.628.628 0 0 0 .072-.665.634.634 0 0 0-.57-.356h-13.79a.158.158 0 0 0-.159.158v1.183c0 .087.071.158.159.158Z", fill: "#FFF" }));

/* harmony default export */ var wrapping = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiI+PHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iOCIgZmlsbD0iIzZFNjZGQSIvPjxwYXRoIGQ9Ik0xMS4wNTIgMTYuNDg0aDEzLjc5Yy4wODcgMCAuMTU4LS4wNy4xNTgtLjE1OHYtMS4xODNhLjE1OC4xNTggMCAwIDAtLjE1OS0uMTU3SDEyLjg1bDIuODU4LTMuNjA4YS4xNTguMTU4IDAgMCAwIC4wMTgtLjE2Ni4xNi4xNiAwIDAgMC0uMTQyLS4wOWgtMS40MzdhLjMxOC4zMTggMCAwIDAtLjI1LjEybC0zLjM0NCA0LjIyMWEuNjI4LjYyOCAwIDAgMC0uMDcxLjY2Ni42MzQuNjM0IDAgMCAwIC41Ny4zNTVabS0uNDc3IDQuNjUzaDExLjk5bC0yLjg2IDMuNjA3YS4xNTguMTU4IDAgMCAwIC4xMjcuMjU2aDEuNDM3Yy4wOTcgMCAuMTktLjA0NC4yNS0uMTJsMy4zNDQtNC4yMjFhLjYyOC42MjggMCAwIDAgLjA3Mi0uNjY1LjYzNC42MzQgMCAwIDAtLjU3LS4zNTZoLTEzLjc5YS4xNTguMTU4IDAgMCAwLS4xNTkuMTU4djEuMTgzYzAgLjA4Ny4wNzEuMTU4LjE1OS4xNThaIiBmaWxsPSIjRkZGIi8+PC9zdmc+");

;// CONCATENATED MODULE: ./src/assets/mapping.svg
var mapping_defProp = Object.defineProperty;
var mapping_getOwnPropSymbols = Object.getOwnPropertySymbols;
var mapping_hasOwnProp = Object.prototype.hasOwnProperty;
var mapping_propIsEnum = Object.prototype.propertyIsEnumerable;
var mapping_defNormalProp = (obj, key, value) => key in obj ? mapping_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var mapping_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (mapping_hasOwnProp.call(b, prop))
      mapping_defNormalProp(a, prop, b[prop]);
  if (mapping_getOwnPropSymbols)
    for (var prop of mapping_getOwnPropSymbols(b)) {
      if (mapping_propIsEnum.call(b, prop))
        mapping_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgMapping = (props) => /* @__PURE__ */ React.createElement("svg", mapping_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 36, height: 36 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "mapping_svg__a" }, /* @__PURE__ */ React.createElement("rect", { x: 11, y: 14, width: 14, height: 9, rx: 0 })), /* @__PURE__ */ React.createElement("mask", { id: "mapping_svg__b", style: {
  maskType: "alpha"
}, maskUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("rect", { x: 11, y: 14, width: 14, height: 9, rx: 0, fill: "#FFF" }))), /* @__PURE__ */ React.createElement("rect", { width: 36, height: 36, rx: 8, fill: "#2B2975", fillOpacity: 0.54 }), /* @__PURE__ */ React.createElement("g", { mask: "url(#mapping_svg__b)", clipPath: "url(#mapping_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "m21.818 18.494 2.95-3.107a.84.84 0 0 0-.01-1.133.74.74 0 0 0-1.076-.01l-3.263 3.202h-4.846l-3.262-3.203a.742.742 0 0 0-.742-.209.79.79 0 0 0-.543.572.838.838 0 0 0 .199.781l2.949 3.107-2.949 3.107a.83.83 0 0 0-.225.572c0 .215.08.42.225.572.144.152.34.237.543.237a.748.748 0 0 0 .542-.237l3.263-3.202h4.846l3.263 3.202c.143.152.339.237.543.237a.748.748 0 0 0 .542-.237.831.831 0 0 0 .225-.572c0-.214-.08-.42-.225-.572l-2.949-3.107Z", fill: "#FFF", fillOpacity: 0.7 })));

/* harmony default export */ var mapping = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB4PSIxMSIgeT0iMTQiIHdpZHRoPSIxNCIgaGVpZ2h0PSI5IiByeD0iMCIvPjwvY2xpcFBhdGg+PG1hc2sgaWQ9ImIiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHg9IjExIiB5PSIxNCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjkiIHJ4PSIwIiBmaWxsPSIjRkZGIi8+PC9tYXNrPjwvZGVmcz48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHJ4PSI4IiBmaWxsPSIjMkIyOTc1IiBmaWxsLW9wYWNpdHk9Ii41NCIvPjxnIG1hc2s9InVybCgjYikiIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0ibTIxLjgxOCAxOC40OTQgMi45NS0zLjEwN2EuODQuODQgMCAwIDAtLjAxLTEuMTMzLjc0Ljc0IDAgMCAwLTEuMDc2LS4wMWwtMy4yNjMgMy4yMDJoLTQuODQ2bC0zLjI2Mi0zLjIwM2EuNzQyLjc0MiAwIDAgMC0uNzQyLS4yMDkuNzkuNzkgMCAwIDAtLjU0My41NzIuODM4LjgzOCAwIDAgMCAuMTk5Ljc4MWwyLjk0OSAzLjEwNy0yLjk0OSAzLjEwN2EuODMuODMgMCAwIDAtLjIyNS41NzJjMCAuMjE1LjA4LjQyLjIyNS41NzIuMTQ0LjE1Mi4zNC4yMzcuNTQzLjIzN2EuNzQ4Ljc0OCAwIDAgMCAuNTQyLS4yMzdsMy4yNjMtMy4yMDJoNC44NDZsMy4yNjMgMy4yMDJjLjE0My4xNTIuMzM5LjIzNy41NDMuMjM3YS43NDguNzQ4IDAgMCAwIC41NDItLjIzNy44MzEuODMxIDAgMCAwIC4yMjUtLjU3MmMwLS4yMTQtLjA4LS40Mi0uMjI1LS41NzJsLTIuOTQ5LTMuMTA3WiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuNyIvPjwvZz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/logoIcon.svg
var logoIcon_defProp = Object.defineProperty;
var logoIcon_getOwnPropSymbols = Object.getOwnPropertySymbols;
var logoIcon_hasOwnProp = Object.prototype.hasOwnProperty;
var logoIcon_propIsEnum = Object.prototype.propertyIsEnumerable;
var logoIcon_defNormalProp = (obj, key, value) => key in obj ? logoIcon_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var logoIcon_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (logoIcon_hasOwnProp.call(b, prop))
      logoIcon_defNormalProp(a, prop, b[prop]);
  if (logoIcon_getOwnPropSymbols)
    for (var prop of logoIcon_getOwnPropSymbols(b)) {
      if (logoIcon_propIsEnum.call(b, prop))
        logoIcon_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgLogoIcon = (props) => /* @__PURE__ */ React.createElement("svg", logoIcon_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 22, height: 22 }, props), /* @__PURE__ */ React.createElement("path", { d: "M19.31 11.506V7.98q0-.055-.01-.109-.011-.054-.032-.104-.021-.05-.052-.096-.03-.046-.069-.085-.039-.038-.084-.069-.046-.03-.096-.051-.051-.021-.105-.032-.053-.01-.108-.01-.11 0-.213.042-.102.042-.18.12-.079.079-.121.18-.042.103-.042.214v3.527q0 .351-.262.603-.271.26-.658.26h-.237q-.387 0-.658-.26-.262-.252-.262-.603v-4.6q0-1.977-1.45-3.372-1.442-1.387-3.476-1.387-2.033 0-3.475 1.387-1.45 1.395-1.45 3.372v4.6q0 .351-.262.603-.271.26-.658.26t-.658-.26q-.262-.252-.262-.603V7.98q0-.055-.01-.109-.012-.054-.033-.104-.02-.05-.05-.096-.031-.046-.07-.085-.039-.038-.084-.069-.046-.03-.097-.051-.05-.021-.104-.032-.054-.01-.108-.01-.055 0-.109.01t-.104.032q-.05.02-.096.051-.046.03-.085.07-.038.038-.069.084-.03.045-.051.096-.021.05-.032.104-.01.054-.01.109v3.527q0 .825.602 1.405.594.571 1.43.571.835 0 1.429-.571.603-.58.603-1.405v-4.6q0-1.504 1.11-2.57Q9.61 3.26 11.194 3.26q1.586 0 2.704 1.075 1.11 1.067 1.11 2.571v4.6q0 .825.603 1.405.594.571 1.429.571h.237q.835 0 1.429-.571.603-.58.603-1.405Zm-6.74-1.514q.51-.53.51-1.275 0-.745-.51-1.274-.519-.539-1.256-.539-.738 0-1.256.539-.51.53-.51 1.274 0 .745.51 1.275.518.539 1.256.539.737 0 1.256-.54Zm-.802-1.778q.199.207.199.503 0 .297-.199.504-.19.197-.454.197-.265 0-.455-.197-.199-.207-.199-.504 0-.296.2-.503.19-.198.454-.198t.454.198Zm-1.252 4.035v7.543q0 .055.01.109.01.053.032.104.02.05.051.096.03.046.07.084.038.04.084.07.045.03.096.051.05.021.104.032.054.01.109.01t.108-.01q.054-.011.105-.032.05-.021.096-.051.045-.03.084-.07.039-.038.07-.084.03-.045.05-.096.022-.05.032-.104.011-.054.011-.109V12.25q0-.054-.01-.108-.011-.054-.032-.105-.021-.05-.052-.096-.03-.045-.069-.084-.039-.039-.084-.07-.046-.03-.096-.05-.051-.022-.105-.032-.053-.011-.108-.011t-.109.01q-.053.011-.104.032-.05.021-.096.052-.046.03-.085.069-.038.039-.069.084-.03.046-.051.096-.021.051-.032.105-.01.054-.01.108ZM8.12 14.283v4.304q0 .055.01.108.01.054.032.105.02.05.051.096.03.045.07.084.038.039.084.07.045.03.096.05.05.022.104.032.054.011.109.011t.108-.01q.054-.011.105-.032.05-.021.096-.052.045-.03.084-.069.039-.039.07-.084.03-.046.05-.096.022-.051.032-.105.011-.053.011-.108v-6.174q0-.457-.442-.573-.47-.123-.679.31-.782 1.552-1.623 2.293-.622.548-2.244 1.056-.656.207-1.063.759-.407.553-.407 1.239 0 .87.62 1.484.617.613 1.488.613h.422q.872 0 1.49-.613.618-.615.618-1.484 0-.055-.01-.109-.01-.053-.032-.104-.02-.05-.051-.096-.03-.046-.07-.084-.038-.04-.084-.07-.045-.03-.096-.05-.05-.022-.104-.033-.054-.01-.109-.01t-.108.01q-.054.011-.105.032-.05.021-.096.052-.045.03-.084.069-.039.038-.07.084-.03.046-.05.096-.022.05-.032.104-.011.054-.011.109 0 .406-.29.694-.293.29-.706.29h-.422q-.413 0-.705-.29-.29-.288-.29-.694 0-.719.69-.937 1.848-.578 2.647-1.283.46-.406.896-.994Zm6.058 0v4.304q0 .055-.01.108-.011.054-.032.105-.021.05-.052.096-.03.045-.069.084-.039.039-.084.07-.046.03-.096.05-.051.022-.105.032-.053.011-.108.011t-.109-.01q-.054-.011-.104-.032-.05-.021-.096-.052-.046-.03-.085-.069-.038-.039-.069-.084-.03-.046-.051-.096-.021-.051-.032-.105-.01-.053-.01-.108v-6.174q0-.457.442-.573.47-.123.678.31.783 1.552 1.623 2.293.622.548 2.244 1.056.657.207 1.063.759.408.553.408 1.239 0 .87-.62 1.484-.617.613-1.489.613h-.422q-.871 0-1.489-.613-.619-.615-.619-1.484 0-.055.01-.109.011-.053.032-.104.021-.05.052-.096.03-.046.069-.084.039-.04.084-.07.046-.03.096-.05.051-.022.105-.033.053-.01.108-.01t.109.01q.054.011.104.032.05.021.096.052.046.03.085.069.038.038.069.084.03.046.051.096.021.05.032.104.01.054.01.109 0 .406.291.694.292.29.705.29h.422q.413 0 .706-.29.29-.288.29-.694 0-.719-.69-.937-1.848-.578-2.647-1.283-.461-.406-.896-.994Zm-5.081-1.616.017-.035-.007.014-.01.02Zm4.104 0q-.01-.017-.017-.035l.006.014.01.02Z", fillRule: "evenodd", fill: "#FFF" }));

/* harmony default export */ var logoIcon = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiI+PHBhdGggZD0iTTE5LjMxIDExLjUwNlY3Ljk4cTAtLjA1NS0uMDEtLjEwOS0uMDExLS4wNTQtLjAzMi0uMTA0LS4wMjEtLjA1LS4wNTItLjA5Ni0uMDMtLjA0Ni0uMDY5LS4wODUtLjAzOS0uMDM4LS4wODQtLjA2OS0uMDQ2LS4wMy0uMDk2LS4wNTEtLjA1MS0uMDIxLS4xMDUtLjAzMi0uMDUzLS4wMS0uMTA4LS4wMS0uMTEgMC0uMjEzLjA0Mi0uMTAyLjA0Mi0uMTguMTItLjA3OS4wNzktLjEyMS4xOC0uMDQyLjEwMy0uMDQyLjIxNHYzLjUyN3EwIC4zNTEtLjI2Mi42MDMtLjI3MS4yNi0uNjU4LjI2aC0uMjM3cS0uMzg3IDAtLjY1OC0uMjYtLjI2Mi0uMjUyLS4yNjItLjYwM3YtNC42cTAtMS45NzctMS40NS0zLjM3Mi0xLjQ0Mi0xLjM4Ny0zLjQ3Ni0xLjM4Ny0yLjAzMyAwLTMuNDc1IDEuMzg3LTEuNDUgMS4zOTUtMS40NSAzLjM3MnY0LjZxMCAuMzUxLS4yNjIuNjAzLS4yNzEuMjYtLjY1OC4yNnQtLjY1OC0uMjZxLS4yNjItLjI1Mi0uMjYyLS42MDNWNy45OHEwLS4wNTUtLjAxLS4xMDktLjAxMi0uMDU0LS4wMzMtLjEwNC0uMDItLjA1LS4wNS0uMDk2LS4wMzEtLjA0Ni0uMDctLjA4NS0uMDM5LS4wMzgtLjA4NC0uMDY5LS4wNDYtLjAzLS4wOTctLjA1MS0uMDUtLjAyMS0uMTA0LS4wMzItLjA1NC0uMDEtLjEwOC0uMDEtLjA1NSAwLS4xMDkuMDF0LS4xMDQuMDMycS0uMDUuMDItLjA5Ni4wNTEtLjA0Ni4wMy0uMDg1LjA3LS4wMzguMDM4LS4wNjkuMDg0LS4wMy4wNDUtLjA1MS4wOTYtLjAyMS4wNS0uMDMyLjEwNC0uMDEuMDU0LS4wMS4xMDl2My41MjdxMCAuODI1LjYwMiAxLjQwNS41OTQuNTcxIDEuNDMuNTcxLjgzNSAwIDEuNDI5LS41NzEuNjAzLS41OC42MDMtMS40MDV2LTQuNnEwLTEuNTA0IDEuMTEtMi41N1E5LjYxIDMuMjYgMTEuMTk0IDMuMjZxMS41ODYgMCAyLjcwNCAxLjA3NSAxLjExIDEuMDY3IDEuMTEgMi41NzF2NC42cTAgLjgyNS42MDMgMS40MDUuNTk0LjU3MSAxLjQyOS41NzFoLjIzN3EuODM1IDAgMS40MjktLjU3MS42MDMtLjU4LjYwMy0xLjQwNVptLTYuNzQtMS41MTRxLjUxLS41My41MS0xLjI3NSAwLS43NDUtLjUxLTEuMjc0LS41MTktLjUzOS0xLjI1Ni0uNTM5LS43MzggMC0xLjI1Ni41MzktLjUxLjUzLS41MSAxLjI3NCAwIC43NDUuNTEgMS4yNzUuNTE4LjUzOSAxLjI1Ni41MzkuNzM3IDAgMS4yNTYtLjU0Wm0tLjgwMi0xLjc3OHEuMTk5LjIwNy4xOTkuNTAzIDAgLjI5Ny0uMTk5LjUwNC0uMTkuMTk3LS40NTQuMTk3LS4yNjUgMC0uNDU1LS4xOTctLjE5OS0uMjA3LS4xOTktLjUwNCAwLS4yOTYuMi0uNTAzLjE5LS4xOTguNDU0LS4xOTh0LjQ1NC4xOThabS0xLjI1MiA0LjAzNXY3LjU0M3EwIC4wNTUuMDEuMTA5LjAxLjA1My4wMzIuMTA0LjAyLjA1LjA1MS4wOTYuMDMuMDQ2LjA3LjA4NC4wMzguMDQuMDg0LjA3LjA0NS4wMy4wOTYuMDUxLjA1LjAyMS4xMDQuMDMyLjA1NC4wMS4xMDkuMDF0LjEwOC0uMDFxLjA1NC0uMDExLjEwNS0uMDMyLjA1LS4wMjEuMDk2LS4wNTEuMDQ1LS4wMy4wODQtLjA3LjAzOS0uMDM4LjA3LS4wODQuMDMtLjA0NS4wNS0uMDk2LjAyMi0uMDUuMDMyLS4xMDQuMDExLS4wNTQuMDExLS4xMDlWMTIuMjVxMC0uMDU0LS4wMS0uMTA4LS4wMTEtLjA1NC0uMDMyLS4xMDUtLjAyMS0uMDUtLjA1Mi0uMDk2LS4wMy0uMDQ1LS4wNjktLjA4NC0uMDM5LS4wMzktLjA4NC0uMDctLjA0Ni0uMDMtLjA5Ni0uMDUtLjA1MS0uMDIyLS4xMDUtLjAzMi0uMDUzLS4wMTEtLjEwOC0uMDExdC0uMTA5LjAxcS0uMDUzLjAxMS0uMTA0LjAzMi0uMDUuMDIxLS4wOTYuMDUyLS4wNDYuMDMtLjA4NS4wNjktLjAzOC4wMzktLjA2OS4wODQtLjAzLjA0Ni0uMDUxLjA5Ni0uMDIxLjA1MS0uMDMyLjEwNS0uMDEuMDU0LS4wMS4xMDhaTTguMTIgMTQuMjgzdjQuMzA0cTAgLjA1NS4wMS4xMDguMDEuMDU0LjAzMi4xMDUuMDIuMDUuMDUxLjA5Ni4wMy4wNDUuMDcuMDg0LjAzOC4wMzkuMDg0LjA3LjA0NS4wMy4wOTYuMDUuMDUuMDIyLjEwNC4wMzIuMDU0LjAxMS4xMDkuMDExdC4xMDgtLjAxcS4wNTQtLjAxMS4xMDUtLjAzMi4wNS0uMDIxLjA5Ni0uMDUyLjA0NS0uMDMuMDg0LS4wNjkuMDM5LS4wMzkuMDctLjA4NC4wMy0uMDQ2LjA1LS4wOTYuMDIyLS4wNTEuMDMyLS4xMDUuMDExLS4wNTMuMDExLS4xMDh2LTYuMTc0cTAtLjQ1Ny0uNDQyLS41NzMtLjQ3LS4xMjMtLjY3OS4zMS0uNzgyIDEuNTUyLTEuNjIzIDIuMjkzLS42MjIuNTQ4LTIuMjQ0IDEuMDU2LS42NTYuMjA3LTEuMDYzLjc1OS0uNDA3LjU1My0uNDA3IDEuMjM5IDAgLjg3LjYyIDEuNDg0LjYxNy42MTMgMS40ODguNjEzaC40MjJxLjg3MiAwIDEuNDktLjYxMy42MTgtLjYxNS42MTgtMS40ODQgMC0uMDU1LS4wMS0uMTA5LS4wMS0uMDUzLS4wMzItLjEwNC0uMDItLjA1LS4wNTEtLjA5Ni0uMDMtLjA0Ni0uMDctLjA4NC0uMDM4LS4wNC0uMDg0LS4wNy0uMDQ1LS4wMy0uMDk2LS4wNS0uMDUtLjAyMi0uMTA0LS4wMzMtLjA1NC0uMDEtLjEwOS0uMDF0LS4xMDguMDFxLS4wNTQuMDExLS4xMDUuMDMyLS4wNS4wMjEtLjA5Ni4wNTItLjA0NS4wMy0uMDg0LjA2OS0uMDM5LjAzOC0uMDcuMDg0LS4wMy4wNDYtLjA1LjA5Ni0uMDIyLjA1LS4wMzIuMTA0LS4wMTEuMDU0LS4wMTEuMTA5IDAgLjQwNi0uMjkuNjk0LS4yOTMuMjktLjcwNi4yOWgtLjQyMnEtLjQxMyAwLS43MDUtLjI5LS4yOS0uMjg4LS4yOS0uNjk0IDAtLjcxOS42OS0uOTM3IDEuODQ4LS41NzggMi42NDctMS4yODMuNDYtLjQwNi44OTYtLjk5NFptNi4wNTggMHY0LjMwNHEwIC4wNTUtLjAxLjEwOC0uMDExLjA1NC0uMDMyLjEwNS0uMDIxLjA1LS4wNTIuMDk2LS4wMy4wNDUtLjA2OS4wODQtLjAzOS4wMzktLjA4NC4wNy0uMDQ2LjAzLS4wOTYuMDUtLjA1MS4wMjItLjEwNS4wMzItLjA1My4wMTEtLjEwOC4wMTF0LS4xMDktLjAxcS0uMDU0LS4wMTEtLjEwNC0uMDMyLS4wNS0uMDIxLS4wOTYtLjA1Mi0uMDQ2LS4wMy0uMDg1LS4wNjktLjAzOC0uMDM5LS4wNjktLjA4NC0uMDMtLjA0Ni0uMDUxLS4wOTYtLjAyMS0uMDUxLS4wMzItLjEwNS0uMDEtLjA1My0uMDEtLjEwOHYtNi4xNzRxMC0uNDU3LjQ0Mi0uNTczLjQ3LS4xMjMuNjc4LjMxLjc4MyAxLjU1MiAxLjYyMyAyLjI5My42MjIuNTQ4IDIuMjQ0IDEuMDU2LjY1Ny4yMDcgMS4wNjMuNzU5LjQwOC41NTMuNDA4IDEuMjM5IDAgLjg3LS42MiAxLjQ4NC0uNjE3LjYxMy0xLjQ4OS42MTNoLS40MjJxLS44NzEgMC0xLjQ4OS0uNjEzLS42MTktLjYxNS0uNjE5LTEuNDg0IDAtLjA1NS4wMS0uMTA5LjAxMS0uMDUzLjAzMi0uMTA0LjAyMS0uMDUuMDUyLS4wOTYuMDMtLjA0Ni4wNjktLjA4NC4wMzktLjA0LjA4NC0uMDcuMDQ2LS4wMy4wOTYtLjA1LjA1MS0uMDIyLjEwNS0uMDMzLjA1My0uMDEuMTA4LS4wMXQuMTA5LjAxcS4wNTQuMDExLjEwNC4wMzIuMDUuMDIxLjA5Ni4wNTIuMDQ2LjAzLjA4NS4wNjkuMDM4LjAzOC4wNjkuMDg0LjAzLjA0Ni4wNTEuMDk2LjAyMS4wNS4wMzIuMTA0LjAxLjA1NC4wMS4xMDkgMCAuNDA2LjI5MS42OTQuMjkyLjI5LjcwNS4yOWguNDIycS40MTMgMCAuNzA2LS4yOS4yOS0uMjg4LjI5LS42OTQgMC0uNzE5LS42OS0uOTM3LTEuODQ4LS41NzgtMi42NDctMS4yODMtLjQ2MS0uNDA2LS44OTYtLjk5NFptLTUuMDgxLTEuNjE2LjAxNy0uMDM1LS4wMDcuMDE0LS4wMS4wMlptNC4xMDQgMHEtLjAxLS4wMTctLjAxNy0uMDM1bC4wMDYuMDE0LjAxLjAyWiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGIi8+PC9zdmc+");

;// CONCATENATED MODULE: ./src/assets/exit.svg
var exit_defProp = Object.defineProperty;
var exit_getOwnPropSymbols = Object.getOwnPropertySymbols;
var exit_hasOwnProp = Object.prototype.hasOwnProperty;
var exit_propIsEnum = Object.prototype.propertyIsEnumerable;
var exit_defNormalProp = (obj, key, value) => key in obj ? exit_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var exit_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (exit_hasOwnProp.call(b, prop))
      exit_defNormalProp(a, prop, b[prop]);
  if (exit_getOwnPropSymbols)
    for (var prop of exit_getOwnPropSymbols(b)) {
      if (exit_propIsEnum.call(b, prop))
        exit_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgExit = (props) => /* @__PURE__ */ React.createElement("svg", exit_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 22, height: 22 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "exit_svg__a" }, /* @__PURE__ */ React.createElement("rect", { x: 3, y: 4, width: 16, height: 15, rx: 0 })), /* @__PURE__ */ React.createElement("mask", { id: "exit_svg__b", style: {
  maskType: "alpha"
}, maskUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("rect", { x: 3.002, y: 4, width: 15.998, height: 15, rx: 0, fill: "#FFF" }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#exit_svg__a)" }, /* @__PURE__ */ React.createElement("g", { mask: "url(#exit_svg__b)" }, /* @__PURE__ */ React.createElement("path", { d: "M18.306 14.706c-.372 0-.677.285-.677.634v1.425c0 .522-.456.95-1.014.95H5.368c-.558 0-1.015-.428-1.015-.95V6.233c0-.522.457-.95 1.015-.95h11.247c.558 0 1.014.428 1.014.95v.634c0 .348.305.633.677.633.372 0 .677-.285.677-.633v-.634c0-1.22-1.066-2.217-2.368-2.217H5.368C4.065 4.016 3 5.014 3 6.233v10.532c0 1.22 1.066 2.217 2.368 2.217h11.247c1.302 0 2.368-.998 2.368-2.217v-1.426c0-.348-.305-.633-.677-.633Z", fill: "#FFF" })), /* @__PURE__ */ React.createElement("path", { d: "M15.837 13.415a.688.688 0 0 0 .482.182.727.727 0 0 0 .482-.182l1.987-1.86.008-.009.043-.04c.008-.007.017-.015.017-.023.008-.008.016-.016.016-.024.009-.008.017-.016.017-.032.009-.008.009-.016.017-.023.009-.008.009-.024.017-.032.009-.008.009-.016.017-.024.009-.008.009-.024.009-.032s.008-.016.008-.031c0-.008.009-.024.009-.032s.008-.016.008-.032 0-.024.008-.04v-.023a.319.319 0 0 0 0-.127v-.024c0-.015 0-.023-.008-.04 0-.007-.008-.015-.008-.03 0-.009-.009-.025-.009-.033s-.008-.015-.008-.031c0-.008-.009-.024-.009-.032s-.008-.016-.017-.024c-.008-.008-.008-.024-.017-.032-.008-.007-.008-.015-.017-.023-.008-.008-.008-.016-.017-.032-.008-.008-.016-.016-.016-.024-.009-.008-.009-.016-.017-.024a.1.1 0 0 0-.043-.04l-.008-.007L16.8 8.774a.712.712 0 0 0-.956 0 .607.607 0 0 0 0 .895l.829.776H10.99c-.372 0-.676.285-.676.633 0 .349.304.634.676.634h5.683l-.829.776c-.27.277-.27.673-.008.926v.001Z", fill: "#FFF" })));

/* harmony default export */ var exit = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB4PSIzIiB5PSI0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTUiIHJ4PSIwIi8+PC9jbGlwUGF0aD48bWFzayBpZD0iYiIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHJlY3QgeD0iMy4wMDIiIHk9IjQiIHdpZHRoPSIxNS45OTgiIGhlaWdodD0iMTUiIHJ4PSIwIiBmaWxsPSIjRkZGIi8+PC9tYXNrPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxnIG1hc2s9InVybCgjYikiPjxwYXRoIGQ9Ik0xOC4zMDYgMTQuNzA2Yy0uMzcyIDAtLjY3Ny4yODUtLjY3Ny42MzR2MS40MjVjMCAuNTIyLS40NTYuOTUtMS4wMTQuOTVINS4zNjhjLS41NTggMC0xLjAxNS0uNDI4LTEuMDE1LS45NVY2LjIzM2MwLS41MjIuNDU3LS45NSAxLjAxNS0uOTVoMTEuMjQ3Yy41NTggMCAxLjAxNC40MjggMS4wMTQuOTV2LjYzNGMwIC4zNDguMzA1LjYzMy42NzcuNjMzLjM3MiAwIC42NzctLjI4NS42NzctLjYzM3YtLjYzNGMwLTEuMjItMS4wNjYtMi4yMTctMi4zNjgtMi4yMTdINS4zNjhDNC4wNjUgNC4wMTYgMyA1LjAxNCAzIDYuMjMzdjEwLjUzMmMwIDEuMjIgMS4wNjYgMi4yMTcgMi4zNjggMi4yMTdoMTEuMjQ3YzEuMzAyIDAgMi4zNjgtLjk5OCAyLjM2OC0yLjIxN3YtMS40MjZjMC0uMzQ4LS4zMDUtLjYzMy0uNjc3LS42MzNaIiBmaWxsPSIjRkZGIi8+PC9nPjxwYXRoIGQ9Ik0xNS44MzcgMTMuNDE1YS42ODguNjg4IDAgMCAwIC40ODIuMTgyLjcyNy43MjcgMCAwIDAgLjQ4Mi0uMTgybDEuOTg3LTEuODYuMDA4LS4wMDkuMDQzLS4wNGMuMDA4LS4wMDcuMDE3LS4wMTUuMDE3LS4wMjMuMDA4LS4wMDguMDE2LS4wMTYuMDE2LS4wMjQuMDA5LS4wMDguMDE3LS4wMTYuMDE3LS4wMzIuMDA5LS4wMDguMDA5LS4wMTYuMDE3LS4wMjMuMDA5LS4wMDguMDA5LS4wMjQuMDE3LS4wMzIuMDA5LS4wMDguMDA5LS4wMTYuMDE3LS4wMjQuMDA5LS4wMDguMDA5LS4wMjQuMDA5LS4wMzJzLjAwOC0uMDE2LjAwOC0uMDMxYzAtLjAwOC4wMDktLjAyNC4wMDktLjAzMnMuMDA4LS4wMTYuMDA4LS4wMzIgMC0uMDI0LjAwOC0uMDR2LS4wMjNhLjMxOS4zMTkgMCAwIDAgMC0uMTI3di0uMDI0YzAtLjAxNSAwLS4wMjMtLjAwOC0uMDQgMC0uMDA3LS4wMDgtLjAxNS0uMDA4LS4wMyAwLS4wMDktLjAwOS0uMDI1LS4wMDktLjAzM3MtLjAwOC0uMDE1LS4wMDgtLjAzMWMwLS4wMDgtLjAwOS0uMDI0LS4wMDktLjAzMnMtLjAwOC0uMDE2LS4wMTctLjAyNGMtLjAwOC0uMDA4LS4wMDgtLjAyNC0uMDE3LS4wMzItLjAwOC0uMDA3LS4wMDgtLjAxNS0uMDE3LS4wMjMtLjAwOC0uMDA4LS4wMDgtLjAxNi0uMDE3LS4wMzItLjAwOC0uMDA4LS4wMTYtLjAxNi0uMDE2LS4wMjQtLjAwOS0uMDA4LS4wMDktLjAxNi0uMDE3LS4wMjRhLjEuMSAwIDAgMC0uMDQzLS4wNGwtLjAwOC0uMDA3TDE2LjggOC43NzRhLjcxMi43MTIgMCAwIDAtLjk1NiAwIC42MDcuNjA3IDAgMCAwIDAgLjg5NWwuODI5Ljc3NkgxMC45OWMtLjM3MiAwLS42NzYuMjg1LS42NzYuNjMzIDAgLjM0OS4zMDQuNjM0LjY3Ni42MzRoNS42ODNsLS44MjkuNzc2Yy0uMjcuMjc3LS4yNy42NzMtLjAwOC45MjZ2LjAwMVoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+");

;// CONCATENATED MODULE: ./src/layouts/components/Header.tsx











/* harmony default export */ var Header = (function () {
  var _useModel = (0,_umi_production_exports.useModel)("wallet"),
    disConnect = _useModel.disConnect,
    btcAddress = _useModel.btcAddress,
    loginModalShow = _useModel.loginModalShow,
    setLoginModalShow = _useModel.setLoginModalShow,
    connected = _useModel.connected,
    network = _useModel.network;
  var showAddress = (0,react.useMemo)(function () {
    if (btcAddress) return btcAddress.replace(/(\w{5})\w+(\w{3})/, "$1...$2");
  }, [btcAddress]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "header inside",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "headerwrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "left",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: logo,
          alt: "",
          className: "logo"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "routes ",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "item",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              src: wrapping,
              alt: ""
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "desc",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "title",
                children: ["Wrapping ", network === 'testnet' && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "beta",
                  children: "BETA"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "subTitle",
                children: "Smartcontrat Bridging"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "item disabled",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              src: mapping,
              alt: ""
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "desc",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "title",
                children: "Mapping"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "subTitle",
                children: "Atomized Bridging"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "navWrap",
        children: connected ? /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
          dropdownRender: function dropdownRender() {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "walletInfo",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.ZP, {
                className: "item",
                type: "primary"
                //   onClick={() => onChange(item)}
                ,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: logoIcon,
                  alt: ""
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  className: "name",
                  children: showAddress
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.ZP, {
                className: "item active",
                type: "primary",
                onClick: disConnect,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: exit,
                  alt: ""
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  className: "name",
                  children: "Disconnect"
                })]
              })]
            });
          },
          placement: "bottomRight",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            children: showAddress
          })
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          onClick: function onClick() {
            return setLoginModalShow(true);
          },
          children: "Connect"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(LoginModal, {
      show: loginModalShow,
      onClose: function onClose() {
        return setLoginModalShow(false);
      }
    })]
  });
});
;// CONCATENATED MODULE: ./src/layouts/index.tsx









var _themes = {
  token: {
    wireframe: false,
    colorText: "rgba(255, 255, 255, 1)",
    colorPrimary: "#6e66fa",
    colorInfo: "rgba(110, 102, 250, 0.32)",
    colorSuccess: "#6e66fa",
    colorWarning: "#f7931a",
    borderRadius: 8,
    colorBgBase: "#080731",
    fontFamily: "Montserrat"
  },
  components: {
    Segmented: {
      trackBg: "rgba(110, 102, 250, 0.32)",
      itemSelectedBg: "rgb(110, 102, 250)",
      fontSize: 13
    },
    Card: {
      colorBgContainer: "#1A185F"
    },
    Modal: {
      contentBg: "#1b185d",
      headerBg: "#1b185d"
    },
    Input: {
      activeBorderColor: "rgb(110, 102, 250)",
      colorBgContainer: "rgb(8, 7, 49)"
    }
  }
};
function Layout() {
  var location = (0,_umi_production_exports.useLocation)();
  console.log(location);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
    theme: objectSpread2_default()({
      algorithm: theme/* default */.Z.darkAlgorithm
    }, _themes),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "page",
      children: [location.pathname !== "/" ? /*#__PURE__*/(0,jsx_runtime.jsx)(Header, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "header",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "headerwrap",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: logo,
            alt: "",
            className: "logo"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "navWrap",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Nav, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "entryBtn",
              onClick: function onClick() {
                message/* default */.ZP.info({
                  content: "coming soon",
                  icon: "🚀"
                });
              },
              children: "Enter APP"
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "content",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "footer",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "footwrap",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "navWrap",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Nav, {})
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "corp",
            children: "Octopus.space@2024 All Rights Reserved"
          })]
        })
      })]
    })
  });
}

/***/ }),

/***/ 91198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/metalet.14c117c6.png";

/***/ })

}]);