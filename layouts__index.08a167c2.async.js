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
// EXTERNAL MODULE: ./node_modules/antd/es/grid/index.js
var grid = __webpack_require__(75302);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 29 modules
var modal = __webpack_require__(21555);
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

/***/ 8245:
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

const SvgLogo = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 243.586, height: 32.609 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { x1: 0.5, y1: 0, x2: 0.5, y2: 1, id: "logo_svg__a" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#03F5F5" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#4F52FF" }))), /* @__PURE__ */ React.createElement("path", { d: "M4.302 9.29q.16-1.524.774-2.95.802-1.865 2.264-3.302Q8.8 1.602 10.692.815 12.65 0 14.792 0q2.143 0 4.102.815 1.892.787 3.352 2.223 1.462 1.437 2.264 3.303.613 1.425.774 2.95 1.138.363 2.052 1.262 1.542 1.516 1.542 3.664t-1.542 3.665q-1.031 1.014-2.348 1.347v2.429q0 .538.38.918t.919.38q.538 0 .918-.38t.38-.918v-.136q0-.099.02-.195.019-.097.056-.188.038-.091.093-.173.055-.082.124-.151.07-.07.152-.125.082-.055.173-.092.09-.038.187-.057.097-.02.195-.02.099 0 .195.02.097.02.188.057.091.038.173.092.082.055.152.125.07.07.124.151.055.082.092.173.038.091.057.188.02.096.02.195v.136q0 1.366-.967 2.332-.966.966-2.332.966-1.367 0-2.333-.966-.966-.966-.966-2.332v-2.302q-1.755-.195-3.056-1.474-1.542-1.517-1.542-3.665t1.542-3.664q1.395-1.372 3.312-1.497-.397-2.622-2.4-4.592Q18.338 2 14.792 2q-3.546 0-6.051 2.464-2.003 1.97-2.4 4.592 1.917.125 3.311 1.497 1.542 1.516 1.542 3.664t-1.542 3.665q-1.3 1.279-3.055 1.474v2.302q0 1.366-.967 2.332-.966.966-2.332.966-1.367 0-2.333-.966Q0 23.024 0 21.658v-.136q0-.099.02-.195.018-.097.056-.188.038-.091.093-.173.054-.082.124-.151.07-.07.151-.125.082-.055.173-.092.091-.038.188-.057.097-.02.195-.02.099 0 .195.02.097.02.188.057.09.038.173.092.082.055.151.125.07.07.125.151.054.082.092.173.038.091.057.188.02.096.02.195v.136q0 .538.38.918t.918.38q.538 0 .918-.38t.38-.918v-2.43q-1.316-.332-2.348-1.346Q.707 16.365.707 14.217t1.542-3.664q.914-.899 2.053-1.263ZM8.25 11.98q.944.929.944 2.238 0 1.31-.944 2.239-.951.935-2.3.935-1.348 0-2.3-.935-.944-.929-.944-2.239 0-1.31.945-2.238.95-.935 2.3-.935 1.348 0 2.299.935Zm17.683 0q.944.929.944 2.238 0 1.31-.944 2.239-.951.935-2.3.935-1.348 0-2.3-.935-.944-.929-.944-2.239 0-1.31.944-2.238.952-.935 2.3-.935 1.349 0 2.3.935ZM6.364 29.78q-.827-.828-.827-1.998 0-.099-.02-.196-.019-.096-.057-.187-.037-.091-.092-.173-.055-.082-.124-.151-.07-.07-.152-.125-.082-.055-.173-.092-.09-.038-.187-.057-.097-.02-.195-.02-.099 0-.195.02-.097.019-.188.057-.091.037-.173.092-.082.055-.151.125-.07.07-.125.151-.055.082-.092.173-.038.09-.057.188-.02.096-.02.195 0 1.999 1.414 3.412 1.414 1.414 3.413 1.414h.24q2.1 0 3.584-1.484 1.484-1.485 1.484-3.583V17q0-.099-.02-.195-.019-.097-.056-.188-.038-.09-.093-.173-.055-.081-.124-.151-.07-.07-.152-.124-.082-.055-.173-.093-.09-.038-.187-.057Q12.769 16 12.67 16q-.099 0-.195.02-.097.018-.188.056-.09.038-.173.093-.082.054-.151.124-.07.07-.125.151-.054.082-.092.173-.038.091-.057.188-.02.096-.02.195v10.542q0 1.27-.898 2.168-.898.899-2.168.899h-.241q-1.17 0-1.999-.828Zm16.503 0q.828-.828.828-1.998 0-.099.02-.196.019-.096.056-.187.038-.091.093-.173.054-.082.124-.151.07-.07.152-.125.081-.055.172-.092.091-.038.188-.057.097-.02.195-.02.099 0 .195.02.097.019.188.057.09.037.173.092.082.055.151.125.07.07.125.151.054.082.092.173.038.09.057.188.02.096.02.195 0 1.999-1.414 3.412-1.414 1.414-3.413 1.414h-.24q-2.1 0-3.584-1.484-1.484-1.485-1.484-3.583V17q0-.099.02-.195.019-.097.056-.188.038-.09.093-.173.054-.081.124-.151.07-.07.152-.124.081-.055.172-.093.091-.038.188-.057.097-.019.195-.019.099 0 .195.02.097.018.188.056.09.038.173.093.081.054.151.124.07.07.124.151.055.082.093.173.038.091.057.188.019.096.019.195v10.542q0 1.27.898 2.168.899.899 2.17.899h.24q1.17 0 1.998-.828Z", fillRule: "evenodd", fill: "url(#logo_svg__a)" }), /* @__PURE__ */ React.createElement("path", { d: "M243.51 17.554h-12.369c.47 3.7 3.43 4.252 11.231 2.065 0 1.15.09 2.239-.044 3.297-.053.41-.545.95-.96 1.095-3.303 1.152-6.67 1.405-9.999.176-3.482-1.286-5.468-5.358-4.74-9.46.72-4.07 3.83-6.871 7.868-7.091 5.774-.317 9.686 3.871 9.014 9.922v-.004Zm-12.398-3.442h7.983c-.858-1.975-2.295-2.68-4.214-2.579-1.735.09-3.034.798-3.77 2.579ZM202.092 14.54c1.862.06 2.045-2.753.187-2.873-.094-.007-.19-.007-.292-.007-2.31-.004-4.624.406-7.046.645.04.123-.064-.038-.06-.198.142-3.905-1.06-3.57 3.594-4.236 1.747-.25 3.59-.19 5.341.056 3.263.454 5.01 2.291 5.151 5.536.142 3.175.064 6.357.041 9.755a1.444 1.444 0 0 1-1.43 1.43c-3.433.045-6.837.213-10.193-.096-2.799-.261-3.986-2.154-3.997-4.907-.011-2.735 1.21-4.568 3.964-4.963 1.541-.22 3.12-.187 4.74-.134v-.008Zm-1.12 7.161c.101.012.202.015.303.004.69-.056 1.407.022 1.896-.272.694-.413 1.146-1.133 1.16-1.751.015-.619-.406-1.703-1.06-1.833a10.205 10.205 0 0 0-4.169.045c-.642.145-1.43 1.184-1.485 1.87-.041.51.914 1.24 1.575 1.617.5.287 1.187.253 1.776.317l.004.003ZM58.09 16.295c-.018 5.13-3.624 8.678-8.797 8.66-5.147-.023-8.708-3.608-8.708-8.776 0-4.966 3.666-8.57 8.727-8.565 5.195 0 8.797 3.565 8.779 8.681ZM54 16.187c-.011-2.921-1.848-4.717-4.774-4.665-2.766.049-4.565 1.93-4.539 4.754.027 2.925 1.915 4.852 4.71 4.807 2.826-.045 4.614-1.945 4.6-4.892l.003-.004ZM108.773 16.138c.02 5.19-3.482 8.764-8.636 8.812-5.237.052-8.872-3.562-8.861-8.8.011-4.963 3.691-8.555 8.752-8.54 5.125.015 8.727 3.528 8.745 8.528Zm-4.087.15c.03-2.937-1.769-4.777-4.669-4.777-2.78 0-4.613 1.837-4.643 4.657-.03 2.914 1.833 4.9 4.606 4.911 2.836.015 4.673-1.86 4.703-4.791h.003ZM126.674 8.068h4.102c0 3.018-.011 5.958 0 8.894.015 2.895 1.116 4.166 3.553 4.132 2.62-.037 3.849-1.323 3.871-4.102.019-2.94.004-5.88.004-8.909h3.975V24.85c-1.463-.306-2.803-.619-4.154-.842-.325-.056-.69.212-1.045.268-1.46.23-2.934.693-4.379.607-3.43-.205-5.527-2.384-5.893-5.782-.052-.488-.034-.984-.034-1.476V8.068ZM114.745 19.5v4.988h-3.949V8.273c3.501 0 7.036-.29 10.5.09 2.986.327 4.43 2.801 4.221 5.976-.19 2.891-2.135 4.926-5.098 5.134-1.833.127-3.684.023-5.674.023v.003Zm.079-3.827c1.743 0 3.307.182 4.792-.082.683-.123 1.627-1.088 1.676-1.733.045-.581-.896-1.676-1.53-1.777-1.59-.26-3.255-.086-4.938-.086v3.678ZM181.858 24.507h-4.03V8.31c3.575 0 7.162-.279 10.681.09 2.837.294 4.27 2.787 4.099 5.89-.153 2.761-1.934 4.807-4.692 5.124-1.952.223-3.934.197-6.058.29v4.807-.004Zm.049-8.782c1.616 0 3.027.067 4.43-.022 1.109-.071 2.098-.522 2.139-1.83.041-1.296-.851-1.863-2-1.93-1.505-.085-3.02-.022-4.57-.022v3.804ZM156.112 10.818a1.694 1.694 0 0 1-2.135 1.65c-1.317-.357-2.59-.689-3.885-.886a.883.883 0 0 0-.28.003c-1.142.19-1.303 1.767-.284 2.31.049.027.093.049.142.071 1.41.615 2.945.947 4.348 1.569 2.023.894 2.96 2.534 2.788 4.747-.16 2.06-1.414 3.558-3.616 4.188-2.766.79-5.54.652-8.216-.343-.507-.19-1.015-.973-1.108-1.55-.1-.615-.105-1.24-.086-1.919a1.042 1.042 0 0 1 1.448-.935c.153.067.303.123.46.171 1.406.436 2.821 1.006 4.262 1.107h.026c1.482.082 2-2.005.672-2.657-.019-.007-.034-.018-.053-.026-1.276-.592-2.71-.853-4.012-1.412-1.896-.808-2.833-2.317-2.762-4.385.071-2.068 1.131-3.465 3.053-4.207 2.8-1.077 5.599-.868 8.346.175.38.145.787.745.829 1.166.037.388.056.775.06 1.16l.003.003ZM163.166 20.852a1.17 1.17 0 0 1 1.493-1.103c1.575.454 3.057.883 4.546 1.267.456.115 1.03.097 1.456-.079.112-.044.217-.104.321-.167.71-.447.832-1.476.175-1.99a.868.868 0 0 0-.22-.127c-1.545-.618-3.206-.964-4.74-1.602-3.053-1.27-4.15-5.063-1.892-7.276 1.13-1.107 2.99-1.882 4.59-2.016 1.777-.15 3.599.223 5.405.503a1.3 1.3 0 0 1 1.109 1.285v1.766c0 .887-.859 1.48-1.71 1.234-.007 0-.01 0-.018-.004-1.419-.399-2.852-.838-4.304-.976a1.152 1.152 0 0 0-.16 0c-1.187.093-1.426 1.725-.389 2.31a1.6 1.6 0 0 0 .139.07c1.291.578 2.791.746 3.997 1.439 1.112.64 2.3 1.583 2.844 2.686 1.224 2.49-.026 5.13-2.646 6.155-2.975 1.163-5.976.902-8.906-.145-.466-.167-.937-.924-1.008-1.46a12.215 12.215 0 0 1-.082-1.763v-.007ZM75.738 9.834q.802-.056 2.37 0V8.057h4.064v1.781h8.249v3.841h-8.249c0 1.7.094 3.168.15 4.636.067 1.766 1.048 2.831 2.829 2.697 1.747-.134 3.467-.6 5.259-.931v3.994c-3.352.902-6.793 1.826-9.929-.421-3.404-2.44-1.93-6.502-2.373-9.97-.713-.101-1.478-.008-2.37-.135V9.834ZM162.423 22.76c-.16 1.196-.87 2.086-2.325 2.18-1.362.089-2.55-1.048-2.474-2.382.078-1.404.85-2.273 2.306-2.366 1.359-.085 2.497 1.044 2.49 2.564l.003.004ZM68.187 21.25a4.951 4.951 0 0 1-4.953-4.948 4.948 4.948 0 0 1 4.953-4.944c1.74 0 3.27.89 4.15 2.243l2.199-3.688a8.986 8.986 0 0 0-6.35-2.609c-4.978 0-9.013 4.028-9.013 8.998s4.035 9.002 9.014 9.002c2.176 0 4.169-.771 5.73-2.053l-2.24-3.435a4.943 4.943 0 0 1-3.49 1.435ZM220.135 21.25a4.951 4.951 0 0 1-4.953-4.948 4.948 4.948 0 0 1 4.953-4.944c1.739 0 3.27.89 4.15 2.243l2.198-3.688a8.986 8.986 0 0 0-6.348-2.609c-4.98 0-9.014 4.028-9.014 8.998s4.034 9.002 9.014 9.002c2.176 0 4.169-.771 5.729-2.053l-2.24-3.435a4.943 4.943 0 0 1-3.49 1.435Z", fill: "#FFF" }));

/* harmony default export */ var logo = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyNDMuNTg2IiBoZWlnaHQ9IjMyLjYwOSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIuNSIgeTE9IjAiIHgyPSIuNSIgeTI9IjEiIGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDNGNUY1Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNEY1MkZGIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTQuMzAyIDkuMjlxLjE2LTEuNTI0Ljc3NC0yLjk1LjgwMi0xLjg2NSAyLjI2NC0zLjMwMlE4LjggMS42MDIgMTAuNjkyLjgxNSAxMi42NSAwIDE0Ljc5MiAwcTIuMTQzIDAgNC4xMDIuODE1IDEuODkyLjc4NyAzLjM1MiAyLjIyMyAxLjQ2MiAxLjQzNyAyLjI2NCAzLjMwMy42MTMgMS40MjUuNzc0IDIuOTUgMS4xMzguMzYzIDIuMDUyIDEuMjYyIDEuNTQyIDEuNTE2IDEuNTQyIDMuNjY0dC0xLjU0MiAzLjY2NXEtMS4wMzEgMS4wMTQtMi4zNDggMS4zNDd2Mi40MjlxMCAuNTM4LjM4LjkxOHQuOTE5LjM4cS41MzggMCAuOTE4LS4zOHQuMzgtLjkxOHYtLjEzNnEwLS4wOTkuMDItLjE5NS4wMTktLjA5Ny4wNTYtLjE4OC4wMzgtLjA5MS4wOTMtLjE3My4wNTUtLjA4Mi4xMjQtLjE1MS4wNy0uMDcuMTUyLS4xMjUuMDgyLS4wNTUuMTczLS4wOTIuMDktLjAzOC4xODctLjA1Ny4wOTctLjAyLjE5NS0uMDIuMDk5IDAgLjE5NS4wMi4wOTcuMDIuMTg4LjA1Ny4wOTEuMDM4LjE3My4wOTIuMDgyLjA1NS4xNTIuMTI1LjA3LjA3LjEyNC4xNTEuMDU1LjA4Mi4wOTIuMTczLjAzOC4wOTEuMDU3LjE4OC4wMi4wOTYuMDIuMTk1di4xMzZxMCAxLjM2Ni0uOTY3IDIuMzMyLS45NjYuOTY2LTIuMzMyLjk2Ni0xLjM2NyAwLTIuMzMzLS45NjYtLjk2Ni0uOTY2LS45NjYtMi4zMzJ2LTIuMzAycS0xLjc1NS0uMTk1LTMuMDU2LTEuNDc0LTEuNTQyLTEuNTE3LTEuNTQyLTMuNjY1dDEuNTQyLTMuNjY0cTEuMzk1LTEuMzcyIDMuMzEyLTEuNDk3LS4zOTctMi42MjItMi40LTQuNTkyUTE4LjMzOCAyIDE0Ljc5MiAycS0zLjU0NiAwLTYuMDUxIDIuNDY0LTIuMDAzIDEuOTctMi40IDQuNTkyIDEuOTE3LjEyNSAzLjMxMSAxLjQ5NyAxLjU0MiAxLjUxNiAxLjU0MiAzLjY2NHQtMS41NDIgMy42NjVxLTEuMyAxLjI3OS0zLjA1NSAxLjQ3NHYyLjMwMnEwIDEuMzY2LS45NjcgMi4zMzItLjk2Ni45NjYtMi4zMzIuOTY2LTEuMzY3IDAtMi4zMzMtLjk2NlEwIDIzLjAyNCAwIDIxLjY1OHYtLjEzNnEwLS4wOTkuMDItLjE5NS4wMTgtLjA5Ny4wNTYtLjE4OC4wMzgtLjA5MS4wOTMtLjE3My4wNTQtLjA4Mi4xMjQtLjE1MS4wNy0uMDcuMTUxLS4xMjUuMDgyLS4wNTUuMTczLS4wOTIuMDkxLS4wMzguMTg4LS4wNTcuMDk3LS4wMi4xOTUtLjAyLjA5OSAwIC4xOTUuMDIuMDk3LjAyLjE4OC4wNTcuMDkuMDM4LjE3My4wOTIuMDgyLjA1NS4xNTEuMTI1LjA3LjA3LjEyNS4xNTEuMDU0LjA4Mi4wOTIuMTczLjAzOC4wOTEuMDU3LjE4OC4wMi4wOTYuMDIuMTk1di4xMzZxMCAuNTM4LjM4LjkxOHQuOTE4LjM4cS41MzggMCAuOTE4LS4zOHQuMzgtLjkxOHYtMi40M3EtMS4zMTYtLjMzMi0yLjM0OC0xLjM0NlEuNzA3IDE2LjM2NS43MDcgMTQuMjE3dDEuNTQyLTMuNjY0cS45MTQtLjg5OSAyLjA1My0xLjI2M1pNOC4yNSAxMS45OHEuOTQ0LjkyOS45NDQgMi4yMzggMCAxLjMxLS45NDQgMi4yMzktLjk1MS45MzUtMi4zLjkzNS0xLjM0OCAwLTIuMy0uOTM1LS45NDQtLjkyOS0uOTQ0LTIuMjM5IDAtMS4zMS45NDUtMi4yMzguOTUtLjkzNSAyLjMtLjkzNSAxLjM0OCAwIDIuMjk5LjkzNVptMTcuNjgzIDBxLjk0NC45MjkuOTQ0IDIuMjM4IDAgMS4zMS0uOTQ0IDIuMjM5LS45NTEuOTM1LTIuMy45MzUtMS4zNDggMC0yLjMtLjkzNS0uOTQ0LS45MjktLjk0NC0yLjIzOSAwLTEuMzEuOTQ0LTIuMjM4Ljk1Mi0uOTM1IDIuMy0uOTM1IDEuMzQ5IDAgMi4zLjkzNVpNNi4zNjQgMjkuNzhxLS44MjctLjgyOC0uODI3LTEuOTk4IDAtLjA5OS0uMDItLjE5Ni0uMDE5LS4wOTYtLjA1Ny0uMTg3LS4wMzctLjA5MS0uMDkyLS4xNzMtLjA1NS0uMDgyLS4xMjQtLjE1MS0uMDctLjA3LS4xNTItLjEyNS0uMDgyLS4wNTUtLjE3My0uMDkyLS4wOS0uMDM4LS4xODctLjA1Ny0uMDk3LS4wMi0uMTk1LS4wMi0uMDk5IDAtLjE5NS4wMi0uMDk3LjAxOS0uMTg4LjA1Ny0uMDkxLjAzNy0uMTczLjA5Mi0uMDgyLjA1NS0uMTUxLjEyNS0uMDcuMDctLjEyNS4xNTEtLjA1NS4wODItLjA5Mi4xNzMtLjAzOC4wOS0uMDU3LjE4OC0uMDIuMDk2LS4wMi4xOTUgMCAxLjk5OSAxLjQxNCAzLjQxMiAxLjQxNCAxLjQxNCAzLjQxMyAxLjQxNGguMjRxMi4xIDAgMy41ODQtMS40ODQgMS40ODQtMS40ODUgMS40ODQtMy41ODNWMTdxMC0uMDk5LS4wMi0uMTk1LS4wMTktLjA5Ny0uMDU2LS4xODgtLjAzOC0uMDktLjA5My0uMTczLS4wNTUtLjA4MS0uMTI0LS4xNTEtLjA3LS4wNy0uMTUyLS4xMjQtLjA4Mi0uMDU1LS4xNzMtLjA5My0uMDktLjAzOC0uMTg3LS4wNTdRMTIuNzY5IDE2IDEyLjY3IDE2cS0uMDk5IDAtLjE5NS4wMi0uMDk3LjAxOC0uMTg4LjA1Ni0uMDkuMDM4LS4xNzMuMDkzLS4wODIuMDU0LS4xNTEuMTI0LS4wNy4wNy0uMTI1LjE1MS0uMDU0LjA4Mi0uMDkyLjE3My0uMDM4LjA5MS0uMDU3LjE4OC0uMDIuMDk2LS4wMi4xOTV2MTAuNTQycTAgMS4yNy0uODk4IDIuMTY4LS44OTguODk5LTIuMTY4Ljg5OWgtLjI0MXEtMS4xNyAwLTEuOTk5LS44MjhabTE2LjUwMyAwcS44MjgtLjgyOC44MjgtMS45OTggMC0uMDk5LjAyLS4xOTYuMDE5LS4wOTYuMDU2LS4xODcuMDM4LS4wOTEuMDkzLS4xNzMuMDU0LS4wODIuMTI0LS4xNTEuMDctLjA3LjE1Mi0uMTI1LjA4MS0uMDU1LjE3Mi0uMDkyLjA5MS0uMDM4LjE4OC0uMDU3LjA5Ny0uMDIuMTk1LS4wMi4wOTkgMCAuMTk1LjAyLjA5Ny4wMTkuMTg4LjA1Ny4wOS4wMzcuMTczLjA5Mi4wODIuMDU1LjE1MS4xMjUuMDcuMDcuMTI1LjE1MS4wNTQuMDgyLjA5Mi4xNzMuMDM4LjA5LjA1Ny4xODguMDIuMDk2LjAyLjE5NSAwIDEuOTk5LTEuNDE0IDMuNDEyLTEuNDE0IDEuNDE0LTMuNDEzIDEuNDE0aC0uMjRxLTIuMSAwLTMuNTg0LTEuNDg0LTEuNDg0LTEuNDg1LTEuNDg0LTMuNTgzVjE3cTAtLjA5OS4wMi0uMTk1LjAxOS0uMDk3LjA1Ni0uMTg4LjAzOC0uMDkuMDkzLS4xNzMuMDU0LS4wODEuMTI0LS4xNTEuMDctLjA3LjE1Mi0uMTI0LjA4MS0uMDU1LjE3Mi0uMDkzLjA5MS0uMDM4LjE4OC0uMDU3LjA5Ny0uMDE5LjE5NS0uMDE5LjA5OSAwIC4xOTUuMDIuMDk3LjAxOC4xODguMDU2LjA5LjAzOC4xNzMuMDkzLjA4MS4wNTQuMTUxLjEyNC4wNy4wNy4xMjQuMTUxLjA1NS4wODIuMDkzLjE3My4wMzguMDkxLjA1Ny4xODguMDE5LjA5Ni4wMTkuMTk1djEwLjU0MnEwIDEuMjcuODk4IDIuMTY4Ljg5OS44OTkgMi4xNy44OTloLjI0cTEuMTcgMCAxLjk5OC0uODI4WiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTI0My41MSAxNy41NTRoLTEyLjM2OWMuNDcgMy43IDMuNDMgNC4yNTIgMTEuMjMxIDIuMDY1IDAgMS4xNS4wOSAyLjIzOS0uMDQ0IDMuMjk3LS4wNTMuNDEtLjU0NS45NS0uOTYgMS4wOTUtMy4zMDMgMS4xNTItNi42NyAxLjQwNS05Ljk5OS4xNzYtMy40ODItMS4yODYtNS40NjgtNS4zNTgtNC43NC05LjQ2LjcyLTQuMDcgMy44My02Ljg3MSA3Ljg2OC03LjA5MSA1Ljc3NC0uMzE3IDkuNjg2IDMuODcxIDkuMDE0IDkuOTIydi0uMDA0Wm0tMTIuMzk4LTMuNDQyaDcuOTgzYy0uODU4LTEuOTc1LTIuMjk1LTIuNjgtNC4yMTQtMi41NzktMS43MzUuMDktMy4wMzQuNzk4LTMuNzcgMi41NzlaTTIwMi4wOTIgMTQuNTRjMS44NjIuMDYgMi4wNDUtMi43NTMuMTg3LTIuODczLS4wOTQtLjAwNy0uMTktLjAwNy0uMjkyLS4wMDctMi4zMS0uMDA0LTQuNjI0LjQwNi03LjA0Ni42NDUuMDQuMTIzLS4wNjQtLjAzOC0uMDYtLjE5OC4xNDItMy45MDUtMS4wNi0zLjU3IDMuNTk0LTQuMjM2IDEuNzQ3LS4yNSAzLjU5LS4xOSA1LjM0MS4wNTYgMy4yNjMuNDU0IDUuMDEgMi4yOTEgNS4xNTEgNS41MzYuMTQyIDMuMTc1LjA2NCA2LjM1Ny4wNDEgOS43NTVhMS40NDQgMS40NDQgMCAwIDEtMS40MyAxLjQzYy0zLjQzMy4wNDUtNi44MzcuMjEzLTEwLjE5My0uMDk2LTIuNzk5LS4yNjEtMy45ODYtMi4xNTQtMy45OTctNC45MDctLjAxMS0yLjczNSAxLjIxLTQuNTY4IDMuOTY0LTQuOTYzIDEuNTQxLS4yMiAzLjEyLS4xODcgNC43NC0uMTM0di0uMDA4Wm0tMS4xMiA3LjE2MWMuMTAxLjAxMi4yMDIuMDE1LjMwMy4wMDQuNjktLjA1NiAxLjQwNy4wMjIgMS44OTYtLjI3Mi42OTQtLjQxMyAxLjE0Ni0xLjEzMyAxLjE2LTEuNzUxLjAxNS0uNjE5LS40MDYtMS43MDMtMS4wNi0xLjgzM2ExMC4yMDUgMTAuMjA1IDAgMCAwLTQuMTY5LjA0NWMtLjY0Mi4xNDUtMS40MyAxLjE4NC0xLjQ4NSAxLjg3LS4wNDEuNTEuOTE0IDEuMjQgMS41NzUgMS42MTcuNS4yODcgMS4xODcuMjUzIDEuNzc2LjMxN2wuMDA0LjAwM1pNNTguMDkgMTYuMjk1Yy0uMDE4IDUuMTMtMy42MjQgOC42NzgtOC43OTcgOC42Ni01LjE0Ny0uMDIzLTguNzA4LTMuNjA4LTguNzA4LTguNzc2IDAtNC45NjYgMy42NjYtOC41NyA4LjcyNy04LjU2NSA1LjE5NSAwIDguNzk3IDMuNTY1IDguNzc5IDguNjgxWk01NCAxNi4xODdjLS4wMTEtMi45MjEtMS44NDgtNC43MTctNC43NzQtNC42NjUtMi43NjYuMDQ5LTQuNTY1IDEuOTMtNC41MzkgNC43NTQuMDI3IDIuOTI1IDEuOTE1IDQuODUyIDQuNzEgNC44MDcgMi44MjYtLjA0NSA0LjYxNC0xLjk0NSA0LjYtNC44OTJsLjAwMy0uMDA0Wk0xMDguNzczIDE2LjEzOGMuMDIgNS4xOS0zLjQ4MiA4Ljc2NC04LjYzNiA4LjgxMi01LjIzNy4wNTItOC44NzItMy41NjItOC44NjEtOC44LjAxMS00Ljk2MyAzLjY5MS04LjU1NSA4Ljc1Mi04LjU0IDUuMTI1LjAxNSA4LjcyNyAzLjUyOCA4Ljc0NSA4LjUyOFptLTQuMDg3LjE1Yy4wMy0yLjkzNy0xLjc2OS00Ljc3Ny00LjY2OS00Ljc3Ny0yLjc4IDAtNC42MTMgMS44MzctNC42NDMgNC42NTctLjAzIDIuOTE0IDEuODMzIDQuOSA0LjYwNiA0LjkxMSAyLjgzNi4wMTUgNC42NzMtMS44NiA0LjcwMy00Ljc5MWguMDAzWk0xMjYuNjc0IDguMDY4aDQuMTAyYzAgMy4wMTgtLjAxMSA1Ljk1OCAwIDguODk0LjAxNSAyLjg5NSAxLjExNiA0LjE2NiAzLjU1MyA0LjEzMiAyLjYyLS4wMzcgMy44NDktMS4zMjMgMy44NzEtNC4xMDIuMDE5LTIuOTQuMDA0LTUuODguMDA0LTguOTA5aDMuOTc1VjI0Ljg1Yy0xLjQ2My0uMzA2LTIuODAzLS42MTktNC4xNTQtLjg0Mi0uMzI1LS4wNTYtLjY5LjIxMi0xLjA0NS4yNjgtMS40Ni4yMy0yLjkzNC42OTMtNC4zNzkuNjA3LTMuNDMtLjIwNS01LjUyNy0yLjM4NC01Ljg5My01Ljc4Mi0uMDUyLS40ODgtLjAzNC0uOTg0LS4wMzQtMS40NzZWOC4wNjhaTTExNC43NDUgMTkuNXY0Ljk4OGgtMy45NDlWOC4yNzNjMy41MDEgMCA3LjAzNi0uMjkgMTAuNS4wOSAyLjk4Ni4zMjcgNC40MyAyLjgwMSA0LjIyMSA1Ljk3Ni0uMTkgMi44OTEtMi4xMzUgNC45MjYtNS4wOTggNS4xMzQtMS44MzMuMTI3LTMuNjg0LjAyMy01LjY3NC4wMjN2LjAwM1ptLjA3OS0zLjgyN2MxLjc0MyAwIDMuMzA3LjE4MiA0Ljc5Mi0uMDgyLjY4My0uMTIzIDEuNjI3LTEuMDg4IDEuNjc2LTEuNzMzLjA0NS0uNTgxLS44OTYtMS42NzYtMS41My0xLjc3Ny0xLjU5LS4yNi0zLjI1NS0uMDg2LTQuOTM4LS4wODZ2My42NzhaTTE4MS44NTggMjQuNTA3aC00LjAzVjguMzFjMy41NzUgMCA3LjE2Mi0uMjc5IDEwLjY4MS4wOSAyLjgzNy4yOTQgNC4yNyAyLjc4NyA0LjA5OSA1Ljg5LS4xNTMgMi43NjEtMS45MzQgNC44MDctNC42OTIgNS4xMjQtMS45NTIuMjIzLTMuOTM0LjE5Ny02LjA1OC4yOXY0LjgwNy0uMDA0Wm0uMDQ5LTguNzgyYzEuNjE2IDAgMy4wMjcuMDY3IDQuNDMtLjAyMiAxLjEwOS0uMDcxIDIuMDk4LS41MjIgMi4xMzktMS44My4wNDEtMS4yOTYtLjg1MS0xLjg2My0yLTEuOTMtMS41MDUtLjA4NS0zLjAyLS4wMjItNC41Ny0uMDIydjMuODA0Wk0xNTYuMTEyIDEwLjgxOGExLjY5NCAxLjY5NCAwIDAgMS0yLjEzNSAxLjY1Yy0xLjMxNy0uMzU3LTIuNTktLjY4OS0zLjg4NS0uODg2YS44ODMuODgzIDAgMCAwLS4yOC4wMDNjLTEuMTQyLjE5LTEuMzAzIDEuNzY3LS4yODQgMi4zMS4wNDkuMDI3LjA5My4wNDkuMTQyLjA3MSAxLjQxLjYxNSAyLjk0NS45NDcgNC4zNDggMS41NjkgMi4wMjMuODk0IDIuOTYgMi41MzQgMi43ODggNC43NDctLjE2IDIuMDYtMS40MTQgMy41NTgtMy42MTYgNC4xODgtMi43NjYuNzktNS41NC42NTItOC4yMTYtLjM0My0uNTA3LS4xOS0xLjAxNS0uOTczLTEuMTA4LTEuNTUtLjEtLjYxNS0uMTA1LTEuMjQtLjA4Ni0xLjkxOWExLjA0MiAxLjA0MiAwIDAgMSAxLjQ0OC0uOTM1Yy4xNTMuMDY3LjMwMy4xMjMuNDYuMTcxIDEuNDA2LjQzNiAyLjgyMSAxLjAwNiA0LjI2MiAxLjEwN2guMDI2YzEuNDgyLjA4MiAyLTIuMDA1LjY3Mi0yLjY1Ny0uMDE5LS4wMDctLjAzNC0uMDE4LS4wNTMtLjAyNi0xLjI3Ni0uNTkyLTIuNzEtLjg1My00LjAxMi0xLjQxMi0xLjg5Ni0uODA4LTIuODMzLTIuMzE3LTIuNzYyLTQuMzg1LjA3MS0yLjA2OCAxLjEzMS0zLjQ2NSAzLjA1My00LjIwNyAyLjgtMS4wNzcgNS41OTktLjg2OCA4LjM0Ni4xNzUuMzguMTQ1Ljc4Ny43NDUuODI5IDEuMTY2LjAzNy4zODguMDU2Ljc3NS4wNiAxLjE2bC4wMDMuMDAzWk0xNjMuMTY2IDIwLjg1MmExLjE3IDEuMTcgMCAwIDEgMS40OTMtMS4xMDNjMS41NzUuNDU0IDMuMDU3Ljg4MyA0LjU0NiAxLjI2Ny40NTYuMTE1IDEuMDMuMDk3IDEuNDU2LS4wNzkuMTEyLS4wNDQuMjE3LS4xMDQuMzIxLS4xNjcuNzEtLjQ0Ny44MzItMS40NzYuMTc1LTEuOTlhLjg2OC44NjggMCAwIDAtLjIyLS4xMjdjLTEuNTQ1LS42MTgtMy4yMDYtLjk2NC00Ljc0LTEuNjAyLTMuMDUzLTEuMjctNC4xNS01LjA2My0xLjg5Mi03LjI3NiAxLjEzLTEuMTA3IDIuOTktMS44ODIgNC41OS0yLjAxNiAxLjc3Ny0uMTUgMy41OTkuMjIzIDUuNDA1LjUwM2ExLjMgMS4zIDAgMCAxIDEuMTA5IDEuMjg1djEuNzY2YzAgLjg4Ny0uODU5IDEuNDgtMS43MSAxLjIzNC0uMDA3IDAtLjAxIDAtLjAxOC0uMDA0LTEuNDE5LS4zOTktMi44NTItLjgzOC00LjMwNC0uOTc2YTEuMTUyIDEuMTUyIDAgMCAwLS4xNiAwYy0xLjE4Ny4wOTMtMS40MjYgMS43MjUtLjM4OSAyLjMxYTEuNiAxLjYgMCAwIDAgLjEzOS4wN2MxLjI5MS41NzggMi43OTEuNzQ2IDMuOTk3IDEuNDM5IDEuMTEyLjY0IDIuMyAxLjU4MyAyLjg0NCAyLjY4NiAxLjIyNCAyLjQ5LS4wMjYgNS4xMy0yLjY0NiA2LjE1NS0yLjk3NSAxLjE2My01Ljk3Ni45MDItOC45MDYtLjE0NS0uNDY2LS4xNjctLjkzNy0uOTI0LTEuMDA4LTEuNDZhMTIuMjE1IDEyLjIxNSAwIDAgMS0uMDgyLTEuNzYzdi0uMDA3Wk03NS43MzggOS44MzRxLjgwMi0uMDU2IDIuMzcgMFY4LjA1N2g0LjA2NHYxLjc4MWg4LjI0OXYzLjg0MWgtOC4yNDljMCAxLjcuMDk0IDMuMTY4LjE1IDQuNjM2LjA2NyAxLjc2NiAxLjA0OCAyLjgzMSAyLjgyOSAyLjY5NyAxLjc0Ny0uMTM0IDMuNDY3LS42IDUuMjU5LS45MzF2My45OTRjLTMuMzUyLjkwMi02Ljc5MyAxLjgyNi05LjkyOS0uNDIxLTMuNDA0LTIuNDQtMS45My02LjUwMi0yLjM3My05Ljk3LS43MTMtLjEwMS0xLjQ3OC0uMDA4LTIuMzctLjEzNVY5LjgzNFpNMTYyLjQyMyAyMi43NmMtLjE2IDEuMTk2LS44NyAyLjA4Ni0yLjMyNSAyLjE4LTEuMzYyLjA4OS0yLjU1LTEuMDQ4LTIuNDc0LTIuMzgyLjA3OC0xLjQwNC44NS0yLjI3MyAyLjMwNi0yLjM2NiAxLjM1OS0uMDg1IDIuNDk3IDEuMDQ0IDIuNDkgMi41NjRsLjAwMy4wMDRaTTY4LjE4NyAyMS4yNWE0Ljk1MSA0Ljk1MSAwIDAgMS00Ljk1My00Ljk0OCA0Ljk0OCA0Ljk0OCAwIDAgMSA0Ljk1My00Ljk0NGMxLjc0IDAgMy4yNy44OSA0LjE1IDIuMjQzbDIuMTk5LTMuNjg4YTguOTg2IDguOTg2IDAgMCAwLTYuMzUtMi42MDljLTQuOTc4IDAtOS4wMTMgNC4wMjgtOS4wMTMgOC45OThzNC4wMzUgOS4wMDIgOS4wMTQgOS4wMDJjMi4xNzYgMCA0LjE2OS0uNzcxIDUuNzMtMi4wNTNsLTIuMjQtMy40MzVhNC45NDMgNC45NDMgMCAwIDEtMy40OSAxLjQzNVpNMjIwLjEzNSAyMS4yNWE0Ljk1MSA0Ljk1MSAwIDAgMS00Ljk1My00Ljk0OCA0Ljk0OCA0Ljk0OCAwIDAgMSA0Ljk1My00Ljk0NGMxLjczOSAwIDMuMjcuODkgNC4xNSAyLjI0M2wyLjE5OC0zLjY4OGE4Ljk4NiA4Ljk4NiAwIDAgMC02LjM0OC0yLjYwOWMtNC45OCAwLTkuMDE0IDQuMDI4LTkuMDE0IDguOTk4czQuMDM0IDkuMDAyIDkuMDE0IDkuMDAyYzIuMTc2IDAgNC4xNjktLjc3MSA1LjcyOS0yLjA1M2wtMi4yNC0zLjQzNWE0Ljk0MyA0Ljk0MyAwIDAgMS0zLjQ5IDEuNDM1WiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==");

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
            _context.next = 2;
            return connect();
          case 2:
            onClose();
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
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
;// CONCATENATED MODULE: ./src/layouts/components/Header.tsx







/* harmony default export */ var Header = (function () {
  var _useModel = (0,_umi_production_exports.useModel)("wallet"),
    disConnect = _useModel.disConnect,
    btcAddress = _useModel.btcAddress,
    loginModalShow = _useModel.loginModalShow,
    setLoginModalShow = _useModel.setLoginModalShow,
    connected = _useModel.connected;
  var showAddress = (0,react.useMemo)(function () {
    if (btcAddress) return btcAddress.replace(/(\w{5})\w+(\w{3})/, "$1...$2");
  }, [btcAddress]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "header",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "headerwrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: logo,
        alt: "",
        className: "logo"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "navWrap",
        children: connected ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          onClick: disConnect,
          children: showAddress
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
      colorBgContainer: "rgba(110, 102, 250, 0.32)"
    },
    Modal: {
      contentBg: "#232150",
      headerBg: "#232150"
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
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: logo,
            alt: "",
            className: "logo"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "navWrap",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Nav, {})
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