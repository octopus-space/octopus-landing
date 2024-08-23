(self["webpackChunk"] = self["webpackChunk"] || []).push([[242],{

/***/ 6226:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_col; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/RowContext.js
var RowContext = __webpack_require__(99134);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/style/index.js
var grid_style = __webpack_require__(6999);
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/col.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





function parseFlex(flex) {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const Col = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const {
    gutter,
    wrap
  } = react.useContext(RowContext/* default */.Z);
  const {
      prefixCls: customizePrefixCls,
      span,
      order,
      offset,
      push,
      pull,
      className,
      children,
      flex,
      style
    } = props,
    others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);
  const prefixCls = getPrefixCls('col', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,grid_style/* useColStyle */.cG)(prefixCls);
  // ===================== Size ======================
  const sizeStyle = {};
  let sizeClassObj = {};
  sizes.forEach(size => {
    let sizeProps = {};
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }
    delete others[size];
    sizeClassObj = Object.assign(Object.assign({}, sizeClassObj), {
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      [`${prefixCls}-rtl`]: direction === 'rtl'
    });
    // Responsive flex layout
    if (sizeProps.flex) {
      sizeClassObj[`${prefixCls}-${size}-flex`] = true;
      sizeStyle[`--${prefixCls}-${size}-flex`] = parseFlex(sizeProps.flex);
    }
  });
  // ==================== Normal =====================
  const classes = classnames_default()(prefixCls, {
    [`${prefixCls}-${span}`]: span !== undefined,
    [`${prefixCls}-order-${order}`]: order,
    [`${prefixCls}-offset-${offset}`]: offset,
    [`${prefixCls}-push-${push}`]: push,
    [`${prefixCls}-pull-${pull}`]: pull
  }, className, sizeClassObj, hashId, cssVarCls);
  const mergedStyle = {};
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }
  // ==================== Render =====================
  return wrapCSSVar( /*#__PURE__*/react.createElement("div", Object.assign({}, others, {
    style: Object.assign(Object.assign(Object.assign({}, mergedStyle), style), sizeStyle),
    className: classes,
    ref: ref
  }), children));
});
if (false) {}
/* harmony default export */ var col = (Col);
;// CONCATENATED MODULE: ./node_modules/antd/es/col/index.js
"use client";


/* harmony default export */ var es_col = (col);

/***/ }),

/***/ 99134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const RowContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__.Z = (RowContext);

/***/ }),

/***/ 6999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VM: function() { return /* binding */ useRowStyle; },
/* harmony export */   cG: function() { return /* binding */ useColStyle; }
/* harmony export */ });
/* unused harmony exports prepareRowComponentToken, prepareColComponentToken */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11568);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83559);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83262);


// ============================== Row-Shared ==============================
const genGridRowStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      display: 'flex',
      flexFlow: 'row wrap',
      minWidth: 0,
      '&::before, &::after': {
        display: 'flex'
      },
      '&-no-wrap': {
        flexWrap: 'nowrap'
      },
      // The origin of the X-axis
      '&-start': {
        justifyContent: 'flex-start'
      },
      // The center of the X-axis
      '&-center': {
        justifyContent: 'center'
      },
      // The opposite of the X-axis
      '&-end': {
        justifyContent: 'flex-end'
      },
      '&-space-between': {
        justifyContent: 'space-between'
      },
      '&-space-around': {
        justifyContent: 'space-around'
      },
      '&-space-evenly': {
        justifyContent: 'space-evenly'
      },
      // Align at the top
      '&-top': {
        alignItems: 'flex-start'
      },
      // Align at the center
      '&-middle': {
        alignItems: 'center'
      },
      '&-bottom': {
        alignItems: 'flex-end'
      }
    }
  };
};
// ============================== Col-Shared ==============================
const genGridColStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      position: 'relative',
      maxWidth: '100%',
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const {
    prefixCls,
    componentCls,
    gridColumns
  } = token;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: 'none'
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = [
      // https://github.com/ant-design/ant-design/issues/44456
      // Form set `display: flex` on Col which will override `display: block`.
      // Let's get it from css variable to support override.
      {
        ['--ant-display']: 'block',
        // Fallback to display if variable not support
        display: 'block'
      }, {
        display: 'var(--ant-display)',
        flex: `0 0 ${i / gridColumns * 100}%`,
        maxWidth: `${i / gridColumns * 100}%`
      }];
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  // Flex CSS Var
  gridColumnsStyle[`${componentCls}${sizeCls}-flex`] = {
    flex: `var(--${prefixCls}${sizeCls}-flex)`
  };
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [`@media (min-width: ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(screenSize)})`]: Object.assign({}, genGridStyle(token, sizeCls))
});
const prepareRowComponentToken = () => ({});
const prepareColComponentToken = () => ({});
// ============================== Export ==============================
const useRowStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__/* .genStyleHooks */ .I$)('Grid', genGridRowStyle, prepareRowComponentToken);
const useColStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__/* .genStyleHooks */ .I$)('Grid', token => {
  const gridToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__/* .mergeToken */ .IX)(token, {
    gridColumns: 24 // Row is divided into 24 parts in Grid
  });
  const gridMediaSizesMap = {
    '-sm': gridToken.screenSMMin,
    '-md': gridToken.screenMDMin,
    '-lg': gridToken.screenLGMin,
    '-xl': gridToken.screenXLMin,
    '-xxl': gridToken.screenXXLMin
  };
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ''), genGridStyle(gridToken, '-xs'), Object.keys(gridMediaSizesMap).map(key => genGridMediaStyle(gridToken, gridMediaSizesMap[key], key)).reduce((pre, cur) => Object.assign(Object.assign({}, pre), cur), {})];
}, prepareColComponentToken);

/***/ }),

/***/ 25968:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_row; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/responsiveObserver.js
var _util_responsiveObserver = __webpack_require__(74443);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/RowContext.js
var RowContext = __webpack_require__(99134);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/style/index.js
var grid_style = __webpack_require__(6999);
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/row.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RowAligns = (/* unused pure expression or super */ null && (['top', 'middle', 'bottom', 'stretch']));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RowJustify = (/* unused pure expression or super */ null && (['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly']));
function useMergedPropByScreen(oriProp, screen) {
  const [prop, setProp] = react.useState(typeof oriProp === 'string' ? oriProp : '');
  const calcMergedAlignOrJustify = () => {
    if (typeof oriProp === 'string') {
      setProp(oriProp);
    }
    if (typeof oriProp !== 'object') {
      return;
    }
    for (let i = 0; i < _util_responsiveObserver/* responsiveArray */.c4.length; i++) {
      const breakpoint = _util_responsiveObserver/* responsiveArray */.c4[i];
      // if do not match, do nothing
      if (!screen[breakpoint]) {
        continue;
      }
      const curVal = oriProp[breakpoint];
      if (curVal !== undefined) {
        setProp(curVal);
        return;
      }
    }
  };
  react.useEffect(() => {
    calcMergedAlignOrJustify();
  }, [JSON.stringify(oriProp), screen]);
  return prop;
}
const Row = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      justify,
      align,
      className,
      style,
      children,
      gutter = 0,
      wrap
    } = props,
    others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const [screens, setScreens] = react.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  // to save screens info when responsiveObserve callback had been call
  const [curScreens, setCurScreens] = react.useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  });
  // ================================== calc responsive data ==================================
  const mergedAlign = useMergedPropByScreen(align, curScreens);
  const mergedJustify = useMergedPropByScreen(justify, curScreens);
  const gutterRef = react.useRef(gutter);
  const responsiveObserver = (0,_util_responsiveObserver/* default */.ZP)();
  // ================================== Effect ==================================
  react.useEffect(() => {
    const token = responsiveObserver.subscribe(screen => {
      setCurScreens(screen);
      const currentGutter = gutterRef.current || 0;
      if (!Array.isArray(currentGutter) && typeof currentGutter === 'object' || Array.isArray(currentGutter) && (typeof currentGutter[0] === 'object' || typeof currentGutter[1] === 'object')) {
        setScreens(screen);
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  // ================================== Render ==================================
  const getGutter = () => {
    const results = [undefined, undefined];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object') {
        for (let i = 0; i < _util_responsiveObserver/* responsiveArray */.c4.length; i++) {
          const breakpoint = _util_responsiveObserver/* responsiveArray */.c4[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };
  const prefixCls = getPrefixCls('row', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,grid_style/* useRowStyle */.VM)(prefixCls);
  const gutters = getGutter();
  const classes = classnames_default()(prefixCls, {
    [`${prefixCls}-no-wrap`]: wrap === false,
    [`${prefixCls}-${mergedJustify}`]: mergedJustify,
    [`${prefixCls}-${mergedAlign}`]: mergedAlign,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId, cssVarCls);
  // Add gutter related style
  const rowStyle = {};
  const horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }
  // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.
  const [gutterH, gutterV] = gutters;
  rowStyle.rowGap = gutterV;
  const rowContext = react.useMemo(() => ({
    gutter: [gutterH, gutterV],
    wrap
  }), [gutterH, gutterV, wrap]);
  return wrapCSSVar( /*#__PURE__*/react.createElement(RowContext/* default */.Z.Provider, {
    value: rowContext
  }, /*#__PURE__*/react.createElement("div", Object.assign({}, others, {
    className: classes,
    style: Object.assign(Object.assign({}, rowStyle), style),
    ref: ref
  }), children)));
});
if (false) {}
/* harmony default export */ var row = (Row);
;// CONCATENATED MODULE: ./node_modules/antd/es/row/index.js
"use client";


/* harmony default export */ var es_row = (row);

/***/ }),

/***/ 52945:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56981), __esModule: true };

/***/ }),

/***/ 85861:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(45627), __esModule: true };

/***/ }),

/***/ 32242:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(33391), __esModule: true };

/***/ }),

/***/ 85345:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70433), __esModule: true };

/***/ }),

/***/ 93516:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80025), __esModule: true };

/***/ }),

/***/ 64275:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(52392), __esModule: true };

/***/ }),

/***/ 99663:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;

exports.Z = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 22600:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;

var _defineProperty = __webpack_require__(32242);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Z = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 88239:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;

var _assign = __webpack_require__(52945);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Z = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 93196:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;

var _setPrototypeOf = __webpack_require__(85345);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(85861);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(72444);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Z = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ 42723:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;

exports.Z = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 49135:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;

var _typeof2 = __webpack_require__(72444);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Z = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ 72444:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(64275);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(93516);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 56981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(72699);
module.exports = __webpack_require__(34579).Object.assign;


/***/ }),

/***/ 45627:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(86760);
var $Object = (__webpack_require__(34579).Object);
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ 33391:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(31477);
var $Object = (__webpack_require__(34579).Object);
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 70433:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(59349);
module.exports = __webpack_require__(34579).Object.setPrototypeOf;


/***/ }),

/***/ 80025:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(46840);
__webpack_require__(94058);
__webpack_require__(8174);
__webpack_require__(36461);
module.exports = __webpack_require__(34579).Symbol;


/***/ }),

/***/ 52392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(91867);
__webpack_require__(73871);
module.exports = (__webpack_require__(25103).f)('iterator');


/***/ }),

/***/ 85663:
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 79003:
/***/ (function(module) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 12159:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(36727);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 57428:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7932);
var toLength = __webpack_require__(78728);
var toAbsoluteIndex = __webpack_require__(16531);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 32894:
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 34579:
/***/ (function(module) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 19216:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(85663);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 8333:
/***/ (function(module) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 89666:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7929)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 97467:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(36727);
var document = (__webpack_require__(33938).document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 73338:
/***/ (function(module) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 70337:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(46162);
var gOPS = __webpack_require__(48195);
var pIE = __webpack_require__(86274);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 83856:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(33938);
var core = __webpack_require__(34579);
var ctx = __webpack_require__(19216);
var hide = __webpack_require__(41818);
var has = __webpack_require__(27069);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 7929:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 33938:
/***/ (function(module) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 27069:
/***/ (function(module) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 41818:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var dP = __webpack_require__(4743);
var createDesc = __webpack_require__(83101);
module.exports = __webpack_require__(89666) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 54881:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var document = (__webpack_require__(33938).document);
module.exports = document && document.documentElement;


/***/ }),

/***/ 33758:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = !__webpack_require__(89666) && !__webpack_require__(7929)(function () {
  return Object.defineProperty(__webpack_require__(97467)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 50799:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(32894);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 71421:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(32894);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 36727:
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 33945:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(98989);
var descriptor = __webpack_require__(83101);
var setToStringTag = __webpack_require__(25378);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(41818)(IteratorPrototype, __webpack_require__(22939)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 45700:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16227);
var $export = __webpack_require__(83856);
var redefine = __webpack_require__(57470);
var hide = __webpack_require__(41818);
var Iterators = __webpack_require__(15449);
var $iterCreate = __webpack_require__(33945);
var setToStringTag = __webpack_require__(25378);
var getPrototypeOf = __webpack_require__(95089);
var ITERATOR = __webpack_require__(22939)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 85084:
/***/ (function(module) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 15449:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 16227:
/***/ (function(module) {

module.exports = true;


/***/ }),

/***/ 77177:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var META = __webpack_require__(65730)('meta');
var isObject = __webpack_require__(36727);
var has = __webpack_require__(27069);
var setDesc = (__webpack_require__(4743).f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(7929)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 88082:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(89666);
var getKeys = __webpack_require__(46162);
var gOPS = __webpack_require__(48195);
var pIE = __webpack_require__(86274);
var toObject = __webpack_require__(66530);
var IObject = __webpack_require__(50799);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(7929)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 98989:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12159);
var dPs = __webpack_require__(57856);
var enumBugKeys = __webpack_require__(73338);
var IE_PROTO = __webpack_require__(58989)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(97467)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(54881).appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 4743:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var anObject = __webpack_require__(12159);
var IE8_DOM_DEFINE = __webpack_require__(33758);
var toPrimitive = __webpack_require__(33206);
var dP = Object.defineProperty;

exports.f = __webpack_require__(89666) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 57856:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var dP = __webpack_require__(4743);
var anObject = __webpack_require__(12159);
var getKeys = __webpack_require__(46162);

module.exports = __webpack_require__(89666) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 76183:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var pIE = __webpack_require__(86274);
var createDesc = __webpack_require__(83101);
var toIObject = __webpack_require__(7932);
var toPrimitive = __webpack_require__(33206);
var has = __webpack_require__(27069);
var IE8_DOM_DEFINE = __webpack_require__(33758);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(89666) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 94368:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7932);
var gOPN = (__webpack_require__(22802).f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 22802:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(12963);
var hiddenKeys = (__webpack_require__(73338).concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 48195:
/***/ (function(__unused_webpack_module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 95089:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(27069);
var toObject = __webpack_require__(66530);
var IE_PROTO = __webpack_require__(58989)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 12963:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(27069);
var toIObject = __webpack_require__(7932);
var arrayIndexOf = __webpack_require__(57428)(false);
var IE_PROTO = __webpack_require__(58989)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 46162:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(12963);
var enumBugKeys = __webpack_require__(73338);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 86274:
/***/ (function(__unused_webpack_module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 83101:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 57470:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(41818);


/***/ }),

/***/ 62906:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(36727);
var anObject = __webpack_require__(12159);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(19216)(Function.call, (__webpack_require__(76183).f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ 25378:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var def = (__webpack_require__(4743).f);
var has = __webpack_require__(27069);
var TAG = __webpack_require__(22939)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 58989:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(20250)('keys');
var uid = __webpack_require__(65730);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 20250:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var core = __webpack_require__(34579);
var global = __webpack_require__(33938);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16227) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 90510:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(11052);
var defined = __webpack_require__(8333);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 16531:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(11052);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 11052:
/***/ (function(module) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 7932:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(50799);
var defined = __webpack_require__(8333);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 78728:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(11052);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 66530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8333);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 33206:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(36727);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 65730:
/***/ (function(module) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 76347:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(33938);
var core = __webpack_require__(34579);
var LIBRARY = __webpack_require__(16227);
var wksExt = __webpack_require__(25103);
var defineProperty = (__webpack_require__(4743).f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 25103:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

exports.f = __webpack_require__(22939);


/***/ }),

/***/ 22939:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(20250)('wks');
var uid = __webpack_require__(65730);
var Symbol = (__webpack_require__(33938).Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 3882:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(79003);
var step = __webpack_require__(85084);
var Iterators = __webpack_require__(15449);
var toIObject = __webpack_require__(7932);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(45700)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 72699:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(83856);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(88082) });


/***/ }),

/***/ 86760:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $export = __webpack_require__(83856);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(98989) });


/***/ }),

/***/ 31477:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $export = __webpack_require__(83856);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(89666), 'Object', { defineProperty: (__webpack_require__(4743).f) });


/***/ }),

/***/ 59349:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(83856);
$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(62906).set) });


/***/ }),

/***/ 94058:
/***/ (function() {



/***/ }),

/***/ 91867:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(90510)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(45700)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 46840:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(33938);
var has = __webpack_require__(27069);
var DESCRIPTORS = __webpack_require__(89666);
var $export = __webpack_require__(83856);
var redefine = __webpack_require__(57470);
var META = (__webpack_require__(77177).KEY);
var $fails = __webpack_require__(7929);
var shared = __webpack_require__(20250);
var setToStringTag = __webpack_require__(25378);
var uid = __webpack_require__(65730);
var wks = __webpack_require__(22939);
var wksExt = __webpack_require__(25103);
var wksDefine = __webpack_require__(76347);
var enumKeys = __webpack_require__(70337);
var isArray = __webpack_require__(71421);
var anObject = __webpack_require__(12159);
var isObject = __webpack_require__(36727);
var toObject = __webpack_require__(66530);
var toIObject = __webpack_require__(7932);
var toPrimitive = __webpack_require__(33206);
var createDesc = __webpack_require__(83101);
var _create = __webpack_require__(98989);
var gOPNExt = __webpack_require__(94368);
var $GOPD = __webpack_require__(76183);
var $GOPS = __webpack_require__(48195);
var $DP = __webpack_require__(4743);
var $keys = __webpack_require__(46162);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(22802).f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(86274).f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(16227)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(41818)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 8174:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(76347)('asyncIterator');


/***/ }),

/***/ 36461:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(76347)('observable');


/***/ }),

/***/ 73871:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(3882);
var global = __webpack_require__(33938);
var hide = __webpack_require__(41818);
var Iterators = __webpack_require__(15449);
var TO_STRING_TAG = __webpack_require__(22939)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ 75:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(34155);
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


/***/ }),

/***/ 54087:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var now = __webpack_require__(75)
  , root = typeof window === 'undefined' ? __webpack_require__.g : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}


/***/ }),

/***/ 73049:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ rc_queue_anim_es; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/raf/index.js
var raf = __webpack_require__(54087);
var raf_default = /*#__PURE__*/__webpack_require__.n(raf);
// EXTERNAL MODULE: ./node_modules/style-utils/main.js
var main = __webpack_require__(52191);
;// CONCATENATED MODULE: ./node_modules/tween-one/es/utils.js

function noop() {}
var colorRegExp = main/* colorRegExp */.rV;
var shadowExp = /.*shadow$/gi;
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var getTime = Date.now;
function parsePath(path) {
  if (typeof path === 'string') {
    if (path.charAt(0).match(/m/i)) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    }

    return document.querySelector(path);
  } else if (path.style) {
    return path;
  }

  throw new Error('Error while parsing the path');
}
var initAnimProps = {
  type: 'to',
  duration: 450,
  delay: 0,
  repeat: 0,
  repeatDelay: 0,
  appearTo: 0,
  yoyo: false,
  ease: 'easeInOutQuad',
  onStart: noop,
  onUpdate: noop,
  onComplete: noop,
  onRepeat: noop,
  startAt: {}
};
var initProps = {
  animation: {},
  paused: false,
  reverse: false,
  delay: 0,
  repeat: 0,
  repeatDelay: 0,
  yoyo: false,
  moment: null,
  resetStyle: false,
  regionStartTime: 0,
  regionEndTime: undefined,
  onChange: noop,
  onChangeTimeline: noop
};
var getInitProps = function getInitProps(props) {
  var p = {};
  Object.keys(initProps).forEach(function (k) {
    p[k] = typeof props[k] === 'undefined' ? initProps[k] : props[k];
  }); // 时间去掉小数点;

  if (p.delay) {
    p.delay = Math.round(p.delay);
  }

  if (props.repeatDelay) {
    p.repeatDelay = Math.round(p.repeatDelay);
  }

  return p;
};
var dataToArray = function dataToArray(d) {
  if (Array.isArray(d) || !d) {
    return d;
  }

  if (d.length) {
    var t = Array.prototype.slice.call(d);
    return t.length ? [d] : t;
  }

  return [d];
};
var flatArray = function flatArray(d) {
  return d.length === 1 ? d[0] : d;
};
var getAnimatePos = function getAnimatePos(animate, _ref) {
  var _ref$appearTo = _ref.appearTo,
      appearTo = _ref$appearTo === void 0 ? 0 : _ref$appearTo,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 450 : _ref$duration,
      repeat = _ref.repeat,
      repeatDelay = _ref.repeatDelay;

  if (typeof appearTo === 'string') {
    return 0;
  }

  var appearToTime;
  var v = 0;

  if (typeof animate.appearTo === 'number') {
    return animate.appearTo;
  }

  if (typeof animate.appearTo === 'string' && animate.appearTo.charAt(1) === '=') {
    v = parseFloat(animate.appearTo.replace('=', ''));
  }

  appearToTime = appearTo + delay + duration + v;

  if (repeat === -1) {
    appearToTime = Number.MAX_VALUE;
  } else if (repeat) {
    appearToTime = appearTo + delay + duration * (repeat + 1) + (repeatDelay || 0) * repeat + v;
  }

  return appearToTime;
};
var getDefaultStart = function getDefaultStart(key) {
  switch (key) {
    case 'opacity':
    case 'scaleX':
    case 'scaleY':
    case 'scale':
      return 1;

    default:
      return 0;
  }
};
var getStartAtValue = function getStartAtValue(start, startAt) {
  var value = typeof start === 'string' ? parseFloat(start) : start;
  return getValue(value, startAt.vars, 1, startAt.count, startAt.unit);
};
var getValue = function getValue(startVars, endVars, ratio) {
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var unit = arguments.length > 4 ? arguments[4] : undefined;
  return count === '+=' || count === '-=' ? startVars + endVars * ratio + (unit || 0) : (endVars - startVars) * ratio + startVars + (unit || 0);
};
var getComputedStyle = function getComputedStyle(target) {
  if (!target) {
    return {};
  }

  var style = typeof window !== 'undefined' && document.defaultView ? document.defaultView.getComputedStyle(target) : {};
  return style;
};
var styleValueToArray = {
  margin: 1,
  padding: 1,
  borderWidth: 1,
  borderRadius: 1
};
function startConvertToEndUnit(_ref2) {
  var target = _ref2.target,
      computedStyle = _ref2.computedStyle,
      style = _ref2.style,
      value = _ref2.value,
      startUnit = _ref2.startUnit,
      endUnit = _ref2.endUnit,
      fixed = _ref2.fixed,
      isOriginWidth = _ref2.isOriginWidth,
      useCurrentTarget = _ref2.useCurrentTarget;

  if (windowIsUndefined) {
    return value;
  }

  var horiz = /(?:Left|Right|Width|X)/i.test(style) || isOriginWidth;
  horiz = style === 'padding' || style === 'marign' ? true : horiz;
  var t = style.indexOf('border') !== -1 || style.indexOf('translate') !== -1 || style === 'transformOrigin' || useCurrentTarget ? target : target.parentNode || document.body;
  t = fixed ? document.body : t;
  var pix;
  var htmlComputedStyle;
  var warPix; // transform 在 safari 下会留着单位，chrome 下会全部转换成 px;

  switch (startUnit) {
    case '%':
      pix = parseFloat(value) / 100 * (horiz ? t.clientWidth : t.clientHeight);
      break;

    case 'vw':
      pix = parseFloat(value) * document.body.clientWidth / 100;
      break;

    case 'vh':
      pix = parseFloat(value) * document.body.clientHeight / 100;
      break;

    case 'em':
      if (!computedStyle) {
        warPix = 'em';
        pix = parseFloat(value);
      } else {
        pix = parseFloat(value) * parseFloat(computedStyle.fontSize);
      }

      break;

    case 'rem':
      {
        if (!computedStyle) {
          warPix = 'rem';
          pix = parseFloat(value);
        } else {
          htmlComputedStyle = window.getComputedStyle(document.getElementsByTagName('html')[0]);
          pix = parseFloat(value) * parseFloat(htmlComputedStyle.fontSize);
        }

        break;
      }

    default:
      pix = parseFloat(value);
      break;
  }

  switch (endUnit) {
    case '%':
      pix = pix ? pix * 100 / (horiz ? t.clientWidth : t.clientHeight) : 0;
      break;

    case 'vw':
      pix = parseFloat(value) / document.body.clientWidth * 100;
      break;

    case 'vh':
      pix = parseFloat(value) / document.body.clientHeight * 100;
      break;

    case 'em':
      if (!computedStyle) {
        warPix = 'em';
        pix = parseFloat(value);
      } else {
        pix = parseFloat(value) / parseFloat(computedStyle.fontSize);
      }

      break;

    case 'rem':
      {
        if (!computedStyle) {
          warPix = 'rem';
          pix = parseFloat(value);
        } else {
          htmlComputedStyle = htmlComputedStyle || window.getComputedStyle(document.getElementsByTagName('html')[0]);
          pix = parseFloat(value) / parseFloat(htmlComputedStyle.fontSize);
        }

        break;
      }

    default:
      break;
  }

  if (warPix) {
    console.warn("Warning: Element is not 'DOM, can not use '".concat(warPix, "', automatically convert to animation units."));
  }

  return pix;
}
function getTransformValue(t) {
  if (typeof t === 'string') {
    return t;
  }

  var perspective = t.perspective;
  var angle = t.rotate;
  var rotateX = t.rotateX;
  var rotateY = t.rotateY;
  var sx = t.scaleX;
  var sy = t.scaleY;
  var sz = t.scaleZ;
  var skx = t.skewX;
  var sky = t.skewY;
  var translateX = typeof t.translateX === 'string' ? t.translateX : "".concat(t.translateX, "px");
  var translateY = typeof t.translateY === 'string' ? t.translateY : "".concat(t.translateY, "px");
  var translateZ = typeof t.translateZ === 'string' ? t.translateZ : "".concat(t.translateZ, "px");
  var sk = skx || sky ? "skew(".concat(skx, "deg,").concat(sky, "deg)") : '';
  var an = angle ? "rotate(".concat(angle, "deg)") : '';
  var ss = sx !== 1 || sy !== 1 || sz !== 1 ? "scale3d(".concat(sx, ",").concat(sy, ",").concat(sz, ")") : '';
  var rX = rotateX ? "rotateX(".concat(rotateX, "deg)") : '';
  var rY = rotateY ? "rotateY(".concat(rotateY, "deg)") : '';
  var per = perspective ? "perspective(".concat(perspective, "px)") : '';
  var defaultTranslate = ss || an || rX || rY || sk ? '' : 'translate(0px, 0px)';
  var translate = t.translateZ ? "translate3d(".concat(translateX, ",").concat(translateY, ",").concat(translateZ, ")") : (t.translateX || t.translateY) && "translate(".concat(translateX, ",").concat(translateY, ")") || defaultTranslate;
  return "".concat(per, " ").concat(translate, " ").concat(ss, " ").concat(an, " ").concat(rX, " ").concat(rY, " ").concat(sk).trim();
}
/* export const styleToString = (v: IObject) => {
  let s = '';
  Object.keys(v).forEach(k => {
    s += `${toCssLowerCase(k)}: ${v[k]}; `;
  });
  return s;
};*/

var initFilterValue = {
  brightness: 1,
  saturate: 1,
  contrast: 1,
  grayScale: 0,
  hueRotate: '0deg',
  sepia: 0,
  invert: 0
};
;// CONCATENATED MODULE: ./node_modules/tween-one/es/animate/ticker.js





var Ticker = /*#__PURE__*/function () {
  function Ticker() {
    var _this = this;

    (0,classCallCheck/* default */.Z)(this, Ticker);

    this.lagThreshold = 150;
    this.adjustedLag = 33;
    this.emptyTime = 0;
    this.elapsed = 0;
    this.frameFPS = 1000 / 240;
    this.startTime = 0;
    this.prevTime = 0;
    this.useTimeout = false;
    this.lastUpdate = this.startTime;
    this.nextTime = this.frameFPS;
    this.req = void 0;
    this.id = -1;
    this.tweenId = 0;
    this.tickFn = [];
    this.state = 'sleep';
    this.time = 0;
    this.frame = 0;

    this.removeReq = function (id) {
      return _this.useTimeout ? clearTimeout(id) : (0,raf.cancel)(id);
    };

    this.tick = function () {
      var tickFn = _this.tickFn;

      if (!_this.startTime) {
        _this.startTime = getTime() - _this.frameFPS;
        _this.lastUpdate = _this.startTime;
      }

      _this.elapsed = getTime() - _this.lastUpdate;

      if (_this.elapsed > _this.lagThreshold) {
        _this.startTime += _this.elapsed - _this.adjustedLag;
      }

      _this.lastUpdate += _this.elapsed;
      _this.time = _this.lastUpdate - _this.startTime;
      var overlap = _this.time - _this.nextTime;

      if (overlap > 0) {
        _this.frame++;
        _this.nextTime += overlap + (overlap >= _this.frameFPS ? 4 : _this.frameFPS - overlap);
        var f = _this.time - _this.prevTime;

        for (var i = 0; i < tickFn.length; i++) {
          tickFn[i].fn({
            time: _this.time,
            elapsed: f < _this.frameFPS ? _this.frameFPS : f
          });
        }
        /* this.tickFn = this.tickFn.filter(item => {
          if (!item.kill) {
            item.fn({ time: this.time, elapsed: this.elapsed });
            return item;
          }
          return false;
        }); */


        _this.prevTime = _this.time;
      }

      if (!_this.tickFn.length) {
        if (!_this.emptyTime) {
          _this.emptyTime = _this.time + 500; // 延时关掉, 用阔值避免跳帧。
        }

        if (_this.time >= _this.emptyTime) {
          _this.emptyTime = 0;

          _this.sleep();

          return;
        }
      }

      if (_this.req) {
        _this.id = _this.req(_this.tick);
      }
    };

    this.wake = function () {
      if (_this.id) {
        _this.sleep();
      }

      _this.req = _this.useTimeout ? function (f) {
        return setTimeout(f, _this.frameFPS);
      } : (raf_default());

      _this.tick();

      _this.state = 'wake';
    };

    this.sleep = function () {
      _this.removeReq(_this.id);

      _this.id = -1;
      _this.req = undefined;
      _this.state = 'sleep';
    };

    this.add = function (fn) {
      var key = "TweenOneTicker_".concat(_this.tweenId);
      _this.tweenId += 1;

      if (_this.tickFn.findIndex(function (c) {
        return c.key === key;
      }) === -1) {
        _this.tickFn.push({
          key: key,
          fn: fn
        });
      }

      _this.emptyTime = 0;

      if (!_this.req) {
        // setTimeout(this.wake);
        _this.wake();
      }

      return key;
    };

    this.clear = function (f) {
      // f: key || fn

      /* const t = Date.now()
      const i = this.tickFn.findIndex((c: any) => c.key === f || c.fn === f);
      // console.log(i);
      if (i !== -1) {
        this.tickFn.splice(i, 1);
      } */
      //const { tickFn } = this;
      // console.log('clear')

      /* for (let i = 0; i < this.tickFn.length; i++) {
         const c = this.tickFn[i];
        if (c.fn == f || c.key === f) {
          c.kill = true;
        }
      }*/
      _this.tickFn = _this.tickFn.filter(function (c) {
        return c.key !== f && c.fn !== f;
      });
    };

    this.timeout = function (fn, time) {
      if (!(typeof fn === 'function')) {
        return console.warn('not function'); // eslint-disable-line
      }

      var startTime = _this.time;

      var timeoutID = _this.add(function () {
        var moment = _this.time - startTime;

        if (moment >= (time || 0)) {
          _this.clear(timeoutID);

          fn();
        }
      });

      return timeoutID;
    };

    this.interval = function (fn, time) {
      if (!(typeof fn === 'function')) {
        console.warn('not function'); // eslint-disable-line

        return null;
      }

      var starTime = _this.time;
      return _this.add(function () {
        var moment = _this.time - starTime;

        if (moment >= (time || 0)) {
          starTime = _this.time;
          fn();
        }
      });
    };
  }

  (0,createClass/* default */.Z)(Ticker, [{
    key: "fps",
    value: function fps(_fps, useTimeout) {
      this.frameFPS = 1000 / (_fps || 240); // 240 赫磁率, 不再用 60；

      this.nextTime = this.time + this.frameFPS;
      this.useTimeout = typeof useTimeout === 'undefined' ? this.useTimeout : useTimeout;

      if (this.useTimeout) {
        this.req = function (f) {
          return setTimeout(f, _fps);
        };
      }
    }
  }]);

  return Ticker;
}();

var ticker = new Ticker();
/* harmony default export */ var animate_ticker = (ticker);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(64687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
;// CONCATENATED MODULE: ./node_modules/tween-one/es/plugins/index.js



/**
 * Plugins
 * 管理滤境，如 cssStyle, svg path
 */


var Plugin = /*#__PURE__*/(0,createClass/* default */.Z)(function Plugin() {
  var _this = this;

  (0,classCallCheck/* default */.Z)(this, Plugin);

  this.push = function (plugins) {
    dataToArray(plugins).forEach(function (item) {
      _this[item.className] = item;
    });
  };

  this.register = this.push;
});

/* harmony default export */ var plugins = (new Plugin());

;// CONCATENATED MODULE: ./node_modules/tween-one/es/plugins/StylePlugin.js







var unitReg = /%|vw|vh|em|rem/i;

var style = /*#__PURE__*/(0,createClass/* default */.Z)( //CSSStyleDeclaration;
function style(_props) {
  var _this = this;

  (0,classCallCheck/* default */.Z)(this, style);

  this.props = void 0;
  this.computedStyle = void 0;
  this.root = void 0;
  this.index = void 0;
  this.targetIndex = void 0;
  this.tweenVars = {};
  this.transformName = void 0;
  this.filterName = void 0;
  this.target = void 0;
  this.start = {};
  this.startAt = {};
  this.propsData = {
    data: {},
    type: {},
    unit: {},
    count: {},
    splitStr: {},
    isTransform: {}
  };

  this.setDefaultData = function () {
    var props = _this.props;

    for (var k in props) {
      // Object.keys(props).forEach((k: string) => {
      var value = props[k];
      var isArray = value.split && value.split(/\s+|,/).length > 1 || k.match(/color|fill|stroke/i) || k.match(/shadow/i);
      var isGradients = (k === 'background' || k === 'backgroundImage') && value.match(/[a-z|-]+\(([\s\S]*?)\)/gi);

      if (isGradients) {
        _this.propsData.data[k] = {
          value: value,
          plugin: plugins.GradientsPlugin
        };
        continue;
      }

      if (isArray) {
        _this.propsData.data[k] = {
          value: value,
          plugin: plugins.ArrayPlugin
        };
        continue;
      }

      var key = (0,main/* getGsapType */.Lo)(k);

      var data = _this.getTweenData(key, props[k]);

      _this.propsData.data[key] = data.data[key];
      _this.propsData.type[key] = data.type[key];
      _this.propsData.unit[key] = data.unit[key];
      _this.propsData.count[key] = data.count[key];
      _this.propsData.isTransform[key] = (0,main/* isConvert */.dt)(key) === 'transform';

      if (data.splitStr[key]) {
        _this.propsData.splitStr[key] = data.splitStr[key];
      } //});

    }
  };

  this.getTweenData = function (key, v) {
    var data = {
      data: {},
      isTransform: {},
      type: {},
      unit: {},
      count: {},
      splitStr: {}
    };
    var value = v;
    data.data[key] = value; // data.type[key] = 'other';

    var dataIsString = typeof data.data[key] === 'string';
    data.unit[key] = dataIsString ? data.data[key].replace(/[^a-z|%]/g, '') : '';
    data.count[key] = dataIsString ? data.data[key].replace(/[^+|=|-]/g, '') : '';
    var d = dataIsString ? parseFloat(data.data[key].replace(/[a-z|%|=]/g, '')) : data.data[key];
    data.data[key] = !d && d !== 0 ? data.data[key] : d;
    return data;
  };

  this.setStartAtValue = function (start, startAt) {
    return (0,esm_typeof/* default */.Z)(startAt) === 'object' ? getStartAtValue(start, startAt) : start;
  };

  this.getAnimStart = function () {
    var target = _this.target,
        root = _this.root,
        targetIndex = _this.targetIndex,
        propsData = _this.propsData,
        s = _this.startAt,
        start = _this.start,
        tweenVars = _this.tweenVars;
    var startAt = {};

    for (var c in s) {
      //Object.keys(s).forEach(c => {
      startAt[(0,main/* getGsapType */.Lo)(c)] = s[c]; //});
    }

    _this.computedStyle = _this.computedStyle || getComputedStyle(target);
    tweenVars.style = tweenVars.style || {};
    var transform;
    var filter;

    for (var key in propsData.data) {
      var _startAt$key;

      var item = propsData.data[key];

      if (item.plugin) {
        var plugin = new item.plugin(item.value, key);
        plugin.target = target;
        plugin.root = root;
        plugin.parent = parent;
        plugin.index = _this.index;
        plugin.targetIndex = targetIndex;
        plugin.tweenVars = tweenVars;
        plugin.startAt = _this.startAt;
        plugin.computedStyle = _this.computedStyle;
        item.plugin = plugin;
        start[key] = plugin.getAnimStart();
        continue;
      }

      var cssName = (0,main/* isConvert */.dt)(key);
      var styleKey = cssName === 'transform' ? _this.transformName : cssName;
      styleKey = cssName === 'filter' ? _this.filterName : styleKey;
      var varsValue = tweenVars.style[styleKey];
      var styleValue = varsValue !== null && varsValue !== void 0 ? varsValue : _this.computedStyle[cssName];
      var startData = (_startAt$key = startAt[key]) !== null && _startAt$key !== void 0 ? _startAt$key : styleValue;
      var endUnit = propsData.unit[key];
      var startUnit = '';

      if (cssName === 'transform') {
        transform = transform || (startData === varsValue ? (0,objectSpread2/* default */.Z)({}, varsValue) : (0,main/* getTransform */.Ck)(_this.computedStyle[_this.transformName]));
        var startValue = transform[key];

        if (startAt && key in startAt) {
          var _ref, _startAt$key$vars;

          startValue = _this.setStartAtValue((_ref = (_startAt$key$vars = startAt[key].vars) !== null && _startAt$key$vars !== void 0 ? _startAt$key$vars : varsValue === null || varsValue === void 0 ? void 0 : varsValue[key]) !== null && _ref !== void 0 ? _ref : startValue, startAt[key]);
          startUnit = startAt[key].unit;

          if (key === 'scale') {
            transform.scaleX = startValue;
            transform.scaleY = startValue;
          } else {
            transform[key] = startValue;
          }
        }

        if (startUnit !== endUnit) {
          startValue = startConvertToEndUnit({
            target: target,
            computedStyle: _this.computedStyle,
            style: cssName,
            value: startValue,
            startUnit: startUnit,
            endUnit: endUnit
          });

          if (key === 'scale') {
            transform.scaleX = startValue;
            transform.scaleY = startValue;
          } else {
            transform[key] = startValue;
          }
        }

        start[_this.transformName] = transform;
      } else if (cssName === 'filter') {
        var fKey = main/* cssList */._T.filterConvert[key] || key;
        filter = filter || (startData === varsValue ? (0,objectSpread2/* default */.Z)({}, varsValue) : (0,main/* splitFilterToObject */.GX)(styleValue) || {});
        filter[fKey] = filter[fKey] || initFilterValue[fKey];
        var _startValue = filter[fKey];

        if (startAt && key in startAt) {
          var _startAt$key$vars2;

          _startValue = _this.setStartAtValue((_startAt$key$vars2 = startAt[key].vars) !== null && _startAt$key$vars2 !== void 0 ? _startAt$key$vars2 : _startValue, startAt[key]);
          startUnit = startAt[key].unit;
          filter[fKey] = _startValue;
        }

        if (endUnit !== startUnit) {
          var _this$computedStyle;

          filter[fKey] = startConvertToEndUnit({
            target: target,
            computedStyle: _this.computedStyle,
            style: cssName,
            value: _startValue,
            startUnit: startUnit,
            endUnit: endUnit,
            fixed: ((_this$computedStyle = _this.computedStyle) === null || _this$computedStyle === void 0 ? void 0 : _this$computedStyle.position) === 'fixed'
          });
        }

        start[_this.filterName] = filter;
      } else {
        var _startAt$key2;

        startData = (_startAt$key2 = startAt[key]) !== null && _startAt$key2 !== void 0 ? _startAt$key2 : styleValue;

        if (!startData || startData === 'none' || startData === 'auto') {
          startData = '';
        } // 计算单位


        endUnit = propsData.unit[cssName];
        startUnit = (0,esm_typeof/* default */.Z)(startData) === 'object' ? startData.unit : "".concat(startData).replace(/[^a-z|%]/g, '');
        startData = _this.setStartAtValue(styleValue, startAt[key]);

        if (endUnit !== startUnit) {
          var _this$computedStyle2;

          startData = startConvertToEndUnit({
            target: target,
            computedStyle: _this.computedStyle,
            style: cssName,
            value: parseFloat(startData),
            startUnit: startUnit,
            endUnit: endUnit,
            fixed: ((_this$computedStyle2 = _this.computedStyle) === null || _this$computedStyle2 === void 0 ? void 0 : _this$computedStyle2.position) === 'fixed'
          });
        }

        var v = parseFloat(startData);
        start[cssName] = isNaN(v) ? getDefaultStart(cssName) : v;
      }
    }

    return start;
  };

  this.render = function (ratio) {
    var propsData = _this.propsData,
        start = _this.start,
        t = _this.tweenVars;
    var tweenVars = t.style || {};

    if (start[_this.transformName] && !tweenVars[_this.transformName]) {
      tweenVars[_this.transformName] = (0,objectSpread2/* default */.Z)({}, start[_this.transformName]);
    }

    if (start[_this.filterName] && !tweenVars[_this.filterName]) {
      tweenVars[_this.filterName] = (0,objectSpread2/* default */.Z)({}, start[_this.filterName]);
    }

    var transform = tweenVars[_this.transformName];
    var filter = tweenVars[_this.filterName];
    var data = propsData.data,
        dataUnit = propsData.unit,
        dataCount = propsData.count,
        isTransform = propsData.isTransform;

    for (var key in data) {
      //Object.keys(data).forEach((key: string) => {
      var endValue = data[key];

      if (endValue.plugin) {
        tweenVars[key] = endValue.plugin.render(ratio);
        continue;
      }

      var isT = isTransform[key];
      var startValue = isT ? start[_this.transformName][key] : start[key];
      var unit = dataUnit[key];
      var count = dataCount[key];

      if (isT) {
        if (key === 'scale') {
          var xStart = start[_this.transformName].scaleX;
          var yStart = start[_this.transformName].scaleY;

          if (count.charAt(1) === '=') {
            transform.scaleX = xStart + endValue * ratio;
            transform.scaleY = yStart + endValue * ratio;
          } else {
            transform.scaleX = (endValue - xStart) * ratio + xStart;
            transform.scaleY = (endValue - yStart) * ratio + yStart;
          }
        } else {
          transform[key] = getValue(parseFloat(startValue), endValue, ratio, count, unit);
        }

        transform.text = getTransformValue(tweenVars[_this.transformName]);
      } else if (main/* cssList */._T.filter.indexOf(key) >= 0) {
        var fKey = main/* cssList */._T.filterConvert[key] || key;
        startValue = parseFloat(start[_this.filterName][fKey]) || 0;
        filter[fKey] = getValue(startValue, endValue, ratio, count, unit);
        filter.text = ''; //Object.keys(filter).forEach(filterKey => {

        for (var filterKey in filter) {
          if (filterKey === 'text') {
            continue;
          }

          filter.text = "".concat(filter.text, " ").concat(filterKey, "(").concat(filter[filterKey], ")").trim();
        } //});

      } else {
        var styleUnit = (0,main/* stylesToCss */.YJ)(key, 0);
        styleUnit = typeof styleUnit === 'number' ? 0 : styleUnit.replace(/[^a-z|%]/g, '');
        unit = unit || styleUnit;

        if (typeof endValue === 'string') {
          tweenVars[key] = endValue;
        } else {
          tweenVars[key] = getValue(startValue, endValue, ratio, count, unit);
        }
      }
    }

    return tweenVars;
  };

  this.props = _props;
  this.transformName = (0,main/* checkStyleName */.Yf)('transform');
  this.filterName = (0,main/* checkStyleName */.Yf)('filter') || 'filter';
  this.setDefaultData();
});

style.key = 'style';
style.className = 'style';
/* harmony default export */ var StylePlugin = (style);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper = __webpack_require__(29388);
;// CONCATENATED MODULE: ./node_modules/tween-one/es/plugins/PluginMixins.js



var PluginMixins = /*#__PURE__*/(0,createClass/* default */.Z)( // 转换成实际属性，__self 为平辅到子节点
function PluginMixins(value, key) {
  (0,classCallCheck/* default */.Z)(this, PluginMixins);

  this.value = void 0;
  this.key = void 0;
  this.root = void 0;
  this.index = void 0;
  this.style = {};
  this.start = {};
  this.startAt = {};
  this.target = void 0;
  this.value = value;
  this.key = key;
});

PluginMixins.className = void 0;
PluginMixins.key = void 0;

;// CONCATENATED MODULE: ./node_modules/tween-one/es/plugins/ArrayPlugin.js










var ArrayPlugin = /*#__PURE__*/function (_PluginMixins) {
  (0,inherits/* default */.Z)(ArrayPlugin, _PluginMixins);

  var _super = (0,createSuper/* default */.Z)(ArrayPlugin);

  function ArrayPlugin(_value, _key) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, ArrayPlugin);

    _this = _super.call(this, _value, _key);
    _this.value = void 0;
    _this.key = void 0;
    _this.start = [];
    _this.tweenVars = {};
    _this.vars = {};
    _this.computedStyle = void 0;
    _this.propsData = {
      data: [],
      unit: [],
      count: []
    };

    _this.setDefaultData = function (type, splitStr) {
      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
          propsData = _assertThisInitialize.propsData,
          value = _assertThisInitialize.value;

      var v = (0,toConsumableArray/* default */.Z)(value);

      if (type === 'color') {
        var _v$;

        v[3] = (_v$ = v[3]) !== null && _v$ !== void 0 ? _v$ : 1;
      }

      propsData.type = type;
      propsData.data = v.map(function (c) {
        return !parseFloat(c) && parseFloat(c) !== 0 ? c : parseFloat(c);
      });
      propsData.unit = v.map(function (c) {
        return c.toString().replace(/[^a-z|%]/g, '');
      });
      propsData.count = v.map(function (c) {
        return c.toString().replace(/[^+|=|-]/g, '');
      });

      if (splitStr) {
        propsData.splitStr = splitStr;
      }
    };

    _this.convertToMarksArray = function (unit, key, data, i) {
      var startUnit = (data || '').toString().replace(/[^a-z|%]/g, '');
      var endUnit = typeof i === 'number' ? unit[i] : undefined;

      if (startUnit === endUnit) {
        return parseFloat(data);
      } else if (!parseFloat(data) && parseFloat(data) !== 0) {
        return data;
      }

      return startConvertToEndUnit({
        target: _this.target,
        computedStyle: _this.computedStyle,
        style: key,
        value: data,
        startUnit: startUnit,
        endUnit: endUnit,
        isOriginWidth: key === 'transformOrigin' && !i
      });
    };

    _this.getAnimStart = function () {
      var _ref, _ref2, _startAt$key, _tweenVars$style;

      var _assertThisInitialize2 = (0,assertThisInitialized/* default */.Z)(_this),
          startAt = _assertThisInitialize2.startAt,
          target = _assertThisInitialize2.target,
          key = _assertThisInitialize2.key,
          propsData = _assertThisInitialize2.propsData,
          computedStyle = _assertThisInitialize2.computedStyle,
          tweenVars = _assertThisInitialize2.tweenVars;

      var startValue = (_ref = (_ref2 = (_startAt$key = startAt === null || startAt === void 0 ? void 0 : startAt[key]) !== null && _startAt$key !== void 0 ? _startAt$key : computedStyle ? (_tweenVars$style = tweenVars.style) === null || _tweenVars$style === void 0 ? void 0 : _tweenVars$style[key] : tweenVars[key]) !== null && _ref2 !== void 0 ? _ref2 : (computedStyle || target)[key]) !== null && _ref !== void 0 ? _ref : '';
      var inset = propsData.data.indexOf('inset');
      var oldShadow;

      if (inset !== -1 && !startValue.match('inset') && propsData.type === 'shadow') {
        oldShadow = startValue;
        startValue = '';
      }

      if (!startValue || startValue === 'none' || startValue === 'auto') {
        startValue = '';
      }

      startValue = propsData.type === 'shadow' ? (0,main/* parseShadow */.hy)(startValue, key) : startValue;
      startValue = propsData.type === 'color' ? (0,main/* parseColor */.lu)(startValue) : startValue;
      startValue = propsData.type === 'string' ? startValue.split(/[\s|,]/) : startValue;

      if (styleValueToArray[key]) {
        var _startValue$, _startValue$2, _ref3, _startValue$3;

        startValue[1] = (_startValue$ = startValue[1]) !== null && _startValue$ !== void 0 ? _startValue$ : startValue[0];
        startValue[2] = (_startValue$2 = startValue[2]) !== null && _startValue$2 !== void 0 ? _startValue$2 : startValue[0];
        startValue[3] = (_ref3 = (_startValue$3 = startValue[3]) !== null && _startValue$3 !== void 0 ? _startValue$3 : startValue[1]) !== null && _ref3 !== void 0 ? _ref3 : startValue[0];
      }

      var endUnit = propsData.unit;
      var startData = startValue.map(function (c, i) {
        if (parseFloat(c).toString() === 'NaN') {
          return c;
        }

        return _this.convertToMarksArray(endUnit, key, c, i);
      });
      _this.start = startData.concat(inset >= 0 ? 'inset' : []);
      _this.start.oldShadow = oldShadow;
      return _this.start;
    };

    _this.render = function (ratio) {
      var _assertThisInitialize3 = (0,assertThisInitialized/* default */.Z)(_this),
          start = _assertThisInitialize3.start,
          propsData = _assertThisInitialize3.propsData;

      var type = propsData.type,
          splitStr = propsData.splitStr,
          data = propsData.data,
          count = propsData.count,
          unit = propsData.unit;
      var ratioData = data.map(function (c, i) {
        return typeof c === 'string' ? c : getValue(start[i], c, ratio, count[i], unit[i]);
      });

      switch (type) {
        case 'string':
          ratioData = ratioData.join(splitStr);
          break;

        case 'color':
          ratioData = (0,main/* getColor */.Lq)(ratioData);
          break;

        case 'shadow':
          {
            var endInset = ratioData.indexOf('inset') >= 0;
            var r = endInset ? ratioData.filter(function (c) {
              return c !== 'inset';
            }) : ratioData;
            var s = r.slice(0, r.length - 4).map(function (a) {
              if (typeof a === 'number') {
                return "".concat(a, "px");
              }

              return a;
            });
            var c = (0,main/* getColor */.Lq)(r.slice(r.length - 4, r.length));
            ratioData = "".concat(start.oldShadow ? "".concat(start.oldShadow, ",") : '').concat(s.join(' '), " ").concat(c, " ").concat(endInset ? 'inset' : '').trim();
            break;
          }

        default:
          break;
      }

      return ratioData;
    };

    _this.value = _value;
    _this.key = _key;
    var _type = '';
    var _splitStr = '';

    if (typeof _value === 'string') {
      if (_key.match(shadowExp)) {
        _this.value = (0,main/* parseShadow */.hy)(_value, _key);
        _type = 'shadow';
      } else if (_key.match(/color|fill|stroke/i) || _value.match(colorRegExp)) {
        _this.value = (0,main/* parseColor */.lu)(_value);
        _type = 'color';
      } else {
        _splitStr = _value.replace(/[^\s|,]/g, '').replace(/\s+/g, ' ');
        _this.value = _value.split(/[\s|,]/);
        _type = 'string';
      }
    }

    _this.setDefaultData(_type, _splitStr);

    return _this;
  }

  return (0,createClass/* default */.Z)(ArrayPlugin);
}(PluginMixins);

ArrayPlugin.className = 'ArrayPlugin';
/* harmony default export */ var plugins_ArrayPlugin = (ArrayPlugin);
;// CONCATENATED MODULE: ./node_modules/tween-one/es/plugins/GradientsPlugin.js










var angleData = {
  linear: {
    'to top': '0deg',
    'to top right': '45deg',
    'to right top': '45deg',
    'to right': '90deg',
    'to right bottom': '135deg',
    'to bottom right': '135deg',
    'to bottom': '180deg',
    'to bottom left': '225deg',
    'to left bottom': '225deg',
    'to left': '270deg',
    'to left top': '315deg',
    'to top left': '315deg'
  },
  radial: {
    center: '50% 50%',
    top: '50% 0%',
    'top right': '100% 0%',
    'right top': '100% 0%',
    right: '100% 50%',
    'right bottom': '100% 100%',
    'bottom right': '100% 100%',
    bottom: '50% 100%',
    'bottom left': '0% 100%',
    'left bottom': '0% 100%',
    left: '0% 50%',
    'left top': '0% 0%',
    'top left': '0% 0%'
  }
};
var extentKeyWord = ['closest-side', 'closest-corner', 'farthest-side', 'farthest-corner'];

var consoleWarn = function consoleWarn(key, start, to) {
  console.warn("Warning: The gradient ".concat(key, "(").concat(start, " => ").concat(to, ") is different, which has been automatically converted to animation gradient ").concat(key, "(").concat(to, ")."));
}; // background-image functions: https://developer.mozilla.org/en-US/docs/Web/CSS/background-image


var noGradient = function noGradient(type) {
  return type === 'url' || type.indexOf('image') >= 0 || type === 'paint' || type === 'cross-fade' || type === 'element';
};

var GradientsPlugin = /*#__PURE__*/function (_PluginMixins) {
  (0,inherits/* default */.Z)(GradientsPlugin, _PluginMixins);

  var _super = (0,createSuper/* default */.Z)(GradientsPlugin);

  function GradientsPlugin(_value) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, GradientsPlugin);

    _this = _super.call(this, _value, 'backgroundImage');
    _this.value = void 0;
    _this.tweenVars = {};
    _this.vars = [];
    _this.computedStyle = void 0;
    _this.defaultStartVars = [];

    _this.getPosition = function (data) {
      return data.map(function (t) {
        return {
          data: parseFloat(t),
          unit: t.replace(/[^a-z|%]/g, '')
        };
      });
    };

    _this.getAngle = function (type, $angle) {
      var t = type.replace(/-|gradient|repeating]/g, '');
      var extent;
      var shape;
      var angle;
      var position;

      switch (t) {
        case 'linear':
          {
            angle = _this.getPosition((angleData.linear[$angle] || $angle || angleData.linear['to bottom']).split(' '));
            break;
          }

        case 'radial':
          {
            var angleSplit = $angle.split(' ');
            extent = angleSplit.find(function (s) {
              return extentKeyWord.indexOf(s) >= 0;
            }) || extentKeyWord[3];
            shape = angleSplit.find(function (s) {
              return s === 'circle' || s === 'ellipse';
            }) || 'ellipse';
            var req = new RegExp("".concat(extent, "|").concat(shape, "|at"), 'g');
            var p = $angle.replace(req, '').trim();
            position = _this.getPosition((angleData.radial[p] || p || angleData.radial.center).split(' '));
            break;
          }

        case 'conic':
          {
            var _angleSplit = $angle.split('at').map(function (c) {
              return c.trim();
            });

            var n = (_angleSplit[0] || '').split(' ');
            shape = n[0] || 'from';
            angle = _this.getPosition([n[1] || '0deg']);
            position = _this.getPosition((angleData.radial[_angleSplit[1]] || _angleSplit[1] || angleData.radial.center).split(' '));
            break;
          }

        default:
          break;
      }

      return {
        extent: extent,
        shape: shape,
        angle: angle,
        position: position
      };
    };

    _this.valueToIValue = function (value) {
      if (!value) {
        return [];
      }

      var v = value.replace(/\),\s+?(url|radial|conic|linear|repeating|image|element|cross|paint)/, ')#,#$1').split('#,#'); //.match(/[a-z|-]+\(([\s\S]*?)\)/gi) || [];

      return v.map(function (str) {
        var type = str.replace(/([a-z|-]+)\((.*)\)/, '$1').trim();

        if (type === 'url') {
          return {
            type: type,
            values: str
          };
        }

        var data = str.replace(/([a-z|-]+)\((.*)\)/, '$2').replace(/#([0-9a-f]{6}|[0-9a-f]{3})|(rgb[a]?|hsl)+\(\d+\,[\s+]?\d+[\%]?\,[\s+]?\d+[\%]?(\,\d+)?\)/gi, function (e) {
          return e.replace(/\s+/g, '');
        }).replace(/\,([a-z|#|\s+])/g, '#,#$1').split('#,#').map(function (str) {
          return str.trim();
        });
        var a = data[0].match(colorRegExp) ? '' : data[0];

        if (a) {
          data.splice(0, 1);
        }

        var angle = _this.getAngle(type, a);

        var values = data.map(function (s) {
          var colorAndPos = s.trim().split(/\s+/);
          var color;
          var t = colorAndPos[0].match(colorRegExp) ? colorAndPos[0] : colorAndPos[0];

          if (t) {
            colorAndPos.splice(0, 1);
            color = (0,main/* parseColor */.lu)(t);
          }

          return {
            color: color,
            positions: colorAndPos.map(function (s) {
              return {
                data: parseFloat(s),
                unit: s.toString().replace(/[^a-z|%]/g, '')
              };
            })
          };
        });
        return {
          type: type,
          angle: angle,
          values: values
        };
      });
    };

    _this.getAnimStart = function () {
      var _tweenVars$key;

      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
          s = _assertThisInitialize.startAt,
          key = _assertThisInitialize.key,
          computedStyle = _assertThisInitialize.computedStyle,
          target = _assertThisInitialize.target,
          vars = _assertThisInitialize.vars,
          tweenVars = _assertThisInitialize.tweenVars;

      var startAt = (0,objectSpread2/* default */.Z)({}, s);

      var v = (_tweenVars$key = tweenVars[key]) !== null && _tweenVars$key !== void 0 ? _tweenVars$key : (computedStyle || target)[key];

      if (!v || v === 'none' || v === 'auto') {
        v = '';
      }

      startAt[key] = startAt[key] || v;
      startAt[key] = startAt[key] ? _this.valueToIValue(startAt[key]) : _this.defaultStartVars;
      var maxVarsLength = Math.max(vars.length, startAt[key].length);
      var startData = (maxVarsLength === startAt[key].length ? startAt[key] : vars).map(function (_, i) {
        var _item$angle, _start$angle;

        var start = startAt[key][i] || _this.defaultStartVars[i];
        var item = vars[i] || start;

        if (!start || start.type !== item.type) {
          if (start.type !== item.type) {
            consoleWarn('type', start.type, item.type);
          }

          start = _this.defaultStartVars[i];
        }

        if (noGradient(item.type) || typeof item.values === 'string' || typeof start.values === 'string') {
          return (0,objectSpread2/* default */.Z)({}, item);
        }

        if (((_item$angle = item.angle) === null || _item$angle === void 0 ? void 0 : _item$angle.extent) !== ((_start$angle = start.angle) === null || _start$angle === void 0 ? void 0 : _start$angle.extent)) {
          var _start$angle2, _item$angle2;

          consoleWarn('extent keyword', (_start$angle2 = start.angle) === null || _start$angle2 === void 0 ? void 0 : _start$angle2.extent, (_item$angle2 = item.angle) === null || _item$angle2 === void 0 ? void 0 : _item$angle2.extent);
        }

        var maxLength = Math.max(start.values.length, item.values.length);
        var values = maxLength === start.values.length ? start.values : item.values;
        start.values = values.map(function (_, j) {
          var sValue = start.values[j];
          var aItem = item.values[j] || sValue;
          return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, sValue), {}, {
            positions: (aItem || sValue).positions.map(function ($bItem, jj) {
              var sPos = sValue ? sValue.positions[jj] || sValue.positions[sValue.positions.length - 1] : aItem.positions[aItem.positions.length - 1];
              var bItem = $bItem || sPos;

              if (!sPos && sValue && start.values.length) {
                sPos = {
                  data: 100 / (start.values.length - 1) * j,
                  unit: '%'
                };
              }

              if (bItem.unit !== sPos.unit) {
                consoleWarn('units', sPos.unit, bItem.unit);
              }

              return {
                data: sPos.data,
                unit: bItem.unit
              };
            })
          });
        });
        return start;
      });
      _this.start = startData;
      return _this.start;
    };

    _this.render = function (ratio) {
      var value = '';
      var maxVarsLength = Math.max(_this.vars.length, _this.start.length);
      (maxVarsLength === _this.vars.length ? _this.vars : _this.start).forEach(function (_, i) {
        var start = _this.start[i];
        var item = _this.vars[i] || start;

        if (noGradient(item.type) || typeof item.values === 'string' || !item.angle) {
          value += "".concat(value ? ',' : '', " ").concat(item.values).trim();
          return;
        }

        var maxLength = Math.max(start.values.length, item.values.length);
        var values = (maxLength === start.values.length ? start.values : item.values).map(function (_, i) {
          var startItem = start.values[i];
          var cItem = item.values[i];

          if (!cItem) {
            cItem = startItem;
          }

          var startColor = startItem.color;
          var startPos = startItem.positions;

          if (!startColor && cItem.color) {
            startColor = (0,toConsumableArray/* default */.Z)(cItem.color); // startColor[3] = 0;
          }

          if (!startPos) {
            startPos = cItem.positions.map(function (c) {
              return (0,objectSpread2/* default */.Z)({}, c);
            });
          }

          var color = cItem.color ? cItem.color.map(function (n, j) {
            return getValue(startColor[j], n, ratio);
          }) : cItem.color;
          var positions = cItem.positions.map(function (n, j) {
            return "".concat(getValue(startPos[j].data, n.data, ratio)).concat(n.unit);
          }).join(' ');
          return "".concat(color ? (0,main/* getColor */.Lq)(color) : color || '', " ").concat(positions).trim();
        });
        var angle = item.angle;
        var angleAngle = angle.angle && angle.angle.map(function (n, j) {
          return "".concat(getValue(start.angle.angle[j].data, n.data, ratio)).concat(n.unit);
        }).join(' ');
        var anglePosition = angle.position && angle.position.map(function (n, j) {
          return "".concat(getValue(start.angle.position[j].data, n.data, ratio)).concat(n.unit);
        }).join(' ');
        var newAngle = "".concat(angle.extent || '', " ").concat(angle.shape || '', " ").concat(angleAngle || '', " ").concat(anglePosition ? "at ".concat(anglePosition) : '').trim();
        value += "".concat(value ? ',' : '', " ").concat(item.type, "(").concat(newAngle ? "".concat(newAngle, ",") : '').concat(values.join(','), ")").trim();
      });
      return value;
    };

    _this.value = _value;
    _this.vars = _this.valueToIValue(_value);
    _this.defaultStartVars = _this.vars.map(function (item) {
      if (noGradient(item.type) || typeof item.values === 'string') {
        return (0,objectSpread2/* default */.Z)({}, item);
      }

      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
        values: item.values.map(function (c) {
          var color;

          if (c.color && typeof c.color !== 'string') {
            color = (0,toConsumableArray/* default */.Z)(c.color);
            color[3] = 0;
          } else {
            color = c.color;
          }

          return {
            color: color,
            positions: (0,toConsumableArray/* default */.Z)(c.positions)
          };
        })
      });
    });
    return _this;
  }

  return (0,createClass/* default */.Z)(GradientsPlugin);
}(PluginMixins);

GradientsPlugin.className = 'GradientsPlugin';

;// CONCATENATED MODULE: ./node_modules/tween-one/es/animate/timeline.js




var Timeline = /*#__PURE__*/function () {
  function Timeline() {
    var _this = this;

    (0,classCallCheck/* default */.Z)(this, Timeline);

    this.children = [];
    this.autoSleep = 200;
    this.tickerKey = void 0;
    this.startTime = void 0;

    this.addChild = function (animate) {
      if (_this.children.indexOf(animate) === -1) {
        // this.children = this.children.filter(c => c !== animate);
        _this.children.push(animate);

        _this.updateTickerState();
      } else {
        _this.start();
      }
    };

    this.removeChild = function (animate) {
      _this.children = _this.children.filter(function (c) {
        return c !== animate;
      });

      _this.updateTickerState();
    };

    this.kill = function (targets) {
      _this.children = _this.children.filter(function (c) {
        var currentTargets = c.root.targets;
        var newTargets = currentTargets.map(function (d, i) {
          if (targets.indexOf(d) === -1) {
            return d;
          } // c.root.vars = c.root.vars.filter((_: any, j: number) => j !== i);


          delete d._tweenOneVars;
          return;
        });
        c.root.targets = newTargets;
        var v = !!newTargets.filter(function (a) {
          return a;
        }).length;

        if (!v) {
          c.kill();
        }

        return v;
      });

      _this.updateTickerState();
    };

    this.killAll = function (clearChild) {
      if (clearChild) {
        _this.children.forEach(function (c) {
          c === null || c === void 0 ? void 0 : c.root.targets.forEach(function (d) {
            if (!d) {
              return;
            }

            delete d._tweenOneVars;
          });
        });

        _this.children = [];
      }

      animate_ticker.clear(_this.tickerKey);
      _this.tickerKey = undefined;
    };

    this.getTotalTime = function () {
      var totalTime = 0;

      for (var i = 0; i < _this.children.length; i++) {
        var item = _this.children[i];
        var itemTime = item.pausedState ? 0 : item.startTime + item.totalTime;

        if (!totalTime) {
          totalTime = itemTime;
        } else {
          totalTime = Math.max(itemTime, totalTime);
        }
      }

      return totalTime;
    };

    this.updateTickerState = function () {
      /**
       * 暂停状态和播放完成状态不记入, 杀掉 ticker;
       */
      if (!_this.children.length || !_this.children.some(function (c) {
        return !(c === null || c === void 0 ? void 0 : c.pausedState) && (!(c === null || c === void 0 ? void 0 : c.reverseState) && c.progressTime < c.totalTime || (c === null || c === void 0 ? void 0 : c.reverseState) && c.progressTime > 0);
      })) {
        _this.killAll(!_this.children.length);
      } else {
        _this.start();
      }
    };

    this.start = function () {
      if (!_this.tickerKey) {
        _this.tickerKey = animate_ticker.add(_this.render);
      }
    };

    this.render = function (_ref) {
      var time = _ref.time,
          _ref$elapsed = _ref.elapsed,
          elapsed = _ref$elapsed === void 0 ? 0 : _ref$elapsed;
      // this.children.forEach(animate => {
      var children = _this.children;
      var length = children.length;

      for (var i = 0; i < length; i++) {
        var animate = children[i];

        if (!animate) {
          continue;
        }

        var startTime = animate.startTime - elapsed;
        var totalTime = animate.startTime + animate.totalTime + elapsed;

        if (time > startTime && time < totalTime && !animate.pausedState) {
          animate.render({
            time: time,
            elapsed: elapsed
          });
        }
      } // });

    };
  }

  (0,createClass/* default */.Z)(Timeline, [{
    key: "totalTime",
    get: function get() {
      return this.getTotalTime();
    }
  }]);

  return Timeline;
}();

/* harmony default export */ var timeline = (Timeline);
// EXTERNAL MODULE: ./node_modules/tween-functions/index.js
var tween_functions = __webpack_require__(41000);
var tween_functions_default = /*#__PURE__*/__webpack_require__.n(tween_functions);
;// CONCATENATED MODULE: ./node_modules/tween-one/es/animate/ease.js



(tween_functions_default()).path = function (_path, _param) {
  var param = _param || {};

  if (windowIsUndefined) {
    return 'linear';
  }

  var pathNode = parsePath(_path);
  var pathLength = pathNode.getTotalLength();
  var rect = param.rect || 100; // path 的大小，100 * 100，

  var lengthPixel = param.lengthPixel || 200; // 线上取点像素，默认分为 200 段。。

  var points = [];

  for (var i = 0; i < lengthPixel - 1; i++) {
    points.push(pathNode.getPointAtLength(pathLength / (lengthPixel - 1) * i));
  }

  points.push(pathNode.getPointAtLength(lengthPixel));
  return function path(t, b, _c, d) {
    var p = tween_functions_default().linear(t, b, _c, d);
    var timePointX = rect * p; // X 轴的百分比;
    // 取出 x 轴百分比上的点;

    var point = points.filter(function (item) {
      return item.x >= timePointX;
    })[0] || pathNode.getPointAtLength(p * pathLength);
    return 1 - point.y / rect;
  };
};

/* harmony default export */ var ease = ((tween_functions_default()));
;// CONCATENATED MODULE: ./node_modules/tween-one/es/animate/animateElement.js





/**
 * Animate
 * 动画处理器
 * 滤境管理
 *
 * Animate 时间组成
 * [1.---delay---][1.---duration---][1.---repeatDelay---][2.---duration---]
 * repeatDelay 跟在时间后面；
 * 总时间 totalTime: delay + duration * (repeat + 1) + repeatDelay * repeat;
 *
 * 回调事件处理
 * repeat = 0:
 * [---delay---][---onStart(0)---][---onUpdate(duration)---][---onComplete(totalTime)---]
 * repeat = 2:
 * 1.[---delay---][---onStart(0)---][---onUpdate(duration)---][---repeatDelay---]
 * 2.[---onRepeat(0)---][---onUpdate(duration)---][---repeatDelay---]
 * 3.[---onRepeat(0)---][---onUpdate( duration)---][---onComplete(totalTime)---]
 *
 */




var animateElement_Element = /*#__PURE__*/function () {
  function Element(_item) {
    var _this = this;

    (0,classCallCheck/* default */.Z)(this, Element);

    this.item = void 0;
    this.vars = {};
    this.start = void 0;
    this.parent = void 0;
    this.root = void 0;
    this.startAt = {};
    this.mode = void 0;
    this.appearTo = 0;
    this.props = {};
    this.index = void 0;
    this.register = void 0;
    this.reverseStart = void 0;
    this.repeatNum = 0;
    this.prevMoment = void 0;
    this.easing = void 0;

    this.changeValueToVars = function (k, value, skipPlugin) {
      var isArray = (Array.isArray(value) || k.match(/color|fill|stroke|.*shadow/i) && typeof value === 'string' || typeof value === 'string' && value.split(/[\s|,]/).length > 1) && !(k in plugins);

      if (k in plugins || isArray) {
        if (skipPlugin) {
          return value;
        }

        return {
          value: value,
          plugins: [],
          array: isArray
        };
      }

      var vars = parseFloat(value.toString().replace(/=/g, ''));
      var unit = value.toString().replace(/[^a-z|%]/g, ''); // +=, -= 匹配

      var count = value.toString().charAt(1) === '=' ? value.toString().replace(/[^\+\=|\-\=]/gi, '') : ''; // const startUnit = (this.startAt[k] && this.startAt[k].unit) || '';
      // console.log(unit, startUnit);

      /* if (
        unit !== startUnit &&
        this.startAt[k] &&
        this.startAt[k].vars !== getDefaultStart(k)
      ) {
        console.warn(
          `Warning: animation vars(${value}) units(${unit ||
            'px'}) are not equal to startAt(${startUnit || 'px'}).`,
        );
      } */

      return {
        vars: vars,
        unit: unit,
        count: count
      };
    };

    this.setEase = function (e) {
      if (typeof e === 'function') {
        _this.easing = e;
        return;
      } else if (e.match(/,/g)) {
        _this.easing = ease.path(e);
        return;
      }

      _this.easing = ease[e];
    };

    this.getTotalTime = function () {
      var _this$props = _this.props,
          _this$props$duration = _this$props.duration,
          duration = _this$props$duration === void 0 ? 450 : _this$props$duration,
          _this$props$delay = _this$props.delay,
          delay = _this$props$delay === void 0 ? 0 : _this$props$delay,
          _this$props$repeat = _this$props.repeat,
          repeat = _this$props$repeat === void 0 ? 0 : _this$props$repeat,
          _this$props$repeatDel = _this$props.repeatDelay,
          repeatDelay = _this$props$repeatDel === void 0 ? 0 : _this$props$repeatDel;
      return repeat === -1 ? Number.MAX_VALUE : delay + duration * (repeat + 1) + repeatDelay * repeat;
    };

    this.getEaseToRatio = function (r, isFrom) {
      var _this$props$ease = _this.props.ease,
          ease = _this$props$ease === void 0 ? '' : _this$props$ease;
      return (r === 0 || r === 1) && !(typeof ease === 'function' || ease.match(/,/g)) ? r : _this.easing(isFrom ? 1 - r : r, isFrom ? 1 : 0, isFrom ? 0 : 1, 1);
    };

    this.setRatioToVars = function (ratio) {
      var vars = _this.vars,
          root = _this.root;

      for (var i = 0; i < root.targets.length; i++) {
        if (!root.targets[i]) {
          continue;
        } // root.targets.forEach((_, i) => {


        for (var key in vars) {
          // Object.keys(vars).forEach((key: string) => {
          var item = vars[key];

          if (item.plugins) {
            if (key === 'PathMotion') {
              // pathMotion 的属性与 style 通用。不需新增；
              root.vars[i].style = item.plugins[i].render(ratio);
            } else {
              root.vars[i][key] = item.plugins[i].render(ratio);
            }

            continue;
          }

          var endVars = item.vars,
              count = item.count,
              unit = item.unit;
          var startVars = _this.start[i][key];
          root.vars[i][key] = getValue(startVars, endVars, ratio, count, unit); //});
        } //});

      }
    };

    this.onRegisterAnimate = function () {
      _this.register = true;
      var root = _this.root,
          parent = _this.parent,
          startAt = _this.startAt;
      var start = [];

      for (var i = 0; i < root.targets.length; i++) {
        var target = root.targets[i];
        var vars = root.vars[i];
        var s = {};

        for (var key in _this.vars) {
          var cItem = _this.vars[key];

          if (cItem.plugins) {
            var plugin = new plugins[cItem.array ? 'ArrayPlugin' : key](cItem.value, key);
            plugin.target = target;
            plugin.root = root;
            plugin.parent = parent;
            plugin.targetIndex = i;
            plugin.tweenVars = vars;
            plugin.index = _this.index;
            plugin.startAt = startAt;
            s[key] = plugin.getAnimStart();
            cItem.plugins.push(plugin);
          } else {
            var _ref, _startAt$key;

            var targetValue = (_ref = root.attr ? target.getAttribute(key) : vars[key] || target[key]) !== null && _ref !== void 0 ? _ref : getDefaultStart(key);
            var startData = (_startAt$key = startAt[key]) !== null && _startAt$key !== void 0 ? _startAt$key : targetValue; // root.vars[i][key] ??

            var isStartAt = (0,esm_typeof/* default */.Z)(startData) === 'object' && 'vars' in startData && 'count' in startData;
            var unit = isStartAt ? startData.unit : "".concat(startData).replace(/[^a-z|%]/g, '');
            var varsUnit = cItem.unit;

            if (unit && unit !== varsUnit) {
              console.warn("Different units, start unit ".concat(unit, ", to value unit ").concat(varsUnit, ", remove start unit."));
            }

            s[key] = isStartAt ? getStartAtValue(targetValue, startData) : parseFloat(startData);
          }
        }

        start.push(s);
      }

      _this.start = start;
    };

    this.overflowRatio = function (ratio) {
      var r = ratio < 0 ? 0 : ratio;
      var duration = _this.props.duration;
      r = r > duration ? duration : r;
      return r;
    };

    this.render = function (_ref2) {
      var moment = _ref2.moment,
          _ref2$fps = _ref2.fps,
          fps = _ref2$fps === void 0 ? 0 : _ref2$fps,
          silence = _ref2.silence,
          render = _ref2.render;
      var parent = _this.parent,
          root = _this.root,
          props = _this.props;
      var targets = flatArray(root.targets);
      var onChange = parent.onChange;
      var _props$repeat = props.repeat,
          repeat = _props$repeat === void 0 ? 0 : _props$repeat;
      var _props$type = props.type,
          type = _props$type === void 0 ? 'to' : _props$type,
          _props$duration = props.duration,
          duration = _props$duration === void 0 ? 450 : _props$duration,
          _props$delay = props.delay,
          delay = _props$delay === void 0 ? 0 : _props$delay,
          _props$repeatDelay = props.repeatDelay,
          repeatDelay = _props$repeatDelay === void 0 ? 0 : _props$repeatDelay,
          yoyo = props.yoyo;
      repeat = repeat === -1 ? Number.MAX_VALUE : repeat;
      var ratio = moment - delay; // const totalTime = duration + delay;

      var repeatNum = Math.floor(ratio / (duration + repeatDelay)) || 0;
      repeatNum = repeatNum > repeat ? repeat : repeatNum;
      repeatNum = repeatNum < 0 ? 0 : repeatNum;
      ratio = ratio - (duration + repeatDelay) * repeatNum;
      /**
       * 反向播放 isFrom 与 yoyoReverse 的区别
       * 反向播放: isFrom
       * [---delay---][---isFrom duration---]
       * yoyo
       * [---duration---][---delay---]
       * backwards
       * 两个都为 true 时为 false;
       */

      var yoyoReverse = !!(yoyo && repeatNum % 2);
      var isFrom = type === 'from';
      var backwards = yoyoReverse && isFrom ? false : yoyoReverse || isFrom;
      ratio = backwards ? duration - ratio : ratio;
      var fromDelay = isFrom ? 0 : delay;
      var r = backwards ? 1 : 0; // 0 进入时的注册

      if (!_this.register && moment >= fromDelay) {
        _this.onRegisterAnimate(); // 时间超出当前动画时间的处理


        if (backwards && ratio <= 0 || !backwards && ratio >= duration && duration) {
          // this.mode = 'onComplete';
          _this.prevMoment = moment;
          r = backwards ? 0 : 1;
        }

        _this.setRatioToVars(r); // 初始注册，改变外部 vars;


        onChange({
          index: _this.index,
          vars: root.vars
        });
      }

      if (_this.register && moment > delay - fps && moment < _this.totalTime + fps) {
        ratio = _this.overflowRatio(ratio);
        r = backwards ? 1 : 0;

        if (moment >= _this.totalTime && _this.mode !== 'onComplete' && _this.prevMoment !== undefined || _this.prevMoment === undefined && moment >= _this.totalTime && duration) {
          r = backwards ? 0 : 1;
          _this.mode = 'onComplete';

          if (_this.props.onComplete) {
            _this.props.onComplete({
              mode: _this.mode,
              index: _this.index,
              moment: ratio,
              ratio: r,
              targets: targets,
              vars: flatArray(root.vars)
            });
          }
        } else if (_this.prevMoment === undefined || moment <= 0 && moment > -fps && _this.mode !== 'onStart' && _this.prevMoment > moment) {
          _this.mode = 'onStart';

          if (_this.props.onStart) {
            _this.props.onStart({
              mode: _this.mode,
              index: _this.index,
              moment: ratio,
              ratio: r,
              targets: targets,
              vars: flatArray(root.vars)
            });
          }
        } else {
          r = ratio && duration ? ratio / duration : 0;
          _this.mode = 'onUpdate';

          if (_this.props.onUpdate) {
            _this.props.onUpdate({
              mode: _this.mode,
              index: _this.index,
              moment: ratio,
              ratio: r,
              targets: targets,
              vars: flatArray(root.vars)
            });
          }
        }

        if (repeat && repeatNum !== _this.repeatNum && moment && _this.mode === 'onUpdate') {
          _this.mode = 'onRepeat';

          if (_this.props.onRepeat) {
            _this.props.onRepeat({
              mode: _this.mode,
              index: _this.index,
              moment: ratio,
              ratio: r,
              targets: targets,
              vars: flatArray(_this.root.vars)
            });
          }
        }

        _this.setRatioToVars(_this.getEaseToRatio(r, isFrom));

        if (repeat) {
          _this.repeatNum = repeatNum;
        }

        var cb = {
          mode: _this.mode,
          moment: ratio,
          repeat: repeatNum,
          ratio: r,
          targets: root.targets,
          vars: root.vars,
          index: _this.index
        };

        if (silence) {
          cb.silence = silence;
        }

        if (render) {
          cb.render = render;
        }

        onChange(cb);
        _this.prevMoment = moment;
      }
    };

    this.item = _item; // delete item.appearTo;

    this.startAt = (0,objectSpread2/* default */.Z)({}, _item.startAt);
    Object.keys(this.startAt).forEach(function (c) {
      _this.startAt[c] = _this.changeValueToVars(c, _this.startAt[c], true);
    }); // delete item.startAt;

    var _props = {};

    for (var k in _item) {
      var value = _item[k];

      if (!(k in initAnimProps)) {
        this.vars[k] = this.changeValueToVars(k, value);
      } else {
        _props[k] = value;
      }
    }

    this.props = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, initAnimProps), _props);
    this.setEase(this.props.ease);
  }

  (0,createClass/* default */.Z)(Element, [{
    key: "totalTime",
    get: // parentBackwards?: boolean;
    function get() {
      return this.getTotalTime();
    }
  }]);

  return Element;
}();


;// CONCATENATED MODULE: ./node_modules/tween-one/es/animate/animate.js






var AnimateGroup = /*#__PURE__*/(0,createClass/* default */.Z)(function AnimateGroup(_props) {
  var _this = this;

  (0,classCallCheck/* default */.Z)(this, AnimateGroup);

  this.props = void 0;
  this.id = void 0;
  this.children = [];
  this.totalTime = 0;
  this.totalTimeRegion = 0;
  this.childTotalTime = 0;
  this.childRegionTotalTime = 0;
  this.prevMoment = void 0;
  this.progressTime = 0;
  this.progressMoment = -1;
  this.startMoment = 0;
  this.startTime = 0;
  this.repeatNum = 0;
  this.mode = 'onTimelineStart';
  this.pausedState = void 0;
  this.reverseState = void 0;
  this.root = void 0;
  this.parent = void 0;
  this.regionStartTime = 0;
  this.regionEndTime = void 0;
  this.onChangeChild = void 0;
  this.onChangeTimeline = void 0;

  this.init = function () {
    var _this$props = _this.props,
        reverse = _this$props.reverse,
        animation = _this$props.animation,
        moment = _this$props.moment;
    var animateArray = dataToArray(animation);

    for (var i = 0; i < animateArray.length; i++) {
      var item = animateArray[i];

      if (item.type === 'set') {
        item.duration = 0;
      } //animateArray.forEach((item: any, i: number) => {


      var animate = new animateElement_Element(item);
      animate.index = i;
      var pos = i ? getAnimatePos(item, animateArray[i - 1]) : 0;
      item.appearTo = pos;
      animate.appearTo = pos;

      _this.addChild(animate); //});

    } // 注册


    _this.render({
      time: (reverse ? _this.totalTime : 0) + _this.startTime,
      elapsed: 16.67
    });

    if (!_this.totalTime) {
      _this.render({
        time: (reverse ? _this.totalTime : 0) + _this.startTime,
        elapsed: 16.67
      });
    }

    if (moment) {
      _this.goto(moment);
    } else {
      _this.play();
    }
  };

  this.addChild = function (animate) {
    animate.parent = _this;
    animate.root = _this.root;

    if (_this.children.indexOf(animate) === -1) {
      _this.children.push(animate);

      _this.setTotalTime();
    }
  };

  this.setTotalTime = function () {
    _this.childTotalTime = 0;
    _this.childRegionTotalTime = 0;

    for (var i = 0; i < _this.children.length; i++) {
      var item = _this.children[i];

      if (item.appearTo !== _this.childTotalTime) {
        var itemTime = item.appearTo + item.totalTime;

        if (itemTime > _this.childTotalTime) {
          _this.childTotalTime = itemTime;
          _this.childRegionTotalTime = itemTime;
        }
      } else {
        _this.childTotalTime += item.totalTime;
        _this.childRegionTotalTime += item.totalTime;
      }
    }

    if (_this.regionStartTime) {
      _this.childRegionTotalTime -= _this.regionStartTime;
    }

    if (_this.regionEndTime) {
      _this.childRegionTotalTime = _this.regionEndTime - _this.regionStartTime;
    }

    var _this$props2 = _this.props,
        _this$props2$repeat = _this$props2.repeat,
        repeat = _this$props2$repeat === void 0 ? 0 : _this$props2$repeat,
        _this$props2$repeatDe = _this$props2.repeatDelay,
        repeatDelay = _this$props2$repeatDe === void 0 ? 0 : _this$props2$repeatDe,
        delay = _this$props2.delay;
    _this.totalTime = repeat === -1 ? Number.MAX_VALUE : delay + _this.childTotalTime * (repeat + 1) + repeatDelay * repeat;
    _this.totalTimeRegion = repeat === -1 ? Number.MAX_VALUE : delay + _this.childRegionTotalTime * (repeat + 1) + repeatDelay * repeat;
  };

  this.setStartTimeOrMoment = function (start) {
    _this.startTime = animate_ticker.time;
    _this.startMoment = start || _this.progressMoment;
  };

  this.reRenderCall = function () {
    _this.render({
      time: _this.startTime,
      elapsed: animate_ticker.elapsed || animate_ticker.frameFPS
    });
  };

  this.play = function (v) {
    if (!v) {
      var _this$parent;

      (_this$parent = _this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.addChild(_this);
    } else {
      var _this$parent2;

      (_this$parent2 = _this.parent) === null || _this$parent2 === void 0 ? void 0 : _this$parent2.updateTickerState();
    }
  };

  this.paused = function () {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _this.pausedState = v;

    _this.setStartTimeOrMoment();

    _this.play(v);
  };

  this.reverse = function (v) {
    _this.reverseState = v;

    _this.setStartTimeOrMoment();

    _this.play(_this.pausedState);
  };

  this.goto = function ($moment, paused) {
    var moment = $moment - _this.regionStartTime;
    _this.startTime = animate_ticker.time;
    _this.startMoment = moment > _this.totalTime ? _this.totalTime : moment;
    _this.progressMoment = _this.startMoment;
    _this.progressTime = moment;

    _this.play(_this.pausedState);

    _this.reRenderCall();

    if (!!paused !== _this.pausedState) {
      _this.paused(paused);
    }
  };

  this.kill = function (index) {
    if (typeof index === 'number') {
      _this.paused();

      delete _this.children[index];

      _this.setTotalTime();

      _this.paused(false);
    } else {
      var _this$parent3;

      _this.children = [];
      (_this$parent3 = _this.parent) === null || _this$parent3 === void 0 ? void 0 : _this$parent3.removeChild(_this);
    }
  };

  this.onChange = function (e) {
    e.timelineMoment = _this.progressMoment;

    _this.onChangeChild(e);
  };

  this.render = function (_ref) {
    var time = _ref.time,
        elapsed = _ref.elapsed;
    var fps = elapsed || animate_ticker.frameFPS || 0;
    var totalTime = _this.totalTime,
        totalTimeRegion = _this.totalTimeRegion,
        childTotalTime = _this.childTotalTime,
        childRegionTotalTime = _this.childRegionTotalTime,
        children = _this.children,
        props = _this.props,
        startTime = _this.startTime,
        reverseState = _this.reverseState,
        pausedState = _this.pausedState,
        startMoment = _this.startMoment,
        onChangeTimeline = _this.onChangeTimeline,
        parent = _this.parent,
        root = _this.root,
        prevMoment = _this.prevMoment,
        regionStartTime = _this.regionStartTime;
    var _props$repeatDelay = props.repeatDelay,
        repeatDelay = _props$repeatDelay === void 0 ? 0 : _props$repeatDelay,
        yoyo = props.yoyo,
        delay = props.delay;
    var _props$repeat = props.repeat,
        repeat = _props$repeat === void 0 ? 0 : _props$repeat;
    repeat = repeat === -1 ? Number.MAX_VALUE : repeat;
    var t = time - startTime - delay;
    var m = reverseState ? startMoment - t : t + startMoment;

    if (m < -fps) {
      return;
    }

    var moment = m < 0 ? 0 : m;
    moment = moment > totalTime ? totalTime : moment;
    moment = startMoment < regionStartTime ? m : moment;
    moment = startMoment > totalTimeRegion ? startMoment : moment;
    var repeatNum = repeat ? Math.floor(moment / (childRegionTotalTime + repeatDelay)) : 0;
    repeatNum = repeat && repeatNum > repeat ? repeat : repeatNum;
    var tweenMoment = moment - (childRegionTotalTime + repeatDelay) * repeatNum;
    var yoyoReverse = !!(yoyo && repeatNum % 2);
    tweenMoment = yoyoReverse ? childRegionTotalTime - tweenMoment : tweenMoment;
    tweenMoment = regionStartTime + tweenMoment;
    var reverse = reverseState ? !yoyoReverse : yoyoReverse;
    _this.mode = 'onTimelineUpdate';

    if (typeof prevMoment !== 'number') {
      _this.mode = 'onTimelineStart';
    }

    if (moment >= totalTimeRegion - delay && typeof prevMoment === 'number') {
      _this.mode = 'onTimelineComplete';
    }

    if (repeatNum !== _this.repeatNum) {
      _this.mode = 'onTimelineRepeat'; // 补帧状态;

      if (moment > childTotalTime * repeatNum && moment < childTotalTime * repeatNum + fps) {
        for (var i = reverse ? 0 : children.length - 1; reverse ? i <= children.length - 1 : i >= 0; reverse ? i++ : i--) {
          var item = children[i]; // console.log('时间轴补帧状态', i);
          // console.log('reverse', reverse);

          if (!reverse) {
            item.prevMoment = undefined;
          }

          item.render({
            moment: reverse ? item.totalTime : 0,
            fps: fps
          });
        }

        onChangeTimeline({
          moment: moment,
          totalTime: totalTime,
          repeat: repeatNum,
          mode: _this.mode,
          targets: root.targets
        });
        _this.mode = 'onTimelineUpdate';
      }
    }

    if (repeat) {
      _this.repeatNum = repeatNum;
    }

    _this.progressMoment = moment;
    _this.prevMoment = moment;
    _this.progressTime = t; // children.forEach(item => {

    for (var _i = 0; _i < children.length; _i++) {
      var _item = children[_i];
      /* if (!item) {
        return;
      } */

      var duration = _item.totalTime + _item.appearTo;
      var tweenTime = tweenMoment >= _item.appearTo - fps && tweenMoment < duration + fps; // 过帧补

      if (_item.mode !== 'onComplete' && tweenMoment > duration + fps && !yoyoReverse && _item.totalTime || typeof _item.mode === 'undefined' && !_item.totalTime // 时间为 0 时的过补条件
      ) {
        // console.log('结束', i, item.totalTime, repeatNum, yoyoReverse);
        _item.render({
          moment: _item.totalTime,
          fps: fps
        });

        _item.prevMoment = undefined;
      }

      if (tweenMoment < _item.appearTo - fps && _item.mode && _item.mode !== 'onStart'
      /* && item.totalTime ||
      (typeof item.mode === 'undefined' && !item.totalTime) */
      ) {
        // console.log('重置', i, item.appearTo, tweenMoment, item.prevMoment, item.mode);
        _item.render({
          moment: _item.appearTo,
          fps: fps,
          silence: true
        });

        _item.prevMoment = undefined;
        _item.mode = undefined;
      }

      if (tweenTime) {
        var _t = tweenMoment < 0 ? 0 : tweenMoment;

        if (tweenMoment > duration && _item.mode === 'onComplete' && !yoyoReverse) {
          return;
        }

        _t = tweenMoment > duration ? duration : tweenMoment; // item.parentBackwards = reverse;

        _item.render({
          moment: _t - _item.appearTo,
          fps: fps
        });

        if (!duration) {
          // console.log('set 状态补帧', i);
          _item.render({
            moment: _item.totalTime,
            fps: fps,
            render: true
          });

          _item.prevMoment = undefined;
        }
      }
    } // });


    onChangeTimeline({
      moment: moment,
      totalTime: totalTime,
      repeat: repeatNum,
      mode: _this.mode,
      targets: root.targets
    });

    if (pausedState || totalTimeRegion && m + delay >= totalTimeRegion && !reverseState || reverseState && m + delay <= 0 || !children.length) {
      parent === null || parent === void 0 ? void 0 : parent.removeChild(_this);
    }
  };

  this.props = _props;
  var _this$props3 = this.props,
      _paused = _this$props3.paused,
      _reverse = _this$props3.reverse;
  this.reverseState = _reverse;
  this.pausedState = _paused;
  this.regionStartTime = _props.regionStartTime || 0;
  this.regionEndTime = _props.regionEndTime;
});


;// CONCATENATED MODULE: ./node_modules/tween-one/es/TweenOne.js













plugins.push(plugins_ArrayPlugin);
plugins.push(GradientsPlugin);
plugins.push(StylePlugin);
var tweenId = 0;
var globalTimeline = new timeline();

var Tween = /*#__PURE__*/function () {
  function Tween(targets, _props) {
    var _this = this;

    (0,classCallCheck/* default */.Z)(this, Tween);

    this.targets = void 0;
    this.props = void 0;
    this.timeline = void 0;
    this.animate = void 0;
    this.$reverse = false;
    this.vars = [];
    this.initTime = void 0;
    this.attr = void 0;

    this.init = /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(vars) {
        var props;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                props = getInitProps(vars);

                if (_this.targets[0].tagName && !_this.attr) {
                  props.animation = dataToArray(props.animation).map(function (item) {
                    var c = {
                      style: {}
                    };

                    for (var k in item) {
                      //Object.keys(item).forEach(k => {
                      if (k in plugins || k in initAnimProps) {
                        c[k] = item[k];
                      } else {
                        c.style[k] = item[k];
                      } //});

                    }

                    if (!Object.keys(c.style).length) {
                      delete c.style;
                    } // 时间去掉小数点;


                    if (item.duration) {
                      item.duration = Math.round(item.duration);
                    }

                    if (item.delay) {
                      item.delay = Math.round(item.delay);
                    }

                    if (item.appearTo) {
                      item.appearTo = Math.round(item.appearTo);
                    }

                    if (item.repeatDelay) {
                      item.repeatDelay = Math.round(item.repeatDelay);
                    }

                    return c;
                  });
                }

                _this.animate = new AnimateGroup(props);
                _this.animate.id = "TweenOne_".concat(tweenId);
                tweenId++;
                _this.animate.startTime = _this.initTime;
                _this.animate.onChangeChild = _this.onChange;
                _this.animate.onChangeTimeline = _this.onChangeTimeline;
                _this.animate.root = _this;
                _this.animate.parent = _this.timeline;

                _this.animate.init();

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.renderToDom = function () {
      // vars.forEach((item, i) => {
      for (var i = 0; i < _this.vars.length; i++) {
        var item = _this.vars[i]; // Object.keys(item).forEach((key: string) => {

        for (var key in item) {
          var value = item[key];
          var target = _this.targets[i];

          if (!target) {
            continue;
          }

          if (_this.props.attr && target.tagName && target.setAttribute) {
            if (key === 'style') {
              // Object.keys(value).forEach(key => {
              for (var ck in value) {
                target.style[ck] = value[key];
              } // });

            }

            target.setAttribute(key, value);
          } else if (key in plugins) {
            var $key = plugins[key].key;

            if (typeof target[$key] === 'function') {
              target[$key](value.attr, value.path);
            } else if ((0,esm_typeof/* default */.Z)(value) === 'object' && (0,esm_typeof/* default */.Z)(target[$key]) === 'object' && $key) {
              //Object.keys(value).forEach(ck => {
              for (var _ck in value) {
                var va = value[_ck];

                if ($key === '__self') {
                  target[_ck] = va;
                } else {
                  target[$key][_ck] = (0,esm_typeof/* default */.Z)(va) === 'object' && va.text || va;
                }
              } //});

            } else {
              target[$key || key] = value;
            }
          } else {
            target[key] = value;
          } // });

        }
      } //});

    };

    this.onChange = function (e) {
      if (e.mode === 'onComplete' && e.render) {
        _this.renderToDom();
      }

      if (e.mode && _this.props.onChange && !e.silence) {
        e.targets = flatArray(e.targets);
        e.vars = flatArray(e.vars);

        _this.props.onChange(e);
      }
    };

    this.onChangeTimeline = function (e) {
      _this.renderToDom(); // 时间轴结束后清除元素上的缓存


      if (e.mode === 'onTimelineComplete') {
        var _e$targets;

        (_e$targets = e.targets) === null || _e$targets === void 0 ? void 0 : _e$targets.forEach(function (item) {
          delete item._tweenOneVars;
        });
      }

      if (e.mode && _this.props.onChangeTimeline) {
        e.targets = flatArray(e.targets);
        e.vars = flatArray(_this.vars);

        _this.props.onChangeTimeline(e);
      }
    };

    this.goto = function (moment, paused) {
      _this.targets.forEach(function (item) {
        if (!item) {
          return;
        } // item._tweenOneVars = {};


        Object.keys(item._tweenOneVars || {}).forEach(function (key) {
          delete item._tweenOneVars[key];
        });
      });

      _this.animate.goto(moment, paused);
    };

    this.kill = function (index) {
      _this.animate.kill(index);
    };

    this.targets = targets;
    this.props = _props;
    this.timeline = globalTimeline;
    this.initTime = animate_ticker.time;
    this.attr = _props.attr;
    targets.forEach(function (item) {
      _this.vars.push(item._tweenOneVars);
    });
    this.init(_props);
  }

  (0,createClass/* default */.Z)(Tween, [{
    key: "paused",
    get: function get() {
      return this.animate.pausedState;
    },
    set: function set(v) {
      this.animate.paused(v);
    }
  }, {
    key: "reverse",
    get: function get() {
      return this.$reverse;
    },
    set: function set(v) {
      this.$reverse = v;
      this.animate.reverse(v);
    }
  }, {
    key: "regionStartTime",
    get: function get() {
      return this.animate.regionStartTime;
    },
    set: function set(v) {
      this.animate.regionStartTime = v;
      this.animate.setTotalTime();
    }
  }, {
    key: "regionEndTime",
    get: function get() {
      return this.animate.regionEndTime || this.animate.totalTime;
    },
    set: function set(v) {
      this.animate.regionEndTime = v;
      this.animate.setTotalTime();
    }
  }]);

  return Tween;
}();

var TweenOne = function TweenOne(targets, vars) {
  if (!targets) {
    console.error("Error: targets is undefined.");
    return undefined;
  }

  if (animate_ticker.state !== 'wake') {
    // 先将 ticker 唤醒，避免同时添加时 initTime 出错；
    animate_ticker.wake();
  }

  var t = dataToArray(targets).map(function (item) {
    item._tweenOneVars = item._tweenOneVars || {};
    return item;
  }); // 分解 targets 里的元素类型

  var doms = t.filter(function (c) {
    return c.tagName;
  });
  var objs = t.filter(function (c) {
    return !c.tagName;
  });
  var tween = [];

  if (doms.length) {
    tween.push(new Tween(doms, vars));
  }

  if (objs.length) {
    tween.push(new Tween(objs, vars));
  }

  return flatArray(tween);
};

TweenOne.kill = function (targets) {
  if (typeof targets === 'undefined') {
    globalTimeline.killAll(true);
  } else {
    globalTimeline.kill(dataToArray(targets));
  }
};

TweenOne.plugins = plugins;
/* harmony default export */ var es_TweenOne = (TweenOne);

;// CONCATENATED MODULE: ./node_modules/tween-one/es/index.js













/* harmony default export */ var es = (es_TweenOne);
;// CONCATENATED MODULE: ./node_modules/rc-queue-anim/es/utils.js

var utils_windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
function toArrayChildren(children) {
  var ret = [];
  react.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}
function findChildInChildrenByKey(children, key) {
  var ret = null;

  if (children) {
    children.forEach(function (c) {
      if (ret || !c) {
        return;
      }

      if (c.key === key) {
        ret = c;
      }
    });
  }

  return ret;
}
function mergeChildren(prev, next) {
  var ret = []; // For each key of `next`, the list of keys to insert before that key in
  // the combined list

  var nextChildrenPending = {};
  var pendingChildren = [];
  var followChildrenKey;
  prev.forEach(function (c) {
    if (!c) {
      return;
    }

    if (findChildInChildrenByKey(next, c.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[c.key] = pendingChildren;
        pendingChildren = [];
      }

      followChildrenKey = c.key;
    } else if (c.key) {
      pendingChildren.push(c);
    }
  });

  if (!followChildrenKey) {
    ret = ret.concat(pendingChildren);
  }

  next.forEach(function (c) {
    if (!c) {
      return;
    }

    if (nextChildrenPending.hasOwnProperty(c.key)) {
      ret = ret.concat(nextChildrenPending[c.key]);
    }

    ret.push(c);

    if (c.key === followChildrenKey) {
      ret = ret.concat(pendingChildren);
    }
  });
  return ret;
}
function transformArguments(arg, key, i) {
  var result;

  if (typeof arg === 'function') {
    result = arg({
      key: key,
      index: i
    });
  } else {
    result = arg;
  }

  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }

    return [result[0], result[0]];
  }

  return [result, result];
}
;// CONCATENATED MODULE: ./node_modules/rc-queue-anim/es/animTypes.js
/* harmony default export */ var animTypes = ({
  left: {
    opacity: [1, 0],
    translateX: [0, -30]
  },
  top: {
    opacity: [1, 0],
    translateY: [0, -30]
  },
  right: {
    opacity: [1, 0],
    translateX: [0, 30]
  },
  bottom: {
    opacity: [1, 0],
    translateY: [0, 30]
  },
  alpha: {
    opacity: [1, 0]
  },
  scale: {
    opacity: [1, 0],
    scale: [1, 0]
  },
  scaleBig: {
    opacity: [1, 0],
    scale: [1, 2]
  },
  scaleX: {
    opacity: [1, 0],
    scaleX: [1, 0]
  },
  scaleY: {
    opacity: [1, 0],
    scaleY: [1, 0]
  }
});
;// CONCATENATED MODULE: ./node_modules/rc-queue-anim/es/QueueAnim.js




var _excluded = ["component", "componentProps", "interval", "duration", "delay", "type", "animConfig", "ease", "leaveReverse", "forcedReplay", "animatingClassName", "onEnd", "appear"];






var QueueAnim_noop = function noop() {};

/* harmony default export */ var QueueAnim = (/*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var _props$component = props.component,
      component = _props$component === void 0 ? 'div' : _props$component,
      _props$componentProps = props.componentProps,
      componentProps = _props$componentProps === void 0 ? {} : _props$componentProps,
      _props$interval = props.interval,
      interval = _props$interval === void 0 ? 100 : _props$interval,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 450 : _props$duration,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? 0 : _props$delay,
      _props$type = props.type,
      type = _props$type === void 0 ? 'right' : _props$type,
      _props$animConfig = props.animConfig,
      animConfig = _props$animConfig === void 0 ? null : _props$animConfig,
      _props$ease = props.ease,
      ease = _props$ease === void 0 ? 'easeOutQuart' : _props$ease,
      _props$leaveReverse = props.leaveReverse,
      leaveReverse = _props$leaveReverse === void 0 ? false : _props$leaveReverse,
      _props$forcedReplay = props.forcedReplay,
      forcedReplay = _props$forcedReplay === void 0 ? false : _props$forcedReplay,
      _props$animatingClass = props.animatingClassName,
      animatingClassName = _props$animatingClass === void 0 ? ['queue-anim-entering', 'queue-anim-leaving'] : _props$animatingClass,
      _props$onEnd = props.onEnd,
      onEnd = _props$onEnd === void 0 ? QueueAnim_noop : _props$onEnd,
      _props$appear = props.appear,
      appear = _props$appear === void 0 ? true : _props$appear,
      tagProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  /**
   * @param childrenShow;
   * 记录 animation 里是否需要 startAnim;
   * 当前元素是否处在显示状态
   * enterBegin 到 leaveComplete 之前都处于显示状态
   */


  var childrenShow = (0,react.useRef)({});
  /**
   * @param keysToEnter;
   * 记录进场的 key;
   */

  var keysToEnter = (0,react.useRef)([]);
  var recordKeysToEnter = (0,react.useRef)([]);
  /**
   * @param keysToLeave;
   * 记录出场的 key;
   */

  var keysToLeave = (0,react.useRef)([]);
  var recordKeysToLeave = (0,react.useRef)([]);
  /**
   * @param placeholderTimeoutIds;
   * 进场时 deley 的 timeout 记录;
   */

  var placeholderTimeoutIds = (0,react.useRef)({});
  /**
   * @param childRefs;
   * 储存 children 的 ref;
   */

  var childRefs = (0,react.useRef)({});
  /**
   * @param recordAnimKeys;
   * 记录启动动画 key
   */

  var recordAnimKeys = (0,react.useRef)({});
  /**
   * @param recordAnimKeys;
   * 记录启动动画 key
   */

  var recordTweenKeys = (0,react.useRef)({});
  /**
   * @param oneEnterBool
   * 记录第一次进入
   */

  var oneEnterBool = (0,react.useRef)(false);
  var originalChildren = (0,react.useRef)([]);

  var _useState = (0,react.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      child = _useState2[0],
      setChild = _useState2[1];

  var _useState3 = (0,react.useState)({}),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      childShow = _useState4[0],
      setChildShow = _useState4[1];

  var getTweenSingleConfig = function getTweenSingleConfig(data, num, enterOrLeave) {
    var obj = {};
    Object.keys(data).forEach(function (key) {
      if (Array.isArray(data[key])) {
        obj[key] = data[key][num];
      } else if (!enterOrLeave && !num || enterOrLeave && num) {
        obj[key] = data[key];
      }
    });
    return obj;
  };

  var getTweenAnimConfig = function getTweenAnimConfig(data, num, enterOrLeave) {
    if (Array.isArray(data)) {
      return data.map(function (item) {
        return getTweenSingleConfig(item, num, enterOrLeave);
      });
    }

    return getTweenSingleConfig(data, num, enterOrLeave);
  };

  var getTweenType = function getTweenType($type, num) {
    var data = animTypes[$type];
    return getTweenAnimConfig(data, num);
  };

  var getAnimData = function getAnimData(key, i, enterOrLeave, startOrEnd) {
    return (
      /**
       * transformArguments 第一个为 enter, 第二个为 leave；
       * getTweenAnimConfig or getTweenType 第一个为到达的位置， 第二个为开始的位置。
       * 用 tween-one 的数组来实现老的动画逻辑。。。
       */
      animConfig ? getTweenAnimConfig(transformArguments(animConfig, key, i)[enterOrLeave], startOrEnd, enterOrLeave) : getTweenType(transformArguments(type, key, i)[enterOrLeave], startOrEnd)
    );
  };

  var getTweenData = function getTweenData(key, i, $type) {
    var enterOrLeave = $type === 'enter' ? 0 : 1;
    var start = $type === 'enter' ? 1 : 0;
    var end = $type === 'enter' ? 0 : 1;
    var animate = getAnimData(key, i, enterOrLeave, end);
    var startAnim = $type === 'enter' && (forcedReplay || !childrenShow.current[key]) ? getAnimData(key, i, enterOrLeave, start) : null;
    var $ease = transformArguments(ease, key, i)[enterOrLeave];
    var $duration = transformArguments(duration, key, i)[enterOrLeave];

    if (Array.isArray(ease) && (ease.length > 2 || Array.isArray(ease[0]))) {
      $ease = $ease.map(function (num) {
        return num * 100;
      });
      $ease = "M0,100C".concat($ease[0], ",").concat(100 - $ease[1], ",").concat($ease[2], ",").concat(100 - $ease[3], ",100,0");
    }

    return {
      startAnim: startAnim,
      animate: animate,
      ease: $ease,
      duration: $duration
    };
  };

  var enterBegin = function enterBegin(key, e) {
    var elem = e.targets;
    elem.className = elem.className.replace(animatingClassName[1], '');

    if (elem.className.indexOf(animatingClassName[0]) === -1) {
      elem.className = "".concat(elem.className, " ").concat(animatingClassName[0]).trim();
    }

    if (keysToEnter.current.indexOf(key) >= 0) {
      keysToEnter.current.splice(keysToEnter.current.indexOf(key), 1);
    }

    childrenShow.current[key] = true;
  };

  var enterComplete = function enterComplete(key, e) {
    if (keysToLeave.current.indexOf(key) >= 0) {
      return;
    }

    var elem = e.targets;
    elem.className = elem.className.replace(animatingClassName[0], '').trim();
    delete recordTweenKeys.current[key];
    onEnd({
      key: key,
      type: 'enter',
      target: elem
    });
  };

  var leaveBegin = function leaveBegin(key, e) {
    var elem = e.targets;
    elem.className = elem.className.replace(animatingClassName[0], '');

    if (elem.className.indexOf(animatingClassName[1]) === -1) {
      elem.className = "".concat(elem.className, " ").concat(animatingClassName[1]).trim();
    }
  };

  var leaveComplete = function leaveComplete(key, e) {
    // 切换时同时触发 onComplete。 手动跳出。。。
    toArrayChildren(props.children).findIndex(function (c) {
      return c && c.key === key;
    });

    if (toArrayChildren(props.children).findIndex(function (c) {
      return c && c.key === key;
    }) >= 0) {
      return;
    }

    delete childrenShow.current[key];
    delete recordTweenKeys.current[key];
    originalChildren.current = originalChildren.current.filter(function (c) {
      return c.key !== key;
    }); // 这里不用启动动画，，直接删；

    if (keysToLeave.current.indexOf(key) >= 0) {
      keysToLeave.current.splice(keysToLeave.current.indexOf(key), 1);
    }

    var needLeave = keysToLeave.current.some(function (c) {
      return childShow[c];
    });

    if (!needLeave) {
      var currentChildren = toArrayChildren(props.children);
      setChild(currentChildren);
      setChildShow((0,objectSpread2/* default */.Z)({}, childrenShow.current));
      recordKeysToLeave.current.forEach(function (k) {
        delete recordAnimKeys.current[k];
      });
    }

    var elem = e.targets;
    elem.className = elem.className.replace(animatingClassName[1], '').trim();
    onEnd({
      key: key,
      type: 'leave',
      target: elem
    });
  };

  var performEnterBegin = function performEnterBegin(key) {
    childShow[key] = true;
    animate_ticker.clear(placeholderTimeoutIds.current[key]);
    delete placeholderTimeoutIds.current[key];
    setChildShow((0,objectSpread2/* default */.Z)({}, childShow));
  };

  var performEnter = function performEnter(key, i) {
    var $interval = transformArguments(interval, key, i)[0];
    var $delay = transformArguments(delay, key, i)[0];
    placeholderTimeoutIds.current[key] = animate_ticker.timeout(function () {
      performEnterBegin(key);
    }, $interval * i + $delay);
  };

  var performLeave = function performLeave(key) {
    animate_ticker.clear(placeholderTimeoutIds.current[key]);
    delete placeholderTimeoutIds.current[key];
  };

  var getTweenOneEnterOrLeave = function getTweenOneEnterOrLeave(key, i, $delay, $type) {
    var animateData = getTweenData(key, i, $type);

    var onStart = function onStart(e) {
      ($type === 'enter' ? enterBegin : leaveBegin)(key, e);
    };

    var onComplete = function onComplete(e) {
      ($type === 'enter' ? enterComplete : leaveComplete)(key, e);
    };

    if (Array.isArray(animateData.animate)) {
      var length = animateData.animate.length - 1;
      var animation = animateData.animate.map(function (item, ii) {
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
          startAt: animateData.startAnim ? animateData.startAnim[ii] : undefined,
          duration: animateData.duration / length,
          delay: !ii && $type === 'leave' ? $delay : 0,
          onStart: !ii ? onStart : undefined,
          onComplete: ii === length ? onComplete : undefined
        });
      });
      return animation;
    }

    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, animateData.animate), {}, {
      startAt: animateData.startAnim || undefined,
      ease: animateData.ease,
      duration: animateData.duration,
      onStart: onStart,
      onComplete: onComplete,
      delay: $delay
    });
  };

  (0,react.useEffect)(function () {
    return function () {
      Object.keys(recordTweenKeys.current).forEach(function (key) {
        var tween = recordTweenKeys.current[key];

        if (!tween) {
          return;
        }

        tween.kill();
      });
    };
  }, []);
  (0,react.useEffect)(function () {
    var nextChildren = toArrayChildren(props.children).filter(function (c) {
      return c;
    });
    var currentChildren = originalChildren.current.filter(function (item) {
      return item;
    });
    var newChildren = mergeChildren(currentChildren, nextChildren);
    var $keysToEnter = [];
    var $keysToLeave = [];

    if (!appear && !oneEnterBool.current) {
      var $childShow = {};
      newChildren.forEach(function (c) {
        if (!c || !c.key) {
          return;
        }

        $childShow[c.key] = true;
      });
      originalChildren.current = newChildren;
      childrenShow.current = (0,objectSpread2/* default */.Z)({}, $childShow);
      setChildShow($childShow);
    } else {
      // console.log(nextChildren, recordAnimKeys.current, keysToEnter.current, keysToLeave.current);
      currentChildren.forEach(function (c) {
        if (!c) {
          return;
        }

        var key = c.key;
        var hasNext = findChildInChildrenByKey(nextChildren, key);

        if (!hasNext && key) {
          $keysToLeave.push(key);
          animate_ticker.clear(placeholderTimeoutIds.current[key]);
          delete placeholderTimeoutIds.current[key];
        }
      });
      nextChildren.forEach(function (c) {
        if (!c) {
          return;
        }

        var key = c.key;
        var hasPrev = findChildInChildrenByKey(currentChildren, key); // 如果 nextChildren 和当前的一致，且动画里是出场，改回进场；

        if (!hasPrev && key || (!recordAnimKeys.current[key] || recordAnimKeys.current[key] === 'leave' || keysToEnter.current.indexOf(key) >= 0) && $keysToLeave.indexOf(key) === -1) {
          $keysToEnter.push(key);
        }
      });
    } // console.log('child update', $keysToEnter, $keysToLeave, newChildren);


    keysToEnter.current = $keysToEnter; // keysToEnter 在启动时就会删除；

    recordKeysToEnter.current = [].concat($keysToEnter);
    keysToLeave.current = $keysToLeave;
    recordKeysToLeave.current = [].concat($keysToLeave); // console.log($keysToEnter, $keysToLeave);

    setChild(newChildren);
  }, [props.children]);
  (0,react.useLayoutEffect)(function () {
    originalChildren.current = child || [];

    if (appear || oneEnterBool.current) {
      var $keysToEnter = (0,toConsumableArray/* default */.Z)(keysToEnter.current);

      var $keysToLeave = (0,toConsumableArray/* default */.Z)(keysToLeave.current);

      $keysToEnter.forEach(performEnter);
      $keysToLeave.forEach(performLeave);
    }

    if (child) {
      oneEnterBool.current = true;
    }
  }, [child]);
  (0,react.useLayoutEffect)(function () {
    if (child) {
      child.forEach(function (item) {
        var key = item.key;
        var dom = childRefs.current[key];

        if (!dom) {
          return;
        }

        var animation;
        var index = keysToLeave.current.indexOf(key); // children.findIndex(c => c.key === key);

        var $interval = transformArguments(interval, key, index);
        var $delay = transformArguments(delay, key, index); // 处理出场

        if (index >= 0) {
          if (recordAnimKeys.current[key] === 'leave') {
            return;
          }

          var order = leaveReverse ? keysToLeave.current.length - index - 1 : index;
          var d = $interval[1] * order + $delay[1];
          animation = getTweenOneEnterOrLeave(key, index, d, 'leave');
          recordAnimKeys.current[key] = 'leave';
        } else {
          if (recordAnimKeys.current[key] === 'enter' || keysToEnter.current.indexOf(key) === -1) {
            return;
          }

          index = recordKeysToEnter.current.indexOf(key);

          var _d = $interval[0] * index + $delay[0]; // console.log(recordAnimKeys.current[key], dom);


          animation = getTweenOneEnterOrLeave(key, index, recordAnimKeys.current[key] === 'leave' ? _d : 0, 'enter');
          recordAnimKeys.current[key] = 'enter';
        }

        if (recordTweenKeys.current[key]) {
          recordTweenKeys.current[key].kill();
        }

        if (forcedReplay) {
          var anim = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, Array.isArray(animation) ? animation[0].startAt : animation.startAt), {}, {
            type: 'set'
          });

          es(dom, {
            animation: anim
          });
        }

        recordTweenKeys.current[key] = es(dom, {
          animation: animation
        });
      });
    }
  }, [childShow, child]);
  return (0,react.useMemo)(function () {
    // console.log('--------render--------', childShow);
    if (utils_windowIsUndefined) {
      return /*#__PURE__*/(0,react.createElement)(component, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, tagProps), componentProps), {}, {
        ref: ref
      }));
    }

    var childrenToRender = toArrayChildren(child).map(function (item) {
      if (!item || !item.key) {
        return item;
      }

      return childShow[item.key] && /*#__PURE__*/(0,react.cloneElement)(item, {
        ref: function ref(c) {
          childRefs.current[item.key] = c instanceof Element ? c : (0,react_dom.findDOMNode)(c);

          if (!c) {
            delete childRefs.current[item.key];
          }
        },
        key: item.key
      });
    });

    var p = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, tagProps), componentProps), {}, {
      ref: ref
    });

    return /*#__PURE__*/(0,react.createElement)(component, p, childrenToRender);
  }, [childShow, child]);
}));
;// CONCATENATED MODULE: ./node_modules/rc-queue-anim/es/index.js
// export this package's api

/* harmony default export */ var rc_queue_anim_es = (QueueAnim);


/***/ }),

/***/ 79170:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  bk: function() { return /* binding */ OverPack; }
});

// UNUSED EXPORTS: Element, Event, Link, Parallax, default, scrollScreen

;// CONCATENATED MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}



// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(88239);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(42723);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(99663);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(49135);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__(22600);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(93196);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/es/util.js


var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);

function toArrayChildren(children) {
  var ret = [];
  react.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

function dataToArray(vars) {
  if (!vars && vars !== 0) {
    return [];
  }
  if (Array.isArray(vars)) {
    return vars;
  }
  return [vars];
}

function transformArguments(arg) {
  if (Array.isArray(arg)) {
    if (arg.length === 2) {
      return arg;
    }
    return [arg.join(), arg.join()];
  }
  return [arg, arg];
}

function objectEqual(obj1, obj2) {
  if (!obj1 || !obj2) {
    return false;
  }
  if (obj1 === obj2) {
    return true;
  }
  var equalBool = true;
  function forEachData(current, next) {
    Object.keys(current).forEach(function (p) {
      if (current[p] !== next[p]) {
        if (typeof current[p] === 'object' && typeof next[p] === 'object') {
          equalBool = objectEqual(current[p], next[p]);
        } else {
          equalBool = false;
        }
      }
    });
  }
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    for (var i = 0; i < obj1.length; i++) {
      var currentObj = obj1[i];
      var nextObj = obj2[i];
      forEachData(currentObj, nextObj);
    }
  }

  Object.keys(obj1).forEach(function (key) {
    if (!(key in obj2)) {
      equalBool = false;
      return;
    }

    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      equalBool = objectEqual(obj1[key], obj2[key]);
    } else if (typeof obj1[key] === 'function' && typeof obj2[key] === 'function') {
      if (obj1[key].name !== obj2[key].name) {
        equalBool = false;
      }
    } else if (obj1[key] !== obj2[key]) {
      equalBool = false;
    }
  });

  Object.keys(obj2).forEach(function (key) {
    if (!(key in obj1)) {
      equalBool = false;
      return;
    }
    if (typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
      equalBool = objectEqual(obj2[key], obj1[key]);
    } else if (typeof obj1[key] === 'function' && typeof obj2[key] === 'function') {
      if (obj1[key].name !== obj2[key].name) {
        equalBool = false;
      }
    } else if (obj2[key] !== obj1[key]) {
      equalBool = false;
    }
  });

  return equalBool;
}

function currentScrollTop() {
  return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
}

function windowHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

function noop() {}

var getPassive = function getPassive() {
  if (windowIsUndefined) {
    return false;
  }
  var passiveSupported = false;
  window.addEventListener('test', function () {}, Object.defineProperty({}, 'passive', {
    get: function get() {
      passiveSupported = true;
      return null;
    }
  }));
  return passiveSupported ? { passive: false } : false;
};
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/es/EventDispatcher.js


var scrollId = 'scroll-id';

function EventDispatcher(target) {
  this._listeners = {};
  this._eventTarget = target || {};
  this.recoverLists = [];
  this._listFun = {};
}
EventDispatcher.prototype = {
  addEventListener: function addEventListener(type, callback, target, options) {
    var types = type.split('.');
    var _type = types[0];
    var namespaces = types[1];
    if (target && !target.getAttribute(scrollId)) {
      target.setAttribute(scrollId, (Date.now() + Math.random()).toString(32).replace('.', ''));
    }
    var listName = '' + _type + (target ? '_' + target.getAttribute(scrollId) : '');
    var list = this._listeners[listName];
    var index = 0;
    var listener = void 0;
    var i = void 0;
    if (!list) {
      list = [];
      this._listeners[listName] = list;
    }
    i = list.length;
    while (--i > -1) {
      listener = list[i];
      if (listener.n === namespaces && listener.c === callback) {
        list.splice(i, 1);
      } else if (index === 0) {
        index = i + 1;
      }
    }
    var $target = target || this._eventTarget;
    list.splice(index, 0, { c: callback, n: namespaces, t: _type });
    if (!this._listFun[listName]) {
      this._listFun[listName] = this._listFun[listName] || this.dispatchEvent.bind(this, { type: _type, target: target });
      if ($target.addEventListener) {
        $target.addEventListener(_type, this._listFun[listName], options);
      } else if ($target.attachEvent) {
        $target.attachEvent('on' + _type, this._listFun[listName]);
      }
    }
  },
  removeEventListener: function removeEventListener(type, callback, target, force) {
    var types = type.split('.');
    var _type = types[0];
    var namespaces = types[1];
    var listName = '' + _type + (target ? '_' + target.getAttribute(scrollId) : '');
    var list = this._listeners[listName];
    var i = void 0;
    var _force = force;
    if (!namespaces) {
      _force = true;
    }
    if (list) {
      i = list.length;
      var $target = target || this._eventTarget;
      while (--i > -1) {
        if (list[i].c === callback && (_force || list[i].n === namespaces)) {
          list.splice(i, 1);
          if (!list.length) {
            var func = this._listFun[listName];
            delete this._listeners[listName];
            delete this._listFun[listName];
            if ($target.removeEventListener) {
              $target.removeEventListener(_type, func);
            } else if ($target.detachEvent) {
              $target.detachEvent('on' + _type, func);
            }
          }
          if (!_force) {
            return;
          }
        }
      }
    }
  },
  dispatchEvent: function dispatchEvent(_ref, e) {
    var type = _ref.type,
        target = _ref.target;

    var listName = '' + type + (target ? '_' + target.getAttribute(scrollId) : '');
    var list = this._listeners[listName];
    var i = void 0;
    var t = void 0;
    var listener = void 0;
    if (list) {
      i = list.length;
      t = this._eventTarget;
      while (--i > -1) {
        listener = list[i];
        if (listener) {
          var _e = e || { type: type, target: t };
          listener.c.call(t, _e);
        }
      }
    }
  },
  removeAllType: function removeAllType(type, target) {
    var _this = this;

    var types = type.split('.');
    var _type = types[0];
    var namespaces = types[1];
    var listName = '' + _type + (target ? '_' + target.getAttribute(scrollId) : '');
    var list = this._listeners[listName];
    this.recoverLists = this.recoverLists.concat(dataToArray(list).filter(function (item) {
      return item.n && item.n.match(namespaces);
    }));
    this.recoverLists.forEach(function (item) {
      _this.removeEventListener(item.t + '.' + item.n, item.c, target);
    });
  },
  reAllType: function reAllType(type, target) {
    var _this2 = this;

    var types = type.split('.');
    var _type = types[0];
    var namespaces = types[1];
    this.recoverLists = this.recoverLists.map(function (item) {
      if (item.t === _type && item.n.match(namespaces)) {
        _this2.addEventListener(item.t + '.' + item.n, item.c, target);
        return null;
      }
      return item;
    }).filter(function (item) {
      return item;
    });
  }
};
/* harmony default export */ var es_EventDispatcher = (new EventDispatcher(typeof window !== 'undefined' && typeof document !== 'undefined' && window));;
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/es/ScrollElement.js












var ScrollElement = function (_React$Component) {
  (0,inherits/* default */.Z)(ScrollElement, _React$Component);

  (0,createClass/* default */.Z)(ScrollElement, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, _ref) {
      var prevProps = _ref.prevProps,
          $self = _ref.$self;

      var nextState = {
        prevProps: props
      };
      if (prevProps && props !== prevProps) {
        $self.scrollEventListener();
      }
      return nextState; // eslint-disable-line
    }
  }]);

  function ScrollElement(props) {
    (0,classCallCheck/* default */.Z)(this, ScrollElement);

    var _this = (0,possibleConstructorReturn/* default */.Z)(this, (ScrollElement.__proto__ || Object.getPrototypeOf(ScrollElement)).call(this, props));

    _this.getParam = function (e) {
      _this.clientHeight = _this.target ? _this.target.clientHeight : windowHeight();
      var scrollTop = _this.target ? _this.target.scrollTop : currentScrollTop();
      var domRect = _this.dom.getBoundingClientRect();
      var targetTop = _this.target ? _this.target.getBoundingClientRect().top : 0;
      var offsetTop = domRect.top + scrollTop - targetTop;
      _this.elementShowHeight = scrollTop - offsetTop + _this.clientHeight;
      var playScale = transformArguments(_this.props.playScale);
      var playScaleEnterArray = /([\+\-]?[0-9#\.]+)(px|vh|%)?/.exec(String(playScale[0])); // eslint-disable-line
      if (!playScaleEnterArray[2]) {
        _this.playHeight = _this.clientHeight * parseFloat(playScale[0]);
      } else if (playScaleEnterArray[2] === 'px') {
        _this.playHeight = parseFloat(playScaleEnterArray[1]);
      } else {
        _this.playHeight = _this.clientHeight * parseFloat(playScaleEnterArray[1]) / 100;
      }
      var leaveHeight = domRect.height;
      var playScaleLeaveArray = /([\+\-]?[0-9#\.]+)(px|vh|%)?/.exec(String(playScale[1])); // eslint-disable-line
      if (!playScaleLeaveArray[2]) {
        _this.leavePlayHeight = leaveHeight * parseFloat(playScale[1]);
      } else if (playScaleLeaveArray[2] === 'px') {
        _this.leavePlayHeight = parseFloat(playScaleLeaveArray[1]);
      } else {
        _this.leavePlayHeight = leaveHeight * parseFloat(playScaleLeaveArray[1]) / 100;
      }
      var enter = _this.props.replay ? _this.elementShowHeight >= _this.playHeight && _this.elementShowHeight <= _this.clientHeight + _this.leavePlayHeight : _this.elementShowHeight >= _this.playHeight;
      var enterOrLeave = enter ? 'enter' : 'leave';
      var mode = _this.enter !== enter || typeof _this.enter !== 'boolean' ? enterOrLeave : null;
      if (mode) {
        _this.props.onChange({ mode: mode, id: _this.props.id });
      }
      _this.props.onScroll({
        domEvent: e,
        scrollTop: scrollTop,
        showHeight: _this.elementShowHeight,
        offsetTop: offsetTop,
        id: _this.props.id
      });
      _this.enter = enter;
    };

    _this.addScrollEvent = function () {
      es_EventDispatcher.addEventListener(_this.eventType, _this.scrollEventListener, _this.target);
      var scrollTop = currentScrollTop();
      if (!scrollTop) {
        _this.scrollEventListener();
      }
    };

    _this.scrollEventListener = function (e) {
      _this.getParam(e);
    };

    _this.state = {
      $self: _this
    };
    return _this;
  }

  (0,createClass/* default */.Z)(ScrollElement, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (windowIsUndefined) {
        return;
      }
      this.dom = react_dom.findDOMNode(this);
      var date = Date.now();
      this.target = this.props.targetId && document.getElementById(this.props.targetId);

      var length = es_EventDispatcher._listeners.scroll ? es_EventDispatcher._listeners.scroll.length : 0;
      this.eventType = 'scroll.scrollEvent' + date + length;
      this.addScrollEvent();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      es_EventDispatcher.removeEventListener(this.eventType, this.scrollEventListener, this.target);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          playScale = _props.playScale,
          location = _props.location,
          targetId = _props.targetId,
          onScroll = _props.onScroll,
          onChange = _props.onChange,
          replay = _props.replay,
          componentProps = _props.componentProps,
          props = (0,objectWithoutProperties/* default */.Z)(_props, ['component', 'playScale', 'location', 'targetId', 'onScroll', 'onChange', 'replay', 'componentProps']);

      return react.createElement(component, (0,helpers_extends/* default */.Z)({}, props, componentProps));
    }
  }]);

  return ScrollElement;
}(react.Component);

ScrollElement.propTypes = {
  component: (prop_types_default()).any,
  playScale: (prop_types_default()).any,
  id: (prop_types_default()).string,
  onChange: (prop_types_default()).func,
  onScroll: (prop_types_default()).func,
  location: (prop_types_default()).string,
  targetId: (prop_types_default()).string,
  replay: (prop_types_default()).bool,
  componentProps: (prop_types_default()).object
};
ScrollElement.defaultProps = {
  component: 'div',
  onChange: noop,
  onScroll: noop,
  playScale: 0.5,
  replay: false,
  componentProps: {}
};

ScrollElement.isScrollElement = true;
/* harmony default export */ var es_ScrollElement = (ScrollElement);
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/es/ScrollOverPack.js












var ScrollOverPack = function (_ScrollElement) {
  (0,inherits/* default */.Z)(ScrollOverPack, _ScrollElement);

  (0,createClass/* default */.Z)(ScrollOverPack, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, _ref) {
      var prevProps = _ref.prevProps;

      var nextState = {
        prevProps: props
      };
      if (prevProps && props !== prevProps) {
        nextState.children = toArrayChildren(props.children);
      }
      return nextState;
    }
  }]);

  function ScrollOverPack(props) {
    (0,classCallCheck/* default */.Z)(this, ScrollOverPack);

    var _this = (0,possibleConstructorReturn/* default */.Z)(this, (ScrollOverPack.__proto__ || Object.getPrototypeOf(ScrollOverPack)).call(this, props));

    _this.scrollEventListener = function (e) {
      _this.getParam(e);
      var show = _this.state.show;
      var _this$props = _this.props,
          always = _this$props.always,
          replay = _this$props.replay;

      var isTop = _this.elementShowHeight > _this.clientHeight + _this.leavePlayHeight;
      if (_this.enter || !replay && isTop) {
        if (!show) {
          _this.setState({
            show: true
          });
        }
        if (!always && _this.eventType) {
          es_EventDispatcher.removeEventListener(_this.eventType, _this.scrollEventListener, _this.target);
        }
      } else if (always) {
        var bottomLeave = _this.elementShowHeight < _this.playHeight;
        // 设置往上时的出场点...
        var topLeave = replay ? isTop : null;
        if (topLeave || bottomLeave) {
          if (show) {
            _this.setState({
              show: false
            });
          }
        }
      }
    };

    _this.children = toArrayChildren(props.children);
    _this.oneEnter = false;
    _this.enter = false;
    _this.state = {
      show: false,
      children: toArrayChildren(props.children)
    };
    return _this;
  }

  (0,createClass/* default */.Z)(ScrollOverPack, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps !== this.props) {
        var always = this.props.always;
        var show = this.state.show;

        var inListener = es_EventDispatcher._listeners.scroll && es_EventDispatcher._listeners.scroll.some(function (c) {
          return c.n === _this2.eventType.split('.')[1];
        });
        if (always && !inListener) {
          this.addScrollEvent();
        } else if (!always && !show) {
          this.scrollEventListener();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          playScale = _props.playScale,
          replay = _props.replay,
          component = _props.component,
          always = _props.always,
          scrollEvent = _props.scrollEvent,
          appear = _props.appear,
          location = _props.location,
          targetId = _props.targetId,
          onChange = _props.onChange,
          onScroll = _props.onScroll,
          componentProps = _props.componentProps,
          props = (0,objectWithoutProperties/* default */.Z)(_props, ['playScale', 'replay', 'component', 'always', 'scrollEvent', 'appear', 'location', 'targetId', 'onChange', 'onScroll', 'componentProps']);

      if (windowIsUndefined) {
        return (0,react.createElement)(component, (0,helpers_extends/* default */.Z)({}, props, componentProps), props.children);
      }
      var childToRender = void 0;
      if (!this.oneEnter) {
        var show = !appear;
        var children = toArrayChildren(props.children).map(function (item) {
          if (!item) {
            return null;
          }
          var key = item.key || (Date.now() + Math.random()).toString(16).replace('.', '');
          return item.type.isTweenOne ? react.cloneElement(item, (0,helpers_extends/* default */.Z)({}, item.props, { key: key, paused: !show })) : react.cloneElement(item, (0,helpers_extends/* default */.Z)({}, item.props, { key: key }), show && item.props.children);
        });
        childToRender = (0,react.createElement)(component, (0,helpers_extends/* default */.Z)({}, props, componentProps), children);
        this.oneEnter = true;
      } else {
        if (!this.state.show) {
          this.children = this.children.map(function (item) {
            if (!item) {
              return null;
            }
            var key = item.key || (Date.now() + Math.random()).toString(16).replace('.', '');
            // 判断 TweenOne;
            if (item.type.isTweenOne) {
              return react.cloneElement(item, { key: key, reverse: true });
            }
            return react.cloneElement(item, { key: key }, null);
          });
        } else {
          this.children = this.state.children;
        }
        childToRender = (0,react.createElement)(component, (0,helpers_extends/* default */.Z)({}, props, componentProps), this.children);
      }
      return childToRender;
    }
  }]);

  return ScrollOverPack;
}(es_ScrollElement);

ScrollOverPack.propTypes = {
  component: (prop_types_default()).any,
  playScale: (prop_types_default()).any,
  always: (prop_types_default()).bool,
  scrollEvent: (prop_types_default()).func,
  children: (prop_types_default()).any,
  className: (prop_types_default()).string,
  style: (prop_types_default()).any,
  replay: (prop_types_default()).bool,
  onChange: (prop_types_default()).func,
  onScroll: (prop_types_default()).func,
  appear: (prop_types_default()).bool,
  componentProps: (prop_types_default()).object
};
ScrollOverPack.defaultProps = {
  component: 'div',
  playScale: 0.5,
  always: true,
  scrollEvent: noop,
  replay: false,
  onChange: noop,
  onScroll: noop,
  appear: true,
  componentProps: {}
};

ScrollOverPack.isScrollOverPack = true;

/* harmony default export */ var es_ScrollOverPack = (ScrollOverPack);
// EXTERNAL MODULE: ./node_modules/tween-functions/index.js
var tween_functions = __webpack_require__(41000);
var tween_functions_default = /*#__PURE__*/__webpack_require__.n(tween_functions);
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/node_modules/rc-tween-one/es/util.js


var util_windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var transformOrFilter = {
  transform: 1,
  '-ms-transform': 1,
  '-moz-transform': 1,
  '-webkit-transform': 1,
  '-o-transform': 1,
  filter: 1,
  '-webkit-filter': 1
};

var styleValueToArray = {
  margin: 1,
  padding: 1,
  borderWidth: 1,
  borderRadius: 1
};

function util_toArrayChildren(children) {
  var ret = [];
  react.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

function util_dataToArray(vars) {
  if (!vars && vars !== 0) {
    return [];
  }
  if (Array.isArray(vars)) {
    return vars;
  }
  return [vars];
}

function deepEql(a, b) {
  if (!a || !b) {
    return false;
  }
  var $a = Object.keys(a);
  var $b = Object.keys(b);
  if ($a.length && $b.length && $a.length === $b.length) {
    return !$a.some(function (key) {
      var aa = a[key];
      var bb = b[key];
      if (Array.isArray(aa) && Array.isArray(bb)) {
        var aaa = aa.join();
        var bbb = bb.join();
        if (aaa === bbb && !aaa.match(/\[object object\]/ig)) {
          aa = aaa;
          bb = bbb;
        }
      }
      return aa !== bb;
    });
  }
  return false;
}

function util_objectEqual(obj1, obj2) {
  if (obj1 === obj2 || deepEql(obj1, obj2)) {
    return true;
  }
  if (!obj1 || !obj2 || Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  // animation 写在标签上的进行判断是否相等， 判断每个参数有没有 function;
  var equalBool = true;
  var setEqualBool = function setEqualBool($a, $b) {
    var objA = Object.keys($a).length > Object.keys($b).length ? $a : $b;
    var objB = Object.keys($a).length > Object.keys($b).length ? $b : $a;
    Object.keys(objA).forEach(function (key) {
      // 如果前面有参数匹配不相同则直接返回；
      if (!equalBool) {
        return;
      }
      if (!(key in objB)) {
        equalBool = false;
      }

      if (typeof objA[key] === 'object' && typeof objB[key] === 'object') {
        equalBool = util_objectEqual(objA[key], objB[key]);
      } else if (typeof objA[key] === 'function' && typeof objB[key] === 'function') {
        if (objA[key].toString().replace(/\s+/g, '') !== objB[key].toString().replace(/\s+/g, '')) {
          equalBool = false;
        }
      } else if (objA[key] !== objB[key]) {
        equalBool = false;
      }
    });
  };

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }
    obj1.forEach(function (item, i) {
      setEqualBool(item, obj2[i]);
    });
  } else {
    setEqualBool(obj1, obj2);
  }
  return equalBool;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (c) {
      if (ret || !c) {
        return;
      }
      if (c.key === key) {
        ret = c;
      }
    });
  }
  return ret;
}

function mergeChildren(prev, next) {
  var ret = [];
  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  var followChildrenKey = void 0;
  prev.forEach(function (c) {
    if (!c) {
      return;
    }
    if (findChildInChildrenByKey(next, c.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[c.key] = pendingChildren;
        pendingChildren = [];
      }
      followChildrenKey = c.key;
    } else if (c.key) {
      pendingChildren.push(c);
    }
  });
  if (!followChildrenKey) {
    ret = ret.concat(pendingChildren);
  }

  next.forEach(function (c) {
    if (!c) {
      return;
    }
    if (nextChildrenPending.hasOwnProperty(c.key)) {
      // eslint-disable-line no-prototype-builtins
      ret = ret.concat(nextChildrenPending[c.key]);
    }
    ret.push(c);
    if (c.key === followChildrenKey) {
      ret = ret.concat(pendingChildren);
    }
  });

  return ret;
}

function util_transformArguments(arg, key, i) {
  var result = void 0;
  if (typeof arg === 'function') {
    result = arg({
      key: key,
      index: i
    });
  } else {
    result = arg;
  }
  return result;
}

function getChildrenFromProps(props) {
  return props && props.children;
}

function startConvertToEndUnit(target, computedStyle, style, num, unit, dataUnit, fixed, isOriginWidth) {
  if (util_windowIsUndefined) {
    return num;
  }
  var horiz = /(?:Left|Right|Width|X)/i.test(style) || isOriginWidth;
  horiz = style === 'padding' || style === 'marign' ? true : horiz;
  var t = style.indexOf('border') !== -1 || style.indexOf('translate') !== -1 || style === 'transformOrigin' ? target : target.parentNode || document.body;
  t = fixed ? document.body : t;
  var pix = void 0;
  var htmlComputedStyle = void 0;
  // transform 在 safari 下会留着单位，chrome 下会全部转换成 px;
  switch (unit) {
    case '%':
      pix = parseFloat(num) / 100 * (horiz ? t.clientWidth : t.clientHeight);
      break;
    case 'vw':
      pix = parseFloat(num) * document.body.clientWidth / 100;
      break;
    case 'vh':
      pix = parseFloat(num) * document.body.clientHeight / 100;
      break;
    case 'em':
      pix = parseFloat(num) * parseFloat(computedStyle.fontSize);
      break;
    case 'rem':
      {
        htmlComputedStyle = window.getComputedStyle(document.getElementsByTagName('html')[0]);
        pix = parseFloat(num) * parseFloat(htmlComputedStyle.fontSize);
        break;
      }
    default:
      pix = parseFloat(num);
      break;
  }
  switch (dataUnit) {
    case '%':
      pix = pix ? pix * 100 / (horiz ? t.clientWidth : t.clientHeight) : 0;
      break;
    case 'vw':
      pix = parseFloat(num) / document.body.clientWidth * 100;
      break;
    case 'vh':
      pix = parseFloat(num) / document.body.clientHeight * 100;
      break;
    case 'em':
      pix = parseFloat(num) / parseFloat(computedStyle.fontSize);
      break;
    case 'rem':
      {
        htmlComputedStyle = htmlComputedStyle || window.getComputedStyle(document.getElementsByTagName('html')[0]);
        pix = parseFloat(num) / parseFloat(htmlComputedStyle.fontSize);
        break;
      }
    default:
      break;
  }
  return pix;
}

function parsePath(path) {
  if (typeof path === 'string') {
    if (path.charAt(0).match(/m/i)) {
      var domPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    }
    return document.querySelector(path);
  } else if (path.style) {
    return path;
  }
  throw new Error('Error while parsing the path');
}

function getTransformValue(t) {
  if (typeof t === 'string') {
    return t;
  }
  var perspective = t.perspective;
  var angle = t.rotate;
  var rotateX = t.rotateX;
  var rotateY = t.rotateY;
  var sx = t.scaleX;
  var sy = t.scaleY;
  var sz = t.scaleZ;
  var skx = t.skewX;
  var sky = t.skewY;
  var translateX = typeof t.translateX === 'string' ? t.translateX : t.translateX + 'px';
  var translateY = typeof t.translateY === 'string' ? t.translateY : t.translateY + 'px';
  var translateZ = typeof t.translateZ === 'string' ? t.translateZ : t.translateZ + 'px';
  var sk = skx || sky ? 'skew(' + skx + 'deg,' + sky + 'deg)' : '';
  var an = angle ? 'rotate(' + angle + 'deg)' : '';
  var ss = sx !== 1 || sy !== 1 || sz !== 1 ? 'scale3d(' + sx + ',' + sy + ',' + sz + ')' : '';
  var rX = rotateX ? 'rotateX(' + rotateX + 'deg)' : '';
  var rY = rotateY ? 'rotateY(' + rotateY + 'deg)' : '';
  var per = perspective ? 'perspective(' + perspective + 'px)' : '';
  var defaultTranslate = ss || an || rX || rY || sk ? '' : 'translate(0px, 0px)';
  var translate = t.translateZ ? 'translate3d(' + translateX + ',' + translateY + ',' + translateZ + ')' : (t.translateX || t.translateY) && 'translate(' + translateX + ',' + translateY + ')' || defaultTranslate;
  return (per + ' ' + translate + ' ' + ss + ' ' + an + ' ' + rX + ' ' + rY + ' ' + sk).trim();
}
// EXTERNAL MODULE: ./node_modules/rc-scroll-anim/node_modules/style-utils/main.js
var main = __webpack_require__(13003);
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/node_modules/rc-tween-one/es/easing.js



(tween_functions_default()).path = function (_path, _param) {
  var param = _param || {};
  if (util_windowIsUndefined) {
    return 'linear';
  }
  var pathNode = parsePath(_path);
  var pathLength = pathNode.getTotalLength();
  var rect = param.rect || 100; // path 的大小，100 * 100，
  var lengthPixel = param.lengthPixel || 200; // 线上取点像素，默认分为 200 段。。
  var points = [];
  for (var i = 0; i < lengthPixel - 1; i++) {
    points.push(pathNode.getPointAtLength(pathLength / (lengthPixel - 1) * i));
  }
  points.push(pathNode.getPointAtLength(lengthPixel));
  return function path(t, b, _c, d) {
    var p = tween_functions_default().linear(t, b, _c, d);
    var timePointX = rect * p; // X 轴的百分比;
    // 取出 x 轴百分比上的点;
    var point = points.filter(function (item) {
      return item.x >= timePointX;
    })[0] || pathNode.getPointAtLength(p * pathLength);
    return 1 - point.y / rect;
  };
};

/* harmony default export */ var easing = ((tween_functions_default()));
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/node_modules/rc-tween-one/es/plugins.js
/* eslint-disable func-names */
var Plugins = function Plugins() {};
var p = Plugins.prototype;
p.push = function (plugin) {
  this[plugin.prototype.name] = plugin;
};
/* harmony default export */ var plugins = (new Plugins());
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/node_modules/rc-tween-one/es/plugin/StylePlugin.js

/* eslint-disable func-names, no-console */




var StylePlugin = function StylePlugin(target, vars, type) {
  this.target = target;
  this.vars = vars;
  this.type = type;
  this.propsData = {};
  this.setDefaultData();
};
StylePlugin.prototype = {
  name: 'style'
};
var StylePlugin_p = StylePlugin.prototype;
StylePlugin_p.getTweenData = function (key, $vars) {
  var data = {
    data: {},
    dataType: {},
    dataUnit: {},
    dataCount: {},
    dataSplitStr: {}
  };
  var vars = $vars;
  if (styleValueToArray[key]) {
    vars = vars.toString().split(' ');
    vars = vars.map(function (c) {
      return typeof $vars === 'number' ? c + 'px' : c;
    });
    vars[1] = vars[1] || vars[0];
    vars[2] = vars[2] || vars[0];
    vars[3] = vars[3] || vars[1] || vars[0];
    vars = vars.join(' ');
  }
  if (key.match(/colo|fill|storker/i)) {
    data.data[key] = (0,main/* parseColor */.lu)(vars);
    data.dataType[key] = 'color';
  } else if (key === 'strokeDasharray') {
    data.data[key] = vars.split(',');
    data.dataType[key] = 'strokeDasharray';
  } else if (key.match(/shadow/i)) {
    data.data[key] = (0,main/* parseShadow */.hy)(vars);
    data.dataType[key] = 'shadow';
  } else if (typeof vars === 'string' && vars.split(/[\s|,]/).length > 1) {
    data.data[key] = vars.split(/[\s|,]/);
    data.dataSplitStr[key] = vars.replace(/[^\s|,]/g, '').replace(/\s+/g, ' ');
    data.dataType[key] = 'string';
  } else {
    data.data[key] = vars;
    data.dataType[key] = 'other';
  }
  if (Array.isArray(data.data[key])) {
    data.dataUnit[key] = data.data[key].map(function (_item) {
      return _item.toString().replace(/[^a-z|%]/g, '');
    });
    data.dataCount[key] = data.data[key].map(function (_item) {
      return _item.toString().replace(/[^+|=|-]/g, '');
    });

    data.data[key] = data.data[key].map(function (_item) {
      return !parseFloat(_item) && parseFloat(_item) !== 0 ? _item : parseFloat(_item);
    });
  } else {
    data.dataUnit[key] = data.data[key].toString().replace(/[^a-z|%]/g, '');
    data.dataCount[key] = data.data[key].toString().replace(/[^+|=|-]/g, '');
    var d = parseFloat(data.data[key].toString().replace(/[a-z|%|=]/g, ''));
    data.data[key] = !d && d !== 0 ? data.data[key] : d;
  }
  return data;
};
StylePlugin_p.setDefaultData = function () {
  var _this = this;

  this.propsData.data = {};
  this.propsData.dataType = {};
  this.propsData.dataUnit = {};
  this.propsData.dataCount = {};
  this.propsData.dataSplitStr = {};
  Object.keys(this.vars).forEach(function (_key) {
    if (_key in plugins) {
      _this.propsData.data[_key] = new plugins[_key](_this.target, _this.vars[_key]);
      return;
    }
    var key = (0,main/* getGsapType */.Lo)(_key);
    var _data = _this.getTweenData(key, _this.vars[_key]);
    _this.propsData.data[key] = _data.data[key];
    _this.propsData.dataType[key] = _data.dataType[key];
    _this.propsData.dataUnit[key] = _data.dataUnit[key];
    _this.propsData.dataCount[key] = _data.dataCount[key];
    if (_data.dataSplitStr[key]) {
      _this.propsData.dataSplitStr[key] = _data.dataSplitStr[key];
    }
  });
};
StylePlugin_p.convertToMarksArray = function (computedStyle, unit, key, data, i) {
  var startUnit = data.toString().replace(/[^a-z|%]/g, '');
  var endUnit = unit[i];
  if (startUnit === endUnit) {
    return parseFloat(data);
  } else if (!parseFloat(data) && parseFloat(data) !== 0) {
    return data;
  }
  return startConvertToEndUnit(this.target, computedStyle, key, data, startUnit, endUnit, null, key === 'transformOrigin' && !i);
};
StylePlugin_p.getAnimStart = function (computedStyle, tween, isSvg) {
  var _this2 = this;

  var style = {};
  var tweenStyle = tween.style || {};
  var transform = void 0;
  Object.keys(this.propsData.data).forEach(function (key) {
    var cssName = (0,main/* isConvert */.dt)(key);
    var startData = tweenStyle[cssName] || computedStyle[cssName];
    var fixed = computedStyle.position === 'fixed';
    if (!startData || startData === 'none' || startData === 'auto') {
      startData = '';
    }
    var endUnit = void 0;
    var startUnit = void 0;
    if (key in plugins) {
      if (key === 'bezier') {
        _this2.transform = (0,main/* checkStyleName */.Yf)('transform');
        startData = computedStyle[isSvg ? 'transformSVG' : _this2.transform];
        transform = transform || (tweenStyle.transform ? (0,helpers_extends/* default */.Z)({}, tweenStyle.transform) : style.transform || (0,main/* getTransform */.Ck)(startData));
        style.transform = transform;
      }
      _this2.propsData.data[key].getAnimStart(computedStyle, isSvg);
    } else if (cssName === 'transform') {
      _this2.transform = (0,main/* checkStyleName */.Yf)('transform');
      startData = computedStyle[isSvg ? 'transformSVG' : _this2.transform];
      endUnit = _this2.propsData.dataUnit[key];
      transform = transform || (tweenStyle.transform ? (0,helpers_extends/* default */.Z)({}, tweenStyle.transform) : style.transform || (0,main/* getTransform */.Ck)(startData));
      var unitReg = /%|vw|vh|em|rem/i;
      if (endUnit && endUnit.match(unitReg)) {
        transform[key] = transform[key] && transform[key].toString().match(unitReg) ? parseFloat(transform[key]) : startConvertToEndUnit(_this2.target, computedStyle, key, transform[key], null, endUnit);
      }
      style.transform = transform;
    } else if (cssName === 'filter') {
      if (tweenStyle[cssName]) {
        startData = tweenStyle[cssName];
      } else {
        _this2.filterName = (0,main/* checkStyleName */.Yf)('filter') || 'filter';
        startData = computedStyle[_this2.filterName];
        _this2.filterObject = (0,helpers_extends/* default */.Z)({}, _this2.filterObject, (0,main/* splitFilterToObject */.GX)(startData));
        startData = _this2.filterObject[key] || 0;
      }
      startUnit = startData.toString().replace(/[^a-z|%]/g, '');
      endUnit = _this2.propsData.dataUnit[key];
      if (endUnit !== startUnit) {
        startData = startConvertToEndUnit(_this2.target, computedStyle, cssName, parseFloat(startData), startUnit, endUnit, fixed);
      }
      style[key] = parseFloat(startData);
    } else if (key.match(/color|fill/i) || key === 'stroke') {
      startData = !startData && key === 'stroke' ? 'rgba(255, 255, 255, 0)' : startData;
      style[cssName] = (0,main/* parseColor */.lu)(startData);
    } else if (key.match(/shadow/i)) {
      startData = (0,main/* parseShadow */.hy)(startData);
      endUnit = _this2.propsData.dataUnit[key];
      startData = startData.map(_this2.convertToMarksArray.bind(_this2, computedStyle, endUnit, key));
      style[cssName] = startData;
    } else if (Array.isArray(_this2.propsData.data[key])) {
      startData = startData.split(/[\s|,]/).filter(function (c) {
        return c || c === 0;
      });
      endUnit = _this2.propsData.dataUnit[key];
      startData = startData.map(_this2.convertToMarksArray.bind(_this2, computedStyle, endUnit, key));
      style[cssName] = startData;
    } else {
      // 计算单位
      endUnit = _this2.propsData.dataUnit[cssName];
      startUnit = startData.toString().replace(/[^a-z|%]/g, '');
      if (endUnit !== startUnit) {
        startData = startConvertToEndUnit(_this2.target, computedStyle, cssName, parseFloat(startData), startUnit, endUnit, fixed);
      }
      style[cssName] = parseFloat(startData || 0);
    }
  });
  this.start = style;
  return style;
};
StylePlugin_p.setArrayRatio = function (ratio, start, vars, unit, type) {
  if (type === 'color' && start.length === 4 && vars.length === 3) {
    vars[3] = 1;
  }
  var startInset = start.indexOf('inset') >= 0;
  var endInset = vars.indexOf('inset') >= 0;
  if (startInset && !endInset || endInset && !startInset) {
    throw console.error('Error: "box-shadow" inset have to exist');
  }
  var length = endInset ? 9 : 8;
  if (start.length === length && vars.length === length - 1) {
    vars.splice(3, 0, 0);
    unit.splice(3, 0, '');
  } else if (vars.length === length && start.length === length - 1) {
    start.splice(3, 0, 0);
  }
  var _vars = vars.map(function (endData, i) {
    var startIsAlpha = type === 'color' && i === 3 && !start[i] ? 1 : 0;
    var startData = typeof start[i] === 'number' ? start[i] : startIsAlpha;
    if (typeof endData === 'string') {
      return endData;
    }
    return (endData - startData) * ratio + startData + (unit[i] || 0);
  });
  if (type === 'color') {
    return (0,main/* getColor */.Lq)(_vars);
  } else if (type === 'shadow') {
    var l = _vars.length === length ? 4 : 3;
    var s = _vars.slice(0, l).map(function (item) {
      if (typeof item === 'number') {
        return item + 'px';
      }
      return item;
    });
    var c = _vars.slice(l, endInset ? _vars.length - 1 : _vars.length);
    var color = (0,main/* getColor */.Lq)(c);
    return (s.join(' ') + ' ' + color + ' ' + (endInset ? 'inset' : '')).trim();
  }
  return _vars;
};

StylePlugin_p.setRatio = function (ratio, tween, computedStyle) {
  var _this3 = this;

  tween.style = tween.style || {};
  if (this.start.transform) {
    tween.style.transform = tween.style.transform || (0,helpers_extends/* default */.Z)({}, this.start.transform);
  }
  var style = this.target.style;
  Object.keys(this.propsData.data).forEach(function (key) {
    var _isTransform = (0,main/* isTransform */.Tk)(key) === 'transform';
    var startVars = _isTransform ? _this3.start.transform[key] : _this3.start[key];
    var endVars = _this3.propsData.data[key];
    var unit = _this3.propsData.dataUnit[key];
    var count = _this3.propsData.dataCount[key];
    if (key in plugins) {
      _this3.propsData.data[key].setRatio(ratio, tween, computedStyle);
      if (key === 'bezier') {
        style[_this3.transform] = getTransformValue(tween.style.transform);
      } else {
        Object.keys(tween.style).forEach(function (css) {
          style[css] = tween.style[css];
        });
      }
      return;
    } else if (_isTransform) {
      if (unit && unit.match(/%|vw|vh|em|rem/i)) {
        startVars = parseFloat(_this3.start.transform[key]);
        if (count.charAt(1) === '=') {
          tween.style.transform[key] = startVars + endVars * ratio + unit;
        } else {
          tween.style.transform[key] = (endVars - startVars) * ratio + startVars + unit;
        }
      } else if (key === 'scale') {
        var xStart = _this3.start.transform.scaleX;
        var yStart = _this3.start.transform.scaleY;
        if (count.charAt(1) === '=') {
          tween.style.transform.scaleX = xStart + endVars * ratio;
          tween.style.transform.scaleY = yStart + endVars * ratio;
        } else {
          tween.style.transform.scaleX = (endVars - xStart) * ratio + xStart;
          tween.style.transform.scaleY = (endVars - yStart) * ratio + yStart;
        }
      } else if (count.charAt(1) === '=') {
        tween.style.transform[key] = startVars + endVars * ratio;
      } else {
        tween.style.transform[key] = (endVars - startVars) * ratio + startVars;
      }
      style[_this3.transform] = getTransformValue(tween.style.transform);
      if (computedStyle) {
        computedStyle.transformSVG = (0,main/* createMatrix */.wz)(style[_this3.transform]).toString();
      }
      return;
    } else if (Array.isArray(endVars)) {
      var _type = _this3.propsData.dataType[key];
      tween.style[key] = _this3.setArrayRatio(ratio, startVars, endVars, unit, _type);
      if (_type === 'string') {
        tween.style[key] = tween.style[key].join(_this3.propsData.dataSplitStr[key]);
      }
    } else {
      var styleUnit = (0,main/* stylesToCss */.YJ)(key, 0);
      styleUnit = typeof styleUnit === 'number' ? '' : styleUnit.replace(/[^a-z|%]/g, '');
      unit = unit || (main/* cssList */._T.filter.indexOf(key) >= 0 ? '' : styleUnit);
      if (typeof endVars === 'string') {
        tween.style[key] = endVars;
      } else if (count.charAt(1) === '=') {
        tween.style[key] = startVars + endVars * ratio + unit;
      } else {
        var value = (endVars - startVars) * ratio + startVars;
        tween.style[key] = unit ? '' + value + unit : value;
      }
    }
    if (main/* cssList */._T.filter.indexOf(key) >= 0) {
      if (!_this3.filterObject) {
        return;
      }
      _this3.filterObject[key] = tween.style[key];
      var filterStyle = '';
      Object.keys(_this3.filterObject).forEach(function (filterKey) {
        filterStyle += ' ' + filterKey + '(' + _this3.filterObject[filterKey] + ')';
      });
      style[_this3.filterName] = filterStyle.trim();
      return;
    }
    style[key] = tween.style[key];
  });
};
/* harmony default export */ var plugin_StylePlugin = (StylePlugin);
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/node_modules/rc-tween-one/es/Tween.js

/* eslint-disable func-names */
/**
 * Created by jljsj on 16/1/27.
 */







var DEFAULT_EASING = 'easeInOutQuad';
var DEFAULT_DURATION = 450;
var DEFAULT_DELAY = 0;
function Tween_noop() {}
plugins.push(plugin_StylePlugin);
// 设置默认数据
function defaultData(vars, now) {
  var duration = vars.duration || vars.duration === 0 ? vars.duration : DEFAULT_DURATION;
  return {
    duration: vars.type === 'set' ? 0 : duration,
    delay: vars.delay || DEFAULT_DELAY,
    ease: typeof vars.ease === 'function' ? vars.ease : easing[vars.ease || DEFAULT_EASING],
    onUpdate: vars.onUpdate || Tween_noop,
    onComplete: vars.onComplete || Tween_noop,
    onStart: vars.onStart || Tween_noop,
    onRepeat: vars.onRepeat || Tween_noop,
    repeat: vars.repeat || 0,
    repeatDelay: vars.repeatDelay || 0,
    yoyo: vars.yoyo || false,
    type: vars.type === 'from' ? 'from' : 'to',
    initTime: now,
    appearTo: typeof vars.appearTo === 'number' ? vars.appearTo : null,
    perTime: 0,
    currentRepeat: 0
  };
}

var Tween = function Tween(target, to, attr) {
  var toData = util_dataToArray(to);
  this.target = target;
  this.attr = attr || 'style';
  // 时间精度补齐；
  this.accuracy = 0.00001;
  // 记录总时间;
  this.totalTime = 0;
  // 记录当前时间;
  this.progressTime = 0;
  // 记录时间轴数据;
  this.defaultData = [];
  // 每个的开始数据；
  this.start = {};
  // 开始默认的数据；
  this.startDefaultData = {};
  // 动画过程
  this.tween = {};
  // toData;
  this.data = toData;
  // 每帧的时间;
  this.perFrame = Math.round(1000 / 60);
  // 注册，第一次进入执行注册
  this.register = false;
  // svg元素
  this.isSvg = this.target.ownerSVGElement;
  // 设置 style
  var data = this.setAttrIsStyle();
  // 设置默认动画数据;
  this.setDefaultData(data);
};
var Tween_p = Tween.prototype;
Tween_p.setAttrIsStyle = function () {
  var _this = this;

  var data = [];
  var defaultParam = defaultData({}, 0);
  this.data.forEach(function (d, i) {
    var _d = (0,helpers_extends/* default */.Z)({}, d);
    if (_this.attr === 'style') {
      data[i] = {};
      Object.keys(_d).forEach(function (key) {
        if (key in defaultParam) {
          data[i][key] = _d[key];
          delete _d[key];
        }
      });
      data[i].style = _d;
      _this.startDefaultData.style = _this.target.getAttribute('style') || '';
    } else if (_this.attr === 'attr') {
      Object.keys(_d).forEach(function (key) {
        if (key === 'style' && Array.isArray(d[key])) {
          throw new Error('Style should be the object.');
        }
        if (key === 'bezier') {
          _d.style = (0,helpers_extends/* default */.Z)({}, _d.style, { bezier: _d[key] });
          delete _d[key];
          _this.startDefaultData.style = _this.target.getAttribute('style') || '';
        } else {
          if (key in defaultParam) {
            return;
          }
          _this.startDefaultData[key] = _this.getValue(key);
        }
      });
      data[i] = _d;
    }
  });
  return data;
};
Tween_p.setDefaultData = function (_vars) {
  var _this2 = this;

  var now = 0;
  var repeatMax = false;
  var data = _vars.map(function (item) {
    var appearToBool = typeof item.appearTo === 'number';
    // 加上延时，在没有播放过时；
    if (!appearToBool) {
      now += item.delay || 0;
    }
    var appearToTime = (item.appearTo || 0) + (item.delay || 0);
    // 获取默认数据
    var tweenData = defaultData(item, appearToBool ? appearToTime : now);
    tweenData.vars = {};
    Object.keys(item).forEach(function (_key) {
      if (!(_key in tweenData)) {
        var _data = item[_key];
        if (_key in plugins) {
          tweenData.vars[_key] = new plugins[_key](_this2.target, _data, tweenData.type);
        } else if ((_key === 'd' || _key === 'points') && "SVGMorph" in plugins) {
          tweenData.vars[_key] = new plugins.SVGMorph(_this2.target, _data, _key);
        } else if (_key.match(/color/i) || _key === 'stroke' || _key === 'fill') {
          tweenData.vars[_key] = { type: 'color', vars: (0,main/* parseColor */.lu)(_data) };
        } else if (typeof _data === 'number' || _data.split(/[,|\s]/g).length <= 1) {
          var vars = parseFloat(_data);
          var unit = _data.toString().replace(/[^a-z|%]/g, '');
          var count = _data.toString().replace(/[^+|=|-]/g, '');
          tweenData.vars[_key] = { unit: unit, vars: vars, count: count };
        }
      }
    });
    if (tweenData.yoyo && !tweenData.repeat) {
      console.warn('Warning: yoyo must be used together with repeat;'); // eslint-disable-line
    }
    if (tweenData.repeat === -1) {
      repeatMax = true;
    }
    var repeat = tweenData.repeat === -1 ? 0 : tweenData.repeat;
    if (appearToBool) {
      // 如果有 appearTo 且这条时间比 now 大时，，总时间用这条；
      var appearNow = item.appearTo + (item.delay || 0) + tweenData.duration * (repeat + 1) + tweenData.repeatDelay * repeat;
      now = appearNow >= now ? appearNow : now;
    } else if (tweenData.delay < -tweenData.duration) {
      // 如果延时小于 负时间时,,不加,再减回延时;
      now -= tweenData.delay;
    } else {
      // repeat 为 -1 只记录一次。不能跟 reverse 同时使用;
      now += tweenData.duration * (repeat + 1) + tweenData.repeatDelay * repeat;
    }
    tweenData.mode = '';
    return tweenData;
  });
  this.totalTime = repeatMax ? Number.MAX_VALUE : now;
  this.defaultData = data;
};
Tween_p.getComputedStyle = function () {
  var style = typeof window !== 'undefined' && document.defaultView ? document.defaultView.getComputedStyle(this.target) : {};
  // 如果是 SVG, 样式全部提出为 transformSVG, 兼容 safari 不能获取 transform;
  if (this.isSvg) {
    var transform = style[(0,main/* checkStyleName */.Yf)('transform')] || 'none';
    if (transform === 'none') {
      var attrStyle = this.target.getAttribute('style');
      if (attrStyle && attrStyle.indexOf('transform:') >= 0) {
        transform = attrStyle.split(';').filter(function (k) {
          return k.indexOf('transform:') >= 0;
        }).map(function (item) {
          return (0,main/* createMatrix */.wz)(item.split(':')[1].trim()).toString();
        })[0];
      } else if (this.target.getAttribute('transform')) {
        // 暂时不支持标签上的 transform，后期增加;
        console.warn('Do not add transform on the label, otherwise it will be invalid.'); // eslint-disable-line no-console
      }
    }
    style.transformSVG = transform;
  }
  return style;
};
Tween_p.getAnimStartData = function (item) {
  var _this3 = this;

  var start = {};
  Object.keys(item).forEach(function (_key) {
    if (_key in plugins || _this3.attr === 'attr' && (_key === 'd' || _key === 'points')) {
      _this3.computedStyle = _this3.computedStyle || (!_this3.target.getAttribute ? (0,helpers_extends/* default */.Z)({}, _this3.target) : _this3.getComputedStyle());
      start[_key] = item[_key].getAnimStart(_this3.computedStyle, _this3.tween, _this3.isSvg);
      return;
    }
    if (_this3.attr === 'attr') {
      // 除了d和这points外的标签动画；
      var attribute = _this3.getValue(_key);
      var s = _key.match(/opacity/ig) ? 1 : 0;
      var data = attribute === 'null' || !attribute ? s : attribute;
      if (_key.match(/color/i) || _key === 'stroke' || _key === 'fill') {
        data = !data && _key === 'stroke' ? 'rgba(255, 255, 255, 0)' : data;
        data = (0,main/* parseColor */.lu)(data);
        start[_key] = data;
      } else if (parseFloat(data) || parseFloat(data) === 0 || data === 0) {
        var unit = data.toString().replace(/[^a-z|%]/g, '');
        start[_key] = unit !== item[_key].unit ? startConvertToEndUnit(_this3.target, _key, parseFloat(data), unit, item[_key].unit) : parseFloat(data);
      }
      return;
    }
    start[_key] = _this3.target[_key] || 0;
  });
  return start;
};
Tween_p.setAnimData = function (data) {
  var _this4 = this;

  Object.keys(data).forEach(function (key) {
    if (key in plugins || _this4.attr === 'attr' && (key === 'd' || key === 'points')) {
      return;
    }
    _this4.target[key] = data[key];
  });
};
Tween_p.setRatio = function (ratio, endData, i) {
  var _this5 = this;

  Object.keys(endData.vars).forEach(function (_key) {
    if (_key in plugins || _this5.attr === 'attr' && (_key === 'd' || _key === 'points')) {
      endData.vars[_key].setRatio(ratio, _this5.tween, _this5.isSvg && _this5.computedStyle);
      return;
    }
    var endVars = endData.vars[_key];
    var startVars = _this5.start[i][_key];
    var data = void 0;
    if (_this5.attr === 'attr') {
      // 除了d和这points外的标签动画；
      if (!endVars.type) {
        data = endVars.unit.charAt(1) === '=' ? startVars + endVars.vars * ratio + endVars.unit : (endVars.vars - startVars) * ratio + startVars + endVars.unit;
        _this5.setValue(_key, endVars.unit ? data : parseFloat(data));
      } else if (endVars.type === 'color') {
        if (endVars.vars.length === 3 && startVars.length === 4) {
          endVars.vars[3] = 1;
        }
        data = endVars.vars.map(function (_endData, _i) {
          var startData = startVars[_i] || 0;
          return (_endData - startData) * ratio + startData;
        });
        _this5.setValue(_key, (0,main/* getColor */.Lq)(data));
      }
    }
  });
  this.setAnimData(this.tween);
};
Tween_p.getValue = function (key) {
  return this.target.getAttribute ? this.target.getAttribute(key) : this.target[key];
};
Tween_p.setValue = function (key, value) {
  if (this.target.setAttribute) {
    this.target.setAttribute(key, value);
  } else {
    this.target[key] = value;
  }
};
Tween_p.render = function () {
  var _this6 = this;

  var reverse = this.reverse;
  this.defaultData.forEach(function (item, i) {
    var initTime = item.initTime;
    var duration = (0,main/* toFixed */.FH)(item.duration);
    // 处理 yoyo 和 repeat; yoyo 是在时间轴上的, 并不是倒放
    var repeatNum = Math.ceil((_this6.progressTime - initTime) / (duration + item.repeatDelay)) - 1 || 0;
    repeatNum = repeatNum < 0 ? 0 : repeatNum;
    if (item.repeat) {
      if (item.repeat < repeatNum && item.repeat !== -1) {
        return;
      }
      if (item.repeat || item.repeat <= repeatNum) {
        initTime += repeatNum * (duration + item.repeatDelay);
      }
    }
    var startData = item.yoyo && repeatNum % 2 ? 1 : 0;
    var endData = item.yoyo && repeatNum % 2 ? 0 : 1;
    startData = item.type === 'from' ? 1 - startData : startData;
    endData = item.type === 'from' ? 1 - endData : endData;
    //  精度损失，只取小数点后10位。
    var progressTime = (0,main/* toFixed */.FH)(_this6.progressTime - initTime);

    var ratio = void 0;

    // 开始注册;
    // from 时需先执行参数位置;
    var fromDelay = item.type === 'from' ? item.delay : 0;
    if (progressTime + fromDelay >= 0) {
      if (!_this6.start[i]) {
        // 设置 start
        _this6.start[i] = _this6.getAnimStartData(item.vars);
        if (progressTime < _this6.perFrame) {
          ratio = !item.duration && !item.delay ? item.ease(1, startData, endData, 1) : item.ease(0, startData, endData, 1);
          _this6.setRatio(ratio, item, i);
        } else if (progressTime > duration) {
          ratio = item.ease(1, startData, endData, 1);
          _this6.setRatio(ratio, item, i);
        }
        if (!_this6.register || i && !initTime) {
          _this6.register = true;
          if (progressTime === 0 && item.duration && item.delay) {
            return;
          }
        }
      }
    }

    var e = {
      index: i,
      target: _this6.target
    };
    var cb = (0,helpers_extends/* default */.Z)({
      moment: _this6.progressTime
    }, e);
    var maxPer = _this6.perFrame - _this6.accuracy;
    var startTime = item.delay && reverse ? -maxPer : 0;
    if ((progressTime >= startTime && !(progressTime > duration && item.mode === 'onComplete') || progressTime < startTime && item.mode && item.mode !== 'onStart') && _this6.start[i]) {
      var updateAnim = _this6.updateAnim === 'update';
      progressTime = progressTime < maxPer && !reverse && item.duration >= _this6.perFrame ? 0 : progressTime;
      if ((progressTime >= duration - _this6.accuracy && !reverse || reverse && progressTime <= 0) && repeatNum >= item.repeat) {
        if (item.mode === 'onComplete') {
          return;
        }
        // onReveresComplete 和 onComplete 统一用 onComplete;
        ratio = item.ease(reverse ? 0 : 1, startData, endData, 1);
        _this6.setRatio(ratio, item, i, item.currentRepeat !== repeatNum);
        if ((!item.reset || item.reset && progressTime >= duration) && !updateAnim) {
          // duration 为 0 时的一个回调；
          if (duration < maxPer) {
            if (!duration) {
              item.onStart(e);
              cb.mode = 'onStart';
              _this6.onChange(cb);
            }
            item.onUpdate((0,helpers_extends/* default */.Z)({ ratio: ratio }, e));
            cb.mode = 'onUpdate';
            _this6.onChange(cb);
          }
          item.onComplete(e);
        } else if (progressTime >= duration + maxPer) {
          return;
        }
        item.mode = 'onComplete';
      } else if (duration > maxPer) {
        var currentProgress = progressTime < 0 ? 0 : progressTime;
        currentProgress = currentProgress > duration ? duration : currentProgress;
        ratio = item.ease(currentProgress, startData, endData, duration);
        _this6.setRatio(ratio, item, i);
        if (!updateAnim) {
          if (item.repeat && repeatNum > 0 && item.currentRepeat !== repeatNum) {
            item.mode = 'onRepeat';
            item.currentRepeat = repeatNum;
            item.onRepeat((0,helpers_extends/* default */.Z)({}, e, { repeatNum: repeatNum }));
          } else if ((item.perTime <= 0 || reverse && item.perTime >= _this6.reverseStartTime - initTime) && item.mode !== 'onStart') {
            // onReveresStart 和 onStart 统一用 onStart;
            item.mode = 'onStart';
            item.onStart(e);
          } else {
            item.mode = 'onUpdate';
            item.onUpdate((0,helpers_extends/* default */.Z)({ ratio: ratio }, e));
          }
        }
      }

      if (!updateAnim) {
        cb.mode = item.mode;
        _this6.onChange(cb);
      }
      item.perTime = progressTime;
      if (item.reset) {
        delete item.reset;
      }
    }
  });
};
// 播放帧
Tween_p.frame = function (moment) {
  var _this7 = this;

  this.progressTime = moment;
  this.defaultData.forEach(function (item) {
    var t = _this7.progressTime - item.duration - item.initTime;
    if (t < _this7.perFrame && t > 0) {
      _this7.progressTime = item.duration + item.initTime;
    }
  });
  this.render();
};

Tween_p.init = Tween_p.frame;

Tween_p.resetAnimData = function () {
  this.tween = {};
  this.start = {};
};

var getDefaultStyle = function getDefaultStyle(domStyle, defaultStyle, tweenData) {
  var $data = defaultData({}, 0);
  var getStyleToArray = function getStyleToArray(styleString) {
    return styleString.split(';').filter(function (c) {
      return c;
    }).map(function (str) {
      return str.split(':').map(function (s) {
        return s.trim();
      });
    });
  };
  var styleToArray = getStyleToArray(defaultStyle);
  var domStyleToArray = getStyleToArray(domStyle);
  tweenData.forEach(function (value) {
    Object.keys(value).forEach(function (name) {
      if (!(name in $data)) {
        var $name = name === 'bezier' ? 'transform' : name;
        var styleName = (0,main/* toCssLowerCase */.Dm)((0,main/* isTransform */.Tk)((0,main/* getGsapType */.Lo)($name)));
        domStyleToArray = domStyleToArray.filter(function (item) {
          // 去除 plugins 的特殊名称。
          if (transformOrFilter[item[0]] && transformOrFilter[styleName]) {
            return false;
          }
          return item[0] !== styleName;
        });
      }
    });
  });
  styleToArray.forEach(function (item) {
    domStyleToArray = domStyleToArray.filter(function ($item) {
      if ($item[0] === item[0]) {
        return false;
      }
      return true;
    });
  });
  return styleToArray.concat(domStyleToArray).map(function (item) {
    return item.join(':');
  }).join(';');
};

Tween_p.resetDefaultStyle = function () {
  var _this8 = this;

  this.tween = {};
  this.defaultData = this.defaultData.map(function (item) {
    item.reset = true;
    delete item.mode;
    return item;
  });
  var data = defaultData({}, 0);
  Object.keys(this.startDefaultData).forEach(function (key) {
    if (!(key in data)) {
      if (key === 'style') {
        var value = getDefaultStyle(_this8.target.style.cssText, _this8.startDefaultData.style, _this8.data);
        _this8.setValue(key, value);
      } else {
        _this8.setValue(key, _this8.startDefaultData[key]);
      }
      _this8.computedStyle = null;
    }
  });
};

Tween_p.reStart = function (style, preStyle, isTween) {
  var _this9 = this;

  this.start = {};
  this.tween = {};
  Object.keys(style || {}).forEach(function (key) {
    if (isTween || !preStyle || style[key] !== preStyle[key]) {
      _this9.target.style[key] = (0,main/* stylesToCss */.YJ)(key, style[key]);
    }
  });
  this.setAttrIsStyle();
  this.computedStyle = null;
};

Tween_p.onChange = Tween_noop;
/* harmony default export */ var es_Tween = (Tween);
// EXTERNAL MODULE: ./node_modules/raf/index.js
var raf = __webpack_require__(54087);
var raf_default = /*#__PURE__*/__webpack_require__.n(raf);
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/node_modules/rc-tween-one/es/ticker.js
/* eslint-disable func-names */


var getTime = Date.now || function () {
  return new Date().getTime();
};
var sortObj = {
  interval: 1,
  timeout: 1,
  TweenOneTicker: 2
};
var tickObjToArray = function tickObjToArray(obj) {
  return Object.keys(obj).map(function (k) {
    return {
      key: k,
      func: obj[k]
    };
  }).sort(function (a, b) {
    var aa = a.key.split('_')[0];
    var bb = b.key.split('_')[0];
    return sortObj[bb] - sortObj[aa];
  });
};
var Ticker = function Ticker() {};
Ticker.prototype = {
  tickFnArray: [],
  tickKeyObject: {},
  id: -1,
  tweenId: 0,
  frame: 0,
  perFrame: Math.round(1000 / 60),
  elapsed: 0,
  lastUpdate: getTime(),
  startTime: getTime(), // 开始时间，不计算 react 渲染时间；
  nextTime: 0,
  time: 0
};
var ticker_p = Ticker.prototype;
ticker_p.add = function (fn) {
  var key = 'TweenOneTicker_' + this.tweenId;
  this.tweenId++;
  this.wake(key, fn);
  return key;
};
ticker_p.wake = function (key, fn) {
  this.tickKeyObject[key] = fn;
  this.tickFnArray = tickObjToArray(this.tickKeyObject);
  if (this.id === -1) {
    this.id = raf_default()(this.tick);
  }
};
ticker_p.clear = function (key) {
  delete this.tickKeyObject[key];
  this.tickFnArray = tickObjToArray(this.tickKeyObject);
};
ticker_p.sleep = function () {
  raf_default().cancel(this.id);
  this.id = -1;
  this.frame = 0;
};
var ticker = new Ticker();
ticker_p.tick = function (a) {
  ticker.elapsed = getTime() - ticker.lastUpdate;
  // 离开当前时设值 300；大于 300 则为离开。
  if (ticker.elapsed > 300) {
    ticker.startTime += ticker.elapsed - ticker.perFrame;
  }
  ticker.lastUpdate += ticker.elapsed;
  ticker.time = ticker.lastUpdate - ticker.startTime;
  var overlap = ticker.time - ticker.nextTime;
  if (overlap > 0 || !ticker.frame) {
    ticker.frame++;
    ticker.nextTime += overlap;
  }
  // console.log(ticker.frame, ticker.nextTime, ticker.time)
  ticker.tickFnArray.forEach(function (item) {
    return item.func(a);
  });
  // 如果 object 里没对象了，自动杀掉；
  if (!ticker.tickFnArray.length) {
    ticker.sleep();
    return;
  }
  ticker.id = raf_default()(ticker.tick);
};
var timeoutIdNumber = 0;
ticker_p.timeout = function (fn, time) {
  var _this = this;

  if (!(typeof fn === 'function')) {
    return console.warn('not function'); // eslint-disable-line
  }
  var timeoutID = 'timeout_' + Date.now() + '-' + timeoutIdNumber;
  var startTime = this.time;
  this.wake(timeoutID, function () {
    var moment = _this.time - startTime;
    if (moment >= (time || 0)) {
      _this.clear(timeoutID);
      fn();
    }
  });
  timeoutIdNumber++;
  return timeoutID;
};
var intervalIdNumber = 0;
ticker_p.interval = function (fn, time) {
  var _this2 = this;

  if (!(typeof fn === 'function')) {
    console.warn('not function'); // eslint-disable-line
    return null;
  }
  var intervalID = 'interval_' + Date.now() + '-' + intervalIdNumber;
  var starTime = this.time;
  this.wake(intervalID, function () {
    var moment = _this2.time - starTime;
    if (moment >= (time || 0)) {
      starTime = _this2.time;
      fn();
    }
  });
  intervalIdNumber++;
  return intervalID;
};
/* harmony default export */ var es_ticker = (ticker);
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/node_modules/rc-tween-one/es/TweenOne.js















function TweenOne_noop() {}

var perFrame = Math.round(1000 / 60);
var objectOrArray = prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).array]);

var TweenOne_TweenOne = function (_Component) {
  (0,inherits/* default */.Z)(TweenOne, _Component);

  (0,createClass/* default */.Z)(TweenOne, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, _ref) {
      var prevProps = _ref.prevProps,
          $self = _ref.$self;

      var nextState = {
        prevProps: props
      };
      if (prevProps && props !== prevProps) {
        if (!$self.tween && !$self.dom) {
          $self.updateAnim = true;
          return nextState;
        }

        // 动画处理
        var newAnimation = props.animation;
        var currentAnimation = prevProps.animation;
        var equal = util_objectEqual(currentAnimation, newAnimation);
        if (!equal) {
          if (props.resetStyle && $self.tween) {
            $self.tween.resetDefaultStyle();
          }
          $self.updateAnim = true;
        }

        // 跳帧事件 moment;
        var nextMoment = props.moment;
        if (typeof nextMoment === 'number' && nextMoment !== prevProps.moment) {
          if ($self.tween && !$self.updateAnim) {
            $self.startMoment = nextMoment;
            $self.startTime = es_ticker.time;
            if (props.paused) {
              $self.raf();
            }
            if ($self.tween.progressTime >= $self.tween.totalTime) {
              $self.play();
            }
          } else {
            $self.updateAnim = true;
          }
        }

        // 暂停倒放
        if ($self.paused !== props.paused || $self.reverse !== props.reverse) {
          $self.paused = props.paused;
          $self.reverse = props.reverse;
          if ($self.paused) {
            $self.cancelRequestAnimationFrame();
          } else if ($self.reverse && props.reverseDelay) {
            $self.cancelRequestAnimationFrame();
            es_ticker.timeout($self.restart, props.reverseDelay);
          } else {
            // 在 form 状态下，暂停时拉 moment 时，start 有值恢复播放，在 delay 的时间没有处理。。
            if ($self.tween) {
              $self.tween.resetAnimData();
              $self.tween.resetDefaultStyle();
            }
            if (!$self.updateAnim) {
              $self.restart();
            }
          }
        }

        var styleEqual = util_objectEqual(prevProps.style, props.style);
        if (!styleEqual) {
          // 在动画时更改了 style, 作为更改开始数值。
          if ($self.tween) {
            $self.tween.reStart(props.style, prevProps.style, $self.tween.progressTime < $self.tween.totalTime);
            if ($self.paused) {
              $self.raf();
            }
          }
        }
        $self.setForcedJudg(props);
      }
      return nextState; // eslint-disable-line
    }
  }]);

  function TweenOne(props) {
    (0,classCallCheck/* default */.Z)(this, TweenOne);

    var _this = (0,possibleConstructorReturn/* default */.Z)(this, (TweenOne.__proto__ || Object.getPrototypeOf(TweenOne)).call(this, props));

    _initialiseProps.call(_this);

    _this.rafID = -1;
    _this.paused = props.paused;
    _this.reverse = props.reverse;
    _this.updateAnim = false;
    _this.repeatNum = 0;
    // 定义 ref 给外部使用；
    _this.currentRef = null;
    _this.forced = {};
    _this.setForcedJudg(props);
    _this.state = {
      $self: _this
    };
    return _this;
  }

  (0,createClass/* default */.Z)(TweenOne, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.dom = react_dom.findDOMNode(this);
      if (this.dom && this.dom.nodeName !== '#text') {
        this.start();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.dom) {
        this.dom = react_dom.findDOMNode(this);
      }
      // 样式更新了后再执行动画；
      if (this.updateAnim && this.dom && this.dom.nodeName !== '#text') {
        if (this.tween) {
          this.cancelRequestAnimationFrame();
        }
        this.start();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cancelRequestAnimationFrame();
    }

    /**
     * @method setForcedJudg
     * @param props
     * QueueAnim 套在组件下面后导至子级变化。
     * <QueueAnim component={Menu} >
     *   <SubMenu key="a" title="导航">
     *     <Item />
     *   </SubMenu>
     * </QueueAnim>
     * rc-Menu 里是以 isXXX 来判断是 rc-Menu 的子级;
     * 如: 用 isSubMenu 来处理 hover 事件
     * 地址: https://github.com/react-component/menu/blob/master/src/MenuMixin.js#L172
     * 暂时方案: 在组件里添加判断用的值。
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          animation = _props.animation,
          component = _props.component,
          componentProps = _props.componentProps,
          reverseDelay = _props.reverseDelay,
          attr = _props.attr,
          paused = _props.paused,
          reverse = _props.reverse,
          repeat = _props.repeat,
          yoyo = _props.yoyo,
          moment = _props.moment,
          resetStyle = _props.resetStyle,
          forcedJudg = _props.forcedJudg,
          props = (0,objectWithoutProperties/* default */.Z)(_props, ['animation', 'component', 'componentProps', 'reverseDelay', 'attr', 'paused', 'reverse', 'repeat', 'yoyo', 'moment', 'resetStyle', 'forcedJudg']);

      Object.keys(props.style || {}).forEach(function (p) {
        if (p.match(/filter/i)) {
          ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
            props.style[prefix + 'Filter'] = props.style[p];
          });
        }
      });
      var refFunc = function refFunc(c) {
        _this2.currentRef = c;
      };
      // component 为空时调用子级的。。
      var className = props.className,
          children = props.children;

      if (!component && typeof children !== 'string') {
        if (!children) {
          return children;
        }
        var childrenProps = children.props;

        var _ref2 = childrenProps || {},
            childStyle = _ref2.style,
            childClass = _ref2.className;
        // 合并 style 与 className。


        var newStyle = (0,helpers_extends/* default */.Z)({}, childStyle, props.style);
        var newClassName = className ? className + ' ' + childClass : childClass;
        return react.cloneElement(children, { style: newStyle, ref: refFunc, className: newClassName });
      }
      return react.createElement(component, (0,helpers_extends/* default */.Z)({
        ref: refFunc
      }, props, componentProps));
    }
  }]);

  return TweenOne;
}(react.Component);

TweenOne_TweenOne.propTypes = {
  component: (prop_types_default()).any,
  componentProps: (prop_types_default()).any,
  animation: objectOrArray,
  children: (prop_types_default()).any,
  style: (prop_types_default()).object,
  paused: (prop_types_default()).bool,
  reverse: (prop_types_default()).bool,
  reverseDelay: (prop_types_default()).number,
  yoyo: (prop_types_default()).bool,
  repeat: (prop_types_default()).number,
  moment: (prop_types_default()).number,
  attr: (prop_types_default()).string,
  onChange: (prop_types_default()).func,
  resetStyle: (prop_types_default()).bool,
  forcedJudg: (prop_types_default()).object
};
TweenOne_TweenOne.defaultProps = {
  component: 'div',
  componentProps: {},
  reverseDelay: 0,
  repeat: 0,
  attr: 'style',
  onChange: TweenOne_noop
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.setForcedJudg = function (props) {
    Object.keys(_this3.forced).forEach(function (key) {
      delete _this3[key];
      delete _this3.forced[key];
    });
    if (props.forcedJudg) {
      Object.keys(props.forcedJudg).forEach(function (key) {
        if (!_this3[key]) {
          _this3[key] = props.forcedJudg[key];
          _this3.forced[key] = 1;
        }
      });
    }
  };

  this.setDefault = function (props) {
    _this3.moment = props.moment || 0;
    _this3.startMoment = props.moment || 0;
    _this3.startTime = es_ticker.time;
  };

  this.restart = function () {
    if (!_this3.tween) {
      return;
    }
    _this3.startMoment = _this3.moment;
    _this3.startTime = es_ticker.time;
    _this3.tween.reverse = _this3.reverse;
    _this3.tween.reverseStartTime = _this3.startMoment;
    _this3.raf();
    _this3.play();
  };

  this.start = function () {
    _this3.updateAnim = false;
    var props = _this3.props;
    if (props.animation && Object.keys(props.animation).length) {
      _this3.setDefault(props);
      _this3.tween = new es_Tween(_this3.dom, props.animation, props.attr);
      _this3.tween.reverse = _this3.reverse;
      // 预先注册 raf, 初始动画数值。
      _this3.raf();
      // 开始动画
      _this3.play();
    } else {
      _this3.tween = null;
    }
  };

  this.play = function () {
    _this3.cancelRequestAnimationFrame();
    if (_this3.paused) {
      return;
    }
    _this3.rafID = es_ticker.add(_this3.raf);
  };

  this.frame = function () {
    var yoyo = _this3.props.yoyo;
    var repeat = _this3.props.repeat;

    var totalTime = repeat === -1 ? Number.MAX_VALUE : _this3.tween.totalTime * (repeat + 1);
    repeat = repeat >= 0 ? repeat : Number.MAX_VALUE;
    var moment = es_ticker.time - _this3.startTime + _this3.startMoment;
    if (_this3.reverse) {
      moment = (_this3.startMoment || 0) - (es_ticker.time - _this3.startTime);
    }
    moment = moment > totalTime ? totalTime : moment;
    moment = moment <= 0 ? 0 : moment;
    var repeatNum = Math.floor(moment / _this3.tween.totalTime) || 0;
    repeatNum = repeatNum > repeat ? repeat : repeatNum;
    var tweenMoment = moment - _this3.tween.totalTime * repeatNum;
    tweenMoment = tweenMoment < perFrame && !_this3.reverse && totalTime >= perFrame ? 0 : tweenMoment;
    if (repeat && moment && moment - _this3.tween.totalTime * repeatNum < perFrame) {
      // 在重置样式之前补 complete；
      _this3.tween.frame(_this3.tween.totalTime * repeatNum);
    }
    if (moment < _this3.moment && !_this3.reverse || repeat !== 0 && repeatNum && repeatNum !== _this3.repeatNum) {
      // 在 form 状态下，暂停时拉 moment 时，start 有值，，往返方向播放时，在 delay 的时间没有处理。。
      // 与上面的处理一样，删除 start ，重新走一遍 start。。
      _this3.tween.resetAnimData();
      _this3.tween.resetDefaultStyle();
    }
    var yoyoReverse = yoyo && repeatNum % 2;
    if (yoyoReverse) {
      tweenMoment = _this3.tween.totalTime - tweenMoment;
    }
    _this3.tween.onChange = function (e) {
      var cb = (0,helpers_extends/* default */.Z)({}, e, {
        timelineMode: ''
      });

      if (_this3.moment === _this3.startMoment && !_this3.reverse && !e.index && e.mode === 'onStart' || _this3.reverse) {
        cb.timelineMode = 'onTimelineStart';
      } else if (moment >= totalTime && !_this3.reverse || !moment && _this3.reverse) {
        cb.timelineMode = 'onTimelineComplete';
      } else if (repeatNum !== _this3.timelineRepeatNum) {
        cb.timelineMode = 'onTimelineRepeat';
      } else {
        cb.timelineMode = 'onTimelineUpdate';
      }
      _this3.timelineRepeatNum = repeatNum;
      _this3.props.onChange(cb);
    };
    _this3.moment = moment;
    _this3.repeatNum = repeatNum;
    _this3.tween.frame(tweenMoment);
  };

  this.raf = function () {
    var tween = _this3.tween;
    _this3.frame();
    if (tween !== _this3.tween) {
      // 在 onComplete 时更换动画时，raf 没结束，所以需要强制退出，避逸两个时间的冲突。
      return null;
    }
    var repeat = _this3.props.repeat;

    var totalTime = repeat === -1 ? Number.MAX_VALUE : _this3.tween.totalTime * (repeat + 1);
    if (_this3.moment >= totalTime && !_this3.reverse || _this3.paused || _this3.reverse && _this3.moment === 0) {
      return _this3.cancelRequestAnimationFrame();
    }
    return null;
  };

  this.cancelRequestAnimationFrame = function () {
    es_ticker.clear(_this3.rafID);
    _this3.rafID = -1;
  };
};

TweenOne_TweenOne.isTweenOne = true;
/* harmony default export */ var es_TweenOne = (polyfill(TweenOne_TweenOne));
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/node_modules/rc-tween-one/es/TweenOneGroup.js













function TweenOneGroup_noop() {}

var TweenOneGroup = function (_Component) {
  (0,inherits/* default */.Z)(TweenOneGroup, _Component);

  (0,createClass/* default */.Z)(TweenOneGroup, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, _ref) {
      var prevProps = _ref.prevProps,
          $self = _ref.$self;

      var nextState = {
        prevProps: props
      };
      if (prevProps && props !== prevProps) {
        var nextChildren = util_toArrayChildren(props.children);
        if (Object.keys($self.isTween).length && !props.exclusive) {
          $self.animQueue.push(nextChildren);
          return nextState;
        }
        var currentChildren = util_toArrayChildren($self.currentChildren);
        nextState.children = $self.changeChildren(nextChildren, currentChildren);
      }
      return nextState; // eslint-disable-line
    }
  }]);

  function TweenOneGroup(props) {
    (0,classCallCheck/* default */.Z)(this, TweenOneGroup);

    var _this = (0,possibleConstructorReturn/* default */.Z)(this, (TweenOneGroup.__proto__ || Object.getPrototypeOf(TweenOneGroup)).call(this, props));

    TweenOneGroup_initialiseProps.call(_this);

    _this.keysToEnter = [];
    _this.keysToLeave = [];
    _this.saveTweenTag = {};
    _this.onEnterBool = false;
    _this.animQueue = [];
    _this.isTween = {};
    // 第一进入，appear 为 true 时默认用 enter 或 tween-one 上的效果
    var children = util_toArrayChildren(getChildrenFromProps(_this.props));
    _this.currentChildren = util_toArrayChildren(getChildrenFromProps(_this.props));
    _this.state = {
      children: children,
      $self: _this
    };
    return _this;
  }

  (0,createClass/* default */.Z)(TweenOneGroup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.onEnterBool = true;
    }
  }, {
    key: 'changeChildren',
    value: function changeChildren(nextChildren, currentChildren) {
      var _this2 = this;

      var newChildren = mergeChildren(currentChildren, nextChildren);
      this.keysToEnter = [];
      this.keysToLeave = [];
      nextChildren.forEach(function (c) {
        if (!c) {
          return;
        }
        var key = c.key;
        var hasPrev = findChildInChildrenByKey(currentChildren, key);
        // 如果当前 key 已存在 saveTweenTag 里，，刷新 child;
        if (_this2.saveTweenTag[key]) {
          _this2.saveTweenTag[key] = react.cloneElement(_this2.saveTweenTag[key], {}, c);
        }
        if (!hasPrev && key) {
          _this2.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (c) {
        if (!c) {
          return;
        }
        var key = c.key;
        var hasNext = findChildInChildrenByKey(nextChildren, key);
        if (!hasNext && key) {
          _this2.keysToLeave.push(key);
          delete _this2.saveTweenTag[key];
        }
      });
      return newChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.state.children;
      // fix in strict mode https://github.com/ant-design/ant-motion/issues/323;

      this.currentChildren = children;
      var childrenToRender = this.getChildrenToRender(children);

      var _props = this.props,
          component = _props.component,
          componentProps = _props.componentProps,
          appear = _props.appear,
          enter = _props.enter,
          leave = _props.leave,
          animatingClassName = _props.animatingClassName,
          onEnd = _props.onEnd,
          exclusive = _props.exclusive,
          resetStyle = _props.resetStyle,
          props = (0,objectWithoutProperties/* default */.Z)(_props, ['component', 'componentProps', 'appear', 'enter', 'leave', 'animatingClassName', 'onEnd', 'exclusive', 'resetStyle']);

      if (!component) {
        return childrenToRender[0] || null;
      }
      return (0,react.createElement)(component, (0,helpers_extends/* default */.Z)({}, props, componentProps), childrenToRender);
    }
  }]);

  return TweenOneGroup;
}(react.Component);

var TweenOneGroup_initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChange = function (animation, key, type, obj) {
    var length = util_dataToArray(animation).length;
    var tag = obj.target;
    var classIsSvg = typeof tag.className === 'object' && 'baseVal' in tag.className;
    var isEnter = type === 'enter' || type === 'appear';
    if (obj.mode === 'onStart') {
      if (classIsSvg) {
        tag.className.baseVal = _this3.setClassName(tag.className.baseVal, isEnter);
      } else {
        tag.className = _this3.setClassName(tag.className, isEnter);
      }
    } else if (obj.index === length - 1 && obj.mode === 'onComplete') {
      delete _this3.isTween[key];
      if (classIsSvg) {
        tag.className.baseVal = tag.className.baseVal.replace(_this3.props.animatingClassName[isEnter ? 0 : 1], '').trim();
      } else {
        tag.className = tag.className.replace(_this3.props.animatingClassName[isEnter ? 0 : 1], '').trim();
      }
      if (type === 'enter') {
        _this3.keysToEnter.splice(_this3.keysToEnter.indexOf(key), 1);
        if (!_this3.keysToEnter.length) {
          _this3.reAnimQueue();
        }
      } else if (type === 'leave') {
        _this3.keysToLeave.splice(_this3.keysToLeave.indexOf(key), 1);
        _this3.currentChildren = _this3.currentChildren.filter(function (child) {
          return key !== child.key;
        });
        if (!_this3.keysToLeave.length) {
          var currentChildrenKeys = _this3.currentChildren.map(function (item) {
            return item.key;
          });
          Object.keys(_this3.saveTweenTag).forEach(function ($key) {
            if (currentChildrenKeys.indexOf($key) === -1) {
              delete _this3.saveTweenTag[$key];
            }
          });
          _this3.setState({
            children: _this3.currentChildren
          }, _this3.reAnimQueue);
        }
      }
      var _obj = { key: key, type: type };
      _this3.props.onEnd(_obj);
    }
  };

  this.setClassName = function (name, isEnter) {
    var className = name.replace(_this3.props.animatingClassName[isEnter ? 1 : 0], '').trim();
    if (className.indexOf(_this3.props.animatingClassName[isEnter ? 0 : 1]) === -1) {
      className = (className + ' ' + _this3.props.animatingClassName[isEnter ? 0 : 1]).trim();
    }
    return className;
  };

  this.getTweenChild = function (child) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var key = child.key;
    _this3.saveTweenTag[key] = react.createElement(es_TweenOne, (0,helpers_extends/* default */.Z)({}, props, {
      key: key,
      component: null
    }), child);
    return _this3.saveTweenTag[key];
  };

  this.getCoverAnimation = function (child, i, type) {
    var animation = void 0;
    animation = type === 'leave' ? _this3.props.leave : _this3.props.enter;
    if (type === 'appear') {
      var appear = util_transformArguments(_this3.props.appear, child.key, i);
      animation = appear && _this3.props.enter || null;
    }
    var animate = util_transformArguments(animation, child.key, i);
    var onChange = _this3.onChange.bind(_this3, animate, child.key, type);
    var props = {
      key: child.key,
      animation: animate,
      onChange: onChange,
      resetStyle: _this3.props.resetStyle
    };
    if (_this3.keysToEnter.concat(_this3.keysToLeave).indexOf(child.key) >= 0 || !_this3.onEnterBool && animation) {
      if (!_this3.saveTweenTag[child.key]) {
        _this3.isTween[child.key] = type;
      }
    }
    var children = _this3.getTweenChild(child, props);
    return children;
  };

  this.getChildrenToRender = function (children) {
    return children.map(function (child, i) {
      if (!child || !child.key) {
        return child;
      }
      var key = child.key;
      if (_this3.keysToLeave.indexOf(key) >= 0) {
        return _this3.getCoverAnimation(child, i, 'leave');
      } else if ((_this3.keysToEnter.indexOf(key) >= 0 || _this3.isTween[key] && _this3.keysToLeave.indexOf(key) === -1) && !(_this3.isTween[key] === 'enter' && _this3.saveTweenTag[key])) {
        /**
         * 1. 在 key 在 enter 里。
         * 2. 出场未结束，触发进场, this.isTween[key] 为 leave, key 在 enter 里。
         * 3. 状态为 enter 且 tweenTag 里有值时，不执行重载动画属性，直接调用 tweenTag 里的。
         */
        return _this3.getCoverAnimation(child, i, 'enter');
      } else if (!_this3.onEnterBool) {
        return _this3.getCoverAnimation(child, i, 'appear');
      }
      return _this3.saveTweenTag[key];
    });
  };

  this.reAnimQueue = function () {
    if (!Object.keys(_this3.isTween).length && _this3.animQueue.length) {
      var children = _this3.changeChildren(_this3.animQueue[_this3.animQueue.length - 1], _this3.state.children);
      _this3.setState({
        children: children
      });
      _this3.animQueue = [];
    }
  };
};

TweenOneGroup.propTypes = {
  component: (prop_types_default()).any,
  componentProps: (prop_types_default()).object,
  children: (prop_types_default()).any,
  style: (prop_types_default()).object,
  appear: (prop_types_default()).bool,
  enter: (prop_types_default()).any,
  leave: (prop_types_default()).any,
  animatingClassName: (prop_types_default()).array,
  onEnd: (prop_types_default()).func,
  resetStyle: (prop_types_default()).bool,
  exclusive: (prop_types_default()).bool
};

TweenOneGroup.defaultProps = {
  component: 'div',
  componentProps: {},
  appear: true,
  animatingClassName: ['tween-one-entering', 'tween-one-leaving'],
  enter: { x: 50, opacity: 0, type: 'from' },
  leave: { x: -50, opacity: 0 },
  onEnd: TweenOneGroup_noop,
  resetStyle: true,
  exclusive: false
};
TweenOneGroup.isTweenOneGroup = true;
/* harmony default export */ var es_TweenOneGroup = (polyfill(TweenOneGroup));
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/node_modules/rc-tween-one/es/index.js
// export this package's api







es_TweenOne.TweenOneGroup = es_TweenOneGroup;
es_TweenOne.easing = easing;
es_TweenOne.plugins = plugins;
es_TweenOne.ticker = es_ticker;
es_TweenOne.Tween = es_Tween;

/* harmony default export */ var es = ((/* unused pure expression or super */ null && (TweenOne)));

var rc_tween_one_es_TweenOneGroup = (/* unused pure expression or super */ null && (group));

var es_easing = (/* unused pure expression or super */ null && (_easing));

var es_plugins = (/* unused pure expression or super */ null && (_plugins));

var rc_tween_one_es_ticker = (/* unused pure expression or super */ null && (_ticker));

var rc_tween_one_es_Tween = es_Tween;
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/es/ScrollParallax.js
















var tickerId = 0;

function playScaleToArray(playScale) {
  if (Array.isArray(playScale)) {
    if (playScale.length === 2) {
      return playScale;
    }
    return [playScale[0] || 0, playScale[1] || 1];
  } else if (playScale) {
    return [playScale, 1];
  }
  return [0, 1];
}

var ScrollParallax = function (_React$Component) {
  (0,inherits/* default */.Z)(ScrollParallax, _React$Component);

  (0,createClass/* default */.Z)(ScrollParallax, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, _ref) {
      var prevProps = _ref.prevProps,
          $self = _ref.$self;

      var nextState = {
        prevProps: props
      };
      if (prevProps && props !== prevProps) {
        var equal = objectEqual(prevProps.animation, props.animation);
        if (!equal) {
          $self.setDefaultData(props.animation || {});
          $self.timeline.resetAnimData();
          $self.timeline.setDefaultData($self.defaultTweenData);
        }
      }
      return nextState; // eslint-disable-line
    }
  }]);

  function ScrollParallax(props) {
    (0,classCallCheck/* default */.Z)(this, ScrollParallax);

    var _this = (0,possibleConstructorReturn/* default */.Z)(this, (ScrollParallax.__proto__ || Object.getPrototypeOf(ScrollParallax)).call(this, props));

    _this.setDefaultData = function (_vars) {
      var vars = dataToArray(_vars);
      var varsForIn = function varsForIn(item, i) {
        var playScale = playScaleToArray(item.playScale).map(function (data) {
          return data * _this.clientHeight;
        });
        var aItem = (0,helpers_extends/* default */.Z)({}, item);
        delete aItem.playScale;
        var cItem = (0,helpers_extends/* default */.Z)({}, item);
        delete cItem.playScale;
        cItem.delay = playScale[0];
        aItem.delay = playScale[0];
        cItem.duration = playScale[1] - playScale[0];
        aItem.duration = playScale[1] - playScale[0];
        cItem.onStart = null;
        cItem.onUpdate = null;
        cItem.onComplete = null;
        cItem.onRepeat = null;
        aItem.onStart = aItem.onStart || noop;
        aItem.onComplete = aItem.onComplete || noop;
        aItem.onUpdate = aItem.onUpdate || noop;
        aItem.onStartBack = aItem.onStartBack || noop;
        aItem.onCompleteBack = aItem.onCompleteBack || noop;
        _this.defaultTweenData[i] = cItem;
        _this.defaultData[i] = aItem;
      };
      vars.forEach(varsForIn);
    };

    _this.resizeEventListener = function () {
      if (_this.defaultData[_this.defaultData.length - 1] && _this.defaultData[_this.defaultData.length - 1].onCompleteBool && !_this.props.always) {
        return;
      }
      _this.scrollTop = currentScrollTop();
      _this.target = _this.props.targetId && document.getElementById(_this.props.targetId);
      _this.clientHeight = _this.target ? _this.target.clientHeight : windowHeight();
      _this.setDefaultData(_this.props.animation || {});
      if (_this.timeline) {
        _this.timeline.resetDefaultStyle();
      }
      _this.timeline = new rc_tween_one_es_Tween(_this.dom, _this.defaultTweenData);
      _this.timeline.init();
      _this.scrollEventListener();
    };

    _this.scrollEventListener = function () {
      var scrollTop = _this.target ? _this.target.scrollTop : currentScrollTop();
      _this.clientHeight = _this.target ? _this.target.clientHeight : windowHeight();
      var dom = _this.props.location ? document.getElementById(_this.props.location) : _this.dom;
      if (!dom) {
        throw new Error('"location" is null');
      }
      var targetTop = _this.target ? _this.target.getBoundingClientRect().top : 0;
      var offsetTop = dom.getBoundingClientRect().top + scrollTop - targetTop;
      var elementShowHeight = scrollTop - offsetTop + _this.clientHeight;
      var currentShow = _this.scrollTop - offsetTop + _this.clientHeight;
      _this.defaultData.forEach(function (item, i) {
        var duration = _this.defaultData.map(function (c, ii) {
          return ii < i && c.delay + c.duration || 0;
        }).reduce(function (a, b) {
          return a + b;
        });
        var noUpdate = void 0;
        if (elementShowHeight <= item.delay + duration) {
          if (!item.onCompleteBackBool && item.onStartBool) {
            item.onCompleteBackBool = true;
            noUpdate = true;
            item.onCompleteBack();
          }
        } else {
          item.onCompleteBackBool = false;
        }
        if (elementShowHeight >= item.delay + duration) {
          if (!item.onStartBool) {
            item.onStartBool = true;
            noUpdate = true;
            item.onStart();
          }
        } else {
          item.onStartBool = false;
        }

        if (elementShowHeight <= item.delay + item.duration + duration) {
          if (!item.onStartBackBool && item.onCompleteBool) {
            item.onStartBackBool = true;
            noUpdate = true;
            item.onStartBack();
          }
        } else {
          item.onStartBackBool = false;
        }

        if (elementShowHeight >= item.delay + item.duration + duration) {
          if (!item.onCompleteBool) {
            item.onCompleteBool = true;
            noUpdate = true;
            item.onComplete();
          }
        } else {
          item.onCompleteBool = false;
        }
        if (elementShowHeight >= item.delay + duration && elementShowHeight <= item.delay + item.duration + duration && !noUpdate) {
          item.onUpdate(elementShowHeight / (item.delay + item.duration + duration));
        }
      });
      es_ticker.clear(_this.tickerId);
      _this.tickerId = 'scrollParallax' + Date.now() + '-' + tickerId;
      tickerId++;
      if (tickerId >= Number.MAX_VALUE) {
        tickerId = 0;
      }
      var startFrame = es_ticker.frame;
      es_ticker.wake(_this.tickerId, function () {
        var moment = (es_ticker.frame - startFrame) * es_ticker.perFrame;
        var ratio = tween_functions_default().easeOutQuad(moment, 0.08, 1, 300);
        _this.timeline.frame(currentShow + ratio * (elementShowHeight - currentShow));
        if (moment >= 300) {
          es_ticker.clear(_this.tickerId);
        }
      });

      _this.scrollTop = scrollTop;
      // 如果不一直靠滚动来执行动画，always=false而且动画全执行完了，，删除scrollEvent;
      if (_this.defaultData[_this.defaultData.length - 1].onCompleteBool && _this.eventType && !_this.props.always) {
        es_EventDispatcher.removeEventListener(_this.eventType, _this.scrollEventListener, _this.target);
      }
    };

    _this.scrollTop = 0;
    _this.defaultTweenData = [];
    _this.defaultData = [];
    _this.state = {
      $self: _this
    };
    return _this;
  }

  (0,createClass/* default */.Z)(ScrollParallax, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.dom = react_dom.findDOMNode(this);
      var date = Date.now();
      var length = es_EventDispatcher._listeners.scroll ? es_EventDispatcher._listeners.scroll.length : 0;
      this.eventType = 'scroll.scrollEvent' + date + length;
      this.eventResize = 'resize.resizeEvent' + date + length;
      this.resizeEventListener();
      es_EventDispatcher.addEventListener(this.eventResize, this.resizeEventListener, this.target);
      // 预注册;
      this.timeline.frame(0);

      this.scrollEventListener();
      es_EventDispatcher.addEventListener(this.eventType, this.scrollEventListener, this.target);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      es_EventDispatcher.removeEventListener(this.eventType, this.scrollEventListener, this.target);
      es_EventDispatcher.removeEventListener(this.eventResize, this.resizeEventListener, this.target);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          animation = _props.animation,
          always = _props.always,
          component = _props.component,
          location = _props.location,
          targetId = _props.targetId,
          componentProps = _props.componentProps,
          props = (0,objectWithoutProperties/* default */.Z)(_props, ['animation', 'always', 'component', 'location', 'targetId', 'componentProps']);

      var style = (0,helpers_extends/* default */.Z)({}, props.style);
      Object.keys(style).forEach(function (p) {
        if (p.indexOf('filter') >= 0 || p.indexOf('Filter') >= 0) {
          // ['Webkit', 'Moz', 'Ms', 'ms'].forEach(prefix=> style[`${prefix}Filter`] = style[p]);
          var transformArr = ['Webkit', 'Moz', 'Ms', 'ms'];
          for (var i = 0; i < transformArr.length; i++) {
            style[transformArr[i] + 'Filter'] = style[p];
          }
        }
      });
      props.style = style;
      return react.createElement(this.props.component, (0,helpers_extends/* default */.Z)({}, props, componentProps));
    }
  }]);

  return ScrollParallax;
}(react.Component);

ScrollParallax.propTypes = {
  component: (prop_types_default()).any,
  animation: (prop_types_default()).any,
  always: (prop_types_default()).bool,
  location: (prop_types_default()).string,
  children: (prop_types_default()).any,
  className: (prop_types_default()).string,
  style: (prop_types_default()).any,
  id: (prop_types_default()).string,
  targetId: (prop_types_default()).string,
  componentProps: (prop_types_default()).object
};
ScrollParallax.defaultProps = {
  component: 'div',
  always: true,
  componentProps: {}
};


ScrollParallax.isScrollParallax = true;
/* harmony default export */ var es_ScrollParallax = (ScrollParallax);
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/es/ScrollLink.js






/**
 * Created by jljsj on 16/1/13.
 */








var scrollLinkLists = [];

var ScrollLink = function (_React$Component) {
  (0,inherits/* default */.Z)(ScrollLink, _React$Component);

  function ScrollLink(props) {
    (0,classCallCheck/* default */.Z)(this, ScrollLink);

    var _this = (0,possibleConstructorReturn/* default */.Z)(this, (ScrollLink.__proto__ || Object.getPrototypeOf(ScrollLink)).call(this, props));

    _this.onClick = function (e) {
      e.preventDefault();
      es_EventDispatcher.removeAllType('scroll.scrollAnchorEvent');
      _this.elementDom = document.getElementById(_this.props.to);;
      if (_this.rafID !== -1 || !_this.elementDom) {
        return;
      }
      _this.scrollTop = _this.target ? _this.target.scrollTop : currentScrollTop();
      _this.initTime = Date.now();
      _this.rafID = raf_default()(_this.raf);
      scrollLinkLists.forEach(function (item) {
        if (item !== _this) {
          item.remActive();
        }
      });
      _this.addActive();
    };

    _this.getToTop = function () {
      var elementRect = _this.elementDom && _this.elementDom.getBoundingClientRect();
      _this.clientHeight = _this.target ? _this.target.clientHeight : windowHeight();
      var targetTop = _this.target ? _this.target.getBoundingClientRect().top : 0;
      var toTop = Math.round(elementRect.top + currentScrollTop()) - _this.props.offsetTop - targetTop;
      var t = transformArguments(_this.props.showHeightActive)[0];
      var toShow = t.match('%') ? _this.clientHeight * parseFloat(t) / 100 : t;
      return _this.props.toShowHeight ? toTop - toShow + 0.5 : toTop;
    };

    _this.cancelRequestAnimationFrame = function () {
      raf_default().cancel(_this.rafID);
      _this.rafID = -1;
    };

    _this.addActive = function () {
      if (!_this.state.active) {
        var obj = {
          target: _this.dom,
          to: _this.props.to
        };
        _this.props.onFocus(obj);
        _this.setState({
          active: true
        }, function () {
          if (_this.props.toHash) {
            var link = '#' + _this.props.to;
            history.pushState(null, window.title, link); // eslint-disable-line
          }
        });
      }
    };

    _this.raf = function () {
      if (_this.rafID === -1) {
        return;
      }
      var duration = _this.props.duration;
      var now = Date.now();
      var progressTime = now - _this.initTime > duration ? duration : now - _this.initTime;
      // 动画时也会改变高度，动态获取
      var easeValue = (tween_functions_default())[_this.props.ease](progressTime, _this.scrollTop, _this.getToTop(), duration);
      if (_this.target) {
        _this.target.scrollTop = easeValue;
      } else {
        window.scrollTo(window.scrollX, easeValue);
      }
      if (progressTime === duration) {
        _this.elementDom = null;
        _this.cancelRequestAnimationFrame();
        es_EventDispatcher.reAllType('scroll.scrollAnchorEvent');
      } else {
        _this.rafID = raf_default()(_this.raf);
      }
    };

    _this.remActive = function () {
      if (_this.state.active) {
        var obj = {
          target: _this.dom,
          to: _this.props.to
        };
        _this.props.onBlur(obj);
        _this.setState({
          active: false
        });
      }
    };

    _this.scrollEventListener = function () {
      var elementDom = document.getElementById(_this.props.to);
      if (!elementDom) {
        return;
      }
      // 滚动时会改变高度, 动态获取高度
      var clientHeight = _this.target ? _this.target.clientHeight : windowHeight();
      var elementRect = elementDom.getBoundingClientRect();
      var elementClientHeight = elementDom.clientHeight;
      var targetTop = _this.target ? _this.target.getBoundingClientRect().top : 0;
      var top = Math.round(-elementRect.top + targetTop);
      var showHeightActive = transformArguments(_this.props.showHeightActive);
      var startShowHeight = showHeightActive[0].toString().indexOf('%') >= 0 ? parseFloat(showHeightActive[0]) / 100 * clientHeight : parseFloat(showHeightActive[0]);
      var endShowHeight = showHeightActive[1].toString().indexOf('%') >= 0 ? parseFloat(showHeightActive[1]) / 100 * clientHeight : parseFloat(showHeightActive[1]);
      if (top >= Math.round(-startShowHeight) && top < Math.round(elementClientHeight - endShowHeight)) {
        _this.addActive();
      } else {
        _this.remActive();
      }
    };

    _this.rafID = -1;
    _this.state = {
      active: false
    };
    return _this;
  }

  (0,createClass/* default */.Z)(ScrollLink, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.dom = react_dom.findDOMNode(this);
      this.target = this.props.targetId && document.getElementById(this.props.targetId);
      scrollLinkLists.push(this);
      var date = Date.now();
      var length = es_EventDispatcher._listeners.scroll ? es_EventDispatcher._listeners.scroll.length : 0;
      this.eventType = 'scroll.scrollAnchorEvent' + date + length;
      es_EventDispatcher.addEventListener(this.eventType, this.scrollEventListener, this.target);
      // 第一次进入；等全部渲染完成后执行;
      setTimeout(function () {
        _this2.scrollEventListener();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      scrollLinkLists = scrollLinkLists.filter(function (item) {
        return item !== _this3;
      });
      es_EventDispatcher.removeEventListener(this.eventType, this.scrollEventListener, this.target);
      this.cancelRequestAnimationFrame();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          component = _props.component,
          onClick = _props.onClick,
          duration = _props.duration,
          tagActive = _props.active,
          showHeightActive = _props.showHeightActive,
          ease = _props.ease,
          toShowHeight = _props.toShowHeight,
          offsetTop = _props.offsetTop,
          targetId = _props.targetId,
          to = _props.to,
          toHash = _props.toHash,
          componentProps = _props.componentProps,
          props = (0,objectWithoutProperties/* default */.Z)(_props, ['component', 'onClick', 'duration', 'active', 'showHeightActive', 'ease', 'toShowHeight', 'offsetTop', 'targetId', 'to', 'toHash', 'componentProps']);

      var active = this.state.active ? tagActive : '';
      props.onClick = function (e) {
        onClick(e);
        _this4.onClick(e);
      };
      var reg = new RegExp(active, 'ig');
      var className = props.className || '';
      props.className = className.indexOf(active) === -1 ? (className + ' ' + active).trim() : className.replace(reg, '').trim();
      return (0,react.createElement)(this.props.component, (0,helpers_extends/* default */.Z)({}, props, componentProps));
    }
  }]);

  return ScrollLink;
}(react.Component);

ScrollLink.propTypes = {
  component: (prop_types_default()).any,
  children: (prop_types_default()).any,
  className: (prop_types_default()).string,
  style: (prop_types_default()).any,
  offsetTop: (prop_types_default()).number,
  duration: (prop_types_default()).number,
  active: (prop_types_default()).string,
  to: (prop_types_default()).string,
  targetId: (prop_types_default()).string,
  showHeightActive: (prop_types_default()).any,
  toShowHeight: (prop_types_default()).bool,
  ease: (prop_types_default()).string,
  onClick: (prop_types_default()).func,
  onFocus: (prop_types_default()).func,
  onBlur: (prop_types_default()).func,
  toHash: (prop_types_default()).bool,
  componentProps: (prop_types_default()).object
};
ScrollLink.defaultProps = {
  component: 'div',
  offsetTop: 0,
  duration: 450,
  active: 'active',
  showHeightActive: '50%',
  ease: 'easeInOutQuad',
  toHash: false,
  onClick: noop,
  onFocus: noop,
  onBlur: noop,
  componentProps: {}
};

ScrollLink.isScrollLink = true;

/* harmony default export */ var es_ScrollLink = (ScrollLink);
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/es/ScrollScreen.js






// 设置默认数据
function ScrollScreen_defaultData(vars) {
  return {
    ease: vars.ease || 'easeInOutQuad',
    duration: vars.duration || 450,
    docHeight: vars.docHeight,
    scrollInterval: vars.scrollInterval || 1000,
    loop: vars.loop || false,
    location: vars.location || []
  };
}

var passive = getPassive();

var ScrollScreenClass = function ScrollScreenClass() {
  var _this = this;

  (0,classCallCheck/* default */.Z)(this, ScrollScreenClass);

  this.init = function (vars) {
    _this.vars = ScrollScreen_defaultData(vars || {});
    _this.rafID = -1;
    _this.toHeight = -1;
    _this.num = 0;
    if (windowIsUndefined) {
      return;
    }
    es_EventDispatcher.addEventListener('wheel.scrollWheel', _this.onWheel, null, passive);
    // dom 在 didMount 后高度没出来，加 setTimeout; 
    setTimeout(_this.startScroll);
  };

  this.unMount = function () {
    es_EventDispatcher.removeEventListener('wheel.scrollWheel', _this.onWheel);
  };

  this.setCurrentNNum = function () {
    var mapped = _this.mapped;
    var winHeight = windowHeight();
    if (!mapped.length) {
      // 如果是空，采用一屏一滚;
      var docHeight = _this.vars.docHeight || document.body.scrollHeight;
      var scrollTopNum = _this.scrollTop / winHeight;
      var docTopNum = docHeight / winHeight;
      var docEndScreenHeight = docHeight % winHeight;
      var currentOffset = _this.scrollTop % winHeight;
      var currentTopScreen = Math.floor(scrollTopNum);
      // 判断最后一屏是否过中间 
      var currentScreen = Math.ceil(scrollTopNum) === Math.floor(docTopNum) ? currentOffset / docEndScreenHeight : currentOffset / winHeight;
      _this.num = Math.round(currentTopScreen + currentScreen);
      _this.toHeight = _this.num * winHeight;
    } else {
      mapped.forEach(function (dom, i) {
        var domOffsetTop = dom.offsetTop;
        var domHeight = dom.getBoundingClientRect().height;
        if (_this.scrollTop >= domOffsetTop && _this.scrollTop < domOffsetTop + domHeight) {
          var exceed = (_this.scrollTop - dom.offsetTop) / domHeight;
          // 当前屏超过80%到下半屏, scrollOverPack 会动态改高度；
          exceed = exceed > 0.8 ? 1 : 0;
          _this.num = i + exceed;
          _this.toHeight = domOffsetTop + exceed * domHeight;
        }
      });
      var tooNum = void 0;
      var endDom = mapped[mapped.length - 1];
      var startDom = mapped[0];
      var startManyHeight = startDom.offsetTop;

      if (_this.scrollTop > endDom.offsetTop + endDom.getBoundingClientRect().height) {
        tooNum = Math.ceil((_this.scrollTop - endDom.offsetTop - endDom.getBoundingClientRect().height) / winHeight);
        _this.num = mapped.length + tooNum;
        _this.toHeight = endDom.offsetTop + endDom.getBoundingClientRect().height + tooNum * winHeight;
      } else if (_this.scrollTop < startManyHeight) {
        var t = _this.scrollTop - startManyHeight;
        tooNum = t > 0 ? Math.ceil(t / winHeight) : Math.floor(t / winHeight);
        _this.num = tooNum;
        var tc = Math.ceil(startManyHeight / winHeight);
        _this.toHeight = (tc + tooNum) * winHeight;
      }
    }
  };

  this.startScroll = function () {
    var mapped = _this.vars.location.map(function (str) {
      return document.getElementById(str);
    }).filter(function (c) {
      return c;
    });
    _this.mapped = mapped;
    _this.scrollTop = currentScrollTop();
    _this.animEndScrollTop = _this.scrollTop;
    _this.setCurrentNNum();
    if (mapped[0] && mapped[0].offsetTop >= windowHeight()) {
      console.warn('Warning: The first screen is not at the top, which may lead to poor scrolling effect, "' + _this.vars.location[0] + '" offsetTop ' + mapped[0].offsetTop + 'px.');
    }
    if (_this.toHeight !== _this.scrollTop) {
      _this.initTime = Date.now();
      _this.rafID = raf_default()(_this.raf);
    } else {
      _this.toHeight = -1;
    }
  };

  this.raf = function () {
    var duration = _this.vars.duration;
    var now = Date.now();
    var progressTime = now - _this.initTime > duration ? duration : now - _this.initTime;
    var easeValue = (tween_functions_default())[_this.vars.ease](progressTime, _this.scrollTop, _this.toHeight, duration);
    _this.animEndScrollTop = easeValue;
    window.scrollTo(window.scrollX, easeValue);
    if (progressTime === duration) {
      _this.cancelRequestAnimationFrame();
      setTimeout(function () {
        _this.toHeight = -1;
      }, _this.vars.scrollInterval);
    } else {
      _this.rafID = raf_default()(_this.raf);
    }
  };

  this.cancelRequestAnimationFrame = function () {
    raf_default().cancel(_this.rafID);
    _this.rafID = -1;
  };

  this.getComputedStyle = function (dom) {
    return dom && document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(dom) : {};
  };

  this.isScroll = function (dom, deltaY) {
    var style = _this.getComputedStyle(dom);
    var overflow = style.overflow;
    var overflowY = style.overflowY;
    var isScrollOverflow = overflow === 'auto' || overflow === 'scroll' || overflow === 'overlay' || overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay';
    // dom.parentNode === document 解决在滚动条上滚动取不到 body;
    if (dom === document.body || !dom || dom.parentNode === document) {
      return false;
    } else if (dom.scrollHeight > dom.offsetHeight && isScrollOverflow && dom.scrollTop + dom.offsetHeight + deltaY < dom.scrollHeight && dom.scrollTop + deltaY > 0) {
      return true;
    }
    return _this.isScroll(dom.parentNode, deltaY);
  };

  this.limitNum = function (min, max) {
    if (_this.vars.loop) {
      _this.num = _this.num < min ? max : _this.num;
      _this.num = _this.num > max ? min : _this.num;
    } else {
      _this.num = _this.num < min ? min : _this.num;
      _this.num = _this.num > max ? max : _this.num;
    }
  };

  this.onWheel = function (e) {
    var deltaY = e.deltaY;
    if (_this.isScroll(e.target, deltaY)) {
      return;
    }
    e.preventDefault();

    var mapped = _this.mapped;
    if (_this.rafID === -1 && deltaY !== 0 && _this.toHeight === -1) {
      var winHeight = windowHeight();
      _this.scrollTop = currentScrollTop();
      var docHeight = _this.vars.docHeight || document.body.scrollHeight;
      if (_this.animEndScrollTop !== _this.scrollTop) {
        _this.setCurrentNNum();
      }
      if (deltaY < 0) {
        _this.num--;
      } else if (deltaY > 0) {
        _this.num++;
      }
      if (mapped.length) {
        var endDom = mapped[mapped.length - 1];
        var startDom = mapped[0];
        var startManyHeight = startDom.offsetTop;
        var startManyScale = startManyHeight ? Math.ceil(startManyHeight / winHeight) : 0;
        var manyHeight = docHeight - endDom.offsetTop - endDom.getBoundingClientRect().height;
        var manyScale = manyHeight ? Math.ceil(manyHeight / winHeight) : 0;
        _this.limitNum(-startManyScale, mapped.length - 1 + manyScale);
        var currentDom = mapped[_this.num];
        _this.toHeight = currentDom ? currentDom.offsetTop : (startManyScale + _this.num) * winHeight;
        _this.toHeight = _this.toHeight < 0 ? 0 : _this.toHeight;
        _this.toHeight = _this.toHeight > docHeight - winHeight ? docHeight - winHeight : _this.toHeight;
      } else {
        _this.limitNum(0, Math.floor(docHeight / winHeight));
        _this.toHeight = winHeight * _this.num;
      }
      _this.initTime = Date.now();
      _this.rafID = raf_default()(_this.raf);
    }
  };
};

var ScrollScreen = new ScrollScreenClass();
/* harmony default export */ var es_ScrollScreen = ({
  init: ScrollScreen.init,
  unMount: ScrollScreen.unMount
});
;// CONCATENATED MODULE: ./node_modules/rc-scroll-anim/es/index.js
// export this package's api








var OverPack = polyfill(es_ScrollOverPack);
var Parallax = polyfill(es_ScrollParallax);
var Element = polyfill(es_ScrollElement);
var Link = es_ScrollLink;
var Event = es_EventDispatcher;
var scrollScreen = es_ScrollScreen;

/* harmony default export */ var rc_scroll_anim_es = ({
  OverPack: OverPack,
  Parallax: Parallax,
  Element: Element,
  Link: Link,
  Event: Event,
  scrollScreen: scrollScreen
});

/***/ }),

/***/ 13003:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Dm = toCssLowerCase;
__webpack_unused_export__ = toStyleUpperCase;
exports.FH = toFixed;
exports.wz = createMatrix;
exports.Yf = checkStyleName;
exports.Lo = getGsapType;
exports.lu = parseColor;
exports.hy = parseShadow;
exports.Lq = getColor;
exports.Tk = isTransform;
exports.dt = isConvert;
exports.GX = splitFilterToObject;
__webpack_unused_export__ = getMatrix;
exports.Ck = getTransform;
exports.YJ = stylesToCss;
__webpack_unused_export__ = getUnit;
__webpack_unused_export__ = getValues;
__webpack_unused_export__ = findStyleByName;
__webpack_unused_export__ = mergeStyle;
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

var unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

var IE = function () {
  if (typeof document === 'undefined') {
    return false;
  }
  if (navigator && (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 9.0") > 0)) {
    return true;
  }
  return false;
}();

var rnd = 100000;

var colorLookup = {
  aqua: [0, 255, 255],
  lime: [0, 255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, 255],
  navy: [0, 0, 128],
  white: [255, 255, 255],
  fuchsia: [255, 0, 255],
  olive: [128, 128, 0],
  yellow: [255, 255, 0],
  orange: [255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [255, 0, 0],
  pink: [255, 192, 203],
  cyan: [0, 255, 255],
  transparent: [255, 255, 255, 0]
};
var _hue = function _hue(hh, m1, m2) {
  var h = hh > 1 ? hh - 1 : hh;
  h = hh < 0 ? hh + 1 : h;
  var a = h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1;
  var b = h < 0.5 ? m2 : a;
  var c = h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : b;
  return c * 255 + 0.5 | 0;
};
var DEG2RAD = Math.PI / 180;
var RAD2DEG = 180 / Math.PI;

var $cssList = {
  _lists: {
    transformsBase: ['translate', 'translateX', 'translateY', 'scale', 'scaleX', 'scaleY', 'skewX', 'skewY', 'rotateZ', 'rotate'],
    transforms3D: ['translate3d', 'translateZ', 'scaleZ', 'rotateX', 'rotateY', 'perspective']
  },
  transformGroup: { translate: 1, translate3d: 1, scale: 1, scale3d: 1, rotate: 1, rotate3d: 1, skew: 1 },
  filter: ['grayScale', 'sepia', 'hueRotate', 'invert', 'brightness', 'contrast', 'blur'],
  filterConvert: { grayScale: 'grayscale', hueRotate: 'hue-rotate' }
};
$cssList._lists.transformsBase = !IE ? $cssList._lists.transformsBase.concat($cssList._lists.transforms3D) : $cssList._lists.transformsBase;

var cssList = exports._T = $cssList;

function toCssLowerCase(d) {
  return d.replace(/[A-Z]/, function ($1) {
    return '-' + $1.toLocaleLowerCase();
  });
}

function toStyleUpperCase(d) {
  return d.replace(/-(.?)/g, function ($1) {
    return $1.replace('-', '').toLocaleUpperCase();
  });
}

function toFixed(num, length) {
  var _rnd = length ? Math.pow(10, length) : rnd;
  var n = num | 0;
  var dec = num - n;
  var fixed = num;
  if (dec) {
    var r = (dec * _rnd + (num < 0 ? -0.5 : 0.5) | 0) / _rnd;
    var t = r | 0;
    var str = r.toString();
    var decStr = str.split('.')[1] || '';
    fixed = '' + (num < 0 && !(n + t) ? '-' : '') + (n + t) + '.' + decStr;
  }
  return parseFloat(fixed);
}

function createMatrix(style) {
  if (typeof document === 'undefined') {
    return null;
  }
  var matrixs = ['WebKitCSS', 'MozCSS', 'DOM', 'MsCSS', 'MSCSS', 'OCSS', 'CSS'].filter(function (key) {
    return key + 'Matrix' in window;
  });
  if (matrixs.length) {
    return new window[matrixs[0] + 'Matrix'](style);
  }
  console.warn('Browsers do not support matrix.');
  return '';
}

function checkStyleName(p) {
  if (typeof document === 'undefined') {
    return null;
  }
  var a = ['O', 'Moz', 'ms', 'Ms', 'Webkit'];
  if (p !== 'filter' && p in document.body.style) {
    return p;
  }
  var _p = p.charAt(0).toUpperCase() + p.substr(1);
  var prefixCss = a.filter(function (key) {
    return '' + key + _p in document.body.style;
  });
  return prefixCss[0] ? '' + prefixCss[0] + _p : null;
}

function getGsapType(_p) {
  var p = _p;
  p = p === 'x' ? 'translateX' : p;
  p = p === 'y' ? 'translateY' : p;
  p = p === 'z' ? 'translateZ' : p;
  // p = p === 'r' ? 'rotate' : p;
  return p;
}

function parseColor(_v) {
  var a = void 0;
  var r = void 0;
  var g = void 0;
  var b = void 0;
  var h = void 0;
  var s = void 0;
  var l = void 0;
  var v = _v;
  var _numExp = /(?:\d|\-\d|\.\d|\-\.\d)+/g;
  if (!v) {
    a = colorLookup.black;
  } else if (typeof v === 'number') {
    a = [v >> 16, v >> 8 & 255, v & 255];
  } else {
    if (v.charAt(v.length - 1) === ',') {
      v = v.substr(0, v.length - 1);
    }
    if (colorLookup[v]) {
      a = colorLookup[v];
    } else if (v.charAt(0) === '#') {
      // is #FFF
      if (v.length === 4) {
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = '#' + r + r + g + g + b + b;
      }
      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & 255, v & 255];
    } else if (v.substr(0, 3) === 'hsl') {
      a = v.match(_numExp);
      h = Number(a[0]) % 360 / 360;
      s = Number(a[1]) / 100;
      l = Number(a[2]) / 100;
      g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
      r = l * 2 - g;
      if (a.length > 3) {
        a[3] = Number(a[3]);
      }
      a[0] = _hue(h + 1 / 3, r, g);
      a[1] = _hue(h, r, g);
      a[2] = _hue(h - 1 / 3, r, g);
    } else {
      a = v.match(_numExp) || colorLookup.transparent;
    }
    a[0] = Number(a[0]);
    a[1] = Number(a[1]);
    a[2] = Number(a[2]);

    if (a.length > 3) {
      a[3] = Number(a[3]);
    }
  }
  return a;
}

function parseShadow(v) {
  if (!v) {
    return [0, 0, 0, 0, 0, 0, 0];
  }
  var vArr = v.replace(/,\s+/gi, ',').split(/\s+/).filter(function (c) {
    return c;
  });
  var inset = vArr.indexOf('inset');
  if (inset >= 0) {
    vArr.splice(inset, 1);
  }
  var colorStr = vArr.find(function (c) {
    return colorLookup[c] || c.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})|(rgb|hsl)+(?:a)?\((.*)\)/i);
  }) || 'black';
  var colorIndex = vArr.indexOf(colorStr);
  vArr.splice(colorIndex, 1);
  var color = parseColor(colorStr);
  color[3] = typeof color[3] === 'number' ? color[3] : 1;
  return vArr.concat(color, inset >= 0 ? ['inset'] : []);
}

function getColor(v) {
  var rgba = v.length === 4 ? 'rgba' : 'rgb';
  var _vars = v.map(function (d, i) {
    return i < 3 ? Math.round(d) : d;
  });
  return rgba + '(' + _vars.join(',') + ')';
}

function isTransform(p) {
  return cssList._lists.transformsBase.indexOf(p) >= 0 ? 'transform' : p;
}

function isConvert(p) {
  var cssName = isTransform(p);
  return cssList.filter.indexOf(cssName) >= 0 ? 'filter' : cssName;
}

function splitFilterToObject(data) {
  if (data === 'none' || !data || data === '') {
    return null;
  }
  var filter = data.replace(' ', '').split(')').filter(function (item) {
    return item;
  });
  var startData = {};
  filter.forEach(function (item) {
    var dataArr = item.split('(');
    startData[dataArr[0]] = dataArr[1];
  });
  return startData;
}

function getMatrix(t) {
  var arr = t.match(/(?:\-|\b)[\d\-\.e]+\b/gi);
  var m = {};
  if (arr.length === 6) {
    m.m11 = parseFloat(arr[0]);
    m.m12 = parseFloat(arr[1]);
    m.m13 = 0;
    m.m14 = 0;
    m.m21 = parseFloat(arr[2]);
    m.m22 = parseFloat(arr[3]);
    m.m23 = 0;
    m.m24 = 0;
    m.m31 = 0;
    m.m32 = 0;
    m.m33 = 1;
    m.m34 = 0;
    m.m41 = parseFloat(arr[4]);
    m.m42 = parseFloat(arr[5]);
    m.m43 = 0;
    m.m44 = 0;
  } else {
    arr.forEach(function (item, i) {
      var ii = i % 4 + 1;
      var j = Math.floor(i / 4) + 1;
      m['m' + j + ii] = parseFloat(item);
    });
  }
  return m;
}

function transformNoMatrix(transform) {
  var tm = {};
  tm.translateX = 0;
  tm.translateY = 0;
  tm.translateZ = 0;
  tm.rotate = 0;
  tm.rotateX = 0;
  tm.rotateY = 0;
  tm.scaleX = 1;
  tm.scaleY = 1;
  tm.scaleZ = 1;
  tm.skewX = 0;
  tm.skewY = 0;
  tm.perspective = 0;
  (transform.trim().match(/(\w+)\([^\)]+\)/ig) || []).forEach(function (str) {
    var strArray = str.split('(');
    var key = strArray[0].trim();
    var value = strArray[1].replace(')', '').trim();
    if (value.match(/%|em|rem/ig)) {
      console.warn('value(' + value + ') must be absolute, not relative, has been converted to absolute.');
    }
    value = value.replace(/px|deg|\)/ig, '');
    if (cssList.transformGroup[key] && key !== 'rotate') {
      value = value.split(',').map(function (num) {
        return parseFloat(num);
      });
      if (key === 'scale3d' || key === 'translate3d') {
        ['X', 'Y', 'Z'].forEach(function (s, i) {
          var $key = key.substring(0, key.length - 2);
          tm['' + $key + s] = value[i] || tm['' + $key + s];
        });
      } else if (key === 'rotate3d') {
        tm.rotateX = value[0] && value[3] || tm.rotateX;
        tm.rotateY = value[1] && value[3] || tm.rotateY;
        tm.rotate = value[2] && value[3] || tm.rotate;
      } else {
        ['X', 'Y'].forEach(function (s, i) {
          tm['' + key + s] = value[i] || tm['' + key + s];
        });
      }
    } else {
      if (key === 'rotateZ') {
        tm.rotate = parseFloat(value) || tm.rotate;
      } else {
        tm[key] = parseFloat(value) || tm[key];
      }
    }
  });
  return tm;
}

function getTransform(transform) {
  var _transform = !transform || transform === 'none' || transform === '' ? 'matrix(1, 0, 0, 1, 0, 0)' : transform;
  if (!_transform.match('matrix')) {
    return transformNoMatrix(transform);
  }
  var m = getMatrix(_transform);
  var m11 = m.m11;
  var m12 = m.m12;
  var m13 = m.m13;
  var m14 = m.m14;
  var m21 = m.m21;
  var m22 = m.m22;
  var m23 = m.m23;
  var m24 = m.m24;
  var m31 = m.m31;
  var m32 = m.m32;
  var m33 = m.m33;
  var m34 = m.m34;
  var m43 = m.m43;
  var t1 = void 0;
  var t2 = void 0;
  var t3 = void 0;
  var tm = {};
  var angle = Math.atan2(m23, m33);
  var skewX = Math.tan(m21);
  var skewY = Math.tan(m12);
  var cos = void 0;
  var sin = void 0;
  // rotateX
  tm.rotateX = toFixed(angle * RAD2DEG) || 0;
  if (angle) {
    cos = Math.cos(-angle);
    sin = Math.sin(-angle);
    t1 = m21 * cos + m31 * sin;
    t2 = m22 * cos + m32 * sin;
    t3 = m23 * cos + m33 * sin;
    m31 = m21 * -sin + m31 * cos;
    m32 = m22 * -sin + m32 * cos;
    m33 = m23 * -sin + m33 * cos;
    m34 = m24 * -sin + m34 * cos;
    m21 = t1;
    m22 = t2;
    m23 = t3;
  }
  // rotateY
  angle = Math.atan2(-m13, m33);
  tm.rotateY = toFixed(angle * RAD2DEG) || 0;
  if (angle) {
    cos = Math.cos(-angle);
    sin = Math.sin(-angle);
    t1 = m11 * cos - m31 * sin;
    t2 = m12 * cos - m32 * sin;
    t3 = m13 * cos - m33 * sin;
    m32 = m12 * sin + m32 * cos;
    m33 = m13 * sin + m33 * cos;
    m34 = m14 * sin + m34 * cos;
    m11 = t1;
    m12 = t2;
    m13 = t3;
  }
  // rotateZ
  angle = Math.atan2(m12, m11);
  tm.rotate = toFixed(angle * RAD2DEG) || 0;
  if (angle) {
    cos = Math.cos(angle);
    sin = Math.sin(angle);
    t1 = m11 * cos + m12 * sin;
    t2 = m21 * cos + m22 * sin;
    t3 = m31 * cos + m32 * sin;
    m12 = m12 * cos - m11 * sin;
    m22 = m22 * cos - m21 * sin;
    m32 = m32 * cos - m31 * sin;
    m11 = t1;
    m21 = t2;
    m31 = t3;
  }

  if (tm.rotateX && Math.abs(tm.rotateX) + Math.abs(tm.rotate) > 359.9) {
    tm.rotateX = tm.rotate = 0;
    tm.rotateY = 180 - tm.rotateY || 0;
  }

  tm.scaleX = toFixed(Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13));
  tm.scaleY = toFixed(Math.sqrt(m22 * m22 + m23 * m23));
  tm.scaleZ = toFixed(Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33));
  // 不管 skewX skewY了；
  tm.skewX = skewX === -skewY ? 0 : skewX;
  tm.skewY = skewY === -skewX ? 0 : skewY;
  tm.perspective = m34 ? 1 / (m34 < 0 ? -m34 : m34) : 0;
  tm.translateX = m.m41;
  tm.translateY = m.m42;
  tm.translateZ = m43;
  return tm;
}

function stylesToCss(key, value) {
  var _value = void 0;
  if (!isUnitlessNumber[key] && typeof value === 'number') {
    _value = ' ' + value + 'px';
  } else if (key === 'content' && !unquotedContentValueRegex.test(value)) {
    _value = '\'' + value.replace(/'/g, "\\'") + '\'';
  }
  return _value || value;
}

function getUnit(p, v) {
  var currentUnit = v && v.toString().replace(/[^a-z|%]/ig, '');
  var unit = '';
  if (p.indexOf('translate') >= 0 || p.indexOf('perspective') >= 0 || p.indexOf('blur') >= 0) {
    unit = 'px';
  } else if (p.indexOf('skew') >= 0 || p.indexOf('rotate') >= 0) {
    unit = 'deg';
  }
  return currentUnit || unit;
}

function getValues(p, d, u) {
  return p + '(' + d + (u || '') + ')';
}

function findStyleByName(cssArray, name) {
  var ret = null;
  if (cssArray) {
    cssArray.forEach(function (_cname) {
      if (ret) {
        return;
      }
      var cName = _cname.split('(')[0];
      var a = cName in cssList.transformGroup && name.substring(0, name.length - 1).indexOf(cName) >= 0;
      var b = name in cssList.transformGroup && cName.substring(0, cName.length - 1).indexOf(name) >= 0;
      var c = cName in cssList.transformGroup && name in cssList.transformGroup && (cName.substring(0, cName.length - 2) === name || name.substring(0, name.length - 2) === cName);
      if (cName === name || a || b || c) {
        ret = _cname;
      }
    });
  }
  return ret;
}

function mergeStyle(current, change) {
  if (!current || current === '') {
    return change;
  }
  if (!change || change === '') {
    return current;
  }
  var _current = current.replace(/\s/g, '').split(')').filter(function (item) {
    return item !== '' && item;
  }).map(function (item) {
    return item + ')';
  });
  var _change = change.replace(/\s/g, '').split(')').filter(function (item) {
    return item !== '' && item;
  });
  _change.forEach(function (changeOnly) {
    var changeArr = changeOnly.split('(');
    var changeName = changeArr[0];
    var currentSame = findStyleByName(_current, changeName);
    if (!currentSame) {
      _current.push(changeOnly + ')');
    } else {
      var index = _current.indexOf(currentSame);
      _current[index] = changeOnly + ')';
    }
  });
  _current.forEach(function (item, i) {
    if (item.indexOf('perspective') >= 0 && i) {
      _current.splice(i, 1);
      _current.unshift(item);
    }
  });
  return _current.join(' ').trim();
}


/***/ }),

/***/ 52191:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = toCssLowerCase;
__webpack_unused_export__ = toStyleUpperCase;
__webpack_unused_export__ = toFixed;
__webpack_unused_export__ = createMatrix;
exports.Yf = checkStyleName;
exports.Lo = getGsapType;
exports.lu = parseColor;
exports.hy = parseShadow;
exports.Lq = getColor;
__webpack_unused_export__ = isTransform;
exports.dt = isConvert;
exports.GX = splitFilterToObject;
__webpack_unused_export__ = getMatrix;
exports.Ck = getTransform;
exports.YJ = stylesToCss;
__webpack_unused_export__ = getUnit;
__webpack_unused_export__ = getValues;
__webpack_unused_export__ = findStyleByName;
__webpack_unused_export__ = mergeStyle;
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

var unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

var IE = function () {
  if (typeof document === 'undefined') {
    return false;
  }
  if (navigator && (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 9.0") > 0)) {
    return true;
  }
  return false;
}();

var rnd = 100000;

var colorLookup = {
  aqua: [0, 255, 255, 1],
  lime: [0, 255, 0, 1],
  silver: [192, 192, 192, 1],
  black: [0, 0, 0, 1],
  maroon: [128, 0, 0, 1],
  teal: [0, 128, 128, 1],
  blue: [0, 0, 255, 1],
  navy: [0, 0, 128, 1],
  white: [255, 255, 255, 1],
  fuchsia: [255, 0, 255, 1],
  olive: [128, 128, 0, 1],
  yellow: [255, 255, 0, 1],
  orange: [255, 165, 0, 1],
  gray: [128, 128, 128, 1],
  purple: [128, 0, 128, 1],
  green: [0, 128, 0, 1],
  red: [255, 0, 0, 1],
  pink: [255, 192, 203, 1],
  cyan: [0, 255, 255, 1],
  transparent: [255, 255, 255, 0]
};

var DEG2RAD = Math.PI / 180;
var RAD2DEG = 180 / Math.PI;

var $cssList = {
  _lists: {
    transformsBase: ['translate', 'translateX', 'translateY', 'scale', 'scaleX', 'scaleY', 'skewX', 'skewY', 'rotateZ', 'rotate'],
    transforms3D: ['translate3d', 'translateZ', 'scaleZ', 'rotateX', 'rotateY', 'perspective']
  },
  transformGroup: { translate: 1, translate3d: 1, scale: 1, scale3d: 1, rotate: 1, rotate3d: 1, skew: 1 },
  filter: ['grayScale', 'sepia', 'hueRotate', 'invert', 'brightness', 'contrast', 'blur'],
  filterConvert: { grayScale: 'grayscale', hueRotate: 'hue-rotate' }
};
$cssList._lists.transformsBase = !IE ? $cssList._lists.transformsBase.concat($cssList._lists.transforms3D) : $cssList._lists.transformsBase;

var hexExp = __webpack_unused_export__ = /#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3})/;

var rgbAndHslExp = __webpack_unused_export__ = /((rgb|hsl)[a]?)+\((?:\d|\.\d)+(?:(deg|\%|)),[\s+]?(?:\d|\.\d)+(?:(deg|\%|)),[\s+]?(?:\d|\.\d)+(?:(deg|%|))(,[\s+]?(?:\d|\.\d)+(?:(deg|\%|)))?\)/;

var colorRegExp = exports.rV = /#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3})|((rgb|hsl)[a]?)+\((?:\d|\.\d)+(?:(deg|\%)?),[\s+]?(?:\d|\.\d)+(?:(deg|\%)?),[\s+]?(?:\d|\.\d)+(?:(deg|%)?)(,[\s+]?(?:\d|\.\d)+(?:(deg|\%)?))?\)/;

var colorNumExp = __webpack_unused_export__ = /(?:\d|\.\d)+(%?)/g;

var cssList = exports._T = $cssList;

function toCssLowerCase(d) {
  return d.replace(/[A-Z]/, function ($1) {
    return '-' + $1.toLocaleLowerCase();
  });
}

function toStyleUpperCase(d) {
  return d.replace(/-(.?)/g, function ($1) {
    return $1.replace('-', '').toLocaleUpperCase();
  });
}

function toFixed(num, length) {
  var _rnd = length ? Math.pow(10, length) : rnd;
  var n = num | 0;
  var dec = num - n;
  var fixed = num;
  if (dec) {
    var r = (dec * _rnd + (num < 0 ? -0.5 : 0.5) | 0) / _rnd;
    var t = r | 0;
    var str = r.toString();
    var decStr = str.split('.')[1] || '';
    fixed = '' + (num < 0 && !(n + t) ? '-' : '') + (n + t) + '.' + decStr;
  }
  return parseFloat(fixed);
}

function createMatrix(style) {
  if (typeof document === 'undefined') {
    return null;
  }
  var matrixs = ['WebKitCSS', 'MozCSS', 'DOM', 'MsCSS', 'MSCSS', 'OCSS', 'CSS'].filter(function (key) {
    return key + 'Matrix' in window;
  });
  if (matrixs.length) {
    return new window[matrixs[0] + 'Matrix'](style);
  }
  console.warn('Browsers do not support matrix.');
  return '';
}

function checkStyleName(p) {
  if (typeof document === 'undefined') {
    return null;
  }
  var a = ['O', 'Moz', 'ms', 'Ms', 'Webkit'];
  if (p !== 'filter' && p in document.body.style) {
    return p;
  }
  var _p = p.charAt(0).toUpperCase() + p.substr(1);
  var prefixCss = a.filter(function (key) {
    return '' + key + _p in document.body.style;
  });
  return prefixCss[0] ? '' + prefixCss[0] + _p : null;
}

function getGsapType(_p) {
  var p = _p;
  p = p === 'x' ? 'translateX' : p;
  p = p === 'y' ? 'translateY' : p;
  p = p === 'z' ? 'translateZ' : p;
  // p = p === 'r' ? 'rotate' : p;
  return p;
}

// href: https://www.w3schools.com/lib/w3color.js
var hueToRgb = function hueToRgb(t1, t2, hue) {
  if (hue < 0) hue += 6;
  if (hue >= 6) hue -= 6;
  if (hue < 1) return (t2 - t1) * hue + t1;else if (hue < 3) return t2;else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;else return t1;
};

function parseColor(value) {
  var colorArray = colorLookup.transparent;
  var color = value;
  var r = void 0;
  var g = void 0;
  var b = void 0;
  if (!color) {
    colorArray = colorLookup.transparent;
  } else if (colorLookup[color]) {
    colorArray = colorLookup[color];
  } else if (typeof color === 'number') {
    colorArray = [color >> 16, color >> 8 & 255, color & 255];
  } else {
    if (color.charAt(color.length - 1) === ',') {
      color = color.substr(0, color.length - 1);
    }
    if (color.match(hexExp)) {
      color = color.substr(1);
      // is #FFF
      if (color.length === 3) {
        r = color.charAt(0);
        g = color.charAt(1);
        b = color.charAt(2);
        color = '' + r + r + g + g + b + b + 'ff';
      }
      if (color.length === 6) {
        color += 'ff';
      }
      color = parseInt(color, 16);
      colorArray = [color >> 24 & 255, color >> 16 & 255, color >> 8 & 255, parseFloat(((color & 255) / 255).toFixed(2))];
    } else if (color.match(/^hsl/)) {
      colorArray = color.match(colorNumExp);
      var alpha = colorArray[3];
      alpha = typeof alpha === 'string' && alpha.match('%') ? parseFloat(alpha) / 100 : parseFloat('' + (alpha || '1'));
      var hue = parseFloat(colorArray[0]) / 60;
      var sat = parseFloat(colorArray[1]) / 100;
      var light = parseFloat(colorArray[2]) / 100;
      var t2 = light <= 0.5 ? light * (sat + 1) : light + sat - light * sat;
      var t1 = light * 2 - t2;
      r = Math.round(hueToRgb(t1, t2, hue + 2) * 255);
      g = Math.round(hueToRgb(t1, t2, hue) * 255);
      b = Math.round(hueToRgb(t1, t2, hue - 2) * 255);
      colorArray = [r, g, b, alpha];
    } else {
      // rgb(a?) 拆分
      colorArray = color.match(colorNumExp) || colorLookup.transparent;
      colorArray = colorArray.map(function (c) {
        return parseFloat(c);
      });
      if (colorArray.length === 3) {
        colorArray.push(1);
      }
    }
  }
  return colorArray;
}

function parseShadow(v, key) {
  /**
   * text-shadow: x y blur color;
   * box-shadow: x y blur spread color inset;
   */
  var textKey = key && toStyleUpperCase(key);
  if (!v) {
    if (textKey === 'boxShadow') {
      return [0, 0, 0, 0, 0, 0, 0, 0]; //0.85
    }
    return [0, 0, 0, 0, 0, 0, 0];
  }
  var vArr = v.replace(/,\s+/gi, ',').split(/\s+/).filter(function (c) {
    return c;
  });
  var inset = vArr.indexOf('inset');
  if (inset >= 0) {
    vArr.splice(inset, 1);
  }
  var colorStr = vArr.find(function (c) {
    return colorLookup[c] || c.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})|(rgb|hsl)+(?:a)?\((.*)\)/i);
  }) || 'black';
  var colorIndex = vArr.indexOf(colorStr);
  vArr.splice(colorIndex, 1);
  var color = parseColor(colorStr);
  color[3] = typeof color[3] === 'number' ? color[3] : 1;
  if (textKey === 'boxShadow' && vArr.length < 4) {
    vArr.push(0);
  }
  return vArr.concat(color, inset >= 0 ? ['inset'] : []);
}

function getColor(v) {
  var rgba = v.length === 4 ? 'rgba' : 'rgb';
  var _vars = v.map(function (d, i) {
    return i < 3 ? Math.round(d) : d;
  });
  return rgba + '(' + _vars.join(',') + ')';
}

function isTransform(p) {
  return cssList._lists.transformsBase.indexOf(p) >= 0 ? 'transform' : p;
}

function isConvert(p) {
  var cssName = isTransform(p);
  return cssList.filter.indexOf(cssName) >= 0 ? 'filter' : cssName;
}

function splitFilterToObject(data) {
  if (data === 'none' || !data || data === '') {
    return null;
  }
  var filter = data.replace(/\s+/g, '').split(')').filter(function (item) {
    return item;
  });
  var startData = {};
  filter.forEach(function (item) {
    var dataArr = item.split('(');
    startData[dataArr[0]] = dataArr[1];
  });
  return startData;
}

function getMatrix(t) {
  var arr = t.match(/(?:\-|\b)[\d\-\.e]+\b/gi);
  var m = {};
  if (arr.length === 6) {
    m.m11 = parseFloat(arr[0]);
    m.m12 = parseFloat(arr[1]);
    m.m13 = 0;
    m.m14 = 0;
    m.m21 = parseFloat(arr[2]);
    m.m22 = parseFloat(arr[3]);
    m.m23 = 0;
    m.m24 = 0;
    m.m31 = 0;
    m.m32 = 0;
    m.m33 = 1;
    m.m34 = 0;
    m.m41 = parseFloat(arr[4]);
    m.m42 = parseFloat(arr[5]);
    m.m43 = 0;
    m.m44 = 0;
  } else {
    arr.forEach(function (item, i) {
      var ii = i % 4 + 1;
      var j = Math.floor(i / 4) + 1;
      m['m' + j + ii] = parseFloat(item);
    });
  }
  return m;
}

function transformNoMatrix(transform) {
  var tm = {};
  tm.translateX = 0;
  tm.translateY = 0;
  tm.translateZ = 0;
  tm.rotate = 0;
  tm.rotateX = 0;
  tm.rotateY = 0;
  tm.scaleX = 1;
  tm.scaleY = 1;
  tm.scaleZ = 1;
  tm.skewX = 0;
  tm.skewY = 0;
  tm.perspective = 0;
  (transform.trim().match(/(\w+)\([^\)]+\)/ig) || []).forEach(function (str) {
    var strArray = str.split('(');
    var key = strArray[0].trim();
    var value = strArray[1].replace(')', '').trim();
    if (value.match(/%|em|rem/ig)) {
      console.warn('value(' + value + ') must be absolute, not relative, has been converted to absolute.');
    }
    value = value.replace(/px|deg|\)/ig, '');
    if (cssList.transformGroup[key] && key !== 'rotate') {
      value = value.split(',').map(function (num) {
        return parseFloat(num);
      });
      if (key === 'scale3d' || key === 'translate3d') {
        ['X', 'Y', 'Z'].forEach(function (s, i) {
          var $key = key.substring(0, key.length - 2);
          tm['' + $key + s] = value[i] || tm['' + $key + s];
        });
      } else if (key === 'rotate3d') {
        tm.rotateX = value[0] && value[3] || tm.rotateX;
        tm.rotateY = value[1] && value[3] || tm.rotateY;
        tm.rotate = value[2] && value[3] || tm.rotate;
      } else {
        ['X', 'Y'].forEach(function (s, i) {
          tm['' + key + s] = value[i] || tm['' + key + s];
        });
      }
    } else {
      if (key === 'rotateZ') {
        tm.rotate = parseFloat(value) || tm.rotate;
      } else {
        tm[key] = parseFloat(value) || tm[key];
      }
    }
  });
  return tm;
}

function getTransform(transform) {
  var _transform = !transform || transform === 'none' || transform === '' ? 'matrix(1, 0, 0, 1, 0, 0)' : transform;
  if (!_transform.match('matrix')) {
    return transformNoMatrix(transform);
  }
  var m = getMatrix(_transform);
  var m11 = m.m11;
  var m12 = m.m12;
  var m13 = m.m13;
  var m14 = m.m14;
  var m21 = m.m21;
  var m22 = m.m22;
  var m23 = m.m23;
  var m24 = m.m24;
  var m31 = m.m31;
  var m32 = m.m32;
  var m33 = m.m33;
  var m34 = m.m34;
  var m43 = m.m43;
  var t1 = void 0;
  var t2 = void 0;
  var t3 = void 0;
  var tm = {};
  var angle = Math.atan2(m23, m33);
  var skewX = Math.tan(m21);
  var skewY = Math.tan(m12);
  var cos = void 0;
  var sin = void 0;
  // rotateX
  tm.rotateX = toFixed(angle * RAD2DEG) || 0;
  if (angle) {
    cos = Math.cos(-angle);
    sin = Math.sin(-angle);
    t1 = m21 * cos + m31 * sin;
    t2 = m22 * cos + m32 * sin;
    t3 = m23 * cos + m33 * sin;
    m31 = m21 * -sin + m31 * cos;
    m32 = m22 * -sin + m32 * cos;
    m33 = m23 * -sin + m33 * cos;
    m34 = m24 * -sin + m34 * cos;
    m21 = t1;
    m22 = t2;
    m23 = t3;
  }
  // rotateY
  angle = Math.atan2(-m13, m33);
  tm.rotateY = toFixed(angle * RAD2DEG) || 0;
  if (angle) {
    cos = Math.cos(-angle);
    sin = Math.sin(-angle);
    t1 = m11 * cos - m31 * sin;
    t2 = m12 * cos - m32 * sin;
    t3 = m13 * cos - m33 * sin;
    m32 = m12 * sin + m32 * cos;
    m33 = m13 * sin + m33 * cos;
    m34 = m14 * sin + m34 * cos;
    m11 = t1;
    m12 = t2;
    m13 = t3;
  }
  // rotateZ
  angle = Math.atan2(m12, m11);
  tm.rotate = toFixed(angle * RAD2DEG) || 0;
  if (angle) {
    cos = Math.cos(angle);
    sin = Math.sin(angle);
    t1 = m11 * cos + m12 * sin;
    t2 = m21 * cos + m22 * sin;
    t3 = m31 * cos + m32 * sin;
    m12 = m12 * cos - m11 * sin;
    m22 = m22 * cos - m21 * sin;
    m32 = m32 * cos - m31 * sin;
    m11 = t1;
    m21 = t2;
    m31 = t3;
  }

  if (tm.rotateX && Math.abs(tm.rotateX) + Math.abs(tm.rotate) > 359.9) {
    tm.rotateX = tm.rotate = 0;
    tm.rotateY = 180 - tm.rotateY || 0;
  }

  tm.scaleX = toFixed(Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13));
  tm.scaleY = toFixed(Math.sqrt(m22 * m22 + m23 * m23));
  tm.scaleZ = toFixed(Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33));
  // 不管 skewX skewY了；
  tm.skewX = skewX === -skewY ? 0 : skewX;
  tm.skewY = skewY === -skewX ? 0 : skewY;
  tm.perspective = m34 ? 1 / (m34 < 0 ? -m34 : m34) : 0;
  tm.translateX = m.m41;
  tm.translateY = m.m42;
  tm.translateZ = m43;
  return tm;
}

function stylesToCss(key, value) {
  var _value = void 0;
  if (!isUnitlessNumber[key] && typeof value === 'number') {
    _value = ' ' + value + 'px';
  } else if (key === 'content' && !unquotedContentValueRegex.test(value)) {
    _value = '\'' + value.replace(/'/g, "\\'") + '\'';
  }
  return _value || value;
}

function getUnit(p, v) {
  var currentUnit = v && v.toString().replace(/[^a-z|%]/ig, '');
  var unit = '';
  if (p.indexOf('translate') >= 0 || p.indexOf('perspective') >= 0 || p.indexOf('blur') >= 0) {
    unit = 'px';
  } else if (p.indexOf('skew') >= 0 || p.indexOf('rotate') >= 0) {
    unit = 'deg';
  }
  return currentUnit || unit;
}

function getValues(p, d, u) {
  return p + '(' + d + (u || '') + ')';
}

function findStyleByName(cssArray, name) {
  var ret = null;
  if (cssArray) {
    cssArray.forEach(function (_cname) {
      if (ret) {
        return;
      }
      var cName = _cname.split('(')[0];
      var a = cName in cssList.transformGroup && name.substring(0, name.length - 1).indexOf(cName) >= 0;
      var b = name in cssList.transformGroup && cName.substring(0, cName.length - 1).indexOf(name) >= 0;
      var c = cName in cssList.transformGroup && name in cssList.transformGroup && (cName.substring(0, cName.length - 2) === name || name.substring(0, name.length - 2) === cName);
      if (cName === name || a || b || c) {
        ret = _cname;
      }
    });
  }
  return ret;
}

function mergeStyle(current, change) {
  if (!current || current === '') {
    return change;
  }
  if (!change || change === '') {
    return current;
  }
  var _current = current.replace(/\s/g, '').split(')').filter(function (item) {
    return item !== '' && item;
  }).map(function (item) {
    return item + ')';
  });
  var _change = change.replace(/\s/g, '').split(')').filter(function (item) {
    return item !== '' && item;
  });
  _change.forEach(function (changeOnly) {
    var changeArr = changeOnly.split('(');
    var changeName = changeArr[0];
    var currentSame = findStyleByName(_current, changeName);
    if (!currentSame) {
      _current.push(changeOnly + ')');
    } else {
      var index = _current.indexOf(currentSame);
      _current[index] = changeOnly + ')';
    }
  });
  _current.forEach(function (item, i) {
    if (item.indexOf('perspective') >= 0 && i) {
      _current.splice(i, 1);
      _current.unshift(item);
    }
  });
  return _current.join(' ').trim();
}


/***/ }),

/***/ 41000:
/***/ (function(module) {

"use strict";


// t: current time, b: beginning value, _c: final value, d: total duration
var tweenFunctions = {
  linear: function(t, b, _c, d) {
    var c = _c - b;
    return c * t / d + b;
  },
  easeInQuad: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function(t, b, _c, d) {
    var c = _c - b;
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    } else {
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
  },
  easeInCubic: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function(t, b, _c, d) {
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  },
  easeInQuart: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function(t, b, _c, d) {
    var c = _c - b;
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    } else {
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  },
  easeInQuint: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function(t, b, _c, d) {
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
  },
  easeInSine: function(t, b, _c, d) {
    var c = _c - b;
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function(t, b, _c, d) {
    var c = _c - b;
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function(t, b, _c, d) {
    var c = _c - b;
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function(t, b, _c, d) {
    var c = _c - b;
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function(t, b, _c, d) {
    var c = _c - b;
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    } else {
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  },
  easeInCirc: function(t, b, _c, d) {
    var c = _c - b;
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    } else {
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
  },
  easeInElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d / 2) === 2) {
      return b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    } else {
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    }
  },
  easeInBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    } else {
      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
  },
  easeInBounce: function(t, b, _c, d) {
    var c = _c - b;
    var v;
    v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
    return c - v + b;
  },
  easeOutBounce: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  easeInOutBounce: function(t, b, _c, d) {
    var c = _c - b;
    var v;
    if (t < d / 2) {
      v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
      return v * 0.5 + b;
    } else {
      v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
      return v * 0.5 + c * 0.5 + b;
    }
  }
};

module.exports = tweenFunctions;


/***/ }),

/***/ 17061:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(18698)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18698:
/***/ (function(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 64687:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(17061)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

}]);