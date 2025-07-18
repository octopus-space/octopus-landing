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
var modal = __webpack_require__(53107);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/ResponPopup/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
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
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$bodyStyle = _ref.bodyStyle,
    bodyStyle = _ref$bodyStyle === void 0 ? {} : _ref$bodyStyle;
  // const { md } = useBreakpoint()
  // return (<>
  //     {true ?
  //         <Modal
  //             open={show}
  //             onCancel={onClose}
  //             width={modalWidth || 420}
  //             title={title}
  //             footer={null}
  //             closable={closable}
  //             maskClosable={maskClosable}
  //             style={{padding:0,...style}}
  //             className={'hayPopup'+' '+className}

  //             getContainer={false}
  //         >
  //             {children}
  //         </Modal> :
  //         <Drawer title={title} open={show} placement="bottom" onClose={onClose} closable={closable}  maskClosable={maskClosable} style={{ height: 'auto',...style }} bodyStyle={{ height: 'auto',maxHeight:'90vh',padding:10,...bodyStyle }} contentWrapperStyle={{ height: 'auto' }}>
  //             {children}
  //         </Drawer>
  //     }

  // </>)
  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
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
    className: "hayPopup" + " " + className,
    getContainer: false,
    children: children
  });
};
/* harmony default export */ var ResponPopup = (Popup);

/***/ }),

/***/ 56356:
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

// EXTERNAL MODULE: ./src/assets/logo.svg
var logo = __webpack_require__(13299);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/assets/github.svg
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

const SvgGithub = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 40, height: 40 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("mask", { id: "github_svg__a", style: {
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

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
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
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 9 modules
var config_provider = __webpack_require__(83760);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(9361);
// EXTERNAL MODULE: ./node_modules/antd/es/alert/index.js + 4 modules
var es_alert = __webpack_require__(40056);
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

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 12 modules
var message = __webpack_require__(68872);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 25 modules
var es_button = __webpack_require__(77683);
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
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 35 modules
var dropdown = __webpack_require__(28596);
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
          src: logo/* default */.Z,
          alt: "",
          className: "logo",
          onClick: function onClick() {
            return _umi_production_exports.history.push('/');
          }
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
                children: "Smartcontract Bridging"
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
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: logoIcon,
                  alt: ""
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  className: "name",
                  children: showAddress
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "item active",
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
  var _useModel = (0,_umi_production_exports.useModel)('wallet'),
    network = _useModel.network;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(config_provider/* default */.ZP, {
    theme: objectSpread2_default()({
      algorithm: theme/* default */.Z.darkAlgorithm
    }, _themes),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
      type: "error",
      message: "System upgrade in progress, expected to resume normal operation on Monday.",
      banner: true,
      showIcon: false,
      style: {
        textAlign: 'center'
      }
    }), network === 'testnet' && /*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
      type: "error",
      message: "This is a test network. Coins have no value.",
      banner: true,
      showIcon: false,
      style: {
        textAlign: 'center'
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "page",
      children: [location.pathname !== "/" ? /*#__PURE__*/(0,jsx_runtime.jsx)(Header, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "header",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "headerwrap",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: logo/* default */.Z,
            alt: "",
            className: "logo",
            onClick: function onClick() {
              return _umi_production_exports.history.push('/');
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "navWrap",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Nav, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "entryBtn",
              onClick: function onClick() {
                return _umi_production_exports.history.push('/wrapping');
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
            onClick: function onClick() {
              return _umi_production_exports.history.push('/wrapping');
            },
            children: "Octopus.space@2024 All Rights Reserved"
          })]
        })
      })]
    })]
  });
}

/***/ }),

/***/ 91198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/metalet.14c117c6.png";

/***/ })

}]);