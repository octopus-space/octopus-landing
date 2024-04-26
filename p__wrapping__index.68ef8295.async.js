"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[307],{

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

/***/ 79152:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ wrapping; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(9361);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 12 modules
var message = __webpack_require__(68872);
// EXTERNAL MODULE: ./node_modules/antd/es/segmented/index.js + 3 modules
var segmented = __webpack_require__(92783);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(4393);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 36 modules
var dropdown = __webpack_require__(84819);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 15 modules
var es_button = __webpack_require__(45093);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(42075);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(75081);
// EXTERNAL MODULE: ./node_modules/antd/es/flex/index.js + 2 modules
var flex = __webpack_require__(86250);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 17 modules
var input_number = __webpack_require__(10418);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(80882);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
;// CONCATENATED MODULE: ./src/pages/wrapping/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 33 modules
var _umi_production_exports = __webpack_require__(82195);
;// CONCATENATED MODULE: ./src/assets/switch.svg
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

const SvgSwitch = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 32, height: 32 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "switch_svg__a" }, /* @__PURE__ */ React.createElement("rect", { x: 8, y: 7, width: 16, height: 18, rx: 0 }))), /* @__PURE__ */ React.createElement("circle", { cx: 16, cy: 48, fill: "#6E66FA", r: 16, transform: "rotate(-90 0 32)" }), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#switch_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M21.223 17.323H10.99c-.065 0-.118.06-.118.133v.993c0 .072.053.131.118.131h8.9l-2.122 3.028a.147.147 0 0 0-.013.14c.02.045.06.075.105.075h1.067c.072 0 .14-.037.185-.1l2.482-3.543a.584.584 0 0 0 .053-.559.47.47 0 0 0-.423-.298Z", fill: "#FFF" }), /* @__PURE__ */ React.createElement("path", { d: "M10.973 13.82a.584.584 0 0 0-.054.558.47.47 0 0 0 .423.298h10.235c.065 0 .118-.059.118-.132v-.993c0-.073-.053-.133-.118-.133h-8.899l2.123-3.027a.147.147 0 0 0 .012-.14.118.118 0 0 0-.107-.075H13.64a.227.227 0 0 0-.185.1l-2.482 3.544Z", fill: "#FFF", fillOpacity: 0.5 })));

/* harmony default export */ var assets_switch = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB4PSI4IiB5PSI3IiB3aWR0aD0iMTYiIGhlaWdodD0iMTgiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGNpcmNsZSBjeD0iMTYiIGN5PSI0OCIgZmlsbD0iIzZFNjZGQSIgcj0iMTYiIHRyYW5zZm9ybT0icm90YXRlKC05MCAwIDMyKSIvPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0iTTIxLjIyMyAxNy4zMjNIMTAuOTljLS4wNjUgMC0uMTE4LjA2LS4xMTguMTMzdi45OTNjMCAuMDcyLjA1My4xMzEuMTE4LjEzMWg4LjlsLTIuMTIyIDMuMDI4YS4xNDcuMTQ3IDAgMCAwLS4wMTMuMTRjLjAyLjA0NS4wNi4wNzUuMTA1LjA3NWgxLjA2N2MuMDcyIDAgLjE0LS4wMzcuMTg1LS4xbDIuNDgyLTMuNTQzYS41ODQuNTg0IDAgMCAwIC4wNTMtLjU1OS40Ny40NyAwIDAgMC0uNDIzLS4yOThaIiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTEwLjk3MyAxMy44MmEuNTg0LjU4NCAwIDAgMC0uMDU0LjU1OC40Ny40NyAwIDAgMCAuNDIzLjI5OGgxMC4yMzVjLjA2NSAwIC4xMTgtLjA1OS4xMTgtLjEzMnYtLjk5M2MwLS4wNzMtLjA1My0uMTMzLS4xMTgtLjEzM2gtOC44OTlsMi4xMjMtMy4wMjdhLjE0Ny4xNDcgMCAwIDAgLjAxMi0uMTQuMTE4LjExOCAwIDAgMC0uMTA3LS4wNzVIMTMuNjRhLjIyNy4yMjcgMCAwIDAtLjE4NS4xbC0yLjQ4MiAzLjU0NFoiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjUiLz48L2c+PC9zdmc+");

;// CONCATENATED MODULE: ./src/assets/history.svg
var history_defProp = Object.defineProperty;
var history_getOwnPropSymbols = Object.getOwnPropertySymbols;
var history_hasOwnProp = Object.prototype.hasOwnProperty;
var history_propIsEnum = Object.prototype.propertyIsEnumerable;
var history_defNormalProp = (obj, key, value) => key in obj ? history_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var history_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (history_hasOwnProp.call(b, prop))
      history_defNormalProp(a, prop, b[prop]);
  if (history_getOwnPropSymbols)
    for (var prop of history_getOwnPropSymbols(b)) {
      if (history_propIsEnum.call(b, prop))
        history_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgHistory = (props) => /* @__PURE__ */ React.createElement("svg", history_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 23.997, height: 24 }, props), /* @__PURE__ */ React.createElement("path", { d: "M18.998 8.75a3.751 3.751 0 0 1 0-7.5 3.751 3.751 0 0 1 0 7.5Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25ZM11.999 13.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75ZM15.998 17.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z", fill: "#C1C0C0" }), /* @__PURE__ */ React.createElement("path", { d: "M14.998 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5c-4.61 0-6.25 1.64-6.25 6.25v6c0 4.61 1.64 6.25 6.25 6.25h6c4.609 0 6.249-1.64 6.249-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75Z", fill: "#C1C0C0" }));

/* harmony default export */ var assets_history = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyMy45OTciIGhlaWdodD0iMjQiPjxwYXRoIGQ9Ik0xOC45OTggOC43NWEzLjc1MSAzLjc1MSAwIDAgMSAwLTcuNSAzLjc1MSAzLjc1MSAwIDAgMSAwIDcuNVptMC02Yy0xLjI0IDAtMi4yNSAxLjAxLTIuMjUgMi4yNXMxLjAxIDIuMjUgMi4yNSAyLjI1IDIuMjUtMS4wMSAyLjI1LTIuMjUtMS4wMS0yLjI1LTIuMjUtMi4yNVpNMTEuOTk5IDEzLjc1aC01Yy0uNDEgMC0uNzUtLjM0LS43NS0uNzVzLjM0LS43NS43NS0uNzVoNWMuNDEgMCAuNzUuMzQuNzUuNzVzLS4zNC43NS0uNzUuNzVaTTE1Ljk5OCAxNy43NUg3Yy0uNDEgMC0uNzUtLjM0LS43NS0uNzVzLjM0LS43NS43NS0uNzVoOWMuNDEgMCAuNzUuMzQuNzUuNzVzLS4zNC43NS0uNzUuNzVaIiBmaWxsPSIjQzFDMEMwIi8+PHBhdGggZD0iTTE0Ljk5OCAyMi43NUg5Yy01LjQzIDAtNy43NS0yLjMyLTcuNzUtNy43NVY5YzAtNS40MyAyLjMyLTcuNzUgNy43NS03Ljc1aDVjLjQxIDAgLjc1LjM0Ljc1Ljc1cy0uMzQuNzUtLjc1Ljc1aC01Yy00LjYxIDAtNi4yNSAxLjY0LTYuMjUgNi4yNXY2YzAgNC42MSAxLjY0IDYuMjUgNi4yNSA2LjI1aDZjNC42MDkgMCA2LjI0OS0xLjY0IDYuMjQ5LTYuMjV2LTVjMC0uNDEuMzQtLjc1Ljc1LS43NXMuNzUuMzQuNzUuNzV2NWMwIDUuNDMtMi4zMiA3Ljc1LTcuNzUgNy43NVoiIGZpbGw9IiNDMUMwQzAiLz48L3N2Zz4=");

// EXTERNAL MODULE: ./src/utils/utils.ts + 1 modules
var utils = __webpack_require__(56808);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/components/TokenIcon/index.tsx


var TokenIcon = function TokenIcon(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 25 : _ref$size,
    src = _ref.src,
    _ref$symbol = _ref.symbol,
    symbol = _ref$symbol === void 0 ? "" : _ref$symbol;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: src ? /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: src,
      alt: symbol,
      style: {
        height: size,
        width: size,
        borderRadius: "50%"
      },
      className: "icon"
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "icon",
      style: {
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000"
      },
      children: symbol[0].toUpperCase()
    })
  });
};
/* harmony default export */ var components_TokenIcon = (TokenIcon);
// EXTERNAL MODULE: ./src/components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(93417);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 26 modules
var tabs = __webpack_require__(75214);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19632);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./src/servies/api.ts
var api = __webpack_require__(17946);
// EXTERNAL MODULE: ./src/assets/btc.png
var btc = __webpack_require__(33401);
// EXTERNAL MODULE: ./src/assets/mvc.png
var mvc = __webpack_require__(61133);
;// CONCATENATED MODULE: ./src/assets/arrowRight.png
var arrowRight_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAQ1SURBVGiBzZrNThtnFIaf8w2Q2NB4CssokitV3ca5gpArCKy7gGwsbyCT5gICF5DGlEVRVCmwyDrkCupcAc62qhRLUZbQMQp2MJnvdOF/Y4xnPLZ5NtaMZ8687/cz388ZIQa8XDWNNRkV8xA0g+IqpAG3cYkvgo9KEaEkoh+5PXuYz4s/6rNlFNFB4Cwbw5oqy5EeLlKwqu+d5Ox+VDOhDXi5alrVedEQnY7y0D74oDsmOZcPaySUgc3s+RbIGvEJ78UH3fnj9a2tYW8YyoCXq6atdf5mfMK7ECiKCVbze4nSddea6y7wsucr1jpHTEg8gELGWufIy9XWr7t2oIHN7PmWRd7RfptMEtda3mxka96gi65sQhvZmifwKn5dUdDtq/pFXwNerrZuLW/GqikkBl3Nv7512Hv+koFGhz1iOs1mEL4xwYPejn2pD6h1ptXmr8NtvAm76DKwmT3fUshMTlNo0vWxqE2rCXmeurZy8YmbWfqdlIwJHjWbUqsGbKXmcfPFA6RVnRfNAwP10gd5GjZSyhVS7tWD+d17wsbzGRLJSEKvRJVlL1dNQ8NAULlYJ2Tpp1zhTgrupOhr4u49YeO3GX7+pf4bs4l0EDjL0DBgRB6PEq2fiWoFqlUF2mYWlyLP3i9hDGsA0ui8/0UJ0qyFJqdlKPvaOl5cEjaeOy3hJ8fK7suAk2PtDRUJY4KfDN8uVqIGKPvKabl93FsTvYJ7DY2MNRmjKvdHiVH2tatEJ2lCxTw06OjT5LOvTMmEZgyisYy8UzGhuEY1vsGrn4kfF8dnQiFtiHn0PfsKZ2dtEws/wPxC+/+TY+XtftA6XlwSfl13oj7OvXZJGZb5BZifb5foabluqkmv4F5DYTHAyJtLTeYX6GoOExgXfCNQii65zRTEI4JvkNFrYBriAVApGpDiKDFSrkxHPIBQMqL2Q9T7pz0XEtGPMxhbxIZ/jYUV/+Wz8tef8YkH4PbsocnvJUoiFEaJ0yseIJGERKItfvf377GKF5FCPi++AbCWg7ABmjPRfuKhLfrff+q/1UoMqjuwqu8BZgAcJyhY65QIuf/ZT3gnXz4ruy+/R1M4GN9Jzu5DY0UWRzOaLLrTzCO0phIiwTYxDWpjxjfJuXzzoGWgvs+iofvC5GmXPvTZG93M1j4xwVxAGASKO6/nHnSeuzQbNSZ4RIwTvBjxxQSrvScvGcjvJUoGfTIZTcNjDM/6pZz6rgfq+/C6PXZVQ6LwLL83t9/vv4FruZuRpbk6OwNDZCkb2ZpXTH7j1zfok35ZmU6GTrOqdd5NMHfQtYU+iCiJ7qeMrzZKoAexJ7o7qe+l1ryYjZREKIgE28OUeifRP/bw1A0qF+tG5LGqLkeJIULBWg4cJyiEFd6KEeWmXjxPXb5drKjKfZQ0opnGhln7cxso1dffUhS1HzC2GFV0J/8DnkUxXDTLDKwAAAAASUVORK5CYII=";
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 3 modules
var empty = __webpack_require__(32983);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 12 modules
var skeleton = __webpack_require__(21687);
;// CONCATENATED MODULE: ./src/pages/wrapping/components/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/assets/empty.png
var empty_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/pages/wrapping/components/HistoryPanel.tsx

















var size = 10;
/* harmony default export */ var HistoryPanel = (function (_ref) {
  var type = _ref.type;
  var _useModel = (0,_umi_production_exports.useModel)("wallet"),
    connect = _useModel.connect,
    mvcAddress = _useModel.mvcAddress,
    network = _useModel.network;
  var _useModel2 = (0,_umi_production_exports.useModel)("wrapping"),
    AssetsInfo = _useModel2.AssetsInfo;
  var _useState = (0,react.useState)(0),
    _useState2 = slicedToArray_default()(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = slicedToArray_default()(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    isEnd = _useState6[0],
    setIsEnd = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = slicedToArray_default()(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var fetchHistory = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    var _yield$getBridgeHisto, txList, _list;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (AssetsInfo) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          _context.prev = 2;
          setLoading(true);
          _context.next = 6;
          return (0,api/* getBridgeHistory */.XN)(network, {
            type: type,
            cursor: page * size,
            size: size,
            order: "desc",
            address: mvcAddress || ""
          });
        case 6:
          _yield$getBridgeHisto = _context.sent;
          txList = _yield$getBridgeHisto.txList;
          if (txList.length < size) {
            setIsEnd(true);
          }
          _list = txList.map(function (item) {
            if (type === "btcToMvc" || type === "brc20ToMvc") {
              item.originNetwork = "BTC";
              item.targetNetwork = "MVC";
            }
            if (type === "mvcToBtc" || type === "mvcToBrc20") {
              item.originNetwork = "MVC";
              item.targetNetwork = "BTC";
            }
            item.timestamp = (0,utils/* prettyTimestamp */.Wt)(Number(item.timestamp), true);
            var currentToken = AssetsInfo.assetList.find(function (token) {
              return token.originSymbol == item.symbol;
            });
            if (currentToken) {
              item.amount = String((0,utils/* formatUnitToBtc */.hq)(Number(item.amount), item.originNetwork === "BTC" || item.originNetwork === "MVC" && item.decimals <= 8 ? item.decimals : item.decimals - currentToken.trimDecimals));
            }
            return item;
          });
          setList(function (prev) {
            return [].concat(toConsumableArray_default()(prev), toConsumableArray_default()(_list));
          });
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);
        case 16:
          setLoading(false);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 13]]);
  })), [page]);
  (0,react.useEffect)(function () {
    fetchHistory();
  }, [fetchHistory]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      minHeight: 500,
      height: 500,
      overflowY: 'scroll'
    },
    className: "historyPanel",
    children: [list.length === 0 && !loading && /*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z, {
      description: "No Transfers yet",
      image: empty_namespaceObject,
      imageStyle: {
        width: 60,
        height: 60,
        margin: '0 auto'
      },
      children: " "
    }), list.map(function (item) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "historyCard",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "top",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "left",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "net",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
                src: item.originNetwork == "BTC" ? btc : mvc,
                size: 24,
                symbol: item.originNetwork
              }), item.originNetwork]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              src: arrowRight_namespaceObject,
              className: "arrow"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "net",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
                src: item.targetNetwork == "BTC" ? btc : mvc,
                size: 24,
                symbol: item.targetNetwork
              }), item.targetNetwork]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "right",
            style: {
              color: item.status === "success" ? "#8CFF95" : "#F7931A"
            },
            children: item.status === "doing" ? "pending" : item.status
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "divider"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bottom",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "left",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
              src: "",
              size: 24,
              symbol: item.symbol
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              className: "info",
              children: [item.amount, " ", item.symbol, " "]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "right",
            children: item.timestamp
          })]
        })]
      }, item.originTxid);
    }), loading && /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
      active: true
    }), list.length > 0 && isEnd && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "no More"
    }), list.length > 0 && !isEnd && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
      type: "link",
      onClick: function onClick() {
        setPage(function (prev) {
          return prev + 1;
        });
      },
      children: "load More"
    })]
  });
});
;// CONCATENATED MODULE: ./src/pages/wrapping/components/History.tsx




/* harmony default export */ var History = (function (_ref) {
  var show = _ref.show,
    onClose = _ref.onClose;
  var items = [{
    key: "btcToMvc",
    label: "BTC",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(HistoryPanel, {
      type: "btcToMvc"
    })
  }, {
    key: "brc20ToMvc",
    label: "BRC20",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(HistoryPanel, {
      type: "brc20ToMvc"
    })
  }, {
    key: "mvcToBtc",
    label: "Redeem BTC",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(HistoryPanel, {
      type: "mvcToBtc"
    })
  }, {
    key: "mvcToBrc20",
    label: "Redeem BRC20",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(HistoryPanel, {
      type: "mvcToBrc20"
    })
  }];
  var onChange = function onChange(key) {
    console.log(key);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    title: "History",
    modalWidth: 520,
    show: show,
    onClose: onClose,
    closable: true,
    className: "historyWrap",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z, {
      defaultActiveKey: "1",
      items: items,
      onChange: onChange
    })
  });
});
;// CONCATENATED MODULE: ./src/components/FormButton/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/FormButton/index.tsx







function checkConditions(conditions) {
  for (var i = 0; i < conditions.length; i++) {
    var condition = conditions[i].condition;
    if (condition) {
      return conditions[i];
    }
  }
  return null;
}
var FormButton = function FormButton(_ref) {
  var _ref$conditions = _ref.conditions,
    conditions = _ref$conditions === void 0 ? [] : _ref$conditions,
    children = _ref.children,
    onClick = _ref.onClick,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$wrapClassName = _ref.wrapClassName,
    wrapClassName = _ref$wrapClassName === void 0 ? "" : _ref$wrapClassName,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimary = _theme$useToken$token.colorPrimary,
    boxShadow = _theme$useToken$token.boxShadow,
    colorInfoBg = _theme$useToken$token.colorInfoBg,
    colorBgContainer = _theme$useToken$token.colorBgContainer,
    colorText = _theme$useToken$token.colorText,
    colorTextSecondary = _theme$useToken$token.colorTextSecondary;
  var _useState = (0,react.useState)("primary"),
    _useState2 = slicedToArray_default()(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    danger = _useState4[0],
    setDanger = _useState4[1];
  var _useState5 = (0,react.useState)(""),
    _useState6 = slicedToArray_default()(_useState5, 2),
    text = _useState6[0],
    setText = _useState6[1];
  var _useModel = (0,_umi_production_exports.useModel)("wallet"),
    connected = _useModel.connected,
    setLoginModalShow = _useModel.setLoginModalShow,
    network = _useModel.network;
  var combineConditions = (0,react.useMemo)(function () {
    return [{
      condition: !connected,
      text: "Connect Wallet",
      type: "primary",
      danger: false,
      onClick: function onClick() {
        setLoginModalShow(true);
      }
    }, {
      condition: network !== 'testnet',
      text: "Switch Network",
      type: "primary",
      danger: false,
      onClick: function onClick() {}
    }].concat(toConsumableArray_default()(conditions));
  }, [conditions, connected]);
  (0,react.useEffect)(function () {
    var check = checkConditions(combineConditions);
    if (check) {
      var _text = check.text,
        _type = check.type,
        _danger = check.danger;
      setText(_text);
      setType(_type);
      setDanger(_danger);
    } else {
      setText("");
      setType("primary");
      setDanger(false);
    }
  }, [combineConditions]);
  var handleClick = function handleClick() {
    var check = checkConditions(combineConditions);
    if (check) {
      var _onClick = check.onClick;
      if (_onClick) _onClick();
      return;
    }
    onClick();
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "FormButtonWrap ".concat(className, " ").concat(type, " ").concat(danger ? "danger" : ""),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
      type: type,
      danger: danger,
      className: "FormButton ".concat(className),
      onClick: handleClick,
      block: true,
      loading: loading,
      children: text ? text : children
    })
  });
};
/* harmony default export */ var components_FormButton = (FormButton);
;// CONCATENATED MODULE: ./src/assets/metaid_b_y.png
var metaid_b_y_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAUsSURBVGiB5Zs/bBpXHMc/gLGBpOEMiTo4yjHYkqeLN3dCbFUHVEuRMmHVSzxZaRarkbowNEOSIWrVyRmiCmeJZCkVUtNsEV3ClOSyVHIkcpE9OCr4UCogxkc6vLuDAxwbDAbTr/ST4PHeu9/39/u93/tzDxf9QQyYAy4DEVMkUwB0U96a8gp4Brzskz49wQLwANgFPnUpu2YfMerGGCgiQBLI0T2pz5FNMkCiyQMUO/VEl+iPxw6THGIY9BX3BkCsWe7RB29GGIzXDpIXpk4jSa4xZI9NcljJ9YTksJM7FkkJEeeDVr4Tkh1hGLJlp3LvqOQWhkDZbmXpMHISp2PcHSS5ZkKepu83OYHVQh8hAS7EzqTtj8fZCQyTRCxS7gaCNxiSLUoPsNRcMErec4xFy4NzjI73QIToAtQJfjcwVfqHb0FkHBDhOUoeBHHmM+lm9MLTggTE3IgDnlHFnBtxtNdXKBe9PLoW4u6VYL8f1YzLY7TZaqwlJolOj5N+XWF1o+j47dG1EMqUF3W7ytX7Bbt8cT5AXPERDLhRt6r8+uxftLwhnjLlJa74ULerLM4H0AoGmc2PdS0uerkU8iD5Rc7TyzXSagU57EEOjQGQ2fyI5HcTV3x2O71cQ93eR8vvH0Qw0pZgdHocOexhJXbGoWh0ZsJ+gLZr2PXvXgmyEjvjaJ+YD/D1L/+gblXtcmXKy1pCIpUtk9n8iBz28PT6eeSQc8Wo5Q3SaoXo9ARrCZEeZpPvTeO3pou0WmF5XUcv11oIujkkwfz4zRdtP8uTQqm44rPJpbIlltd11O0qkt/Fo2uhlv60vEGxXEPyux3ktLxhG/IoaKwfV3zcuXKuXTWpLUE5XLfo4nwAOewhOjNBdGbcLg8G3GbnfvHAgsG7goEc9pDZ3BP9hEQ7C5k3e8wmd1jdKBJXfMghD3r5E7PJHWaTOyw/1I9M0Gpz9f6uQ89mgmMtJf768jSzuUd0Zpy1xKRYAAHqdhVlyovkdzmMIYc8Dg8fBqtdWq105LlmpNUyWv4cctiDMuVt6WsMMSHaXrQ8A7D8cJe/k18Sna57bnld5/kPF0wlxyiWRNxrBYP1bKlFAa2wT9AyhplI9HINvSQs1hgV3UDyu22d3xVaDKW7TYINDYQyevkTWt4g1aB0KlviVUPSkPwu0mrFVh7E2Lhkfv7pjw9oeYO/NvfQCgZyyMPT78PEFR/p12W73dPr51mJnXVkyMOwOB9gJXaW5zcvIPldaAXDoZtFcAzx+ipilQTNELU8c+vJB6LTExQrNW49+WCTkMMegn43qWwJ5aKXldiZlhB9tVUlrVbQyzVWN4qsJSZRprzEFb+d+dYSEtGZ8Y492ZhNtYLhmLIa8NYiWKdcrpHKlnlX2LfJzCZ3HK3Srytmx6LO6kYRdatqz4Nafp91cyqw26gVvrr9npXYWTQzlFLZElrBsBOOFWqNYZ/Klh1lmTd7Dl2a59xmgiA2uoPev/VLbrgZ8reqx8Sz/8V2CeDxIDXpEx5DfUf/+wAV6Rd+ay7IMfik0Cuxh1zjsWEL41OMn2lawICY7Adt+Z56D5xH9zriECrWka2GD7eBPz9X4TSPxRxHmO6WhkDRbuXIL45G+gWohdwQKH1UeUEXK7HIKSGZY4RvWhyL3LCT7Am5RpLDdK2kp+QsSAxHdu04W3aKBQZ3nXKp3+QsSIhLqif12jt5EqTaoZ9Ec2bfkZOh8nlIiEX6A3pzKb1nd3Vch1fpCnMIwp38reAlB1zgOQ7+A5NDO7enKiAKAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/assets/arc20.png
var arc20_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAQ+SURBVEiJjVbLSyNJGP9VtTFRJKiHKCLSS4zszR7UIIGwHXLw4mFQz+LgUXD9D5w5efAwKnh2Ba+ysyhePKRHFPVk5qAnYRtfiHjwBZpHfbWHTTeV6piZhqa+qq++x+97VBXDL3ypVMrinH8sl8t/MMZMImrlnAPAA4C8lPJHQ0ODs7+/7/xMF6vHTKfTU+VyeR6ACQCMMRARGPtfTAiBimFIKQHAYYx9OTo6etdwTYO2bZuFQiEnpTSllJBSgjFWNaofEYFzDmWvUyqVPuXzeVfXzfWFVCplvb6+5lRUHqIqTxXDqrEKWtswjNzw8LBdF+Hg4KDNOc95SCrCAYRqWFW+PiciFIvFD2dnZ/kAQtu2TcMw1lQHPI9VZUQU4KtzPezhcPhvy7JMb0+DR7y8vKwxxkwAPgIlRFXFoStV5zpaIjIZYzkAv/kILcuyAdiegJYPHxkR+Qqbm5sDez2+NyqypmVZU75BwzDma232aD1kyWQS6+vrCIfDPl8IEdinygoh5gHAqKD7rOZEzZM6JyKEQiEsLCwgkUjg6ekJ+Xze56tOekWjON3a2tr6Dwdg64n3cqAi9MaWlhb09PSAMYbJyUnEYrGqfOrV6q1JKREKhT4anZ2dfxLR71rMA4XgfW9vb4hEIhgYGPDzeHBwUIVQj4oaOS6ltFSv1FGnJyYm0NXVhY2NDdzd3YExhrGxMZimGSg0PVqVNdOIxWKfiSiiV6XqpZQSHR0dWFxcRFtbG3Z2dlAsFpFOpxGJRBCNRrG7u1uzT/Wfv8fQwzs9PY329naMjo4iHo9jc3MT5+fnAICRkRH09/cHikdvDyklOBE96HHWy7qvrw/j4+NgjOH+/h43NzcoFApYXl5GuVxGKBTC3NwcDMOo2cMK/cCJyPUMeb3keed5PDMzg3A4DCEEVldX8fz8DCJCLpfD8fExAGBoaAjZbDaATqWFEHkupfyutoWeg2QyiWw2CwA4PT3F1taWzyuVSlhZWUGpVALnHLOzs2hqagoUjmeYc/6Dc86/CSEghKjySgiBxsZGzM3NgXMOIQS+fv2KQqFQFYGTkxNsb28DAHp7ezE+Pu7zhBBVdUBETsPZ2Vk+kUi4qNx/ahtEo1E4joO9vT08Pj7i8PAwcEALIbC0tISLiwsQEQqFgu+gdq05rus6DAASicSUlHJNDUG9+/AX+i0gS0SZq6srx7+A4/H4v7VQvkfXMvgeH4BzeXmZAZQLWAiRkVK6eoXV681aN4vef0TkGobxybNT9cQwTdMCcKKfo2rIdGS+ohrnbmU9c3V15XjzqkeU67p5ABkAbi1hfU2la0TDLRaLH1RjAYQKUlMIsYbKK6AeMm+uPTFcKWXm9vbW1XXXfQh3d3fbAOallLauuBZKKaUL4Mvt7e1f7+msa1A1TEQ2gH4ppQWgtWLgAYBLRN9DodC36+vrfD09APAfhu1cN/sXjUsAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./src/assets/runes.png
var runes_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPpSURBVEiJrZbLL3NrFMafd7daLaIuidvE2MBlwEDEZdQzIedEjIQQIiJSYSIRBBOMDBia+QO+Y2rgK5G4DDgNCdFQAzQN5dBEqbzvcwZ0h2p36/vOSlay073y/rrW+6y1l0BqVgngTwANAEoBON5//xfAPwA8ANzv/lvWBcAHgCn6TwCNvwIq/SYoHrg0VVjlb8Ki7ksl28b/ARTrlR8Bpg/PpQB+4F0QmqZhYGAAPT09yMnJwdHREUjCYrFgbm4OTU1N2NzchFIKmqaht7cXfX19KCoqwsHBwUfGHwBW8SawT/Yz9t/V1tYyHA7z8fGR5eXlBEC73c5AIMCLiwtarVYCYHV1NcPhMEOhECsqKhKVN3kpNU3jxMQElVJ0u9202WxfgJmZmdzZ2aFSioODgxRCJCptl2F2UbdYLNzb26NSikNDQ5+A6enpHBsbo1KKa2trNJvNyUSUOLuo2+12np2dkSSDwSCrqqp0YE1NDR8eHkiSBwcHtFgsKQloKlGAEIIul0s/UErJjY0NBoNBXl9fc3t7m5FIhFtbW1RKsaOjIxlwCnhTZtyAvLw8+v1+er1e5uTk0O12kySVUpRSUinF5eVlFhYW8ubmhqenp8zKyko2EOI3uRCCU1NTlFKyp6eHQgiWlZXx/v6eUTs+PmZBQQE1TeP4+DillHS5XEbC8QHAfbyXJSUlDAQCPDk50eUvhODs7KwO7O/v1w93OBy8urri+fk5c3NzEwHvNSSwtLQ0WCwWPD8/QykFAHA4HGhpadFjurq6YLfbAQCvr694eXmB1WqF2WxOdCwMSzo/P08pJTs7O2kymbi0tKTfXfQup6enqWkah4eHKaXk6Oho0pIm7MGCggLe3NzQ6/Wyra2N4XCYOzs7vLu74+3tLS8vLxkKhdjc3Mzr62v6fD46HA4j0fwAkrTFyMgISeojrq6uTu/D1tZWRiIRhsNhKqXY3d1tlJ3eFpUGAczIyKDf7ydJzszMfJo0NpuNKysrJMnT01NdXAbeaHiPAOh0OimlpMfjYXZ29pdZWlxcTL/fz5eXF9bX1yftQV1w8YJyc3Pp9XoZiUTodDr1UfcRKIRge3s7pZQ8PDw0usNGxNinLDVN4+Lioj5NTCZTXCAAms1mrq6uUinFhYUFapqWMLuPH+BVvG1mDgDIz89HQ0MD9vf3MTk5iVAoBAAQQiA/Px8ejwfr6+tQSkEphd3dXVitVgDA3t4enp6eoudeAPgLcT7AQIyAhBC6G9xNstgvpYy1xtjy/qL7ELPPGFkpDAZCirDSVGGx2X4H7EPMKhFr4hvgRgAVeCvTx1X/AsAGgL/xtvYb2n9CYq6zbKoMjgAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./src/pages/wrapping/components/Options.tsx







var SegOptions = [{
  label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      padding: 4
    },
    className: "SegmentedItem",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
      symbol: "btc",
      src: btc,
      size: 28
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "BTC"
    })]
  }),
  value: "btc"
}, {
  label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      padding: 4
    },
    className: "SegmentedItem",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
      symbol: "BRC20",
      src: metaid_b_y_namespaceObject,
      size: 28
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "BRC20"
    })]
  }),
  value: "brc20"
}, {
  label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      padding: 4
    },
    className: "SegmentedItem",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
      symbol: "BRC20",
      src: arc20_namespaceObject,
      size: 28
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "ARC20"
    })]
  }),
  value: "arc20",
  disabled: true
}, {
  label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      padding: 4
    },
    className: "SegmentedItem",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
      symbol: "Runes",
      src: runes_namespaceObject,
      size: 28
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "Runes"
    })]
  }),
  value: "runes",
  disabled: true
}, {
  label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      padding: 4
    },
    className: "SegmentedItem",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
      symbol: "MRC20",
      src: metaid_b_y_namespaceObject,
      size: 28
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "MRC20"
    })]
  }),
  value: "mrc20",
  disabled: true
}];
;// CONCATENATED MODULE: ./src/components/SelectNet/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/SelectNet/index.tsx






/* harmony default export */ var SelectNet = (function (_ref) {
  var onChange = _ref.onChange,
    defalutChain = _ref.defalutChain;
  var _useModel = (0,_umi_production_exports.useModel)("wrapping"),
    chains = _useModel.chains;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "selectNetWrap",
    children: chains.map(function (item) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.ZP, {
        className: "item ".concat((defalutChain === null || defalutChain === void 0 ? void 0 : defalutChain.key) === item.key ? 'active' : ''),
        type: "primary",
        onClick: function onClick() {
          return onChange(item);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
          src: item.icon,
          symbol: item.label,
          size: 30
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "name",
          children: item.label
        })]
      }, item.key);
    })
  });
});
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(64599);
var createForOfIteratorHelper_default = /*#__PURE__*/__webpack_require__.n(createForOfIteratorHelper);
// EXTERNAL MODULE: ./node_modules/bitcoinjs-lib/src/index.js
var src = __webpack_require__(17656);
// EXTERNAL MODULE: ./node_modules/decimal.js/decimal.mjs
var decimal = __webpack_require__(90482);
// EXTERNAL MODULE: ./node_modules/@bitcoin-js/tiny-secp256k1-asmjs/lib/index.js + 6 modules
var lib = __webpack_require__(70155);
;// CONCATENATED MODULE: ./src/servies/warpping.ts
/* provided dependency */ var Buffer = __webpack_require__(48764)["Buffer"];








var supportRedeemAddressType = ["P2TR", "P2WPKH", "P2PKH"];
var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
function sendToken(_x, _x2, _x3, _x4) {
  return _sendToken.apply(this, arguments);
}
function _sendToken() {
  _sendToken = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(amount, address, targetTokenCodeHash, targetTokenGenesis) {
    var res;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return window.metaidwallet.transfer({
            broadcast: true,
            tasks: [{
              type: "token",
              codehash: targetTokenCodeHash,
              genesis: targetTokenGenesis,
              receivers: [{
                address: address,
                amount: amount
              }]
            }]
          })["catch"](function (e) {
            throw new Error(e);
          });
        case 2:
          res = _context.sent;
          if (!res.res[0].txid) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.res[0].txid);
        case 7:
          return _context.abrupt("return", "");
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _sendToken.apply(this, arguments);
}
function signPublicKey() {
  return _signPublicKey.apply(this, arguments);
}
function _signPublicKey() {
  _signPublicKey = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
    var publicKey, publicKeyReceive, publicKeyReceiveSign, ret, publicKeySign;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return window.metaidwallet.getPublicKey();
        case 2:
          publicKey = _context2.sent;
          _context2.next = 5;
          return window.metaidwallet.btc.getPublicKey();
        case 5:
          publicKeyReceive = _context2.sent;
          _context2.next = 8;
          return window.metaidwallet.btc.signMessage(publicKeyReceive);
        case 8:
          publicKeyReceiveSign = _context2.sent;
          if (!(publicKeyReceiveSign.status === "canceled")) {
            _context2.next = 11;
            break;
          }
          throw new Error("canceled");
        case 11:
          _context2.next = 13;
          return window.metaidwallet.signMessage({
            message: publicKey,
            encoding: "base64"
          });
        case 13:
          ret = _context2.sent;
          if (!(ret.status === "canceled")) {
            _context2.next = 16;
            break;
          }
          throw new Error("canceled");
        case 16:
          publicKeySign = ret.signature.signature;
          return _context2.abrupt("return", {
            publicKey: publicKey,
            publicKeySign: publicKeySign,
            publicKeyReceiveSign: publicKeyReceiveSign,
            publicKeyReceive: publicKeyReceive
          });
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _signPublicKey.apply(this, arguments);
}
function signMintPublicKey() {
  return _signMintPublicKey.apply(this, arguments);
}
function _signMintPublicKey() {
  _signMintPublicKey = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
    var publicKeyReceive, publicKey, publicKeySign, ret, publicKeyReceiveSign;
    return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return window.metaidwallet.getPublicKey();
        case 2:
          publicKeyReceive = _context3.sent;
          _context3.next = 5;
          return window.metaidwallet.btc.getPublicKey();
        case 5:
          publicKey = _context3.sent;
          _context3.next = 8;
          return window.metaidwallet.btc.signMessage(publicKey);
        case 8:
          publicKeySign = _context3.sent;
          if (!(publicKeySign.status === "canceled")) {
            _context3.next = 11;
            break;
          }
          throw new Error("canceled");
        case 11:
          _context3.next = 13;
          return window.metaidwallet.signMessage({
            message: publicKeyReceive,
            encoding: "base64"
          });
        case 13:
          ret = _context3.sent;
          if (!(ret.status === "canceled")) {
            _context3.next = 16;
            break;
          }
          throw new Error("canceled");
        case 16:
          publicKeyReceiveSign = ret.signature.signature; //2.7 {signature:{signature:'xxx'}}
          //3.0 {signature:''}
          return _context3.abrupt("return", {
            publicKey: publicKey,
            publicKeySign: publicKeySign,
            publicKeyReceiveSign: publicKeyReceiveSign,
            publicKeyReceive: publicKeyReceive
          });
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _signMintPublicKey.apply(this, arguments);
}
function redeemBtc(_x5, _x6, _x7, _x8) {
  return _redeemBtc.apply(this, arguments);
}
function _redeemBtc() {
  _redeemBtc = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(redeemAmount, btcAsset, addressType, network) {
    var _yield$signPublicKey, publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive, createPrepayOrderDto, _yield$createPrepayOr, createResp, orderId, bridgeAddress, targetTokenCodeHash, targetTokenGenesis, txid, submitPrepayOrderRedeemDto, ret;
    return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return signPublicKey();
        case 3:
          _yield$signPublicKey = _context4.sent;
          publicKey = _yield$signPublicKey.publicKey;
          publicKeySign = _yield$signPublicKey.publicKeySign;
          publicKeyReceiveSign = _yield$signPublicKey.publicKeyReceiveSign;
          publicKeyReceive = _yield$signPublicKey.publicKeyReceive;
          createPrepayOrderDto = {
            amount: redeemAmount,
            originTokenId: btcAsset.originTokenId,
            addressType: addressType,
            publicKey: publicKey,
            publicKeySign: publicKeySign,
            publicKeyReceive: publicKeyReceive,
            publicKeyReceiveSign: publicKeyReceiveSign
          };
          _context4.next = 11;
          return (0,api/* createPrepayOrderRedeemBtc */.Xk)(network, createPrepayOrderDto);
        case 11:
          _yield$createPrepayOr = _context4.sent;
          createResp = _yield$createPrepayOr.data;
          orderId = createResp.orderId, bridgeAddress = createResp.bridgeAddress;
          targetTokenCodeHash = btcAsset.targetTokenCodeHash, targetTokenGenesis = btcAsset.targetTokenGenesis;
          _context4.next = 17;
          return sendToken(String(redeemAmount), bridgeAddress, targetTokenCodeHash, targetTokenGenesis);
        case 17:
          txid = _context4.sent;
          submitPrepayOrderRedeemDto = {
            orderId: orderId,
            txid: txid
          };
          _context4.next = 21;
          return sleep(3000);
        case 21:
          _context4.next = 23;
          return (0,api/* submitPrepayOrderRedeemBtc */.aU)(network, submitPrepayOrderRedeemDto);
        case 23:
          ret = _context4.sent;
          if (ret.success) {
            _context4.next = 26;
            break;
          }
          throw new Error(ret.msg);
        case 26:
          return _context4.abrupt("return", {
            orderId: orderId,
            txid: txid
          });
        case 29:
          _context4.prev = 29;
          _context4.t0 = _context4["catch"](0);
          throw new Error(_context4.t0);
        case 32:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 29]]);
  }));
  return _redeemBtc.apply(this, arguments);
}
function redeemBrc20(_x9, _x10, _x11, _x12) {
  return _redeemBrc.apply(this, arguments);
}
function _redeemBrc() {
  _redeemBrc = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5(redeemAmount, asset, addressType, network) {
    var _yield$signPublicKey2, publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive, createPrepayOrderDto, _yield$createPrepayOr2, createResp, orderId, bridgeAddress, targetTokenCodeHash, targetTokenGenesis, txid, submitPrepayOrderRedeemDto, ret;
    return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return signPublicKey();
        case 3:
          _yield$signPublicKey2 = _context5.sent;
          publicKey = _yield$signPublicKey2.publicKey;
          publicKeySign = _yield$signPublicKey2.publicKeySign;
          publicKeyReceiveSign = _yield$signPublicKey2.publicKeyReceiveSign;
          publicKeyReceive = _yield$signPublicKey2.publicKeyReceive;
          createPrepayOrderDto = {
            amount: redeemAmount,
            originTokenId: asset.originTokenId,
            addressType: addressType,
            publicKey: publicKey,
            publicKeySign: publicKeySign,
            publicKeyReceive: publicKeyReceive,
            publicKeyReceiveSign: publicKeyReceiveSign
          };
          _context5.next = 11;
          return (0,api/* createPrepayOrderRedeemBrc20 */.eL)(network, createPrepayOrderDto);
        case 11:
          _yield$createPrepayOr2 = _context5.sent;
          createResp = _yield$createPrepayOr2.data;
          orderId = createResp.orderId, bridgeAddress = createResp.bridgeAddress;
          targetTokenCodeHash = asset.targetTokenCodeHash, targetTokenGenesis = asset.targetTokenGenesis;
          _context5.next = 17;
          return sendToken(String(redeemAmount), bridgeAddress, targetTokenCodeHash, targetTokenGenesis);
        case 17:
          txid = _context5.sent;
          submitPrepayOrderRedeemDto = {
            orderId: orderId,
            txid: txid
          };
          _context5.next = 21;
          return sleep(3000);
        case 21:
          _context5.next = 23;
          return (0,api/* submitPrepayOrderRedeemBrc20 */.T9)(network, submitPrepayOrderRedeemDto);
        case 23:
          ret = _context5.sent;
          if (ret.success) {
            _context5.next = 26;
            break;
          }
          throw new Error(ret.msg);
        case 26:
          return _context5.abrupt("return", {
            orderId: orderId,
            txid: txid
          });
        case 29:
          _context5.prev = 29;
          _context5.t0 = _context5["catch"](0);
          throw new Error(_context5.t0);
        case 32:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 29]]);
  }));
  return _redeemBrc.apply(this, arguments);
}
function buildTx(_x13) {
  return _buildTx.apply(this, arguments);
}
function _buildTx() {
  _buildTx = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee6(parmas) {
    var ret;
    return regeneratorRuntime_default()().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return window.metaidwallet.btc.transfer(parmas);
        case 2:
          ret = _context6.sent;
          console.log(ret);
          return _context6.abrupt("return", ret.txHex);
        case 5:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _buildTx.apply(this, arguments);
}
function mintBtc(_x14, _x15, _x16, _x17, _x18) {
  return _mintBtc.apply(this, arguments);
}
function _mintBtc() {
  _mintBtc = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee7(mintAmount, btcAsset, addressType, network, assetInfo) {
    var _yield$signMintPublic, publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive, createPrepayOrderDto, _yield$createPrepayOr3, createResp, orderId, bridgeAddress, txHex, submitPrepayOrderMintDto, submitRes;
    return regeneratorRuntime_default()().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return signMintPublicKey();
        case 2:
          _yield$signMintPublic = _context7.sent;
          publicKey = _yield$signMintPublic.publicKey;
          publicKeySign = _yield$signMintPublic.publicKeySign;
          publicKeyReceiveSign = _yield$signMintPublic.publicKeyReceiveSign;
          publicKeyReceive = _yield$signMintPublic.publicKeyReceive;
          createPrepayOrderDto = {
            amount: mintAmount,
            originTokenId: btcAsset.originTokenId,
            addressType: addressType,
            publicKey: publicKey,
            publicKeySign: publicKeySign,
            publicKeyReceive: publicKeyReceive,
            publicKeyReceiveSign: publicKeyReceiveSign
          };
          debugger;
          _context7.prev = 9;
          _context7.next = 12;
          return (0,api/* createPrepayOrderMintBtc */.z_)(network, createPrepayOrderDto);
        case 12:
          _yield$createPrepayOr3 = _context7.sent;
          createResp = _yield$createPrepayOr3.data;
          orderId = createResp.orderId, bridgeAddress = createResp.bridgeAddress;
          _context7.next = 17;
          return buildTx({
            toAddress: bridgeAddress,
            satoshis: Number(mintAmount),
            options: {
              noBroadcast: true,
              feeRate: assetInfo.feeBtc
            }
          });
        case 17:
          txHex = _context7.sent;
          submitPrepayOrderMintDto = {
            orderId: orderId,
            txHex: txHex
          };
          _context7.next = 21;
          return (0,api/* submitPrepayOrderMintBtc */.bv)(network, submitPrepayOrderMintDto);
        case 21:
          submitRes = _context7.sent;
          return _context7.abrupt("return", submitRes);
        case 25:
          _context7.prev = 25;
          _context7.t0 = _context7["catch"](9);
          throw new Error(_context7.t0.message || _context7.t0.msg);
        case 28:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[9, 25]]);
  }));
  return _mintBtc.apply(this, arguments);
}
function getTotalSatoshi(utxos) {
  return utxos.reduce(function (total, utxo) {
    return total.add(utxo.satoshi);
  }, new decimal/* default */.Z(0));
}
function _createPayment(_x19, _x20) {
  return _createPayment2.apply(this, arguments);
}
function _createPayment2() {
  _createPayment2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee8(network, address) {
    var btcNetwork, publicKeyString, publicKey, addressType;
    return regeneratorRuntime_default()().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          (0,src/* initEccLib */.Wi)(lib);
          btcNetwork = network === "mainnet" ? src/* networks */.QW.bitcoin : src/* networks */.QW.testnet;
          _context8.next = 4;
          return window.metaidwallet.btc.getPublicKey();
        case 4:
          publicKeyString = _context8.sent;
          publicKey = Buffer.from(publicKeyString, "hex");
          addressType = (0,utils/* determineAddressInfo */.uY)(address);
          _context8.t0 = addressType.toUpperCase();
          _context8.next = _context8.t0 === "P2PKH" ? 10 : _context8.t0 === "P2WPKH" ? 11 : 12;
          break;
        case 10:
          return _context8.abrupt("return", src/* payments */.PP.p2pkh({
            pubkey: publicKey,
            network: btcNetwork
          }));
        case 11:
          return _context8.abrupt("return", src/* payments */.PP.p2wpkh({
            pubkey: publicKey,
            network: btcNetwork
          }));
        case 12:
          return _context8.abrupt("return", src/* payments */.PP.p2pkh({
            pubkey: publicKey,
            network: btcNetwork
          }));
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _createPayment2.apply(this, arguments);
}
function getWitnessUtxo(out) {
  delete out.address;
  out.script = Buffer.from(out.script, "hex");
  return out;
}
function _createPayInput(_x21) {
  return _createPayInput2.apply(this, arguments);
}
function _createPayInput2() {
  _createPayInput2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee9(_ref) {
    var utxo, addressType, network, payInput, _yield$getRawTx, rawTx, tx;
    return regeneratorRuntime_default()().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          utxo = _ref.utxo, addressType = _ref.addressType, network = _ref.network;
          payInput = {
            hash: utxo.txId,
            index: utxo.vout
          };
          _context9.next = 4;
          return (0,api/* getRawTx */.V5)(network, {
            txid: utxo.txId
          });
        case 4:
          _yield$getRawTx = _context9.sent;
          rawTx = _yield$getRawTx.data.rawTx;
          tx = src/* Transaction */.YW.fromHex(rawTx);
          if (["P2WPKH"].includes(addressType)) {
            payInput["witnessUtxo"] = getWitnessUtxo(tx.outs[utxo.vout]);
          }
          if (["P2PKH"].includes(addressType)) {
            payInput["nonWitnessUtxo"] = tx.toBuffer();
          }
          return _context9.abrupt("return", payInput);
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _createPayInput2.apply(this, arguments);
}
function _calculateFee(psbt, feeRate) {
  var tx = psbt.extractTransaction();
  var size = tx.virtualSize();
  return size * feeRate;
}
var selectUTXOs = function selectUTXOs(utxos, targetAmount) {
  var totalAmount = new decimal/* default */.Z(0);
  var selectedUtxos = [];
  var _iterator = createForOfIteratorHelper_default()(utxos),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var utxo = _step.value;
      selectedUtxos.push(utxo);
      totalAmount = totalAmount.add(utxo.satoshi);
      if (totalAmount.gte(targetAmount)) {
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (totalAmount.lt(targetAmount)) {
    throw new Error("Insufficient funds to reach the target amount");
  }
  return selectedUtxos;
};
function sendBRC(_x22, _x23, _x24, _x25) {
  return _sendBRC.apply(this, arguments);
}
function _sendBRC() {
  _sendBRC = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee11(recipient, utxo, feeRate, net) {
    var amount, btcNetwork, address, addressType, payment, utxos, buildPsbt, selecedtUTXOs, total, psbt, fee, _psbt;
    return regeneratorRuntime_default()().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          amount = getTotalSatoshi([utxo]);
          btcNetwork = net === "mainnet" ? src/* networks */.QW.bitcoin : src/* networks */.QW.testnet;
          _context11.next = 4;
          return window.metaidwallet.btc.getAddress();
        case 4:
          address = _context11.sent;
          addressType = (0,utils/* determineAddressInfo */.uY)(address);
          _context11.next = 8;
          return _createPayment(net, address);
        case 8:
          payment = _context11.sent;
          _context11.next = 11;
          return window.metaidwallet.btc.getUtxos(address);
        case 11:
          utxos = _context11.sent;
          if (utxos.length) {
            _context11.next = 14;
            break;
          }
          throw new Error("your account currently has no available UTXO.");
        case 14:
          utxos.sort(function (a, b) {
            return b.satoshi - a.satoshi;
          });
          buildPsbt = /*#__PURE__*/function () {
            var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee10(selectedUtxos, change) {
              var psbt, payInput, _iterator2, _step2, _utxo, _payInput, _signPsbt, signPsbt;
              return regeneratorRuntime_default()().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    psbt = new src/* Psbt */._B({
                      network: btcNetwork
                    });
                    _context10.next = 3;
                    return _createPayInput({
                      utxo: utxo,
                      network: net,
                      addressType: addressType.toUpperCase()
                    });
                  case 3:
                    payInput = _context10.sent;
                    psbt.addInput(payInput);
                    psbt.addOutput({
                      value: utxo.satoshi,
                      address: recipient
                    });
                    if (change.gt(546)) {
                      psbt.addOutput({
                        value: change.toNumber(),
                        address: address
                      });
                    }
                    _iterator2 = createForOfIteratorHelper_default()(selectedUtxos);
                    _context10.prev = 8;
                    _iterator2.s();
                  case 10:
                    if ((_step2 = _iterator2.n()).done) {
                      _context10.next = 18;
                      break;
                    }
                    _utxo = _step2.value;
                    _context10.next = 14;
                    return _createPayInput({
                      utxo: _utxo,
                      network: net,
                      addressType: addressType.toUpperCase()
                    });
                  case 14:
                    _payInput = _context10.sent;
                    psbt.addInput(_payInput);
                  case 16:
                    _context10.next = 10;
                    break;
                  case 18:
                    _context10.next = 23;
                    break;
                  case 20:
                    _context10.prev = 20;
                    _context10.t0 = _context10["catch"](8);
                    _iterator2.e(_context10.t0);
                  case 23:
                    _context10.prev = 23;
                    _iterator2.f();
                    return _context10.finish(23);
                  case 26:
                    _context10.next = 28;
                    return window.metaidwallet.btc.signPsbt({
                      psbtHex: psbt.toHex()
                    });
                  case 28:
                    _signPsbt = _context10.sent;
                    signPsbt = src/* Psbt */._B.fromHex(_signPsbt);
                    return _context10.abrupt("return", signPsbt);
                  case 31:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, null, [[8, 20, 23, 26]]);
            }));
            return function buildPsbt(_x32, _x33) {
              return _ref2.apply(this, arguments);
            };
          }();
          selecedtUTXOs = [utxos[0]];
          total = getTotalSatoshi(selecedtUTXOs);
          _context11.next = 20;
          return buildPsbt(selecedtUTXOs, total.minus(amount));
        case 20:
          psbt = _context11.sent;
          fee = _calculateFee(psbt, feeRate);
        case 22:
          if (!getTotalSatoshi(selecedtUTXOs).lt(amount.add(fee))) {
            _context11.next = 33;
            break;
          }
          if (!(selecedtUTXOs.length === utxos.length)) {
            _context11.next = 25;
            break;
          }
          throw new Error("Insufficient funds");
        case 25:
          selecedtUTXOs = selectUTXOs(utxos, amount.add(fee));
          total = getTotalSatoshi(selecedtUTXOs);
          _context11.next = 29;
          return buildPsbt(selecedtUTXOs, total.minus(amount).minus(fee));
        case 29:
          _psbt = _context11.sent;
          fee = _calculateFee(_psbt, feeRate);
          _context11.next = 22;
          break;
        case 33:
          _context11.next = 35;
          return buildPsbt(selecedtUTXOs, total.minus(amount).minus(fee));
        case 35:
          psbt = _context11.sent;
          return _context11.abrupt("return", psbt);
        case 37:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _sendBRC.apply(this, arguments);
}
function mintBrc(_x26, _x27, _x28, _x29, _x30, _x31) {
  return _mintBrc.apply(this, arguments);
}
function _mintBrc() {
  _mintBrc = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee12(mintAmount, btcAsset, addressType, network, assetInfo, inscription) {
    var _yield$signMintPublic2, publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive, createPrepayOrderDto, _inscriptionId, _inscriptionId2, _yield$createPrepayOr4, createResp, orderId, bridgeAddress, inscriptionUtxo, psbt, submitPrepayOrderMintDto, submitRes;
    return regeneratorRuntime_default()().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return signMintPublicKey();
        case 2:
          _yield$signMintPublic2 = _context12.sent;
          publicKey = _yield$signMintPublic2.publicKey;
          publicKeySign = _yield$signMintPublic2.publicKeySign;
          publicKeyReceiveSign = _yield$signMintPublic2.publicKeyReceiveSign;
          publicKeyReceive = _yield$signMintPublic2.publicKeyReceive;
          createPrepayOrderDto = {
            amount: String(mintAmount),
            originTokenId: btcAsset.originTokenId,
            addressType: addressType,
            publicKey: publicKey,
            publicKeySign: publicKeySign,
            publicKeyReceive: publicKeyReceive,
            publicKeyReceiveSign: publicKeyReceiveSign
          };
          _context12.prev = 8;
          _context12.next = 11;
          return (0,api/* createPrepayOrderMintBRC20 */.k8)(network, createPrepayOrderDto);
        case 11:
          _yield$createPrepayOr4 = _context12.sent;
          createResp = _yield$createPrepayOr4.data;
          orderId = createResp.orderId, bridgeAddress = createResp.bridgeAddress;
          inscriptionUtxo = {
            txId: (_inscriptionId = inscription.inscriptionId) === null || _inscriptionId === void 0 ? void 0 : _inscriptionId.slice(0, -2),
            vout: +((_inscriptionId2 = inscription.inscriptionId) === null || _inscriptionId2 === void 0 ? void 0 : _inscriptionId2.split("i")[1]),
            satoshi: +inscription.outValue,
            confirmed: true,
            inscriptions: null
          };
          _context12.next = 17;
          return sendBRC(bridgeAddress, inscriptionUtxo, assetInfo.feeBtc, network);
        case 17:
          psbt = _context12.sent;
          submitPrepayOrderMintDto = {
            orderId: orderId,
            txHex: psbt.extractTransaction().toHex()
          };
          _context12.next = 21;
          return (0,api/* submitPrepayOrderMintBrc20 */.nc)(network, submitPrepayOrderMintDto);
        case 21:
          submitRes = _context12.sent;
          return _context12.abrupt("return", submitRes);
        case 25:
          _context12.prev = 25;
          _context12.t0 = _context12["catch"](8);
          throw new Error(_context12.t0.message || _context12.t0.msg);
        case 28:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[8, 25]]);
  }));
  return _mintBrc.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/components/SelectAsset/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 19 modules
var input = __webpack_require__(56846);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(68795);
;// CONCATENATED MODULE: ./src/components/SelectAsset/index.tsx









var Search = input/* default */.Z.Search;
/* harmony default export */ var SelectAsset = (function (_ref) {
  var onChange = _ref.onChange,
    type = _ref.type;
  var _useModel = (0,_umi_production_exports.useModel)("wrapping"),
    chains = _useModel.chains,
    assets = _useModel.assets,
    asset = _useModel.asset;
  var _useState = (0,react.useState)(""),
    _useState2 = slicedToArray_default()(_useState, 2),
    searchWord = _useState2[0],
    setSerachWord = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = slicedToArray_default()(_useState3, 2),
    list = _useState4[0],
    setList = _useState4[1];
  (0,react.useEffect)(function () {
    if (searchWord) {
      var _list = assets.filter(function (item) {
        return item.targetSymbol.toUpperCase().includes(searchWord.trim().toUpperCase()) || item.originSymbol.toUpperCase().includes(searchWord.trim().toUpperCase());
      });
      setList(_list);
    } else {
      setList(assets);
    }
  }, [searchWord, assets]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "selectAssetWrap",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "title",
      children: "Select Asset"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "assetWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "inputWrap",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          placeholder: "input symbol",
          onChange: function onChange(e) {
            return setSerachWord(e.target.value);
          },
          allowClear: true,
          variant: "filled",
          size: "large",
          suffix: /*#__PURE__*/(0,jsx_runtime.jsx)(SearchOutlined/* default */.Z, {}),
          style: {
            height: 48
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "list",
        children: list.map(function (item) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "item ".concat((asset === null || asset === void 0 ? void 0 : asset.originTokenId) === item.originTokenId ? "selected" : ""),
            onClick: function onClick() {
              return onChange(item);
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
              size: 30,
              src: "",
              symbol: type === "origin" ? item.originSymbol : item.targetSymbol
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "symbol",
              children: type === "origin" ? item.originSymbol : item.targetSymbol
            })]
          }, item.targetTokenId);
        })
      })]
    })]
  });
});
;// CONCATENATED MODULE: ./src/assets/arrowRight.svg
var arrowRight_defProp = Object.defineProperty;
var arrowRight_getOwnPropSymbols = Object.getOwnPropertySymbols;
var arrowRight_hasOwnProp = Object.prototype.hasOwnProperty;
var arrowRight_propIsEnum = Object.prototype.propertyIsEnumerable;
var arrowRight_defNormalProp = (obj, key, value) => key in obj ? arrowRight_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var arrowRight_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (arrowRight_hasOwnProp.call(b, prop))
      arrowRight_defNormalProp(a, prop, b[prop]);
  if (arrowRight_getOwnPropSymbols)
    for (var prop of arrowRight_getOwnPropSymbols(b)) {
      if (arrowRight_propIsEnum.call(b, prop))
        arrowRight_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgArrowRight = (props) => /* @__PURE__ */ React.createElement("svg", arrowRight_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 32, height: 32 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "arrowRight_svg__a" }, /* @__PURE__ */ React.createElement("rect", { x: 12, y: 43, width: 9, height: 10, rx: 0 }))), /* @__PURE__ */ React.createElement("circle", { cx: 16, cy: 48, fill: "#302D8C", r: 16, transform: "rotate(-90 0 32)" }), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#arrowRight_svg__a)", transform: "rotate(-90 0 32)" }, /* @__PURE__ */ React.createElement("path", { d: "M16.5 45.354 12.915 41.5l-.914.982 4.5 4.837 4.5-4.837-.914-.982-3.586 3.854Z", fill: "#FFF", fillOpacity: 0.2 }), /* @__PURE__ */ React.createElement("path", { d: "m16.5 51.034-3.586-3.852-.914.981L16.5 53l4.5-4.837-.914-.981-3.586 3.852Z", fill: "#FFF" })));

/* harmony default export */ var arrowRight = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB4PSIxMiIgeT0iNDMiIHdpZHRoPSI5IiBoZWlnaHQ9IjEwIiByeD0iMCIvPjwvY2xpcFBhdGg+PC9kZWZzPjxjaXJjbGUgY3g9IjE2IiBjeT0iNDgiIGZpbGw9IiMzMDJEOEMiIHI9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMCAzMikiLz48ZyBjbGlwLXBhdGg9InVybCgjYSkiIHRyYW5zZm9ybT0icm90YXRlKC05MCAwIDMyKSI+PHBhdGggZD0iTTE2LjUgNDUuMzU0IDEyLjkxNSA0MS41bC0uOTE0Ljk4MiA0LjUgNC44MzcgNC41LTQuODM3LS45MTQtLjk4Mi0zLjU4NiAzLjg1NFoiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJtMTYuNSA1MS4wMzQtMy41ODYtMy44NTItLjkxNC45ODFMMTYuNSA1M2w0LjUtNC44MzctLjkxNC0uOTgxLTMuNTg2IDMuODUyWiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/pages/wrapping/components/Summary.tsx









/* harmony default export */ var Summary = (function (_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    _ref$amount = _ref.amount,
    amount = _ref$amount === void 0 ? "0" : _ref$amount,
    _ref$reciveAmount = _ref.reciveAmount,
    reciveAmount = _ref$reciveAmount === void 0 ? "0" : _ref$reciveAmount,
    _ref$bridgeFee = _ref.bridgeFee,
    bridgeFee = _ref$bridgeFee === void 0 ? "0" : _ref$bridgeFee,
    _ref$totalFee = _ref.totalFee,
    totalFee = _ref$totalFee === void 0 ? "0" : _ref$totalFee,
    _ref$minerFee = _ref.minerFee,
    minerFee = _ref$minerFee === void 0 ? "0" : _ref$minerFee,
    handleSubmit = _ref.handleSubmit,
    _ref$submitting = _ref.submitting,
    submitting = _ref$submitting === void 0 ? false : _ref$submitting;
  var _useModel = (0,_umi_production_exports.useModel)("wrapping"),
    asset = _useModel.asset,
    fromChain = _useModel.fromChain,
    toChain = _useModel.toChain;
  if (!asset) return;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    title: "Summary",
    modalWidth: 520,
    show: show,
    onClose: onClose,
    closable: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
      spinning: submitting,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "summaryWrap",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
          symbol: asset === null || asset === void 0 ? void 0 : asset.originSymbol,
          src: "",
          size: 80
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "symbol",
          children: [asset.originSymbol, "-", asset.targetSymbol]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "netWrap",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "item",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "amount",
              children: amount
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "chain",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
                size: 16,
                src: fromChain.icon,
                symbol: fromChain.label
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: fromChain.label
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: arrowRight,
            alt: "",
            className: "arrow"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "item",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "amount",
              children: reciveAmount
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "chain",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
                size: 16,
                src: toChain.icon,
                symbol: toChain.label
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: toChain.label
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "feeList",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "item",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "label",
              children: "Service Fee"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              className: "value",
              children: [bridgeFee, fromChain.key === "btc" ? asset.originSymbol : asset.targetSymbol]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "item",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "label",
              children: "Network Fee"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              className: "value",
              children: [minerFee, fromChain.key === "btc" ? asset.originSymbol : asset.targetSymbol]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "item",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "label",
              children: "Total Fee"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              className: "value",
              children: [totalFee, fromChain.key === "btc" ? asset.originSymbol : asset.targetSymbol]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "item",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "label",
              children: "Estimated Receipt Time"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "value",
              children: "20 minutes "
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "submitWrap",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_FormButton, {
            conditions: [],
            onClick: handleSubmit,
            children: "Confirm bridge"
          })
        })]
      })
    })
  });
});
;// CONCATENATED MODULE: ./src/components/SuccessModel/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/assets/check-fill.svg
var check_fill_defProp = Object.defineProperty;
var check_fill_getOwnPropSymbols = Object.getOwnPropertySymbols;
var check_fill_hasOwnProp = Object.prototype.hasOwnProperty;
var check_fill_propIsEnum = Object.prototype.propertyIsEnumerable;
var check_fill_defNormalProp = (obj, key, value) => key in obj ? check_fill_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var check_fill_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (check_fill_hasOwnProp.call(b, prop))
      check_fill_defNormalProp(a, prop, b[prop]);
  if (check_fill_getOwnPropSymbols)
    for (var prop of check_fill_getOwnPropSymbols(b)) {
      if (check_fill_propIsEnum.call(b, prop))
        check_fill_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgCheckFill = (props) => /* @__PURE__ */ React.createElement("svg", check_fill_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 90, height: 90 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "check-fill_svg__a" }, /* @__PURE__ */ React.createElement("rect", { x: 23, y: 23, width: 45, height: 45, rx: 0 }))), /* @__PURE__ */ React.createElement("circle", { cx: 45, cy: 45, fill: "#6E66FA", r: 45 }), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#check-fill_svg__a)" }, /* @__PURE__ */ React.createElement("rect", { x: 23, y: 23, width: 45, height: 45, rx: 0, fill: "#6E66FA" }), /* @__PURE__ */ React.createElement("path", { d: "m43.062 60.07 19.125-23.288a.5.5 0 0 0-.063-.7l-5.033-4.254a.5.5 0 0 0-.709.064l-14.18 17.267-7.011-7.114a.5.5 0 0 0-.712 0l-4.633 4.7a.5.5 0 0 0 0 .703l12.473 12.656a.5.5 0 0 0 .742-.033", fillRule: "evenodd", fill: "#FFF" })));

/* harmony default export */ var check_fill = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB4PSIyMyIgeT0iMjMiIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSIgcng9IjAiLz48L2NsaXBQYXRoPjwvZGVmcz48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiBmaWxsPSIjNkU2NkZBIiByPSI0NSIvPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHJlY3QgeD0iMjMiIHk9IjIzIiB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHJ4PSIwIiBmaWxsPSIjNkU2NkZBIi8+PHBhdGggZD0ibTQzLjA2MiA2MC4wNyAxOS4xMjUtMjMuMjg4YS41LjUgMCAwIDAtLjA2My0uN2wtNS4wMzMtNC4yNTRhLjUuNSAwIDAgMC0uNzA5LjA2NGwtMTQuMTggMTcuMjY3LTcuMDExLTcuMTE0YS41LjUgMCAwIDAtLjcxMiAwbC00LjYzMyA0LjdhLjUuNSAwIDAgMCAwIC43MDNsMTIuNDczIDEyLjY1NmEuNS41IDAgMCAwIC43NDItLjAzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/components/SuccessModel/index.tsx






/* harmony default export */ var SuccessModel = (function (_ref) {
  var show = _ref.show,
    onClose = _ref.onClose;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    title: "",
    modalWidth: 390,
    show: show,
    onClose: onClose,
    closable: false,
    bodyStyle: {
      padding: "28px 25px"
    },
    className: "successModal",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "successWrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: check_fill,
        alt: "",
        className: "icon"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "desc",
        children: "Success"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        className: "item",
        type: "primary",
        onClick: onClose,
        style: {
          width: 324,
          height: 68
        },
        children: "OK"
      })]
    })
  });
});
;// CONCATENATED MODULE: ./src/pages/wrapping/index.tsx
























var defalut = {
  show: false,
  amount: "",
  reciveAmount: "",
  bridgeFee: "",
  totalFee: "",
  minerFee: "",
  handleSubmit: function () {
    var _handleSubmit = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function handleSubmit() {
      return _handleSubmit.apply(this, arguments);
    }
    return handleSubmit;
  }(),
  onClose: function onClose() {}
};
/* harmony default export */ var wrapping = (function () {
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBgBase = _theme$useToken$token.colorBgBase,
    borderRadius = _theme$useToken$token.borderRadius,
    borderRadiusSM = _theme$useToken$token.borderRadiusSM;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    historyVisible = _useState2[0],
    setHistoryVisible = _useState2[1];
  var _useModel = (0,_umi_production_exports.useModel)("wallet"),
    userBal = _useModel.userBal,
    connected = _useModel.connected,
    btcAddress = _useModel.btcAddress,
    network = _useModel.network,
    getBal = _useModel.getBal;
  var _useState3 = (0,react.useState)(""),
    _useState4 = slicedToArray_default()(_useState3, 2),
    amount = _useState4[0],
    setAmount = _useState4[1];
  var _useState5 = (0,react.useState)(""),
    _useState6 = slicedToArray_default()(_useState5, 2),
    reciveAmount = _useState6[0],
    setReciveAmount = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = slicedToArray_default()(_useState7, 2),
    selectChainVisible = _useState8[0],
    setSelectChainVisible = _useState8[1];
  var _useState9 = (0,react.useState)(),
    _useState10 = slicedToArray_default()(_useState9, 2),
    selectAssetVisible = _useState10[0],
    setSelectAssetVisible = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = slicedToArray_default()(_useState11, 2),
    successVisible = _useState12[0],
    setSuccessVisible = _useState12[1];
  var _useState13 = (0,react.useState)(),
    _useState14 = slicedToArray_default()(_useState13, 2),
    chainType = _useState14[0],
    setChainType = _useState14[1];
  var _useState15 = (0,react.useState)(),
    _useState16 = slicedToArray_default()(_useState15, 2),
    brc20Info = _useState16[0],
    setBrc20Info = _useState16[1];
  var _useState17 = (0,react.useState)(),
    _useState18 = slicedToArray_default()(_useState17, 2),
    inscription = _useState18[0],
    setInscription = _useState18[1];
  var _useState19 = (0,react.useState)(defalut),
    _useState20 = slicedToArray_default()(_useState19, 2),
    confrimProps = _useState20[0],
    setConfirmProps = _useState20[1];
  var _useState21 = (0,react.useState)(false),
    _useState22 = slicedToArray_default()(_useState21, 2),
    loadingBrc20 = _useState22[0],
    setLoadingBrc20 = _useState22[1];
  var _useState23 = (0,react.useState)(false),
    _useState24 = slicedToArray_default()(_useState23, 2),
    submitting = _useState24[0],
    setSubmitting = _useState24[1];
  var _useState25 = (0,react.useState)(""),
    _useState26 = slicedToArray_default()(_useState25, 2),
    ErrorMsg = _useState26[0],
    setErrorMsg = _useState26[1];
  var _useState27 = (0,react.useState)({
      minerFee: "",
      bridgeFee: "",
      receiveAmount: "",
      totalFee: "",
      confirmNumber: ""
    }),
    _useState28 = slicedToArray_default()(_useState27, 2),
    feeInfo = _useState28[0],
    setFeeInfo = _useState28[1];
  var _useModel2 = (0,_umi_production_exports.useModel)("wrapping"),
    chains = _useModel2.chains,
    fromChain = _useModel2.fromChain,
    toChain = _useModel2.toChain,
    setFromChain = _useModel2.setFromChain,
    setToChain = _useModel2.setToChain,
    asset = _useModel2.asset,
    protocolType = _useModel2.protocolType,
    AssetsInfo = _useModel2.AssetsInfo,
    setProtocolType = _useModel2.setProtocolType,
    setAsset = _useModel2.setAsset;
  var switchChain = function switchChain() {
    var _from = fromChain;
    var _to = toChain;
    setToChain(_from);
    setFromChain(_to);
  };
  var handleHistory = function handleHistory() {
    if (connected) {
      setHistoryVisible(true);
    }
  };
  var bridgeType = (0,react.useMemo)(function () {
    if (fromChain.key === "btc") return "mint";
    return "redeem";
  }, [fromChain]);
  var sendBal = (0,react.useMemo)(function () {
    if (asset && protocolType == "btc") {
      if (bridgeType === "mint") return userBal["btc"] || "0";
      if (bridgeType === "redeem") return userBal[asset.targetTokenGenesis] || "0";
    }
    if (asset && protocolType == "brc20") {
      if (bridgeType === "redeem") return userBal[asset.targetTokenGenesis] || "0";
    }
  }, [protocolType, bridgeType, asset, userBal]);
  var onInputChange = function onInputChange(value) {
    setAmount(value);
    if (AssetsInfo && asset && protocolType === "btc" && bridgeType === "redeem") {
      try {
        var info = (0,utils/* calcRedeemBtcInfo */.PO)((0,utils/* amountRaw */.xo)(String(value), asset.decimals), AssetsInfo);
        setErrorMsg("");
        setReciveAmount(info.receiveAmount);
        setFeeInfo(info);
      } catch (err) {
        console.log(err);
        message/* default */.ZP.error(err.message || "unknown error");
        setReciveAmount("");
        setErrorMsg(err.message || "unknown error");
      }
    }
    if (AssetsInfo && asset && protocolType === "brc20" && bridgeType === "redeem") {
      try {
        var _info = (0,utils/* calcRedeemBrc20Info */.ug)((0,utils/* amountRaw */.xo)(value, asset.decimals - asset.trimDecimals), AssetsInfo, asset);
        setErrorMsg("");
        setReciveAmount(_info.receiveAmount);
        setFeeInfo(_info);
      } catch (err) {
        console.log(err);
        setReciveAmount("");
        message/* default */.ZP.error(err.message || "unknown error");
        setErrorMsg(err.message || "unknown error");
      }
    }
    if (AssetsInfo && protocolType === "btc" && bridgeType === "mint") {
      try {
        var _info2 = (0,utils/* calcMintBtcInfo */.jq)((0,utils/* amountRaw */.xo)(value, 8), AssetsInfo);
        setErrorMsg("");
        setReciveAmount(_info2.receiveAmount);
        setFeeInfo(_info2);
      } catch (err) {
        console.log(err);
        setReciveAmount("");
        message/* default */.ZP.error(err.message || "unknown error");
        setErrorMsg(err.message || "unknown error");
      }
    }
    if (AssetsInfo && asset && protocolType === "brc20" && bridgeType === "mint") {
      try {
        var _info3 = (0,utils/* calcMintBrc20Info */.AY)(value, AssetsInfo, asset);
        setErrorMsg("");
        setReciveAmount(_info3.receiveAmount);
        setFeeInfo(_info3);
      } catch (err) {
        console.log(err);
        setReciveAmount("");
        message/* default */.ZP.error(err.message || "unknown error");
        setErrorMsg(err.message || "unknown error");
      }
    }
  };
  (0,react.useEffect)(function () {
    var didCancel = false;
    var fetch = /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
        var ret;
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(network && asset && btcAddress && bridgeType === "mint" && protocolType === "brc20" && asset.network === "BRC20")) {
                _context2.next = 9;
                break;
              }
              setLoadingBrc20(true);
              _context2.next = 4;
              return (0,api/* getUserBRC20 */.i3)(network, {
                address: btcAddress,
                tick: asset === null || asset === void 0 ? void 0 : asset.originSymbol
              });
            case 4:
              ret = _context2.sent;
              if (!didCancel) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return");
            case 7:
              setBrc20Info(ret.data || {
                message: ret.message,
                balance: "0",
                transferBalanceList: []
              });
              setLoadingBrc20(false);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function fetch() {
        return _ref.apply(this, arguments);
      };
    }();
    fetch();
    return function () {
      didCancel = true;
    };
  }, [protocolType, bridgeType, network, asset, btcAddress]);
  var handleChainChange = function handleChainChange(chainType, chain) {
    if (chainType === "from") {
      if (fromChain.key !== chain.key) {
        switchChain();
      }
    }
    if (chainType === "to") {
      if (toChain.key !== chain.key) {
        switchChain();
      }
    }
    setSelectChainVisible(false);
  };
  var redeem = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
      var addressInfo, addressType;
      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!btcAddress || !asset || !network)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            setSubmitting(true);
            addressInfo = (0,utils/* determineAddressInfo */.uY)(btcAddress);
            addressType = addressInfo.toUpperCase();
            if (supportRedeemAddressType.includes(addressType)) {
              _context3.next = 8;
              break;
            }
            throw new Error("unsupport address type");
          case 8:
            if (!(bridgeType === "redeem" && protocolType === "btc")) {
              _context3.next = 11;
              break;
            }
            _context3.next = 11;
            return redeemBtc((0,utils/* amountRaw */.xo)(String(amount), asset.decimals), asset, addressType, network);
          case 11:
            if (!(asset && bridgeType === "redeem" && protocolType === "brc20")) {
              _context3.next = 14;
              break;
            }
            _context3.next = 14;
            return redeemBrc20((0,utils/* amountRaw */.xo)(String(amount), asset.decimals - asset.trimDecimals), asset, addressType, network);
          case 14:
            setSuccessVisible(true);
            _context3.next = 17;
            return getBal();
          case 17:
            _context3.next = 23;
            break;
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            message/* default */.ZP.error(_context3.t0.message || "unknown error");
          case 23:
            setSubmitting(false);
          case 24:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 19]]);
    }));
    return function redeem() {
      return _ref2.apply(this, arguments);
    };
  }();
  var mint = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
      var addressInfo, addressType, ret, _ret;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(!btcAddress || !asset || !network || !AssetsInfo)) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            _context4.prev = 2;
            setSubmitting(true);
            addressInfo = (0,utils/* determineAddressInfo */.uY)(btcAddress);
            addressType = addressInfo.toUpperCase();
            if (!(bridgeType === "mint" && protocolType === "btc")) {
              _context4.next = 10;
              break;
            }
            _context4.next = 9;
            return mintBtc((0,utils/* amountRaw */.xo)(String(amount), 8), asset, addressType, network, AssetsInfo);
          case 9:
            ret = _context4.sent;
          case 10:
            if (!(inscription && bridgeType === "mint" && protocolType === "brc20")) {
              _context4.next = 14;
              break;
            }
            _context4.next = 13;
            return mintBrc(Number(inscription.amount), asset, addressType, network, AssetsInfo, inscription);
          case 13:
            _ret = _context4.sent;
          case 14:
            setSuccessVisible(true);
            _context4.next = 17;
            return getBal();
          case 17:
            _context4.next = 23;
            break;
          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            message/* default */.ZP.error(_context4.t0.message || "unknown error");
          case 23:
            setSubmitting(false);
          case 24:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[2, 19]]);
    }));
    return function mint() {
      return _ref3.apply(this, arguments);
    };
  }();
  var Inscribe = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
      return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(connected && asset)) {
              _context5.next = 3;
              break;
            }
            _context5.next = 3;
            return window.metaidwallet.btc.inscribeTransfer(asset === null || asset === void 0 ? void 0 : asset.originSymbol);
          case 3:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function Inscribe() {
      return _ref4.apply(this, arguments);
    };
  }();
  var conditions = (0,react.useMemo)(function () {
    return [{
      condition: !amount,
      text: "Entry Amount",
      type: "primary",
      onClick: function onClick() {}
    }, {
      condition: Number(reciveAmount) < 0,
      text: "Low Send Amount",
      type: "primary",
      onClick: function onClick() {}
    }, {
      condition: ErrorMsg,
      text: ErrorMsg,
      type: "primary",
      onClick: function onClick() {}
    }];
  }, [ErrorMsg, amount]);
  var handleSubmit = function handleSubmit() {
    if (bridgeType === "mint") return mint();
    if (bridgeType === "redeem") return redeem();
  };
  var handleConfirm = function handleConfirm() {
    setConfirmProps({
      show: true,
      amount: amount,
      reciveAmount: String(reciveAmount),
      minerFee: String(feeInfo.minerFee),
      bridgeFee: String(feeInfo.bridgeFee),
      totalFee: String(feeInfo.totalFee),
      handleSubmit: handleSubmit,
      onClose: function onClose() {
        return setConfirmProps(defalut);
      }
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "wrapPage",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
      defaultValue: "btc",
      style: {
        width: 520,
        maxWidth: "100vw",
        marginBottom: 32
      },
      onChange: function onChange(value) {
        setProtocolType(value);
        setAmount("");
        setReciveAmount("");
      },
      options: SegOptions,
      size: "large",
      block: true
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
      style: {
        width: 520,
        maxWidth: "100vw",
        position: "relative",
        border: "2px solid #6e66fa"
      },
      id: "warapping",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "title",
        children: ["Wrapping", /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "imgwrap",
          style: {
            background: colorBgBase,
            borderRadius: borderRadius
          },
          onClick: handleHistory,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: assets_history,
            alt: ""
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "chains",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "from chain",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "label",
            children: "From"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
            dropdownRender: function dropdownRender() {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(SelectNet, {
                defalutChain: fromChain,
                onChange: function onChange(chain) {
                  handleChainChange("from", chain);
                  setChainType(undefined);
                }
              });
            },
            open: chainType === "from",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              type: "text",
              className: "selectWrap",
              style: {
                background: colorBgBase,
                borderRadius: borderRadius
              },
              onClick: function onClick() {
                setChainType("from");
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
                  size: 30,
                  src: fromChain.icon,
                  symbol: fromChain.label
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: fromChain.label
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})]
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: assets_switch,
          alt: "",
          className: "switchIcon",
          onClick: switchChain
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "to chain",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "label",
            children: "To"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
            dropdownRender: function dropdownRender() {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(SelectNet, {
                defalutChain: toChain,
                onChange: function onChange(chain) {
                  handleChainChange("to", chain);
                  setChainType(undefined);
                }
              });
            },
            open: chainType === "to",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              type: "text",
              className: "selectWrap",
              style: {
                background: colorBgBase,
                borderRadius: borderRadius
              },
              onClick: function onClick() {
                setChainType("to");
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
                  size: 30,
                  src: toChain.icon,
                  symbol: toChain.label
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: toChain.label
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})]
              })
            })
          })]
        })]
      }), asset && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "assets",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "send inputCardWrap",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "label",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: "You send"
            }), !(protocolType === "brc20" && bridgeType === "mint") && /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "tag",
                style: {
                  background: colorBgBase,
                  borderRadius: borderRadiusSM
                },
                onClick: function onClick() {
                  return onInputChange((sendBal * 0.25).toFixed(8));
                },
                children: "25%"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "tag",
                style: {
                  background: colorBgBase,
                  borderRadius: borderRadiusSM
                },
                onClick: function onClick() {
                  return onInputChange((sendBal * 0.5).toFixed(8));
                },
                children: "50%"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "tag",
                style: {
                  background: colorBgBase,
                  borderRadius: borderRadiusSM
                },
                onClick: function onClick() {
                  return onInputChange(sendBal);
                },
                children: "Max"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "inputCard",
            style: {
              background: colorBgBase,
              borderRadius: borderRadius
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
              dropdownRender: function dropdownRender() {
                return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  onMouseLeave: function onMouseLeave() {
                    return setSelectAssetVisible(undefined);
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(SelectAsset, {
                    type: bridgeType === "mint" ? "origin" : "target",
                    onChange: function onChange(_asset) {
                      setAsset(_asset);
                      setSelectAssetVisible(undefined);
                      setAmount("");
                      setErrorMsg("");
                      setReciveAmount("");
                    }
                  })
                });
              },
              onOpenChange: function onOpenChange(open) {
                console.log(open);
              },
              open: selectAssetVisible == "send",
              placement: "bottomLeft",
              autoAdjustOverflow: false,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                onClick: function onClick() {
                  setSelectAssetVisible('send');
                },
                style: {
                  cursor: "pointer"
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                  style: {
                    height: 50
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
                    size: 40,
                    src: "",
                    symbol: asset.originSymbol
                  }), bridgeType === "mint" ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    children: [asset.originSymbol, " "]
                  }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    children: [asset.targetSymbol, " "]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "inputWrap",
              children: protocolType === "brc20" && bridgeType === "mint" ? /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
                spinning: loadingBrc20,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
                  wrap: "wrap",
                  gap: "small",
                  justify: "flex-end",
                  children: [brc20Info && brc20Info.message && brc20Info.message, brc20Info && brc20Info.transferBalanceList.map(function (item) {
                    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "brcItem ".concat(inscription && inscription.inscriptionId === item.inscriptionId ? "active" : ""),
                      onClick: function onClick() {
                        setInscription(item);
                        onInputChange(item.amount);
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                        className: "tick",
                        children: bridgeType === "mint" ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          children: [asset.originSymbol, " "]
                        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          children: [asset.targetSymbol, " "]
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                        className: "amount",
                        children: item.amount
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                        className: "number",
                        children: ["#", item.inscriptionNumber]
                      })]
                    }, item.inscriptionId);
                  }), brc20Info && brc20Info.transferBalanceList.length === 0 && !brc20Info.message && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    children: ["No transferable", /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                      type: "text",
                      className: "inscribeBtn",
                      onClick: Inscribe,
                      style: {
                        color: "#6E66FA"
                      },
                      disabled: Number(brc20Info.balance) === 0,
                      children: "Inscribe"
                    })]
                  })]
                })
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
                className: "input",
                onChange: onInputChange,
                value: amount,
                max: sendBal,
                variant: "borderless",
                controls: false
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "bal",
            children: ["Balance:", protocolType === "brc20" && bridgeType === "mint" ? brc20Info ? brc20Info.balance : "..." : sendBal, bridgeType === "mint" ? asset.originSymbol : asset.targetSymbol]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "recive inputCardWrap",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "label",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: "You recive"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "inputCard",
            style: {
              background: colorBgBase,
              borderRadius: borderRadius
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
              dropdownRender: function dropdownRender() {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(SelectAsset, {
                  type: bridgeType === "redeem" ? "origin" : "target",
                  onChange: function onChange(_asset) {
                    setAsset(_asset);
                    setSelectAssetVisible(undefined);
                    setAmount("");
                    setErrorMsg("");
                    setReciveAmount("");
                  }
                });
              },
              open: selectAssetVisible == "recive",
              placement: "bottomLeft",
              autoAdjustOverflow: false,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                onClick: function onClick() {
                  setSelectAssetVisible("recive");
                },
                style: {
                  cursor: "pointer"
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_TokenIcon, {
                  size: 40,
                  src: "",
                  symbol: asset.originSymbol
                }), bridgeType === "redeem" ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  children: [asset.originSymbol, " "]
                }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  children: [asset.targetSymbol, " "]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "inputWrap",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
                className: "input",
                onChange: onInputChange,
                value: reciveAmount,
                variant: "borderless",
                controls: false,
                disabled: true
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "submitWrap",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_FormButton, {
          conditions: conditions,
          onClick: handleConfirm,
          children: "Bridge"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(History, {
        show: historyVisible,
        onClose: function onClose() {
          return setHistoryVisible(false);
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Summary, objectSpread2_default()(objectSpread2_default()({}, confrimProps), {}, {
      submitting: submitting
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(SuccessModel, {
      show: successVisible,
      onClose: function onClose() {
        setSuccessVisible(false);
        setAmount("");
        setReciveAmount("");
        setInscription(undefined);
        setConfirmProps(defalut);
      }
    })]
  });
});

/***/ })

}]);