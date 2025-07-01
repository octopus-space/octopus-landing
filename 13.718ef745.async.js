"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[13],{

/***/ 89705:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_EllipsisOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EllipsisOutlined.js
// This icon file is generated automatically.
var EllipsisOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "ellipsis", "theme": "outlined" };
/* harmony default export */ var asn_EllipsisOutlined = (EllipsisOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(42135);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var EllipsisOutlined_EllipsisOutlined = function EllipsisOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_EllipsisOutlined
  }));
};

/**![ellipsis](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3NiA1MTFhNTYgNTYgMCAxMDExMiAwIDU2IDU2IDAgMTAtMTEyIDB6bTI4MCAwYTU2IDU2IDAgMTAxMTIgMCA1NiA1NiAwIDEwLTExMiAwem0yODAgMGE1NiA1NiAwIDEwMTEyIDAgNTYgNTYgMCAxMC0xMTIgMHoiIC8+PC9zdmc+) */
var RefIcon = /*#__PURE__*/react.forwardRef(EllipsisOutlined_EllipsisOutlined);
if (false) {}
/* harmony default export */ var icons_EllipsisOutlined = (RefIcon);

/***/ }),

/***/ 54535:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es; }
});

// UNUSED EXPORTS: inlineMock

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(98924);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/Context.js

var OrderContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var Context = (OrderContext);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/useDom.js






var EMPTY_LIST = [];

/**
 * Will add `div` to document. Nest call will keep order
 * @param render Render DOM in document
 */
function useDom(render, debug) {
  var _React$useState = react.useState(function () {
      if (!(0,canUseDom/* default */.Z)()) {
        return null;
      }
      var defaultEle = document.createElement('div');
      if (false) {}
      return defaultEle;
    }),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 1),
    ele = _React$useState2[0];

  // ========================== Order ==========================
  var appendedRef = react.useRef(false);
  var queueCreate = react.useContext(Context);
  var _React$useState3 = react.useState(EMPTY_LIST),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    queue = _React$useState4[0],
    setQueue = _React$useState4[1];
  var mergedQueueCreate = queueCreate || (appendedRef.current ? undefined : function (appendFn) {
    setQueue(function (origin) {
      var newQueue = [appendFn].concat((0,toConsumableArray/* default */.Z)(origin));
      return newQueue;
    });
  });

  // =========================== DOM ===========================
  function append() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
    appendedRef.current = true;
  }
  function cleanup() {
    var _ele$parentElement;
    (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
    appendedRef.current = false;
  }
  (0,useLayoutEffect/* default */.Z)(function () {
    if (render) {
      if (queueCreate) {
        queueCreate(append);
      } else {
        append();
      }
    } else {
      cleanup();
    }
    return cleanup;
  }, [render]);
  (0,useLayoutEffect/* default */.Z)(function () {
    if (queue.length) {
      queue.forEach(function (appendFn) {
        return appendFn();
      });
      setQueue(EMPTY_LIST);
    }
  }, [queue]);
  return [ele, mergedQueueCreate];
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(44958);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
/* eslint-disable no-param-reassign */

var cached;
function measureScrollbarSize(ele) {
  var randomId = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7));
  var measureEle = document.createElement('div');
  measureEle.id = randomId;

  // Create Style
  var measureStyle = measureEle.style;
  measureStyle.position = 'absolute';
  measureStyle.left = '0';
  measureStyle.top = '0';
  measureStyle.width = '100px';
  measureStyle.height = '100px';
  measureStyle.overflow = 'scroll';

  // Clone Style if needed
  var fallbackWidth;
  var fallbackHeight;
  if (ele) {
    var targetStyle = getComputedStyle(ele);
    measureStyle.scrollbarColor = targetStyle.scrollbarColor;
    measureStyle.scrollbarWidth = targetStyle.scrollbarWidth;

    // Set Webkit style
    var webkitScrollbarStyle = getComputedStyle(ele, '::-webkit-scrollbar');
    var width = parseInt(webkitScrollbarStyle.width, 10);
    var height = parseInt(webkitScrollbarStyle.height, 10);

    // Try wrap to handle CSP case
    try {
      var widthStyle = width ? "width: ".concat(webkitScrollbarStyle.width, ";") : '';
      var heightStyle = height ? "height: ".concat(webkitScrollbarStyle.height, ";") : '';
      (0,dynamicCSS/* updateCSS */.hq)("\n#".concat(randomId, "::-webkit-scrollbar {\n").concat(widthStyle, "\n").concat(heightStyle, "\n}"), randomId);
    } catch (e) {
      // Can't wrap, just log error
      console.error(e);

      // Get from style directly
      fallbackWidth = width;
      fallbackHeight = height;
    }
  }
  document.body.appendChild(measureEle);

  // Measure. Get fallback style if provided
  var scrollWidth = ele && fallbackWidth && !isNaN(fallbackWidth) ? fallbackWidth : measureEle.offsetWidth - measureEle.clientWidth;
  var scrollHeight = ele && fallbackHeight && !isNaN(fallbackHeight) ? fallbackHeight : measureEle.offsetHeight - measureEle.clientHeight;

  // Clean up
  document.body.removeChild(measureEle);
  (0,dynamicCSS/* removeCSS */.jL)(randomId);
  return {
    width: scrollWidth,
    height: scrollHeight
  };
}
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }
  if (fresh || cached === undefined) {
    cached = measureScrollbarSize();
  }
  return cached.width;
}
function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  return measureScrollbarSize(target);
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/util.js
/**
 * Test usage export. Do not use in your production
 */
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/useScrollLocker.js






var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
var uuid = 0;
function useScrollLocker(lock) {
  var mergedLock = !!lock;
  var _React$useState = react.useState(function () {
      uuid += 1;
      return "".concat(UNIQUE_ID, "_").concat(uuid);
    }),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 1),
    id = _React$useState2[0];
  (0,useLayoutEffect/* default */.Z)(function () {
    if (mergedLock) {
      var scrollbarSize = getTargetScrollBarSize(document.body).width;
      var isOverflow = isBodyOverflowing();
      (0,dynamicCSS/* updateCSS */.hq)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : '', "\n}"), id);
    } else {
      (0,dynamicCSS/* removeCSS */.jL)(id);
    }
    return function () {
      (0,dynamicCSS/* removeCSS */.jL)(id);
    };
  }, [mergedLock, id]);
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/mock.js
var inline = false;
function inlineMock(nextInline) {
  if (typeof nextInline === 'boolean') {
    inline = nextInline;
  }
  return inline;
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/Portal.js










var getPortalContainer = function getPortalContainer(getContainer) {
  if (getContainer === false) {
    return false;
  }
  if (!(0,canUseDom/* default */.Z)() || !getContainer) {
    return null;
  }
  if (typeof getContainer === 'string') {
    return document.querySelector(getContainer);
  }
  if (typeof getContainer === 'function') {
    return getContainer();
  }
  return getContainer;
};
var Portal = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var open = props.open,
    autoLock = props.autoLock,
    getContainer = props.getContainer,
    debug = props.debug,
    _props$autoDestroy = props.autoDestroy,
    autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy,
    children = props.children;
  var _React$useState = react.useState(open),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    shouldRender = _React$useState2[0],
    setShouldRender = _React$useState2[1];
  var mergedRender = shouldRender || open;

  // ========================= Warning =========================
  if (false) {}

  // ====================== Should Render ======================
  react.useEffect(function () {
    if (autoDestroy || open) {
      setShouldRender(open);
    }
  }, [open, autoDestroy]);

  // ======================== Container ========================
  var _React$useState3 = react.useState(function () {
      return getPortalContainer(getContainer);
    }),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    innerContainer = _React$useState4[0],
    setInnerContainer = _React$useState4[1];
  react.useEffect(function () {
    var customizeContainer = getPortalContainer(getContainer);

    // Tell component that we check this in effect which is safe to be `null`
    setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
  });
  var _useDom = useDom(mergedRender && !innerContainer, debug),
    _useDom2 = (0,slicedToArray/* default */.Z)(_useDom, 2),
    defaultContainer = _useDom2[0],
    queueCreate = _useDom2[1];
  var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;

  // ========================= Locker ==========================
  useScrollLocker(autoLock && open && (0,canUseDom/* default */.Z)() && (mergedContainer === defaultContainer || mergedContainer === document.body));

  // =========================== Ref ===========================
  var childRef = null;
  if (children && (0,es_ref/* supportRef */.Yr)(children) && ref) {
    var _ref = children;
    childRef = _ref.ref;
  }
  var mergedRef = (0,es_ref/* useComposeRef */.x1)(childRef, ref);

  // ========================= Render ==========================
  // Do not render when nothing need render
  // When innerContainer is `undefined`, it may not ready since user use ref in the same render
  if (!mergedRender || !(0,canUseDom/* default */.Z)() || innerContainer === undefined) {
    return null;
  }

  // Render inline
  var renderInline = mergedContainer === false || inlineMock();
  var reffedChildren = children;
  if (ref) {
    reffedChildren = /*#__PURE__*/react.cloneElement(children, {
      ref: mergedRef
    });
  }
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: queueCreate
  }, renderInline ? reffedChildren : /*#__PURE__*/(0,react_dom.createPortal)(reffedChildren, mergedContainer));
});
if (false) {}
/* harmony default export */ var es_Portal = (Portal);
;// CONCATENATED MODULE: ./node_modules/@rc-component/portal/es/index.js



/* harmony default export */ var es = (es_Portal);

/***/ }),

/***/ 40228:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ trigger_es; }
});

// UNUSED EXPORTS: generateTrigger

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/@rc-component/portal/es/index.js + 7 modules
var es = __webpack_require__(54535);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 5 modules
var rc_resize_observer_es = __webpack_require__(9220);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(34203);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/shadow.js
var shadow = __webpack_require__(27571);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useId.js
var useId = __webpack_require__(7028);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(31131);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 13 modules
var rc_motion_es = __webpack_require__(29372);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/Popup/Arrow.js


function Arrow(props) {
  var prefixCls = props.prefixCls,
    align = props.align,
    arrow = props.arrow,
    arrowPos = props.arrowPos;
  var _ref = arrow || {},
    className = _ref.className,
    content = _ref.content;
  var _arrowPos$x = arrowPos.x,
    x = _arrowPos$x === void 0 ? 0 : _arrowPos$x,
    _arrowPos$y = arrowPos.y,
    y = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
  var arrowRef = react.useRef();

  // Skip if no align
  if (!align || !align.points) {
    return null;
  }
  var alignStyle = {
    position: 'absolute'
  };

  // Skip if no need to align
  if (align.autoArrow !== false) {
    var popupPoints = align.points[0];
    var targetPoints = align.points[1];
    var popupTB = popupPoints[0];
    var popupLR = popupPoints[1];
    var targetTB = targetPoints[0];
    var targetLR = targetPoints[1];

    // Top & Bottom
    if (popupTB === targetTB || !['t', 'b'].includes(popupTB)) {
      alignStyle.top = y;
    } else if (popupTB === 't') {
      alignStyle.top = 0;
    } else {
      alignStyle.bottom = 0;
    }

    // Left & Right
    if (popupLR === targetLR || !['l', 'r'].includes(popupLR)) {
      alignStyle.left = x;
    } else if (popupLR === 'l') {
      alignStyle.left = 0;
    } else {
      alignStyle.right = 0;
    }
  }
  return /*#__PURE__*/react.createElement("div", {
    ref: arrowRef,
    className: classnames_default()("".concat(prefixCls, "-arrow"), className),
    style: alignStyle
  }, content);
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/Popup/Mask.js




function Mask(props) {
  var prefixCls = props.prefixCls,
    open = props.open,
    zIndex = props.zIndex,
    mask = props.mask,
    motion = props.motion;
  if (!mask) {
    return null;
  }
  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, (0,esm_extends/* default */.Z)({}, motion, {
    motionAppear: true,
    visible: open,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/react.createElement("div", {
      style: {
        zIndex: zIndex
      },
      className: classnames_default()("".concat(prefixCls, "-mask"), className)
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/Popup/PopupContent.js

var PopupContent = /*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (_, next) {
  return next.cache;
});
if (false) {}
/* harmony default export */ var Popup_PopupContent = (PopupContent);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/Popup/index.js












var Popup = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var popup = props.popup,
    className = props.className,
    prefixCls = props.prefixCls,
    style = props.style,
    target = props.target,
    _onVisibleChanged = props.onVisibleChanged,
    open = props.open,
    keepDom = props.keepDom,
    fresh = props.fresh,
    onClick = props.onClick,
    mask = props.mask,
    arrow = props.arrow,
    arrowPos = props.arrowPos,
    align = props.align,
    motion = props.motion,
    maskMotion = props.maskMotion,
    forceRender = props.forceRender,
    getPopupContainer = props.getPopupContainer,
    autoDestroy = props.autoDestroy,
    Portal = props.portal,
    zIndex = props.zIndex,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onPointerEnter = props.onPointerEnter,
    onPointerDownCapture = props.onPointerDownCapture,
    ready = props.ready,
    offsetX = props.offsetX,
    offsetY = props.offsetY,
    offsetR = props.offsetR,
    offsetB = props.offsetB,
    onAlign = props.onAlign,
    onPrepare = props.onPrepare,
    stretch = props.stretch,
    targetWidth = props.targetWidth,
    targetHeight = props.targetHeight;
  var childNode = typeof popup === 'function' ? popup() : popup;

  // We can not remove holder only when motion finished.
  var isNodeVisible = open || keepDom;

  // ======================= Container ========================
  var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
  var _React$useState = react.useState(!getPopupContainer || !getPopupContainerNeedParams),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];

  // Delay to show since `getPopupContainer` need target element
  (0,useLayoutEffect/* default */.Z)(function () {
    if (!show && getPopupContainerNeedParams && target) {
      setShow(true);
    }
  }, [show, getPopupContainerNeedParams, target]);

  // ========================= Render =========================
  if (!show) {
    return null;
  }

  // >>>>> Offset
  var AUTO = 'auto';
  var offsetStyle = {
    left: '-1000vw',
    top: '-1000vh',
    right: AUTO,
    bottom: AUTO
  };

  // Set align style
  if (ready || !open) {
    var _experimental;
    var points = align.points;
    var dynamicInset = align.dynamicInset || ((_experimental = align._experimental) === null || _experimental === void 0 ? void 0 : _experimental.dynamicInset);
    var alignRight = dynamicInset && points[0][1] === 'r';
    var alignBottom = dynamicInset && points[0][0] === 'b';
    if (alignRight) {
      offsetStyle.right = offsetR;
      offsetStyle.left = AUTO;
    } else {
      offsetStyle.left = offsetX;
      offsetStyle.right = AUTO;
    }
    if (alignBottom) {
      offsetStyle.bottom = offsetB;
      offsetStyle.top = AUTO;
    } else {
      offsetStyle.top = offsetY;
      offsetStyle.bottom = AUTO;
    }
  }

  // >>>>> Misc
  var miscStyle = {};
  if (stretch) {
    if (stretch.includes('height') && targetHeight) {
      miscStyle.height = targetHeight;
    } else if (stretch.includes('minHeight') && targetHeight) {
      miscStyle.minHeight = targetHeight;
    }
    if (stretch.includes('width') && targetWidth) {
      miscStyle.width = targetWidth;
    } else if (stretch.includes('minWidth') && targetWidth) {
      miscStyle.minWidth = targetWidth;
    }
  }
  if (!open) {
    miscStyle.pointerEvents = 'none';
  }
  return /*#__PURE__*/react.createElement(Portal, {
    open: forceRender || isNodeVisible,
    getContainer: getPopupContainer && function () {
      return getPopupContainer(target);
    },
    autoDestroy: autoDestroy
  }, /*#__PURE__*/react.createElement(Mask, {
    prefixCls: prefixCls,
    open: open,
    zIndex: zIndex,
    mask: mask,
    motion: maskMotion
  }), /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.Z, {
    onResize: onAlign,
    disabled: !open
  }, function (resizeObserverRef) {
    return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, (0,esm_extends/* default */.Z)({
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      removeOnLeave: false,
      forceRender: forceRender,
      leavedClassName: "".concat(prefixCls, "-hidden")
    }, motion, {
      onAppearPrepare: onPrepare,
      onEnterPrepare: onPrepare,
      visible: open,
      onVisibleChanged: function onVisibleChanged(nextVisible) {
        var _motion$onVisibleChan;
        motion === null || motion === void 0 || (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 || _motion$onVisibleChan.call(motion, nextVisible);
        _onVisibleChanged(nextVisible);
      }
    }), function (_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var cls = classnames_default()(prefixCls, motionClassName, className);
      return /*#__PURE__*/react.createElement("div", {
        ref: (0,es_ref/* composeRef */.sQ)(resizeObserverRef, ref, motionRef),
        className: cls,
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
          '--arrow-x': "".concat(arrowPos.x || 0, "px"),
          '--arrow-y': "".concat(arrowPos.y || 0, "px")
        }, offsetStyle), miscStyle), motionStyle), {}, {
          boxSizing: 'border-box',
          zIndex: zIndex
        }, style),
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onPointerEnter: onPointerEnter,
        onClick: onClick,
        onPointerDownCapture: onPointerDownCapture
      }, arrow && /*#__PURE__*/react.createElement(Arrow, {
        prefixCls: prefixCls,
        arrow: arrow,
        arrowPos: arrowPos,
        align: align
      }), /*#__PURE__*/react.createElement(Popup_PopupContent, {
        cache: !open && !fresh
      }, childNode));
    });
  }));
});
if (false) {}
/* harmony default export */ var es_Popup = (Popup);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/TriggerWrapper.js


var TriggerWrapper = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var children = props.children,
    getTriggerDOMNode = props.getTriggerDOMNode;
  var canUseRef = (0,es_ref/* supportRef */.Yr)(children);

  // When use `getTriggerDOMNode`, we should do additional work to get the real dom
  var setRef = react.useCallback(function (node) {
    (0,es_ref/* fillRef */.mH)(ref, getTriggerDOMNode ? getTriggerDOMNode(node) : node);
  }, [getTriggerDOMNode]);
  var mergedRef = (0,es_ref/* useComposeRef */.x1)(setRef, (0,es_ref/* getNodeRef */.C4)(children));
  return canUseRef ? /*#__PURE__*/react.cloneElement(children, {
    ref: mergedRef
  }) : children;
});
if (false) {}
/* harmony default export */ var es_TriggerWrapper = (TriggerWrapper);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/context.js

var TriggerContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var es_context = (TriggerContext);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/hooks/useAction.js

function toArray(val) {
  return val ? Array.isArray(val) ? val : [val] : [];
}
function useAction(mobile, action, showAction, hideAction) {
  return react.useMemo(function () {
    var mergedShowAction = toArray(showAction !== null && showAction !== void 0 ? showAction : action);
    var mergedHideAction = toArray(hideAction !== null && hideAction !== void 0 ? hideAction : action);
    var showActionSet = new Set(mergedShowAction);
    var hideActionSet = new Set(mergedHideAction);
    if (mobile) {
      if (showActionSet.has('hover')) {
        showActionSet.delete('hover');
        showActionSet.add('click');
      }
      if (hideActionSet.has('hover')) {
        hideActionSet.delete('hover');
        hideActionSet.add('click');
      }
    }
    return [showActionSet, hideActionSet];
  }, [mobile, action, showAction, hideAction]);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(5110);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/util.js

function isPointsEq() {
  var a1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var a2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isAlignPoint = arguments.length > 2 ? arguments[2] : undefined;
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);
  for (var i = 0; i < placements.length; i += 1) {
    var _builtinPlacements$pl;
    var placement = placements[i];
    if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return '';
}

/** @deprecated We should not use this if we can refactor all deps */
function getMotion(prefixCls, motion, animation, transitionName) {
  if (motion) {
    return motion;
  }
  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName) {
    return {
      motionName: transitionName
    };
  }
  return null;
}
function getWin(ele) {
  return ele.ownerDocument.defaultView;
}

/**
 * Get all the scrollable parent elements of the element
 * @param ele       The element to be detected
 * @param areaOnly  Only return the parent which will cut visible area
 */
function collectScroller(ele) {
  var scrollerList = [];
  var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
  var scrollStyle = ['hidden', 'scroll', 'clip', 'auto'];
  while (current) {
    var _getWin$getComputedSt = getWin(current).getComputedStyle(current),
      overflowX = _getWin$getComputedSt.overflowX,
      overflowY = _getWin$getComputedSt.overflowY,
      overflow = _getWin$getComputedSt.overflow;
    if ([overflowX, overflowY, overflow].some(function (o) {
      return scrollStyle.includes(o);
    })) {
      scrollerList.push(current);
    }
    current = current.parentElement;
  }
  return scrollerList;
}
function toNum(num) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
  return toNum(parseFloat(val), 0);
}
/**
 *
 *
 *  **************************************
 *  *              Border                *
 *  *     **************************     *
 *  *     *                  *     *     *
 *  *  B  *                  *  S  *  B  *
 *  *  o  *                  *  c  *  o  *
 *  *  r  *      Content     *  r  *  r  *
 *  *  d  *                  *  o  *  d  *
 *  *  e  *                  *  l  *  e  *
 *  *  r  ********************  l  *  r  *
 *  *     *        Scroll          *     *
 *  *     **************************     *
 *  *              Border                *
 *  **************************************
 *
 */
/**
 * Get visible area of element
 */
function getVisibleArea(initArea, scrollerList) {
  var visibleArea = (0,objectSpread2/* default */.Z)({}, initArea);
  (scrollerList || []).forEach(function (ele) {
    if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
      return;
    }

    // Skip if static position which will not affect visible area
    var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele),
      overflow = _getWin$getComputedSt2.overflow,
      overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin,
      borderTopWidth = _getWin$getComputedSt2.borderTopWidth,
      borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth,
      borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth,
      borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
    var eleRect = ele.getBoundingClientRect();
    var eleOutHeight = ele.offsetHeight,
      eleInnerHeight = ele.clientHeight,
      eleOutWidth = ele.offsetWidth,
      eleInnerWidth = ele.clientWidth;
    var borderTopNum = getPxValue(borderTopWidth);
    var borderBottomNum = getPxValue(borderBottomWidth);
    var borderLeftNum = getPxValue(borderLeftWidth);
    var borderRightNum = getPxValue(borderRightWidth);
    var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1000) / 1000);
    var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1000) / 1000);

    // Original visible area
    var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
    var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;

    // Cut border size
    var scaledBorderTopWidth = borderTopNum * scaleY;
    var scaledBorderBottomWidth = borderBottomNum * scaleY;
    var scaledBorderLeftWidth = borderLeftNum * scaleX;
    var scaledBorderRightWidth = borderRightNum * scaleX;

    // Clip margin
    var clipMarginWidth = 0;
    var clipMarginHeight = 0;
    if (overflow === 'clip') {
      var clipNum = getPxValue(overflowClipMargin);
      clipMarginWidth = clipNum * scaleX;
      clipMarginHeight = clipNum * scaleY;
    }

    // Region
    var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
    var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
    var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
    var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
    visibleArea.left = Math.max(visibleArea.left, eleLeft);
    visibleArea.top = Math.max(visibleArea.top, eleTop);
    visibleArea.right = Math.min(visibleArea.right, eleRight);
    visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
  });
  return visibleArea;
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/hooks/useAlign.js








function getUnitOffset(size) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var offsetStr = "".concat(offset);
  var cells = offsetStr.match(/^(.*)\%$/);
  if (cells) {
    return size * (parseFloat(cells[1]) / 100);
  }
  return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
  var _ref = offset || [],
    _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
    offsetX = _ref2[0],
    offsetY = _ref2[1];
  return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
}
function splitPoints() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return [points[0], points[1]];
}
function getAlignPoint(rect, points) {
  var topBottom = points[0];
  var leftRight = points[1];
  var x;
  var y;

  // Top & Bottom
  if (topBottom === 't') {
    y = rect.y;
  } else if (topBottom === 'b') {
    y = rect.y + rect.height;
  } else {
    y = rect.y + rect.height / 2;
  }

  // Left & Right
  if (leftRight === 'l') {
    x = rect.x;
  } else if (leftRight === 'r') {
    x = rect.x + rect.width;
  } else {
    x = rect.x + rect.width / 2;
  }
  return {
    x: x,
    y: y
  };
}
function reversePoints(points, index) {
  var reverseMap = {
    t: 'b',
    b: 't',
    l: 'r',
    r: 'l'
  };
  return points.map(function (point, i) {
    if (i === index) {
      return reverseMap[point] || 'c';
    }
    return point;
  }).join('');
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
  var _React$useState = react.useState({
      ready: false,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: builtinPlacements[placement] || {}
    }),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    offsetInfo = _React$useState2[0],
    setOffsetInfo = _React$useState2[1];
  var alignCountRef = react.useRef(0);
  var scrollerList = react.useMemo(function () {
    if (!popupEle) {
      return [];
    }
    return collectScroller(popupEle);
  }, [popupEle]);

  // ========================= Flip ==========================
  // We will memo flip info.
  // If size change to make flip, it will memo the flip info and use it in next align.
  var prevFlipRef = react.useRef({});
  var resetFlipCache = function resetFlipCache() {
    prevFlipRef.current = {};
  };
  if (!open) {
    resetFlipCache();
  }

  // ========================= Align =========================
  var onAlign = (0,useEvent/* default */.Z)(function () {
    if (popupEle && target && open) {
      var _popupElement$parentE, _popupRect$x, _popupRect$y, _popupElement$parentE2;
      var popupElement = popupEle;
      var doc = popupElement.ownerDocument;
      var win = getWin(popupElement);
      var _win$getComputedStyle = win.getComputedStyle(popupElement),
        popupPosition = _win$getComputedStyle.position;
      var originLeft = popupElement.style.left;
      var originTop = popupElement.style.top;
      var originRight = popupElement.style.right;
      var originBottom = popupElement.style.bottom;
      var originOverflow = popupElement.style.overflow;

      // Placement
      var placementInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, builtinPlacements[placement]), popupAlign);

      // placeholder element
      var placeholderElement = doc.createElement('div');
      (_popupElement$parentE = popupElement.parentElement) === null || _popupElement$parentE === void 0 || _popupElement$parentE.appendChild(placeholderElement);
      placeholderElement.style.left = "".concat(popupElement.offsetLeft, "px");
      placeholderElement.style.top = "".concat(popupElement.offsetTop, "px");
      placeholderElement.style.position = popupPosition;
      placeholderElement.style.height = "".concat(popupElement.offsetHeight, "px");
      placeholderElement.style.width = "".concat(popupElement.offsetWidth, "px");

      // Reset first
      popupElement.style.left = '0';
      popupElement.style.top = '0';
      popupElement.style.right = 'auto';
      popupElement.style.bottom = 'auto';
      popupElement.style.overflow = 'hidden';

      // Calculate align style, we should consider `transform` case
      var targetRect;
      if (Array.isArray(target)) {
        targetRect = {
          x: target[0],
          y: target[1],
          width: 0,
          height: 0
        };
      } else {
        var _rect$x, _rect$y;
        var rect = target.getBoundingClientRect();
        rect.x = (_rect$x = rect.x) !== null && _rect$x !== void 0 ? _rect$x : rect.left;
        rect.y = (_rect$y = rect.y) !== null && _rect$y !== void 0 ? _rect$y : rect.top;
        targetRect = {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }
      var popupRect = popupElement.getBoundingClientRect();
      var _win$getComputedStyle2 = win.getComputedStyle(popupElement),
        height = _win$getComputedStyle2.height,
        width = _win$getComputedStyle2.width;
      popupRect.x = (_popupRect$x = popupRect.x) !== null && _popupRect$x !== void 0 ? _popupRect$x : popupRect.left;
      popupRect.y = (_popupRect$y = popupRect.y) !== null && _popupRect$y !== void 0 ? _popupRect$y : popupRect.top;
      var _doc$documentElement = doc.documentElement,
        clientWidth = _doc$documentElement.clientWidth,
        clientHeight = _doc$documentElement.clientHeight,
        scrollWidth = _doc$documentElement.scrollWidth,
        scrollHeight = _doc$documentElement.scrollHeight,
        scrollTop = _doc$documentElement.scrollTop,
        scrollLeft = _doc$documentElement.scrollLeft;
      var popupHeight = popupRect.height;
      var popupWidth = popupRect.width;
      var targetHeight = targetRect.height;
      var targetWidth = targetRect.width;

      // Get bounding of visible area
      var visibleRegion = {
        left: 0,
        top: 0,
        right: clientWidth,
        bottom: clientHeight
      };
      var scrollRegion = {
        left: -scrollLeft,
        top: -scrollTop,
        right: scrollWidth - scrollLeft,
        bottom: scrollHeight - scrollTop
      };
      var htmlRegion = placementInfo.htmlRegion;
      var VISIBLE = 'visible';
      var VISIBLE_FIRST = 'visibleFirst';
      if (htmlRegion !== 'scroll' && htmlRegion !== VISIBLE_FIRST) {
        htmlRegion = VISIBLE;
      }
      var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
      var scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
      var visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
      var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;

      // When set to `visibleFirst`,
      // the check `adjust` logic will use `visibleRegion` for check first.
      var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;

      // Record right & bottom align data
      popupElement.style.left = 'auto';
      popupElement.style.top = 'auto';
      popupElement.style.right = '0';
      popupElement.style.bottom = '0';
      var popupMirrorRect = popupElement.getBoundingClientRect();

      // Reset back
      popupElement.style.left = originLeft;
      popupElement.style.top = originTop;
      popupElement.style.right = originRight;
      popupElement.style.bottom = originBottom;
      popupElement.style.overflow = originOverflow;
      (_popupElement$parentE2 = popupElement.parentElement) === null || _popupElement$parentE2 === void 0 || _popupElement$parentE2.removeChild(placeholderElement);

      // Calculate scale
      var _scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1000) / 1000);
      var _scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1000) / 1000);

      // No need to align since it's not visible in view
      if (_scaleX === 0 || _scaleY === 0 || (0,findDOMNode/* isDOM */.Sh)(target) && !(0,isVisible/* default */.Z)(target)) {
        return;
      }

      // Offset
      var offset = placementInfo.offset,
        targetOffset = placementInfo.targetOffset;
      var _getNumberOffset = getNumberOffset(popupRect, offset),
        _getNumberOffset2 = (0,slicedToArray/* default */.Z)(_getNumberOffset, 2),
        popupOffsetX = _getNumberOffset2[0],
        popupOffsetY = _getNumberOffset2[1];
      var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset),
        _getNumberOffset4 = (0,slicedToArray/* default */.Z)(_getNumberOffset3, 2),
        targetOffsetX = _getNumberOffset4[0],
        targetOffsetY = _getNumberOffset4[1];
      targetRect.x -= targetOffsetX;
      targetRect.y -= targetOffsetY;

      // Points
      var _ref3 = placementInfo.points || [],
        _ref4 = (0,slicedToArray/* default */.Z)(_ref3, 2),
        popupPoint = _ref4[0],
        targetPoint = _ref4[1];
      var targetPoints = splitPoints(targetPoint);
      var popupPoints = splitPoints(popupPoint);
      var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
      var popupAlignPoint = getAlignPoint(popupRect, popupPoints);

      // Real align info may not same as origin one
      var nextAlignInfo = (0,objectSpread2/* default */.Z)({}, placementInfo);

      // Next Offset
      var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
      var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;

      // ============== Intersection ===============
      // Get area by position. Used for check if flip area is better
      function getIntersectionVisibleArea(offsetX, offsetY) {
        var area = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : visibleArea;
        var l = popupRect.x + offsetX;
        var t = popupRect.y + offsetY;
        var r = l + popupWidth;
        var b = t + popupHeight;
        var visibleL = Math.max(l, area.left);
        var visibleT = Math.max(t, area.top);
        var visibleR = Math.min(r, area.right);
        var visibleB = Math.min(b, area.bottom);
        return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
      }
      var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);

      // As `visibleFirst`, we prepare this for check
      var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);

      // ========================== Overflow ===========================
      var targetAlignPointTL = getAlignPoint(targetRect, ['t', 'l']);
      var popupAlignPointTL = getAlignPoint(popupRect, ['t', 'l']);
      var targetAlignPointBR = getAlignPoint(targetRect, ['b', 'r']);
      var popupAlignPointBR = getAlignPoint(popupRect, ['b', 'r']);
      var overflow = placementInfo.overflow || {};
      var adjustX = overflow.adjustX,
        adjustY = overflow.adjustY,
        shiftX = overflow.shiftX,
        shiftY = overflow.shiftY;
      var supportAdjust = function supportAdjust(val) {
        if (typeof val === 'boolean') {
          return val;
        }
        return val >= 0;
      };

      // Prepare position
      var nextPopupY;
      var nextPopupBottom;
      var nextPopupX;
      var nextPopupRight;
      function syncNextPopupPosition() {
        nextPopupY = popupRect.y + nextOffsetY;
        nextPopupBottom = nextPopupY + popupHeight;
        nextPopupX = popupRect.x + nextOffsetX;
        nextPopupRight = nextPopupX + popupWidth;
      }
      syncNextPopupPosition();

      // >>>>>>>>>> Top & Bottom
      var needAdjustY = supportAdjust(adjustY);
      var sameTB = popupPoints[0] === targetPoints[0];

      // Bottom to Top
      if (needAdjustY && popupPoints[0] === 't' && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
        var tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY -= popupHeight - targetHeight;
        } else {
          tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
        }
        var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
        var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.bt = true;
          nextOffsetY = tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.bt = false;
        }
      }

      // Top to Bottom
      if (needAdjustY && popupPoints[0] === 'b' && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
        var _tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          _tmpNextOffsetY += popupHeight - targetHeight;
        } else {
          _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
        }
        var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
        var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.tb = true;
          nextOffsetY = _tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.tb = false;
        }
      }

      // >>>>>>>>>> Left & Right
      var needAdjustX = supportAdjust(adjustX);

      // >>>>> Flip
      var sameLR = popupPoints[1] === targetPoints[1];

      // Right to Left
      if (needAdjustX && popupPoints[1] === 'l' && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
        var tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX -= popupWidth - targetWidth;
        } else {
          tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
        }
        var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea2 >= originIntersectionRecommendArea)) {
          prevFlipRef.current.rl = true;
          nextOffsetX = tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.rl = false;
        }
      }

      // Left to Right
      if (needAdjustX && popupPoints[1] === 'r' && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
        var _tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          _tmpNextOffsetX += popupWidth - targetWidth;
        } else {
          _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
        }
        var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea3 >= originIntersectionRecommendArea)) {
          prevFlipRef.current.lr = true;
          nextOffsetX = _tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.lr = false;
        }
      }

      // ============================ Shift ============================
      syncNextPopupPosition();
      var numShiftX = shiftX === true ? 0 : shiftX;
      if (typeof numShiftX === 'number') {
        // Left
        if (nextPopupX < visibleRegionArea.left) {
          nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
          if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
          }
        }

        // Right
        if (nextPopupRight > visibleRegionArea.right) {
          nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
          if (targetRect.x > visibleRegionArea.right - numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
          }
        }
      }
      var numShiftY = shiftY === true ? 0 : shiftY;
      if (typeof numShiftY === 'number') {
        // Top
        if (nextPopupY < visibleRegionArea.top) {
          nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;

          // When target if far away from visible area
          // Stop shift
          if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
          }
        }

        // Bottom
        if (nextPopupBottom > visibleRegionArea.bottom) {
          nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
          if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
          }
        }
      }

      // ============================ Arrow ============================
      // Arrow center align
      var popupLeft = popupRect.x + nextOffsetX;
      var popupRight = popupLeft + popupWidth;
      var popupTop = popupRect.y + nextOffsetY;
      var popupBottom = popupTop + popupHeight;
      var targetLeft = targetRect.x;
      var targetRight = targetLeft + targetWidth;
      var targetTop = targetRect.y;
      var targetBottom = targetTop + targetHeight;
      var maxLeft = Math.max(popupLeft, targetLeft);
      var minRight = Math.min(popupRight, targetRight);
      var xCenter = (maxLeft + minRight) / 2;
      var nextArrowX = xCenter - popupLeft;
      var maxTop = Math.max(popupTop, targetTop);
      var minBottom = Math.min(popupBottom, targetBottom);
      var yCenter = (maxTop + minBottom) / 2;
      var nextArrowY = yCenter - popupTop;
      onPopupAlign === null || onPopupAlign === void 0 || onPopupAlign(popupEle, nextAlignInfo);

      // Additional calculate right & bottom position
      var offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
      var offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
      if (_scaleX === 1) {
        nextOffsetX = Math.round(nextOffsetX);
        offsetX4Right = Math.round(offsetX4Right);
      }
      if (_scaleY === 1) {
        nextOffsetY = Math.round(nextOffsetY);
        offsetY4Bottom = Math.round(offsetY4Bottom);
      }
      var nextOffsetInfo = {
        ready: true,
        offsetX: nextOffsetX / _scaleX,
        offsetY: nextOffsetY / _scaleY,
        offsetR: offsetX4Right / _scaleX,
        offsetB: offsetY4Bottom / _scaleY,
        arrowX: nextArrowX / _scaleX,
        arrowY: nextArrowY / _scaleY,
        scaleX: _scaleX,
        scaleY: _scaleY,
        align: nextAlignInfo
      };
      setOffsetInfo(nextOffsetInfo);
    }
  });
  var triggerAlign = function triggerAlign() {
    alignCountRef.current += 1;
    var id = alignCountRef.current;

    // Merge all align requirement into one frame
    Promise.resolve().then(function () {
      if (alignCountRef.current === id) {
        onAlign();
      }
    });
  };

  // Reset ready status when placement & open changed
  var resetReady = function resetReady() {
    setOffsetInfo(function (ori) {
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, ori), {}, {
        ready: false
      });
    });
  };
  (0,useLayoutEffect/* default */.Z)(resetReady, [placement]);
  (0,useLayoutEffect/* default */.Z)(function () {
    if (!open) {
      resetReady();
    }
  }, [open]);
  return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.offsetR, offsetInfo.offsetB, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/hooks/useWatch.js



function useWatch(open, target, popup, onAlign, onScroll) {
  (0,useLayoutEffect/* default */.Z)(function () {
    if (open && target && popup) {
      var targetElement = target;
      var popupElement = popup;
      var targetScrollList = collectScroller(targetElement);
      var popupScrollList = collectScroller(popupElement);
      var win = getWin(popupElement);
      var mergedList = new Set([win].concat((0,toConsumableArray/* default */.Z)(targetScrollList), (0,toConsumableArray/* default */.Z)(popupScrollList)));
      function notifyScroll() {
        onAlign();
        onScroll();
      }
      mergedList.forEach(function (scroller) {
        scroller.addEventListener('scroll', notifyScroll, {
          passive: true
        });
      });
      win.addEventListener('resize', notifyScroll, {
        passive: true
      });

      // First time always do align
      onAlign();
      return function () {
        mergedList.forEach(function (scroller) {
          scroller.removeEventListener('scroll', notifyScroll);
          win.removeEventListener('resize', notifyScroll);
        });
      };
    }
  }, [open, target, popup]);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/hooks/useWinClick.js




function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
  var openRef = react.useRef(open);
  openRef.current = open;
  var popupPointerDownRef = react.useRef(false);

  // Click to hide is special action since click popup element should not hide
  react.useEffect(function () {
    if (clickToHide && popupEle && (!mask || maskClosable)) {
      var onPointerDown = function onPointerDown() {
        popupPointerDownRef.current = false;
      };
      var onTriggerClose = function onTriggerClose(e) {
        var _e$composedPath;
        if (openRef.current && !inPopupOrChild(((_e$composedPath = e.composedPath) === null || _e$composedPath === void 0 || (_e$composedPath = _e$composedPath.call(e)) === null || _e$composedPath === void 0 ? void 0 : _e$composedPath[0]) || e.target) && !popupPointerDownRef.current) {
          triggerOpen(false);
        }
      };
      var win = getWin(popupEle);
      win.addEventListener('pointerdown', onPointerDown, true);
      win.addEventListener('mousedown', onTriggerClose, true);
      win.addEventListener('contextmenu', onTriggerClose, true);

      // shadow root
      var targetShadowRoot = (0,shadow/* getShadowRoot */.A)(targetEle);
      if (targetShadowRoot) {
        targetShadowRoot.addEventListener('mousedown', onTriggerClose, true);
        targetShadowRoot.addEventListener('contextmenu', onTriggerClose, true);
      }

      // Warning if target and popup not in same root
      if (false) { var popupRoot, targetRoot, _targetEle$getRootNod, _popupEle$getRootNode; }
      return function () {
        win.removeEventListener('pointerdown', onPointerDown, true);
        win.removeEventListener('mousedown', onTriggerClose, true);
        win.removeEventListener('contextmenu', onTriggerClose, true);
        if (targetShadowRoot) {
          targetShadowRoot.removeEventListener('mousedown', onTriggerClose, true);
          targetShadowRoot.removeEventListener('contextmenu', onTriggerClose, true);
        }
      };
    }
  }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
  function onPopupPointerDown() {
    popupPointerDownRef.current = true;
  }
  return onPopupPointerDown;
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/trigger/es/index.js



var _excluded = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];



















// Removed Props List
// Seems this can be auto
// getDocument?: (element?: HTMLElement) => Document;

// New version will not wrap popup with `rc-trigger-popup-content` when multiple children

function generateTrigger() {
  var PortalComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : es/* default */.Z;
  var Trigger = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-trigger-popup' : _props$prefixCls,
      children = props.children,
      _props$action = props.action,
      action = _props$action === void 0 ? 'hover' : _props$action,
      showAction = props.showAction,
      hideAction = props.hideAction,
      popupVisible = props.popupVisible,
      defaultPopupVisible = props.defaultPopupVisible,
      onPopupVisibleChange = props.onPopupVisibleChange,
      afterPopupVisibleChange = props.afterPopupVisibleChange,
      mouseEnterDelay = props.mouseEnterDelay,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      focusDelay = props.focusDelay,
      blurDelay = props.blurDelay,
      mask = props.mask,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      getPopupContainer = props.getPopupContainer,
      forceRender = props.forceRender,
      autoDestroy = props.autoDestroy,
      destroyPopupOnHide = props.destroyPopupOnHide,
      popup = props.popup,
      popupClassName = props.popupClassName,
      popupStyle = props.popupStyle,
      popupPlacement = props.popupPlacement,
      _props$builtinPlaceme = props.builtinPlacements,
      builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme,
      popupAlign = props.popupAlign,
      zIndex = props.zIndex,
      stretch = props.stretch,
      getPopupClassNameFromAlign = props.getPopupClassNameFromAlign,
      fresh = props.fresh,
      alignPoint = props.alignPoint,
      onPopupClick = props.onPopupClick,
      onPopupAlign = props.onPopupAlign,
      arrow = props.arrow,
      popupMotion = props.popupMotion,
      maskMotion = props.maskMotion,
      popupTransitionName = props.popupTransitionName,
      popupAnimation = props.popupAnimation,
      maskTransitionName = props.maskTransitionName,
      maskAnimation = props.maskAnimation,
      className = props.className,
      getTriggerDOMNode = props.getTriggerDOMNode,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
    var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;

    // =========================== Mobile ===========================
    var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      mobile = _React$useState2[0],
      setMobile = _React$useState2[1];
    (0,useLayoutEffect/* default */.Z)(function () {
      setMobile((0,isMobile/* default */.Z)());
    }, []);

    // ========================== Context ===========================
    var subPopupElements = react.useRef({});
    var parentContext = react.useContext(es_context);
    var context = react.useMemo(function () {
      return {
        registerSubPopup: function registerSubPopup(id, subPopupEle) {
          subPopupElements.current[id] = subPopupEle;
          parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id, subPopupEle);
        }
      };
    }, [parentContext]);

    // =========================== Popup ============================
    var id = (0,useId/* default */.Z)();
    var _React$useState3 = react.useState(null),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      popupEle = _React$useState4[0],
      setPopupEle = _React$useState4[1];

    // Used for forwardRef popup. Not use internal
    var externalPopupRef = react.useRef(null);
    var setPopupRef = (0,useEvent/* default */.Z)(function (node) {
      externalPopupRef.current = node;
      if ((0,findDOMNode/* isDOM */.Sh)(node) && popupEle !== node) {
        setPopupEle(node);
      }
      parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id, node);
    });

    // =========================== Target ===========================
    // Use state to control here since `useRef` update not trigger render
    var _React$useState5 = react.useState(null),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      targetEle = _React$useState6[0],
      setTargetEle = _React$useState6[1];

    // Used for forwardRef target. Not use internal
    var externalForwardRef = react.useRef(null);
    var setTargetRef = (0,useEvent/* default */.Z)(function (node) {
      if ((0,findDOMNode/* isDOM */.Sh)(node) && targetEle !== node) {
        setTargetEle(node);
        externalForwardRef.current = node;
      }
    });

    // ========================== Children ==========================
    var child = react.Children.only(children);
    var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
    var cloneProps = {};
    var inPopupOrChild = (0,useEvent/* default */.Z)(function (ele) {
      var _getShadowRoot, _getShadowRoot2;
      var childDOM = targetEle;
      return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || ((_getShadowRoot = (0,shadow/* getShadowRoot */.A)(childDOM)) === null || _getShadowRoot === void 0 ? void 0 : _getShadowRoot.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || ((_getShadowRoot2 = (0,shadow/* getShadowRoot */.A)(popupEle)) === null || _getShadowRoot2 === void 0 ? void 0 : _getShadowRoot2.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function (subPopupEle) {
        return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
      });
    });

    // =========================== Motion ===========================
    var mergePopupMotion = getMotion(prefixCls, popupMotion, popupAnimation, popupTransitionName);
    var mergeMaskMotion = getMotion(prefixCls, maskMotion, maskAnimation, maskTransitionName);

    // ============================ Open ============================
    var _React$useState7 = react.useState(defaultPopupVisible || false),
      _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
      internalOpen = _React$useState8[0],
      setInternalOpen = _React$useState8[1];

    // Render still use props as first priority
    var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;

    // We use effect sync here in case `popupVisible` back to `undefined`
    var setMergedOpen = (0,useEvent/* default */.Z)(function (nextOpen) {
      if (popupVisible === undefined) {
        setInternalOpen(nextOpen);
      }
    });
    (0,useLayoutEffect/* default */.Z)(function () {
      setInternalOpen(popupVisible || false);
    }, [popupVisible]);
    var openRef = react.useRef(mergedOpen);
    openRef.current = mergedOpen;
    var lastTriggerRef = react.useRef([]);
    lastTriggerRef.current = [];
    var internalTriggerOpen = (0,useEvent/* default */.Z)(function (nextOpen) {
      var _lastTriggerRef$curre;
      setMergedOpen(nextOpen);

      // Enter or Pointer will both trigger open state change
      // We only need take one to avoid duplicated change event trigger
      // Use `lastTriggerRef` to record last open type
      if (((_lastTriggerRef$curre = lastTriggerRef.current[lastTriggerRef.current.length - 1]) !== null && _lastTriggerRef$curre !== void 0 ? _lastTriggerRef$curre : mergedOpen) !== nextOpen) {
        lastTriggerRef.current.push(nextOpen);
        onPopupVisibleChange === null || onPopupVisibleChange === void 0 || onPopupVisibleChange(nextOpen);
      }
    });

    // Trigger for delay
    var delayRef = react.useRef();
    var clearDelay = function clearDelay() {
      clearTimeout(delayRef.current);
    };
    var triggerOpen = function triggerOpen(nextOpen) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      clearDelay();
      if (delay === 0) {
        internalTriggerOpen(nextOpen);
      } else {
        delayRef.current = setTimeout(function () {
          internalTriggerOpen(nextOpen);
        }, delay * 1000);
      }
    };
    react.useEffect(function () {
      return clearDelay;
    }, []);

    // ========================== Motion ============================
    var _React$useState9 = react.useState(false),
      _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
      inMotion = _React$useState10[0],
      setInMotion = _React$useState10[1];
    (0,useLayoutEffect/* default */.Z)(function (firstMount) {
      if (!firstMount || mergedOpen) {
        setInMotion(true);
      }
    }, [mergedOpen]);
    var _React$useState11 = react.useState(null),
      _React$useState12 = (0,slicedToArray/* default */.Z)(_React$useState11, 2),
      motionPrepareResolve = _React$useState12[0],
      setMotionPrepareResolve = _React$useState12[1];

    // =========================== Align ============================
    var _React$useState13 = react.useState(null),
      _React$useState14 = (0,slicedToArray/* default */.Z)(_React$useState13, 2),
      mousePos = _React$useState14[0],
      setMousePos = _React$useState14[1];
    var setMousePosByEvent = function setMousePosByEvent(event) {
      setMousePos([event.clientX, event.clientY]);
    };
    var _useAlign = useAlign(mergedOpen, popupEle, alignPoint && mousePos !== null ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign),
      _useAlign2 = (0,slicedToArray/* default */.Z)(_useAlign, 11),
      ready = _useAlign2[0],
      offsetX = _useAlign2[1],
      offsetY = _useAlign2[2],
      offsetR = _useAlign2[3],
      offsetB = _useAlign2[4],
      arrowX = _useAlign2[5],
      arrowY = _useAlign2[6],
      scaleX = _useAlign2[7],
      scaleY = _useAlign2[8],
      alignInfo = _useAlign2[9],
      onAlign = _useAlign2[10];
    var _useAction = useAction(mobile, action, showAction, hideAction),
      _useAction2 = (0,slicedToArray/* default */.Z)(_useAction, 2),
      showActions = _useAction2[0],
      hideActions = _useAction2[1];
    var clickToShow = showActions.has('click');
    var clickToHide = hideActions.has('click') || hideActions.has('contextMenu');
    var triggerAlign = (0,useEvent/* default */.Z)(function () {
      if (!inMotion) {
        onAlign();
      }
    });
    var onScroll = function onScroll() {
      if (openRef.current && alignPoint && clickToHide) {
        triggerOpen(false);
      }
    };
    useWatch(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
    (0,useLayoutEffect/* default */.Z)(function () {
      triggerAlign();
    }, [mousePos, popupPlacement]);

    // When no builtinPlacements and popupAlign changed
    (0,useLayoutEffect/* default */.Z)(function () {
      if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
        triggerAlign();
      }
    }, [JSON.stringify(popupAlign)]);
    var alignedClassName = react.useMemo(function () {
      var baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
      return classnames_default()(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
    }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);

    // ============================ Refs ============================
    react.useImperativeHandle(ref, function () {
      return {
        nativeElement: externalForwardRef.current,
        popupElement: externalPopupRef.current,
        forceAlign: triggerAlign
      };
    });

    // ========================== Stretch ===========================
    var _React$useState15 = react.useState(0),
      _React$useState16 = (0,slicedToArray/* default */.Z)(_React$useState15, 2),
      targetWidth = _React$useState16[0],
      setTargetWidth = _React$useState16[1];
    var _React$useState17 = react.useState(0),
      _React$useState18 = (0,slicedToArray/* default */.Z)(_React$useState17, 2),
      targetHeight = _React$useState18[0],
      setTargetHeight = _React$useState18[1];
    var syncTargetSize = function syncTargetSize() {
      if (stretch && targetEle) {
        var rect = targetEle.getBoundingClientRect();
        setTargetWidth(rect.width);
        setTargetHeight(rect.height);
      }
    };
    var onTargetResize = function onTargetResize() {
      syncTargetSize();
      triggerAlign();
    };

    // ========================== Motion ============================
    var onVisibleChanged = function onVisibleChanged(visible) {
      setInMotion(false);
      onAlign();
      afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 || afterPopupVisibleChange(visible);
    };

    // We will trigger align when motion is in prepare
    var onPrepare = function onPrepare() {
      return new Promise(function (resolve) {
        syncTargetSize();
        setMotionPrepareResolve(function () {
          return resolve;
        });
      });
    };
    (0,useLayoutEffect/* default */.Z)(function () {
      if (motionPrepareResolve) {
        onAlign();
        motionPrepareResolve();
        setMotionPrepareResolve(null);
      }
    }, [motionPrepareResolve]);

    // =========================== Action ===========================
    /**
     * Util wrapper for trigger action
     */
    function wrapperAction(eventName, nextOpen, delay, preEvent) {
      cloneProps[eventName] = function (event) {
        var _originChildProps$eve;
        preEvent === null || preEvent === void 0 || preEvent(event);
        triggerOpen(nextOpen, delay);

        // Pass to origin
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 || _originChildProps$eve.call.apply(_originChildProps$eve, [originChildProps, event].concat(args));
      };
    }

    // ======================= Action: Click ========================
    if (clickToShow || clickToHide) {
      cloneProps.onClick = function (event) {
        var _originChildProps$onC;
        if (openRef.current && clickToHide) {
          triggerOpen(false);
        } else if (!openRef.current && clickToShow) {
          setMousePosByEvent(event);
          triggerOpen(true);
        }

        // Pass to origin
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 || _originChildProps$onC.call.apply(_originChildProps$onC, [originChildProps, event].concat(args));
      };
    }

    // Click to hide is special action since click popup element should not hide
    var onPopupPointerDown = useWinClick(mergedOpen, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);

    // ======================= Action: Hover ========================
    var hoverToShow = showActions.has('hover');
    var hoverToHide = hideActions.has('hover');
    var onPopupMouseEnter;
    var onPopupMouseLeave;
    if (hoverToShow) {
      // Compatible with old browser which not support pointer event
      wrapperAction('onMouseEnter', true, mouseEnterDelay, function (event) {
        setMousePosByEvent(event);
      });
      wrapperAction('onPointerEnter', true, mouseEnterDelay, function (event) {
        setMousePosByEvent(event);
      });
      onPopupMouseEnter = function onPopupMouseEnter(event) {
        // Only trigger re-open when popup is visible
        if ((mergedOpen || inMotion) && popupEle !== null && popupEle !== void 0 && popupEle.contains(event.target)) {
          triggerOpen(true, mouseEnterDelay);
        }
      };

      // Align Point
      if (alignPoint) {
        cloneProps.onMouseMove = function (event) {
          var _originChildProps$onM;
          // setMousePosByEvent(event);
          (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 || _originChildProps$onM.call(originChildProps, event);
        };
      }
    }
    if (hoverToHide) {
      wrapperAction('onMouseLeave', false, mouseLeaveDelay);
      wrapperAction('onPointerLeave', false, mouseLeaveDelay);
      onPopupMouseLeave = function onPopupMouseLeave() {
        triggerOpen(false, mouseLeaveDelay);
      };
    }

    // ======================= Action: Focus ========================
    if (showActions.has('focus')) {
      wrapperAction('onFocus', true, focusDelay);
    }
    if (hideActions.has('focus')) {
      wrapperAction('onBlur', false, blurDelay);
    }

    // ==================== Action: ContextMenu =====================
    if (showActions.has('contextMenu')) {
      cloneProps.onContextMenu = function (event) {
        var _originChildProps$onC2;
        if (openRef.current && hideActions.has('contextMenu')) {
          triggerOpen(false);
        } else {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        event.preventDefault();

        // Pass to origin
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 || _originChildProps$onC2.call.apply(_originChildProps$onC2, [originChildProps, event].concat(args));
      };
    }

    // ========================= ClassName ==========================
    if (className) {
      cloneProps.className = classnames_default()(originChildProps.className, className);
    }

    // =========================== Render ===========================
    var mergedChildrenProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, originChildProps), cloneProps);

    // Pass props into cloneProps for nest usage
    var passedProps = {};
    var passedEventList = ['onContextMenu', 'onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];
    passedEventList.forEach(function (eventName) {
      if (restProps[eventName]) {
        passedProps[eventName] = function () {
          var _mergedChildrenProps$;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 || _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [mergedChildrenProps].concat(args));
          restProps[eventName].apply(restProps, args);
        };
      }
    });

    // Child Node
    var triggerNode = /*#__PURE__*/react.cloneElement(child, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedChildrenProps), passedProps));
    var arrowPos = {
      x: arrowX,
      y: arrowY
    };
    var innerArrow = arrow ? (0,objectSpread2/* default */.Z)({}, arrow !== true ? arrow : {}) : null;

    // Render
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.Z, {
      disabled: !mergedOpen,
      ref: setTargetRef,
      onResize: onTargetResize
    }, /*#__PURE__*/react.createElement(es_TriggerWrapper, {
      getTriggerDOMNode: getTriggerDOMNode
    }, triggerNode)), /*#__PURE__*/react.createElement(es_context.Provider, {
      value: context
    }, /*#__PURE__*/react.createElement(es_Popup, {
      portal: PortalComponent,
      ref: setPopupRef,
      prefixCls: prefixCls,
      popup: popup,
      className: classnames_default()(popupClassName, alignedClassName),
      style: popupStyle,
      target: targetEle,
      onMouseEnter: onPopupMouseEnter,
      onMouseLeave: onPopupMouseLeave
      // https://github.com/ant-design/ant-design/issues/43924
      ,
      onPointerEnter: onPopupMouseEnter,
      zIndex: zIndex
      // Open
      ,
      open: mergedOpen,
      keepDom: inMotion,
      fresh: fresh
      // Click
      ,
      onClick: onPopupClick,
      onPointerDownCapture: onPopupPointerDown
      // Mask
      ,
      mask: mask
      // Motion
      ,
      motion: mergePopupMotion,
      maskMotion: mergeMaskMotion,
      onVisibleChanged: onVisibleChanged,
      onPrepare: onPrepare
      // Portal
      ,
      forceRender: forceRender,
      autoDestroy: mergedAutoDestroy,
      getPopupContainer: getPopupContainer
      // Arrow
      ,
      align: alignInfo,
      arrow: innerArrow,
      arrowPos: arrowPos
      // Align
      ,
      ready: ready,
      offsetX: offsetX,
      offsetY: offsetY,
      offsetR: offsetR,
      offsetB: offsetB,
      onAlign: triggerAlign
      // Stretch
      ,
      stretch: stretch,
      targetWidth: targetWidth / scaleX,
      targetHeight: targetHeight / scaleY
    })));
  });
  if (false) {}
  return Trigger;
}
/* harmony default export */ var trigger_es = (generateTrigger(es/* default */.Z));

/***/ }),

/***/ 89942:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60566);
/* harmony import */ var _space_Compact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4173);
"use client";




const ContextIsolator = props => {
  const {
    space,
    form,
    children
  } = props;
  if (children === undefined || children === null) {
    return null;
  }
  let result = children;
  if (form) {
    result = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_context__WEBPACK_IMPORTED_MODULE_1__/* .NoFormStyle */ .Ux, {
      override: true,
      status: true
    }, result);
  }
  if (space) {
    result = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_space_Compact__WEBPACK_IMPORTED_MODULE_2__/* .NoCompactStyle */ .BR, null, result);
  }
  return result;
};
/* harmony default export */ __webpack_exports__.Z = (ContextIsolator);

/***/ }),

/***/ 8745:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ withPureRenderTheme; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21770);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83760);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53124);
"use client";




function withPureRenderTheme(Component) {
  return props => (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
    theme: {
      token: {
        motion: false,
        zIndexPopupBase: 0
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, Object.assign({}, props))));
}
/* istanbul ignore next */
const genPurePanel = (Component, alignPropName, postProps, defaultPrefixCls, getDropdownCls) => {
  const PurePanel = props => {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const [popupHeight, setPopupHeight] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const [popupWidth, setPopupWidth] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const [open, setOpen] = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__/* .ConfigContext */ .E_);
    const prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      // We do not care about ssr
      setOpen(true);
      if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(entries => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a;
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    let mergedProps = Object.assign(Object.assign({}, props), {
      style: Object.assign(Object.assign({}, style), {
        margin: 0
      }),
      open,
      visible: open,
      getPopupContainer: () => holderRef.current
    });
    if (postProps) {
      mergedProps = postProps(mergedProps);
    }
    if (alignPropName) {
      Object.assign(mergedProps, {
        [alignPropName]: {
          overflow: {
            adjustX: false,
            adjustY: false
          }
        }
      });
    }
    const mergedStyle = {
      paddingBottom: popupHeight,
      position: 'relative',
      minWidth: popupWidth
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: holderRef,
      style: mergedStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, Object.assign({}, mergedProps)));
  };
  return withPureRenderTheme(PurePanel);
};
/* harmony default export */ __webpack_exports__.Z = (genPurePanel);

/***/ }),

/***/ 98787:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o2: function() { return /* binding */ isPresetColor; },
/* harmony export */   yT: function() { return /* binding */ isPresetStatusColor; }
/* harmony export */ });
/* unused harmony export PresetStatusColorTypes */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74902);
/* harmony import */ var _theme_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8796);


const inverseColors = _theme_interface__WEBPACK_IMPORTED_MODULE_0__/* .PresetColors */ .i.map(color => `${color}-inverse`);
const PresetStatusColorTypes = ['success', 'processing', 'error', 'default', 'warning'];
/**
 * determine if the color keyword belongs to the `Ant Design` {@link PresetColors}.
 * @param color color to be judged
 * @param includeInverse whether to include reversed colors
 */
function isPresetColor(color, includeInverse = true) {
  if (includeInverse) {
    return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(inverseColors), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_theme_interface__WEBPACK_IMPORTED_MODULE_0__/* .PresetColors */ .i)).includes(color);
  }
  return _theme_interface__WEBPACK_IMPORTED_MODULE_0__/* .PresetColors */ .i.includes(color);
}
function isPresetStatusColor(color) {
  return PresetStatusColorTypes.includes(color);
}

/***/ }),

/***/ 98065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: function() { return /* binding */ isValidGapNumber; },
/* harmony export */   n: function() { return /* binding */ isPresetSize; }
/* harmony export */ });
function isPresetSize(size) {
  return ['small', 'middle', 'large'].includes(size);
}
function isValidGapNumber(size) {
  if (!size) {
    // The case of size = 0 is deliberately excluded here, because the default value of the gap attribute in CSS is 0, so if the user passes 0 in, we can directly ignore it.
    return false;
  }
  return typeof size === 'number' && !Number.isNaN(size);
}

/***/ }),

/***/ 2072:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ useClosable; },
  w: function() { return /* binding */ pickClosable; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(97937);
// EXTERNAL MODULE: ./node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(64217);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/useLocale.js
var useLocale = __webpack_require__(10110);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/en_US.js + 6 modules
var en_US = __webpack_require__(3115);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/extendsObject.js
function mergeProps(...items) {
  const ret = {};
  items.forEach(item => {
    if (item) {
      Object.keys(item).forEach(key => {
        if (item[key] !== undefined) {
          ret[key] = item[key];
        }
      });
    }
  });
  return ret;
}
/* harmony default export */ var extendsObject = (mergeProps);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/useClosable.js
"use client";







function pickClosable(context) {
  if (!context) {
    return undefined;
  }
  return {
    closable: context.closable,
    closeIcon: context.closeIcon
  };
}
/** Convert `closable` and `closeIcon` to config object */
function useClosableConfig(closableCollection) {
  const {
    closable,
    closeIcon
  } = closableCollection || {};
  return react.useMemo(() => {
    if (
    // If `closable`, whatever rest be should be true
    !closable && (closable === false || closeIcon === false || closeIcon === null)) {
      return false;
    }
    if (closable === undefined && closeIcon === undefined) {
      return null;
    }
    let closableConfig = {
      closeIcon: typeof closeIcon !== 'boolean' && closeIcon !== null ? closeIcon : undefined
    };
    if (closable && typeof closable === 'object') {
      closableConfig = Object.assign(Object.assign({}, closableConfig), closable);
    }
    return closableConfig;
  }, [closable, closeIcon]);
}
/** Use same object to support `useMemo` optimization */
const EmptyFallbackCloseCollection = {};
function useClosable(propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection) {
  // Align the `props`, `context` `fallback` to config object first
  const propCloseConfig = useClosableConfig(propCloseCollection);
  const contextCloseConfig = useClosableConfig(contextCloseCollection);
  const [contextLocale] = (0,useLocale/* default */.Z)('global', en_US/* default */.Z.global);
  const closeBtnIsDisabled = typeof propCloseConfig !== 'boolean' ? !!(propCloseConfig === null || propCloseConfig === void 0 ? void 0 : propCloseConfig.disabled) : false;
  const mergedFallbackCloseCollection = react.useMemo(() => Object.assign({
    closeIcon: /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null)
  }, fallbackCloseCollection), [fallbackCloseCollection]);
  // Use fallback logic to fill the config
  const mergedClosableConfig = react.useMemo(() => {
    // ================ Props First ================
    // Skip if prop is disabled
    if (propCloseConfig === false) {
      return false;
    }
    if (propCloseConfig) {
      return extendsObject(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig);
    }
    // =============== Context Second ==============
    // Skip if context is disabled
    if (contextCloseConfig === false) {
      return false;
    }
    if (contextCloseConfig) {
      return extendsObject(mergedFallbackCloseCollection, contextCloseConfig);
    }
    // ============= Fallback Default ==============
    return !mergedFallbackCloseCollection.closable ? false : mergedFallbackCloseCollection;
  }, [propCloseConfig, contextCloseConfig, mergedFallbackCloseCollection]);
  // Calculate the final closeIcon
  return react.useMemo(() => {
    if (mergedClosableConfig === false) {
      return [false, null, closeBtnIsDisabled, {}];
    }
    const {
      closeIconRender
    } = mergedFallbackCloseCollection;
    const {
      closeIcon
    } = mergedClosableConfig;
    let mergedCloseIcon = closeIcon;
    // Wrap the closeIcon with aria props
    const ariaOrDataProps = (0,pickAttrs/* default */.Z)(mergedClosableConfig, true);
    if (mergedCloseIcon !== null && mergedCloseIcon !== undefined) {
      // Wrap the closeIcon if needed
      if (closeIconRender) {
        mergedCloseIcon = closeIconRender(closeIcon);
      }
      mergedCloseIcon = /*#__PURE__*/react.isValidElement(mergedCloseIcon) ? (/*#__PURE__*/react.cloneElement(mergedCloseIcon, Object.assign({
        'aria-label': contextLocale.close
      }, ariaOrDataProps))) : (/*#__PURE__*/react.createElement("span", Object.assign({
        "aria-label": contextLocale.close
      }, ariaOrDataProps), mergedCloseIcon));
    }
    return [true, mergedCloseIcon, closeBtnIsDisabled, ariaOrDataProps];
  }, [mergedClosableConfig, mergedFallbackCloseCollection]);
}

/***/ }),

/***/ 33603:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: function() { return /* binding */ getTransitionName; }
/* harmony export */ });
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53124);

// ================== Collapse Motion ==================
const getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
const getRealHeight = node => {
  const {
    scrollHeight
  } = node;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
const getCurrentHeight = node => ({
  height: node ? node.offsetHeight : 0
});
const skipOpacityTransition = (_, event) => (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
const initCollapseMotion = (rootCls = _config_provider__WEBPACK_IMPORTED_MODULE_0__/* .defaultPrefixCls */ .Rf) => ({
  motionName: `${rootCls}-motion-collapse`,
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
});
const _SelectPlacements = (/* unused pure expression or super */ null && (['bottomLeft', 'bottomRight', 'topLeft', 'topRight']));
const getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};

/* harmony default export */ __webpack_exports__.Z = (initCollapseMotion);

/***/ }),

/***/ 36728:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ wave; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(5110);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave/style.js

const genWaveStyle = token => {
  const {
    componentCls,
    colorPrimary
  } = token;
  return {
    [componentCls]: {
      position: 'absolute',
      background: 'transparent',
      pointerEvents: 'none',
      boxSizing: 'border-box',
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      '&.wave-motion-appear': {
        transition: [`box-shadow 0.4s ${token.motionEaseOutCirc}`, `opacity 2s ${token.motionEaseOutCirc}`].join(','),
        '&-active': {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        },
        '&.wave-quick': {
          transition: [`box-shadow ${token.motionDurationSlow} ${token.motionEaseInOut}`, `opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`].join(',')
        }
      }
    }
  };
};
/* harmony default export */ var style = ((0,genStyleUtils/* genComponentStyleHook */.A1)('Wave', token => [genWaveStyle(token)]));
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/useToken.js + 2 modules
var useToken = __webpack_require__(25976);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave/interface.js

const TARGET_CLS = `${context/* defaultPrefixCls */.Rf}-wave-target`;
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 13 modules
var es = __webpack_require__(29372);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/UnstableContext.js + 1 modules
var UnstableContext = __webpack_require__(69711);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave/util.js
function isValidWaveColor(color) {
  return color && color !== '#fff' && color !== '#ffffff' && color !== 'rgb(255, 255, 255)' && color !== 'rgba(255, 255, 255, 1)' && !/rgba\((?:\d*, ){3}0\)/.test(color) &&
  // any transparent rgba color
  color !== 'transparent';
}
function getTargetWaveColor(node) {
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = getComputedStyle(node);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave/WaveEffect.js
"use client";









function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = props => {
  const {
    className,
    target,
    component,
    registerUnmount
  } = props;
  const divRef = react.useRef(null);
  // ====================== Refs ======================
  const unmountRef = react.useRef(null);
  react.useEffect(() => {
    unmountRef.current = registerUnmount();
  }, []);
  // ===================== Effect =====================
  const [color, setWaveColor] = react.useState(null);
  const [borderRadius, setBorderRadius] = react.useState([]);
  const [left, setLeft] = react.useState(0);
  const [top, setTop] = react.useState(0);
  const [width, setWidth] = react.useState(0);
  const [height, setHeight] = react.useState(0);
  const [enabled, setEnabled] = react.useState(false);
  const waveStyle = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map(radius => `${radius}px`).join(' ')
  };
  if (color) {
    waveStyle['--wave-color'] = color;
  }
  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    // Get wave color from target
    setWaveColor(getTargetWaveColor(target));
    const isStatic = nodeStyle.position === 'static';
    // Rect
    const {
      borderLeftWidth,
      borderTopWidth
    } = nodeStyle;
    setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
    setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);
    // Get border radius
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = nodeStyle;
    setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map(radius => validateNum(parseFloat(radius))));
  }
  react.useEffect(() => {
    if (target) {
      // We need delay to check position here
      // since UI may change after click
      const id = (0,raf/* default */.Z)(() => {
        syncPos();
        setEnabled(true);
      });
      // Add resize observer to follow size
      let resizeObserver;
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(syncPos);
        resizeObserver.observe(target);
      }
      return () => {
        raf/* default */.Z.cancel(id);
        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
      };
    }
  }, []);
  if (!enabled) {
    return null;
  }
  const isSmallComponent = (component === 'Checkbox' || component === 'Radio') && (target === null || target === void 0 ? void 0 : target.classList.contains(TARGET_CLS));
  return /*#__PURE__*/react.createElement(es/* default */.ZP, {
    visible: true,
    motionAppear: true,
    motionName: "wave-motion",
    motionDeadline: 5000,
    onAppearEnd: (_, event) => {
      var _a, _b;
      if (event.deadline || event.propertyName === 'opacity') {
        const holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
        (_b = unmountRef.current) === null || _b === void 0 ? void 0 : _b.call(unmountRef).then(() => {
          holder === null || holder === void 0 ? void 0 : holder.remove();
        });
      }
      return false;
    }
  }, ({
    className: motionClassName
  }, ref) => (/*#__PURE__*/react.createElement("div", {
    ref: (0,es_ref/* composeRef */.sQ)(divRef, ref),
    className: classnames_default()(className, motionClassName, {
      'wave-quick': isSmallComponent
    }),
    style: waveStyle
  })));
};
const showWaveEffect = (target, info) => {
  var _a;
  const {
    component
  } = info;
  // Skip for unchecked checkbox
  if (component === 'Checkbox' && !((_a = target.querySelector('input')) === null || _a === void 0 ? void 0 : _a.checked)) {
    return;
  }
  // Create holder
  const holder = document.createElement('div');
  holder.style.position = 'absolute';
  holder.style.left = '0px';
  holder.style.top = '0px';
  target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
  const reactRender = (0,UnstableContext/* unstableSetRender */.q)();
  let unmountCallback = null;
  function registerUnmount() {
    return unmountCallback;
  }
  unmountCallback = reactRender(/*#__PURE__*/react.createElement(WaveEffect, Object.assign({}, info, {
    target: target,
    registerUnmount: registerUnmount
  })), holder);
};
/* harmony default export */ var wave_WaveEffect = (showWaveEffect);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave/useWave.js







const useWave = (nodeRef, className, component) => {
  const {
    wave
  } = react.useContext(context/* ConfigContext */.E_);
  const [, token, hashId] = (0,useToken/* default */.ZP)();
  const showWave = (0,useEvent/* default */.Z)(event => {
    const node = nodeRef.current;
    if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node) {
      return;
    }
    const targetNode = node.querySelector(`.${TARGET_CLS}`) || node;
    const {
      showEffect
    } = wave || {};
    // Customize wave effect
    (showEffect || wave_WaveEffect)(targetNode, {
      className,
      token,
      component,
      event,
      hashId
    });
  });
  const rafId = react.useRef(null);
  // Merge trigger event into one for each frame
  const showDebounceWave = event => {
    raf/* default */.Z.cancel(rafId.current);
    rafId.current = (0,raf/* default */.Z)(() => {
      showWave(event);
    });
  };
  return showDebounceWave;
};
/* harmony default export */ var wave_useWave = (useWave);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave/index.js








const Wave = props => {
  const {
    children,
    disabled,
    component
  } = props;
  const {
    getPrefixCls
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const containerRef = (0,react.useRef)(null);
  // ============================== Style ===============================
  const prefixCls = getPrefixCls('wave');
  const [, hashId] = style(prefixCls);
  // =============================== Wave ===============================
  const showWave = wave_useWave(containerRef, classnames_default()(prefixCls, hashId), component);
  // ============================== Effect ==============================
  react.useEffect(() => {
    const node = containerRef.current;
    if (!node || node.nodeType !== 1 || disabled) {
      return;
    }
    // Click handler
    const onClick = e => {
      // Fix radio button click twice
      if (!(0,isVisible/* default */.Z)(e.target) ||
      // No need wave
      !node.getAttribute || node.getAttribute('disabled') || node.disabled || node.className.includes('disabled') || node.className.includes('-leave')) {
        return;
      }
      showWave(e);
    };
    // Bind events
    node.addEventListener('click', onClick, true);
    return () => {
      node.removeEventListener('click', onClick, true);
    };
  }, [disabled]);
  // ============================== Render ==============================
  if (! /*#__PURE__*/react.isValidElement(children)) {
    return children !== null && children !== void 0 ? children : null;
  }
  const ref = (0,es_ref/* supportRef */.Yr)(children) ? (0,es_ref/* composeRef */.sQ)((0,es_ref/* getNodeRef */.C4)(children), containerRef) : containerRef;
  return (0,reactNode/* cloneElement */.Tm)(children, {
    ref
  });
};
if (false) {}
/* harmony default export */ var wave = (Wave);

/***/ }),

/***/ 40056:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_alert; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(89739);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(4340);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(97937);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(21640);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js + 1 modules
var InfoCircleFilled = __webpack_require__(78860);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 13 modules
var es = __webpack_require__(29372);
// EXTERNAL MODULE: ./node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(64217);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(11568);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
;// CONCATENATED MODULE: ./node_modules/antd/es/alert/style/index.js



const genAlertTypeStyle = (bgColor, borderColor, iconColor, token, alertCls) => ({
  background: bgColor,
  border: `${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} ${token.lineType} ${borderColor}`,
  [`${alertCls}-icon`]: {
    color: iconColor
  }
});
const genBaseStyle = token => {
  const {
    componentCls,
    motionDurationSlow: duration,
    marginXS,
    marginSM,
    fontSize,
    fontSizeLG,
    lineHeight,
    borderRadiusLG: borderRadius,
    motionEaseInOutCirc,
    withDescriptionIconSize,
    colorText,
    colorTextHeading,
    withDescriptionPadding,
    defaultPadding
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: defaultPadding,
      wordWrap: 'break-word',
      borderRadius,
      [`&${componentCls}-rtl`]: {
        direction: 'rtl'
      },
      [`${componentCls}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${componentCls}-icon`]: {
        marginInlineEnd: marginXS,
        lineHeight: 0
      },
      '&-description': {
        display: 'none',
        fontSize,
        lineHeight
      },
      '&-message': {
        color: colorTextHeading
      },
      [`&${componentCls}-motion-leave`]: {
        overflow: 'hidden',
        opacity: 1,
        transition: `max-height ${duration} ${motionEaseInOutCirc}, opacity ${duration} ${motionEaseInOutCirc},
        padding-top ${duration} ${motionEaseInOutCirc}, padding-bottom ${duration} ${motionEaseInOutCirc},
        margin-bottom ${duration} ${motionEaseInOutCirc}`
      },
      [`&${componentCls}-motion-leave-active`]: {
        maxHeight: 0,
        marginBottom: '0 !important',
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    }),
    [`${componentCls}-with-description`]: {
      alignItems: 'flex-start',
      padding: withDescriptionPadding,
      [`${componentCls}-icon`]: {
        marginInlineEnd: marginSM,
        fontSize: withDescriptionIconSize,
        lineHeight: 0
      },
      [`${componentCls}-message`]: {
        display: 'block',
        marginBottom: marginXS,
        color: colorTextHeading,
        fontSize: fontSizeLG
      },
      [`${componentCls}-description`]: {
        display: 'block',
        color: colorText
      }
    },
    [`${componentCls}-banner`]: {
      marginBottom: 0,
      border: '0 !important',
      borderRadius: 0
    }
  };
};
const genTypeStyle = token => {
  const {
    componentCls,
    colorSuccess,
    colorSuccessBorder,
    colorSuccessBg,
    colorWarning,
    colorWarningBorder,
    colorWarningBg,
    colorError,
    colorErrorBorder,
    colorErrorBg,
    colorInfo,
    colorInfoBorder,
    colorInfoBg
  } = token;
  return {
    [componentCls]: {
      '&-success': genAlertTypeStyle(colorSuccessBg, colorSuccessBorder, colorSuccess, token, componentCls),
      '&-info': genAlertTypeStyle(colorInfoBg, colorInfoBorder, colorInfo, token, componentCls),
      '&-warning': genAlertTypeStyle(colorWarningBg, colorWarningBorder, colorWarning, token, componentCls),
      '&-error': Object.assign(Object.assign({}, genAlertTypeStyle(colorErrorBg, colorErrorBorder, colorError, token, componentCls)), {
        [`${componentCls}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
};
const genActionStyle = token => {
  const {
    componentCls,
    iconCls,
    motionDurationMid,
    marginXS,
    fontSizeIcon,
    colorIcon,
    colorIconHover
  } = token;
  return {
    [componentCls]: {
      '&-action': {
        marginInlineStart: marginXS
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: marginXS,
        padding: 0,
        overflow: 'hidden',
        fontSize: fontSizeIcon,
        lineHeight: (0,cssinjs_es/* unit */.bf)(fontSizeIcon),
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        [`${iconCls}-close`]: {
          color: colorIcon,
          transition: `color ${motionDurationMid}`,
          '&:hover': {
            color: colorIconHover
          }
        }
      },
      '&-close-text': {
        color: colorIcon,
        transition: `color ${motionDurationMid}`,
        '&:hover': {
          color: colorIconHover
        }
      }
    }
  };
};
const prepareComponentToken = token => {
  const paddingHorizontal = 12; // Fixed value here.
  return {
    withDescriptionIconSize: token.fontSizeHeading3,
    defaultPadding: `${token.paddingContentVerticalSM}px ${paddingHorizontal}px`,
    withDescriptionPadding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`
  };
};
/* harmony default export */ var alert_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Alert', token => [genBaseStyle(token), genTypeStyle(token), genActionStyle(token)], prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/antd/es/alert/Alert.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};














const iconMapFilled = {
  success: CheckCircleFilled/* default */.Z,
  info: InfoCircleFilled/* default */.Z,
  error: CloseCircleFilled/* default */.Z,
  warning: ExclamationCircleFilled/* default */.Z
};
const IconNode = props => {
  const {
    icon,
    prefixCls,
    type
  } = props;
  const iconType = iconMapFilled[type] || null;
  if (icon) {
    return (0,reactNode/* replaceElement */.wm)(icon, /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-icon`
    }, icon), () => ({
      className: classnames_default()(`${prefixCls}-icon`, icon.props.className)
    }));
  }
  return /*#__PURE__*/react.createElement(iconType, {
    className: `${prefixCls}-icon`
  });
};
const CloseIconNode = props => {
  const {
    isClosable,
    prefixCls,
    closeIcon,
    handleClose,
    ariaProps
  } = props;
  const mergedCloseIcon = closeIcon === true || closeIcon === undefined ? /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null) : closeIcon;
  return isClosable ? (/*#__PURE__*/react.createElement("button", Object.assign({
    type: "button",
    onClick: handleClose,
    className: `${prefixCls}-close-icon`,
    tabIndex: 0
  }, ariaProps), mergedCloseIcon)) : null;
};
const Alert = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      description,
      prefixCls: customizePrefixCls,
      message,
      banner,
      className,
      rootClassName,
      style,
      onMouseEnter,
      onMouseLeave,
      onClick,
      afterClose,
      showIcon,
      closable,
      closeText,
      closeIcon,
      action,
      id
    } = props,
    otherProps = __rest(props, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]);
  const [closed, setClosed] = react.useState(false);
  if (false) {}
  const internalRef = react.useRef(null);
  react.useImperativeHandle(ref, () => ({
    nativeElement: internalRef.current
  }));
  const {
    getPrefixCls,
    direction,
    closable: contextClosable,
    closeIcon: contextCloseIcon,
    className: contextClassName,
    style: contextStyle
  } = (0,context/* useComponentConfig */.dj)('alert');
  const prefixCls = getPrefixCls('alert', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = alert_style(prefixCls);
  const handleClose = e => {
    var _a;
    setClosed(true);
    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };
  const type = react.useMemo(() => {
    if (props.type !== undefined) {
      return props.type;
    }
    // banner mode defaults to 'warning'
    return banner ? 'warning' : 'info';
  }, [props.type, banner]);
  // closeable when closeText or closeIcon is assigned
  const isClosable = react.useMemo(() => {
    if (typeof closable === 'object' && closable.closeIcon) return true;
    if (closeText) {
      return true;
    }
    if (typeof closable === 'boolean') {
      return closable;
    }
    // should be true when closeIcon is 0 or ''
    if (closeIcon !== false && closeIcon !== null && closeIcon !== undefined) {
      return true;
    }
    return !!contextClosable;
  }, [closeText, closeIcon, closable, contextClosable]);
  // banner mode defaults to Icon
  const isShowIcon = banner && showIcon === undefined ? true : showIcon;
  const alertCls = classnames_default()(prefixCls, `${prefixCls}-${type}`, {
    [`${prefixCls}-with-description`]: !!description,
    [`${prefixCls}-no-icon`]: !isShowIcon,
    [`${prefixCls}-banner`]: !!banner,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, contextClassName, className, rootClassName, cssVarCls, hashId);
  const restProps = (0,pickAttrs/* default */.Z)(otherProps, {
    aria: true,
    data: true
  });
  const mergedCloseIcon = react.useMemo(() => {
    if (typeof closable === 'object' && closable.closeIcon) {
      return closable.closeIcon;
    }
    if (closeText) {
      return closeText;
    }
    if (closeIcon !== undefined) {
      return closeIcon;
    }
    if (typeof contextClosable === 'object' && contextClosable.closeIcon) {
      return contextClosable.closeIcon;
    }
    return contextCloseIcon;
  }, [closeIcon, closable, closeText, contextCloseIcon]);
  const mergedAriaProps = react.useMemo(() => {
    const merged = closable !== null && closable !== void 0 ? closable : contextClosable;
    if (typeof merged === 'object') {
      const {
          closeIcon: _
        } = merged,
        ariaProps = __rest(merged, ["closeIcon"]);
      return ariaProps;
    }
    return {};
  }, [closable, contextClosable]);
  return wrapCSSVar(/*#__PURE__*/react.createElement(es/* default */.ZP, {
    visible: !closed,
    motionName: `${prefixCls}-motion`,
    motionAppear: false,
    motionEnter: false,
    onLeaveStart: node => ({
      maxHeight: node.offsetHeight
    }),
    onLeaveEnd: afterClose
  }, ({
    className: motionClassName,
    style: motionStyle
  }, setRef) => (/*#__PURE__*/react.createElement("div", Object.assign({
    id: id,
    ref: (0,es_ref/* composeRef */.sQ)(internalRef, setRef),
    "data-show": !closed,
    className: classnames_default()(alertCls, motionClassName),
    style: Object.assign(Object.assign(Object.assign({}, contextStyle), style), motionStyle),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onClick: onClick,
    role: "alert"
  }, restProps), isShowIcon ? (/*#__PURE__*/react.createElement(IconNode, {
    description: description,
    icon: props.icon,
    prefixCls: prefixCls,
    type: type
  })) : null, /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-content`
  }, message ? /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-message`
  }, message) : null, description ? /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-description`
  }, description) : null), action ? /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-action`
  }, action) : null, /*#__PURE__*/react.createElement(CloseIconNode, {
    isClosable: isClosable,
    prefixCls: prefixCls,
    closeIcon: mergedCloseIcon,
    handleClose: handleClose,
    ariaProps: mergedAriaProps
  })))));
});
if (false) {}
/* harmony default export */ var alert_Alert = (Alert);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(61120);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__(78814);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(82963);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/callSuper.js



function _callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e));
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
;// CONCATENATED MODULE: ./node_modules/antd/es/alert/ErrorBoundary.js
"use client";







let ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, arguments);
    _this.state = {
      error: undefined,
      info: {
        componentStack: ''
      }
    };
    return _this;
  }
  (0,inherits/* default */.Z)(ErrorBoundary, _React$Component);
  return (0,createClass/* default */.Z)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        error,
        info
      });
    }
  }, {
    key: "render",
    value: function render() {
      const {
        message,
        description,
        id,
        children
      } = this.props;
      const {
        error,
        info
      } = this.state;
      const componentStack = (info === null || info === void 0 ? void 0 : info.componentStack) || null;
      const errorMessage = typeof message === 'undefined' ? (error || '').toString() : message;
      const errorDescription = typeof description === 'undefined' ? componentStack : description;
      if (error) {
        return /*#__PURE__*/react.createElement(alert_Alert, {
          id: id,
          type: "error",
          message: errorMessage,
          description: /*#__PURE__*/react.createElement("pre", {
            style: {
              fontSize: '0.9em',
              overflowX: 'auto'
            }
          }, errorDescription)
        });
      }
      return children;
    }
  }]);
}(react.Component);
/* harmony default export */ var alert_ErrorBoundary = (ErrorBoundary);
;// CONCATENATED MODULE: ./node_modules/antd/es/alert/index.js
"use client";



const es_alert_Alert = alert_Alert;
es_alert_Alert.ErrorBoundary = alert_ErrorBoundary;
/* harmony default export */ var es_alert = (es_alert_Alert);

/***/ }),

/***/ 33671:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dn: function() { return /* binding */ isUnBorderedButtonVariant; },
/* harmony export */   aG: function() { return /* binding */ isTwoCNChar; },
/* harmony export */   hU: function() { return /* binding */ spaceChildren; },
/* harmony export */   nx: function() { return /* binding */ convertLegacyProps; }
/* harmony export */ });
/* unused harmony exports isString, _ButtonVariantTypes, _ButtonColorTypes */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74902);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _util_reactNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96159);
/* harmony import */ var _theme_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8796);
"use client";





const rxTwoCNChar = /^[\u4E00-\u9FA5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
function isString(str) {
  return typeof str === 'string';
}
function isUnBorderedButtonVariant(type) {
  return type === 'text' || type === 'link';
}
function splitCNCharsBySpace(child, needInserted) {
  if (child === null || child === undefined) {
    return;
  }
  const SPACE = needInserted ? ' ' : '';
  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_1__/* .cloneElement */ .Tm)(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }
  if (isString(child)) {
    return isTwoCNChar(child) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, child);
  }
  if ((0,_util_reactNode__WEBPACK_IMPORTED_MODULE_1__/* .isFragment */ .M2)(child)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, child);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  let isPrevChildPure = false;
  const childList = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, child => {
    const type = typeof child;
    const isCurrentChildPure = type === 'string' || type === 'number';
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(childList, child => splitCNCharsBySpace(child, needInserted));
}
const _ButtonTypes = (/* unused pure expression or super */ null && (['default', 'primary', 'dashed', 'link', 'text']));
const _ButtonShapes = (/* unused pure expression or super */ null && (['default', 'circle', 'round']));
const _ButtonHTMLTypes = (/* unused pure expression or super */ null && (['submit', 'button', 'reset']));
const _ButtonVariantTypes = (/* unused pure expression or super */ null && (['outlined', 'dashed', 'solid', 'filled', 'text', 'link']));
const _ButtonColorTypes = ['default', 'primary', 'danger'].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_theme_interface__WEBPACK_IMPORTED_MODULE_3__/* .PresetColors */ .i));

/***/ }),

/***/ 77683:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return /* binding */ es_button; }
});

// UNUSED EXPORTS: _ButtonColorTypes, _ButtonVariantTypes, convertLegacyProps, isString, isTwoCNChar, isUnBorderedButtonVariant, spaceChildren

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/wave/index.js + 5 modules
var wave = __webpack_require__(36728);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98866);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(98675);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/useToken.js + 2 modules
var theme_useToken = __webpack_require__(25976);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/button-group.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const GroupSizeContext = /*#__PURE__*/react.createContext(undefined);
const ButtonGroup = props => {
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const {
      prefixCls: customizePrefixCls,
      size,
      className
    } = props,
    others = __rest(props, ["prefixCls", "size", "className"]);
  const prefixCls = getPrefixCls('btn-group', customizePrefixCls);
  const [,, hashId] = (0,theme_useToken/* default */.ZP)();
  const sizeCls = react.useMemo(() => {
    switch (size) {
      case 'large':
        return 'lg';
      case 'small':
        return 'sm';
      default:
        return '';
    }
  }, [size]);
  if (false) {}
  const classes = classnames_default()(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  return /*#__PURE__*/react.createElement(GroupSizeContext.Provider, {
    value: size
  }, /*#__PURE__*/react.createElement("div", Object.assign({}, others, {
    className: classes
  })));
};
/* harmony default export */ var button_group = (ButtonGroup);
// EXTERNAL MODULE: ./node_modules/antd/es/button/buttonHelpers.js
var buttonHelpers = __webpack_require__(33671);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(50888);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 13 modules
var es = __webpack_require__(29372);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/IconWrapper.js
"use client";



const IconWrapper = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
  const {
    className,
    style,
    children,
    prefixCls
  } = props;
  const iconWrapperCls = classnames_default()(`${prefixCls}-icon`, className);
  return /*#__PURE__*/react.createElement("span", {
    ref: ref,
    className: iconWrapperCls,
    style: style
  }, children);
});
/* harmony default export */ var button_IconWrapper = (IconWrapper);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/DefaultLoadingIcon.js
"use client";






const InnerLoadingIcon = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
  const {
    prefixCls,
    className,
    style,
    iconClassName
  } = props;
  const mergedIconCls = classnames_default()(`${prefixCls}-loading-icon`, className);
  return /*#__PURE__*/react.createElement(button_IconWrapper, {
    prefixCls: prefixCls,
    className: mergedIconCls,
    style: style,
    ref: ref
  }, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
    className: iconClassName
  }));
});
const getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: 'scale(0)'
});
const getRealWidth = node => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: 'scale(1)'
});
const DefaultLoadingIcon = props => {
  const {
    prefixCls,
    loading,
    existIcon,
    className,
    style,
    mount
  } = props;
  const visible = !!loading;
  if (existIcon) {
    return /*#__PURE__*/react.createElement(InnerLoadingIcon, {
      prefixCls: prefixCls,
      className: className,
      style: style
    });
  }
  return /*#__PURE__*/react.createElement(es/* default */.ZP, {
    visible: visible,
    // Used for minus flex gap style only
    motionName: `${prefixCls}-loading-icon-motion`,
    motionAppear: !mount,
    motionEnter: !mount,
    motionLeave: !mount,
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, ({
    className: motionCls,
    style: motionStyle
  }, ref) => {
    const mergedStyle = Object.assign(Object.assign({}, style), motionStyle);
    return /*#__PURE__*/react.createElement(InnerLoadingIcon, {
      prefixCls: prefixCls,
      className: classnames_default()(className, motionCls),
      style: mergedStyle,
      ref: ref
    });
  });
};
/* harmony default export */ var button_DefaultLoadingIcon = (DefaultLoadingIcon);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(11568);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/interface/presetColors.js
var presetColors = __webpack_require__(8796);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83262);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/style/group.js
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    '&:not(:last-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineEndColor: borderColor
        }
      }
    },
    '&:not(:first-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle = token => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    groupBorderColor,
    colorErrorHover
  } = token;
  return {
    [`${componentCls}-group`]: [{
      position: 'relative',
      display: 'inline-flex',
      // Border
      [`> span, > ${componentCls}`]: {
        '&:not(:last-child)': {
          [`&, & > ${componentCls}`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        '&:not(:first-child)': {
          marginInlineStart: token.calc(lineWidth).mul(-1).equal(),
          [`&, & > ${componentCls}`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      },
      [componentCls]: {
        position: 'relative',
        zIndex: 1,
        '&:hover, &:focus, &:active': {
          zIndex: 2
        },
        '&[disabled]': {
          zIndex: 0
        }
      },
      [`${componentCls}-icon-only`]: {
        fontSize
      }
    },
    // Border Color
    genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor), genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)]
  };
};
/* harmony default export */ var group = (genGroupStyle);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper = __webpack_require__(29388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@ant-design/fast-color/es/index.js + 1 modules
var fast_color_es = __webpack_require__(15063);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/color.js







var _excluded = ["b"],
  _excluded2 = ["v"];

var getRoundNumber = function getRoundNumber(value) {
  return Math.round(Number(value || 0));
};
var convertHsb2Hsv = function convertHsb2Hsv(color) {
  if (color instanceof fast_color_es/* FastColor */.t) {
    return color;
  }
  if (color && (0,esm_typeof/* default */.Z)(color) === 'object' && 'h' in color && 'b' in color) {
    var _ref = color,
      b = _ref.b,
      resets = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, resets), {}, {
      v: b
    });
  }
  if (typeof color === 'string' && /hsb/.test(color)) {
    return color.replace(/hsb/, 'hsv');
  }
  return color;
};
var color_Color = /*#__PURE__*/function (_FastColor) {
  (0,inherits/* default */.Z)(Color, _FastColor);
  var _super = (0,createSuper/* default */.Z)(Color);
  function Color(color) {
    (0,classCallCheck/* default */.Z)(this, Color);
    return _super.call(this, convertHsb2Hsv(color));
  }
  (0,createClass/* default */.Z)(Color, [{
    key: "toHsbString",
    value: function toHsbString() {
      var hsb = this.toHsb();
      var saturation = getRoundNumber(hsb.s * 100);
      var lightness = getRoundNumber(hsb.b * 100);
      var hue = getRoundNumber(hsb.h);
      var alpha = hsb.a;
      var hsbString = "hsb(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%)");
      var hsbaString = "hsba(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%, ").concat(alpha.toFixed(alpha === 0 ? 0 : 2), ")");
      return alpha === 1 ? hsbString : hsbaString;
    }
  }, {
    key: "toHsb",
    value: function toHsb() {
      var _this$toHsv = this.toHsv(),
        v = _this$toHsv.v,
        resets = (0,objectWithoutProperties/* default */.Z)(_this$toHsv, _excluded2);
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, resets), {}, {
        b: v,
        a: this.a
      });
    }
  }]);
  return Color;
}(fast_color_es/* FastColor */.t);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/util.js


var util_ColorPickerPrefixCls = 'rc-color-picker';
var util_generateColor = function generateColor(color) {
  if (color instanceof color_Color) {
    return color;
  }
  return new color_Color(color);
};
var util_defaultColor = util_generateColor('#1677ff');
var util_calculateColor = function calculateColor(props) {
  var offset = props.offset,
    targetRef = props.targetRef,
    containerRef = props.containerRef,
    color = props.color,
    type = props.type;
  var _containerRef$current = containerRef.current.getBoundingClientRect(),
    width = _containerRef$current.width,
    height = _containerRef$current.height;
  var _targetRef$current$ge = targetRef.current.getBoundingClientRect(),
    targetWidth = _targetRef$current$ge.width,
    targetHeight = _targetRef$current$ge.height;
  var centerOffsetX = targetWidth / 2;
  var centerOffsetY = targetHeight / 2;
  var saturation = (offset.x + centerOffsetX) / width;
  var bright = 1 - (offset.y + centerOffsetY) / height;
  var hsb = color.toHsb();
  var alphaOffset = saturation;
  var hueOffset = (offset.x + centerOffsetX) / width * 360;
  if (type) {
    switch (type) {
      case 'hue':
        return util_generateColor(_objectSpread(_objectSpread({}, hsb), {}, {
          h: hueOffset <= 0 ? 0 : hueOffset
        }));
      case 'alpha':
        return util_generateColor(_objectSpread(_objectSpread({}, hsb), {}, {
          a: alphaOffset <= 0 ? 0 : alphaOffset
        }));
    }
  }
  return util_generateColor({
    h: hsb.h,
    s: saturation <= 0 ? 0 : saturation,
    b: bright >= 1 ? 1 : bright,
    a: hsb.a
  });
};
var util_calcOffset = function calcOffset(color, type) {
  var hsb = color.toHsb();
  switch (type) {
    case 'hue':
      return {
        x: hsb.h / 360 * 100,
        y: 50
      };
    case 'alpha':
      return {
        x: color.a * 100,
        y: 50
      };

    // Picker panel
    default:
      return {
        x: hsb.s * 100,
        y: (1 - hsb.b) * 100
      };
  }
};
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/ColorBlock.js


var ColorBlock_ColorBlock = function ColorBlock(_ref) {
  var color = _ref.color,
    prefixCls = _ref.prefixCls,
    className = _ref.className,
    style = _ref.style,
    onClick = _ref.onClick;
  var colorBlockCls = "".concat(prefixCls, "-color-block");
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(colorBlockCls, className),
    style: style,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(colorBlockCls, "-inner"),
    style: {
      background: color
    }
  }));
};
/* harmony default export */ var components_ColorBlock = ((/* unused pure expression or super */ null && (ColorBlock_ColorBlock)));
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/hooks/useColorDrag.js


function getPosition(e) {
  var obj = 'touches' in e ? e.touches[0] : e;
  var scrollXOffset = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset;
  var scrollYOffset = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: obj.pageX - scrollXOffset,
    pageY: obj.pageY - scrollYOffset
  };
}
function useColorDrag_useColorDrag(props) {
  var targetRef = props.targetRef,
    containerRef = props.containerRef,
    direction = props.direction,
    onDragChange = props.onDragChange,
    onDragChangeComplete = props.onDragChangeComplete,
    calculate = props.calculate,
    color = props.color,
    disabledDrag = props.disabledDrag;
  var _useState = useState({
      x: 0,
      y: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    offsetValue = _useState2[0],
    setOffsetValue = _useState2[1];
  var mouseMoveRef = useRef(null);
  var mouseUpRef = useRef(null);

  // Always get position from `color`
  useEffect(function () {
    setOffsetValue(calculate());
  }, [color]);
  useEffect(function () {
    return function () {
      document.removeEventListener('mousemove', mouseMoveRef.current);
      document.removeEventListener('mouseup', mouseUpRef.current);
      document.removeEventListener('touchmove', mouseMoveRef.current);
      document.removeEventListener('touchend', mouseUpRef.current);
      mouseMoveRef.current = null;
      mouseUpRef.current = null;
    };
  }, []);
  var updateOffset = function updateOffset(e) {
    var _getPosition = getPosition(e),
      pageX = _getPosition.pageX,
      pageY = _getPosition.pageY;
    var _containerRef$current = containerRef.current.getBoundingClientRect(),
      rectX = _containerRef$current.x,
      rectY = _containerRef$current.y,
      width = _containerRef$current.width,
      height = _containerRef$current.height;
    var _targetRef$current$ge = targetRef.current.getBoundingClientRect(),
      targetWidth = _targetRef$current$ge.width,
      targetHeight = _targetRef$current$ge.height;
    var centerOffsetX = targetWidth / 2;
    var centerOffsetY = targetHeight / 2;
    var offsetX = Math.max(0, Math.min(pageX - rectX, width)) - centerOffsetX;
    var offsetY = Math.max(0, Math.min(pageY - rectY, height)) - centerOffsetY;
    var calcOffset = {
      x: offsetX,
      y: direction === 'x' ? offsetValue.y : offsetY
    };

    // Exclusion of boundary cases
    if (targetWidth === 0 && targetHeight === 0 || targetWidth !== targetHeight) {
      return false;
    }
    onDragChange === null || onDragChange === void 0 || onDragChange(calcOffset);
  };
  var onDragMove = function onDragMove(e) {
    e.preventDefault();
    updateOffset(e);
  };
  var onDragStop = function onDragStop(e) {
    e.preventDefault();
    document.removeEventListener('mousemove', mouseMoveRef.current);
    document.removeEventListener('mouseup', mouseUpRef.current);
    document.removeEventListener('touchmove', mouseMoveRef.current);
    document.removeEventListener('touchend', mouseUpRef.current);
    mouseMoveRef.current = null;
    mouseUpRef.current = null;
    onDragChangeComplete === null || onDragChangeComplete === void 0 || onDragChangeComplete();
  };
  var onDragStart = function onDragStart(e) {
    // https://github.com/ant-design/ant-design/issues/43529
    document.removeEventListener('mousemove', mouseMoveRef.current);
    document.removeEventListener('mouseup', mouseUpRef.current);
    if (disabledDrag) {
      return;
    }
    updateOffset(e);
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragStop);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragStop);
    mouseMoveRef.current = onDragMove;
    mouseUpRef.current = onDragStop;
  };
  return [offsetValue, onDragStart];
}
/* harmony default export */ var hooks_useColorDrag = ((/* unused pure expression or super */ null && (useColorDrag_useColorDrag)));
// EXTERNAL MODULE: ./node_modules/rc-util/es/index.js
var rc_util_es = __webpack_require__(56790);
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Handler.js



var Handler_Handler = function Handler(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'default' : _ref$size,
    color = _ref.color,
    prefixCls = _ref.prefixCls;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixCls, "-handler"), _defineProperty({}, "".concat(prefixCls, "-handler-sm"), size === 'small')),
    style: {
      backgroundColor: color
    }
  });
};
/* harmony default export */ var components_Handler = ((/* unused pure expression or super */ null && (Handler_Handler)));
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Palette.js


var Palette_Palette = function Palette(_ref) {
  var children = _ref.children,
    style = _ref.style,
    prefixCls = _ref.prefixCls;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-palette"),
    style: _objectSpread({
      position: 'relative'
    }, style)
  }, children);
};
/* harmony default export */ var components_Palette = ((/* unused pure expression or super */ null && (Palette_Palette)));
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Transform.js

var Transform_Transform = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function (props, ref) {
  var children = props.children,
    x = props.x,
    y = props.y;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'absolute',
      left: "".concat(x, "%"),
      top: "".concat(y, "%"),
      zIndex: 1,
      transform: 'translate(-50%, -50%)'
    }
  }, children);
})));
/* harmony default export */ var components_Transform = ((/* unused pure expression or super */ null && (Transform_Transform)));
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Picker.js








var Picker_Picker = function Picker(_ref) {
  var color = _ref.color,
    onChange = _ref.onChange,
    prefixCls = _ref.prefixCls,
    onChangeComplete = _ref.onChangeComplete,
    disabled = _ref.disabled;
  var pickerRef = useRef();
  var transformRef = useRef();
  var colorRef = useRef(color);
  var onDragChange = useEvent(function (offsetValue) {
    var calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: pickerRef,
      color: color
    });
    colorRef.current = calcColor;
    onChange(calcColor);
  });
  var _useColorDrag = useColorDrag({
      color: color,
      containerRef: pickerRef,
      targetRef: transformRef,
      calculate: function calculate() {
        return calcOffset(color);
      },
      onDragChange: onDragChange,
      onDragChangeComplete: function onDragChangeComplete() {
        return onChangeComplete === null || onChangeComplete === void 0 ? void 0 : onChangeComplete(colorRef.current);
      },
      disabledDrag: disabled
    }),
    _useColorDrag2 = _slicedToArray(_useColorDrag, 2),
    offset = _useColorDrag2[0],
    dragStartHandle = _useColorDrag2[1];
  return /*#__PURE__*/React.createElement("div", {
    ref: pickerRef,
    className: "".concat(prefixCls, "-select"),
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, /*#__PURE__*/React.createElement(Palette, {
    prefixCls: prefixCls
  }, /*#__PURE__*/React.createElement(Transform, {
    x: offset.x,
    y: offset.y,
    ref: transformRef
  }, /*#__PURE__*/React.createElement(Handler, {
    color: color.toRgbString(),
    prefixCls: prefixCls
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(color.toHsb().h, ",100%, 50%)"),
      backgroundImage: 'linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))'
    }
  })));
};
/* harmony default export */ var components_Picker = ((/* unused pure expression or super */ null && (Picker_Picker)));
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/hooks/useColorState.js




var useColorState_useColorState = function useColorState(defaultValue, value) {
  var _useMergedState = useMergedState(defaultValue, {
      value: value
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var color = useMemo(function () {
    return generateColor(mergedValue);
  }, [mergedValue]);
  return [color, setValue];
};
/* harmony default export */ var hooks_useColorState = ((/* unused pure expression or super */ null && (useColorState_useColorState)));
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Gradient.js



var Gradient_Gradient = function Gradient(_ref) {
  var colors = _ref.colors,
    children = _ref.children,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'to right' : _ref$direction,
    type = _ref.type,
    prefixCls = _ref.prefixCls;
  var gradientColors = useMemo(function () {
    return colors.map(function (color, idx) {
      var result = generateColor(color);
      if (type === 'alpha' && idx === colors.length - 1) {
        result = new Color(result.setA(1));
      }
      return result.toRgbString();
    }).join(',');
  }, [colors, type]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-gradient"),
    style: {
      position: 'absolute',
      inset: 0,
      background: "linear-gradient(".concat(direction, ", ").concat(gradientColors, ")")
    }
  }, children);
};
/* harmony default export */ var components_Gradient = ((/* unused pure expression or super */ null && (Gradient_Gradient)));
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/components/Slider.js











var Slider_Slider = function Slider(props) {
  var prefixCls = props.prefixCls,
    colors = props.colors,
    disabled = props.disabled,
    onChange = props.onChange,
    onChangeComplete = props.onChangeComplete,
    color = props.color,
    type = props.type;
  var sliderRef = useRef();
  var transformRef = useRef();
  var colorRef = useRef(color);
  var getValue = function getValue(c) {
    return type === 'hue' ? c.getHue() : c.a * 100;
  };
  var onDragChange = useEvent(function (offsetValue) {
    var calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: sliderRef,
      color: color,
      type: type
    });
    colorRef.current = calcColor;
    onChange(getValue(calcColor));
  });
  var _useColorDrag = useColorDrag({
      color: color,
      targetRef: transformRef,
      containerRef: sliderRef,
      calculate: function calculate() {
        return calcOffset(color, type);
      },
      onDragChange: onDragChange,
      onDragChangeComplete: function onDragChangeComplete() {
        onChangeComplete(getValue(colorRef.current));
      },
      direction: 'x',
      disabledDrag: disabled
    }),
    _useColorDrag2 = _slicedToArray(_useColorDrag, 2),
    offset = _useColorDrag2[0],
    dragStartHandle = _useColorDrag2[1];
  var handleColor = React.useMemo(function () {
    if (type === 'hue') {
      var hsb = color.toHsb();
      hsb.s = 1;
      hsb.b = 1;
      hsb.a = 1;
      var lightColor = new Color(hsb);
      return lightColor;
    }
    return color;
  }, [color, type]);

  // ========================= Gradient =========================
  var gradientList = React.useMemo(function () {
    return colors.map(function (info) {
      return "".concat(info.color, " ").concat(info.percent, "%");
    });
  }, [colors]);

  // ========================== Render ==========================
  return /*#__PURE__*/React.createElement("div", {
    ref: sliderRef,
    className: classNames("".concat(prefixCls, "-slider"), "".concat(prefixCls, "-slider-").concat(type)),
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, /*#__PURE__*/React.createElement(Palette, {
    prefixCls: prefixCls
  }, /*#__PURE__*/React.createElement(Transform, {
    x: offset.x,
    y: offset.y,
    ref: transformRef
  }, /*#__PURE__*/React.createElement(Handler, {
    size: "small",
    color: handleColor.toHexString(),
    prefixCls: prefixCls
  })), /*#__PURE__*/React.createElement(Gradient, {
    colors: gradientList,
    type: type,
    prefixCls: prefixCls
  })));
};
/* harmony default export */ var components_Slider = ((/* unused pure expression or super */ null && (Slider_Slider)));
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/hooks/useComponent.js


function useComponent_useComponent(components) {
  return React.useMemo(function () {
    var _ref = components || {},
      slider = _ref.slider;
    return [slider || Slider];
  }, [components]);
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/ColorPicker.js











var HUE_COLORS = [{
  color: 'rgb(255, 0, 0)',
  percent: 0
}, {
  color: 'rgb(255, 255, 0)',
  percent: 17
}, {
  color: 'rgb(0, 255, 0)',
  percent: 33
}, {
  color: 'rgb(0, 255, 255)',
  percent: 50
}, {
  color: 'rgb(0, 0, 255)',
  percent: 67
}, {
  color: 'rgb(255, 0, 255)',
  percent: 83
}, {
  color: 'rgb(255, 0, 0)',
  percent: 100
}];
var ColorPicker_ColorPicker = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function (props, ref) {
  var value = props.value,
    defaultValue = props.defaultValue,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? ColorPickerPrefixCls : _props$prefixCls,
    onChange = props.onChange,
    onChangeComplete = props.onChangeComplete,
    className = props.className,
    style = props.style,
    panelRender = props.panelRender,
    _props$disabledAlpha = props.disabledAlpha,
    disabledAlpha = _props$disabledAlpha === void 0 ? false : _props$disabledAlpha,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    components = props.components;

  // ========================== Components ==========================
  var _useComponent = useComponent(components),
    _useComponent2 = _slicedToArray(_useComponent, 1),
    Slider = _useComponent2[0];

  // ============================ Color =============================
  var _useColorState = useColorState(defaultValue || defaultColor, value),
    _useColorState2 = _slicedToArray(_useColorState, 2),
    colorValue = _useColorState2[0],
    setColorValue = _useColorState2[1];
  var alphaColor = useMemo(function () {
    return colorValue.setA(1).toRgbString();
  }, [colorValue]);

  // ============================ Events ============================
  var handleChange = function handleChange(data, type) {
    if (!value) {
      setColorValue(data);
    }
    onChange === null || onChange === void 0 || onChange(data, type);
  };

  // Convert
  var getHueColor = function getHueColor(hue) {
    return new Color(colorValue.setHue(hue));
  };
  var getAlphaColor = function getAlphaColor(alpha) {
    return new Color(colorValue.setA(alpha / 100));
  };

  // Slider change
  var onHueChange = function onHueChange(hue) {
    handleChange(getHueColor(hue), {
      type: 'hue',
      value: hue
    });
  };
  var onAlphaChange = function onAlphaChange(alpha) {
    handleChange(getAlphaColor(alpha), {
      type: 'alpha',
      value: alpha
    });
  };

  // Complete
  var onHueChangeComplete = function onHueChangeComplete(hue) {
    if (onChangeComplete) {
      onChangeComplete(getHueColor(hue));
    }
  };
  var onAlphaChangeComplete = function onAlphaChangeComplete(alpha) {
    if (onChangeComplete) {
      onChangeComplete(getAlphaColor(alpha));
    }
  };

  // ============================ Render ============================
  var mergeCls = classNames("".concat(prefixCls, "-panel"), className, _defineProperty({}, "".concat(prefixCls, "-panel-disabled"), disabled));
  var sharedSliderProps = {
    prefixCls: prefixCls,
    disabled: disabled,
    color: colorValue
  };
  var defaultPanel = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Picker, _extends({
    onChange: handleChange
  }, sharedSliderProps, {
    onChangeComplete: onChangeComplete
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-slider-container")
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixCls, "-slider-group"), _defineProperty({}, "".concat(prefixCls, "-slider-group-disabled-alpha"), disabledAlpha))
  }, /*#__PURE__*/React.createElement(Slider, _extends({}, sharedSliderProps, {
    type: "hue",
    colors: HUE_COLORS,
    min: 0,
    max: 359,
    value: colorValue.getHue(),
    onChange: onHueChange,
    onChangeComplete: onHueChangeComplete
  })), !disabledAlpha && /*#__PURE__*/React.createElement(Slider, _extends({}, sharedSliderProps, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: 'rgba(255, 0, 4, 0)'
    }, {
      percent: 100,
      color: alphaColor
    }],
    min: 0,
    max: 100,
    value: colorValue.a * 100,
    onChange: onAlphaChange,
    onChangeComplete: onAlphaChangeComplete
  }))), /*#__PURE__*/React.createElement(ColorBlock, {
    color: colorValue.toRgbString(),
    prefixCls: prefixCls
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: mergeCls,
    style: style,
    ref: ref
  }, typeof panelRender === 'function' ? panelRender(defaultPanel) : defaultPanel);
})));
if (false) {}
/* harmony default export */ var es_ColorPicker = ((/* unused pure expression or super */ null && (ColorPicker_ColorPicker)));
;// CONCATENATED MODULE: ./node_modules/@rc-component/color-picker/es/index.js




/* harmony default export */ var color_picker_es = ((/* unused pure expression or super */ null && (ColorPicker)));
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/color.js



const toHexFormat = (value, alpha) => (value === null || value === void 0 ? void 0 : value.replace(/[^\w/]/g, '').slice(0, alpha ? 8 : 6)) || '';
const getHex = (value, alpha) => value ? toHexFormat(value, alpha) : '';
let AggregationColor = /*#__PURE__*/function () {
  function AggregationColor(color) {
    (0,classCallCheck/* default */.Z)(this, AggregationColor);
    var _a;
    this.cleared = false;
    // Clone from another AggregationColor
    if (color instanceof AggregationColor) {
      this.metaColor = color.metaColor.clone();
      this.colors = (_a = color.colors) === null || _a === void 0 ? void 0 : _a.map(info => ({
        color: new AggregationColor(info.color),
        percent: info.percent
      }));
      this.cleared = color.cleared;
      return;
    }
    const isArray = Array.isArray(color);
    if (isArray && color.length) {
      this.colors = color.map(({
        color: c,
        percent
      }) => ({
        color: new AggregationColor(c),
        percent
      }));
      this.metaColor = new color_Color(this.colors[0].color.metaColor);
    } else {
      this.metaColor = new color_Color(isArray ? '' : color);
    }
    if (!color || isArray && !this.colors) {
      this.metaColor = this.metaColor.setA(0);
      this.cleared = true;
    }
  }
  return (0,createClass/* default */.Z)(AggregationColor, [{
    key: "toHsb",
    value: function toHsb() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function toHsbString() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function toHex() {
      return getHex(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function toHexString() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function toRgbString() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function isGradient() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function getColors() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function toCssString() {
      const {
        colors
      } = this;
      // CSS line-gradient
      if (colors) {
        const colorsStr = colors.map(c => `${c.color.toRgbString()} ${c.percent}%`).join(', ');
        return `linear-gradient(90deg, ${colorsStr})`;
      }
      return this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function equals(color) {
      if (!color || this.isGradient() !== color.isGradient()) {
        return false;
      }
      if (!this.isGradient()) {
        return this.toHexString() === color.toHexString();
      }
      return this.colors.length === color.colors.length && this.colors.every((c, i) => {
        const target = color.colors[i];
        return c.percent === target.percent && c.color.equals(target.color);
      });
    }
  }]);
}();
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var hooks_useMergedState = __webpack_require__(21770);
;// CONCATENATED MODULE: ./node_modules/antd/es/color-picker/components/ColorPresets.js
"use client";









const genPresetColor = list => list.map(value => {
  value.colors = value.colors.map(generateColor);
  return value;
});
const isBright = (value, bgColorToken) => {
  const {
    r,
    g,
    b,
    a
  } = value.toRgb();
  const hsv = new color_Color(value.toRgbString()).onBackground(bgColorToken).toHsv();
  if (a <= 0.5) {
    // Adapted to dark mode
    return hsv.v > 0.5;
  }
  return r * 0.299 + g * 0.587 + b * 0.114 > 192;
};
const genCollapsePanelKey = (preset, index) => {
  var _a;
  const mergedKey = (_a = preset.key) !== null && _a !== void 0 ? _a : index;
  return `panel-${mergedKey}`;
};
const ColorPresets = ({
  prefixCls,
  presets,
  value: color,
  onChange
}) => {
  const [locale] = useLocale('ColorPicker');
  const [, token] = useToken();
  const [presetsValue] = useMergedState(genPresetColor(presets), {
    value: genPresetColor(presets),
    postState: genPresetColor
  });
  const colorPresetsPrefixCls = `${prefixCls}-presets`;
  const activeKeys = useMemo(() => presetsValue.reduce((acc, preset, index) => {
    const {
      defaultOpen = true
    } = preset;
    if (defaultOpen) {
      acc.push(genCollapsePanelKey(preset, index));
    }
    return acc;
  }, []), [presetsValue]);
  const handleClick = colorValue => {
    onChange === null || onChange === void 0 ? void 0 : onChange(colorValue);
  };
  const items = presetsValue.map((preset, index) => {
    var _a;
    return {
      key: genCollapsePanelKey(preset, index),
      label: /*#__PURE__*/React.createElement("div", {
        className: `${colorPresetsPrefixCls}-label`
      }, preset === null || preset === void 0 ? void 0 : preset.label),
      children: (/*#__PURE__*/React.createElement("div", {
        className: `${colorPresetsPrefixCls}-items`
      }, Array.isArray(preset === null || preset === void 0 ? void 0 : preset.colors) && ((_a = preset.colors) === null || _a === void 0 ? void 0 : _a.length) > 0 ? preset.colors.map((presetColor, index) => (/*#__PURE__*/React.createElement(ColorBlock
      // eslint-disable-next-line react/no-array-index-key
      , {
        // eslint-disable-next-line react/no-array-index-key
        key: `preset-${index}-${presetColor.toHexString()}`,
        color: generateColor(presetColor).toRgbString(),
        prefixCls: prefixCls,
        className: classNames(`${colorPresetsPrefixCls}-color`, {
          [`${colorPresetsPrefixCls}-color-checked`]: presetColor.toHexString() === (color === null || color === void 0 ? void 0 : color.toHexString()),
          [`${colorPresetsPrefixCls}-color-bright`]: isBright(presetColor, token.colorBgElevated)
        }),
        onClick: () => handleClick(presetColor)
      }))) : (/*#__PURE__*/React.createElement("span", {
        className: `${colorPresetsPrefixCls}-empty`
      }, locale.presetEmpty))))
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: colorPresetsPrefixCls
  }, /*#__PURE__*/React.createElement(Collapse, {
    defaultActiveKey: activeKeys,
    ghost: true,
    items: items
  }));
};
/* harmony default export */ var components_ColorPresets = ((/* unused pure expression or super */ null && (ColorPresets)));
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/shared/genFontSizes.js
var genFontSizes = __webpack_require__(51734);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/getAlphaColor.js
var getAlphaColor = __webpack_require__(42642);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/style/token.js






const prepareToken = token => {
  const {
    paddingInline,
    onlyIconSize
  } = token;
  const buttonToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    buttonPaddingHorizontal: paddingInline,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: onlyIconSize
  });
  return buttonToken;
};
const prepareComponentToken = token => {
  var _a, _b, _c, _d, _e, _f;
  const contentFontSize = (_a = token.contentFontSize) !== null && _a !== void 0 ? _a : token.fontSize;
  const contentFontSizeSM = (_b = token.contentFontSizeSM) !== null && _b !== void 0 ? _b : token.fontSize;
  const contentFontSizeLG = (_c = token.contentFontSizeLG) !== null && _c !== void 0 ? _c : token.fontSizeLG;
  const contentLineHeight = (_d = token.contentLineHeight) !== null && _d !== void 0 ? _d : (0,genFontSizes/* getLineHeight */.D)(contentFontSize);
  const contentLineHeightSM = (_e = token.contentLineHeightSM) !== null && _e !== void 0 ? _e : (0,genFontSizes/* getLineHeight */.D)(contentFontSizeSM);
  const contentLineHeightLG = (_f = token.contentLineHeightLG) !== null && _f !== void 0 ? _f : (0,genFontSizes/* getLineHeight */.D)(contentFontSizeLG);
  const solidTextColor = isBright(new AggregationColor(token.colorBgSolid), '#fff') ? '#000' : '#fff';
  const shadowColorTokens = presetColors/* PresetColors */.i.reduce((prev, colorKey) => Object.assign(Object.assign({}, prev), {
    [`${colorKey}ShadowColor`]: `0 ${(0,cssinjs_es/* unit */.bf)(token.controlOutlineWidth)} 0 ${(0,getAlphaColor/* default */.Z)(token[`${colorKey}1`], token.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, shadowColorTokens), {
    fontWeight: 400,
    defaultShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`,
    primaryShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`,
    dangerShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`,
    primaryColor: token.colorTextLightSolid,
    dangerColor: token.colorTextLightSolid,
    borderColorDisabled: token.colorBorder,
    defaultGhostColor: token.colorBgContainer,
    ghostBg: 'transparent',
    defaultGhostBorderColor: token.colorBgContainer,
    paddingInline: token.paddingContentHorizontal - token.lineWidth,
    paddingInlineLG: token.paddingContentHorizontal - token.lineWidth,
    paddingInlineSM: 8 - token.lineWidth,
    onlyIconSize: 'inherit',
    onlyIconSizeSM: 'inherit',
    onlyIconSizeLG: 'inherit',
    groupBorderColor: token.colorPrimaryHover,
    linkHoverBg: 'transparent',
    textTextColor: token.colorText,
    textTextHoverColor: token.colorText,
    textTextActiveColor: token.colorText,
    textHoverBg: token.colorFillTertiary,
    defaultColor: token.colorText,
    defaultBg: token.colorBgContainer,
    defaultBorderColor: token.colorBorder,
    defaultBorderColorDisabled: token.colorBorder,
    defaultHoverBg: token.colorBgContainer,
    defaultHoverColor: token.colorPrimaryHover,
    defaultHoverBorderColor: token.colorPrimaryHover,
    defaultActiveBg: token.colorBgContainer,
    defaultActiveColor: token.colorPrimaryActive,
    defaultActiveBorderColor: token.colorPrimaryActive,
    solidTextColor,
    contentFontSize,
    contentFontSizeSM,
    contentFontSizeLG,
    contentLineHeight,
    contentLineHeightSM,
    contentLineHeightLG,
    paddingBlock: Math.max((token.controlHeight - contentFontSize * contentLineHeight) / 2 - token.lineWidth, 0),
    paddingBlockSM: Math.max((token.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token.lineWidth, 0),
    paddingBlockLG: Math.max((token.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token.lineWidth, 0)
  });
};
;// CONCATENATED MODULE: ./node_modules/antd/es/button/style/index.js






// ============================== Shared ==============================
const genSharedButtonStyle = token => {
  const {
    componentCls,
    iconCls,
    fontWeight,
    opacityLoading,
    motionDurationSlow,
    motionEaseInOut,
    marginXS,
    calc
  } = token;
  return {
    [componentCls]: {
      outline: 'none',
      position: 'relative',
      display: 'inline-flex',
      gap: token.marginXS,
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      backgroundImage: 'none',
      background: 'transparent',
      border: `${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} ${token.lineType} transparent`,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: 'none',
      touchAction: 'manipulation',
      color: token.colorText,
      '&:disabled > *': {
        pointerEvents: 'none'
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${componentCls}-icon > svg`]: (0,style/* resetIcon */.Ro)(),
      '> a': {
        color: 'currentColor'
      },
      '&:not(:disabled)': (0,style/* genFocusStyle */.Qy)(token),
      [`&${componentCls}-two-chinese-chars::first-letter`]: {
        letterSpacing: '0.34em'
      },
      [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
        marginInlineEnd: '-0.34em',
        letterSpacing: '0.34em'
      },
      [`&${componentCls}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${componentCls}-compact-item`]: {
          flex: 'none'
        },
        [`&${componentCls}-round`]: {
          width: 'auto'
        }
      },
      // Loading
      [`&${componentCls}-loading`]: {
        opacity: opacityLoading,
        cursor: 'default'
      },
      [`${componentCls}-loading-icon`]: {
        transition: ['width', 'opacity', 'margin'].map(transition => `${transition} ${motionDurationSlow} ${motionEaseInOut}`).join(',')
      },
      // iconPosition
      [`&:not(${componentCls}-icon-end)`]: {
        [`${componentCls}-loading-icon-motion`]: {
          '&-appear-start, &-enter-start': {
            marginInlineEnd: calc(marginXS).mul(-1).equal()
          },
          '&-appear-active, &-enter-active': {
            marginInlineEnd: 0
          },
          '&-leave-start': {
            marginInlineEnd: 0
          },
          '&-leave-active': {
            marginInlineEnd: calc(marginXS).mul(-1).equal()
          }
        }
      },
      '&-icon-end': {
        flexDirection: 'row-reverse',
        [`${componentCls}-loading-icon-motion`]: {
          '&-appear-start, &-enter-start': {
            marginInlineStart: calc(marginXS).mul(-1).equal()
          },
          '&-appear-active, &-enter-active': {
            marginInlineStart: 0
          },
          '&-leave-start': {
            marginInlineStart: 0
          },
          '&-leave-active': {
            marginInlineStart: calc(marginXS).mul(-1).equal()
          }
        }
      }
    }
  };
};
const genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
  [`&:not(:disabled):not(${btnCls}-disabled)`]: {
    '&:hover': hoverStyle,
    '&:active': activeStyle
  }
});
// ============================== Shape ===============================
const genCircleButtonStyle = token => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: '50%'
});
const genRoundButtonStyle = token => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.calc(token.controlHeight).div(2).equal(),
  paddingInlineEnd: token.calc(token.controlHeight).div(2).equal()
});
const genDisabledStyle = token => ({
  cursor: 'not-allowed',
  borderColor: token.borderColorDisabled,
  color: token.colorTextDisabled,
  background: token.colorBgContainerDisabled,
  boxShadow: 'none'
});
const genGhostButtonStyle = (btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: Object.assign(Object.assign({
    color: textColor || undefined,
    background,
    borderColor: borderColor || undefined,
    boxShadow: 'none'
  }, genHoverActiveButtonStyle(btnCls, Object.assign({
    background
  }, hoverStyle), Object.assign({
    background
  }, activeStyle))), {
    '&:disabled': {
      cursor: 'not-allowed',
      color: textColorDisabled || undefined,
      borderColor: borderColorDisabled || undefined
    }
  })
});
const genSolidDisabledButtonStyle = token => ({
  [`&:disabled, &${token.componentCls}-disabled`]: Object.assign({}, genDisabledStyle(token))
});
const genPureDisabledButtonStyle = token => ({
  [`&:disabled, &${token.componentCls}-disabled`]: {
    cursor: 'not-allowed',
    color: token.colorTextDisabled
  }
});
// ============================== Variant =============================
const genVariantButtonStyle = (token, hoverStyle, activeStyle, variant) => {
  const isPureDisabled = variant && ['link', 'text'].includes(variant);
  const genDisabledButtonStyle = isPureDisabled ? genPureDisabledButtonStyle : genSolidDisabledButtonStyle;
  return Object.assign(Object.assign({}, genDisabledButtonStyle(token)), genHoverActiveButtonStyle(token.componentCls, hoverStyle, activeStyle));
};
const genSolidButtonStyle = (token, textColor, background, hoverStyle, activeStyle) => ({
  [`&${token.componentCls}-variant-solid`]: Object.assign({
    color: textColor,
    background
  }, genVariantButtonStyle(token, hoverStyle, activeStyle))
});
const genOutlinedDashedButtonStyle = (token, borderColor, background, hoverStyle, activeStyle) => ({
  [`&${token.componentCls}-variant-outlined, &${token.componentCls}-variant-dashed`]: Object.assign({
    borderColor,
    background
  }, genVariantButtonStyle(token, hoverStyle, activeStyle))
});
const genDashedButtonStyle = token => ({
  [`&${token.componentCls}-variant-dashed`]: {
    borderStyle: 'dashed'
  }
});
const genFilledButtonStyle = (token, background, hoverStyle, activeStyle) => ({
  [`&${token.componentCls}-variant-filled`]: Object.assign({
    boxShadow: 'none',
    background
  }, genVariantButtonStyle(token, hoverStyle, activeStyle))
});
const genTextLinkButtonStyle = (token, textColor, variant, hoverStyle, activeStyle) => ({
  [`&${token.componentCls}-variant-${variant}`]: Object.assign({
    color: textColor,
    boxShadow: 'none'
  }, genVariantButtonStyle(token, hoverStyle, activeStyle, variant))
});
// =============================== Color ==============================
const genPresetColorStyle = token => {
  const {
    componentCls
  } = token;
  return presetColors/* PresetColors */.i.reduce((prev, colorKey) => {
    const darkColor = token[`${colorKey}6`];
    const lightColor = token[`${colorKey}1`];
    const hoverColor = token[`${colorKey}5`];
    const lightHoverColor = token[`${colorKey}2`];
    const lightBorderColor = token[`${colorKey}3`];
    const activeColor = token[`${colorKey}7`];
    return Object.assign(Object.assign({}, prev), {
      [`&${componentCls}-color-${colorKey}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: darkColor,
        boxShadow: token[`${colorKey}ShadowColor`]
      }, genSolidButtonStyle(token, token.colorTextLightSolid, darkColor, {
        background: hoverColor
      }, {
        background: activeColor
      })), genOutlinedDashedButtonStyle(token, darkColor, token.colorBgContainer, {
        color: hoverColor,
        borderColor: hoverColor,
        background: token.colorBgContainer
      }, {
        color: activeColor,
        borderColor: activeColor,
        background: token.colorBgContainer
      })), genDashedButtonStyle(token)), genFilledButtonStyle(token, lightColor, {
        background: lightHoverColor
      }, {
        background: lightBorderColor
      })), genTextLinkButtonStyle(token, darkColor, 'link', {
        color: hoverColor
      }, {
        color: activeColor
      })), genTextLinkButtonStyle(token, darkColor, 'text', {
        color: hoverColor,
        background: lightColor
      }, {
        color: activeColor,
        background: lightBorderColor
      }))
    });
  }, {});
};
const genDefaultButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: token.defaultColor,
  boxShadow: token.defaultShadow
}, genSolidButtonStyle(token, token.solidTextColor, token.colorBgSolid, {
  color: token.solidTextColor,
  background: token.colorBgSolidHover
}, {
  color: token.solidTextColor,
  background: token.colorBgSolidActive
})), genDashedButtonStyle(token)), genFilledButtonStyle(token, token.colorFillTertiary, {
  background: token.colorFillSecondary
}, {
  background: token.colorFill
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.defaultGhostColor, token.defaultGhostBorderColor, token.colorTextDisabled, token.colorBorder)), genTextLinkButtonStyle(token, token.textTextColor, 'link', {
  color: token.colorLinkHover,
  background: token.linkHoverBg
}, {
  color: token.colorLinkActive
}));
const genPrimaryButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: token.colorPrimary,
  boxShadow: token.primaryShadow
}, genOutlinedDashedButtonStyle(token, token.colorPrimary, token.colorBgContainer, {
  color: token.colorPrimaryTextHover,
  borderColor: token.colorPrimaryHover,
  background: token.colorBgContainer
}, {
  color: token.colorPrimaryTextActive,
  borderColor: token.colorPrimaryActive,
  background: token.colorBgContainer
})), genDashedButtonStyle(token)), genFilledButtonStyle(token, token.colorPrimaryBg, {
  background: token.colorPrimaryBgHover
}, {
  background: token.colorPrimaryBorder
})), genTextLinkButtonStyle(token, token.colorPrimaryText, 'text', {
  color: token.colorPrimaryTextHover,
  background: token.colorPrimaryBg
}, {
  color: token.colorPrimaryTextActive,
  background: token.colorPrimaryBorder
})), genTextLinkButtonStyle(token, token.colorPrimaryText, 'link', {
  color: token.colorPrimaryTextHover,
  background: token.linkHoverBg
}, {
  color: token.colorPrimaryTextActive
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
}));
const genDangerousStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: token.colorError,
  boxShadow: token.dangerShadow
}, genSolidButtonStyle(token, token.dangerColor, token.colorError, {
  background: token.colorErrorHover
}, {
  background: token.colorErrorActive
})), genOutlinedDashedButtonStyle(token, token.colorError, token.colorBgContainer, {
  color: token.colorErrorHover,
  borderColor: token.colorErrorBorderHover
}, {
  color: token.colorErrorActive,
  borderColor: token.colorErrorActive
})), genDashedButtonStyle(token)), genFilledButtonStyle(token, token.colorErrorBg, {
  background: token.colorErrorBgFilledHover
}, {
  background: token.colorErrorBgActive
})), genTextLinkButtonStyle(token, token.colorError, 'text', {
  color: token.colorErrorHover,
  background: token.colorErrorBg
}, {
  color: token.colorErrorHover,
  background: token.colorErrorBgActive
})), genTextLinkButtonStyle(token, token.colorError, 'link', {
  color: token.colorErrorHover
}, {
  color: token.colorErrorActive
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
  color: token.colorErrorHover,
  borderColor: token.colorErrorHover
}, {
  color: token.colorErrorActive,
  borderColor: token.colorErrorActive
}));
const genLinkStyle = token => Object.assign(Object.assign({}, genTextLinkButtonStyle(token, token.colorLink, 'link', {
  color: token.colorLinkHover
}, {
  color: token.colorLinkActive
})), genGhostButtonStyle(token.componentCls, token.ghostBg, token.colorInfo, token.colorInfo, token.colorTextDisabled, token.colorBorder, {
  color: token.colorInfoHover,
  borderColor: token.colorInfoHover
}, {
  color: token.colorInfoActive,
  borderColor: token.colorInfoActive
}));
const genColorButtonStyle = token => {
  const {
    componentCls
  } = token;
  return Object.assign({
    [`${componentCls}-color-default`]: genDefaultButtonStyle(token),
    [`${componentCls}-color-primary`]: genPrimaryButtonStyle(token),
    [`${componentCls}-color-dangerous`]: genDangerousStyle(token),
    [`${componentCls}-color-link`]: genLinkStyle(token)
  }, genPresetColorStyle(token));
};
// =========== Compatible with versions earlier than 5.21.0 ===========
const genCompatibleButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign({}, genOutlinedDashedButtonStyle(token, token.defaultBorderColor, token.defaultBg, {
  color: token.defaultHoverColor,
  borderColor: token.defaultHoverBorderColor,
  background: token.defaultHoverBg
}, {
  color: token.defaultActiveColor,
  borderColor: token.defaultActiveBorderColor,
  background: token.defaultActiveBg
})), genTextLinkButtonStyle(token, token.textTextColor, 'text', {
  color: token.textTextHoverColor,
  background: token.textHoverBg
}, {
  color: token.textTextActiveColor,
  background: token.colorBgTextActive
})), genSolidButtonStyle(token, token.primaryColor, token.colorPrimary, {
  background: token.colorPrimaryHover,
  color: token.primaryColor
}, {
  background: token.colorPrimaryActive,
  color: token.primaryColor
})), genTextLinkButtonStyle(token, token.colorLink, 'link', {
  color: token.colorLinkHover,
  background: token.linkHoverBg
}, {
  color: token.colorLinkActive
}));
// =============================== Size ===============================
const genButtonStyle = (token, prefixCls = '') => {
  const {
    componentCls,
    controlHeight,
    fontSize,
    borderRadius,
    buttonPaddingHorizontal,
    iconCls,
    buttonPaddingVertical,
    buttonIconOnlyFontSize
  } = token;
  return [{
    [prefixCls]: {
      fontSize,
      height: controlHeight,
      padding: `${(0,cssinjs_es/* unit */.bf)(buttonPaddingVertical)} ${(0,cssinjs_es/* unit */.bf)(buttonPaddingHorizontal)}`,
      borderRadius,
      [`&${componentCls}-icon-only`]: {
        width: controlHeight,
        [iconCls]: {
          fontSize: buttonIconOnlyFontSize
        }
      }
    }
  },
  // Shape - patch prefixCls again to override solid border radius style
  {
    [`${componentCls}${componentCls}-circle${prefixCls}`]: genCircleButtonStyle(token)
  }, {
    [`${componentCls}${componentCls}-round${prefixCls}`]: genRoundButtonStyle(token)
  }];
};
const genSizeBaseButtonStyle = token => {
  const baseToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    fontSize: token.contentFontSize
  });
  return genButtonStyle(baseToken, token.componentCls);
};
const genSizeSmallButtonStyle = token => {
  const smallToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    controlHeight: token.controlHeightSM,
    fontSize: token.contentFontSizeSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: token.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: token.borderRadiusSM,
    buttonIconOnlyFontSize: token.onlyIconSizeSM
  });
  return genButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = token => {
  const largeToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.contentFontSizeLG,
    buttonPaddingHorizontal: token.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: token.borderRadiusLG,
    buttonIconOnlyFontSize: token.onlyIconSizeLG
  });
  return genButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: '100%'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var button_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Button', token => {
  const buttonToken = prepareToken(token);
  return [
  // Shared
  genSharedButtonStyle(buttonToken),
  // Size
  genSizeBaseButtonStyle(buttonToken), genSizeSmallButtonStyle(buttonToken), genSizeLargeButtonStyle(buttonToken),
  // Block
  genBlockButtonStyle(buttonToken),
  // Color
  genColorButtonStyle(buttonToken),
  // https://github.com/ant-design/ant-design/issues/50969
  genCompatibleButtonStyle(buttonToken),
  // Button Group
  group(buttonToken)];
}, prepareComponentToken, {
  unitless: {
    fontWeight: true,
    contentLineHeight: true,
    contentLineHeightSM: true,
    contentLineHeightLG: true
  }
}));
// EXTERNAL MODULE: ./node_modules/antd/es/style/compact-item.js
var compact_item = __webpack_require__(80110);
;// CONCATENATED MODULE: ./node_modules/antd/es/style/compact-item-vertical.js
function compactItemVerticalBorder(token, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: token.calc(token.lineWidth).mul(-1).equal()
    },
    '&-item': {
      '&:hover,&:focus,&:active': {
        zIndex: 2
      },
      '&[disabled]': {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token) {
  const compactCls = `${token.componentCls}-compact-vertical`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemVerticalBorder(token, compactCls)), compactItemBorderVerticalRadius(token.componentCls, compactCls))
  };
}
;// CONCATENATED MODULE: ./node_modules/antd/es/button/style/compact.js




const genButtonCompactStyle = token => {
  const {
    componentCls,
    colorPrimaryHover,
    lineWidth,
    calc
  } = token;
  const insetOffset = calc(lineWidth).mul(-1).equal();
  const getCompactBorderStyle = vertical => {
    const selector = `${componentCls}-compact${vertical ? '-vertical' : ''}-item${componentCls}-primary:not([disabled])`;
    return {
      [`${selector} + ${selector}::before`]: {
        position: 'absolute',
        top: vertical ? insetOffset : 0,
        insetInlineStart: vertical ? 0 : insetOffset,
        backgroundColor: colorPrimaryHover,
        content: '""',
        width: vertical ? '100%' : lineWidth,
        height: vertical ? lineWidth : '100%'
      }
    };
  };
  // Special styles for Primary Button
  return Object.assign(Object.assign({}, getCompactBorderStyle()), getCompactBorderStyle(true));
};
// ============================== Export ==============================
/* harmony default export */ var compact = ((0,genStyleUtils/* genSubStyleComponent */.bk)(['Button', 'compact'], token => {
  const buttonToken = prepareToken(token);
  return [
  // Space Compact
  (0,compact_item/* genCompactItemStyle */.c)(buttonToken), genCompactItemVerticalStyle(buttonToken), genButtonCompactStyle(buttonToken)];
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/antd/es/button/button.js
"use client";

var button_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
















function getLoadingConfig(loading) {
  if (typeof loading === 'object' && loading) {
    let delay = loading === null || loading === void 0 ? void 0 : loading.delay;
    delay = !Number.isNaN(delay) && typeof delay === 'number' ? delay : 0;
    return {
      loading: delay <= 0,
      delay
    };
  }
  return {
    loading: !!loading,
    delay: 0
  };
}
const ButtonTypeMap = {
  default: ['default', 'outlined'],
  primary: ['primary', 'solid'],
  dashed: ['default', 'dashed'],
  // `link` is not a real color but we should compatible with it
  link: ['link', 'link'],
  text: ['default', 'text']
};
const InternalCompoundedButton = /*#__PURE__*/react.forwardRef((props, ref) => {
  var _a, _b;
  const {
      loading = false,
      prefixCls: customizePrefixCls,
      color,
      variant,
      type,
      danger = false,
      shape = 'default',
      size: customizeSize,
      styles,
      disabled: customDisabled,
      className,
      rootClassName,
      children,
      icon,
      iconPosition = 'start',
      ghost = false,
      block = false,
      // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
      htmlType = 'button',
      classNames: customClassNames,
      style: customStyle = {},
      autoInsertSpace,
      autoFocus
    } = props,
    rest = button_rest(props, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]);
  // https://github.com/ant-design/ant-design/issues/47605
  // Compatible with original `type` behavior
  const mergedType = type || 'default';
  const {
    button
  } = react.useContext(context/* ConfigContext */.E_);
  const [mergedColor, mergedVariant] = (0,react.useMemo)(() => {
    // >>>>> Local
    // Color & Variant
    if (color && variant) {
      return [color, variant];
    }
    // Sugar syntax
    if (type || danger) {
      const colorVariantPair = ButtonTypeMap[mergedType] || [];
      if (danger) {
        return ['danger', colorVariantPair[1]];
      }
      return colorVariantPair;
    }
    // >>> Context fallback
    if ((button === null || button === void 0 ? void 0 : button.color) && (button === null || button === void 0 ? void 0 : button.variant)) {
      return [button.color, button.variant];
    }
    return ['default', 'outlined'];
  }, [type, color, variant, danger, button === null || button === void 0 ? void 0 : button.variant, button === null || button === void 0 ? void 0 : button.color]);
  const isDanger = mergedColor === 'danger';
  const mergedColorText = isDanger ? 'dangerous' : mergedColor;
  const {
    getPrefixCls,
    direction,
    autoInsertSpace: contextAutoInsertSpace,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,context/* useComponentConfig */.dj)('button');
  const mergedInsertSpace = (_a = autoInsertSpace !== null && autoInsertSpace !== void 0 ? autoInsertSpace : contextAutoInsertSpace) !== null && _a !== void 0 ? _a : true;
  const prefixCls = getPrefixCls('btn', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = button_style(prefixCls);
  const disabled = (0,react.useContext)(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const groupSize = (0,react.useContext)(GroupSizeContext);
  const loadingOrDelay = (0,react.useMemo)(() => getLoadingConfig(loading), [loading]);
  const [innerLoading, setLoading] = (0,react.useState)(loadingOrDelay.loading);
  const [hasTwoCNChar, setHasTwoCNChar] = (0,react.useState)(false);
  const buttonRef = (0,react.useRef)(null);
  const mergedRef = (0,es_ref/* useComposeRef */.x1)(ref, buttonRef);
  const needInserted = react.Children.count(children) === 1 && !icon && !(0,buttonHelpers/* isUnBorderedButtonVariant */.Dn)(mergedVariant);
  // ========================= Mount ==========================
  // Record for mount status.
  // This will help to no to show the animation of loading on the first mount.
  const isMountRef = (0,react.useRef)(true);
  react.useEffect(() => {
    isMountRef.current = false;
    return () => {
      isMountRef.current = true;
    };
  }, []);
  // ========================= Effect =========================
  // Loading. Should use `useLayoutEffect` to avoid low perf multiple click issue.
  // https://github.com/ant-design/ant-design/issues/51325
  (0,react.useLayoutEffect)(() => {
    let delayTimer = null;
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setLoading(loadingOrDelay.loading);
    }
    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }
    return cleanupTimer;
  }, [loadingOrDelay.delay, loadingOrDelay.loading]);
  // Two chinese characters check
  (0,react.useEffect)(() => {
    // FIXME: for HOC usage like <FormatMessage />
    if (!buttonRef.current || !mergedInsertSpace) {
      return;
    }
    const buttonText = buttonRef.current.textContent || '';
    if (needInserted && (0,buttonHelpers/* isTwoCNChar */.aG)(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  });
  // Auto focus
  (0,react.useEffect)(() => {
    if (autoFocus && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);
  // ========================= Events =========================
  const handleClick = react.useCallback(e => {
    var _a;
    // FIXME: https://github.com/ant-design/ant-design/issues/30207
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, 'href' in props ? e : e);
  }, [props.onClick, innerLoading, mergedDisabled]);
  // ========================== Warn ==========================
  if (false) {}
  // ========================== Size ==========================
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  const sizeClassNameMap = {
    large: 'lg',
    small: 'sm',
    middle: undefined
  };
  const sizeFullName = (0,useSize/* default */.Z)(ctxSize => {
    var _a, _b;
    return (_b = (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : groupSize) !== null && _b !== void 0 ? _b : ctxSize;
  });
  const sizeCls = sizeFullName ? (_b = sizeClassNameMap[sizeFullName]) !== null && _b !== void 0 ? _b : '' : '';
  const iconType = innerLoading ? 'loading' : icon;
  const linkButtonRestProps = (0,omit/* default */.Z)(rest, ['navigate']);
  // ========================= Render =========================
  const classes = classnames_default()(prefixCls, hashId, cssVarCls, {
    [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
    // Compatible with versions earlier than 5.21.0
    [`${prefixCls}-${mergedType}`]: mergedType,
    [`${prefixCls}-dangerous`]: danger,
    [`${prefixCls}-color-${mergedColorText}`]: mergedColorText,
    [`${prefixCls}-variant-${mergedVariant}`]: mergedVariant,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
    [`${prefixCls}-background-ghost`]: ghost && !(0,buttonHelpers/* isUnBorderedButtonVariant */.Dn)(mergedVariant),
    [`${prefixCls}-loading`]: innerLoading,
    [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && mergedInsertSpace && !innerLoading,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-icon-end`]: iconPosition === 'end'
  }, compactItemClassnames, className, rootClassName, contextClassName);
  const fullStyle = Object.assign(Object.assign({}, contextStyle), customStyle);
  const iconClasses = classnames_default()(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, contextClassNames.icon);
  const iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), contextStyles.icon || {});
  const iconNode = icon && !innerLoading ? (/*#__PURE__*/react.createElement(button_IconWrapper, {
    prefixCls: prefixCls,
    className: iconClasses,
    style: iconStyle
  }, icon)) : loading && typeof loading === 'object' && loading.icon ? (/*#__PURE__*/react.createElement(button_IconWrapper, {
    prefixCls: prefixCls,
    className: iconClasses,
    style: iconStyle
  }, loading.icon)) : (/*#__PURE__*/react.createElement(button_DefaultLoadingIcon, {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: innerLoading,
    mount: isMountRef.current
  }));
  const kids = children || children === 0 ? (0,buttonHelpers/* spaceChildren */.hU)(children, needInserted && mergedInsertSpace) : null;
  if (linkButtonRestProps.href !== undefined) {
    return wrapCSSVar(/*#__PURE__*/react.createElement("a", Object.assign({}, linkButtonRestProps, {
      className: classnames_default()(classes, {
        [`${prefixCls}-disabled`]: mergedDisabled
      }),
      href: mergedDisabled ? undefined : linkButtonRestProps.href,
      style: fullStyle,
      onClick: handleClick,
      ref: mergedRef,
      tabIndex: mergedDisabled ? -1 : 0
    }), iconNode, kids));
  }
  let buttonNode = /*#__PURE__*/react.createElement("button", Object.assign({}, rest, {
    type: htmlType,
    className: classes,
    style: fullStyle,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: mergedRef
  }), iconNode, kids, compactItemClassnames && /*#__PURE__*/react.createElement(compact, {
    prefixCls: prefixCls
  }));
  if (!(0,buttonHelpers/* isUnBorderedButtonVariant */.Dn)(mergedVariant)) {
    buttonNode = /*#__PURE__*/react.createElement(wave/* default */.Z, {
      component: "Button",
      disabled: innerLoading
    }, buttonNode);
  }
  return wrapCSSVar(buttonNode);
});
const Button = InternalCompoundedButton;
Button.Group = button_group;
Button.__ANT_BUTTON = true;
if (false) {}
/* harmony default export */ var button_button = (Button);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/index.js
"use client";



/* harmony default export */ var es_button = (button_button);

/***/ }),

/***/ 98675:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _SizeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97647);


const useSize = customSize => {
  const size = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_SizeContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  const mergedSize = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === 'string') {
      return customSize !== null && customSize !== void 0 ? customSize : size;
    }
    if (typeof customSize === 'function') {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
/* harmony default export */ __webpack_exports__.Z = (useSize);

/***/ }),

/***/ 28596:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_dropdown; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LeftOutlined.js
// This icon file is generated automatically.
var LeftOutlined_LeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, "name": "left", "theme": "outlined" };
/* harmony default export */ var asn_LeftOutlined = (LeftOutlined_LeftOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(42135);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_LeftOutlined_LeftOutlined = function LeftOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_LeftOutlined
  }));
};

/**![left](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcyNCAyMTguM1YxNDFjMC02LjctNy43LTEwLjQtMTIuOS02LjNMMjYwLjMgNDg2LjhhMzEuODYgMzEuODYgMCAwMDAgNTAuM2w0NTAuOCAzNTIuMWM1LjMgNC4xIDEyLjkuNCAxMi45LTYuM3YtNzcuM2MwLTQuOS0yLjMtOS42LTYuMS0xMi42bC0zNjAtMjgxIDM2MC0yODEuMWMzLjgtMyA2LjEtNy43IDYuMS0xMi42eiIgLz48L3N2Zz4=) */
var RefIcon = /*#__PURE__*/react.forwardRef(icons_LeftOutlined_LeftOutlined);
if (false) {}
/* harmony default export */ var icons_LeftOutlined = (RefIcon);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/RightOutlined.js
// This icon file is generated automatically.
var RightOutlined_RightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
/* harmony default export */ var asn_RightOutlined = (RightOutlined_RightOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_RightOutlined_RightOutlined = function RightOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_RightOutlined
  }));
};

/**![right](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTc2NS43IDQ4Ni44TDMxNC45IDEzNC43QTcuOTcgNy45NyAwIDAwMzAyIDE0MXY3Ny4zYzAgNC45IDIuMyA5LjYgNi4xIDEyLjZsMzYwIDI4MS4xLTM2MCAyODEuMWMtMy45IDMtNi4xIDcuNy02LjEgMTIuNlY4ODNjMCA2LjcgNy43IDEwLjQgMTIuOSA2LjNsNDUwLjgtMzUyLjFhMzEuOTYgMzEuOTYgMCAwMDAtNTAuNHoiIC8+PC9zdmc+) */
var RightOutlined_RefIcon = /*#__PURE__*/react.forwardRef(icons_RightOutlined_RightOutlined);
if (false) {}
/* harmony default export */ var icons_RightOutlined = (RightOutlined_RefIcon);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-dropdown/es/index.js + 4 modules
var es = __webpack_require__(29171);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var es_omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useZIndex.js
var useZIndex = __webpack_require__(87263);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/isPrimitive.js
const isPrimitive = value => typeof value !== 'object' && typeof value !== 'function' || value === null;
/* harmony default export */ var _util_isPrimitive = (isPrimitive);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(11568);
;// CONCATENATED MODULE: ./node_modules/antd/es/style/roundedArrow.js

function getArrowToken(token) {
  const {
    sizePopupArrow,
    borderRadiusXS,
    borderRadiusOuter
  } = token;
  const unitWidth = sizePopupArrow / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = borderRadiusOuter * 1 / Math.sqrt(2);
  const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
  const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
  const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
  const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
  const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
  return {
    arrowShadowWidth: shadowWidth,
    arrowPath,
    arrowPolygon
  };
}
const genRoundedArrow = (token, bgColor, boxShadow) => {
  const {
    sizePopupArrow,
    arrowPolygon,
    arrowPath,
    arrowShadowWidth,
    borderRadiusXS,
    calc
  } = token;
  return {
    pointerEvents: 'none',
    width: sizePopupArrow,
    height: sizePopupArrow,
    overflow: 'hidden',
    '&::before': {
      position: 'absolute',
      bottom: 0,
      insetInlineStart: 0,
      width: sizePopupArrow,
      height: calc(sizePopupArrow).div(2).equal(),
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [arrowPolygon, arrowPath]
      },
      content: '""'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: arrowShadowWidth,
      height: arrowShadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: 'auto',
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${(0,cssinjs_es/* unit */.bf)(borderRadiusXS)} 0`
      },
      transform: 'translateY(50%) rotate(-135deg)',
      boxShadow,
      zIndex: 0,
      background: 'transparent'
    }
  };
};
;// CONCATENATED MODULE: ./node_modules/antd/es/style/placementArrow.js


const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
  const {
    contentRadius,
    limitVerticalRadius
  } = options;
  const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
  const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
  return {
    arrowOffsetHorizontal: arrowOffset,
    arrowOffsetVertical
  };
}
function isInject(valid, code) {
  if (!valid) {
    return {};
  }
  return code;
}
function getArrowStyle(token, colorBg, options) {
  const {
    componentCls,
    boxShadowPopoverArrow,
    arrowOffsetVertical,
    arrowOffsetHorizontal
  } = token;
  const {
    arrowDistance = 0,
    arrowPlacement = {
      left: true,
      right: true,
      top: true,
      bottom: true
    }
  } = options || {};
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${componentCls}-arrow`]: [Object.assign(Object.assign({
        position: 'absolute',
        zIndex: 1,
        display: 'block'
      }, genRoundedArrow(token, colorBg, boxShadowPopoverArrow)), {
        '&:before': {
          background: colorBg
        }
      })]
    }, isInject(!!arrowPlacement.top, {
      [[`&-placement-top > ${componentCls}-arrow`, `&-placement-topLeft > ${componentCls}-arrow`, `&-placement-topRight > ${componentCls}-arrow`].join(',')]: {
        bottom: arrowDistance,
        transform: 'translateY(100%) rotate(180deg)'
      },
      [`&-placement-top > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
      },
      '&-placement-topLeft': {
        '--arrow-offset-horizontal': arrowOffsetHorizontal,
        [`> ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      '&-placement-topRight': {
        '--arrow-offset-horizontal': `calc(100% - ${(0,cssinjs_es/* unit */.bf)(arrowOffsetHorizontal)})`,
        [`> ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      }
    })), isInject(!!arrowPlacement.bottom, {
      [[`&-placement-bottom > ${componentCls}-arrow`, `&-placement-bottomLeft > ${componentCls}-arrow`, `&-placement-bottomRight > ${componentCls}-arrow`].join(',')]: {
        top: arrowDistance,
        transform: `translateY(-100%)`
      },
      [`&-placement-bottom > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: `translateX(-50%) translateY(-100%)`
      },
      '&-placement-bottomLeft': {
        '--arrow-offset-horizontal': arrowOffsetHorizontal,
        [`> ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      '&-placement-bottomRight': {
        '--arrow-offset-horizontal': `calc(100% - ${(0,cssinjs_es/* unit */.bf)(arrowOffsetHorizontal)})`,
        [`> ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      }
    })), isInject(!!arrowPlacement.left, {
      [[`&-placement-left > ${componentCls}-arrow`, `&-placement-leftTop > ${componentCls}-arrow`, `&-placement-leftBottom > ${componentCls}-arrow`].join(',')]: {
        right: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: 'translateX(100%) rotate(90deg)'
      },
      [`&-placement-left > ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
      },
      [`&-placement-leftTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical
      },
      [`&-placement-leftBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical
      }
    })), isInject(!!arrowPlacement.right, {
      [[`&-placement-right > ${componentCls}-arrow`, `&-placement-rightTop > ${componentCls}-arrow`, `&-placement-rightBottom > ${componentCls}-arrow`].join(',')]: {
        left: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: 'translateX(-100%) rotate(-90deg)'
      },
      [`&-placement-right > ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
      },
      [`&-placement-rightTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical
      },
      [`&-placement-rightBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical
      }
    }))
  };
}
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/placements.js

function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false
    };
  }
  const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === 'object' ? autoAdjustOverflow : {};
  const baseOverflow = {};
  switch (placement) {
    case 'top':
    case 'bottom':
      baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
      baseOverflow.shiftY = true;
      baseOverflow.adjustY = true;
      break;
    case 'left':
    case 'right':
      baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
      baseOverflow.shiftX = true;
      baseOverflow.adjustX = true;
      break;
  }
  const mergedOverflow = Object.assign(Object.assign({}, baseOverflow), overflow);
  // Support auto shift
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }
  return mergedOverflow;
}
const PlacementAlignMap = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  leftTop: {
    points: ['tr', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  rightTop: {
    points: ['tl', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  rightBottom: {
    points: ['bl', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  },
  leftBottom: {
    points: ['br', 'bl']
  }
};
const ArrowCenterPlacementAlignMap = {
  topLeft: {
    points: ['bl', 'tc']
  },
  leftTop: {
    points: ['tr', 'cl']
  },
  topRight: {
    points: ['br', 'tc']
  },
  rightTop: {
    points: ['tl', 'cr']
  },
  bottomRight: {
    points: ['tr', 'bc']
  },
  rightBottom: {
    points: ['bl', 'cr']
  },
  bottomLeft: {
    points: ['tl', 'bc']
  },
  leftBottom: {
    points: ['br', 'cl']
  }
};
const DisableAutoArrowList = new Set(['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']);
function getPlacements(config) {
  const {
    arrowWidth,
    autoAdjustOverflow,
    arrowPointAtCenter,
    offset,
    borderRadius,
    visibleFirst
  } = config;
  const halfArrowWidth = arrowWidth / 2;
  const placementMap = {};
  Object.keys(PlacementAlignMap).forEach(key => {
    const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
    const placementInfo = Object.assign(Object.assign({}, template), {
      offset: [0, 0],
      dynamicInset: true
    });
    placementMap[key] = placementInfo;
    // Disable autoArrow since design is fixed position
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }
    // Static offset
    switch (key) {
      case 'top':
      case 'topLeft':
      case 'topRight':
        placementInfo.offset[1] = -halfArrowWidth - offset;
        break;
      case 'bottom':
      case 'bottomLeft':
      case 'bottomRight':
        placementInfo.offset[1] = halfArrowWidth + offset;
        break;
      case 'left':
      case 'leftTop':
      case 'leftBottom':
        placementInfo.offset[0] = -halfArrowWidth - offset;
        break;
      case 'right':
      case 'rightTop':
      case 'rightBottom':
        placementInfo.offset[0] = halfArrowWidth + offset;
        break;
    }
    // Dynamic offset
    const arrowOffset = getArrowOffsetToken({
      contentRadius: borderRadius,
      limitVerticalRadius: true
    });
    if (arrowPointAtCenter) {
      switch (key) {
        case 'topLeft':
        case 'bottomLeft':
          placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
          break;
        case 'topRight':
        case 'bottomRight':
          placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
          break;
        case 'leftTop':
        case 'rightTop':
          placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
          break;
        case 'leftBottom':
        case 'rightBottom':
          placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
          break;
      }
    }
    // Overflow
    placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
    // VisibleFirst
    if (visibleFirst) {
      placementInfo.htmlRegion = 'visibleFirst';
    }
  });
  return placementMap;
}
// EXTERNAL MODULE: ./node_modules/antd/es/_util/PurePanel.js
var PurePanel = __webpack_require__(8745);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/warning.js
var _util_warning = __webpack_require__(27288);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/zindexContext.js
var zindexContext = __webpack_require__(43945);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(35792);
// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 33 modules
var rc_menu_es = __webpack_require__(80954);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/Sider.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











const dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
const isNumeric = value => !Number.isNaN(Number.parseFloat(value)) && isFinite(value);
const SiderContext = /*#__PURE__*/react.createContext({});
const generateId = (() => {
  let i = 0;
  return (prefix = '') => {
    i += 1;
    return `${prefix}${i}`;
  };
})();
const Sider = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      trigger,
      children,
      defaultCollapsed = false,
      theme = 'dark',
      style = {},
      collapsible = false,
      reverseArrow = false,
      width = 200,
      collapsedWidth = 80,
      zeroWidthTriggerStyle,
      breakpoint,
      onCollapse,
      onBreakpoint
    } = props,
    otherProps = __rest(props, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);
  const {
    siderHook
  } = useContext(LayoutContext);
  const [collapsed, setCollapsed] = useState('collapsed' in props ? props.collapsed : defaultCollapsed);
  const [below, setBelow] = useState(false);
  useEffect(() => {
    if ('collapsed' in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);
  const handleSetCollapsed = (value, type) => {
    if (!('collapsed' in props)) {
      setCollapsed(value);
    }
    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  };
  // =========================== Prefix ===========================
  const {
    getPrefixCls,
    direction
  } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  // ========================= Responsive =========================
  const responsiveHandlerRef = useRef(null);
  responsiveHandlerRef.current = mql => {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);
    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, 'responsive');
    }
  };
  useEffect(() => {
    function responsiveHandler(mql) {
      var _a;
      return (_a = responsiveHandlerRef.current) === null || _a === void 0 ? void 0 : _a.call(responsiveHandlerRef, mql);
    }
    let mql;
    if (typeof (window === null || window === void 0 ? void 0 : window.matchMedia) !== 'undefined' && breakpoint && breakpoint in dimensionMaxMap) {
      mql = window.matchMedia(`screen and (max-width: ${dimensionMaxMap[breakpoint]})`);
      addMediaQueryListener(mql, responsiveHandler);
      responsiveHandler(mql);
    }
    return () => {
      removeMediaQueryListener(mql, responsiveHandler);
    };
  }, [breakpoint]); // in order to accept dynamic 'breakpoint' property, we need to add 'breakpoint' into dependency array.
  useEffect(() => {
    const uniqueId = generateId('ant-sider-');
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);
  const toggle = () => {
    handleSetCollapsed(!collapsed, 'clickTrigger');
  };
  const divProps = omit(otherProps, ['collapsed']);
  const rawWidth = collapsed ? collapsedWidth : width;
  // use "px" as fallback unit for width
  const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
  // special trigger when collapsedWidth == 0
  const zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? (/*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    className: classNames(`${prefixCls}-zero-width-trigger`, `${prefixCls}-zero-width-trigger-${reverseArrow ? 'right' : 'left'}`),
    style: zeroWidthTriggerStyle
  }, trigger || /*#__PURE__*/React.createElement(BarsOutlined, null))) : null;
  const reverseIcon = direction === 'rtl' === !reverseArrow;
  const iconObj = {
    expanded: reverseIcon ? /*#__PURE__*/React.createElement(RightOutlined, null) : /*#__PURE__*/React.createElement(LeftOutlined, null),
    collapsed: reverseIcon ? /*#__PURE__*/React.createElement(LeftOutlined, null) : /*#__PURE__*/React.createElement(RightOutlined, null)
  };
  const status = collapsed ? 'collapsed' : 'expanded';
  const defaultTrigger = iconObj[status];
  const triggerDom = trigger !== null ? zeroWidthTrigger || (/*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-trigger`,
    onClick: toggle,
    style: {
      width: siderWidth
    }
  }, trigger || defaultTrigger)) : null;
  const divStyle = Object.assign(Object.assign({}, style), {
    flex: `0 0 ${siderWidth}`,
    maxWidth: siderWidth,
    minWidth: siderWidth,
    width: siderWidth
  });
  const siderCls = classNames(prefixCls, `${prefixCls}-${theme}`, {
    [`${prefixCls}-collapsed`]: !!collapsed,
    [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
    [`${prefixCls}-below`]: !!below,
    [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0
  }, className, hashId, cssVarCls);
  const contextValue = React.useMemo(() => ({
    siderCollapsed: collapsed
  }), [collapsed]);
  return wrapCSSVar(/*#__PURE__*/React.createElement(SiderContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement("aside", Object.assign({
    className: siderCls
  }, divProps, {
    style: divStyle,
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-children`
  }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null)));
})));
if (false) {}
/* harmony default export */ var layout_Sider = ((/* unused pure expression or super */ null && (Sider)));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(89705);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var _util_motion = __webpack_require__(33603);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuContext.js
"use client";


const MenuContext = /*#__PURE__*/(0,react.createContext)({
  prefixCls: '',
  firstLevel: true,
  inlineCollapsed: false
});
/* harmony default export */ var menu_MenuContext = (MenuContext);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuDivider.js
"use client";

var MenuDivider_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const MenuDivider = props => {
  const {
      prefixCls: customizePrefixCls,
      className,
      dashed
    } = props,
    restProps = MenuDivider_rest(props, ["prefixCls", "className", "dashed"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('menu', customizePrefixCls);
  const classString = classnames_default()({
    [`${prefixCls}-item-divider-dashed`]: !!dashed
  }, className);
  return /*#__PURE__*/react.createElement(rc_menu_es/* Divider */.iz, Object.assign({
    className: classString
  }, restProps));
};
/* harmony default export */ var menu_MenuDivider = (MenuDivider);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
;// CONCATENATED MODULE: ./node_modules/rc-tooltip/es/Popup.js


function Popup(props) {
  var children = props.children,
    prefixCls = props.prefixCls,
    id = props.id,
    innerStyle = props.overlayInnerStyle,
    bodyClassName = props.bodyClassName,
    className = props.className,
    style = props.style;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content"), className),
    style: style
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-inner"), bodyClassName),
    id: id,
    role: "tooltip",
    style: innerStyle
  }, typeof children === 'function' ? children() : children));
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/@rc-component/trigger/es/index.js + 11 modules
var trigger_es = __webpack_require__(40228);
;// CONCATENATED MODULE: ./node_modules/rc-tooltip/es/placements.js
var autoAdjustOverflowTopBottom = {
  shiftX: 64,
  adjustY: 1
};
var autoAdjustOverflowLeftRight = {
  adjustX: 1,
  shiftY: true
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
/* harmony default export */ var es_placements = ((/* unused pure expression or super */ null && (placements)));
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useId.js
var useId = __webpack_require__(7028);
;// CONCATENATED MODULE: ./node_modules/rc-tooltip/es/Tooltip.js



var _excluded = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"];







var Tooltip = function Tooltip(props, ref) {
  var overlayClassName = props.overlayClassName,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
    _props$mouseEnterDela = props.mouseEnterDelay,
    mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
    _props$mouseLeaveDela = props.mouseLeaveDelay,
    mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
    overlayStyle = props.overlayStyle,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
    children = props.children,
    onVisibleChange = props.onVisibleChange,
    afterVisibleChange = props.afterVisibleChange,
    transitionName = props.transitionName,
    animation = props.animation,
    motion = props.motion,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'right' : _props$placement,
    _props$align = props.align,
    align = _props$align === void 0 ? {} : _props$align,
    _props$destroyTooltip = props.destroyTooltipOnHide,
    destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
    defaultVisible = props.defaultVisible,
    getTooltipContainer = props.getTooltipContainer,
    overlayInnerStyle = props.overlayInnerStyle,
    arrowContent = props.arrowContent,
    overlay = props.overlay,
    id = props.id,
    _props$showArrow = props.showArrow,
    showArrow = _props$showArrow === void 0 ? true : _props$showArrow,
    tooltipClassNames = props.classNames,
    tooltipStyles = props.styles,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var mergedId = (0,useId/* default */.Z)(id);
  var triggerRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, function () {
    return triggerRef.current;
  });
  var extraProps = (0,objectSpread2/* default */.Z)({}, restProps);
  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }
  var getPopupElement = function getPopupElement() {
    return /*#__PURE__*/react.createElement(Popup, {
      key: "content",
      prefixCls: prefixCls,
      id: mergedId,
      bodyClassName: tooltipClassNames === null || tooltipClassNames === void 0 ? void 0 : tooltipClassNames.body,
      overlayInnerStyle: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, overlayInnerStyle), tooltipStyles === null || tooltipStyles === void 0 ? void 0 : tooltipStyles.body)
    }, overlay);
  };
  var getChildren = function getChildren() {
    var child = react.Children.only(children);
    var originalProps = (child === null || child === void 0 ? void 0 : child.props) || {};
    var childProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, originalProps), {}, {
      'aria-describedby': overlay ? mergedId : null
    });
    return /*#__PURE__*/react.cloneElement(children, childProps);
  };
  return /*#__PURE__*/react.createElement(trigger_es/* default */.Z, (0,esm_extends/* default */.Z)({
    popupClassName: classnames_default()(overlayClassName, tooltipClassNames === null || tooltipClassNames === void 0 ? void 0 : tooltipClassNames.root),
    prefixCls: prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: placements,
    popupPlacement: placement,
    ref: triggerRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    autoDestroy: destroyTooltipOnHide,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, overlayStyle), tooltipStyles === null || tooltipStyles === void 0 ? void 0 : tooltipStyles.root),
    mouseEnterDelay: mouseEnterDelay,
    arrow: showArrow
  }, extraProps), getChildren());
};
/* harmony default export */ var es_Tooltip = (/*#__PURE__*/(0,react.forwardRef)(Tooltip));
;// CONCATENATED MODULE: ./node_modules/rc-tooltip/es/index.js



/* harmony default export */ var rc_tooltip_es = (es_Tooltip);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/ContextIsolator.js
var ContextIsolator = __webpack_require__(89942);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/useToken.js + 2 modules
var useToken = __webpack_require__(25976);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/zoom.js
var zoom = __webpack_require__(50438);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genPresetColor.js
var genPresetColor = __webpack_require__(98719);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83262);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
;// CONCATENATED MODULE: ./node_modules/antd/es/tooltip/style/index.js






const genTooltipStyle = token => {
  const {
    calc,
    componentCls,
    // ant-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    boxShadowSecondary,
    paddingSM,
    paddingXS,
    arrowOffsetHorizontal,
    sizePopupArrow
  } = token;
  // arrowOffsetHorizontal + arrowWidth + borderRadius
  const edgeAlignMinWidth = calc(tooltipBorderRadius).add(sizePopupArrow).add(arrowOffsetHorizontal).equal();
  // borderRadius * 2 + arrowWidth
  const centerAlignMinWidth = calc(tooltipBorderRadius).mul(2).add(sizePopupArrow).equal();
  return [{
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'absolute',
      zIndex: zIndexPopup,
      display: 'block',
      width: 'max-content',
      maxWidth: tooltipMaxWidth,
      visibility: 'visible',
      // When use `autoArrow`, origin will follow the arrow position
      '--valid-offset-x': 'var(--arrow-offset-horizontal, var(--arrow-x))',
      transformOrigin: [`var(--valid-offset-x, 50%)`, `var(--arrow-y, 50%)`].join(' '),
      '&-hidden': {
        display: 'none'
      },
      '--antd-arrow-background-color': tooltipBg,
      // Wrapper for the tooltip content
      [`${componentCls}-inner`]: {
        minWidth: centerAlignMinWidth,
        minHeight: controlHeight,
        padding: `${(0,cssinjs_es/* unit */.bf)(token.calc(paddingSM).div(2).equal())} ${(0,cssinjs_es/* unit */.bf)(paddingXS)}`,
        color: tooltipColor,
        textAlign: 'start',
        textDecoration: 'none',
        wordWrap: 'break-word',
        backgroundColor: tooltipBg,
        borderRadius: tooltipBorderRadius,
        boxShadow: boxShadowSecondary,
        boxSizing: 'border-box'
      },
      // Align placement should have another min width
      [[`&-placement-topLeft`, `&-placement-topRight`, `&-placement-bottomLeft`, `&-placement-bottomRight`].join(',')]: {
        minWidth: edgeAlignMinWidth
      },
      // Limit left and right placement radius
      [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(',')]: {
        [`${componentCls}-inner`]: {
          borderRadius: token.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
        }
      },
      [`${componentCls}-content`]: {
        position: 'relative'
      }
    }), (0,genPresetColor/* default */.Z)(token, (colorKey, {
      darkColor
    }) => ({
      [`&${componentCls}-${colorKey}`]: {
        [`${componentCls}-inner`]: {
          backgroundColor: darkColor
        },
        [`${componentCls}-arrow`]: {
          '--antd-arrow-background-color': darkColor
        }
      }
    }))), {
      // RTL
      '&-rtl': {
        direction: 'rtl'
      }
    })
  },
  // Arrow Style
  getArrowStyle(token, 'var(--antd-arrow-background-color)'),
  // Pure Render
  {
    [`${componentCls}-pure`]: {
      position: 'relative',
      maxWidth: 'none',
      margin: token.sizePopupArrow
    }
  }];
};
// ============================== Export ==============================
const prepareComponentToken = token => Object.assign(Object.assign({
  zIndexPopup: token.zIndexPopupBase + 70
}, getArrowOffsetToken({
  contentRadius: token.borderRadius,
  limitVerticalRadius: true
})), getArrowToken((0,cssinjs_utils_es/* mergeToken */.IX)(token, {
  borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
})));
/* harmony default export */ var tooltip_style = ((prefixCls, injectStyle = true) => {
  const useStyle = (0,genStyleUtils/* genStyleHooks */.I$)('Tooltip', token => {
    const {
      borderRadius,
      colorTextLightSolid,
      colorBgSpotlight
    } = token;
    const TooltipToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: colorTextLightSolid,
      tooltipBorderRadius: borderRadius,
      tooltipBg: colorBgSpotlight
    });
    return [genTooltipStyle(TooltipToken), (0,zoom/* initZoomMotion */._y)(token, 'zoom-big-fast')];
  }, prepareComponentToken, {
    resetStyle: false,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle
  });
  return useStyle(prefixCls);
});
// EXTERNAL MODULE: ./node_modules/antd/es/_util/colors.js
var colors = __webpack_require__(98787);
;// CONCATENATED MODULE: ./node_modules/antd/es/tooltip/util.js


function parseColor(prefixCls, color) {
  const isInternalColor = (0,colors/* isPresetColor */.o2)(color);
  const className = classnames_default()({
    [`${prefixCls}-${color}`]: color && isInternalColor
  });
  const overlayStyle = {};
  const arrowStyle = {};
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    // @ts-ignore
    arrowStyle['--antd-arrow-background-color'] = color;
  }
  return {
    className,
    overlayStyle,
    arrowStyle
  };
}
;// CONCATENATED MODULE: ./node_modules/antd/es/tooltip/PurePanel.js
"use client";







/** @private Internal Component. Do not use in your production. */
const PurePanel_PurePanel = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    placement = 'top',
    title,
    color,
    overlayInnerStyle
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = tooltip_style(prefixCls);
  // Color
  const colorInfo = parseColor(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
  const cls = classnames_default()(hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls,
    style: arrowContentStyle
  }, /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-arrow`
  }), /*#__PURE__*/react.createElement(Popup, Object.assign({}, props, {
    className: hashId,
    prefixCls: prefixCls,
    overlayInnerStyle: formattedOverlayInnerStyle
  }), title)));
};
/* harmony default export */ var tooltip_PurePanel = (PurePanel_PurePanel);
;// CONCATENATED MODULE: ./node_modules/antd/es/tooltip/index.js
"use client";

var tooltip_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
















const InternalTooltip = /*#__PURE__*/react.forwardRef((props, ref) => {
  var _a, _b;
  const {
      prefixCls: customizePrefixCls,
      openClassName,
      getTooltipContainer,
      color,
      overlayInnerStyle,
      children,
      afterOpenChange,
      afterVisibleChange,
      destroyTooltipOnHide,
      destroyOnHidden,
      arrow = true,
      title,
      overlay,
      builtinPlacements,
      arrowPointAtCenter = false,
      autoAdjustOverflow = true,
      motion,
      getPopupContainer,
      placement = 'top',
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      overlayStyle,
      rootClassName,
      overlayClassName,
      styles,
      classNames: tooltipClassNames
    } = props,
    restProps = tooltip_rest(props, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]);
  const mergedShowArrow = !!arrow;
  const [, token] = (0,useToken/* default */.ZP)();
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,context/* useComponentConfig */.dj)('tooltip');
  // ============================== Ref ===============================
  const warning = (0,_util_warning/* devUseWarning */.ln)('Tooltip');
  const tooltipRef = react.useRef(null);
  const forceAlign = () => {
    var _a;
    (_a = tooltipRef.current) === null || _a === void 0 ? void 0 : _a.forceAlign();
  };
  react.useImperativeHandle(ref, () => {
    var _a, _b;
    return {
      forceAlign,
      forcePopupAlign: () => {
        warning.deprecated(false, 'forcePopupAlign', 'forceAlign');
        forceAlign();
      },
      nativeElement: (_a = tooltipRef.current) === null || _a === void 0 ? void 0 : _a.nativeElement,
      popupElement: (_b = tooltipRef.current) === null || _b === void 0 ? void 0 : _b.popupElement
    };
  });
  // ============================== Warn ==============================
  if (false) {}
  // ============================== Open ==============================
  const [open, setOpen] = (0,useMergedState/* default */.Z)(false, {
    value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
    defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
  });
  const noTitle = !title && !overlay && title !== 0; // overlay for old version compatibility
  const onOpenChange = vis => {
    var _a, _b;
    setOpen(noTitle ? false : vis);
    if (!noTitle) {
      (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, vis);
      (_b = props.onVisibleChange) === null || _b === void 0 ? void 0 : _b.call(props, vis);
    }
  };
  const tooltipPlacements = react.useMemo(() => {
    var _a, _b;
    let mergedArrowPointAtCenter = arrowPointAtCenter;
    if (typeof arrow === 'object') {
      mergedArrowPointAtCenter = (_b = (_a = arrow.pointAtCenter) !== null && _a !== void 0 ? _a : arrow.arrowPointAtCenter) !== null && _b !== void 0 ? _b : arrowPointAtCenter;
    }
    return builtinPlacements || getPlacements({
      arrowPointAtCenter: mergedArrowPointAtCenter,
      autoAdjustOverflow,
      arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
      borderRadius: token.borderRadius,
      offset: token.marginXXS,
      visibleFirst: true
    });
  }, [arrowPointAtCenter, arrow, builtinPlacements, token]);
  const memoOverlay = react.useMemo(() => {
    if (title === 0) {
      return title;
    }
    return overlay || title || '';
  }, [overlay, title]);
  const memoOverlayWrapper = /*#__PURE__*/react.createElement(ContextIsolator/* default */.Z, {
    space: true
  }, typeof memoOverlay === 'function' ? memoOverlay() : memoOverlay);
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const injectFromPopover = props['data-popover-inject'];
  let tempOpen = open;
  // Hide tooltip when there is no title
  if (!('open' in props) && !('visible' in props) && noTitle) {
    tempOpen = false;
  }
  // ============================= Render =============================
  const child = /*#__PURE__*/react.isValidElement(children) && !(0,reactNode/* isFragment */.M2)(children) ? children : /*#__PURE__*/react.createElement("span", null, children);
  const childProps = child.props;
  const childCls = !childProps.className || typeof childProps.className === 'string' ? classnames_default()(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
  // Style
  const [wrapCSSVar, hashId, cssVarCls] = tooltip_style(prefixCls, !injectFromPopover);
  // Color
  const colorInfo = parseColor(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const rootClassNames = classnames_default()(overlayClassName, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, colorInfo.className, rootClassName, hashId, cssVarCls, contextClassName, contextClassNames.root, tooltipClassNames === null || tooltipClassNames === void 0 ? void 0 : tooltipClassNames.root);
  const bodyClassNames = classnames_default()(contextClassNames.body, tooltipClassNames === null || tooltipClassNames === void 0 ? void 0 : tooltipClassNames.body);
  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = (0,useZIndex/* useZIndex */.Cn)('Tooltip', restProps.zIndex);
  const content = /*#__PURE__*/react.createElement(rc_tooltip_es, Object.assign({}, restProps, {
    zIndex: zIndex,
    showArrow: mergedShowArrow,
    placement: placement,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    prefixCls: prefixCls,
    classNames: {
      root: rootClassNames,
      body: bodyClassNames
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, arrowContentStyle), contextStyles.root), contextStyle), overlayStyle), styles === null || styles === void 0 ? void 0 : styles.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, contextStyles.body), overlayInnerStyle), styles === null || styles === void 0 ? void 0 : styles.body), colorInfo.overlayStyle)
    },
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: tooltipRef,
    builtinPlacements: tooltipPlacements,
    overlay: memoOverlayWrapper,
    visible: tempOpen,
    onVisibleChange: onOpenChange,
    afterVisibleChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
    arrowContent: /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-arrow-content`
    }),
    motion: {
      motionName: (0,_util_motion/* getTransitionName */.m)(rootPrefixCls, 'zoom-big-fast', props.transitionName),
      motionDeadline: 1000
    },
    // TODO: In the future, destroyTooltipOnHide in rc-tooltip needs to be upgrade to destroyOnHidden
    destroyTooltipOnHide: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : !!destroyTooltipOnHide
  }), tempOpen ? (0,reactNode/* cloneElement */.Tm)(child, {
    className: childCls
  }) : child);
  return wrapCSSVar(/*#__PURE__*/react.createElement(zindexContext/* default */.Z.Provider, {
    value: contextZIndex
  }, content));
});
const tooltip_Tooltip = InternalTooltip;
if (false) {}
tooltip_Tooltip._InternalPanelDoNotUseOrYouWillBeFired = tooltip_PurePanel;
/* harmony default export */ var tooltip = (tooltip_Tooltip);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuItem.js
"use client";










const MenuItem = props => {
  var _a;
  const {
    className,
    children,
    icon,
    title,
    danger,
    extra
  } = props;
  const {
    prefixCls,
    firstLevel,
    direction,
    disableMenuItemTitleTooltip,
    inlineCollapsed: isInlineCollapsed
  } = react.useContext(menu_MenuContext);
  const renderItemChildren = inlineCollapsed => {
    const label = children === null || children === void 0 ? void 0 : children[0];
    const wrapNode = /*#__PURE__*/react.createElement("span", {
      className: classnames_default()(`${prefixCls}-title-content`, {
        [`${prefixCls}-title-content-with-extra`]: !!extra || extra === 0
      })
    }, children);
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    if (!icon || /*#__PURE__*/react.isValidElement(children) && children.type === 'span') {
      if (children && inlineCollapsed && firstLevel && typeof label === 'string') {
        return /*#__PURE__*/react.createElement("div", {
          className: `${prefixCls}-inline-collapsed-noicon`
        }, label.charAt(0));
      }
    }
    return wrapNode;
  };
  const {
    siderCollapsed
  } = react.useContext(SiderContext);
  let tooltipTitle = title;
  if (typeof title === 'undefined') {
    tooltipTitle = firstLevel ? children : '';
  } else if (title === false) {
    tooltipTitle = '';
  }
  const tooltipProps = {
    title: tooltipTitle
  };
  if (!siderCollapsed && !isInlineCollapsed) {
    tooltipProps.title = null;
    // Reset `open` to fix control mode tooltip display not correct
    // ref: https://github.com/ant-design/ant-design/issues/16742
    tooltipProps.open = false;
  }
  const childrenLength = (0,toArray/* default */.Z)(children).length;
  let returnNode = /*#__PURE__*/react.createElement(rc_menu_es/* Item */.ck, Object.assign({}, (0,es_omit/* default */.Z)(props, ['title', 'icon', 'danger']), {
    className: classnames_default()({
      [`${prefixCls}-item-danger`]: danger,
      [`${prefixCls}-item-only-child`]: (icon ? childrenLength + 1 : childrenLength) === 1
    }, className),
    title: typeof title === 'string' ? title : undefined
  }), (0,reactNode/* cloneElement */.Tm)(icon, {
    className: classnames_default()(/*#__PURE__*/react.isValidElement(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : undefined, `${prefixCls}-item-icon`)
  }), renderItemChildren(isInlineCollapsed));
  if (!disableMenuItemTitleTooltip) {
    returnNode = /*#__PURE__*/react.createElement(tooltip, Object.assign({}, tooltipProps, {
      placement: direction === 'rtl' ? 'left' : 'right',
      classNames: {
        root: `${prefixCls}-inline-collapsed-tooltip`
      }
    }), returnNode);
  }
  return returnNode;
};
/* harmony default export */ var menu_MenuItem = (MenuItem);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/OverrideContext.js
"use client";

var OverrideContext_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const OverrideContext = /*#__PURE__*/react.createContext(null);
/** @internal Only used for Dropdown component. Do not use this in your production. */
const OverrideProvider = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      children
    } = props,
    restProps = OverrideContext_rest(props, ["children"]);
  const override = react.useContext(OverrideContext);
  const context = react.useMemo(() => Object.assign(Object.assign({}, override), restProps), [override, restProps.prefixCls,
  // restProps.expandIcon, Not mark as deps since this is a ReactNode
  restProps.mode, restProps.selectable, restProps.rootClassName
  // restProps.validator, Not mark as deps since this is a function
  ]);
  const canRef = (0,es_ref/* supportNodeRef */.t4)(children);
  const mergedRef = (0,es_ref/* useComposeRef */.x1)(ref, canRef ? (0,es_ref/* getNodeRef */.C4)(children) : null);
  return /*#__PURE__*/react.createElement(OverrideContext.Provider, {
    value: context
  }, /*#__PURE__*/react.createElement(ContextIsolator/* default */.Z, {
    space: true
  }, canRef ? /*#__PURE__*/react.cloneElement(children, {
    ref: mergedRef
  }) : children));
});
/** @internal Only used for Dropdown component. Do not use this in your production. */
/* harmony default export */ var menu_OverrideContext = (OverrideContext);
// EXTERNAL MODULE: ./node_modules/@ant-design/fast-color/es/index.js + 1 modules
var fast_color_es = __webpack_require__(15063);
;// CONCATENATED MODULE: ./node_modules/antd/es/style/motion/collapse.js
const genCollapseMotion = token => ({
  [token.componentCls]: {
    // For common/openAnimation
    [`${token.antCls}-motion-collapse-legacy`]: {
      overflow: 'hidden',
      '&-active': {
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
      }
    },
    [`${token.antCls}-motion-collapse`]: {
      overflow: 'hidden',
      transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
    }
  }
});
/* harmony default export */ var collapse = (genCollapseMotion);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/slide.js
var slide = __webpack_require__(48611);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/horizontal.js

const getHorizontalStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    horizontalLineHeight,
    colorSplit,
    lineWidth,
    lineType,
    itemPaddingInline
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      lineHeight: horizontalLineHeight,
      border: 0,
      borderBottom: `${(0,cssinjs_es/* unit */.bf)(lineWidth)} ${lineType} ${colorSplit}`,
      boxShadow: 'none',
      '&::after': {
        display: 'block',
        clear: 'both',
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${componentCls}-item, ${componentCls}-submenu`]: {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'bottom',
        paddingInline: itemPaddingInline
      },
      [`> ${componentCls}-item:hover,
        > ${componentCls}-item-active,
        > ${componentCls}-submenu ${componentCls}-submenu-title:hover`]: {
        backgroundColor: 'transparent'
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`].join(',')
      },
      // ===================== Sub Menu =====================
      [`${componentCls}-submenu-arrow`]: {
        display: 'none'
      }
    }
  };
};
/* harmony default export */ var horizontal = (getHorizontalStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/rtl.js

const getRTLStyle = ({
  componentCls,
  menuArrowOffset,
  calc
}) => ({
  [`${componentCls}-rtl`]: {
    direction: 'rtl'
  },
  [`${componentCls}-submenu-rtl`]: {
    transformOrigin: '100% 0'
  },
  // Vertical Arrow
  [`${componentCls}-rtl${componentCls}-vertical,
    ${componentCls}-submenu-rtl ${componentCls}-vertical`]: {
    [`${componentCls}-submenu-arrow`]: {
      '&::before': {
        transform: `rotate(-45deg) translateY(${(0,cssinjs_es/* unit */.bf)(calc(menuArrowOffset).mul(-1).equal())})`
      },
      '&::after': {
        transform: `rotate(45deg) translateY(${(0,cssinjs_es/* unit */.bf)(menuArrowOffset)})`
      }
    }
  }
});
/* harmony default export */ var rtl = (getRTLStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/theme.js


const accessibilityFocus = token => Object.assign({}, (0,style/* genFocusOutline */.oN)(token));
const getThemeStyle = (token, themeSuffix) => {
  const {
    componentCls,
    itemColor,
    itemSelectedColor,
    subMenuItemSelectedColor,
    groupTitleColor,
    itemBg,
    subMenuItemBg,
    itemSelectedBg,
    activeBarHeight,
    activeBarWidth,
    activeBarBorderWidth,
    motionDurationSlow,
    motionEaseInOut,
    motionEaseOut,
    itemPaddingInline,
    motionDurationMid,
    itemHoverColor,
    lineType,
    colorSplit,
    // Disabled
    itemDisabledColor,
    // Danger
    dangerItemColor,
    dangerItemHoverColor,
    dangerItemSelectedColor,
    dangerItemActiveBg,
    dangerItemSelectedBg,
    // Bg
    popupBg,
    itemHoverBg,
    itemActiveBg,
    menuSubMenuBg,
    // Horizontal
    horizontalItemSelectedColor,
    horizontalItemSelectedBg,
    horizontalItemBorderRadius,
    horizontalItemHoverBg
  } = token;
  return {
    [`${componentCls}-${themeSuffix}, ${componentCls}-${themeSuffix} > ${componentCls}`]: {
      color: itemColor,
      background: itemBg,
      [`&${componentCls}-root:focus-visible`]: Object.assign({}, accessibilityFocus(token)),
      // ======================== Item ========================
      [`${componentCls}-item`]: {
        '&-group-title, &-extra': {
          color: groupTitleColor
        }
      },
      [`${componentCls}-submenu-selected > ${componentCls}-submenu-title`]: {
        color: subMenuItemSelectedColor
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        color: itemColor,
        [`&:not(${componentCls}-item-disabled):focus-visible`]: Object.assign({}, accessibilityFocus(token))
      },
      // Disabled
      [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
        color: `${itemDisabledColor} !important`
      },
      // Hover
      [`${componentCls}-item:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
        [`&:hover, > ${componentCls}-submenu-title:hover`]: {
          color: itemHoverColor
        }
      },
      [`&:not(${componentCls}-horizontal)`]: {
        [`${componentCls}-item:not(${componentCls}-item-selected)`]: {
          '&:hover': {
            backgroundColor: itemHoverBg
          },
          '&:active': {
            backgroundColor: itemActiveBg
          }
        },
        [`${componentCls}-submenu-title`]: {
          '&:hover': {
            backgroundColor: itemHoverBg
          },
          '&:active': {
            backgroundColor: itemActiveBg
          }
        }
      },
      // Danger - only Item has
      [`${componentCls}-item-danger`]: {
        color: dangerItemColor,
        [`&${componentCls}-item:hover`]: {
          [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
            color: dangerItemHoverColor
          }
        },
        [`&${componentCls}-item:active`]: {
          background: dangerItemActiveBg
        }
      },
      [`${componentCls}-item a`]: {
        '&, &:hover': {
          color: 'inherit'
        }
      },
      [`${componentCls}-item-selected`]: {
        color: itemSelectedColor,
        // Danger
        [`&${componentCls}-item-danger`]: {
          color: dangerItemSelectedColor
        },
        'a, a:hover': {
          color: 'inherit'
        }
      },
      [`& ${componentCls}-item-selected`]: {
        backgroundColor: itemSelectedBg,
        // Danger
        [`&${componentCls}-item-danger`]: {
          backgroundColor: dangerItemSelectedBg
        }
      },
      [`&${componentCls}-submenu > ${componentCls}`]: {
        backgroundColor: menuSubMenuBg
      },
      // ===== 设置浮层的颜色 =======
      // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
      [`&${componentCls}-popup > ${componentCls}`]: {
        backgroundColor: popupBg
      },
      [`&${componentCls}-submenu-popup > ${componentCls}`]: {
        backgroundColor: popupBg
      },
      // ===== 设置浮层的颜色 end =======
      // ====================== Horizontal ======================
      [`&${componentCls}-horizontal`]: Object.assign(Object.assign({}, themeSuffix === 'dark' ? {
        borderBottom: 0
      } : {}), {
        [`> ${componentCls}-item, > ${componentCls}-submenu`]: {
          top: activeBarBorderWidth,
          marginTop: token.calc(activeBarBorderWidth).mul(-1).equal(),
          marginBottom: 0,
          borderRadius: horizontalItemBorderRadius,
          '&::after': {
            position: 'absolute',
            insetInline: itemPaddingInline,
            bottom: 0,
            borderBottom: `${(0,cssinjs_es/* unit */.bf)(activeBarHeight)} solid transparent`,
            transition: `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            content: '""'
          },
          '&:hover, &-active, &-open': {
            background: horizontalItemHoverBg,
            '&::after': {
              borderBottomWidth: activeBarHeight,
              borderBottomColor: horizontalItemSelectedColor
            }
          },
          '&-selected': {
            color: horizontalItemSelectedColor,
            backgroundColor: horizontalItemSelectedBg,
            '&:hover': {
              backgroundColor: horizontalItemSelectedBg
            },
            '&::after': {
              borderBottomWidth: activeBarHeight,
              borderBottomColor: horizontalItemSelectedColor
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${componentCls}-root`]: {
        [`&${componentCls}-inline, &${componentCls}-vertical`]: {
          borderInlineEnd: `${(0,cssinjs_es/* unit */.bf)(activeBarBorderWidth)} ${lineType} ${colorSplit}`
        }
      },
      // ======================== Inline ========================
      [`&${componentCls}-inline`]: {
        // Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          background: subMenuItemBg
        },
        [`${componentCls}-item`]: {
          position: 'relative',
          '&::after': {
            position: 'absolute',
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${(0,cssinjs_es/* unit */.bf)(activeBarWidth)} solid ${itemSelectedColor}`,
            transform: 'scaleY(0.0001)',
            opacity: 0,
            transition: [`transform ${motionDurationMid} ${motionEaseOut}`, `opacity ${motionDurationMid} ${motionEaseOut}`].join(','),
            content: '""'
          },
          // Danger
          [`&${componentCls}-item-danger`]: {
            '&::after': {
              borderInlineEndColor: dangerItemSelectedColor
            }
          }
        },
        [`${componentCls}-selected, ${componentCls}-item-selected`]: {
          '&::after': {
            transform: 'scaleY(1)',
            opacity: 1,
            transition: [`transform ${motionDurationMid} ${motionEaseInOut}`, `opacity ${motionDurationMid} ${motionEaseInOut}`].join(',')
          }
        }
      }
    }
  };
};
/* harmony default export */ var theme = (getThemeStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/vertical.js


const getVerticalInlineStyle = token => {
  const {
    componentCls,
    itemHeight,
    itemMarginInline,
    padding,
    menuArrowSize,
    marginXS,
    itemMarginBlock,
    itemWidth,
    itemPaddingInline
  } = token;
  const paddingWithArrow = token.calc(menuArrowSize).add(padding).add(marginXS).equal();
  return {
    [`${componentCls}-item`]: {
      position: 'relative',
      overflow: 'hidden'
    },
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: (0,cssinjs_es/* unit */.bf)(itemHeight),
      paddingInline: itemPaddingInline,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginInline: itemMarginInline,
      marginBlock: itemMarginBlock,
      width: itemWidth
    },
    [`> ${componentCls}-item,
            > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: (0,cssinjs_es/* unit */.bf)(itemHeight)
    },
    [`${componentCls}-item-group-list ${componentCls}-submenu-title,
            ${componentCls}-submenu-title`]: {
      paddingInlineEnd: paddingWithArrow
    }
  };
};
const getVerticalStyle = token => {
  const {
    componentCls,
    iconCls,
    itemHeight,
    colorTextLightSolid,
    dropdownWidth,
    controlHeightLG,
    motionEaseOut,
    paddingXL,
    itemMarginInline,
    fontSizeLG,
    motionDurationFast,
    motionDurationSlow,
    paddingXS,
    boxShadowSecondary,
    collapsedWidth,
    collapsedIconSize
  } = token;
  const inlineItemStyle = {
    height: itemHeight,
    lineHeight: (0,cssinjs_es/* unit */.bf)(itemHeight),
    listStylePosition: 'inside',
    listStyleType: 'disc'
  };
  return [{
    [componentCls]: {
      '&-inline, &-vertical': Object.assign({
        [`&${componentCls}-root`]: {
          boxShadow: 'none'
        }
      }, getVerticalInlineStyle(token))
    },
    [`${componentCls}-submenu-popup`]: {
      [`${componentCls}-vertical`]: Object.assign(Object.assign({}, getVerticalInlineStyle(token)), {
        boxShadow: boxShadowSecondary
      })
    }
  },
  // Vertical only
  {
    [`${componentCls}-submenu-popup ${componentCls}-vertical${componentCls}-sub`]: {
      minWidth: dropdownWidth,
      maxHeight: `calc(100vh - ${(0,cssinjs_es/* unit */.bf)(token.calc(controlHeightLG).mul(2.5).equal())})`,
      padding: '0',
      overflow: 'hidden',
      borderInlineEnd: 0,
      // https://github.com/ant-design/ant-design/issues/22244
      // https://github.com/ant-design/ant-design/issues/26812
      "&:not([class*='-active'])": {
        overflowX: 'hidden',
        overflowY: 'auto'
      }
    }
  },
  // Inline Only
  {
    [`${componentCls}-inline`]: {
      width: '100%',
      // Motion enhance for first level
      [`&${componentCls}-root`]: {
        [`${componentCls}-item, ${componentCls}-submenu-title`]: {
          display: 'flex',
          alignItems: 'center',
          transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationFast} ${motionEaseOut}`].join(','),
          [`> ${componentCls}-title-content`]: {
            flex: 'auto',
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          },
          '> *': {
            flex: 'none'
          }
        }
      },
      // >>>>> Sub
      [`${componentCls}-sub${componentCls}-inline`]: {
        padding: 0,
        border: 0,
        borderRadius: 0,
        boxShadow: 'none',
        [`& > ${componentCls}-submenu > ${componentCls}-submenu-title`]: inlineItemStyle,
        [`& ${componentCls}-item-group-title`]: {
          paddingInlineStart: paddingXL
        }
      },
      // >>>>> Item
      [`${componentCls}-item`]: inlineItemStyle
    }
  },
  // Inline Collapse Only
  {
    [`${componentCls}-inline-collapsed`]: {
      width: collapsedWidth,
      [`&${componentCls}-root`]: {
        [`${componentCls}-item, ${componentCls}-submenu ${componentCls}-submenu-title`]: {
          [`> ${componentCls}-inline-collapsed-noicon`]: {
            fontSize: fontSizeLG,
            textAlign: 'center'
          }
        }
      },
      [`> ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-submenu > ${componentCls}-submenu-title,
          > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
        insetInlineStart: 0,
        paddingInline: `calc(50% - ${(0,cssinjs_es/* unit */.bf)(token.calc(collapsedIconSize).div(2).equal())} - ${(0,cssinjs_es/* unit */.bf)(itemMarginInline)})`,
        textOverflow: 'clip',
        [`
            ${componentCls}-submenu-arrow,
            ${componentCls}-submenu-expand-icon
          `]: {
          opacity: 0
        },
        [`${componentCls}-item-icon, ${iconCls}`]: {
          margin: 0,
          fontSize: collapsedIconSize,
          lineHeight: (0,cssinjs_es/* unit */.bf)(itemHeight),
          '+ span': {
            display: 'inline-block',
            opacity: 0
          }
        }
      },
      [`${componentCls}-item-icon, ${iconCls}`]: {
        display: 'inline-block'
      },
      '&-tooltip': {
        pointerEvents: 'none',
        [`${componentCls}-item-icon, ${iconCls}`]: {
          display: 'none'
        },
        'a, a:hover': {
          color: colorTextLightSolid
        }
      },
      [`${componentCls}-item-group-title`]: Object.assign(Object.assign({}, style/* textEllipsis */.vS), {
        paddingInline: paddingXS
      })
    }
  }];
};
/* harmony default export */ var vertical = (getVerticalStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/index.js









const genMenuItemStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    motionEaseOut,
    iconCls,
    iconSize,
    iconMarginInlineEnd
  } = token;
  return {
    // >>>>> Item
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      position: 'relative',
      display: 'block',
      margin: 0,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding calc(${motionDurationSlow} + 0.1s) ${motionEaseInOut}`].join(','),
      [`${componentCls}-item-icon, ${iconCls}`]: {
        minWidth: iconSize,
        fontSize: iconSize,
        transition: [`font-size ${motionDurationMid} ${motionEaseOut}`, `margin ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow}`].join(','),
        '+ span': {
          marginInlineStart: iconMarginInlineEnd,
          opacity: 1,
          transition: [`opacity ${motionDurationSlow} ${motionEaseInOut}`, `margin ${motionDurationSlow}`, `color ${motionDurationSlow}`].join(',')
        }
      },
      [`${componentCls}-item-icon`]: Object.assign({}, (0,style/* resetIcon */.Ro)()),
      [`&${componentCls}-item-only-child`]: {
        [`> ${iconCls}, > ${componentCls}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
      background: 'none !important',
      cursor: 'not-allowed',
      '&::after': {
        borderColor: 'transparent !important'
      },
      a: {
        color: 'inherit !important',
        cursor: 'not-allowed',
        pointerEvents: 'none'
      },
      [`> ${componentCls}-submenu-title`]: {
        color: 'inherit !important',
        cursor: 'not-allowed'
      }
    }
  };
};
const genSubMenuArrowStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    motionEaseInOut,
    borderRadius,
    menuArrowSize,
    menuArrowOffset
  } = token;
  return {
    [`${componentCls}-submenu`]: {
      '&-expand-icon, &-arrow': {
        position: 'absolute',
        top: '50%',
        insetInlineEnd: token.margin,
        width: menuArrowSize,
        color: 'currentcolor',
        transform: 'translateY(-50%)',
        transition: `transform ${motionDurationSlow} ${motionEaseInOut}, opacity ${motionDurationSlow}`
      },
      '&-arrow': {
        // →
        '&::before, &::after': {
          position: 'absolute',
          width: token.calc(menuArrowSize).mul(0.6).equal(),
          height: token.calc(menuArrowSize).mul(0.15).equal(),
          backgroundColor: 'currentcolor',
          borderRadius,
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `transform ${motionDurationSlow} ${motionEaseInOut}`, `top ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow} ${motionEaseInOut}`].join(','),
          content: '""'
        },
        '&::before': {
          transform: `rotate(45deg) translateY(${(0,cssinjs_es/* unit */.bf)(token.calc(menuArrowOffset).mul(-1).equal())})`
        },
        '&::after': {
          transform: `rotate(-45deg) translateY(${(0,cssinjs_es/* unit */.bf)(menuArrowOffset)})`
        }
      }
    }
  };
};
// =============================== Base ===============================
const getBaseStyle = token => {
  const {
    antCls,
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    paddingXS,
    padding,
    colorSplit,
    lineWidth,
    zIndexPopup,
    borderRadiusLG,
    subMenuItemBorderRadius,
    menuArrowSize,
    menuArrowOffset,
    lineType,
    groupTitleLineHeight,
    groupTitleFontSize
  } = token;
  return [
  // Misc
  {
    '': {
      [componentCls]: Object.assign(Object.assign({}, (0,style/* clearFix */.dF)()), {
        // Hidden
        '&-hidden': {
          display: 'none'
        }
      })
    },
    [`${componentCls}-submenu-hidden`]: {
      display: 'none'
    }
  }, {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), (0,style/* clearFix */.dF)()), {
      marginBottom: 0,
      paddingInlineStart: 0,
      // Override default ul/ol
      fontSize,
      lineHeight: 0,
      listStyle: 'none',
      outline: 'none',
      // Magic cubic here but smooth transition
      transition: `width ${motionDurationSlow} cubic-bezier(0.2, 0, 0, 1) 0s`,
      'ul, ol': {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      },
      // Overflow ellipsis
      '&-overflow': {
        display: 'flex',
        [`${componentCls}-item`]: {
          flex: 'none'
        }
      },
      [`${componentCls}-item, ${componentCls}-submenu, ${componentCls}-submenu-title`]: {
        borderRadius: token.itemBorderRadius
      },
      [`${componentCls}-item-group-title`]: {
        padding: `${(0,cssinjs_es/* unit */.bf)(paddingXS)} ${(0,cssinjs_es/* unit */.bf)(padding)}`,
        fontSize: groupTitleFontSize,
        lineHeight: groupTitleLineHeight,
        transition: `all ${motionDurationSlow}`
      },
      [`&-horizontal ${componentCls}-submenu`]: {
        transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-submenu, ${componentCls}-submenu-inline`]: {
        transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationMid} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-submenu ${componentCls}-sub`]: {
        cursor: 'initial',
        transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-title-content`]: {
        transition: `color ${motionDurationSlow}`,
        '&-with-extra': {
          display: 'inline-flex',
          alignItems: 'center',
          width: '100%'
        },
        // https://github.com/ant-design/ant-design/issues/41143
        [`> ${antCls}-typography-ellipsis-single-line`]: {
          display: 'inline',
          verticalAlign: 'unset'
        },
        [`${componentCls}-item-extra`]: {
          marginInlineStart: 'auto',
          paddingInlineStart: token.padding
        }
      },
      [`${componentCls}-item a`]: {
        '&::before': {
          position: 'absolute',
          inset: 0,
          backgroundColor: 'transparent',
          content: '""'
        }
      },
      // Removed a Badge related style seems it's safe
      // https://github.com/ant-design/ant-design/issues/19809
      // >>>>> Divider
      [`${componentCls}-item-divider`]: {
        overflow: 'hidden',
        lineHeight: 0,
        borderColor: colorSplit,
        borderStyle: lineType,
        borderWidth: 0,
        borderTopWidth: lineWidth,
        marginBlock: lineWidth,
        padding: 0,
        '&-dashed': {
          borderStyle: 'dashed'
        }
      }
    }), genMenuItemStyle(token)), {
      [`${componentCls}-item-group`]: {
        [`${componentCls}-item-group-list`]: {
          margin: 0,
          padding: 0,
          [`${componentCls}-item, ${componentCls}-submenu-title`]: {
            paddingInline: `${(0,cssinjs_es/* unit */.bf)(token.calc(fontSize).mul(2).equal())} ${(0,cssinjs_es/* unit */.bf)(padding)}`
          }
        }
      },
      // ======================= Sub Menu =======================
      '&-submenu': {
        '&-popup': {
          position: 'absolute',
          zIndex: zIndexPopup,
          borderRadius: borderRadiusLG,
          boxShadow: 'none',
          transformOrigin: '0 0',
          [`&${componentCls}-submenu`]: {
            background: 'transparent'
          },
          // https://github.com/ant-design/ant-design/issues/13955
          '&::before': {
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            width: '100%',
            height: '100%',
            opacity: 0,
            content: '""'
          },
          [`> ${componentCls}`]: Object.assign(Object.assign(Object.assign({
            borderRadius: borderRadiusLG
          }, genMenuItemStyle(token)), genSubMenuArrowStyle(token)), {
            [`${componentCls}-item, ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
              borderRadius: subMenuItemBorderRadius
            },
            [`${componentCls}-submenu-title::after`]: {
              transition: `transform ${motionDurationSlow} ${motionEaseInOut}`
            }
          })
        },
        [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: {
          transformOrigin: '100% 0'
        },
        [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: {
          transformOrigin: '100% 100%'
        },
        [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: {
          transformOrigin: '0 100%'
        },
        [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: {
          transformOrigin: '0 0'
        },
        [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: {
          paddingInlineEnd: token.paddingXS
        },
        [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: {
          paddingInlineStart: token.paddingXS
        },
        [`
          &-placement-topRight,
          &-placement-topLeft
          `]: {
          paddingBottom: token.paddingXS
        },
        [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: {
          paddingTop: token.paddingXS
        }
      }
    }), genSubMenuArrowStyle(token)), {
      [`&-inline-collapsed ${componentCls}-submenu-arrow,
        &-inline ${componentCls}-submenu-arrow`]: {
        // ↓
        '&::before': {
          transform: `rotate(-45deg) translateX(${(0,cssinjs_es/* unit */.bf)(menuArrowOffset)})`
        },
        '&::after': {
          transform: `rotate(45deg) translateX(${(0,cssinjs_es/* unit */.bf)(token.calc(menuArrowOffset).mul(-1).equal())})`
        }
      },
      [`${componentCls}-submenu-open${componentCls}-submenu-inline > ${componentCls}-submenu-title > ${componentCls}-submenu-arrow`]: {
        // ↑
        transform: `translateY(${(0,cssinjs_es/* unit */.bf)(token.calc(menuArrowSize).mul(0.2).mul(-1).equal())})`,
        '&::after': {
          transform: `rotate(-45deg) translateX(${(0,cssinjs_es/* unit */.bf)(token.calc(menuArrowOffset).mul(-1).equal())})`
        },
        '&::before': {
          transform: `rotate(45deg) translateX(${(0,cssinjs_es/* unit */.bf)(menuArrowOffset)})`
        }
      }
    })
  },
  // Integration with header element so menu items have the same height
  {
    [`${antCls}-layout-header`]: {
      [componentCls]: {
        lineHeight: 'inherit'
      }
    }
  }];
};
const style_prepareComponentToken = token => {
  var _a, _b, _c;
  const {
    colorPrimary,
    colorError,
    colorTextDisabled,
    colorErrorBg,
    colorText,
    colorTextDescription,
    colorBgContainer,
    colorFillAlter,
    colorFillContent,
    lineWidth,
    lineWidthBold,
    controlItemBgActive,
    colorBgTextHover,
    controlHeightLG,
    lineHeight,
    colorBgElevated,
    marginXXS,
    padding,
    fontSize,
    controlHeightSM,
    fontSizeLG,
    colorTextLightSolid,
    colorErrorHover
  } = token;
  const activeBarWidth = (_a = token.activeBarWidth) !== null && _a !== void 0 ? _a : 0;
  const activeBarBorderWidth = (_b = token.activeBarBorderWidth) !== null && _b !== void 0 ? _b : lineWidth;
  const itemMarginInline = (_c = token.itemMarginInline) !== null && _c !== void 0 ? _c : token.marginXXS;
  const colorTextDark = new fast_color_es/* FastColor */.t(colorTextLightSolid).setA(0.65).toRgbString();
  return {
    dropdownWidth: 160,
    zIndexPopup: token.zIndexPopupBase + 50,
    radiusItem: token.borderRadiusLG,
    itemBorderRadius: token.borderRadiusLG,
    radiusSubMenuItem: token.borderRadiusSM,
    subMenuItemBorderRadius: token.borderRadiusSM,
    colorItemText: colorText,
    itemColor: colorText,
    colorItemTextHover: colorText,
    itemHoverColor: colorText,
    colorItemTextHoverHorizontal: colorPrimary,
    horizontalItemHoverColor: colorPrimary,
    colorGroupTitle: colorTextDescription,
    groupTitleColor: colorTextDescription,
    colorItemTextSelected: colorPrimary,
    itemSelectedColor: colorPrimary,
    subMenuItemSelectedColor: colorPrimary,
    colorItemTextSelectedHorizontal: colorPrimary,
    horizontalItemSelectedColor: colorPrimary,
    colorItemBg: colorBgContainer,
    itemBg: colorBgContainer,
    colorItemBgHover: colorBgTextHover,
    itemHoverBg: colorBgTextHover,
    colorItemBgActive: colorFillContent,
    itemActiveBg: controlItemBgActive,
    colorSubItemBg: colorFillAlter,
    subMenuItemBg: colorFillAlter,
    colorItemBgSelected: controlItemBgActive,
    itemSelectedBg: controlItemBgActive,
    colorItemBgSelectedHorizontal: 'transparent',
    horizontalItemSelectedBg: 'transparent',
    colorActiveBarWidth: 0,
    activeBarWidth,
    colorActiveBarHeight: lineWidthBold,
    activeBarHeight: lineWidthBold,
    colorActiveBarBorderSize: lineWidth,
    activeBarBorderWidth,
    // Disabled
    colorItemTextDisabled: colorTextDisabled,
    itemDisabledColor: colorTextDisabled,
    // Danger
    colorDangerItemText: colorError,
    dangerItemColor: colorError,
    colorDangerItemTextHover: colorError,
    dangerItemHoverColor: colorError,
    colorDangerItemTextSelected: colorError,
    dangerItemSelectedColor: colorError,
    colorDangerItemBgActive: colorErrorBg,
    dangerItemActiveBg: colorErrorBg,
    colorDangerItemBgSelected: colorErrorBg,
    dangerItemSelectedBg: colorErrorBg,
    itemMarginInline,
    horizontalItemBorderRadius: 0,
    horizontalItemHoverBg: 'transparent',
    itemHeight: controlHeightLG,
    groupTitleLineHeight: lineHeight,
    collapsedWidth: controlHeightLG * 2,
    popupBg: colorBgElevated,
    itemMarginBlock: marginXXS,
    itemPaddingInline: padding,
    horizontalLineHeight: `${controlHeightLG * 1.15}px`,
    iconSize: fontSize,
    iconMarginInlineEnd: controlHeightSM - fontSize,
    collapsedIconSize: fontSizeLG,
    groupTitleFontSize: fontSize,
    // Disabled
    darkItemDisabledColor: new fast_color_es/* FastColor */.t(colorTextLightSolid).setA(0.25).toRgbString(),
    // Dark
    darkItemColor: colorTextDark,
    darkDangerItemColor: colorError,
    darkItemBg: '#001529',
    darkPopupBg: '#001529',
    darkSubMenuItemBg: '#000c17',
    darkItemSelectedColor: colorTextLightSolid,
    darkItemSelectedBg: colorPrimary,
    darkDangerItemSelectedBg: colorError,
    darkItemHoverBg: 'transparent',
    darkGroupTitleColor: colorTextDark,
    darkItemHoverColor: colorTextLightSolid,
    darkDangerItemHoverColor: colorErrorHover,
    darkDangerItemSelectedColor: colorTextLightSolid,
    darkDangerItemActiveBg: colorError,
    // internal
    itemWidth: activeBarWidth ? `calc(100% + ${activeBarBorderWidth}px)` : `calc(100% - ${itemMarginInline * 2}px)`
  };
};
// ============================== Export ==============================
/* harmony default export */ var menu_style = ((prefixCls, rootCls = prefixCls, injectStyle = true) => {
  const useStyle = (0,genStyleUtils/* genStyleHooks */.I$)('Menu', token => {
    const {
      colorBgElevated,
      controlHeightLG,
      fontSize,
      darkItemColor,
      darkDangerItemColor,
      darkItemBg,
      darkSubMenuItemBg,
      darkItemSelectedColor,
      darkItemSelectedBg,
      darkDangerItemSelectedBg,
      darkItemHoverBg,
      darkGroupTitleColor,
      darkItemHoverColor,
      darkItemDisabledColor,
      darkDangerItemHoverColor,
      darkDangerItemSelectedColor,
      darkDangerItemActiveBg,
      popupBg,
      darkPopupBg
    } = token;
    const menuArrowSize = token.calc(fontSize).div(7).mul(5).equal();
    // Menu Token
    const menuToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
      menuArrowSize,
      menuHorizontalHeight: token.calc(controlHeightLG).mul(1.15).equal(),
      menuArrowOffset: token.calc(menuArrowSize).mul(0.25).equal(),
      menuSubMenuBg: colorBgElevated,
      calc: token.calc,
      popupBg
    });
    const menuDarkToken = (0,cssinjs_utils_es/* mergeToken */.IX)(menuToken, {
      itemColor: darkItemColor,
      itemHoverColor: darkItemHoverColor,
      groupTitleColor: darkGroupTitleColor,
      itemSelectedColor: darkItemSelectedColor,
      subMenuItemSelectedColor: darkItemSelectedColor,
      itemBg: darkItemBg,
      popupBg: darkPopupBg,
      subMenuItemBg: darkSubMenuItemBg,
      itemActiveBg: 'transparent',
      itemSelectedBg: darkItemSelectedBg,
      activeBarHeight: 0,
      activeBarBorderWidth: 0,
      itemHoverBg: darkItemHoverBg,
      // Disabled
      itemDisabledColor: darkItemDisabledColor,
      // Danger
      dangerItemColor: darkDangerItemColor,
      dangerItemHoverColor: darkDangerItemHoverColor,
      dangerItemSelectedColor: darkDangerItemSelectedColor,
      dangerItemActiveBg: darkDangerItemActiveBg,
      dangerItemSelectedBg: darkDangerItemSelectedBg,
      menuSubMenuBg: darkSubMenuItemBg,
      // Horizontal
      horizontalItemSelectedColor: darkItemSelectedColor,
      horizontalItemSelectedBg: darkItemSelectedBg
    });
    return [
    // Basic
    getBaseStyle(menuToken),
    // Horizontal
    horizontal(menuToken),
    // Hard code for some light style
    // Vertical
    vertical(menuToken),
    // Hard code for some light style
    // Theme
    theme(menuToken, 'light'), theme(menuDarkToken, 'dark'),
    // RTL
    rtl(menuToken),
    // Motion
    collapse(menuToken), (0,slide/* initSlideMotion */.oN)(menuToken, 'slide-up'), (0,slide/* initSlideMotion */.oN)(menuToken, 'slide-down'), (0,zoom/* initZoomMotion */._y)(menuToken, 'zoom-big')];
  }, style_prepareComponentToken, {
    deprecatedTokens: [['colorGroupTitle', 'groupTitleColor'], ['radiusItem', 'itemBorderRadius'], ['radiusSubMenuItem', 'subMenuItemBorderRadius'], ['colorItemText', 'itemColor'], ['colorItemTextHover', 'itemHoverColor'], ['colorItemTextHoverHorizontal', 'horizontalItemHoverColor'], ['colorItemTextSelected', 'itemSelectedColor'], ['colorItemTextSelectedHorizontal', 'horizontalItemSelectedColor'], ['colorItemTextDisabled', 'itemDisabledColor'], ['colorDangerItemText', 'dangerItemColor'], ['colorDangerItemTextHover', 'dangerItemHoverColor'], ['colorDangerItemTextSelected', 'dangerItemSelectedColor'], ['colorDangerItemBgActive', 'dangerItemActiveBg'], ['colorDangerItemBgSelected', 'dangerItemSelectedBg'], ['colorItemBg', 'itemBg'], ['colorItemBgHover', 'itemHoverBg'], ['colorSubItemBg', 'subMenuItemBg'], ['colorItemBgActive', 'itemActiveBg'], ['colorItemBgSelectedHorizontal', 'horizontalItemSelectedBg'], ['colorActiveBarWidth', 'activeBarWidth'], ['colorActiveBarHeight', 'activeBarHeight'], ['colorActiveBarBorderSize', 'activeBarBorderWidth'], ['colorItemBgSelected', 'itemSelectedBg']],
    // Dropdown will handle menu style self. We do not need to handle this.
    injectStyle,
    unitless: {
      groupTitleLineHeight: true
    }
  });
  return useStyle(prefixCls, rootCls);
});
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/SubMenu.js
"use client";








const SubMenu = props => {
  var _a;
  const {
    popupClassName,
    icon,
    title,
    theme: customTheme
  } = props;
  const context = react.useContext(menu_MenuContext);
  const {
    prefixCls,
    inlineCollapsed,
    theme: contextTheme
  } = context;
  const parentPath = (0,rc_menu_es/* useFullPath */.Xl)();
  let titleNode;
  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? (/*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-inline-collapsed-noicon`
    }, title.charAt(0))) : (/*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-title-content`
    }, title));
  } else {
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    const titleIsSpan = /*#__PURE__*/react.isValidElement(title) && title.type === 'span';
    titleNode = /*#__PURE__*/react.createElement(react.Fragment, null, (0,reactNode/* cloneElement */.Tm)(icon, {
      className: classnames_default()(/*#__PURE__*/react.isValidElement(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : undefined, `${prefixCls}-item-icon`)
    }), titleIsSpan ? title : /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-title-content`
    }, title));
  }
  const contextValue = react.useMemo(() => Object.assign(Object.assign({}, context), {
    firstLevel: false
  }), [context]);
  // ============================ zIndex ============================
  const [zIndex] = (0,useZIndex/* useZIndex */.Cn)('Menu');
  return /*#__PURE__*/react.createElement(menu_MenuContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement(rc_menu_es/* SubMenu */.Wd, Object.assign({}, (0,es_omit/* default */.Z)(props, ['icon']), {
    title: titleNode,
    popupClassName: classnames_default()(prefixCls, popupClassName, `${prefixCls}-${customTheme || contextTheme}`),
    popupStyle: Object.assign({
      zIndex
    }, props.popupStyle)
  })));
};
/* harmony default export */ var menu_SubMenu = (SubMenu);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/menu.js
"use client";

var menu_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


















function isEmptyIcon(icon) {
  return icon === null || icon === false;
}
const MENU_COMPONENTS = {
  item: menu_MenuItem,
  submenu: menu_SubMenu,
  divider: menu_MenuDivider
};
const InternalMenu = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
  var _a;
  const override = react.useContext(menu_OverrideContext);
  const overrideObj = override || {};
  const {
    getPrefixCls,
    getPopupContainer,
    direction,
    menu
  } = react.useContext(context/* ConfigContext */.E_);
  const rootPrefixCls = getPrefixCls();
  const {
      prefixCls: customizePrefixCls,
      className,
      style,
      theme = 'light',
      expandIcon,
      _internalDisableMenuItemTitleTooltip,
      inlineCollapsed,
      siderCollapsed,
      rootClassName,
      mode,
      selectable,
      onClick,
      overflowedIndicatorPopupClassName
    } = props,
    restProps = menu_rest(props, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]);
  const passedProps = (0,es_omit/* default */.Z)(restProps, ['collapsedWidth']);
  // ======================== Warning ==========================
  if (false) {}
  (_a = overrideObj.validator) === null || _a === void 0 ? void 0 : _a.call(overrideObj, {
    mode
  });
  // ========================== Click ==========================
  // Tell dropdown that item clicked
  const onItemClick = (0,useEvent/* default */.Z)((...args) => {
    var _a;
    onClick === null || onClick === void 0 ? void 0 : onClick.apply(void 0, args);
    (_a = overrideObj.onClick) === null || _a === void 0 ? void 0 : _a.call(overrideObj);
  });
  // ========================== Mode ===========================
  const mergedMode = overrideObj.mode || mode;
  // ======================= Selectable ========================
  const mergedSelectable = selectable !== null && selectable !== void 0 ? selectable : overrideObj.selectable;
  // ======================== Collapsed ========================
  // Inline Collapsed
  const mergedInlineCollapsed = inlineCollapsed !== null && inlineCollapsed !== void 0 ? inlineCollapsed : siderCollapsed;
  const defaultMotions = {
    horizontal: {
      motionName: `${rootPrefixCls}-slide-up`
    },
    inline: (0,_util_motion/* default */.Z)(rootPrefixCls),
    other: {
      motionName: `${rootPrefixCls}-zoom-big`
    }
  };
  const prefixCls = getPrefixCls('menu', customizePrefixCls || overrideObj.prefixCls);
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = menu_style(prefixCls, rootCls, !override);
  const menuClassName = classnames_default()(`${prefixCls}-${theme}`, menu === null || menu === void 0 ? void 0 : menu.className, className);
  // ====================== ExpandIcon ========================
  const mergedExpandIcon = react.useMemo(() => {
    var _a, _b;
    if (typeof expandIcon === 'function' || isEmptyIcon(expandIcon)) {
      return expandIcon || null;
    }
    if (typeof overrideObj.expandIcon === 'function' || isEmptyIcon(overrideObj.expandIcon)) {
      return overrideObj.expandIcon || null;
    }
    if (typeof (menu === null || menu === void 0 ? void 0 : menu.expandIcon) === 'function' || isEmptyIcon(menu === null || menu === void 0 ? void 0 : menu.expandIcon)) {
      return (menu === null || menu === void 0 ? void 0 : menu.expandIcon) || null;
    }
    const mergedIcon = (_a = expandIcon !== null && expandIcon !== void 0 ? expandIcon : overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon) !== null && _a !== void 0 ? _a : menu === null || menu === void 0 ? void 0 : menu.expandIcon;
    return (0,reactNode/* cloneElement */.Tm)(mergedIcon, {
      className: classnames_default()(`${prefixCls}-submenu-expand-icon`, /*#__PURE__*/react.isValidElement(mergedIcon) ? (_b = mergedIcon.props) === null || _b === void 0 ? void 0 : _b.className : undefined)
    });
  }, [expandIcon, overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon, menu === null || menu === void 0 ? void 0 : menu.expandIcon, prefixCls]);
  // ======================== Context ==========================
  const contextValue = react.useMemo(() => ({
    prefixCls,
    inlineCollapsed: mergedInlineCollapsed || false,
    direction,
    firstLevel: true,
    theme,
    mode: mergedMode,
    disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
  }), [prefixCls, mergedInlineCollapsed, direction, _internalDisableMenuItemTitleTooltip, theme]);
  // ========================= Render ==========================
  return wrapCSSVar(/*#__PURE__*/react.createElement(menu_OverrideContext.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(menu_MenuContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement(rc_menu_es/* default */.ZP, Object.assign({
    getPopupContainer: getPopupContainer,
    overflowedIndicator: /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null),
    overflowedIndicatorPopupClassName: classnames_default()(prefixCls, `${prefixCls}-${theme}`, overflowedIndicatorPopupClassName),
    mode: mergedMode,
    selectable: mergedSelectable,
    onClick: onItemClick
  }, passedProps, {
    inlineCollapsed: mergedInlineCollapsed,
    style: Object.assign(Object.assign({}, menu === null || menu === void 0 ? void 0 : menu.style), style),
    className: menuClassName,
    prefixCls: prefixCls,
    direction: direction,
    defaultMotions: defaultMotions,
    expandIcon: mergedExpandIcon,
    ref: ref,
    rootClassName: classnames_default()(rootClassName, hashId, overrideObj.rootClassName, cssVarCls, rootCls),
    _internalComponents: MENU_COMPONENTS
  })))));
});
/* harmony default export */ var menu = (InternalMenu);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/index.js
"use client";









const Menu = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
  const menuRef = (0,react.useRef)(null);
  const context = react.useContext(SiderContext);
  (0,react.useImperativeHandle)(ref, () => ({
    menu: menuRef.current,
    focus: options => {
      var _a;
      (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.focus(options);
    }
  }));
  return /*#__PURE__*/react.createElement(menu, Object.assign({
    ref: menuRef
  }, props, context));
});
Menu.Item = menu_MenuItem;
Menu.SubMenu = menu_SubMenu;
Menu.Divider = menu_MenuDivider;
Menu.ItemGroup = rc_menu_es/* ItemGroup */.BW;
if (false) {}
/* harmony default export */ var es_menu = (Menu);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/motion.js
var motion = __webpack_require__(93590);
;// CONCATENATED MODULE: ./node_modules/antd/es/style/motion/move.js


const moveDownIn = new cssinjs_es/* Keyframes */.E4('antMoveDownIn', {
  '0%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveDownOut = new cssinjs_es/* Keyframes */.E4('antMoveDownOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveLeftIn = new cssinjs_es/* Keyframes */.E4('antMoveLeftIn', {
  '0%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveLeftOut = new cssinjs_es/* Keyframes */.E4('antMoveLeftOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveRightIn = new cssinjs_es/* Keyframes */.E4('antMoveRightIn', {
  '0%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveRightOut = new cssinjs_es/* Keyframes */.E4('antMoveRightOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveUpIn = new cssinjs_es/* Keyframes */.E4('antMoveUpIn', {
  '0%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveUpOut = new cssinjs_es/* Keyframes */.E4('antMoveUpOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveMotion = {
  'move-up': {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  'move-down': {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  'move-left': {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  'move-right': {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [(0,motion/* initMotion */.R)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/style/status.js
const genStatusStyle = token => {
  const {
    componentCls,
    menuCls,
    colorError,
    colorTextLightSolid
  } = token;
  const itemCls = `${menuCls}-item`;
  return {
    [`${componentCls}, ${componentCls}-menu-submenu`]: {
      [`${menuCls} ${itemCls}`]: {
        [`&${itemCls}-danger:not(${itemCls}-disabled)`]: {
          color: colorError,
          '&:hover': {
            color: colorTextLightSolid,
            backgroundColor: colorError
          }
        }
      }
    }
  };
};
/* harmony default export */ var style_status = (genStatusStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/style/index.js







// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    menuCls,
    zIndexPopup,
    dropdownArrowDistance,
    sizePopupArrow,
    antCls,
    iconCls,
    motionDurationMid,
    paddingBlock,
    fontSize,
    dropdownEdgeChildPadding,
    colorTextDisabled,
    fontSizeIcon,
    controlPaddingHorizontal,
    colorBgElevated
  } = token;
  return [{
    [componentCls]: {
      position: 'absolute',
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: zIndexPopup,
      display: 'block',
      // A placeholder out of dropdown visible range to avoid close when user moving
      '&::before': {
        position: 'absolute',
        insetBlock: token.calc(sizePopupArrow).div(2).sub(dropdownArrowDistance).equal(),
        // insetInlineStart: -7, // FIXME: Seems not work for hidden element
        zIndex: -9999,
        opacity: 0.0001,
        content: '""'
      },
      // Makes vertical dropdowns have a scrollbar once they become taller than the viewport.
      '&-menu-vertical': {
        maxHeight: '100vh',
        overflowY: 'auto'
      },
      [`&-trigger${antCls}-btn`]: {
        [`& > ${iconCls}-down, & > ${antCls}-btn-icon > ${iconCls}-down`]: {
          fontSize: fontSizeIcon
        }
      },
      [`${componentCls}-wrap`]: {
        position: 'relative',
        [`${antCls}-btn > ${iconCls}-down`]: {
          fontSize: fontSizeIcon
        },
        [`${iconCls}-down::before`]: {
          transition: `transform ${motionDurationMid}`
        }
      },
      [`${componentCls}-wrap-open`]: {
        [`${iconCls}-down::before`]: {
          transform: `rotate(180deg)`
        }
      },
      [`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]: {
        display: 'none'
      },
      // =============================================================
      // ==                         Motion                          ==
      // =============================================================
      // When position is not enough for dropdown, the placement will revert.
      // We will handle this with revert motion name.
      [`&${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottomRight,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottomRight`]: {
        animationName: slide/* slideUpIn */.fJ
      },
      [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-top,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-top,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-topRight,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-topRight`]: {
        animationName: slide/* slideDownIn */.Qt
      },
      [`&${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottomRight`]: {
        animationName: slide/* slideUpOut */.Uw
      },
      [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-top,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-topRight`]: {
        animationName: slide/* slideDownOut */.ly
      }
    }
  },
  // =============================================================
  // ==                        Arrow style                      ==
  // =============================================================
  getArrowStyle(token, colorBgElevated, {
    arrowPlacement: {
      top: true,
      bottom: true
    }
  }), {
    // =============================================================
    // ==                          Menu                           ==
    // =============================================================
    [`${componentCls} ${menuCls}`]: {
      position: 'relative',
      margin: 0
    },
    [`${menuCls}-submenu-popup`]: {
      position: 'absolute',
      zIndex: zIndexPopup,
      background: 'transparent',
      boxShadow: 'none',
      transformOrigin: '0 0',
      'ul, li': {
        listStyle: 'none',
        margin: 0
      }
    },
    [`${componentCls}, ${componentCls}-menu-submenu`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      [menuCls]: Object.assign(Object.assign({
        padding: dropdownEdgeChildPadding,
        listStyleType: 'none',
        backgroundColor: colorBgElevated,
        backgroundClip: 'padding-box',
        borderRadius: token.borderRadiusLG,
        outline: 'none',
        boxShadow: token.boxShadowSecondary
      }, (0,style/* genFocusStyle */.Qy)(token)), {
        '&:empty': {
          padding: 0,
          boxShadow: 'none'
        },
        [`${menuCls}-item-group-title`]: {
          padding: `${(0,cssinjs_es/* unit */.bf)(paddingBlock)} ${(0,cssinjs_es/* unit */.bf)(controlPaddingHorizontal)}`,
          color: token.colorTextDescription,
          transition: `all ${motionDurationMid}`
        },
        // ======================= Item Content =======================
        [`${menuCls}-item`]: {
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        },
        [`${menuCls}-item-icon`]: {
          minWidth: fontSize,
          marginInlineEnd: token.marginXS,
          fontSize: token.fontSizeSM
        },
        [`${menuCls}-title-content`]: {
          flex: 'auto',
          '&-with-extra': {
            display: 'inline-flex',
            alignItems: 'center',
            width: '100%'
          },
          '> a': {
            color: 'inherit',
            transition: `all ${motionDurationMid}`,
            '&:hover': {
              color: 'inherit'
            },
            '&::after': {
              position: 'absolute',
              inset: 0,
              content: '""'
            }
          },
          [`${menuCls}-item-extra`]: {
            paddingInlineStart: token.padding,
            marginInlineStart: 'auto',
            fontSize: token.fontSizeSM,
            color: token.colorTextDescription
          }
        },
        // =========================== Item ===========================
        [`${menuCls}-item, ${menuCls}-submenu-title`]: Object.assign(Object.assign({
          display: 'flex',
          margin: 0,
          padding: `${(0,cssinjs_es/* unit */.bf)(paddingBlock)} ${(0,cssinjs_es/* unit */.bf)(controlPaddingHorizontal)}`,
          color: token.colorText,
          fontWeight: 'normal',
          fontSize,
          lineHeight: token.lineHeight,
          cursor: 'pointer',
          transition: `all ${motionDurationMid}`,
          borderRadius: token.borderRadiusSM,
          '&:hover, &-active': {
            backgroundColor: token.controlItemBgHover
          }
        }, (0,style/* genFocusStyle */.Qy)(token)), {
          '&-selected': {
            color: token.colorPrimary,
            backgroundColor: token.controlItemBgActive,
            '&:hover, &-active': {
              backgroundColor: token.controlItemBgActiveHover
            }
          },
          '&-disabled': {
            color: colorTextDisabled,
            cursor: 'not-allowed',
            '&:hover': {
              color: colorTextDisabled,
              backgroundColor: colorBgElevated,
              cursor: 'not-allowed'
            },
            a: {
              pointerEvents: 'none'
            }
          },
          '&-divider': {
            height: 1,
            // By design
            margin: `${(0,cssinjs_es/* unit */.bf)(token.marginXXS)} 0`,
            overflow: 'hidden',
            lineHeight: 0,
            backgroundColor: token.colorSplit
          },
          [`${componentCls}-menu-submenu-expand-icon`]: {
            position: 'absolute',
            insetInlineEnd: token.paddingXS,
            [`${componentCls}-menu-submenu-arrow-icon`]: {
              marginInlineEnd: '0 !important',
              color: token.colorIcon,
              fontSize: fontSizeIcon,
              fontStyle: 'normal'
            }
          }
        }),
        [`${menuCls}-item-group-list`]: {
          margin: `0 ${(0,cssinjs_es/* unit */.bf)(token.marginXS)}`,
          padding: 0,
          listStyle: 'none'
        },
        [`${menuCls}-submenu-title`]: {
          paddingInlineEnd: token.calc(controlPaddingHorizontal).add(token.fontSizeSM).equal()
        },
        [`${menuCls}-submenu-vertical`]: {
          position: 'relative'
        },
        [`${menuCls}-submenu${menuCls}-submenu-disabled ${componentCls}-menu-submenu-title`]: {
          [`&, ${componentCls}-menu-submenu-arrow-icon`]: {
            color: colorTextDisabled,
            backgroundColor: colorBgElevated,
            cursor: 'not-allowed'
          }
        },
        // https://github.com/ant-design/ant-design/issues/19264
        [`${menuCls}-submenu-selected ${componentCls}-menu-submenu-title`]: {
          color: token.colorPrimary
        }
      })
    })
  },
  // Follow code may reuse in other components
  [(0,slide/* initSlideMotion */.oN)(token, 'slide-up'), (0,slide/* initSlideMotion */.oN)(token, 'slide-down'), initMoveMotion(token, 'move-up'), initMoveMotion(token, 'move-down'), (0,zoom/* initZoomMotion */._y)(token, 'zoom-big')]];
};
// ============================== Export ==============================
const dropdown_style_prepareComponentToken = token => Object.assign(Object.assign({
  zIndexPopup: token.zIndexPopupBase + 50,
  paddingBlock: (token.controlHeight - token.fontSize * token.lineHeight) / 2
}, getArrowOffsetToken({
  contentRadius: token.borderRadiusLG,
  limitVerticalRadius: true
})), getArrowToken(token));
/* harmony default export */ var dropdown_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Dropdown', token => {
  const {
    marginXXS,
    sizePopupArrow,
    paddingXXS,
    componentCls
  } = token;
  const dropdownToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    menuCls: `${componentCls}-menu`,
    dropdownArrowDistance: token.calc(sizePopupArrow).div(2).add(marginXXS).equal(),
    dropdownEdgeChildPadding: paddingXXS
  });
  return [genBaseStyle(dropdownToken), style_status(dropdownToken)];
}, dropdown_style_prepareComponentToken, {
  resetStyle: false
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown.js
"use client";






















const _Placements = (/* unused pure expression or super */ null && (['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight', 'top', 'bottom']));
const Dropdown = props => {
  var _a;
  const {
    menu,
    arrow,
    prefixCls: customizePrefixCls,
    children,
    trigger,
    disabled,
    dropdownRender,
    popupRender,
    getPopupContainer,
    overlayClassName,
    rootClassName,
    overlayStyle,
    open,
    onOpenChange,
    // Deprecated
    visible,
    onVisibleChange,
    mouseEnterDelay = 0.15,
    mouseLeaveDelay = 0.1,
    autoAdjustOverflow = true,
    placement = '',
    overlay,
    transitionName,
    destroyOnHidden,
    destroyPopupOnHide
  } = props;
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    dropdown
  } = react.useContext(context/* ConfigContext */.E_);
  const mergedPopupRender = popupRender || dropdownRender;
  // Warning for deprecated usage
  const warning = (0,_util_warning/* devUseWarning */.ln)('Dropdown');
  if (false) {}
  const memoTransitionName = react.useMemo(() => {
    const rootPrefixCls = getPrefixCls();
    if (transitionName !== undefined) {
      return transitionName;
    }
    if (placement.includes('top')) {
      return `${rootPrefixCls}-slide-down`;
    }
    return `${rootPrefixCls}-slide-up`;
  }, [getPrefixCls, placement, transitionName]);
  const memoPlacement = react.useMemo(() => {
    if (!placement) {
      return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
    }
    if (placement.includes('Center')) {
      return placement.slice(0, placement.indexOf('Center'));
    }
    return placement;
  }, [placement, direction]);
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = dropdown_style(prefixCls, rootCls);
  const [, token] = (0,useToken/* default */.ZP)();
  const child = react.Children.only(_util_isPrimitive(children) ? /*#__PURE__*/react.createElement("span", null, children) : children);
  const popupTrigger = (0,reactNode/* cloneElement */.Tm)(child, {
    className: classnames_default()(`${prefixCls}-trigger`, {
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }, child.props.className),
    disabled: (_a = child.props.disabled) !== null && _a !== void 0 ? _a : disabled
  });
  const triggerActions = disabled ? [] : trigger;
  const alignPoint = !!(triggerActions === null || triggerActions === void 0 ? void 0 : triggerActions.includes('contextMenu'));
  // =========================== Open ============================
  const [mergedOpen, setOpen] = (0,useMergedState/* default */.Z)(false, {
    value: open !== null && open !== void 0 ? open : visible
  });
  const onInnerOpenChange = (0,useEvent/* default */.Z)(nextOpen => {
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(nextOpen, {
      source: 'trigger'
    });
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(nextOpen);
    setOpen(nextOpen);
  });
  // =========================== Overlay ============================
  const overlayClassNameCustomized = classnames_default()(overlayClassName, rootClassName, hashId, cssVarCls, rootCls, dropdown === null || dropdown === void 0 ? void 0 : dropdown.className, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });
  const builtinPlacements = getPlacements({
    arrowPointAtCenter: typeof arrow === 'object' && arrow.pointAtCenter,
    autoAdjustOverflow,
    offset: token.marginXXS,
    arrowWidth: arrow ? token.sizePopupArrow : 0,
    borderRadius: token.borderRadius
  });
  const onMenuClick = react.useCallback(() => {
    if ((menu === null || menu === void 0 ? void 0 : menu.selectable) && (menu === null || menu === void 0 ? void 0 : menu.multiple)) {
      return;
    }
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false, {
      source: 'menu'
    });
    setOpen(false);
  }, [menu === null || menu === void 0 ? void 0 : menu.selectable, menu === null || menu === void 0 ? void 0 : menu.multiple]);
  const renderOverlay = () => {
    // rc-dropdown already can process the function of overlay, but we have check logic here.
    // So we need render the element to check and pass back to rc-dropdown.
    let overlayNode;
    if (menu === null || menu === void 0 ? void 0 : menu.items) {
      overlayNode = /*#__PURE__*/react.createElement(es_menu, Object.assign({}, menu));
    } else if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }
    if (mergedPopupRender) {
      overlayNode = mergedPopupRender(overlayNode);
    }
    overlayNode = react.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/react.createElement("span", null, overlayNode) : overlayNode);
    return /*#__PURE__*/react.createElement(OverrideProvider, {
      prefixCls: `${prefixCls}-menu`,
      rootClassName: classnames_default()(cssVarCls, rootCls),
      expandIcon: /*#__PURE__*/react.createElement("span", {
        className: `${prefixCls}-menu-submenu-arrow`
      }, direction === 'rtl' ? (/*#__PURE__*/react.createElement(icons_LeftOutlined, {
        className: `${prefixCls}-menu-submenu-arrow-icon`
      })) : (/*#__PURE__*/react.createElement(icons_RightOutlined, {
        className: `${prefixCls}-menu-submenu-arrow-icon`
      }))),
      mode: "vertical",
      selectable: false,
      onClick: onMenuClick,
      validator: ({
        mode
      }) => {
        // Warning if use other mode
         false ? 0 : void 0;
      }
    }, overlayNode);
  };
  // =========================== zIndex ============================
  const [zIndex, contextZIndex] = (0,useZIndex/* useZIndex */.Cn)('Dropdown', overlayStyle === null || overlayStyle === void 0 ? void 0 : overlayStyle.zIndex);
  // ============================ Render ============================
  let renderNode = /*#__PURE__*/react.createElement(es/* default */.Z, Object.assign({
    alignPoint: alignPoint
  }, (0,es_omit/* default */.Z)(props, ['rootClassName']), {
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    visible: mergedOpen,
    builtinPlacements: builtinPlacements,
    arrow: !!arrow,
    overlayClassName: overlayClassNameCustomized,
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: memoTransitionName,
    trigger: triggerActions,
    overlay: renderOverlay,
    placement: memoPlacement,
    onVisibleChange: onInnerOpenChange,
    overlayStyle: Object.assign(Object.assign(Object.assign({}, dropdown === null || dropdown === void 0 ? void 0 : dropdown.style), overlayStyle), {
      zIndex
    }),
    autoDestroy: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : destroyPopupOnHide
  }), popupTrigger);
  if (zIndex) {
    renderNode = /*#__PURE__*/react.createElement(zindexContext/* default */.Z.Provider, {
      value: contextZIndex
    }, renderNode);
  }
  return wrapCSSVar(renderNode);
};
// We don't care debug panel
const dropdown_PurePanel = (0,PurePanel/* default */.Z)(Dropdown, 'align', undefined, 'dropdown', prefixCls => prefixCls);
/* istanbul ignore next */
const WrapPurePanel = props => (/*#__PURE__*/react.createElement(dropdown_PurePanel, Object.assign({}, props), /*#__PURE__*/react.createElement("span", null)));
Dropdown._InternalPanelDoNotUseOrYouWillBeFired = WrapPurePanel;
if (false) {}
/* harmony default export */ var dropdown = (Dropdown);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 25 modules
var es_button = __webpack_require__(77683);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(42075);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown-button.js
"use client";

var dropdown_button_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








const DropdownButton = props => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const {
      prefixCls: customizePrefixCls,
      type = 'default',
      danger,
      disabled,
      loading,
      onClick,
      htmlType,
      children,
      className,
      menu,
      arrow,
      autoFocus,
      overlay,
      trigger,
      align,
      open,
      onOpenChange,
      placement,
      getPopupContainer,
      href,
      icon = /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null),
      title,
      buttonsRender = buttons => buttons,
      mouseEnterDelay,
      mouseLeaveDelay,
      overlayClassName,
      overlayStyle,
      destroyOnHidden,
      destroyPopupOnHide,
      dropdownRender,
      popupRender
    } = props,
    restProps = dropdown_button_rest(props, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyOnHidden", "destroyPopupOnHide", "dropdownRender", "popupRender"]);
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const buttonPrefixCls = `${prefixCls}-button`;
  const mergedPopupRender = popupRender || dropdownRender;
  const dropdownProps = {
    menu,
    arrow,
    autoFocus,
    align,
    disabled,
    trigger: disabled ? [] : trigger,
    onOpenChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    mouseEnterDelay,
    mouseLeaveDelay,
    overlayClassName,
    overlayStyle,
    destroyOnHidden,
    popupRender: mergedPopupRender
  };
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  const classes = classnames_default()(buttonPrefixCls, compactItemClassnames, className);
  if ('destroyPopupOnHide' in props) {
    dropdownProps.destroyPopupOnHide = destroyPopupOnHide;
  }
  if ('overlay' in props) {
    dropdownProps.overlay = overlay;
  }
  if ('open' in props) {
    dropdownProps.open = open;
  }
  if ('placement' in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }
  const leftButton = /*#__PURE__*/react.createElement(es_button/* default */.ZP, {
    type: type,
    danger: danger,
    disabled: disabled,
    loading: loading,
    onClick: onClick,
    htmlType: htmlType,
    href: href,
    title: title
  }, children);
  const rightButton = /*#__PURE__*/react.createElement(es_button/* default */.ZP, {
    type: type,
    danger: danger,
    icon: icon
  });
  const [leftButtonToRender, rightButtonToRender] = buttonsRender([leftButton, rightButton]);
  return /*#__PURE__*/react.createElement(space/* default */.Z.Compact, Object.assign({
    className: classes,
    size: compactSize,
    block: true
  }, restProps), leftButtonToRender, /*#__PURE__*/react.createElement(dropdown, Object.assign({}, dropdownProps), rightButtonToRender));
};
DropdownButton.__ANT_BUTTON = true;
/* harmony default export */ var dropdown_button = (DropdownButton);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/index.js
"use client";



const dropdown_Dropdown = dropdown;
dropdown_Dropdown.Button = dropdown_button;
/* harmony default export */ var es_dropdown = (dropdown_Dropdown);

/***/ }),

/***/ 60566:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aM: function() { return /* binding */ FormItemInputContext; },
  Ux: function() { return /* binding */ NoFormStyle; },
  pg: function() { return /* binding */ VariantContext; }
});

// UNUSED EXPORTS: FormContext, FormItemPrefixContext, FormProvider, NoStyleItemContext

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js + 8 modules
var regeneratorRuntime = __webpack_require__(55850);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper = __webpack_require__(29388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isEqual.js
var isEqual = __webpack_require__(91881);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/FieldContext.js


var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var warningFunc = function warningFunc() {
  (0,warning/* default */.ZP)(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};
var Context = /*#__PURE__*/react.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
/* harmony default export */ var FieldContext = (Context);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/ListContext.js

var ListContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var es_ListContext = (ListContext);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/typeUtil.js
function typeUtil_toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function isFormInstance(form) {
  return form && !!form._init;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/messages.js
function newMessages() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages_messages = newMessages();
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(61120);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(89611);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__(78814);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js


function _construct(t, e, r) {
  if ((0,isNativeReflectConstruct/* default */.Z)()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,setPrototypeOf/* default */.Z)(p, r.prototype), p;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, (0,getPrototypeOf/* default */.Z)(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), (0,setPrototypeOf/* default */.Z)(Wrapper, t);
  }, _wrapNativeSuper(t);
}

;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/util.js
/* provided dependency */ var process = __webpack_require__(34155);










/* eslint no-console:0 */

var formatRegExp = /%[sdj%]/g;
var util_warning = function warning() {};

// don't print warning message when in production env or node runtime
if (typeof process !== 'undefined' && ({"NODE_ENV":"production","PUBLIC_PATH":"/"}) && "production" !== 'production' && 0 && 0) {}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len = args.length;
  if (typeof template === 'function') {
    // eslint-disable-next-line prefer-spread
    return template.apply(null, args);
  }
  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, (0,toConsumableArray/* default */.Z)(errors || []));
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function (a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, (0,toConsumableArray/* default */.Z)(objArr[k] || []));
  });
  return ret;
}
var AsyncValidationError = /*#__PURE__*/function (_Error) {
  (0,inherits/* default */.Z)(AsyncValidationError, _Error);
  var _super = (0,createSuper/* default */.Z)(AsyncValidationError);
  function AsyncValidationError(errors, fields) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, AsyncValidationError);
    _this = _super.call(this, 'Async Validation Error');
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "errors", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "fields", void 0);
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return (0,createClass/* default */.Z)(AsyncValidationError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending.catch(function (e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      // eslint-disable-next-line prefer-spread
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function (key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending.catch(function (e) {
    return e;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}
function getValue(value, path) {
  var v = value;
  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }
    v = v[path[i]];
  }
  return v;
}
function complementError(rule, source) {
  return function (oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((0,esm_typeof/* default */.Z)(value) === 'object' && (0,esm_typeof/* default */.Z)(target[s]) === 'object') {
          target[s] = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, target[s]), value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/rule/enum.js

var ENUM = 'enum';
var enumerable = function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
};
/* harmony default export */ var rule_enum = (enumerable);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/rule/pattern.js

var pattern = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
/* harmony default export */ var rule_pattern = (pattern);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/rule/range.js

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number';
  // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  }
  // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".length !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
/* harmony default export */ var rule_range = (range);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/rule/required.js

var required = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
/* harmony default export */ var rule_required = (required);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/rule/url.js
// https://github.com/kevva/url-regex/blob/master/index.js
var urlReg;
/* harmony default export */ var rule_url = (function () {
  if (urlReg) {
    return urlReg;
  }
  var word = '[a-fA-F\\d:]';
  var b = function b(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(word, ")|(?<=").concat(word, ")(?=\\s|$))") : '';
  };
  var v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
  var v6seg = '[a-fA-F\\d]{1,4}';
  var v6List = ["(?:".concat(v6seg, ":){7}(?:").concat(v6seg, "|:)"), // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
  "(?:".concat(v6seg, ":){6}(?:").concat(v4, "|:").concat(v6seg, "|:)"), // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
  "(?:".concat(v6seg, ":){5}(?::").concat(v4, "|(?::").concat(v6seg, "){1,2}|:)"), // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
  "(?:".concat(v6seg, ":){4}(?:(?::").concat(v6seg, "){0,1}:").concat(v4, "|(?::").concat(v6seg, "){1,3}|:)"), // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
  "(?:".concat(v6seg, ":){3}(?:(?::").concat(v6seg, "){0,2}:").concat(v4, "|(?::").concat(v6seg, "){1,4}|:)"), // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
  "(?:".concat(v6seg, ":){2}(?:(?::").concat(v6seg, "){0,3}:").concat(v4, "|(?::").concat(v6seg, "){1,5}|:)"), // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
  "(?:".concat(v6seg, ":){1}(?:(?::").concat(v6seg, "){0,4}:").concat(v4, "|(?::").concat(v6seg, "){1,6}|:)"), // 1::              1::3:4:5:6:7:8   1::8            1::
  "(?::(?:(?::".concat(v6seg, "){0,5}:").concat(v4, "|(?::").concat(v6seg, "){1,7}|:))") // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ];
  var v6Eth0 = "(?:%[0-9a-zA-Z]{1,})?"; // %eth0            %1

  var v6 = "(?:".concat(v6List.join('|'), ")").concat(v6Eth0);

  // Pre-compile only the exact regexes because adding a global flag make regexes stateful
  var v46Exact = new RegExp("(?:^".concat(v4, "$)|(?:^").concat(v6, "$)"));
  var v4exact = new RegExp("^".concat(v4, "$"));
  var v6exact = new RegExp("^".concat(v6, "$"));
  var ip = function ip(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:".concat(b(options)).concat(v4).concat(b(options), ")|(?:").concat(b(options)).concat(v6).concat(b(options), ")"), 'g');
  };
  ip.v4 = function (options) {
    return options && options.exact ? v4exact : new RegExp("".concat(b(options)).concat(v4).concat(b(options)), 'g');
  };
  ip.v6 = function (options) {
    return options && options.exact ? v6exact : new RegExp("".concat(b(options)).concat(v6).concat(b(options)), 'g');
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = '(?:\\S+(?::\\S*)?@)?';
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = '(?::\\d{2,5})?';
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:".concat(protocol, "|www\\.)").concat(auth, "(?:localhost|").concat(ipv4, "|").concat(ipv6, "|").concat(host).concat(domain).concat(tld, ")").concat(port).concat(path);
  urlReg = new RegExp("(?:^".concat(regex, "$)"), 'i');
  return urlReg;
});
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/rule/type.js




/* eslint max-len:0 */

var type_pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object: function object(value) {
    return (0,esm_typeof/* default */.Z)(value) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(type_pattern.email);
  },
  url: function url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(rule_url());
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(type_pattern.hex);
  }
};
var type = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    rule_required(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
    // straight typeof check
  } else if (ruleType && (0,esm_typeof/* default */.Z)(value) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
/* harmony default export */ var rule_type = (type);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/rule/whitespace.js


/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
/* harmony default export */ var rule_whitespace = (whitespace);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/rule/index.js






/* harmony default export */ var es_rule = ({
  required: rule_required,
  whitespace: rule_whitespace,
  type: rule_type,
  range: rule_range,
  enum: rule_enum,
  pattern: rule_pattern
});
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/any.js


var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
  }
  callback(errors);
};
/* harmony default export */ var validator_any = (any);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/array.js

var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, 'array');
    if (value !== undefined && value !== null) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_array = (array);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/boolean.js


var boolean_boolean = function boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_boolean = (boolean_boolean);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/date.js


var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'date')) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      es_rule.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        es_rule.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_date = (date);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/enum.js


var enum_ENUM = 'enum';
var enum_enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule[enum_ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_enum = (enum_enumerable);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/float.js


var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_float = (floatFn);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/integer.js


var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_integer = (integer);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/method.js


var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_method = (method);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/number.js


var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === '') {
      // eslint-disable-next-line no-param-reassign
      value = undefined;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_number = (number);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/object.js


var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (value !== undefined) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_object = (object);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/pattern.js


var pattern_pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      es_rule.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_pattern = (pattern_pattern);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/regexp.js


var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_regexp = (regexp);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/required.js


var required_required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : (0,esm_typeof/* default */.Z)(value);
  es_rule.required(rule, value, source, errors, options, type);
  callback(errors);
};
/* harmony default export */ var validator_required = (required_required);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/string.js


var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      es_rule.type(rule, value, source, errors, options);
      es_rule.range(rule, value, source, errors, options);
      es_rule.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        es_rule.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_string = (string);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/type.js


var type_type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    es_rule.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      es_rule.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
/* harmony default export */ var validator_type = (type_type);
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/validator/index.js















/* harmony default export */ var es_validator = ({
  string: validator_string,
  method: validator_method,
  number: validator_number,
  boolean: validator_boolean,
  regexp: validator_regexp,
  integer: validator_integer,
  float: validator_float,
  array: validator_array,
  object: validator_object,
  enum: validator_enum,
  pattern: validator_pattern,
  date: validator_date,
  url: validator_type,
  hex: validator_type,
  email: validator_type,
  required: validator_required,
  any: validator_any
});
;// CONCATENATED MODULE: ./node_modules/@rc-component/async-validator/es/index.js











/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
var Schema = /*#__PURE__*/function () {
  function Schema(descriptor) {
    (0,classCallCheck/* default */.Z)(this, Schema);
    // ======================== Instance ========================
    (0,defineProperty/* default */.Z)(this, "rules", null);
    (0,defineProperty/* default */.Z)(this, "_messages", messages_messages);
    this.define(descriptor);
  }
  (0,createClass/* default */.Z)(Schema, [{
    key: "define",
    value: function define(rules) {
      var _this = this;
      if (!rules) {
        throw new Error('Cannot configure a schema with no rules');
      }
      if ((0,esm_typeof/* default */.Z)(rules) !== 'object' || Array.isArray(rules)) {
        throw new Error('Rules must be an object');
      }
      this.rules = {};
      Object.keys(rules).forEach(function (name) {
        var item = rules[name];
        _this.rules[name] = Array.isArray(item) ? item : [item];
      });
    }
  }, {
    key: "messages",
    value: function messages(_messages) {
      if (_messages) {
        this._messages = deepMerge(newMessages(), _messages);
      }
      return this._messages;
    }
  }, {
    key: "validate",
    value: function validate(source_) {
      var _this2 = this;
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var oc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var source = source_;
      var options = o;
      var callback = oc;
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback(null, source);
        }
        return Promise.resolve(source);
      }
      function complete(results) {
        var errors = [];
        var fields = {};
        function add(e) {
          if (Array.isArray(e)) {
            var _errors;
            errors = (_errors = errors).concat.apply(_errors, (0,toConsumableArray/* default */.Z)(e));
          } else {
            errors.push(e);
          }
        }
        for (var i = 0; i < results.length; i++) {
          add(results[i]);
        }
        if (!errors.length) {
          callback(null, source);
        } else {
          fields = convertFieldsError(errors);
          callback(errors, fields);
        }
      }
      if (options.messages) {
        var messages = this.messages();
        if (messages === messages_messages) {
          messages = newMessages();
        }
        deepMerge(messages, options.messages);
        options.messages = messages;
      } else {
        options.messages = this.messages();
      }
      var series = {};
      var keys = options.keys || Object.keys(this.rules);
      keys.forEach(function (z) {
        var arr = _this2.rules[z];
        var value = source[z];
        arr.forEach(function (r) {
          var rule = r;
          if (typeof rule.transform === 'function') {
            if (source === source_) {
              source = (0,objectSpread2/* default */.Z)({}, source);
            }
            value = source[z] = rule.transform(value);
            if (value !== undefined && value !== null) {
              rule.type = rule.type || (Array.isArray(value) ? 'array' : (0,esm_typeof/* default */.Z)(value));
            }
          }
          if (typeof rule === 'function') {
            rule = {
              validator: rule
            };
          } else {
            rule = (0,objectSpread2/* default */.Z)({}, rule);
          }

          // Fill validator. Skip if nothing need to validate
          rule.validator = _this2.getValidationMethod(rule);
          if (!rule.validator) {
            return;
          }
          rule.field = z;
          rule.fullField = rule.fullField || z;
          rule.type = _this2.getType(rule);
          series[z] = series[z] || [];
          series[z].push({
            rule: rule,
            value: value,
            source: source,
            field: z
          });
        });
      });
      var errorFields = {};
      return asyncMap(series, options, function (data, doIt) {
        var rule = data.rule;
        var deep = (rule.type === 'object' || rule.type === 'array') && ((0,esm_typeof/* default */.Z)(rule.fields) === 'object' || (0,esm_typeof/* default */.Z)(rule.defaultField) === 'object');
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullField(key, schema) {
          return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, schema), {}, {
            fullField: "".concat(rule.fullField, ".").concat(key),
            fullFields: rule.fullFields ? [].concat((0,toConsumableArray/* default */.Z)(rule.fullFields), [key]) : [key]
          });
        }
        function cb() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var errorList = Array.isArray(e) ? e : [e];
          if (!options.suppressWarning && errorList.length) {
            Schema.warning('async-validator:', errorList);
          }
          if (errorList.length && rule.message !== undefined) {
            errorList = [].concat(rule.message);
          }

          // Fill error info
          var filledErrors = errorList.map(complementError(rule, source));
          if (options.first && filledErrors.length) {
            errorFields[rule.field] = 1;
            return doIt(filledErrors);
          }
          if (!deep) {
            doIt(filledErrors);
          } else {
            // if rule is required but the target object
            // does not exist fail at the rule level and don't
            // go deeper
            if (rule.required && !data.value) {
              if (rule.message !== undefined) {
                filledErrors = [].concat(rule.message).map(complementError(rule, source));
              } else if (options.error) {
                filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
              }
              return doIt(filledErrors);
            }
            var fieldsSchema = {};
            if (rule.defaultField) {
              Object.keys(data.value).map(function (key) {
                fieldsSchema[key] = rule.defaultField;
              });
            }
            fieldsSchema = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, fieldsSchema), data.rule.fields);
            var paredFieldsSchema = {};
            Object.keys(fieldsSchema).forEach(function (field) {
              var fieldSchema = fieldsSchema[field];
              var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
              paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
            });
            var schema = new Schema(paredFieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, function (errs) {
              var finalErrors = [];
              if (filledErrors && filledErrors.length) {
                finalErrors.push.apply(finalErrors, (0,toConsumableArray/* default */.Z)(filledErrors));
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, (0,toConsumableArray/* default */.Z)(errs));
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        var res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          try {
            res = rule.validator(rule, data.value, cb, data.source, options);
          } catch (error) {
            var _console$error, _console;
            (_console$error = (_console = console).error) === null || _console$error === void 0 || _console$error.call(_console, error);
            // rethrow to report error
            if (!options.suppressValidatorError) {
              setTimeout(function () {
                throw error;
              }, 0);
            }
            cb(error.message);
          }
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || "".concat(rule.fullField || rule.field, " fails"));
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(function () {
            return cb();
          }, function (e) {
            return cb(e);
          });
        }
      }, function (results) {
        complete(results);
      }, source);
    }
  }, {
    key: "getType",
    value: function getType(rule) {
      if (rule.type === undefined && rule.pattern instanceof RegExp) {
        rule.type = 'pattern';
      }
      if (typeof rule.validator !== 'function' && rule.type && !es_validator.hasOwnProperty(rule.type)) {
        throw new Error(format('Unknown rule type %s', rule.type));
      }
      return rule.type || 'string';
    }
  }, {
    key: "getValidationMethod",
    value: function getValidationMethod(rule) {
      if (typeof rule.validator === 'function') {
        return rule.validator;
      }
      var keys = Object.keys(rule);
      var messageIndex = keys.indexOf('message');
      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }
      if (keys.length === 1 && keys[0] === 'required') {
        return es_validator.required;
      }
      return es_validator[this.getType(rule)] || undefined;
    }
  }]);
  return Schema;
}();
// ========================= Static =========================
(0,defineProperty/* default */.Z)(Schema, "register", function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  es_validator[type] = validator;
});
(0,defineProperty/* default */.Z)(Schema, "warning", util_warning);
(0,defineProperty/* default */.Z)(Schema, "messages", messages_messages);
(0,defineProperty/* default */.Z)(Schema, "validators", es_validator);
/* harmony default export */ var es = (Schema);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/messages.js
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
// EXTERNAL MODULE: ./node_modules/rc-util/es/utils/set.js + 1 modules
var set = __webpack_require__(83799);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/validateUtil.js











// Remove incorrect original ts define
var AsyncValidator = es;

/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */
function replaceMessage(template, kv) {
  return template.replace(/\\?\$\{\w+\}/g, function (str) {
    if (str.startsWith('\\')) {
      return str.slice(1);
    }
    var key = str.slice(2, -1);
    return kv[key];
  });
}
var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';
function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */
function _validateRule() {
  _validateRule = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(name, value, rule, options, messageVariables) {
    var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cloneRule = (0,objectSpread2/* default */.Z)({}, rule); // Bug of `async-validator`
          // https://github.com/react-component/field-form/issues/316
          // https://github.com/react-component/field-form/issues/313
          delete cloneRule.ruleIndex;

          // https://github.com/ant-design/ant-design/issues/40497#issuecomment-1422282378
          AsyncValidator.warning = function () {
            return void 0;
          };
          if (cloneRule.validator) {
            originValidator = cloneRule.validator;
            cloneRule.validator = function () {
              try {
                return originValidator.apply(void 0, arguments);
              } catch (error) {
                console.error(error);
                return Promise.reject(CODE_LOGIC_ERROR);
              }
            };
          }

          // We should special handle array validate
          subRuleField = null;
          if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
            subRuleField = cloneRule.defaultField;
            delete cloneRule.defaultField;
          }
          validator = new AsyncValidator((0,defineProperty/* default */.Z)({}, name, [cloneRule]));
          messages = (0,set/* merge */.T)(defaultValidateMessages, options.validateMessages);
          validator.messages(messages);
          result = [];
          _context2.prev = 10;
          _context2.next = 13;
          return Promise.resolve(validator.validate((0,defineProperty/* default */.Z)({}, name, value), (0,objectSpread2/* default */.Z)({}, options)));
        case 13:
          _context2.next = 18;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](10);
          if (_context2.t0.errors) {
            result = _context2.t0.errors.map(function (_ref4, index) {
              var message = _ref4.message;
              var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
              return /*#__PURE__*/react.isValidElement(mergedMessage) ?
              /*#__PURE__*/
              // Wrap ReactNode with `key`
              react.cloneElement(mergedMessage, {
                key: "error_".concat(index)
              }) : mergedMessage;
            });
          }
        case 18:
          if (!(!result.length && subRuleField)) {
            _context2.next = 23;
            break;
          }
          _context2.next = 21;
          return Promise.all(value.map(function (subValue, i) {
            return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
          }));
        case 21:
          subResults = _context2.sent;
          return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
            return [].concat((0,toConsumableArray/* default */.Z)(prev), (0,toConsumableArray/* default */.Z)(errors));
          }, []));
        case 23:
          // Replace message with variables
          kv = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rule), {}, {
            name: name,
            enum: (rule.enum || []).join(', ')
          }, messageVariables);
          fillVariableResult = result.map(function (error) {
            if (typeof error === 'string') {
              return replaceMessage(error, kv);
            }
            return error;
          });
          return _context2.abrupt("return", fillVariableResult);
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[10, 15]]);
  }));
  return _validateRule.apply(this, arguments);
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join('.');

  // Fill rule with context
  var filledRules = rules.map(function (currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;
    var cloneRule = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, currentRule), {}, {
      ruleIndex: ruleIndex
    });

    // Replace validator if needed
    if (originValidatorFunc) {
      cloneRule.validator = function (rule, val, callback) {
        var hasPromise = false;

        // Wrap callback only accept when promise not provided
        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          // Wait a tick to make sure return type is a promise
          Promise.resolve().then(function () {
            (0,warning/* default */.ZP)(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');
            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        };

        // Get promise
        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';

        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */
        (0,warning/* default */.ZP)(hasPromise, '`callback` is deprecated. Please return a promise instead.');
        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err || ' ');
          });
        }
      };
    }
    return cloneRule;
  }).sort(function (_ref, _ref2) {
    var w1 = _ref.warningOnly,
      i1 = _ref.ruleIndex;
    var w2 = _ref2.warningOnly,
      i2 = _ref2.ruleIndex;
    if (!!w1 === !!w2) {
      // Let keep origin order
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });

  // Do validate rules
  var summaryPromise;
  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise( /*#__PURE__*/function () {
      var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(resolve, reject) {
        var i, rule, errors;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              i = 0;
            case 1:
              if (!(i < filledRules.length)) {
                _context.next = 12;
                break;
              }
              rule = filledRules[i];
              _context.next = 5;
              return validateRule(name, value, rule, options, messageVariables);
            case 5:
              errors = _context.sent;
              if (!errors.length) {
                _context.next = 9;
                break;
              }
              reject([{
                errors: errors,
                rule: rule
              }]);
              return _context.abrupt("return");
            case 9:
              i += 1;
              _context.next = 1;
              break;
            case 12:
              /* eslint-enable */

              resolve([]);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables).then(function (errors) {
        return {
          errors: errors,
          rule: rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
      // Always change to rejection for Field to catch
      return Promise.reject(errors);
    });
  }

  // Internal catch error to avoid console error log.
  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}
function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}
function _finishOnAllFailed() {
  _finishOnAllFailed = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee3(rulePromises) {
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
            var _ref5;
            var errors = (_ref5 = []).concat.apply(_ref5, (0,toConsumableArray/* default */.Z)(errorsList));
            return errors;
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}
function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}
function _finishOnFirstFailed() {
  _finishOnFirstFailed = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee4(rulePromises) {
    var count;
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          count = 0;
          return _context4.abrupt("return", new Promise(function (resolve) {
            rulePromises.forEach(function (promise) {
              promise.then(function (ruleError) {
                if (ruleError.errors.length) {
                  resolve([ruleError]);
                }
                count += 1;
                if (count === rulePromises.length) {
                  resolve([]);
                }
              });
            });
          }));
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/utils/get.js
var get = __webpack_require__(88306);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/valueUtil.js







/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */
function getNamePath(path) {
  return typeUtil_toArray(path);
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = (0,get/* default */.Z)(store, namePath);
    newStore = (0,set/* default */.Z)(newStore, namePath, value);
  });
  return newStore;
}

/**
 * Check if `namePathList` includes `namePath`.
 * @param namePathList A list of `InternalNamePath[]`
 * @param namePath Compare `InternalNamePath`
 * @param partialMatch True will make `[a, b]` match `[a, b, c]`
 */
function containsNamePath(namePathList, namePath) {
  var partialMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return namePathList && namePathList.some(function (path) {
    return matchNamePath(namePath, path, partialMatch);
  });
}

/**
 * Check if `namePath` is super set or equal of `subNamePath`.
 * @param namePath A list of `InternalNamePath[]`
 * @param subNamePath Compare `InternalNamePath`
 * @param partialMatch True will make `[a, b]` match `[a, b, c]`
 */
function matchNamePath(namePath, subNamePath) {
  var partialMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!namePath || !subNamePath) {
    return false;
  }
  if (!partialMatch && namePath.length !== subNamePath.length) {
    return false;
  }
  return subNamePath.every(function (nameUnit, i) {
    return namePath[i] === nameUnit;
  });
}

// Like `shallowEqual`, but we not check the data which may cause re-render

function isSimilar(source, target) {
  if (source === target) {
    return true;
  }
  if (!source && target || source && !target) {
    return false;
  }
  if (!source || !target || (0,esm_typeof/* default */.Z)(source) !== 'object' || (0,esm_typeof/* default */.Z)(target) !== 'object') {
    return false;
  }
  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat(sourceKeys, targetKeys));
  return (0,toConsumableArray/* default */.Z)(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];
    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }
    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];
  if (event && event.target && (0,esm_typeof/* default */.Z)(event.target) === 'object' && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */
function valueUtil_move(array, moveIndex, toIndex) {
  var length = array.length;
  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }
  var item = array[moveIndex];
  var diff = moveIndex - toIndex;
  if (diff > 0) {
    // move left
    return [].concat((0,toConsumableArray/* default */.Z)(array.slice(0, toIndex)), [item], (0,toConsumableArray/* default */.Z)(array.slice(toIndex, moveIndex)), (0,toConsumableArray/* default */.Z)(array.slice(moveIndex + 1, length)));
  }
  if (diff < 0) {
    // move right
    return [].concat((0,toConsumableArray/* default */.Z)(array.slice(0, moveIndex)), (0,toConsumableArray/* default */.Z)(array.slice(moveIndex + 1, toIndex + 1)), [item], (0,toConsumableArray/* default */.Z)(array.slice(toIndex + 1, length)));
  }
  return array;
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/Field.js












var _excluded = ["name"];









var EMPTY_ERRORS = [];
function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }
  return prevValue !== nextValue;
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
// We use Class instead of Hooks here since it will cost much code by using Hooks.
var Field = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Field, _React$Component);
  var _super = (0,createSuper/* default */.Z)(Field);
  // ============================== Subscriptions ==============================
  function Field(props) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Field);
    _this = _super.call(this, props);

    // Register on init
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      resetCount: 0
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "cancelRegisterFunc", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "mounted", false);
    /**
     * Follow state should not management in State since it will async update by React.
     * This makes first render of form can not get correct state value.
     */
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "touched", false);
    /**
     * Mark when touched & validated. Currently only used for `dependencies`.
     * Note that we do not think field with `initialValue` is dirty
     * but this will be by `isFieldDirty` func.
     */
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "dirty", false);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "validatePromise", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "prevValidating", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "errors", EMPTY_ERRORS);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "warnings", EMPTY_ERRORS);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "cancelRegister", function () {
      var _this$props = _this.props,
        preserve = _this$props.preserve,
        isListField = _this$props.isListField,
        name = _this$props.name;
      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
      }
      _this.cancelRegisterFunc = null;
    });
    // ================================== Utils ==================================
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getNamePath", function () {
      var _this$props2 = _this.props,
        name = _this$props2.name,
        fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
        prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== undefined ? [].concat((0,toConsumableArray/* default */.Z)(prefixName), (0,toConsumableArray/* default */.Z)(name)) : [];
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getRules", function () {
      var _this$props3 = _this.props,
        _this$props3$rules = _this$props3.rules,
        rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
        fieldContext = _this$props3.fieldContext;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }
        return rule;
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "refresh", function () {
      if (!_this.mounted) return;

      /**
       * Clean up current node.
       */
      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    });
    // Event should only trigger when meta changed
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "metaCache", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "triggerMetaEvent", function (destroy) {
      var onMetaChange = _this.props.onMetaChange;
      if (onMetaChange) {
        var _meta = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.getMeta()), {}, {
          destroy: destroy
        });
        if (!(0,isEqual/* default */.Z)(_this.metaCache, _meta)) {
          onMetaChange(_meta);
        }
        _this.metaCache = _meta;
      } else {
        _this.metaCache = null;
      }
    });
    // ========================= Field Entity Interfaces =========================
    // Trigger by store update. Check if need update the component
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onStoreChange", function (prevStore, namePathList, info) {
      var _this$props4 = _this.props,
        shouldUpdate = _this$props4.shouldUpdate,
        _this$props4$dependen = _this$props4.dependencies,
        dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
        onReset = _this$props4.onReset;
      var store = info.store;
      var namePath = _this.getNamePath();
      var prevValue = _this.getValue(prevStore);
      var curValue = _this.getValue(store);
      var namePathMatch = namePathList && containsNamePath(namePathList, namePath);

      // `setFieldsValue` is a quick access to update related status
      if (info.type === 'valueUpdate' && info.source === 'external' && !(0,isEqual/* default */.Z)(prevValue, curValue)) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.triggerMetaEvent();
      }
      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = undefined;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;
            _this.triggerMetaEvent();
            onReset === null || onReset === void 0 || onReset();
            _this.refresh();
            return;
          }
          break;

        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case 'remove':
          {
            if (shouldUpdate && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
          }
        case 'setField':
          {
            var data = info.data;
            if (namePathMatch) {
              if ('touched' in data) {
                _this.touched = data.touched;
              }
              if ('validating' in data && !('originRCField' in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }
              if ('errors' in data) {
                _this.errors = data.errors || EMPTY_ERRORS;
              }
              if ('warnings' in data) {
                _this.warnings = data.warnings || EMPTY_ERRORS;
              }
              _this.dirty = true;
              _this.triggerMetaEvent();
              _this.reRender();
              return;
            } else if ('value' in data && containsNamePath(namePathList, namePath, true)) {
              // Contains path with value should also check
              _this.reRender();
              return;
            }

            // Handle update by `setField` with `shouldUpdate`
            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
          }
        case 'dependenciesUpdate':
          {
            /**
             * Trigger when marked `dependencies` updated. Related fields will all update
             */
            var dependencyList = dependencies.map(getNamePath);
            // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
            // emitted earlier and they will work there
            // If set it may cause unnecessary twice rerendering
            if (dependencyList.some(function (dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })) {
              _this.reRender();
              return;
            }
            break;
          }
        default:
          // 1. If `namePath` exists in `namePathList`, means it's related value and should update
          //      For example <List name="list"><Field name={['list', 0]}></List>
          //      If `namePathList` is [['list']] (List value update), Field should be updated
          //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
          // 2.
          //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
          //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
          //       is not provided
          //   2.2 If `shouldUpdate` provided, use customize logic to update the field
          //       else to check if value changed
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();
            return;
          }
          break;
      }
      if (shouldUpdate === true) {
        _this.reRender();
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "validateRules", function (options) {
      // We should fixed namePath & value to avoid developer change then by form function
      var namePath = _this.getNamePath();
      var currentValue = _this.getValue();
      var _ref2 = options || {},
        triggerName = _ref2.triggerName,
        _ref2$validateOnly = _ref2.validateOnly,
        validateOnly = _ref2$validateOnly === void 0 ? false : _ref2$validateOnly;

      // Force change to async to avoid rule OOD under renderProps field
      var rootPromise = Promise.resolve().then( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
        var _this$props5, _this$props5$validate, validateFirst, messageVariables, validateDebounce, filteredRules, promise;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this.mounted) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", []);
            case 2:
              _this$props5 = _this.props, _this$props5$validate = _this$props5.validateFirst, validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate, messageVariables = _this$props5.messageVariables, validateDebounce = _this$props5.validateDebounce; // Start validate
              filteredRules = _this.getRules();
              if (triggerName) {
                filteredRules = filteredRules.filter(function (rule) {
                  return rule;
                }).filter(function (rule) {
                  var validateTrigger = rule.validateTrigger;
                  if (!validateTrigger) {
                    return true;
                  }
                  var triggerList = typeUtil_toArray(validateTrigger);
                  return triggerList.includes(triggerName);
                });
              }

              // Wait for debounce. Skip if no `triggerName` since its from `validateFields / submit`
              if (!(validateDebounce && triggerName)) {
                _context.next = 10;
                break;
              }
              _context.next = 8;
              return new Promise(function (resolve) {
                setTimeout(resolve, validateDebounce);
              });
            case 8:
              if (!(_this.validatePromise !== rootPromise)) {
                _context.next = 10;
                break;
              }
              return _context.abrupt("return", []);
            case 10:
              promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
              promise.catch(function (e) {
                return e;
              }).then(function () {
                var ruleErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_ERRORS;
                if (_this.validatePromise === rootPromise) {
                  var _ruleErrors$forEach;
                  _this.validatePromise = null;

                  // Get errors & warnings
                  var nextErrors = [];
                  var nextWarnings = [];
                  (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function (_ref4) {
                    var warningOnly = _ref4.rule.warningOnly,
                      _ref4$errors = _ref4.errors,
                      errors = _ref4$errors === void 0 ? EMPTY_ERRORS : _ref4$errors;
                    if (warningOnly) {
                      nextWarnings.push.apply(nextWarnings, (0,toConsumableArray/* default */.Z)(errors));
                    } else {
                      nextErrors.push.apply(nextErrors, (0,toConsumableArray/* default */.Z)(errors));
                    }
                  });
                  _this.errors = nextErrors;
                  _this.warnings = nextWarnings;
                  _this.triggerMetaEvent();
                  _this.reRender();
                }
              });
              return _context.abrupt("return", promise);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })));
      if (validateOnly) {
        return rootPromise;
      }
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;
      _this.triggerMetaEvent();

      // Force trigger re-render since we need sync renderProps with new meta
      _this.reRender();
      return rootPromise;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "isFieldValidating", function () {
      return !!_this.validatePromise;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "isFieldTouched", function () {
      return _this.touched;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "isFieldDirty", function () {
      // Touched or validate or has initialValue
      if (_this.dirty || _this.props.initialValue !== undefined) {
        return true;
      }

      // Form set initialValue
      var fieldContext = _this.props.fieldContext;
      var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK),
        getInitialValue = _fieldContext$getInte.getInitialValue;
      if (getInitialValue(_this.getNamePath()) !== undefined) {
        return true;
      }
      return false;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getErrors", function () {
      return _this.errors;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getWarnings", function () {
      return _this.warnings;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "isListField", function () {
      return _this.props.isListField;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "isList", function () {
      return _this.props.isList;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "isPreserve", function () {
      return _this.props.preserve;
    });
    // ============================= Child Component =============================
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getMeta", function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        warnings: _this.warnings,
        name: _this.getNamePath(),
        validated: _this.validatePromise === null
      };
      return meta;
    });
    // Only return validate child node. If invalidate, will do nothing about field.
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getOnlyChild", function (children) {
      // Support render props
      if (typeof children === 'function') {
        var _meta2 = _this.getMeta();
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.getOnlyChild(children(_this.getControlled(), _meta2, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      }

      // Filed element only
      var childList = (0,toArray/* default */.Z)(children);
      if (childList.length !== 1 || ! /*#__PURE__*/react.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }
      return {
        child: childList[0],
        isFunction: false
      };
    });
    // ============================== Field Control ==============================
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getValue", function (store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;
      var namePath = _this.getNamePath();
      return (0,get/* default */.Z)(store || getFieldsValue(true), namePath);
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getControlled", function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props6 = _this.props,
        name = _this$props6.name,
        trigger = _this$props6.trigger,
        validateTrigger = _this$props6.validateTrigger,
        getValueFromEvent = _this$props6.getValueFromEvent,
        normalize = _this$props6.normalize,
        valuePropName = _this$props6.valuePropName,
        getValueProps = _this$props6.getValueProps,
        fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;
      var namePath = _this.getNamePath();
      var getInternalHooks = fieldContext.getInternalHooks,
        getFieldsValue = fieldContext.getFieldsValue;
      var _getInternalHooks = getInternalHooks(HOOK_MARK),
        dispatch = _getInternalHooks.dispatch;
      var value = _this.getValue();
      var mergedGetValueProps = getValueProps || function (val) {
        return (0,defineProperty/* default */.Z)({}, valuePropName, val);
      };
      var originTriggerFunc = childProps[trigger];
      var valueProps = name !== undefined ? mergedGetValueProps(value) : {};

      // warning when prop value is function
      if (false) {}
      var control = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, childProps), valueProps);

      // Add trigger
      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        _this.dirty = true;
        _this.triggerMetaEvent();
        var newValue;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }
        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }
        if (newValue !== value) {
          dispatch({
            type: 'updateValue',
            namePath: namePath,
            value: newValue
          });
        }
        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      };

      // Add validateTrigger
      var validateTriggerList = typeUtil_toArray(mergedValidateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];
        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          }

          // Always use latest rules
          var rules = _this.props.rules;
          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName
            });
          }
        };
      });
      return control;
    });
    if (props.fieldContext) {
      var getInternalHooks = props.fieldContext.getInternalHooks;
      var _getInternalHooks2 = getInternalHooks(HOOK_MARK),
        initEntityValue = _getInternalHooks2.initEntityValue;
      initEntityValue((0,assertThisInitialized/* default */.Z)(_this));
    }
    return _this;
  }
  (0,createClass/* default */.Z)(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
        shouldUpdate = _this$props7.shouldUpdate,
        fieldContext = _this$props7.fieldContext;
      this.mounted = true;

      // Register on init
      if (fieldContext) {
        var getInternalHooks = fieldContext.getInternalHooks;
        var _getInternalHooks3 = getInternalHooks(HOOK_MARK),
          registerField = _getInternalHooks3.registerField;
        this.cancelRegisterFunc = registerField(this);
      }

      // One more render for component in case fields not ready
      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.triggerMetaEvent(true);
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;
      var _this$getOnlyChild = this.getOnlyChild(children),
        child = _this$getOnlyChild.child,
        isFunction = _this$getOnlyChild.isFunction;

      // Not need to `cloneElement` since user can handle this in render function self
      var returnChildNode;
      if (isFunction) {
        returnChildNode = child;
      } else if ( /*#__PURE__*/react.isValidElement(child)) {
        returnChildNode = /*#__PURE__*/react.cloneElement(child, this.getControlled(child.props));
      } else {
        (0,warning/* default */.ZP)(!child, '`children` of Field is not validate ReactElement.');
        returnChildNode = child;
      }
      return /*#__PURE__*/react.createElement(react.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);
  return Field;
}(react.Component);
(0,defineProperty/* default */.Z)(Field, "contextType", FieldContext);
(0,defineProperty/* default */.Z)(Field, "defaultProps", {
  trigger: 'onChange',
  valuePropName: 'value'
});
function WrapperField(_ref6) {
  var _restProps$isListFiel;
  var name = _ref6.name,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref6, _excluded);
  var fieldContext = react.useContext(FieldContext);
  var listContext = react.useContext(es_ListContext);
  var namePath = name !== undefined ? getNamePath(name) : undefined;
  var isMergedListField = (_restProps$isListFiel = restProps.isListField) !== null && _restProps$isListFiel !== void 0 ? _restProps$isListFiel : !!listContext;
  var key = 'keep';
  if (!isMergedListField) {
    key = "_".concat((namePath || []).join('_'));
  }

  // Warning if it's a directly list field.
  // We can still support multiple level field preserve.
  if (false) {}
  return /*#__PURE__*/react.createElement(Field, (0,esm_extends/* default */.Z)({
    key: key,
    name: namePath,
    isListField: isMergedListField
  }, restProps, {
    fieldContext: fieldContext
  }));
}
/* harmony default export */ var es_Field = (WrapperField);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/List.js








function List(_ref) {
  var name = _ref.name,
    initialValue = _ref.initialValue,
    children = _ref.children,
    rules = _ref.rules,
    validateTrigger = _ref.validateTrigger,
    isListField = _ref.isListField;
  var context = react.useContext(FieldContext);
  var wrapperListContext = react.useContext(es_ListContext);
  var keyRef = react.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current;
  var prefixName = react.useMemo(function () {
    var parentPrefixName = getNamePath(context.prefixName) || [];
    return [].concat((0,toConsumableArray/* default */.Z)(parentPrefixName), (0,toConsumableArray/* default */.Z)(getNamePath(name)));
  }, [context.prefixName, name]);
  var fieldContext = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, context), {}, {
      prefixName: prefixName
    });
  }, [context, prefixName]);

  // List context
  var listContext = react.useMemo(function () {
    return {
      getKey: function getKey(namePath) {
        var len = prefixName.length;
        var pathName = namePath[len];
        return [keyManager.keys[pathName], namePath.slice(len + 1)];
      }
    };
  }, [prefixName]);

  // User should not pass `children` as other type.
  if (typeof children !== 'function') {
    (0,warning/* default */.ZP)(false, 'Form.List only accepts function as children.');
    return null;
  }
  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;
    if (source === 'internal') {
      return false;
    }
    return prevValue !== nextValue;
  };
  return /*#__PURE__*/react.createElement(es_ListContext.Provider, {
    value: listContext
  }, /*#__PURE__*/react.createElement(FieldContext.Provider, {
    value: fieldContext
  }, /*#__PURE__*/react.createElement(es_Field, {
    name: [],
    shouldUpdate: shouldUpdate,
    rules: rules,
    validateTrigger: validateTrigger,
    initialValue: initialValue,
    isList: true,
    isListField: isListField !== null && isListField !== void 0 ? isListField : !!wrapperListContext
  }, function (_ref3, meta) {
    var _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? [] : _ref3$value,
      onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;
    var getNewValue = function getNewValue() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by `form` api.
     */
    var operations = {
      add: function add(defaultValue, index) {
        // Mapping keys
        var newValue = getNewValue();
        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [].concat((0,toConsumableArray/* default */.Z)(keyManager.keys.slice(0, index)), [keyManager.id], (0,toConsumableArray/* default */.Z)(keyManager.keys.slice(index)));
          onChange([].concat((0,toConsumableArray/* default */.Z)(newValue.slice(0, index)), [defaultValue], (0,toConsumableArray/* default */.Z)(newValue.slice(index))));
        } else {
          if (false) {}
          keyManager.keys = [].concat((0,toConsumableArray/* default */.Z)(keyManager.keys), [keyManager.id]);
          onChange([].concat((0,toConsumableArray/* default */.Z)(newValue), [defaultValue]));
        }
        keyManager.id += 1;
      },
      remove: function remove(index) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index) ? index : [index]);
        if (indexSet.size <= 0) {
          return;
        }
        keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
          return !indexSet.has(keysIndex);
        });

        // Trigger store change
        onChange(newValue.filter(function (_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move(from, to) {
        if (from === to) {
          return;
        }
        var newValue = getNewValue();

        // Do not handle out of range
        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }
        keyManager.keys = valueUtil_move(keyManager.keys, from, to);

        // Trigger store change
        onChange(valueUtil_move(newValue, from, to));
      }
    };
    var listValue = value || [];
    if (!Array.isArray(listValue)) {
      listValue = [];
      if (false) {}
    }
    return children(listValue.map(function (__, index) {
      var key = keyManager.keys[index];
      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }
      return {
        name: index,
        key: key,
        isListField: true
      };
    }), operations, meta);
  })));
}
/* harmony default export */ var es_List = (List);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/asyncUtil.js
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.catch(function (e) {
        hasError = true;
        return e;
      }).then(function (result) {
        count -= 1;
        results[index] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/NameMap.js






var SPLIT = '__@field_split__';

/**
 * Convert name path into string to fast the fetch speed of Map.
 */
function normalize(namePath) {
  return namePath.map(function (cell) {
    return "".concat((0,esm_typeof/* default */.Z)(cell), ":").concat(cell);
  })
  // Magic split
  .join(SPLIT);
}

/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */
var NameMap = /*#__PURE__*/function () {
  function NameMap() {
    (0,classCallCheck/* default */.Z)(this, NameMap);
    (0,defineProperty/* default */.Z)(this, "kvs", new Map());
  }
  (0,createClass/* default */.Z)(NameMap, [{
    key: "set",
    value: function set(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next = updater(origin);
      if (!next) {
        this.delete(key);
      } else {
        this.set(key, next);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    }

    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function map(callback) {
      return (0,toConsumableArray/* default */.Z)(this.kvs.entries()).map(function (_ref) {
        var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        var cells = key.split(SPLIT);
        return callback({
          key: cells.map(function (cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/),
              _cell$match2 = (0,slicedToArray/* default */.Z)(_cell$match, 3),
              type = _cell$match2[1],
              unit = _cell$match2[2];
            return type === 'number' ? Number(unit) : unit;
          }),
          value: value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function (_ref3) {
        var key = _ref3.key,
          value = _ref3.value;
        json[key.join('.')] = value;
        return null;
      });
      return json;
    }
  }]);
  return NameMap;
}();
/* harmony default export */ var utils_NameMap = (NameMap);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/useForm.js








var useForm_excluded = ["name"];








var FormStore = /*#__PURE__*/(0,createClass/* default */.Z)(function FormStore(forceRootUpdate) {
  var _this = this;
  (0,classCallCheck/* default */.Z)(this, FormStore);
  (0,defineProperty/* default */.Z)(this, "formHooked", false);
  (0,defineProperty/* default */.Z)(this, "forceRootUpdate", void 0);
  (0,defineProperty/* default */.Z)(this, "subscribable", true);
  (0,defineProperty/* default */.Z)(this, "store", {});
  (0,defineProperty/* default */.Z)(this, "fieldEntities", []);
  (0,defineProperty/* default */.Z)(this, "initialValues", {});
  (0,defineProperty/* default */.Z)(this, "callbacks", {});
  (0,defineProperty/* default */.Z)(this, "validateMessages", null);
  (0,defineProperty/* default */.Z)(this, "preserve", null);
  (0,defineProperty/* default */.Z)(this, "lastValidatePromise", null);
  (0,defineProperty/* default */.Z)(this, "getForm", function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldWarning: _this.getFieldWarning,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldValue: _this.setFieldValue,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      _init: true,
      getInternalHooks: _this.getInternalHooks
    };
  });
  // ======================== Internal Hooks ========================
  (0,defineProperty/* default */.Z)(this, "getInternalHooks", function (key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        destroyForm: _this.destroyForm,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
        getInitialValue: _this.getInitialValue,
        registerWatch: _this.registerWatch
      };
    }
    (0,warning/* default */.ZP)(false, '`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  });
  (0,defineProperty/* default */.Z)(this, "useSubscribe", function (subscribable) {
    _this.subscribable = subscribable;
  });
  /**
   * Record prev Form unmount fieldEntities which config preserve false.
   * This need to be refill with initialValues instead of store value.
   */
  (0,defineProperty/* default */.Z)(this, "prevWithoutPreserves", null);
  /**
   * First time `setInitialValues` should update store with initial value
   */
  (0,defineProperty/* default */.Z)(this, "setInitialValues", function (initialValues, init) {
    _this.initialValues = initialValues || {};
    if (init) {
      var _this$prevWithoutPres;
      var nextStore = (0,set/* merge */.T)(initialValues, _this.store);

      // We will take consider prev form unmount fields.
      // When the field is not `preserve`, we need fill this with initialValues instead of store.
      // eslint-disable-next-line array-callback-return
      (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 || _this$prevWithoutPres.map(function (_ref) {
        var namePath = _ref.key;
        nextStore = (0,set/* default */.Z)(nextStore, namePath, (0,get/* default */.Z)(initialValues, namePath));
      });
      _this.prevWithoutPreserves = null;
      _this.updateStore(nextStore);
    }
  });
  (0,defineProperty/* default */.Z)(this, "destroyForm", function (clearOnDestroy) {
    if (clearOnDestroy) {
      // destroy form reset store
      _this.updateStore({});
    } else {
      // Fill preserve fields
      var prevWithoutPreserves = new utils_NameMap();
      _this.getFieldEntities(true).forEach(function (entity) {
        if (!_this.isMergedPreserve(entity.isPreserve())) {
          prevWithoutPreserves.set(entity.getNamePath(), true);
        }
      });
      _this.prevWithoutPreserves = prevWithoutPreserves;
    }
  });
  (0,defineProperty/* default */.Z)(this, "getInitialValue", function (namePath) {
    var initValue = (0,get/* default */.Z)(_this.initialValues, namePath);

    // Not cloneDeep when without `namePath`
    return namePath.length ? (0,set/* merge */.T)(initValue) : initValue;
  });
  (0,defineProperty/* default */.Z)(this, "setCallbacks", function (callbacks) {
    _this.callbacks = callbacks;
  });
  (0,defineProperty/* default */.Z)(this, "setValidateMessages", function (validateMessages) {
    _this.validateMessages = validateMessages;
  });
  (0,defineProperty/* default */.Z)(this, "setPreserve", function (preserve) {
    _this.preserve = preserve;
  });
  // ============================= Watch ============================
  (0,defineProperty/* default */.Z)(this, "watchList", []);
  (0,defineProperty/* default */.Z)(this, "registerWatch", function (callback) {
    _this.watchList.push(callback);
    return function () {
      _this.watchList = _this.watchList.filter(function (fn) {
        return fn !== callback;
      });
    };
  });
  (0,defineProperty/* default */.Z)(this, "notifyWatch", function () {
    var namePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // No need to cost perf when nothing need to watch
    if (_this.watchList.length) {
      var values = _this.getFieldsValue();
      var allValues = _this.getFieldsValue(true);
      _this.watchList.forEach(function (callback) {
        callback(values, allValues, namePath);
      });
    }
  });
  // ========================== Dev Warning =========================
  (0,defineProperty/* default */.Z)(this, "timeoutId", null);
  (0,defineProperty/* default */.Z)(this, "warningUnhooked", function () {
    if (false) {}
  });
  // ============================ Store =============================
  (0,defineProperty/* default */.Z)(this, "updateStore", function (nextStore) {
    _this.store = nextStore;
  });
  // ============================ Fields ============================
  /**
   * Get registered field entities.
   * @param pure Only return field which has a `name`. Default: false
   */
  (0,defineProperty/* default */.Z)(this, "getFieldEntities", function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!pure) {
      return _this.fieldEntities;
    }
    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  });
  (0,defineProperty/* default */.Z)(this, "getFieldsMap", function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new utils_NameMap();
    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });
    return cache;
  });
  (0,defineProperty/* default */.Z)(this, "getFieldEntitiesForNamePathList", function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }
    var cache = _this.getFieldsMap(true);
    return nameList.map(function (name) {
      var namePath = getNamePath(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: getNamePath(name)
      };
    });
  });
  (0,defineProperty/* default */.Z)(this, "getFieldsValue", function (nameList, filterFunc) {
    _this.warningUnhooked();

    // Fill args
    var mergedNameList;
    var mergedFilterFunc;
    var mergedStrict;
    if (nameList === true || Array.isArray(nameList)) {
      mergedNameList = nameList;
      mergedFilterFunc = filterFunc;
    } else if (nameList && (0,esm_typeof/* default */.Z)(nameList) === 'object') {
      mergedStrict = nameList.strict;
      mergedFilterFunc = nameList.filter;
    }
    if (mergedNameList === true && !mergedFilterFunc) {
      return _this.store;
    }
    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(mergedNameList) ? mergedNameList : null);
    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var _isListField, _ref3;
      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();

      // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count
      if (mergedStrict) {
        var _isList, _ref2;
        if ((_isList = (_ref2 = entity).isList) !== null && _isList !== void 0 && _isList.call(_ref2)) {
          return;
        }
      } else if (!mergedNameList && (_isListField = (_ref3 = entity).isListField) !== null && _isListField !== void 0 && _isListField.call(_ref3)) {
        return;
      }
      if (!mergedFilterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;
        if (mergedFilterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  });
  (0,defineProperty/* default */.Z)(this, "getFieldValue", function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    return (0,get/* default */.Z)(_this.store, namePath);
  });
  (0,defineProperty/* default */.Z)(this, "getFieldsError", function (nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }
      return {
        name: getNamePath(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  });
  (0,defineProperty/* default */.Z)(this, "getFieldError", function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.errors;
  });
  (0,defineProperty/* default */.Z)(this, "getFieldWarning", function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.warnings;
  });
  (0,defineProperty/* default */.Z)(this, "isFieldsTouched", function () {
    _this.warningUnhooked();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var arg0 = args[0],
      arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;
    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }
    var fieldEntities = _this.getFieldEntities(true);
    var isFieldTouched = function isFieldTouched(field) {
      return field.isFieldTouched();
    };

    // ===== Will get fully compare when not config namePathList =====
    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(function (entity) {
        return isFieldTouched(entity) || entity.isList();
      }) : fieldEntities.some(isFieldTouched);
    }

    // Generate a nest tree for validate
    var map = new utils_NameMap();
    namePathList.forEach(function (shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function (field) {
      var fieldNamePath = field.getNamePath();

      // Find matched entity and put into list
      namePathList.forEach(function (shortNamePath) {
        if (shortNamePath.every(function (nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function (list) {
            return [].concat((0,toConsumableArray/* default */.Z)(list), [field]);
          });
        }
      });
    });

    // Check if NameMap value is touched
    var isNamePathListTouched = function isNamePathListTouched(entities) {
      return entities.some(isFieldTouched);
    };
    var namePathListEntities = map.map(function (_ref4) {
      var value = _ref4.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  });
  (0,defineProperty/* default */.Z)(this, "isFieldTouched", function (name) {
    _this.warningUnhooked();
    return _this.isFieldsTouched([name]);
  });
  (0,defineProperty/* default */.Z)(this, "isFieldsValidating", function (nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntities();
    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }
    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  });
  (0,defineProperty/* default */.Z)(this, "isFieldValidating", function (name) {
    _this.warningUnhooked();
    return _this.isFieldsValidating([name]);
  });
  /**
   * Reset Field with field `initialValue` prop.
   * Can pass `entities` or `namePathList` or just nothing.
   */
  (0,defineProperty/* default */.Z)(this, "resetWithFieldInitialValue", function () {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Create cache
    var cache = new utils_NameMap();
    var fieldEntities = _this.getFieldEntities(true);
    fieldEntities.forEach(function (field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath();

      // Record only if has `initialValue`
      if (initialValue !== undefined) {
        var records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    });

    // Reset
    var resetWithFields = function resetWithFields(entities) {
      entities.forEach(function (field) {
        var initialValue = field.props.initialValue;
        if (initialValue !== undefined) {
          var namePath = field.getNamePath();
          var formInitialValue = _this.getInitialValue(namePath);
          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            (0,warning/* default */.ZP)(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);
            if (records && records.size > 1) {
              // Warning if multiple field set `initialValue`and do not modify value
              (0,warning/* default */.ZP)(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath);
              var isListField = field.isListField();

              // Set `initialValue`
              if (!isListField && (!info.skipExist || originValue === undefined)) {
                _this.updateStore((0,set/* default */.Z)(_this.store, namePath, (0,toConsumableArray/* default */.Z)(records)[0].value));
              }
            }
          }
        }
      });
    };
    var requiredFieldEntities;
    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function (namePath) {
        var records = cache.get(namePath);
        if (records) {
          var _requiredFieldEntitie;
          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, (0,toConsumableArray/* default */.Z)((0,toConsumableArray/* default */.Z)(records).map(function (r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }
    resetWithFields(requiredFieldEntities);
  });
  (0,defineProperty/* default */.Z)(this, "resetFields", function (nameList) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (!nameList) {
      _this.updateStore((0,set/* merge */.T)(_this.initialValues));
      _this.resetWithFieldInitialValue();
      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });
      _this.notifyWatch();
      return;
    }

    // Reset by `nameList`
    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);
      _this.updateStore((0,set/* default */.Z)(_this.store, namePath, initialValue));
    });
    _this.resetWithFieldInitialValue({
      namePathList: namePathList
    });
    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });
    _this.notifyWatch(namePathList);
  });
  (0,defineProperty/* default */.Z)(this, "setFields", function (fields) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    var namePathList = [];
    fields.forEach(function (fieldData) {
      var name = fieldData.name,
        data = (0,objectWithoutProperties/* default */.Z)(fieldData, useForm_excluded);
      var namePath = getNamePath(name);
      namePathList.push(namePath);

      // Value
      if ('value' in data) {
        _this.updateStore((0,set/* default */.Z)(_this.store, namePath, data.value));
      }
      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });
    _this.notifyWatch(namePathList);
  });
  (0,defineProperty/* default */.Z)(this, "getFields", function () {
    var entities = _this.getFieldEntities(true);
    var fields = entities.map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();
      var fieldData = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });
      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  });
  // =========================== Observer ===========================
  /**
   * This only trigger when a field is on constructor to avoid we get initialValue too late
   */
  (0,defineProperty/* default */.Z)(this, "initEntityValue", function (entity) {
    var initialValue = entity.props.initialValue;
    if (initialValue !== undefined) {
      var namePath = entity.getNamePath();
      var prevValue = (0,get/* default */.Z)(_this.store, namePath);
      if (prevValue === undefined) {
        _this.updateStore((0,set/* default */.Z)(_this.store, namePath, initialValue));
      }
    }
  });
  (0,defineProperty/* default */.Z)(this, "isMergedPreserve", function (fieldPreserve) {
    var mergedPreserve = fieldPreserve !== undefined ? fieldPreserve : _this.preserve;
    return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
  });
  (0,defineProperty/* default */.Z)(this, "registerField", function (entity) {
    _this.fieldEntities.push(entity);
    var namePath = entity.getNamePath();
    _this.notifyWatch([namePath]);

    // Set initial values
    if (entity.props.initialValue !== undefined) {
      var prevStore = _this.store;
      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });
      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    }

    // un-register field callback
    return function (isListField, preserve) {
      var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      });

      // Clean up store value if not preserve
      if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
        var defaultValue = isListField ? undefined : _this.getInitialValue(namePath);
        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
          return (
            // Only reset when no namePath exist
            !matchNamePath(field.getNamePath(), namePath)
          );
        })) {
          var _prevStore = _this.store;
          _this.updateStore((0,set/* default */.Z)(_prevStore, namePath, defaultValue, true));

          // Notify that field is unmount
          _this.notifyObservers(_prevStore, [namePath], {
            type: 'remove'
          });

          // Dependencies update
          _this.triggerDependenciesUpdate(_prevStore, namePath);
        }
      }
      _this.notifyWatch([namePath]);
    };
  });
  (0,defineProperty/* default */.Z)(this, "dispatch", function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
            value = action.value;
          _this.updateValue(namePath, value);
          break;
        }
      case 'validateField':
        {
          var _namePath = action.namePath,
            triggerName = action.triggerName;
          _this.validateFields([_namePath], {
            triggerName: triggerName
          });
          break;
        }
      default:
      // Currently we don't have other action. Do nothing.
    }
  });
  (0,defineProperty/* default */.Z)(this, "notifyObservers", function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, info), {}, {
        store: _this.getFieldsValue(true)
      });
      _this.getFieldEntities().forEach(function (_ref5) {
        var onStoreChange = _ref5.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  });
  /**
   * Notify dependencies children with parent update
   * We need delay to trigger validate in case Field is under render props
   */
  (0,defineProperty/* default */.Z)(this, "triggerDependenciesUpdate", function (prevStore, namePath) {
    var childrenFields = _this.getDependencyChildrenFields(namePath);
    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }
    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat((0,toConsumableArray/* default */.Z)(childrenFields))
    });
    return childrenFields;
  });
  (0,defineProperty/* default */.Z)(this, "updateValue", function (name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;
    _this.updateStore((0,set/* default */.Z)(_this.store, namePath, value));
    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    });
    _this.notifyWatch([namePath]);

    // Dependencies update
    var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);

    // trigger callback function
    var onValuesChange = _this.callbacks.onValuesChange;
    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }
    _this.triggerOnFieldsChange([namePath].concat((0,toConsumableArray/* default */.Z)(childrenFields)));
  });
  // Let all child Field get update.
  (0,defineProperty/* default */.Z)(this, "setFieldsValue", function (store) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (store) {
      var nextStore = (0,set/* merge */.T)(_this.store, store);
      _this.updateStore(nextStore);
    }
    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });
    _this.notifyWatch();
  });
  (0,defineProperty/* default */.Z)(this, "setFieldValue", function (name, value) {
    _this.setFields([{
      name: name,
      value: value,
      errors: [],
      warnings: []
    }]);
  });
  (0,defineProperty/* default */.Z)(this, "getDependencyChildrenFields", function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new utils_NameMap();

    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */
    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
          fields.add(field);
          return fields;
        });
      });
    });
    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();
          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };
    fillChildren(rootNamePath);
    return childrenFields;
  });
  (0,defineProperty/* default */.Z)(this, "triggerOnFieldsChange", function (namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;
    if (onFieldsChange) {
      var fields = _this.getFields();

      /**
       * Fill errors since `fields` may be replaced by controlled fields
       */
      if (filedErrors) {
        var cache = new utils_NameMap();
        filedErrors.forEach(function (_ref6) {
          var name = _ref6.name,
            errors = _ref6.errors;
          cache.set(name, errors);
        });
        fields.forEach(function (field) {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }
      var changedFields = fields.filter(function (_ref7) {
        var fieldName = _ref7.name;
        return containsNamePath(namePathList, fieldName);
      });
      if (changedFields.length) {
        onFieldsChange(changedFields, fields);
      }
    }
  });
  // =========================== Validate ===========================
  (0,defineProperty/* default */.Z)(this, "validateFields", function (arg1, arg2) {
    _this.warningUnhooked();
    var nameList;
    var options;
    if (Array.isArray(arg1) || typeof arg1 === 'string' || typeof arg2 === 'string') {
      nameList = arg1;
      options = arg2;
    } else {
      options = arg1;
    }
    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : [];

    // Collect result in promise list
    var promiseList = [];

    // We temp save the path which need trigger for `onFieldsChange`
    var TMP_SPLIT = String(Date.now());
    var validateNamePathList = new Set();
    var _ref8 = options || {},
      recursive = _ref8.recursive,
      dirty = _ref8.dirty;
    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide `nameList`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }

      // Skip if without rule
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      // Skip if only validate dirty field
      if (dirty && !field.isFieldDirty()) {
        return;
      }
      var fieldNamePath = field.getNamePath();
      validateNamePathList.add(fieldNamePath.join(TMP_SPLIT));

      // Add field validate rule in to promise list
      if (!provideNameList || containsNamePath(namePathList, fieldNamePath, recursive)) {
        var promise = field.validateRules((0,objectSpread2/* default */.Z)({
          validateMessages: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultValidateMessages), _this.validateMessages)
        }, options));

        // Wrap promise with field
        promiseList.push(promise.then(function () {
          return {
            name: fieldNamePath,
            errors: [],
            warnings: []
          };
        }).catch(function (ruleErrors) {
          var _ruleErrors$forEach;
          var mergedErrors = [];
          var mergedWarnings = [];
          (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function (_ref9) {
            var warningOnly = _ref9.rule.warningOnly,
              errors = _ref9.errors;
            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, (0,toConsumableArray/* default */.Z)(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, (0,toConsumableArray/* default */.Z)(errors));
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });
    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise;

    // Notify fields with rule that validate has finished and need update
    summaryPromise.catch(function (results) {
      return results;
    }).then(function (results) {
      var resultNamePathList = results.map(function (_ref10) {
        var name = _ref10.name;
        return name;
      });
      _this.notifyObservers(_this.store, resultNamePathList, {
        type: 'validateFinish'
      });
      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function () {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }
      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    });

    // Do not throw in console
    returnPromise.catch(function (e) {
      return e;
    });

    // `validating` changed. Trigger `onFieldsChange`
    var triggerNamePathList = namePathList.filter(function (namePath) {
      return validateNamePathList.has(namePath.join(TMP_SPLIT));
    });
    _this.triggerOnFieldsChange(triggerNamePathList);
    return returnPromise;
  });
  // ============================ Submit ============================
  (0,defineProperty/* default */.Z)(this, "submit", function () {
    _this.warningUnhooked();
    _this.validateFields().then(function (values) {
      var onFinish = _this.callbacks.onFinish;
      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user `onFinish` callback failed
          console.error(err);
        }
      }
    }).catch(function (e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;
      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  });
  this.forceRootUpdate = forceRootUpdate;
});
function useForm(form) {
  var formRef = react.useRef();
  var _React$useState = react.useState({}),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    forceUpdate = _React$useState2[1];
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };
      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
/* harmony default export */ var es_useForm = (useForm);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/FormContext.js



var FormContext = /*#__PURE__*/react.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});
var FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
    onFormChange = _ref.onFormChange,
    onFormFinish = _ref.onFormFinish,
    children = _ref.children;
  var formContext = react.useContext(FormContext);
  var formsRef = react.useRef({});
  return /*#__PURE__*/react.createElement(FormContext.Provider, {
    value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext), {}, {
      validateMessages: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields: changedFields,
            forms: formsRef.current
          });
        }
        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values: values,
            forms: formsRef.current
          });
        }
        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm(name, form) {
        if (name) {
          formsRef.current = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formsRef.current), {}, (0,defineProperty/* default */.Z)({}, name, form));
        }
        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm(name) {
        var newForms = (0,objectSpread2/* default */.Z)({}, formsRef.current);
        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};

/* harmony default export */ var es_FormContext = (FormContext);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/Form.js




var Form_excluded = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"];






var Form = function Form(_ref, ref) {
  var name = _ref.name,
    initialValues = _ref.initialValues,
    fields = _ref.fields,
    form = _ref.form,
    preserve = _ref.preserve,
    children = _ref.children,
    _ref$component = _ref.component,
    Component = _ref$component === void 0 ? 'form' : _ref$component,
    validateMessages = _ref.validateMessages,
    _ref$validateTrigger = _ref.validateTrigger,
    validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
    onValuesChange = _ref.onValuesChange,
    _onFieldsChange = _ref.onFieldsChange,
    _onFinish = _ref.onFinish,
    onFinishFailed = _ref.onFinishFailed,
    clearOnDestroy = _ref.clearOnDestroy,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, Form_excluded);
  var nativeElementRef = react.useRef(null);
  var formContext = react.useContext(es_FormContext);

  // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider
  var _useForm = es_useForm(form),
    _useForm2 = (0,slicedToArray/* default */.Z)(_useForm, 1),
    formInstance = _useForm2[0];
  var _getInternalHooks = formInstance.getInternalHooks(HOOK_MARK),
    useSubscribe = _getInternalHooks.useSubscribe,
    setInitialValues = _getInternalHooks.setInitialValues,
    setCallbacks = _getInternalHooks.setCallbacks,
    setValidateMessages = _getInternalHooks.setValidateMessages,
    setPreserve = _getInternalHooks.setPreserve,
    destroyForm = _getInternalHooks.destroyForm;

  // Pass ref with form instance
  react.useImperativeHandle(ref, function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formInstance), {}, {
      nativeElement: nativeElementRef.current
    });
  });

  // Register form into Context
  react.useEffect(function () {
    formContext.registerForm(name, formInstance);
    return function () {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]);

  // Pass props to store
  setValidateMessages((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);
      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }
        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);
      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed
  });
  setPreserve(preserve);

  // Set initial value, init store value when first mount
  var mountRef = react.useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }
  react.useEffect(function () {
    return function () {
      return destroyForm(clearOnDestroy);
    };
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  // Prepare children by `children` type
  var childrenNode;
  var childrenRenderProps = typeof children === 'function';
  if (childrenRenderProps) {
    var _values = formInstance.getFieldsValue(true);
    childrenNode = children(_values, formInstance);
  } else {
    childrenNode = children;
  }

  // Not use subscribe when using render props
  useSubscribe(!childrenRenderProps);

  // Listen if fields provided. We use ref to save prev data here to avoid additional render
  var prevFieldsRef = react.useRef();
  react.useEffect(function () {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }
    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formInstance), {}, {
      validateTrigger: validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = /*#__PURE__*/react.createElement(es_ListContext.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(FieldContext.Provider, {
    value: formContextValue
  }, childrenNode));
  if (Component === false) {
    return wrapperNode;
  }
  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, restProps, {
    ref: nativeElementRef,
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;
      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 || _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};
/* harmony default export */ var es_Form = (Form);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/useWatch.js






function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return Math.random();
  }
}
var useWatchWarning =  false ? 0 : function () {};

// ------- selector type -------

// ------- selector type end -------

function useWatch() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var dependencies = args[0],
    _args$ = args[1],
    _form = _args$ === void 0 ? {} : _args$;
  var options = isFormInstance(_form) ? {
    form: _form
  } : _form;
  var form = options.form;
  var _useState = (0,react.useState)(),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var valueStr = (0,react.useMemo)(function () {
    return stringify(value);
  }, [value]);
  var valueStrRef = (0,react.useRef)(valueStr);
  valueStrRef.current = valueStr;
  var fieldContext = (0,react.useContext)(FieldContext);
  var formInstance = form || fieldContext;
  var isValidForm = formInstance && formInstance._init;

  // Warning if not exist form instance
  if (false) {}
  var namePath = getNamePath(dependencies);
  var namePathRef = (0,react.useRef)(namePath);
  namePathRef.current = namePath;
  useWatchWarning(namePath);
  (0,react.useEffect)(function () {
    // Skip if not exist form instance
    if (!isValidForm) {
      return;
    }
    var getFieldsValue = formInstance.getFieldsValue,
      getInternalHooks = formInstance.getInternalHooks;
    var _getInternalHooks = getInternalHooks(HOOK_MARK),
      registerWatch = _getInternalHooks.registerWatch;
    var getWatchValue = function getWatchValue(values, allValues) {
      var watchValue = options.preserve ? allValues : values;
      return typeof dependencies === 'function' ? dependencies(watchValue) : (0,get/* default */.Z)(watchValue, namePathRef.current);
    };
    var cancelRegister = registerWatch(function (values, allValues) {
      var newValue = getWatchValue(values, allValues);
      var nextValueStr = stringify(newValue);

      // Compare stringify in case it's nest object
      if (valueStrRef.current !== nextValueStr) {
        valueStrRef.current = nextValueStr;
        setValue(newValue);
      }
    });

    // TODO: We can improve this perf in future
    var initialValue = getWatchValue(getFieldsValue(), getFieldsValue(true));

    // React 18 has the bug that will queue update twice even the value is not changed
    // ref: https://github.com/facebook/react/issues/27213
    if (value !== initialValue) {
      setValue(initialValue);
    }
    return cancelRegister;
  },
  // We do not need re-register since namePath content is the same
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isValidForm]);
  return value;
}
/* harmony default export */ var es_useWatch = (useWatch);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/index.js









var InternalForm = /*#__PURE__*/react.forwardRef(es_Form);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = es_Field;
RefForm.List = es_List;
RefForm.useForm = es_useForm;
RefForm.useWatch = es_useWatch;

/* harmony default export */ var rc_field_form_es = ((/* unused pure expression or super */ null && (RefForm)));
;// CONCATENATED MODULE: ./node_modules/antd/es/form/context.js
"use client";




const context_FormContext = /*#__PURE__*/react.createContext({
  labelAlign: 'right',
  vertical: false,
  itemRef: () => {}
});
const NoStyleItemContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext(null)));
const context_FormProvider = props => {
  const providerProps = omit(props, ['prefixCls']);
  return /*#__PURE__*/React.createElement(RcFormProvider, Object.assign({}, providerProps));
};
const FormItemPrefixContext = /*#__PURE__*/react.createContext({
  prefixCls: ''
});
const FormItemInputContext = /*#__PURE__*/react.createContext({});
if (false) {}
const NoFormStyle = ({
  children,
  status,
  override
}) => {
  const formItemInputContext = react.useContext(FormItemInputContext);
  const newFormItemInputContext = react.useMemo(() => {
    const newContext = Object.assign({}, formItemInputContext);
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return /*#__PURE__*/react.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};
const VariantContext = /*#__PURE__*/react.createContext(undefined);

/***/ }),

/***/ 75302:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68821);
"use client";




// Do not export params
function useBreakpoint() {
  return (0,_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
}

/* harmony default export */ __webpack_exports__.ZP = ({
  useBreakpoint
});

/***/ }),

/***/ 10110:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76745);
/* harmony import */ var _en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3115);



const useLocale = (componentName, defaultLocale) => {
  const fullLocale = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  const getLocale = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    var _a;
    const locale = defaultLocale || _en_US__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[componentName];
    const localeFromContext = (_a = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, fullLocale]);
  const getLocaleCode = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
      return _en_US__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.locale;
    }
    return localeCode;
  }, [fullLocale]);
  return [getLocale, getLocaleCode];
};
/* harmony default export */ __webpack_exports__.Z = (useLocale);

/***/ }),

/***/ 53107:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ modal; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 9 modules
var config_provider = __webpack_require__(83760);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/UnstableContext.js + 1 modules
var UnstableContext = __webpack_require__(69711);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(89739);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(4340);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(21640);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js + 1 modules
var InfoCircleFilled = __webpack_require__(78860);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useZIndex.js
var useZIndex = __webpack_require__(87263);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/useLocale.js
var useLocale = __webpack_require__(10110);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/useToken.js + 2 modules
var useToken = __webpack_require__(25976);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useState.js
var useState = __webpack_require__(30470);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 25 modules
var es_button = __webpack_require__(77683);
// EXTERNAL MODULE: ./node_modules/antd/es/button/buttonHelpers.js
var buttonHelpers = __webpack_require__(33671);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/ActionButton.js
"use client";





function isThenable(thing) {
  return !!(thing === null || thing === void 0 ? void 0 : thing.then);
}
const ActionButton = props => {
  const {
    type,
    children,
    prefixCls,
    buttonProps,
    close,
    autoFocus,
    emitEvent,
    isSilent,
    quitOnNullishReturnValue,
    actionFn
  } = props;
  const clickedRef = react.useRef(false);
  const buttonRef = react.useRef(null);
  const [loading, setLoading] = (0,useState/* default */.Z)(false);
  const onInternalClose = (...args) => {
    close === null || close === void 0 ? void 0 : close.apply(void 0, args);
  };
  react.useEffect(() => {
    let timeoutId = null;
    if (autoFocus) {
      timeoutId = setTimeout(() => {
        var _a;
        (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus({
          preventScroll: true
        });
      });
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  const handlePromiseOnOk = returnValueOfOnOk => {
    if (!isThenable(returnValueOfOnOk)) {
      return;
    }
    setLoading(true);
    returnValueOfOnOk.then((...args) => {
      setLoading(false, true);
      onInternalClose.apply(void 0, args);
      clickedRef.current = false;
    }, e => {
      // See: https://github.com/ant-design/ant-design/issues/6183
      setLoading(false, true);
      clickedRef.current = false;
      // Do not throw if is `await` mode
      if (isSilent === null || isSilent === void 0 ? void 0 : isSilent()) {
        return;
      }
      return Promise.reject(e);
    });
  };
  const onClick = e => {
    if (clickedRef.current) {
      return;
    }
    clickedRef.current = true;
    if (!actionFn) {
      onInternalClose();
      return;
    }
    let returnValueOfOnOk;
    if (emitEvent) {
      returnValueOfOnOk = actionFn(e);
      if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close);
      // https://github.com/ant-design/ant-design/issues/23358
      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();
      if (!isThenable(returnValueOfOnOk)) {
        onInternalClose();
        return;
      }
    }
    handlePromiseOnOk(returnValueOfOnOk);
  };
  return /*#__PURE__*/react.createElement(es_button/* default */.ZP, Object.assign({}, (0,buttonHelpers/* convertLegacyProps */.nx)(type), {
    onClick: onClick,
    loading: loading,
    prefixCls: prefixCls
  }, buttonProps, {
    ref: buttonRef
  }), children);
};
/* harmony default export */ var _util_ActionButton = (ActionButton);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/context.js

const ModalContext = /*#__PURE__*/react.createContext({});
const {
  Provider: ModalContextProvider
} = ModalContext;
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/components/ConfirmCancelBtn.js
"use client";




const ConfirmCancelBtn = () => {
  const {
    autoFocusButton,
    cancelButtonProps,
    cancelTextLocale,
    isSilent,
    mergedOkCancel,
    rootPrefixCls,
    close,
    onCancel,
    onConfirm
  } = (0,react.useContext)(ModalContext);
  return mergedOkCancel ? (/*#__PURE__*/react.createElement(_util_ActionButton, {
    isSilent: isSilent,
    actionFn: onCancel,
    close: (...args) => {
      close === null || close === void 0 ? void 0 : close.apply(void 0, args);
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
    },
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, cancelTextLocale)) : null;
};
/* harmony default export */ var components_ConfirmCancelBtn = (ConfirmCancelBtn);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/components/ConfirmOkBtn.js
"use client";




const ConfirmOkBtn = () => {
  const {
    autoFocusButton,
    close,
    isSilent,
    okButtonProps,
    rootPrefixCls,
    okTextLocale,
    okType,
    onConfirm,
    onOk
  } = (0,react.useContext)(ModalContext);
  return /*#__PURE__*/react.createElement(_util_ActionButton, {
    isSilent: isSilent,
    type: okType || 'primary',
    actionFn: onOk,
    close: (...args) => {
      close === null || close === void 0 ? void 0 : close.apply(void 0, args);
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(true);
    },
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, okTextLocale);
};
/* harmony default export */ var components_ConfirmOkBtn = (ConfirmOkBtn);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(97937);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@rc-component/portal/es/index.js + 7 modules
var es = __webpack_require__(54535);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/context.js

var RefContext = /*#__PURE__*/react.createContext({});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/contains.js
var contains = __webpack_require__(94999);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useId.js
var useId = __webpack_require__(7028);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
// EXTERNAL MODULE: ./node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(64217);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/util.js
// =============================== Motion ===============================
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;
  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }
  return motionName;
}

// =============================== Offset ===============================
function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 13 modules
var rc_motion_es = __webpack_require__(29372);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/MemoChildren.js

/* harmony default export */ var MemoChildren = (/*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (_, _ref2) {
  var shouldUpdate = _ref2.shouldUpdate;
  return !shouldUpdate;
}));
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/Panel.js









var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
var entityStyle = {
  outline: 'none'
};
var Panel = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    title = props.title,
    ariaId = props.ariaId,
    footer = props.footer,
    closable = props.closable,
    closeIcon = props.closeIcon,
    onClose = props.onClose,
    children = props.children,
    bodyStyle = props.bodyStyle,
    bodyProps = props.bodyProps,
    modalRender = props.modalRender,
    onMouseDown = props.onMouseDown,
    onMouseUp = props.onMouseUp,
    holderRef = props.holderRef,
    visible = props.visible,
    forceRender = props.forceRender,
    width = props.width,
    height = props.height,
    modalClassNames = props.classNames,
    modalStyles = props.styles;

  // ================================= Refs =================================
  var _React$useContext = react.useContext(RefContext),
    panelRef = _React$useContext.panel;
  var mergedRef = (0,es_ref/* useComposeRef */.x1)(holderRef, panelRef);
  var sentinelStartRef = (0,react.useRef)();
  var sentinelEndRef = (0,react.useRef)();
  react.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;
        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 || _sentinelStartRef$cur.focus({
          preventScroll: true
        });
      },
      changeActive: function changeActive(next) {
        var _document = document,
          activeElement = _document.activeElement;
        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus({
            preventScroll: true
          });
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus({
            preventScroll: true
          });
        }
      }
    };
  });

  // ================================ Style =================================
  var contentStyle = {};
  if (width !== undefined) {
    contentStyle.width = width;
  }
  if (height !== undefined) {
    contentStyle.height = height;
  }
  // ================================ Render ================================
  var footerNode = footer ? /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-footer"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.footer),
    style: (0,objectSpread2/* default */.Z)({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.footer)
  }, footer) : null;
  var headerNode = title ? /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-header"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.header),
    style: (0,objectSpread2/* default */.Z)({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.header)
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-title"),
    id: ariaId
  }, title)) : null;
  var closableObj = (0,react.useMemo)(function () {
    if ((0,esm_typeof/* default */.Z)(closable) === 'object' && closable !== null) {
      return closable;
    }
    if (closable) {
      return {
        closeIcon: closeIcon !== null && closeIcon !== void 0 ? closeIcon : /*#__PURE__*/react.createElement("span", {
          className: "".concat(prefixCls, "-close-x")
        })
      };
    }
    return {};
  }, [closable, closeIcon, prefixCls]);
  var ariaProps = (0,pickAttrs/* default */.Z)(closableObj, true);
  var closeBtnIsDisabled = (0,esm_typeof/* default */.Z)(closable) === 'object' && closable.disabled;
  var closerNode = closable ? /*#__PURE__*/react.createElement("button", (0,esm_extends/* default */.Z)({
    type: "button",
    onClick: onClose,
    "aria-label": "Close"
  }, ariaProps, {
    className: "".concat(prefixCls, "-close"),
    disabled: closeBtnIsDisabled
  }), closableObj.closeIcon) : null;
  var content = /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.content),
    style: modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.content
  }, closerNode, headerNode, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-body"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.body),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, bodyStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.body)
  }, bodyProps), children), footerNode);
  return /*#__PURE__*/react.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: mergedRef,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), contentStyle),
    className: classnames_default()(prefixCls, className),
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp
  }, /*#__PURE__*/react.createElement("div", {
    ref: sentinelStartRef,
    tabIndex: 0,
    style: entityStyle
  }, /*#__PURE__*/react.createElement(MemoChildren, {
    shouldUpdate: visible || forceRender
  }, modalRender ? modalRender(content) : content)), /*#__PURE__*/react.createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle
  }));
});
if (false) {}
/* harmony default export */ var Content_Panel = (Panel);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/index.js









var Content = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    title = props.title,
    style = props.style,
    className = props.className,
    visible = props.visible,
    forceRender = props.forceRender,
    destroyOnClose = props.destroyOnClose,
    motionName = props.motionName,
    ariaId = props.ariaId,
    onVisibleChanged = props.onVisibleChanged,
    mousePosition = props.mousePosition;
  var dialogRef = (0,react.useRef)();

  // ============================= Style ==============================
  var _React$useState = react.useState(),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    transformOrigin = _React$useState2[0],
    setTransformOrigin = _React$useState2[1];
  var contentStyle = {};
  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }
  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(mousePosition && (mousePosition.x || mousePosition.y) ? "".concat(mousePosition.x - elementOffset.left, "px ").concat(mousePosition.y - elementOffset.top, "px") : '');
  }

  // ============================= Render =============================
  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, {
    visible: visible,
    onVisibleChanged: onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender: forceRender,
    motionName: motionName,
    removeOnLeave: destroyOnClose,
    ref: dialogRef
  }, function (_ref, motionRef) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement(Content_Panel, (0,esm_extends/* default */.Z)({}, props, {
      ref: ref,
      title: title,
      ariaId: ariaId,
      prefixCls: prefixCls,
      holderRef: motionRef,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style), contentStyle),
      className: classnames_default()(className, motionClassName)
    }));
  });
});
Content.displayName = 'Content';
/* harmony default export */ var Dialog_Content = (Content);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Mask.js





var Mask = function Mask(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    visible = props.visible,
    maskProps = props.maskProps,
    motionName = props.motionName,
    className = props.className;
  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, {
    key: "mask",
    visible: visible,
    motionName: motionName,
    leavedClassName: "".concat(prefixCls, "-mask-hidden")
  }, function (_ref, ref) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      ref: ref,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style),
      className: classnames_default()("".concat(prefixCls, "-mask"), motionClassName, className)
    }, maskProps));
  });
};
/* harmony default export */ var Dialog_Mask = (Mask);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/index.js














var Dialog = function Dialog(props) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-dialog' : _props$prefixCls,
    zIndex = props.zIndex,
    _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    _props$keyboard = props.keyboard,
    keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
    _props$focusTriggerAf = props.focusTriggerAfterClose,
    focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
    wrapStyle = props.wrapStyle,
    wrapClassName = props.wrapClassName,
    wrapProps = props.wrapProps,
    onClose = props.onClose,
    afterOpenChange = props.afterOpenChange,
    afterClose = props.afterClose,
    transitionName = props.transitionName,
    animation = props.animation,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? true : _props$closable,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    maskTransitionName = props.maskTransitionName,
    maskAnimation = props.maskAnimation,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    maskStyle = props.maskStyle,
    maskProps = props.maskProps,
    rootClassName = props.rootClassName,
    modalClassNames = props.classNames,
    modalStyles = props.styles;
  if (false) {}
  var lastOutSideActiveElementRef = (0,react.useRef)();
  var wrapperRef = (0,react.useRef)();
  var contentRef = (0,react.useRef)();
  var _React$useState = react.useState(visible),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    animatedVisible = _React$useState2[0],
    setAnimatedVisible = _React$useState2[1];

  // ========================== Init ==========================
  var ariaId = (0,useId/* default */.Z)();
  function saveLastOutSideActiveElementRef() {
    if (!(0,contains/* default */.Z)(wrapperRef.current, document.activeElement)) {
      lastOutSideActiveElementRef.current = document.activeElement;
    }
  }
  function focusDialogContent() {
    if (!(0,contains/* default */.Z)(wrapperRef.current, document.activeElement)) {
      var _contentRef$current;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
    }
  }

  // ========================= Events =========================
  function onDialogVisibleChanged(newVisible) {
    // Try to focus
    if (newVisible) {
      focusDialogContent();
    } else {
      // Clean up scroll bar & focus back
      setAnimatedVisible(false);
      if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: true
          });
        } catch (e) {
          // Do nothing
        }
        lastOutSideActiveElementRef.current = null;
      }

      // Trigger afterClose only when change visible from true to false
      if (animatedVisible) {
        afterClose === null || afterClose === void 0 || afterClose();
      }
    }
    afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(newVisible);
  }
  function onInternalClose(e) {
    onClose === null || onClose === void 0 || onClose(e);
  }

  // >>> Content
  var contentClickRef = (0,react.useRef)(false);
  var contentTimeoutRef = (0,react.useRef)();

  // We need record content click incase content popup out of dialog
  var onContentMouseDown = function onContentMouseDown() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
  };
  var onContentMouseUp = function onContentMouseUp() {
    contentTimeoutRef.current = setTimeout(function () {
      contentClickRef.current = false;
    });
  };

  // >>> Wrapper
  // Close only when element not on dialog
  var onWrapperClick = null;
  if (maskClosable) {
    onWrapperClick = function onWrapperClick(e) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (wrapperRef.current === e.target) {
        onInternalClose(e);
      }
    };
  }
  function onWrapperKeyDown(e) {
    if (keyboard && e.keyCode === KeyCode/* default */.Z.ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    }

    // keep focus inside dialog
    if (visible && e.keyCode === KeyCode/* default */.Z.TAB) {
      contentRef.current.changeActive(!e.shiftKey);
    }
  }

  // ========================= Effect =========================
  (0,react.useEffect)(function () {
    if (visible) {
      setAnimatedVisible(true);
      saveLastOutSideActiveElementRef();
    }
  }, [visible]);

  // Remove direct should also check the scroll bar update
  (0,react.useEffect)(function () {
    return function () {
      clearTimeout(contentTimeoutRef.current);
    };
  }, []);
  var mergedStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    zIndex: zIndex
  }, wrapStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.wrapper), {}, {
    display: !animatedVisible ? 'none' : null
  });

  // ========================= Render =========================
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-root"), rootClassName)
  }, (0,pickAttrs/* default */.Z)(props, {
    data: true
  })), /*#__PURE__*/react.createElement(Dialog_Mask, {
    prefixCls: prefixCls,
    visible: mask && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      zIndex: zIndex
    }, maskStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.mask),
    maskProps: maskProps,
    className: modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.mask
  }), /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    tabIndex: -1,
    onKeyDown: onWrapperKeyDown,
    className: classnames_default()("".concat(prefixCls, "-wrap"), wrapClassName, modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.wrapper),
    ref: wrapperRef,
    onClick: onWrapperClick,
    style: mergedStyle
  }, wrapProps), /*#__PURE__*/react.createElement(Dialog_Content, (0,esm_extends/* default */.Z)({}, props, {
    onMouseDown: onContentMouseDown,
    onMouseUp: onContentMouseUp,
    ref: contentRef,
    closable: closable,
    ariaId: ariaId,
    prefixCls: prefixCls,
    visible: visible && animatedVisible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
};
/* harmony default export */ var es_Dialog = (Dialog);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/DialogWrap.js






// fix issue #10656
/*
 * getContainer remarks
 * Custom container should not be return, because in the Portal component, it will remove the
 * return container element here, if the custom container is the only child of it's component,
 * like issue #10656, It will has a conflict with removeChild method in react-dom.
 * So here should add a child (div element) to custom container.
 * */

var DialogWrap = function DialogWrap(props) {
  var visible = props.visible,
    getContainer = props.getContainer,
    forceRender = props.forceRender,
    _props$destroyOnClose = props.destroyOnClose,
    destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
    _afterClose = props.afterClose,
    panelRef = props.panelRef;
  var _React$useState = react.useState(visible),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    animatedVisible = _React$useState2[0],
    setAnimatedVisible = _React$useState2[1];
  var refContext = react.useMemo(function () {
    return {
      panel: panelRef
    };
  }, [panelRef]);
  react.useEffect(function () {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);

  // Destroy on close will remove wrapped div
  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }
  return /*#__PURE__*/react.createElement(RefContext.Provider, {
    value: refContext
  }, /*#__PURE__*/react.createElement(es/* default */.Z, {
    open: visible || forceRender || animatedVisible,
    autoDestroy: false,
    getContainer: getContainer,
    autoLock: visible || animatedVisible
  }, /*#__PURE__*/react.createElement(es_Dialog, (0,esm_extends/* default */.Z)({}, props, {
    destroyOnClose: destroyOnClose,
    afterClose: function afterClose() {
      _afterClose === null || _afterClose === void 0 || _afterClose();
      setAnimatedVisible(false);
    }
  }))));
};
DialogWrap.displayName = 'Dialog';
/* harmony default export */ var es_DialogWrap = (DialogWrap);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/index.js



/* harmony default export */ var rc_dialog_es = (es_DialogWrap);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/ContextIsolator.js
var ContextIsolator = __webpack_require__(89942);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useClosable.js + 1 modules
var useClosable = __webpack_require__(2072);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(98924);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/styleChecker.js


const canUseDocElement = () => (0,canUseDom/* default */.Z)() && window.document.documentElement;

// EXTERNAL MODULE: ./node_modules/antd/es/_util/zindexContext.js
var zindexContext = __webpack_require__(43945);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(35792);
// EXTERNAL MODULE: ./node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(48054);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
;// CONCATENATED MODULE: ./node_modules/antd/es/watermark/context.js


function voidFunc() {}
const WatermarkContext = /*#__PURE__*/react.createContext({
  add: voidFunc,
  remove: voidFunc
});
function usePanelRef(panelSelector) {
  const watermark = react.useContext(WatermarkContext);
  const panelEleRef = react.useRef(null);
  const panelRef = (0,useEvent/* default */.Z)(ele => {
    if (ele) {
      const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
      watermark.add(innerContentEle);
      panelEleRef.current = innerContentEle;
    } else {
      watermark.remove(panelEleRef.current);
    }
  });
  return panelRef;
}
/* harmony default export */ var watermark_context = ((/* unused pure expression or super */ null && (WatermarkContext)));
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98866);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/components/NormalCancelBtn.js
"use client";




const NormalCancelBtn = () => {
  const {
    cancelButtonProps,
    cancelTextLocale,
    onCancel
  } = (0,react.useContext)(ModalContext);
  return /*#__PURE__*/react.createElement(es_button/* default */.ZP, Object.assign({
    onClick: onCancel
  }, cancelButtonProps), cancelTextLocale);
};
/* harmony default export */ var components_NormalCancelBtn = (NormalCancelBtn);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/components/NormalOkBtn.js
"use client";





const NormalOkBtn = () => {
  const {
    confirmLoading,
    okButtonProps,
    okType,
    okTextLocale,
    onOk
  } = (0,react.useContext)(ModalContext);
  return /*#__PURE__*/react.createElement(es_button/* default */.ZP, Object.assign({}, (0,buttonHelpers/* convertLegacyProps */.nx)(okType), {
    loading: confirmLoading,
    onClick: onOk
  }, okButtonProps), okTextLocale);
};
/* harmony default export */ var components_NormalOkBtn = (NormalOkBtn);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/locale.js
var modal_locale = __webpack_require__(83008);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/shared.js
"use client";










function renderCloseIcon(prefixCls, closeIcon) {
  return /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-close-x`
  }, closeIcon || /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    className: `${prefixCls}-close-icon`
  }));
}
const Footer = props => {
  const {
    okText,
    okType = 'primary',
    cancelText,
    confirmLoading,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    footer
  } = props;
  const [locale] = (0,useLocale/* default */.Z)('Modal', (0,modal_locale/* getConfirmLocale */.A)());
  // ================== Locale Text ==================
  const okTextLocale = okText || (locale === null || locale === void 0 ? void 0 : locale.okText);
  const cancelTextLocale = cancelText || (locale === null || locale === void 0 ? void 0 : locale.cancelText);
  // ================= Context Value =================
  const btnCtxValue = {
    confirmLoading,
    okButtonProps,
    cancelButtonProps,
    okTextLocale,
    cancelTextLocale,
    okType,
    onOk,
    onCancel
  };
  const btnCtxValueMemo = react.useMemo(() => btnCtxValue, (0,toConsumableArray/* default */.Z)(Object.values(btnCtxValue)));
  let footerNode;
  if (typeof footer === 'function' || typeof footer === 'undefined') {
    footerNode = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_NormalCancelBtn, null), /*#__PURE__*/react.createElement(components_NormalOkBtn, null));
    if (typeof footer === 'function') {
      footerNode = footer(footerNode, {
        OkBtn: components_NormalOkBtn,
        CancelBtn: components_NormalCancelBtn
      });
    }
    footerNode = /*#__PURE__*/react.createElement(ModalContextProvider, {
      value: btnCtxValueMemo
    }, footerNode);
  } else {
    footerNode = footer;
  }
  return /*#__PURE__*/react.createElement(DisabledContext/* DisabledContextProvider */.n, {
    disabled: false
  }, footerNode);
};
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(11568);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/style/index.js
var style = __webpack_require__(6999);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var es_style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/motion.js
var motion_motion = __webpack_require__(93590);
;// CONCATENATED MODULE: ./node_modules/antd/es/style/motion/fade.js


const fadeIn = new cssinjs_es/* Keyframes */.E4('antFadeIn', {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});
const fadeOut = new cssinjs_es/* Keyframes */.E4('antFadeOut', {
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
});
const initFadeMotion = (token, sameLevel = false) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? '&' : '';
  return [(0,motion_motion/* initMotion */.R)(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: 'linear'
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: 'linear'
    }
  }];
};
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/zoom.js
var zoom = __webpack_require__(50438);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83262);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/style/index.js






function box(position) {
  return {
    position,
    inset: 0
  };
}
const genModalMaskStyle = token => {
  const {
    componentCls,
    antCls
  } = token;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${antCls}-zoom-enter, ${componentCls}${antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: 'none',
        opacity: 0,
        animationDuration: token.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: 'none'
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${componentCls}${antCls}-zoom-leave ${componentCls}-content`]: {
        pointerEvents: 'none'
      },
      [`${componentCls}-mask`]: Object.assign(Object.assign({}, box('fixed')), {
        zIndex: token.zIndexPopupBase,
        height: '100%',
        backgroundColor: token.colorBgMask,
        pointerEvents: 'none',
        [`${componentCls}-hidden`]: {
          display: 'none'
        }
      }),
      [`${componentCls}-wrap`]: Object.assign(Object.assign({}, box('fixed')), {
        zIndex: token.zIndexPopupBase,
        overflow: 'auto',
        outline: 0,
        WebkitOverflowScrolling: 'touch'
      })
    }
  }, {
    [`${componentCls}-root`]: initFadeMotion(token)
  }];
};
const genModalStyle = token => {
  const {
    componentCls
  } = token;
  return [
  // ======================== Root =========================
  {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: 'rtl'
      },
      [`${componentCls}-centered`]: {
        textAlign: 'center',
        '&::before': {
          display: 'inline-block',
          width: 0,
          height: '100%',
          verticalAlign: 'middle',
          content: '""'
        },
        [componentCls]: {
          top: 0,
          display: 'inline-block',
          paddingBottom: 0,
          textAlign: 'start',
          verticalAlign: 'middle'
        }
      },
      [`@media (max-width: ${token.screenSMMax}px)`]: {
        [componentCls]: {
          maxWidth: 'calc(100vw - 16px)',
          margin: `${(0,cssinjs_es/* unit */.bf)(token.marginXS)} auto`
        },
        [`${componentCls}-centered`]: {
          [componentCls]: {
            flex: 1
          }
        }
      }
    }
  },
  // ======================== Modal ========================
  {
    [componentCls]: Object.assign(Object.assign({}, (0,es_style/* resetComponent */.Wf)(token)), {
      pointerEvents: 'none',
      position: 'relative',
      top: 100,
      width: 'auto',
      maxWidth: `calc(100vw - ${(0,cssinjs_es/* unit */.bf)(token.calc(token.margin).mul(2).equal())})`,
      margin: '0 auto',
      paddingBottom: token.paddingLG,
      [`${componentCls}-title`]: {
        margin: 0,
        color: token.titleColor,
        fontWeight: token.fontWeightStrong,
        fontSize: token.titleFontSize,
        lineHeight: token.titleLineHeight,
        wordWrap: 'break-word'
      },
      [`${componentCls}-content`]: {
        position: 'relative',
        backgroundColor: token.contentBg,
        backgroundClip: 'padding-box',
        border: 0,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadow,
        pointerEvents: 'auto',
        padding: token.contentPadding
      },
      [`${componentCls}-close`]: Object.assign({
        position: 'absolute',
        top: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
        insetInlineEnd: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
        zIndex: token.calc(token.zIndexPopupBase).add(10).equal(),
        padding: 0,
        color: token.modalCloseIconColor,
        fontWeight: token.fontWeightStrong,
        lineHeight: 1,
        textDecoration: 'none',
        background: 'transparent',
        borderRadius: token.borderRadiusSM,
        width: token.modalCloseBtnSize,
        height: token.modalCloseBtnSize,
        border: 0,
        outline: 0,
        cursor: 'pointer',
        transition: `color ${token.motionDurationMid}, background-color ${token.motionDurationMid}`,
        '&-x': {
          display: 'flex',
          fontSize: token.fontSizeLG,
          fontStyle: 'normal',
          lineHeight: (0,cssinjs_es/* unit */.bf)(token.modalCloseBtnSize),
          justifyContent: 'center',
          textTransform: 'none',
          textRendering: 'auto'
        },
        '&:disabled': {
          pointerEvents: 'none'
        },
        '&:hover': {
          color: token.modalCloseIconHoverColor,
          backgroundColor: token.colorBgTextHover,
          textDecoration: 'none'
        },
        '&:active': {
          backgroundColor: token.colorBgTextActive
        }
      }, (0,es_style/* genFocusStyle */.Qy)(token)),
      [`${componentCls}-header`]: {
        color: token.colorText,
        background: token.headerBg,
        borderRadius: `${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)} ${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)} 0 0`,
        marginBottom: token.headerMarginBottom,
        padding: token.headerPadding,
        borderBottom: token.headerBorderBottom
      },
      [`${componentCls}-body`]: {
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        wordWrap: 'break-word',
        padding: token.bodyPadding,
        [`${componentCls}-body-skeleton`]: {
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: `${(0,cssinjs_es/* unit */.bf)(token.margin)} auto`
        }
      },
      [`${componentCls}-footer`]: {
        textAlign: 'end',
        background: token.footerBg,
        marginTop: token.footerMarginTop,
        padding: token.footerPadding,
        borderTop: token.footerBorderTop,
        borderRadius: token.footerBorderRadius,
        [`> ${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginInlineStart: token.marginXS
        }
      },
      [`${componentCls}-open`]: {
        overflow: 'hidden'
      }
    })
  },
  // ======================== Pure =========================
  {
    [`${componentCls}-pure-panel`]: {
      top: 'auto',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto'
      },
      [`${componentCls}-confirm-body`]: {
        marginBottom: 'auto'
      }
    }
  }];
};
const genRTLStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: 'rtl',
        [`${componentCls}-confirm-body`]: {
          direction: 'rtl'
        }
      }
    }
  };
};
const genResponsiveWidthStyle = token => {
  const {
    componentCls
  } = token;
  const gridMediaSizesMap = (0,style/* getMediaSize */.hd)(token);
  delete gridMediaSizesMap.xs;
  const responsiveStyles = Object.keys(gridMediaSizesMap).map(key => ({
    [`@media (min-width: ${(0,cssinjs_es/* unit */.bf)(gridMediaSizesMap[key])})`]: {
      width: `var(--${componentCls.replace('.', '')}-${key}-width)`
    }
  }));
  return {
    [`${componentCls}-root`]: {
      [componentCls]: [{
        width: `var(--${componentCls.replace('.', '')}-xs-width)`
      }].concat((0,toConsumableArray/* default */.Z)(responsiveStyles))
    }
  };
};
// ============================== Export ==============================
const prepareToken = token => {
  const headerPaddingVertical = token.padding;
  const headerFontSize = token.fontSizeHeading5;
  const headerLineHeight = token.lineHeightHeading5;
  const modalToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    modalHeaderHeight: token.calc(token.calc(headerLineHeight).mul(headerFontSize).equal()).add(token.calc(headerPaddingVertical).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterBorderWidth: token.lineWidth,
    modalCloseIconColor: token.colorIcon,
    modalCloseIconHoverColor: token.colorIconHover,
    modalCloseBtnSize: token.controlHeight,
    modalConfirmIconSize: token.fontHeight,
    modalTitleHeight: token.calc(token.titleFontSize).mul(token.titleLineHeight).equal()
  });
  return modalToken;
};
const prepareComponentToken = token => ({
  footerBg: 'transparent',
  headerBg: token.colorBgElevated,
  titleLineHeight: token.lineHeightHeading5,
  titleFontSize: token.fontSizeHeading5,
  contentBg: token.colorBgElevated,
  titleColor: token.colorTextHeading,
  // internal
  contentPadding: token.wireframe ? 0 : `${(0,cssinjs_es/* unit */.bf)(token.paddingMD)} ${(0,cssinjs_es/* unit */.bf)(token.paddingContentHorizontalLG)}`,
  headerPadding: token.wireframe ? `${(0,cssinjs_es/* unit */.bf)(token.padding)} ${(0,cssinjs_es/* unit */.bf)(token.paddingLG)}` : 0,
  headerBorderBottom: token.wireframe ? `${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
  headerMarginBottom: token.wireframe ? 0 : token.marginXS,
  bodyPadding: token.wireframe ? token.paddingLG : 0,
  footerPadding: token.wireframe ? `${(0,cssinjs_es/* unit */.bf)(token.paddingXS)} ${(0,cssinjs_es/* unit */.bf)(token.padding)}` : 0,
  footerBorderTop: token.wireframe ? `${(0,cssinjs_es/* unit */.bf)(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
  footerBorderRadius: token.wireframe ? `0 0 ${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)} ${(0,cssinjs_es/* unit */.bf)(token.borderRadiusLG)}` : 0,
  footerMarginTop: token.wireframe ? 0 : token.marginSM,
  confirmBodyPadding: token.wireframe ? `${(0,cssinjs_es/* unit */.bf)(token.padding * 2)} ${(0,cssinjs_es/* unit */.bf)(token.padding * 2)} ${(0,cssinjs_es/* unit */.bf)(token.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: token.wireframe ? token.margin : token.marginSM,
  confirmBtnsMarginTop: token.wireframe ? token.marginLG : token.marginSM
});
/* harmony default export */ var modal_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Modal', token => {
  const modalToken = prepareToken(token);
  return [genModalStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), (0,zoom/* initZoomMotion */._y)(modalToken, 'zoom'), genResponsiveWidthStyle(modalToken)];
}, prepareComponentToken, {
  unitless: {
    titleLineHeight: true
  }
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/Modal.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

















let mousePosition;
// ref: https://github.com/ant-design/ant-design/issues/15795
const getClickPosition = e => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};
// 只有点击事件支持从鼠标位置动画展开
if (canUseDocElement()) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}
const Modal = props => {
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      open,
      wrapClassName,
      centered,
      getContainer,
      focusTriggerAfterClose = true,
      style,
      // Deprecated
      visible,
      width = 520,
      footer,
      classNames: modalClassNames,
      styles: modalStyles,
      children,
      loading,
      confirmLoading,
      zIndex: customizeZIndex,
      mousePosition: customizeMousePosition,
      onOk,
      onCancel,
      destroyOnHidden,
      destroyOnClose
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading", "confirmLoading", "zIndex", "mousePosition", "onOk", "onCancel", "destroyOnHidden", "destroyOnClose"]);
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    modal: modalContext
  } = react.useContext(context/* ConfigContext */.E_);
  const handleCancel = e => {
    if (confirmLoading) {
      return;
    }
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };
  const handleOk = e => {
    onOk === null || onOk === void 0 ? void 0 : onOk(e);
  };
  if (false) {}
  const prefixCls = getPrefixCls('modal', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  // Style
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = modal_style(prefixCls, rootCls);
  const wrapClassNameExtended = classnames_default()(wrapClassName, {
    [`${prefixCls}-centered`]: centered !== null && centered !== void 0 ? centered : modalContext === null || modalContext === void 0 ? void 0 : modalContext.centered,
    [`${prefixCls}-wrap-rtl`]: direction === 'rtl'
  });
  const dialogFooter = footer !== null && !loading ? (/*#__PURE__*/react.createElement(Footer, Object.assign({}, props, {
    onOk: handleOk,
    onCancel: handleCancel
  }))) : null;
  const [mergedClosable, mergedCloseIcon, closeBtnIsDisabled, ariaProps] = (0,useClosable/* default */.Z)((0,useClosable/* pickClosable */.w)(props), (0,useClosable/* pickClosable */.w)(modalContext), {
    closable: true,
    closeIcon: /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
      className: `${prefixCls}-close-icon`
    }),
    closeIconRender: icon => renderCloseIcon(prefixCls, icon)
  });
  // ============================ Refs ============================
  // Select `ant-modal-content` by `panelRef`
  const panelRef = usePanelRef(`.${prefixCls}-content`);
  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = (0,useZIndex/* useZIndex */.Cn)('Modal', customizeZIndex);
  // =========================== Width ============================
  const [numWidth, responsiveWidth] = react.useMemo(() => {
    if (width && typeof width === 'object') {
      return [undefined, width];
    }
    return [width, undefined];
  }, [width]);
  const responsiveWidthVars = react.useMemo(() => {
    const vars = {};
    if (responsiveWidth) {
      Object.keys(responsiveWidth).forEach(breakpoint => {
        const breakpointWidth = responsiveWidth[breakpoint];
        if (breakpointWidth !== undefined) {
          vars[`--${prefixCls}-${breakpoint}-width`] = typeof breakpointWidth === 'number' ? `${breakpointWidth}px` : breakpointWidth;
        }
      });
    }
    return vars;
  }, [responsiveWidth]);
  // =========================== Render ===========================
  return wrapCSSVar(/*#__PURE__*/react.createElement(ContextIsolator/* default */.Z, {
    form: true,
    space: true
  }, /*#__PURE__*/react.createElement(zindexContext/* default */.Z.Provider, {
    value: contextZIndex
  }, /*#__PURE__*/react.createElement(rc_dialog_es, Object.assign({
    width: numWidth
  }, restProps, {
    zIndex: zIndex,
    getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
    prefixCls: prefixCls,
    rootClassName: classnames_default()(hashId, rootClassName, cssVarCls, rootCls),
    footer: dialogFooter,
    visible: open !== null && open !== void 0 ? open : visible,
    mousePosition: customizeMousePosition !== null && customizeMousePosition !== void 0 ? customizeMousePosition : mousePosition,
    onClose: handleCancel,
    closable: mergedClosable ? Object.assign({
      disabled: closeBtnIsDisabled,
      closeIcon: mergedCloseIcon
    }, ariaProps) : mergedClosable,
    closeIcon: mergedCloseIcon,
    focusTriggerAfterClose: focusTriggerAfterClose,
    transitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, 'fade', props.maskTransitionName),
    className: classnames_default()(hashId, className, modalContext === null || modalContext === void 0 ? void 0 : modalContext.className),
    style: Object.assign(Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.style), style), responsiveWidthVars),
    classNames: Object.assign(Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.classNames), modalClassNames), {
      wrapper: classnames_default()(wrapClassNameExtended, modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.wrapper)
    }),
    styles: Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.styles), modalStyles),
    panelRef: panelRef,
    // TODO: In the future, destroyOnClose in rc-dialog needs to be upgrade to destroyOnHidden
    destroyOnClose: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : destroyOnClose
  }), loading ? (/*#__PURE__*/react.createElement(skeleton/* default */.Z, {
    active: true,
    title: false,
    paragraph: {
      rows: 4
    },
    className: `${prefixCls}-body-skeleton`
  })) : children))));
};
/* harmony default export */ var modal_Modal = (Modal);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/style/confirm.js
// Style as confirm component




// ============================= Confirm ==============================
const genModalConfirmStyle = token => {
  const {
    componentCls,
    titleFontSize,
    titleLineHeight,
    modalConfirmIconSize,
    fontSize,
    lineHeight,
    modalTitleHeight,
    fontHeight,
    confirmBodyPadding
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [confirmComponentCls]: {
      '&-rtl': {
        direction: 'rtl'
      },
      [`${token.antCls}-modal-header`]: {
        display: 'none'
      },
      [`${confirmComponentCls}-body-wrapper`]: Object.assign({}, (0,es_style/* clearFix */.dF)()),
      [`&${componentCls} ${componentCls}-body`]: {
        padding: confirmBodyPadding
      },
      // ====================== Body ======================
      [`${confirmComponentCls}-body`]: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'start',
        [`> ${token.iconCls}`]: {
          flex: 'none',
          fontSize: modalConfirmIconSize,
          marginInlineEnd: token.confirmIconMarginInlineEnd,
          marginTop: token.calc(token.calc(fontHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        },
        [`&-has-title > ${token.iconCls}`]: {
          marginTop: token.calc(token.calc(modalTitleHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        }
      },
      [`${confirmComponentCls}-paragraph`]: {
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto',
        rowGap: token.marginXS,
        // https://github.com/ant-design/ant-design/issues/51912
        maxWidth: `calc(100% - ${(0,cssinjs_es/* unit */.bf)(token.marginSM)})`
      },
      // https://github.com/ant-design/ant-design/issues/48159
      [`${token.iconCls} + ${confirmComponentCls}-paragraph`]: {
        maxWidth: `calc(100% - ${(0,cssinjs_es/* unit */.bf)(token.calc(token.modalConfirmIconSize).add(token.marginSM).equal())})`
      },
      [`${confirmComponentCls}-title`]: {
        color: token.colorTextHeading,
        fontWeight: token.fontWeightStrong,
        fontSize: titleFontSize,
        lineHeight: titleLineHeight
      },
      [`${confirmComponentCls}-content`]: {
        color: token.colorText,
        fontSize,
        lineHeight
      },
      // ===================== Footer =====================
      [`${confirmComponentCls}-btns`]: {
        textAlign: 'end',
        marginTop: token.confirmBtnsMarginTop,
        [`${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorSuccess
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var style_confirm = ((0,genStyleUtils/* genSubStyleComponent */.bk)(['Modal', 'confirm'], token => {
  const modalToken = prepareToken(token);
  return [genModalConfirmStyle(modalToken)];
}, prepareComponentToken, {
  // confirm is weak than modal since no conflict here
  order: -1000
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/ConfirmDialog.js
"use client";


var ConfirmDialog_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

















function ConfirmContent(props) {
  const {
      prefixCls,
      icon,
      okText,
      cancelText,
      confirmPrefixCls,
      type,
      okCancel,
      footer,
      // Legacy for static function usage
      locale: staticLocale
    } = props,
    resetProps = ConfirmDialog_rest(props, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  if (false) {}
  // Icon
  let mergedIcon = icon;
  // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon
  if (!icon && icon !== null) {
    switch (type) {
      case 'info':
        mergedIcon = /*#__PURE__*/react.createElement(InfoCircleFilled/* default */.Z, null);
        break;
      case 'success':
        mergedIcon = /*#__PURE__*/react.createElement(CheckCircleFilled/* default */.Z, null);
        break;
      case 'error':
        mergedIcon = /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null);
        break;
      default:
        mergedIcon = /*#__PURE__*/react.createElement(ExclamationCircleFilled/* default */.Z, null);
    }
  }
  // 默认为 true，保持向下兼容
  const mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type === 'confirm';
  const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  const [locale] = (0,useLocale/* default */.Z)('Modal');
  const mergedLocale = staticLocale || locale;
  // ================== Locale Text ==================
  const okTextLocale = okText || (mergedOkCancel ? mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.okText : mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.justOkText);
  const cancelTextLocale = cancelText || (mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.cancelText);
  // ================= Context Value =================
  const btnCtxValue = Object.assign({
    autoFocusButton,
    cancelTextLocale,
    okTextLocale,
    mergedOkCancel
  }, resetProps);
  const btnCtxValueMemo = react.useMemo(() => btnCtxValue, (0,toConsumableArray/* default */.Z)(Object.values(btnCtxValue)));
  // ====================== Footer Origin Node ======================
  const footerOriginNode = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_ConfirmCancelBtn, null), /*#__PURE__*/react.createElement(components_ConfirmOkBtn, null));
  const hasTitle = props.title !== undefined && props.title !== null;
  const bodyCls = `${confirmPrefixCls}-body`;
  return /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-body-wrapper`
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(bodyCls, {
      [`${bodyCls}-has-title`]: hasTitle
    })
  }, mergedIcon, /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-paragraph`
  }, hasTitle && /*#__PURE__*/react.createElement("span", {
    className: `${confirmPrefixCls}-title`
  }, props.title), /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-content`
  }, props.content))), footer === undefined || typeof footer === 'function' ? (/*#__PURE__*/react.createElement(ModalContextProvider, {
    value: btnCtxValueMemo
  }, /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-btns`
  }, typeof footer === 'function' ? footer(footerOriginNode, {
    OkBtn: components_ConfirmOkBtn,
    CancelBtn: components_ConfirmCancelBtn
  }) : footerOriginNode))) : footer, /*#__PURE__*/react.createElement(style_confirm, {
    prefixCls: prefixCls
  }));
}
const ConfirmDialog = props => {
  const {
    close,
    zIndex,
    maskStyle,
    direction,
    prefixCls,
    wrapClassName,
    rootPrefixCls,
    bodyStyle,
    closable = false,
    onConfirm,
    styles
  } = props;
  if (false) {}
  const confirmPrefixCls = `${prefixCls}-confirm`;
  const width = props.width || 416;
  const style = props.style || {};
  const mask = props.mask === undefined ? true : props.mask;
  // 默认为 false，保持旧版默认行为
  const maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  const classString = classnames_default()(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
    [`${confirmPrefixCls}-rtl`]: direction === 'rtl'
  }, props.className);
  // ========================= zIndex =========================
  const [, token] = (0,useToken/* default */.ZP)();
  const mergedZIndex = react.useMemo(() => {
    if (zIndex !== undefined) {
      return zIndex;
    }
    // Static always use max zIndex
    return token.zIndexPopupBase + useZIndex/* CONTAINER_MAX_OFFSET */.u6;
  }, [zIndex, token]);
  // ========================= Render =========================
  return /*#__PURE__*/react.createElement(modal_Modal, Object.assign({}, props, {
    className: classString,
    wrapClassName: classnames_default()({
      [`${confirmPrefixCls}-centered`]: !!props.centered
    }, wrapClassName),
    onCancel: () => {
      close === null || close === void 0 ? void 0 : close({
        triggerCancel: true
      });
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
    },
    title: "",
    footer: null,
    transitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls || '', 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls || '', 'fade', props.maskTransitionName),
    mask: mask,
    maskClosable: maskClosable,
    style: style,
    styles: Object.assign({
      body: bodyStyle,
      mask: maskStyle
    }, styles),
    width: width,
    zIndex: mergedZIndex,
    closable: closable
  }), /*#__PURE__*/react.createElement(ConfirmContent, Object.assign({}, props, {
    confirmPrefixCls: confirmPrefixCls
  })));
};
const ConfirmDialogWrapper = props => {
  const {
    rootPrefixCls,
    iconPrefixCls,
    direction,
    theme
  } = props;
  return /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: iconPrefixCls,
    direction: direction,
    theme: theme
  }, /*#__PURE__*/react.createElement(ConfirmDialog, Object.assign({}, props)));
};
if (false) {}
/* harmony default export */ var modal_ConfirmDialog = (ConfirmDialogWrapper);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/destroyFns.js
const destroyFns = [];
/* harmony default export */ var modal_destroyFns = (destroyFns);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/confirm.js
"use client";









let defaultRootPrefixCls = '';
function getRootPrefixCls() {
  return defaultRootPrefixCls;
}
const confirm_ConfirmDialogWrapper = props => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    getContainer,
    direction
  } = props;
  const runtimeLocale = (0,modal_locale/* getConfirmLocale */.A)();
  const config = (0,react.useContext)(context/* ConfigContext */.E_);
  const rootPrefixCls = getRootPrefixCls() || config.getPrefixCls();
  // because Modal.config set rootPrefixCls, which is different from other components
  const prefixCls = customizePrefixCls || `${rootPrefixCls}-modal`;
  let mergedGetContainer = getContainer;
  if (mergedGetContainer === false) {
    mergedGetContainer = undefined;
    if (false) {}
  }
  return /*#__PURE__*/react.createElement(modal_ConfirmDialog, Object.assign({}, props, {
    rootPrefixCls: rootPrefixCls,
    prefixCls: prefixCls,
    iconPrefixCls: config.iconPrefixCls,
    theme: config.theme,
    direction: direction !== null && direction !== void 0 ? direction : config.direction,
    locale: (_b = (_a = config.locale) === null || _a === void 0 ? void 0 : _a.Modal) !== null && _b !== void 0 ? _b : runtimeLocale,
    getContainer: mergedGetContainer
  }));
};
function confirm_confirm(config) {
  const global = (0,config_provider/* globalConfig */.w6)();
  if (false) {}
  const container = document.createDocumentFragment();
  let currentConfig = Object.assign(Object.assign({}, config), {
    close,
    open: true
  });
  let timeoutId;
  let reactUnmount;
  function destroy(...args) {
    var _a;
    const triggerCancel = args.some(param => param === null || param === void 0 ? void 0 : param.triggerCancel);
    if (triggerCancel) {
      var _a2;
      (_a = config.onCancel) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [config, () => {}].concat((0,toConsumableArray/* default */.Z)(args.slice(1))));
    }
    for (let i = 0; i < modal_destroyFns.length; i++) {
      const fn = modal_destroyFns[i];
      if (fn === close) {
        modal_destroyFns.splice(i, 1);
        break;
      }
    }
    reactUnmount();
  }
  function render(props) {
    clearTimeout(timeoutId);
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */
    timeoutId = setTimeout(() => {
      const rootPrefixCls = global.getPrefixCls(undefined, getRootPrefixCls());
      const iconPrefixCls = global.getIconPrefixCls();
      const theme = global.getTheme();
      const dom = /*#__PURE__*/react.createElement(confirm_ConfirmDialogWrapper, Object.assign({}, props));
      const reactRender = (0,UnstableContext/* unstableSetRender */.q)();
      reactUnmount = reactRender(/*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
        prefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        theme: theme
      }, global.holderRender ? global.holderRender(dom) : dom), container);
    });
  }
  function close(...args) {
    currentConfig = Object.assign(Object.assign({}, currentConfig), {
      open: false,
      afterClose: () => {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        // @ts-ignore
        destroy.apply(this, args);
      }
    });
    // Legacy support
    if (currentConfig.visible) {
      delete currentConfig.visible;
    }
    render(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = Object.assign(Object.assign({}, currentConfig), configUpdate);
    }
    render(currentConfig);
  }
  render(currentConfig);
  modal_destroyFns.push(close);
  return {
    destroy: close,
    update
  };
}
function withWarn(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'warning'
  });
}
function withInfo(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'info'
  });
}
function withSuccess(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'success'
  });
}
function withError(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'error'
  });
}
function withConfirm(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'confirm'
  });
}
function modalGlobalConfig({
  rootPrefixCls
}) {
   false ? 0 : void 0;
  defaultRootPrefixCls = rootPrefixCls;
}
// EXTERNAL MODULE: ./node_modules/antd/es/_util/PurePanel.js
var PurePanel = __webpack_require__(8745);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/PurePanel.js
"use client";

var PurePanel_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const PurePanel_PurePanel = props => {
  const {
      prefixCls: customizePrefixCls,
      className,
      closeIcon,
      closable,
      type,
      title,
      children,
      footer
    } = props,
    restProps = PurePanel_rest(props, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const rootPrefixCls = getPrefixCls();
  const prefixCls = customizePrefixCls || getPrefixCls('modal');
  const rootCls = (0,useCSSVarCls/* default */.Z)(rootPrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = modal_style(prefixCls, rootCls);
  const confirmPrefixCls = `${prefixCls}-confirm`;
  // Choose target props by confirm mark
  let additionalProps = {};
  if (type) {
    additionalProps = {
      closable: closable !== null && closable !== void 0 ? closable : false,
      title: '',
      footer: '',
      children: (/*#__PURE__*/react.createElement(ConfirmContent, Object.assign({}, props, {
        prefixCls: prefixCls,
        confirmPrefixCls: confirmPrefixCls,
        rootPrefixCls: rootPrefixCls,
        content: children
      })))
    };
  } else {
    additionalProps = {
      closable: closable !== null && closable !== void 0 ? closable : true,
      title,
      footer: footer !== null && /*#__PURE__*/react.createElement(Footer, Object.assign({}, props)),
      children
    };
  }
  return wrapCSSVar(/*#__PURE__*/react.createElement(Content_Panel, Object.assign({
    prefixCls: prefixCls,
    className: classnames_default()(hashId, `${prefixCls}-pure-panel`, type && confirmPrefixCls, type && `${confirmPrefixCls}-${type}`, className, cssVarCls, rootCls)
  }, restProps, {
    closeIcon: renderCloseIcon(prefixCls, closeIcon),
    closable: closable
  }, additionalProps)));
};
/* harmony default export */ var modal_PurePanel = ((0,PurePanel/* withPureRenderTheme */.i)(PurePanel_PurePanel));
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/usePatchElement.js


function usePatchElement() {
  const [elements, setElements] = react.useState([]);
  const patchElement = react.useCallback(element => {
    // append a new element to elements (and create a new ref)
    setElements(originElements => [].concat((0,toConsumableArray/* default */.Z)(originElements), [element]));
    // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect
    return () => {
      setElements(originElements => originElements.filter(ele => ele !== element));
    };
  }, []);
  return [elements, patchElement];
}
// EXTERNAL MODULE: ./node_modules/antd/es/locale/en_US.js + 6 modules
var en_US = __webpack_require__(3115);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/HookModal.js
"use client";


var HookModal_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const HookModal = (_a, ref) => {
  var _b;
  var {
      afterClose: hookAfterClose,
      config
    } = _a,
    restProps = HookModal_rest(_a, ["afterClose", "config"]);
  const [open, setOpen] = react.useState(true);
  const [innerConfig, setInnerConfig] = react.useState(config);
  const {
    direction,
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('modal');
  const rootPrefixCls = getPrefixCls();
  const afterClose = () => {
    var _a;
    hookAfterClose();
    (_a = innerConfig.afterClose) === null || _a === void 0 ? void 0 : _a.call(innerConfig);
  };
  const close = (...args) => {
    var _a;
    setOpen(false);
    const triggerCancel = args.some(param => param === null || param === void 0 ? void 0 : param.triggerCancel);
    if (triggerCancel) {
      var _a2;
      (_a = innerConfig.onCancel) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [innerConfig, () => {}].concat((0,toConsumableArray/* default */.Z)(args.slice(1))));
    }
  };
  react.useImperativeHandle(ref, () => ({
    destroy: close,
    update: newConfig => {
      setInnerConfig(originConfig => {
        const nextConfig = typeof newConfig === 'function' ? newConfig(originConfig) : newConfig;
        return Object.assign(Object.assign({}, originConfig), nextConfig);
      });
    }
  }));
  const mergedOkCancel = (_b = innerConfig.okCancel) !== null && _b !== void 0 ? _b : innerConfig.type === 'confirm';
  const [contextLocale] = (0,useLocale/* default */.Z)('Modal', en_US/* default */.Z.Modal);
  return /*#__PURE__*/react.createElement(modal_ConfirmDialog, Object.assign({
    prefixCls: prefixCls,
    rootPrefixCls: rootPrefixCls
  }, innerConfig, {
    close: close,
    open: open,
    afterClose: afterClose,
    okText: innerConfig.okText || (mergedOkCancel ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.okText : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.justOkText),
    direction: innerConfig.direction || direction,
    cancelText: innerConfig.cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.cancelText)
  }, restProps));
};
/* harmony default export */ var useModal_HookModal = (/*#__PURE__*/react.forwardRef(HookModal));
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/index.js
"use client";







let uuid = 0;
const ElementsHolder = /*#__PURE__*/react.memo(/*#__PURE__*/react.forwardRef((_props, ref) => {
  const [elements, patchElement] = usePatchElement();
  react.useImperativeHandle(ref, () => ({
    patchElement
  }), []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, elements);
}));
function useModal() {
  const holderRef = react.useRef(null);
  // ========================== Effect ==========================
  const [actionQueue, setActionQueue] = react.useState([]);
  react.useEffect(() => {
    if (actionQueue.length) {
      const cloneQueue = (0,toConsumableArray/* default */.Z)(actionQueue);
      cloneQueue.forEach(action => {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]);
  // =========================== Hook ===========================
  const getConfirmFunc = react.useCallback(withFunc => function hookConfirm(config) {
    var _a;
    uuid += 1;
    const modalRef = /*#__PURE__*/react.createRef();
    // Proxy to promise with `onClose`
    let resolvePromise;
    const promise = new Promise(resolve => {
      resolvePromise = resolve;
    });
    let silent = false;
    let closeFunc;
    const modal = /*#__PURE__*/react.createElement(useModal_HookModal, {
      key: `modal-${uuid}`,
      config: withFunc(config),
      ref: modalRef,
      afterClose: () => {
        closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
      },
      isSilent: () => silent,
      onConfirm: confirmed => {
        resolvePromise(confirmed);
      }
    });
    closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
    if (closeFunc) {
      modal_destroyFns.push(closeFunc);
    }
    const instance = {
      destroy: () => {
        function destroyAction() {
          var _a;
          (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
        }
        if (modalRef.current) {
          destroyAction();
        } else {
          setActionQueue(prev => [].concat((0,toConsumableArray/* default */.Z)(prev), [destroyAction]));
        }
      },
      update: newConfig => {
        function updateAction() {
          var _a;
          (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.update(newConfig);
        }
        if (modalRef.current) {
          updateAction();
        } else {
          setActionQueue(prev => [].concat((0,toConsumableArray/* default */.Z)(prev), [updateAction]));
        }
      },
      then: resolve => {
        silent = true;
        return promise.then(resolve);
      }
    };
    return instance;
  }, []);
  const fns = react.useMemo(() => ({
    info: getConfirmFunc(withInfo),
    success: getConfirmFunc(withSuccess),
    error: getConfirmFunc(withError),
    warning: getConfirmFunc(withWarn),
    confirm: getConfirmFunc(withConfirm)
  }), []);
  return [fns, /*#__PURE__*/react.createElement(ElementsHolder, {
    key: "modal-holder",
    ref: holderRef
  })];
}
/* harmony default export */ var modal_useModal = (useModal);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/index.js
"use client";






function modalWarn(props) {
  return confirm_confirm(withWarn(props));
}
const es_modal_Modal = modal_Modal;
es_modal_Modal.useModal = modal_useModal;
es_modal_Modal.info = function infoFn(props) {
  return confirm_confirm(withInfo(props));
};
es_modal_Modal.success = function successFn(props) {
  return confirm_confirm(withSuccess(props));
};
es_modal_Modal.error = function errorFn(props) {
  return confirm_confirm(withError(props));
};
es_modal_Modal.warning = modalWarn;
es_modal_Modal.warn = modalWarn;
es_modal_Modal.confirm = function confirmFn(props) {
  return confirm_confirm(withConfirm(props));
};
es_modal_Modal.destroyAll = function destroyAllFn() {
  while (modal_destroyFns.length) {
    const close = modal_destroyFns.pop();
    if (close) {
      close();
    }
  }
};
es_modal_Modal.config = modalGlobalConfig;
es_modal_Modal._InternalPanelDoNotUseOrYouWillBeFired = modal_PurePanel;
if (false) {}
/* harmony default export */ var modal = (es_modal_Modal);

/***/ }),

/***/ 48054:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ skeleton; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Element.js
"use client";



const Element = props => {
  const {
    prefixCls,
    className,
    style,
    size,
    shape
  } = props;
  const sizeCls = classnames_default()({
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-sm`]: size === 'small'
  });
  const shapeCls = classnames_default()({
    [`${prefixCls}-circle`]: shape === 'circle',
    [`${prefixCls}-square`]: shape === 'square',
    [`${prefixCls}-round`]: shape === 'round'
  });
  const sizeStyle = react.useMemo(() => typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: `${size}px`
  } : {}, [size]);
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(prefixCls, sizeCls, shapeCls, className),
    style: Object.assign(Object.assign({}, sizeStyle), style)
  });
};
/* harmony default export */ var skeleton_Element = (Element);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var es = __webpack_require__(11568);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83262);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/style/index.js


const skeletonClsLoading = new es/* Keyframes */.E4(`ant-skeleton-loading`, {
  '0%': {
    backgroundPosition: '100% 50%'
  },
  '100%': {
    backgroundPosition: '0 50%'
  }
});
const genSkeletonElementCommonSize = size => ({
  height: size,
  lineHeight: (0,es/* unit */.bf)(size)
});
const genSkeletonElementAvatarSize = size => Object.assign({
  width: size
}, genSkeletonElementCommonSize(size));
const genSkeletonColor = token => ({
  background: token.skeletonLoadingBackground,
  backgroundSize: '400% 100%',
  animationName: skeletonClsLoading,
  animationDuration: token.skeletonLoadingMotionDuration,
  animationTimingFunction: 'ease',
  animationIterationCount: 'infinite'
});
const genSkeletonElementInputSize = (size, calc) => Object.assign({
  width: calc(size).mul(5).equal(),
  minWidth: calc(size).mul(5).equal()
}, genSkeletonElementCommonSize(size));
const genSkeletonElementAvatar = token => {
  const {
    skeletonAvatarCls,
    gradientFromColor,
    controlHeight,
    controlHeightLG,
    controlHeightSM
  } = token;
  return {
    [skeletonAvatarCls]: Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor
    }, genSkeletonElementAvatarSize(controlHeight)),
    [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
      borderRadius: '50%'
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
    [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
  };
};
const genSkeletonElementInput = token => {
  const {
    controlHeight,
    borderRadiusSM,
    skeletonInputCls,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token;
  return {
    [skeletonInputCls]: Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor,
      borderRadius: borderRadiusSM
    }, genSkeletonElementInputSize(controlHeight, calc)),
    [`${skeletonInputCls}-lg`]: Object.assign({}, genSkeletonElementInputSize(controlHeightLG, calc)),
    [`${skeletonInputCls}-sm`]: Object.assign({}, genSkeletonElementInputSize(controlHeightSM, calc))
  };
};
const genSkeletonElementImageSize = size => Object.assign({
  width: size
}, genSkeletonElementCommonSize(size));
const genSkeletonElementImage = token => {
  const {
    skeletonImageCls,
    imageSizeBase,
    gradientFromColor,
    borderRadiusSM,
    calc
  } = token;
  return {
    [skeletonImageCls]: Object.assign(Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      background: gradientFromColor,
      borderRadius: borderRadiusSM
    }, genSkeletonElementImageSize(calc(imageSizeBase).mul(2).equal())), {
      [`${skeletonImageCls}-path`]: {
        fill: '#bfbfbf'
      },
      [`${skeletonImageCls}-svg`]: Object.assign(Object.assign({}, genSkeletonElementImageSize(imageSizeBase)), {
        maxWidth: calc(imageSizeBase).mul(4).equal(),
        maxHeight: calc(imageSizeBase).mul(4).equal()
      }),
      [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
        borderRadius: '50%'
      }
    }),
    [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
      borderRadius: '50%'
    }
  };
};
const genSkeletonElementButtonShape = (token, size, buttonCls) => {
  const {
    skeletonButtonCls
  } = token;
  return {
    [`${buttonCls}${skeletonButtonCls}-circle`]: {
      width: size,
      minWidth: size,
      borderRadius: '50%'
    },
    [`${buttonCls}${skeletonButtonCls}-round`]: {
      borderRadius: size
    }
  };
};
const genSkeletonElementButtonSize = (size, calc) => Object.assign({
  width: calc(size).mul(2).equal(),
  minWidth: calc(size).mul(2).equal()
}, genSkeletonElementCommonSize(size));
const genSkeletonElementButton = token => {
  const {
    borderRadiusSM,
    skeletonButtonCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [skeletonButtonCls]: Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      width: calc(controlHeight).mul(2).equal(),
      minWidth: calc(controlHeight).mul(2).equal()
    }, genSkeletonElementButtonSize(controlHeight, calc))
  }, genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls)), {
    [`${skeletonButtonCls}-lg`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightLG, calc))
  }), genSkeletonElementButtonShape(token, controlHeightLG, `${skeletonButtonCls}-lg`)), {
    [`${skeletonButtonCls}-sm`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightSM, calc))
  }), genSkeletonElementButtonShape(token, controlHeightSM, `${skeletonButtonCls}-sm`));
};
// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    skeletonAvatarCls,
    skeletonTitleCls,
    skeletonParagraphCls,
    skeletonButtonCls,
    skeletonInputCls,
    skeletonImageCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    padding,
    marginSM,
    borderRadius,
    titleHeight,
    blockRadius,
    paragraphLiHeight,
    controlHeightXS,
    paragraphMarginTop
  } = token;
  return {
    [componentCls]: {
      display: 'table',
      width: '100%',
      [`${componentCls}-header`]: {
        display: 'table-cell',
        paddingInlineEnd: padding,
        verticalAlign: 'top',
        // Avatar
        [skeletonAvatarCls]: Object.assign({
          display: 'inline-block',
          verticalAlign: 'top',
          background: gradientFromColor
        }, genSkeletonElementAvatarSize(controlHeight)),
        [`${skeletonAvatarCls}-circle`]: {
          borderRadius: '50%'
        },
        [`${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
        [`${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
      },
      [`${componentCls}-content`]: {
        display: 'table-cell',
        width: '100%',
        verticalAlign: 'top',
        // Title
        [skeletonTitleCls]: {
          width: '100%',
          height: titleHeight,
          background: gradientFromColor,
          borderRadius: blockRadius,
          [`+ ${skeletonParagraphCls}`]: {
            marginBlockStart: controlHeightSM
          }
        },
        // paragraph
        [skeletonParagraphCls]: {
          padding: 0,
          '> li': {
            width: '100%',
            height: paragraphLiHeight,
            listStyle: 'none',
            background: gradientFromColor,
            borderRadius: blockRadius,
            '+ li': {
              marginBlockStart: controlHeightXS
            }
          }
        },
        [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: '61%'
        }
      },
      [`&-round ${componentCls}-content`]: {
        [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
          borderRadius
        }
      }
    },
    [`${componentCls}-with-avatar ${componentCls}-content`]: {
      // Title
      [skeletonTitleCls]: {
        marginBlockStart: marginSM,
        [`+ ${skeletonParagraphCls}`]: {
          marginBlockStart: paragraphMarginTop
        }
      }
    },
    // Skeleton element
    [`${componentCls}${componentCls}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: 'inline-block',
      width: 'auto'
    }, genSkeletonElementButton(token)), genSkeletonElementAvatar(token)), genSkeletonElementInput(token)), genSkeletonElementImage(token)),
    // Skeleton Block Button, Input
    [`${componentCls}${componentCls}-block`]: {
      width: '100%',
      [skeletonButtonCls]: {
        width: '100%'
      },
      [skeletonInputCls]: {
        width: '100%'
      }
    },
    // With active animation
    [`${componentCls}${componentCls}-active`]: {
      [`
        ${skeletonTitleCls},
        ${skeletonParagraphCls} > li,
        ${skeletonAvatarCls},
        ${skeletonButtonCls},
        ${skeletonInputCls},
        ${skeletonImageCls}
      `]: Object.assign({}, genSkeletonColor(token))
    }
  };
};
// ============================== Export ==============================
const prepareComponentToken = token => {
  const {
    colorFillContent,
    colorFill
  } = token;
  const gradientFromColor = colorFillContent;
  const gradientToColor = colorFill;
  return {
    color: gradientFromColor,
    colorGradientEnd: gradientToColor,
    gradientFromColor,
    gradientToColor,
    titleHeight: token.controlHeight / 2,
    blockRadius: token.borderRadiusSM,
    paragraphMarginTop: token.marginLG + token.marginXXS,
    paragraphLiHeight: token.controlHeight / 2
  };
};
/* harmony default export */ var skeleton_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Skeleton', token => {
  const {
    componentCls,
    calc
  } = token;
  const skeletonToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    skeletonAvatarCls: `${componentCls}-avatar`,
    skeletonTitleCls: `${componentCls}-title`,
    skeletonParagraphCls: `${componentCls}-paragraph`,
    skeletonButtonCls: `${componentCls}-button`,
    skeletonInputCls: `${componentCls}-input`,
    skeletonImageCls: `${componentCls}-image`,
    imageSizeBase: calc(token.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${token.gradientFromColor} 25%, ${token.gradientToColor} 37%, ${token.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: '1.4s'
  });
  return [genBaseStyle(skeletonToken)];
}, prepareComponentToken, {
  deprecatedTokens: [['color', 'gradientFromColor'], ['colorGradientEnd', 'gradientToColor']]
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Avatar.js
"use client";







const SkeletonAvatar = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    shape = 'circle',
    size = 'default'
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  const otherProps = (0,omit/* default */.Z)(props, ['prefixCls', 'className']);
  const cls = classnames_default()(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({
    prefixCls: `${prefixCls}-avatar`,
    shape: shape,
    size: size
  }, otherProps))));
};
/* harmony default export */ var Avatar = (SkeletonAvatar);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Button.js
"use client";







const SkeletonButton = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    block = false,
    size = 'default'
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  const otherProps = (0,omit/* default */.Z)(props, ['prefixCls']);
  const cls = classnames_default()(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({
    prefixCls: `${prefixCls}-button`,
    size: size
  }, otherProps))));
};
/* harmony default export */ var Button = (SkeletonButton);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Image.js
"use client";





const path = 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z';
const SkeletonImage = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    active
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  const cls = classnames_default()(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-image`, className),
    style: style
  }, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${prefixCls}-image-svg`
  }, /*#__PURE__*/react.createElement("title", null, "Image placeholder"), /*#__PURE__*/react.createElement("path", {
    d: path,
    className: `${prefixCls}-image-path`
  })))));
};
/* harmony default export */ var Image = (SkeletonImage);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Input.js
"use client";







const SkeletonInput = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    block,
    size = 'default'
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  const otherProps = (0,omit/* default */.Z)(props, ['prefixCls']);
  const cls = classnames_default()(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({
    prefixCls: `${prefixCls}-input`,
    size: size
  }, otherProps))));
};
/* harmony default export */ var Input = (SkeletonInput);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Node.js
"use client";





const SkeletonNode = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    active,
    children
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  const cls = classnames_default()(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, hashId, className, rootClassName, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-image`, className),
    style: style
  }, children)));
};
/* harmony default export */ var Node = (SkeletonNode);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Paragraph.js
"use client";



const getWidth = (index, props) => {
  const {
    width,
    rows = 2
  } = props;
  if (Array.isArray(width)) {
    return width[index];
  }
  // last paragraph
  if (rows - 1 === index) {
    return width;
  }
  return undefined;
};
const Paragraph = props => {
  const {
    prefixCls,
    className,
    style,
    rows = 0
  } = props;
  const rowList = Array.from({
    length: rows
  }).map((_, index) => (
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  react.createElement("li", {
    key: index,
    style: {
      width: getWidth(index, props)
    }
  })));
  return /*#__PURE__*/react.createElement("ul", {
    className: classnames_default()(prefixCls, className),
    style: style
  }, rowList);
};
/* harmony default export */ var skeleton_Paragraph = (Paragraph);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Title.js
"use client";

/* eslint-disable jsx-a11y/heading-has-content */


const Title = ({
  prefixCls,
  className,
  width,
  style
}) => (
/*#__PURE__*/
// biome-ignore lint/a11y/useHeadingContent: HOC here
react.createElement("h3", {
  className: classnames_default()(prefixCls, className),
  style: Object.assign({
    width
  }, style)
}));
/* harmony default export */ var skeleton_Title = (Title);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Skeleton.js
"use client";













function getComponentProps(prop) {
  if (prop && typeof prop === 'object') {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }
  return {
    size: 'large',
    shape: 'circle'
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  const basicProps = {};
  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }
  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
const Skeleton = props => {
  const {
    prefixCls: customizePrefixCls,
    loading,
    className,
    rootClassName,
    style,
    children,
    avatar = false,
    title = true,
    paragraph = true,
    active,
    round
  } = props;
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle
  } = (0,context/* useComponentConfig */.dj)('skeleton');
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  if (loading || !('loading' in props)) {
    const hasAvatar = !!avatar;
    const hasTitle = !!title;
    const hasParagraph = !!paragraph;
    // Avatar
    let avatarNode;
    if (hasAvatar) {
      const avatarProps = Object.assign(Object.assign({
        prefixCls: `${prefixCls}-avatar`
      }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
      // We direct use SkeletonElement as avatar in skeleton internal.
      avatarNode = /*#__PURE__*/react.createElement("div", {
        className: `${prefixCls}-header`
      }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({}, avatarProps)));
    }
    let contentNode;
    if (hasTitle || hasParagraph) {
      // Title
      let $title;
      if (hasTitle) {
        const titleProps = Object.assign(Object.assign({
          prefixCls: `${prefixCls}-title`
        }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
        $title = /*#__PURE__*/react.createElement(skeleton_Title, Object.assign({}, titleProps));
      }
      // Paragraph
      let paragraphNode;
      if (hasParagraph) {
        const paragraphProps = Object.assign(Object.assign({
          prefixCls: `${prefixCls}-paragraph`
        }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
        paragraphNode = /*#__PURE__*/react.createElement(skeleton_Paragraph, Object.assign({}, paragraphProps));
      }
      contentNode = /*#__PURE__*/react.createElement("div", {
        className: `${prefixCls}-content`
      }, $title, paragraphNode);
    }
    const cls = classnames_default()(prefixCls, {
      [`${prefixCls}-with-avatar`]: hasAvatar,
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-round`]: round
    }, contextClassName, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
      className: cls,
      style: Object.assign(Object.assign({}, contextStyle), style)
    }, avatarNode, contentNode));
  }
  return children !== null && children !== void 0 ? children : null;
};
Skeleton.Button = Button;
Skeleton.Avatar = Avatar;
Skeleton.Input = Input;
Skeleton.Image = Image;
Skeleton.Node = Node;
if (false) {}
/* harmony default export */ var skeleton_Skeleton = (Skeleton);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/index.js
"use client";


/* harmony default export */ var skeleton = (skeleton_Skeleton);

/***/ }),

/***/ 4173:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BR: function() { return /* binding */ NoCompactStyle; },
/* harmony export */   ri: function() { return /* binding */ useCompactItemContext; }
/* harmony export */ });
/* unused harmony export SpaceCompactItemContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50344);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53124);
/* harmony import */ var _config_provider_hooks_useSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98675);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51916);
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






const SpaceCompactItemContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SpaceCompactItemContext);
  const compactItemClassnames = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (!compactItemContext) {
      return '';
    }
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === 'vertical' ? '-vertical-' : '-';
    return classnames__WEBPACK_IMPORTED_MODULE_1___default()(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === 'rtl'
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames
  };
};
const NoCompactStyle = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
const CompactItem = props => {
  const {
      children
    } = props,
    others = __rest(props, ["children"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpaceCompactItemContext.Provider, {
    value: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => others, [others])
  }, children);
};
const Compact = props => {
  const {
    getPrefixCls,
    direction: directionConfig
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__/* .ConfigContext */ .E_);
  const {
      size,
      direction,
      block,
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      children
    } = props,
    restProps = __rest(props, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]);
  const mergedSize = (0,_config_provider_hooks_useSize__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ctx => size !== null && size !== void 0 ? size : ctx);
  const prefixCls = getPrefixCls('space-compact', customizePrefixCls);
  const [wrapCSSVar, hashId] = (0,_style__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(prefixCls);
  const clx = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, hashId, {
    [`${prefixCls}-rtl`]: directionConfig === 'rtl',
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-vertical`]: direction === 'vertical'
  }, className, rootClassName);
  const compactItemContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SpaceCompactItemContext);
  const childNodes = (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(children);
  const nodes = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => childNodes.map((child, i) => {
    const key = (child === null || child === void 0 ? void 0 : child.key) || `${prefixCls}-item-${i}`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CompactItem, {
      key: key,
      compactSize: mergedSize,
      compactDirection: direction,
      isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
      isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
    }, child);
  }), [size, childNodes, compactItemContext]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  return wrapCSSVar(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({
    className: clx
  }, restProps), nodes));
};
/* harmony default export */ __webpack_exports__.ZP = (Compact);

/***/ }),

/***/ 42075:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ space; }
});

// UNUSED EXPORTS: SpaceContext

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/gapSize.js
var gapSize = __webpack_require__(98065);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/context.js

const SpaceContext = /*#__PURE__*/react.createContext({
  latestIndex: 0
});
const SpaceContextProvider = SpaceContext.Provider;
;// CONCATENATED MODULE: ./node_modules/antd/es/space/Item.js
"use client";



const Item = ({
  className,
  index,
  children,
  split,
  style
}) => {
  const {
    latestIndex
  } = react.useContext(SpaceContext);
  if (children === null || children === undefined) {
    return null;
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: className,
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/react.createElement("span", {
    className: `${className}-split`
  }, split));
};
/* harmony default export */ var space_Item = (Item);
// EXTERNAL MODULE: ./node_modules/antd/es/space/style/index.js + 1 modules
var space_style = __webpack_require__(51916);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const InternalSpace = /*#__PURE__*/react.forwardRef((props, ref) => {
  var _a;
  const {
    getPrefixCls,
    direction: directionConfig,
    size: contextSize,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,context/* useComponentConfig */.dj)('space');
  const {
      size = contextSize !== null && contextSize !== void 0 ? contextSize : 'small',
      align,
      className,
      rootClassName,
      children,
      direction = 'horizontal',
      prefixCls: customizePrefixCls,
      split,
      style,
      wrap = false,
      classNames: customClassNames,
      styles
    } = props,
    otherProps = __rest(props, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]);
  const [horizontalSize, verticalSize] = Array.isArray(size) ? size : [size, size];
  const isPresetVerticalSize = (0,gapSize/* isPresetSize */.n)(verticalSize);
  const isPresetHorizontalSize = (0,gapSize/* isPresetSize */.n)(horizontalSize);
  const isValidVerticalSize = (0,gapSize/* isValidGapNumber */.T)(verticalSize);
  const isValidHorizontalSize = (0,gapSize/* isValidGapNumber */.T)(horizontalSize);
  const childNodes = (0,toArray/* default */.Z)(children, {
    keepEmpty: true
  });
  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  const prefixCls = getPrefixCls('space', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,space_style/* default */.Z)(prefixCls);
  const cls = classnames_default()(prefixCls, contextClassName, hashId, `${prefixCls}-${direction}`, {
    [`${prefixCls}-rtl`]: directionConfig === 'rtl',
    [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
    [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
    [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize
  }, className, rootClassName, cssVarCls);
  const itemClassName = classnames_default()(`${prefixCls}-item`, (_a = customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.item) !== null && _a !== void 0 ? _a : contextClassNames.item);
  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map((child, i) => {
    var _a;
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    const key = (child === null || child === void 0 ? void 0 : child.key) || `${itemClassName}-${i}`;
    return /*#__PURE__*/react.createElement(space_Item, {
      className: itemClassName,
      key: key,
      index: i,
      split: split,
      style: (_a = styles === null || styles === void 0 ? void 0 : styles.item) !== null && _a !== void 0 ? _a : contextStyles.item
    }, child);
  });
  const spaceContext = react.useMemo(() => ({
    latestIndex
  }), [latestIndex]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  const gapStyle = {};
  if (wrap) {
    gapStyle.flexWrap = 'wrap';
  }
  if (!isPresetHorizontalSize && isValidHorizontalSize) {
    gapStyle.columnGap = horizontalSize;
  }
  if (!isPresetVerticalSize && isValidVerticalSize) {
    gapStyle.rowGap = verticalSize;
  }
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", Object.assign({
    ref: ref,
    className: cls,
    style: Object.assign(Object.assign(Object.assign({}, gapStyle), contextStyle), style)
  }, otherProps), /*#__PURE__*/react.createElement(SpaceContextProvider, {
    value: spaceContext
  }, nodes)));
});
const Space = InternalSpace;
Space.Compact = Compact/* default */.ZP;
if (false) {}
/* harmony default export */ var space = (Space);

/***/ }),

/***/ 51916:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ style; }
});

// UNUSED EXPORTS: prepareComponentToken

// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var es = __webpack_require__(83262);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/style/compact.js
const genSpaceCompactStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      '&-block': {
        display: 'flex',
        width: '100%'
      },
      '&-vertical': {
        flexDirection: 'column'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var compact = (genSpaceCompactStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/style/index.js


const genSpaceStyle = token => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    [componentCls]: {
      display: 'inline-flex',
      '&-rtl': {
        direction: 'rtl'
      },
      '&-vertical': {
        flexDirection: 'column'
      },
      '&-align': {
        flexDirection: 'column',
        '&-center': {
          alignItems: 'center'
        },
        '&-start': {
          alignItems: 'flex-start'
        },
        '&-end': {
          alignItems: 'flex-end'
        },
        '&-baseline': {
          alignItems: 'baseline'
        }
      },
      [`${componentCls}-item:empty`]: {
        display: 'none'
      },
      // https://github.com/ant-design/ant-design/issues/47875
      [`${componentCls}-item > ${antCls}-badge-not-a-wrapper:only-child`]: {
        display: 'block'
      }
    }
  };
};
const genSpaceGapStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      '&-gap-row-small': {
        rowGap: token.spaceGapSmallSize
      },
      '&-gap-row-middle': {
        rowGap: token.spaceGapMiddleSize
      },
      '&-gap-row-large': {
        rowGap: token.spaceGapLargeSize
      },
      '&-gap-col-small': {
        columnGap: token.spaceGapSmallSize
      },
      '&-gap-col-middle': {
        columnGap: token.spaceGapMiddleSize
      },
      '&-gap-col-large': {
        columnGap: token.spaceGapLargeSize
      }
    }
  };
};
// ============================== Export ==============================
const prepareComponentToken = () => ({});
/* harmony default export */ var style = ((0,genStyleUtils/* genStyleHooks */.I$)('Space', token => {
  const spaceToken = (0,es/* mergeToken */.IX)(token, {
    spaceGapSmallSize: token.paddingXS,
    spaceGapMiddleSize: token.padding,
    spaceGapLargeSize: token.paddingLG
  });
  return [genSpaceStyle(spaceToken), genSpaceGapStyle(spaceToken), compact(spaceToken)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: false
}));

/***/ }),

/***/ 80110:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ genCompactItemStyle; }
/* harmony export */ });
// handle border collapse
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? '> *' : '';
  const hoverEffects = ['hover', focus ? 'focus' : null, 'active'].filter(Boolean).map(n => `&:${n} ${childCombinator}`).join(',');
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
    },
    '&-item': Object.assign(Object.assign({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
// handle border-radius
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : '';
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token, options = {
  focus: true
}) {
  const {
    componentCls
  } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}

/***/ }),

/***/ 93590:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: function() { return /* binding */ initMotion; }
/* harmony export */ });
const initMotionCommon = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
// FIXME: origin less code seems same as initMotionCommon. Maybe we can safe remove
const initMotionCommonLeave = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
const initMotion = (motionCls, inKeyframes, outKeyframes, duration, sameLevel = false) => {
  const sameLevelPrefix = sameLevel ? '&' : '';
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
      animationPlayState: 'paused'
    }),
    [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
      animationPlayState: 'paused'
    }),
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: 'running'
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: 'running',
      pointerEvents: 'none'
    }
  };
};

/***/ }),

/***/ 48611:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qt: function() { return /* binding */ slideDownIn; },
/* harmony export */   Uw: function() { return /* binding */ slideUpOut; },
/* harmony export */   fJ: function() { return /* binding */ slideUpIn; },
/* harmony export */   ly: function() { return /* binding */ slideDownOut; },
/* harmony export */   oN: function() { return /* binding */ initSlideMotion; }
/* harmony export */ });
/* unused harmony exports slideLeftIn, slideLeftOut, slideRightIn, slideRightOut */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11568);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93590);


const slideUpIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideUpIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideUpOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideUpOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideDownIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideDownIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  }
});
const slideDownOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideDownOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  }
});
const slideLeftIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideLeftIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideLeftOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideLeftOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideRightIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideRightIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  }
});
const slideRightOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideRightOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  }
});
const slideMotion = {
  'slide-up': {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  'slide-down': {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  'slide-left': {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  'slide-right': {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__/* .initMotion */ .R)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: 'scale(0)',
      transformOrigin: '0% 0%',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint,
      '&-prepare': {
        transform: 'scale(1)'
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};

/***/ }),

/***/ 50438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _y: function() { return /* binding */ initZoomMotion; }
/* harmony export */ });
/* unused harmony exports zoomIn, zoomOut, zoomBigIn, zoomBigOut, zoomUpIn, zoomUpOut, zoomLeftIn, zoomLeftOut, zoomRightIn, zoomRightOut, zoomDownIn, zoomDownOut */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11568);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93590);


const zoomIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomIn', {
  '0%': {
    transform: 'scale(0.2)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
});
const zoomOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomOut', {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0.2)',
    opacity: 0
  }
});
const zoomBigIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomBigIn', {
  '0%': {
    transform: 'scale(0.8)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
});
const zoomBigOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomBigOut', {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0.8)',
    opacity: 0
  }
});
const zoomUpIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomUpIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%'
  }
});
const zoomUpOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomUpOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0
  }
});
const zoomLeftIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomLeftIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%'
  }
});
const zoomLeftOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomLeftOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0
  }
});
const zoomRightIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomRightIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%'
  }
});
const zoomRightOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomRightOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0
  }
});
const zoomDownIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomDownIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%'
  }
});
const zoomDownOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antZoomDownOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0
  }
});
const zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  'zoom-big': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  'zoom-big-fast': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  'zoom-left': {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  'zoom-right': {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  'zoom-up': {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  'zoom-down': {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
const initZoomMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = zoomMotion[motionName];
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__/* .initMotion */ .R)(motionCls, inKeyframes, outKeyframes, motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      transform: 'scale(0)',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc,
      '&-prepare': {
        transform: 'none'
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};

/***/ }),

/***/ 9361:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ theme; }
});

// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var es = __webpack_require__(11568);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/default/theme.js
var default_theme = __webpack_require__(31567);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/seed.js
var seed = __webpack_require__(2790);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/alias.js
var alias = __webpack_require__(92372);
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/getDesignToken.js




const getDesignToken = config => {
  const theme = (config === null || config === void 0 ? void 0 : config.algorithm) ? (0,es/* createTheme */.jG)(config.algorithm) : default_theme/* default */.Z;
  const mergedToken = Object.assign(Object.assign({}, seed/* default */.Z), config === null || config === void 0 ? void 0 : config.token);
  return (0,es/* getComputedToken */.t2)(mergedToken, {
    override: config === null || config === void 0 ? void 0 : config.token
  }, theme, alias/* default */.Z);
};
/* harmony default export */ var theme_getDesignToken = (getDesignToken);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/useToken.js + 2 modules
var useToken = __webpack_require__(25976);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/context.js
var context = __webpack_require__(33083);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/default/index.js + 5 modules
var themes_default = __webpack_require__(67164);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/shared/genControlHeight.js
var genControlHeight = __webpack_require__(372);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/shared/genFontMapToken.js
var genFontMapToken = __webpack_require__(69594);
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/compact/genCompactSizeMapToken.js
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  const compactSizeStep = sizeStep - 2;
  return {
    sizeXXL: sizeUnit * (compactSizeStep + 10),
    sizeXL: sizeUnit * (compactSizeStep + 6),
    sizeLG: sizeUnit * (compactSizeStep + 2),
    sizeMD: sizeUnit * (compactSizeStep + 2),
    sizeMS: sizeUnit * (compactSizeStep + 1),
    size: sizeUnit * compactSizeStep,
    sizeSM: sizeUnit * compactSizeStep,
    sizeXS: sizeUnit * (compactSizeStep - 1),
    sizeXXS: sizeUnit * (compactSizeStep - 1)
  };
}
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/compact/index.js




const derivative = (token, mapToken) => {
  const mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : (0,themes_default/* default */.Z)(token);
  const fontSize = mergedMapToken.fontSizeSM; // Smaller size font-size as base
  const controlHeight = mergedMapToken.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, mergedMapToken), genSizeMapToken(mapToken !== null && mapToken !== void 0 ? mapToken : token)), (0,genFontMapToken/* default */.Z)(fontSize)), {
    // controlHeight
    controlHeight
  }), (0,genControlHeight/* default */.Z)(Object.assign(Object.assign({}, mergedMapToken), {
    controlHeight
  })));
};
/* harmony default export */ var compact = (derivative);
// EXTERNAL MODULE: ./node_modules/@ant-design/colors/es/index.js + 2 modules
var colors_es = __webpack_require__(84898);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/shared/genColorMapToken.js
var genColorMapToken = __webpack_require__(57);
// EXTERNAL MODULE: ./node_modules/@ant-design/fast-color/es/index.js + 1 modules
var fast_color_es = __webpack_require__(15063);
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/dark/colorAlgorithm.js

const getAlphaColor = (baseColor, alpha) => new fast_color_es/* FastColor */.t(baseColor).setA(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new fast_color_es/* FastColor */.t(baseColor);
  return instance.lighten(brightness).toHexString();
};
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/dark/colors.js


const generateColorPalettes = baseColor => {
  const colors = (0,colors_es/* generate */.R_)(baseColor, {
    theme: 'dark'
  });
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[6],
    6: colors[5],
    7: colors[4],
    8: colors[6],
    9: colors[5],
    10: colors[4]
    // 8: colors[9],
    // 9: colors[8],
    // 10: colors[7],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || '#000';
  const colorTextBase = textBaseColor || '#fff';
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.85),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.18),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.12),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.08),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.04),
    colorBgSolid: getAlphaColor(colorTextBase, 0.95),
    colorBgSolidHover: getAlphaColor(colorTextBase, 1),
    colorBgSolidActive: getAlphaColor(colorTextBase, 0.9),
    colorBgElevated: getSolidColor(colorBgBase, 12),
    colorBgContainer: getSolidColor(colorBgBase, 8),
    colorBgLayout: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getSolidColor(colorBgBase, 26),
    colorBgBlur: getAlphaColor(colorTextBase, 0.04),
    colorBorder: getSolidColor(colorBgBase, 26),
    colorBorderSecondary: getSolidColor(colorBgBase, 19)
  };
};
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/dark/index.js





const dark_derivative = (token, mapToken) => {
  const colorPalettes = Object.keys(seed/* defaultPresetColors */.M).map(colorKey => {
    const colors = (0,colors_es/* generate */.R_)(token[colorKey], {
      theme: 'dark'
    });
    return Array.from({
      length: 10
    }, () => 1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      prev[`${colorKey}${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = Object.assign(Object.assign({}, prev), cur);
    return prev;
  }, {});
  const mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : (0,themes_default/* default */.Z)(token);
  const colorMapToken = (0,genColorMapToken/* default */.Z)(token, {
    generateColorPalettes: generateColorPalettes,
    generateNeutralColorPalettes: generateNeutralColorPalettes
  });
  return Object.assign(Object.assign(Object.assign(Object.assign({}, mergedMapToken), colorPalettes), colorMapToken), {
    // Customize selected item background color
    // https://github.com/ant-design/ant-design/issues/30524#issuecomment-871961867
    colorPrimaryBg: colorMapToken.colorPrimaryBorder,
    colorPrimaryBgHover: colorMapToken.colorPrimaryBorderHover
  });
};
/* harmony default export */ var dark = (dark_derivative);
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/index.js
"use client";






// ZombieJ: We export as object to user but array in internal.
// This is used to minimize the bundle size for antd package but safe to refactor as object also.
// Please do not export internal `useToken` directly to avoid something export unexpected.
/** Get current context Design Token. Will be different if you are using nest theme config. */
function theme_useToken() {
  const [theme, token, hashId] = (0,useToken/* default */.ZP)();
  return {
    theme,
    token,
    hashId
  };
}
/* harmony default export */ var theme = ({
  /** Default seedToken */
  defaultSeed: context/* defaultConfig */.u_.token,
  useToken: theme_useToken,
  defaultAlgorithm: themes_default/* default */.Z,
  darkAlgorithm: dark,
  compactAlgorithm: compact,
  getDesignToken: theme_getDesignToken,
  /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */
  defaultConfig: context/* defaultConfig */.u_,
  /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */
  _internalContext: context/* DesignTokenContext */.Mj
});

/***/ }),

/***/ 8796:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ PresetColors; }
/* harmony export */ });
const PresetColors = ['blue', 'purple', 'cyan', 'green', 'magenta', 'pink', 'red', 'orange', 'yellow', 'volcano', 'geekblue', 'lime', 'gold'];

/***/ }),

/***/ 98719:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ genPresetColor; }
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8796);

function genPresetColor(token, genCss) {
  return _interface__WEBPACK_IMPORTED_MODULE_0__/* .PresetColors */ .i.reduce((prev, colorKey) => {
    const lightColor = token[`${colorKey}1`];
    const lightBorderColor = token[`${colorKey}3`];
    const darkColor = token[`${colorKey}6`];
    const textColor = token[`${colorKey}7`];
    return Object.assign(Object.assign({}, prev), genCss(colorKey, {
      lightColor,
      lightBorderColor,
      darkColor,
      textColor
    }));
  }, {});
}

/***/ }),

/***/ 29171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ rc_dropdown_es; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/@rc-component/trigger/es/index.js + 11 modules
var es = __webpack_require__(40228);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/hooks/useAccessibility.js



var ESC = KeyCode/* default */.Z.ESC,
  TAB = KeyCode/* default */.Z.TAB;
function useAccessibility(_ref) {
  var visible = _ref.visible,
    triggerRef = _ref.triggerRef,
    onVisibleChange = _ref.onVisibleChange,
    autoFocus = _ref.autoFocus,
    overlayRef = _ref.overlayRef;
  var focusMenuRef = react.useRef(false);
  var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus() {
    if (visible) {
      var _triggerRef$current, _triggerRef$current$f;
      (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || (_triggerRef$current$f = _triggerRef$current.focus) === null || _triggerRef$current$f === void 0 || _triggerRef$current$f.call(_triggerRef$current);
      onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(false);
    }
  };
  var focusMenu = function focusMenu() {
    var _overlayRef$current;
    if ((_overlayRef$current = overlayRef.current) !== null && _overlayRef$current !== void 0 && _overlayRef$current.focus) {
      overlayRef.current.focus();
      focusMenuRef.current = true;
      return true;
    }
    return false;
  };
  var handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case ESC:
        handleCloseMenuAndReturnFocus();
        break;
      case TAB:
        {
          var focusResult = false;
          if (!focusMenuRef.current) {
            focusResult = focusMenu();
          }
          if (focusResult) {
            event.preventDefault();
          } else {
            handleCloseMenuAndReturnFocus();
          }
          break;
        }
    }
  };
  react.useEffect(function () {
    if (visible) {
      window.addEventListener("keydown", handleKeyDown);
      if (autoFocus) {
        // FIXME: hack with raf
        (0,raf/* default */.Z)(focusMenu, 3);
      }
      return function () {
        window.removeEventListener("keydown", handleKeyDown);
        focusMenuRef.current = false;
      };
    }
    return function () {
      focusMenuRef.current = false;
    };
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps
}
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/Overlay.js


var Overlay = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var overlay = props.overlay,
    arrow = props.arrow,
    prefixCls = props.prefixCls;
  var overlayNode = (0,react.useMemo)(function () {
    var overlayElement;
    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }
    return overlayElement;
  }, [overlay]);
  var composedRef = (0,es_ref/* composeRef */.sQ)(ref, (0,es_ref/* getNodeRef */.C4)(overlayNode));
  return /*#__PURE__*/react.createElement(react.Fragment, null, arrow && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-arrow")
  }), /*#__PURE__*/react.cloneElement(overlayNode, {
    ref: (0,es_ref/* supportRef */.Yr)(overlayNode) ? composedRef : undefined
  }));
});
/* harmony default export */ var es_Overlay = (Overlay);
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};
/* harmony default export */ var es_placements = (placements);
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/Dropdown.js




var _excluded = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];







function Dropdown(props, ref) {
  var _children$props;
  var _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? false : _props$arrow,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,
    transitionName = props.transitionName,
    animation = props.animation,
    align = props.align,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
    _props$placements = props.placements,
    placements = _props$placements === void 0 ? es_placements : _props$placements,
    getPopupContainer = props.getPopupContainer,
    showAction = props.showAction,
    hideAction = props.hideAction,
    overlayClassName = props.overlayClassName,
    overlayStyle = props.overlayStyle,
    visible = props.visible,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
    autoFocus = props.autoFocus,
    overlay = props.overlay,
    children = props.children,
    onVisibleChange = props.onVisibleChange,
    otherProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var _React$useState = react.useState(),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    triggerVisible = _React$useState2[0],
    setTriggerVisible = _React$useState2[1];
  var mergedVisible = 'visible' in props ? visible : triggerVisible;
  var triggerRef = react.useRef(null);
  var overlayRef = react.useRef(null);
  var childRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return triggerRef.current;
  });
  var handleVisibleChange = function handleVisibleChange(newVisible) {
    setTriggerVisible(newVisible);
    onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(newVisible);
  };
  useAccessibility({
    visible: mergedVisible,
    triggerRef: childRef,
    onVisibleChange: handleVisibleChange,
    autoFocus: autoFocus,
    overlayRef: overlayRef
  });
  var onClick = function onClick(e) {
    var onOverlayClick = props.onOverlayClick;
    setTriggerVisible(false);
    if (onOverlayClick) {
      onOverlayClick(e);
    }
  };
  var getMenuElement = function getMenuElement() {
    return /*#__PURE__*/react.createElement(es_Overlay, {
      ref: overlayRef,
      overlay: overlay,
      prefixCls: prefixCls,
      arrow: arrow
    });
  };
  var getMenuElementOrLambda = function getMenuElementOrLambda() {
    if (typeof overlay === 'function') {
      return getMenuElement;
    }
    return getMenuElement();
  };
  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {
    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
      alignPoint = props.alignPoint;
    if ('minOverlayWidthMatchTrigger' in props) {
      return minOverlayWidthMatchTrigger;
    }
    return !alignPoint;
  };
  var getOpenClassName = function getOpenClassName() {
    var openClassName = props.openClassName;
    if (openClassName !== undefined) {
      return openClassName;
    }
    return "".concat(prefixCls, "-open");
  };
  var childrenNode = /*#__PURE__*/react.cloneElement(children, {
    className: classnames_default()((_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className, mergedVisible && getOpenClassName()),
    ref: (0,es_ref/* supportRef */.Yr)(children) ? (0,es_ref/* composeRef */.sQ)(childRef, (0,es_ref/* getNodeRef */.C4)(children)) : undefined
  });
  var triggerHideAction = hideAction;
  if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
    triggerHideAction = ['click'];
  }
  return /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
    builtinPlacements: placements
  }, otherProps, {
    prefixCls: prefixCls,
    ref: triggerRef,
    popupClassName: classnames_default()(overlayClassName, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-show-arrow"), arrow)),
    popupStyle: overlayStyle,
    action: trigger,
    showAction: showAction,
    hideAction: triggerHideAction,
    popupPlacement: placement,
    popupAlign: align,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupVisible: mergedVisible,
    stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
    popup: getMenuElementOrLambda(),
    onPopupVisibleChange: handleVisibleChange,
    onPopupClick: onClick,
    getPopupContainer: getPopupContainer
  }), childrenNode);
}
/* harmony default export */ var es_Dropdown = (/*#__PURE__*/react.forwardRef(Dropdown));
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/index.js

/* harmony default export */ var rc_dropdown_es = (es_Dropdown);

/***/ }),

/***/ 80954:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  iz: function() { return /* reexport */ Divider; },
  ck: function() { return /* reexport */ es_MenuItem; },
  BW: function() { return /* reexport */ es_MenuItemGroup; },
  sN: function() { return /* reexport */ es_MenuItem; },
  Wd: function() { return /* reexport */ es_SubMenu; },
  ZP: function() { return /* binding */ rc_menu_es; },
  Xl: function() { return /* reexport */ useFullPath; }
});

// UNUSED EXPORTS: MenuItemGroup

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 5 modules
var es = __webpack_require__(9220);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/Item.js



var _excluded = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"];



// Use shared variable to save bundle size
var UNDEFINED = undefined;
function InternalItem(props, ref) {
  var prefixCls = props.prefixCls,
    invalidate = props.invalidate,
    item = props.item,
    renderItem = props.renderItem,
    responsive = props.responsive,
    responsiveDisabled = props.responsiveDisabled,
    registerSize = props.registerSize,
    itemKey = props.itemKey,
    className = props.className,
    style = props.style,
    children = props.children,
    display = props.display,
    order = props.order,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var mergedHidden = responsive && !display;

  // ================================ Effect ================================
  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }
  react.useEffect(function () {
    return function () {
      internalRegisterSize(null);
    };
  }, []);

  // ================================ Render ================================
  var childNode = renderItem && item !== UNDEFINED ? renderItem(item, {
    index: order
  }) : children;
  var overflowStyle;
  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? 'hidden' : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? 'none' : UNDEFINED,
      position: mergedHidden ? 'absolute' : UNDEFINED
    };
  }
  var overflowProps = {};
  if (mergedHidden) {
    overflowProps['aria-hidden'] = true;
  }
  var itemNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, overflowStyle), style)
  }, overflowProps, restProps, {
    ref: ref
  }), childNode);
  if (responsive) {
    itemNode = /*#__PURE__*/react.createElement(es/* default */.Z, {
      onResize: function onResize(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      },
      disabled: responsiveDisabled
    }, itemNode);
  }
  return itemNode;
}
var Item = /*#__PURE__*/react.forwardRef(InternalItem);
Item.displayName = 'Item';
/* harmony default export */ var es_Item = (Item);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/hooks/channelUpdate.js

function channelUpdate(callback) {
  if (typeof MessageChannel === 'undefined') {
    (0,raf/* default */.Z)(callback);
  } else {
    var channel = new MessageChannel();
    channel.port1.onmessage = function () {
      return callback();
    };
    channel.port2.postMessage(undefined);
  }
}
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/hooks/useEffectState.js





/**
 * Batcher for record any `useEffectState` need update.
 */
function useBatcher() {
  // Updater Trigger
  var updateFuncRef = react.useRef(null);

  // Notify update
  var notifyEffectUpdate = function notifyEffectUpdate(callback) {
    if (!updateFuncRef.current) {
      updateFuncRef.current = [];
      channelUpdate(function () {
        (0,react_dom.unstable_batchedUpdates)(function () {
          updateFuncRef.current.forEach(function (fn) {
            fn();
          });
          updateFuncRef.current = null;
        });
      });
    }
    updateFuncRef.current.push(callback);
  };
  return notifyEffectUpdate;
}

/**
 * Trigger state update by `useLayoutEffect` to save perf.
 */
function useEffectState(notifyEffectUpdate, defaultValue) {
  // Value
  var _React$useState = react.useState(defaultValue),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    stateValue = _React$useState2[0],
    setStateValue = _React$useState2[1];

  // Set State
  var setEffectVal = (0,useEvent/* default */.Z)(function (nextValue) {
    notifyEffectUpdate(function () {
      setStateValue(nextValue);
    });
  });
  return [stateValue, setEffectVal];
}
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/context.js

var OverflowContext = /*#__PURE__*/react.createContext(null);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/RawItem.js


var RawItem_excluded = ["component"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];




var InternalRawItem = function InternalRawItem(props, ref) {
  var context = react.useContext(OverflowContext);

  // Render directly when context not provided
  if (!context) {
    var _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _restProps = (0,objectWithoutProperties/* default */.Z)(props, RawItem_excluded);
    return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, _restProps, {
      ref: ref
    }));
  }
  var contextClassName = context.className,
    restContext = (0,objectWithoutProperties/* default */.Z)(context, _excluded2);
  var className = props.className,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded3);

  // Do not pass context to sub item to avoid multiple measure
  return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({
    ref: ref,
    className: classnames_default()(contextClassName, className)
  }, restContext, restProps)));
};
var RawItem = /*#__PURE__*/react.forwardRef(InternalRawItem);
RawItem.displayName = 'RawItem';
/* harmony default export */ var es_RawItem = (RawItem);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/Overflow.js




var Overflow_excluded = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"];









var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';

function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}
function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
    _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    renderItem = props.renderItem,
    renderRawItem = props.renderRawItem,
    itemKey = props.itemKey,
    _props$itemWidth = props.itemWidth,
    itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
    ssr = props.ssr,
    style = props.style,
    className = props.className,
    maxCount = props.maxCount,
    renderRest = props.renderRest,
    renderRawRest = props.renderRawRest,
    suffix = props.suffix,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    itemComponent = props.itemComponent,
    onVisibleChange = props.onVisibleChange,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, Overflow_excluded);
  var fullySSR = ssr === 'full';
  var notifyEffectUpdate = useBatcher();
  var _useEffectState = useEffectState(notifyEffectUpdate, null),
    _useEffectState2 = (0,slicedToArray/* default */.Z)(_useEffectState, 2),
    containerWidth = _useEffectState2[0],
    setContainerWidth = _useEffectState2[1];
  var mergedContainerWidth = containerWidth || 0;
  var _useEffectState3 = useEffectState(notifyEffectUpdate, new Map()),
    _useEffectState4 = (0,slicedToArray/* default */.Z)(_useEffectState3, 2),
    itemWidths = _useEffectState4[0],
    setItemWidths = _useEffectState4[1];
  var _useEffectState5 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState6 = (0,slicedToArray/* default */.Z)(_useEffectState5, 2),
    prevRestWidth = _useEffectState6[0],
    setPrevRestWidth = _useEffectState6[1];
  var _useEffectState7 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState8 = (0,slicedToArray/* default */.Z)(_useEffectState7, 2),
    restWidth = _useEffectState8[0],
    setRestWidth = _useEffectState8[1];
  var _useEffectState9 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState10 = (0,slicedToArray/* default */.Z)(_useEffectState9, 2),
    suffixWidth = _useEffectState10[0],
    setSuffixWidth = _useEffectState10[1];
  var _useState = (0,react.useState)(null),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    suffixFixedStart = _useState2[0],
    setSuffixFixedStart = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    displayCount = _useState4[0],
    setDisplayCount = _useState4[1];
  var mergedDisplayCount = react.useMemo(function () {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }
    return displayCount || 0;
  }, [displayCount, containerWidth]);
  var _useState5 = (0,react.useState)(false),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    restReady = _useState6[0],
    setRestReady = _useState6[1];
  var itemPrefixCls = "".concat(prefixCls, "-item");

  // Always use the max width to avoid blink
  var mergedRestWidth = Math.max(prevRestWidth, restWidth);

  // ================================= Data =================================
  var isResponsive = maxCount === RESPONSIVE;
  var shouldResponsive = data.length && isResponsive;
  var invalidate = maxCount === INVALIDATE;

  /**
   * When is `responsive`, we will always render rest node to get the real width of it for calculation
   */
  var showRest = shouldResponsive || typeof maxCount === 'number' && data.length > maxCount;
  var mergedData = (0,react.useMemo)(function () {
    var items = data;
    if (shouldResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === 'number') {
      items = data.slice(0, maxCount);
    }
    return items;
  }, [data, itemWidth, containerWidth, maxCount, shouldResponsive]);
  var omittedItems = (0,react.useMemo)(function () {
    if (shouldResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }
    return data.slice(mergedData.length);
  }, [data, mergedData, shouldResponsive, mergedDisplayCount]);

  // ================================= Item =================================
  var getKey = (0,react.useCallback)(function (item, index) {
    var _ref;
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
  }, [itemKey]);
  var mergedRenderItem = (0,react.useCallback)(renderItem || function (item) {
    return item;
  }, [renderItem]);
  function updateDisplayCount(count, suffixFixedStartVal, notReady) {
    // React 18 will sync render even when the value is same in some case.
    // We take `mergedData` as deps which may cause dead loop if it's dynamic generate.
    // ref: https://github.com/ant-design/ant-design/issues/36559
    if (displayCount === count && (suffixFixedStartVal === undefined || suffixFixedStartVal === suffixFixedStart)) {
      return;
    }
    setDisplayCount(count);
    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(count);
    }
    if (suffixFixedStartVal !== undefined) {
      setSuffixFixedStart(suffixFixedStartVal);
    }
  }

  // ================================= Size =================================
  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }
  function registerSize(key, width) {
    setItemWidths(function (origin) {
      var clone = new Map(origin);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      return clone;
    });
  }
  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }
  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  }

  // ================================ Effect ================================
  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }
  (0,useLayoutEffect/* default */.Z)(function () {
    if (mergedContainerWidth && typeof mergedRestWidth === 'number' && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1;

      // When data count change to 0, reset this since not loop will reach
      if (!len) {
        updateDisplayCount(0, null);
        return;
      }
      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i);

        // Fully will always render
        if (fullySSR) {
          currentItemWidth = currentItemWidth || 0;
        }

        // Break since data not ready
        if (currentItemWidth === undefined) {
          updateDisplayCount(i - 1, undefined, true);
          break;
        }

        // Find best match
        totalWidth += currentItemWidth;
        if (
        // Only one means `totalWidth` is the final width
        lastIndex === 0 && totalWidth <= mergedContainerWidth ||
        // Last two width will be the final width
        i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
          // Additional check if match the end
          updateDisplayCount(lastIndex, null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          // Can not hold all the content to show rest
          updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }
      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]);

  // ================================ Render ================================
  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};
  if (suffixFixedStart !== null && shouldResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }
  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: shouldResponsive,
    component: itemComponent,
    invalidate: invalidate
  };

  // >>>>> Choice render fun by `renderRawItem`
  var internalRenderItemNode = renderRawItem ? function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
      key: key,
      value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), {}, {
        order: index,
        item: item,
        itemKey: key,
        registerSize: registerSize,
        display: index <= mergedDisplayCount
      })
    }, renderRawItem(item, index));
  } : function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
      order: index,
      key: key,
      item: item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize: registerSize,
      display: index <= mergedDisplayCount
    }));
  };

  // >>>>> Rest node
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  };
  var mergedRenderRest = renderRest || defaultRenderRest;
  var restNode = renderRawRest ? /*#__PURE__*/react.createElement(OverflowContext.Provider, {
    value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), restContextProps)
  }, renderRawRest(omittedItems)) : /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
  var overflowNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: style,
    ref: ref
  }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
    responsive: isResponsive,
    responsiveDisabled: !shouldResponsive,
    order: mergedDisplayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));
  return isResponsive ? /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: onOverflowResize,
    disabled: !shouldResponsive
  }, overflowNode) : overflowNode;
}
var ForwardOverflow = /*#__PURE__*/react.forwardRef(Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = es_RawItem;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE;

// Convert to generic type
/* harmony default export */ var es_Overflow = (ForwardOverflow);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/index.js

/* harmony default export */ var rc_overflow_es = (es_Overflow);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isEqual.js
var isEqual = __webpack_require__(91881);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/context/IdContext.js

var IdContext = /*#__PURE__*/react.createContext(null);
function getMenuId(uuid, eventKey) {
  if (uuid === undefined) {
    return null;
  }
  return "".concat(uuid, "-").concat(eventKey);
}

/**
 * Get `data-menu-id`
 */
function useMenuId(eventKey) {
  var id = react.useContext(IdContext);
  return getMenuId(id, eventKey);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(56982);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/context/MenuContext.js


var MenuContext_excluded = ["children", "locked"];



var MenuContext = /*#__PURE__*/react.createContext(null);
function mergeProps(origin, target) {
  var clone = (0,objectSpread2/* default */.Z)({}, origin);
  Object.keys(target).forEach(function (key) {
    var value = target[key];
    if (value !== undefined) {
      clone[key] = value;
    }
  });
  return clone;
}
function InheritableContextProvider(_ref) {
  var children = _ref.children,
    locked = _ref.locked,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, MenuContext_excluded);
  var context = react.useContext(MenuContext);
  var inheritableContext = (0,useMemo/* default */.Z)(function () {
    return mergeProps(context, restProps);
  }, [context, restProps], function (prev, next) {
    return !locked && (prev[0] !== next[0] || !(0,isEqual/* default */.Z)(prev[1], next[1], true));
  });
  return /*#__PURE__*/react.createElement(MenuContext.Provider, {
    value: inheritableContext
  }, children);
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/context/PathContext.js


var EmptyList = [];

// ========================= Path Register =========================

var PathRegisterContext = /*#__PURE__*/react.createContext(null);
function useMeasure() {
  return react.useContext(PathRegisterContext);
}

// ========================= Path Tracker ==========================
var PathTrackerContext = /*#__PURE__*/react.createContext(EmptyList);
function useFullPath(eventKey) {
  var parentKeyPath = react.useContext(PathTrackerContext);
  return react.useMemo(function () {
    return eventKey !== undefined ? [].concat((0,toConsumableArray/* default */.Z)(parentKeyPath), [eventKey]) : parentKeyPath;
  }, [parentKeyPath, eventKey]);
}

// =========================== Path User ===========================

var PathUserContext = /*#__PURE__*/react.createContext(null);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/context/PrivateContext.js

var PrivateContext = /*#__PURE__*/react.createContext({});
/* harmony default export */ var context_PrivateContext = (PrivateContext);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(5110);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/focus.js


function focusable(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if ((0,isVisible/* default */.Z)(node)) {
    var nodeName = node.nodeName.toLowerCase();
    var isFocusableElement =
    // Focusable element
    ['input', 'select', 'textarea', 'button'].includes(nodeName) ||
    // Editable element
    node.isContentEditable ||
    // Anchor with href element
    nodeName === 'a' && !!node.getAttribute('href');

    // Get tabIndex
    var tabIndexAttr = node.getAttribute('tabindex');
    var tabIndexNum = Number(tabIndexAttr);

    // Parse as number if validate
    var tabIndex = null;
    if (tabIndexAttr && !Number.isNaN(tabIndexNum)) {
      tabIndex = tabIndexNum;
    } else if (isFocusableElement && tabIndex === null) {
      tabIndex = 0;
    }

    // Block focusable if disabled
    if (isFocusableElement && node.disabled) {
      tabIndex = null;
    }
    return tabIndex !== null && (tabIndex >= 0 || includePositive && tabIndex < 0);
  }
  return false;
}
function getFocusNodeList(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var res = (0,toConsumableArray/* default */.Z)(node.querySelectorAll('*')).filter(function (child) {
    return focusable(child, includePositive);
  });
  if (focusable(node, includePositive)) {
    res.unshift(node);
  }
  return res;
}
var lastFocusElement = null;

/** @deprecated Do not use since this may failed when used in async */
function saveLastFocusNode() {
  lastFocusElement = document.activeElement;
}

/** @deprecated Do not use since this may failed when used in async */
function clearLastFocusNode() {
  lastFocusElement = null;
}

/** @deprecated Do not use since this may failed when used in async */
function backLastFocusNode() {
  if (lastFocusElement) {
    try {
      // 元素可能已经被移动了
      lastFocusElement.focus();

      /* eslint-disable no-empty */
    } catch (e) {
      // empty
    }
    /* eslint-enable no-empty */
  }
}
function limitTabRange(node, e) {
  if (e.keyCode === 9) {
    var tabNodeList = getFocusNodeList(node);
    var lastTabNode = tabNodeList[e.shiftKey ? 0 : tabNodeList.length - 1];
    var leavingTab = lastTabNode === document.activeElement || node === document.activeElement;
    if (leavingTab) {
      var target = tabNodeList[e.shiftKey ? tabNodeList.length - 1 : 0];
      target.focus();
      e.preventDefault();
    }
  }
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useAccessibility.js






// destruct to reduce minify size
var LEFT = KeyCode/* default */.Z.LEFT,
  RIGHT = KeyCode/* default */.Z.RIGHT,
  UP = KeyCode/* default */.Z.UP,
  DOWN = KeyCode/* default */.Z.DOWN,
  ENTER = KeyCode/* default */.Z.ENTER,
  ESC = KeyCode/* default */.Z.ESC,
  HOME = KeyCode/* default */.Z.HOME,
  END = KeyCode/* default */.Z.END;
var ArrowKeys = [UP, DOWN, LEFT, RIGHT];
function getOffset(mode, isRootLevel, isRtl, which) {
  var _offsets;
  var prev = 'prev';
  var next = 'next';
  var children = 'children';
  var parent = 'parent';

  // Inline enter is special that we use unique operation
  if (mode === 'inline' && which === ENTER) {
    return {
      inlineTrigger: true
    };
  }
  var inline = (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, UP, prev), DOWN, next);
  var horizontal = (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, LEFT, isRtl ? next : prev), RIGHT, isRtl ? prev : next), DOWN, children), ENTER, children);
  var vertical = (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, UP, prev), DOWN, next), ENTER, children), ESC, parent), LEFT, isRtl ? children : parent), RIGHT, isRtl ? parent : children);
  var offsets = {
    inline: inline,
    horizontal: horizontal,
    vertical: vertical,
    inlineSub: inline,
    horizontalSub: vertical,
    verticalSub: vertical
  };
  var type = (_offsets = offsets["".concat(mode).concat(isRootLevel ? '' : 'Sub')]) === null || _offsets === void 0 ? void 0 : _offsets[which];
  switch (type) {
    case prev:
      return {
        offset: -1,
        sibling: true
      };
    case next:
      return {
        offset: 1,
        sibling: true
      };
    case parent:
      return {
        offset: -1,
        sibling: false
      };
    case children:
      return {
        offset: 1,
        sibling: false
      };
    default:
      return null;
  }
}
function findContainerUL(element) {
  var current = element;
  while (current) {
    if (current.getAttribute('data-menu-list')) {
      return current;
    }
    current = current.parentElement;
  }

  // Normally should not reach this line
  /* istanbul ignore next */
  return null;
}

/**
 * Find focused element within element set provided
 */
function getFocusElement(activeElement, elements) {
  var current = activeElement || document.activeElement;
  while (current) {
    if (elements.has(current)) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}

/**
 * Get focusable elements from the element set under provided container
 */
function getFocusableElements(container, elements) {
  var list = getFocusNodeList(container, true);
  return list.filter(function (ele) {
    return elements.has(ele);
  });
}
function getNextFocusElement(parentQueryContainer, elements, focusMenuElement) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  // Key on the menu item will not get validate parent container
  if (!parentQueryContainer) {
    return null;
  }

  // List current level menu item elements
  var sameLevelFocusableMenuElementList = getFocusableElements(parentQueryContainer, elements);

  // Find next focus index
  var count = sameLevelFocusableMenuElementList.length;
  var focusIndex = sameLevelFocusableMenuElementList.findIndex(function (ele) {
    return focusMenuElement === ele;
  });
  if (offset < 0) {
    if (focusIndex === -1) {
      focusIndex = count - 1;
    } else {
      focusIndex -= 1;
    }
  } else if (offset > 0) {
    focusIndex += 1;
  }
  focusIndex = (focusIndex + count) % count;

  // Focus menu item
  return sameLevelFocusableMenuElementList[focusIndex];
}
var refreshElements = function refreshElements(keys, id) {
  var elements = new Set();
  var key2element = new Map();
  var element2key = new Map();
  keys.forEach(function (key) {
    var element = document.querySelector("[data-menu-id='".concat(getMenuId(id, key), "']"));
    if (element) {
      elements.add(element);
      element2key.set(element, key);
      key2element.set(key, element);
    }
  });
  return {
    elements: elements,
    key2element: key2element,
    element2key: element2key
  };
};
function useAccessibility(mode, activeKey, isRtl, id, containerRef, getKeys, getKeyPath, triggerActiveKey, triggerAccessibilityOpen, originOnKeyDown) {
  var rafRef = react.useRef();
  var activeRef = react.useRef();
  activeRef.current = activeKey;
  var cleanRaf = function cleanRaf() {
    raf/* default */.Z.cancel(rafRef.current);
  };
  react.useEffect(function () {
    return function () {
      cleanRaf();
    };
  }, []);
  return function (e) {
    var which = e.which;
    if ([].concat(ArrowKeys, [ENTER, ESC, HOME, END]).includes(which)) {
      var keys = getKeys();
      var refreshedElements = refreshElements(keys, id);
      var _refreshedElements = refreshedElements,
        elements = _refreshedElements.elements,
        key2element = _refreshedElements.key2element,
        element2key = _refreshedElements.element2key;

      // First we should find current focused MenuItem/SubMenu element
      var activeElement = key2element.get(activeKey);
      var focusMenuElement = getFocusElement(activeElement, elements);
      var focusMenuKey = element2key.get(focusMenuElement);
      var offsetObj = getOffset(mode, getKeyPath(focusMenuKey, true).length === 1, isRtl, which);

      // Some mode do not have fully arrow operation like inline
      if (!offsetObj && which !== HOME && which !== END) {
        return;
      }

      // Arrow prevent default to avoid page scroll
      if (ArrowKeys.includes(which) || [HOME, END].includes(which)) {
        e.preventDefault();
      }
      var tryFocus = function tryFocus(menuElement) {
        if (menuElement) {
          var focusTargetElement = menuElement;

          // Focus to link instead of menu item if possible
          var link = menuElement.querySelector('a');
          if (link !== null && link !== void 0 && link.getAttribute('href')) {
            focusTargetElement = link;
          }
          var targetKey = element2key.get(menuElement);
          triggerActiveKey(targetKey);

          /**
           * Do not `useEffect` here since `tryFocus` may trigger async
           * which makes React sync update the `activeKey`
           * that force render before `useRef` set the next activeKey
           */
          cleanRaf();
          rafRef.current = (0,raf/* default */.Z)(function () {
            if (activeRef.current === targetKey) {
              focusTargetElement.focus();
            }
          });
        }
      };
      if ([HOME, END].includes(which) || offsetObj.sibling || !focusMenuElement) {
        // ========================== Sibling ==========================
        // Find walkable focus menu element container
        var parentQueryContainer;
        if (!focusMenuElement || mode === 'inline') {
          parentQueryContainer = containerRef.current;
        } else {
          parentQueryContainer = findContainerUL(focusMenuElement);
        }

        // Get next focus element
        var targetElement;
        var focusableElements = getFocusableElements(parentQueryContainer, elements);
        if (which === HOME) {
          targetElement = focusableElements[0];
        } else if (which === END) {
          targetElement = focusableElements[focusableElements.length - 1];
        } else {
          targetElement = getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offsetObj.offset);
        }
        // Focus menu item
        tryFocus(targetElement);

        // ======================= InlineTrigger =======================
      } else if (offsetObj.inlineTrigger) {
        // Inline trigger no need switch to sub menu item
        triggerAccessibilityOpen(focusMenuKey);
        // =========================== Level ===========================
      } else if (offsetObj.offset > 0) {
        triggerAccessibilityOpen(focusMenuKey, true);
        cleanRaf();
        rafRef.current = (0,raf/* default */.Z)(function () {
          // Async should resync elements
          refreshedElements = refreshElements(keys, id);
          var controlId = focusMenuElement.getAttribute('aria-controls');
          var subQueryContainer = document.getElementById(controlId);

          // Get sub focusable menu item
          var targetElement = getNextFocusElement(subQueryContainer, refreshedElements.elements);

          // Focus menu item
          tryFocus(targetElement);
        }, 5);
      } else if (offsetObj.offset < 0) {
        var keyPath = getKeyPath(focusMenuKey, true);
        var parentKey = keyPath[keyPath.length - 2];
        var parentMenuElement = key2element.get(parentKey);

        // Focus menu item
        triggerAccessibilityOpen(parentKey, false);
        tryFocus(parentMenuElement);
      }
    }

    // Pass origin key down event
    originOnKeyDown === null || originOnKeyDown === void 0 || originOnKeyDown(e);
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/timeUtil.js
function nextSlice(callback) {
  /* istanbul ignore next */
  Promise.resolve().then(callback);
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useKeyRecords.js






var PATH_SPLIT = '__RC_UTIL_PATH_SPLIT__';
var getPathStr = function getPathStr(keyPath) {
  return keyPath.join(PATH_SPLIT);
};
var getPathKeys = function getPathKeys(keyPathStr) {
  return keyPathStr.split(PATH_SPLIT);
};
var OVERFLOW_KEY = 'rc-menu-more';
function useKeyRecords() {
  var _React$useState = react.useState({}),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    internalForceUpdate = _React$useState2[1];
  var key2pathRef = (0,react.useRef)(new Map());
  var path2keyRef = (0,react.useRef)(new Map());
  var _React$useState3 = react.useState([]),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    overflowKeys = _React$useState4[0],
    setOverflowKeys = _React$useState4[1];
  var updateRef = (0,react.useRef)(0);
  var destroyRef = (0,react.useRef)(false);
  var forceUpdate = function forceUpdate() {
    if (!destroyRef.current) {
      internalForceUpdate({});
    }
  };
  var registerPath = (0,react.useCallback)(function (key, keyPath) {
    // Warning for invalidate or duplicated `key`
    if (false) {}

    // Fill map
    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.set(connectedPath, key);
    key2pathRef.current.set(key, connectedPath);
    updateRef.current += 1;
    var id = updateRef.current;
    nextSlice(function () {
      if (id === updateRef.current) {
        forceUpdate();
      }
    });
  }, []);
  var unregisterPath = (0,react.useCallback)(function (key, keyPath) {
    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.delete(connectedPath);
    key2pathRef.current.delete(key);
  }, []);
  var refreshOverflowKeys = (0,react.useCallback)(function (keys) {
    setOverflowKeys(keys);
  }, []);
  var getKeyPath = (0,react.useCallback)(function (eventKey, includeOverflow) {
    var fullPath = key2pathRef.current.get(eventKey) || '';
    var keys = getPathKeys(fullPath);
    if (includeOverflow && overflowKeys.includes(keys[0])) {
      keys.unshift(OVERFLOW_KEY);
    }
    return keys;
  }, [overflowKeys]);
  var isSubPathKey = (0,react.useCallback)(function (pathKeys, eventKey) {
    return pathKeys.filter(function (item) {
      return item !== undefined;
    }).some(function (pathKey) {
      var pathKeyList = getKeyPath(pathKey, true);
      return pathKeyList.includes(eventKey);
    });
  }, [getKeyPath]);
  var getKeys = function getKeys() {
    var keys = (0,toConsumableArray/* default */.Z)(key2pathRef.current.keys());
    if (overflowKeys.length) {
      keys.push(OVERFLOW_KEY);
    }
    return keys;
  };

  /**
   * Find current key related child path keys
   */
  var getSubPathKeys = (0,react.useCallback)(function (key) {
    var connectedPath = "".concat(key2pathRef.current.get(key)).concat(PATH_SPLIT);
    var pathKeys = new Set();
    (0,toConsumableArray/* default */.Z)(path2keyRef.current.keys()).forEach(function (pathKey) {
      if (pathKey.startsWith(connectedPath)) {
        pathKeys.add(path2keyRef.current.get(pathKey));
      }
    });
    return pathKeys;
  }, []);
  react.useEffect(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return {
    // Register
    registerPath: registerPath,
    unregisterPath: unregisterPath,
    refreshOverflowKeys: refreshOverflowKeys,
    // Util
    isSubPathKey: isSubPathKey,
    getKeyPath: getKeyPath,
    getKeys: getKeys,
    getSubPathKeys: getSubPathKeys
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useMemoCallback.js


/**
 * Cache callback function that always return same ref instead.
 * This is used for context optimization.
 */
function useMemoCallback(func) {
  var funRef = react.useRef(func);
  funRef.current = func;
  var callback = react.useCallback(function () {
    var _funRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_funRef$current = funRef.current) === null || _funRef$current === void 0 ? void 0 : _funRef$current.call.apply(_funRef$current, [funRef].concat(args));
  }, []);
  return func ? callback : undefined;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useUUID.js



var uniquePrefix = Math.random().toFixed(5).toString().slice(2);
var internalId = 0;
function useUUID(id) {
  var _useMergedState = (0,useMergedState/* default */.Z)(id, {
      value: id
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    uuid = _useMergedState2[0],
    setUUID = _useMergedState2[1];
  react.useEffect(function () {
    internalId += 1;
    var newId =  false ? 0 : "".concat(uniquePrefix, "-").concat(internalId);
    setUUID("rc-menu-uuid-".concat(newId));
  }, []);
  return uuid;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper = __webpack_require__(29388);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useActive.js


function useActive(eventKey, disabled, onMouseEnter, onMouseLeave) {
  var _React$useContext = react.useContext(MenuContext),
    activeKey = _React$useContext.activeKey,
    onActive = _React$useContext.onActive,
    onInactive = _React$useContext.onInactive;
  var ret = {
    active: activeKey === eventKey
  };

  // Skip when disabled
  if (!disabled) {
    ret.onMouseEnter = function (domEvent) {
      onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter({
        key: eventKey,
        domEvent: domEvent
      });
      onActive(eventKey);
    };
    ret.onMouseLeave = function (domEvent) {
      onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave({
        key: eventKey,
        domEvent: domEvent
      });
      onInactive(eventKey);
    };
  }
  return ret;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useDirectionStyle.js


function useDirectionStyle(level) {
  var _React$useContext = react.useContext(MenuContext),
    mode = _React$useContext.mode,
    rtl = _React$useContext.rtl,
    inlineIndent = _React$useContext.inlineIndent;
  if (mode !== 'inline') {
    return null;
  }
  var len = level;
  return rtl ? {
    paddingRight: len * inlineIndent
  } : {
    paddingLeft: len * inlineIndent
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/Icon.js


function Icon(_ref) {
  var icon = _ref.icon,
    props = _ref.props,
    children = _ref.children;
  var iconNode;
  if (icon === null || icon === false) {
    return null;
  }
  if (typeof icon === 'function') {
    iconNode = /*#__PURE__*/react.createElement(icon, (0,objectSpread2/* default */.Z)({}, props));
  } else if (typeof icon !== "boolean") {
    // Compatible for origin definition
    iconNode = icon;
  }
  return iconNode || children || null;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/warnUtil.js

var warnUtil_excluded = ["item"];


/**
 * `onClick` event return `info.item` which point to react node directly.
 * We should warning this since it will not work on FC.
 */
function warnItemProp(_ref) {
  var item = _ref.item,
    restInfo = (0,objectWithoutProperties/* default */.Z)(_ref, warnUtil_excluded);
  Object.defineProperty(restInfo, 'item', {
    get: function get() {
      (0,warning/* default */.ZP)(false, '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.');
      return item;
    }
  });
  return restInfo;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/MenuItem.js









var MenuItem_excluded = ["title", "attribute", "elementRef"],
  MenuItem_excluded2 = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"],
  MenuItem_excluded3 = ["active"];















// Since Menu event provide the `info.item` which point to the MenuItem node instance.
// We have to use class component here.
// This should be removed from doc & api in future.
var LegacyMenuItem = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(LegacyMenuItem, _React$Component);
  var _super = (0,createSuper/* default */.Z)(LegacyMenuItem);
  function LegacyMenuItem() {
    (0,classCallCheck/* default */.Z)(this, LegacyMenuItem);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.Z)(LegacyMenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        title = _this$props.title,
        attribute = _this$props.attribute,
        elementRef = _this$props.elementRef,
        restProps = (0,objectWithoutProperties/* default */.Z)(_this$props, MenuItem_excluded);

      // Here the props are eventually passed to the DOM element.
      // React does not recognize non-standard attributes.
      // Therefore, remove the props that is not used here.
      // ref: https://github.com/ant-design/ant-design/issues/41395
      var passedProps = (0,omit/* default */.Z)(restProps, ['eventKey', 'popupClassName', 'popupOffset', 'onTitleClick']);
      (0,warning/* default */.ZP)(!attribute, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.');
      return /*#__PURE__*/react.createElement(rc_overflow_es.Item, (0,esm_extends/* default */.Z)({}, attribute, {
        title: typeof title === 'string' ? title : undefined
      }, passedProps, {
        ref: elementRef
      }));
    }
  }]);
  return LegacyMenuItem;
}(react.Component);
/**
 * Real Menu Item component
 */
var InternalMenuItem = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var style = props.style,
    className = props.className,
    eventKey = props.eventKey,
    warnKey = props.warnKey,
    disabled = props.disabled,
    itemIcon = props.itemIcon,
    children = props.children,
    role = props.role,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onClick = props.onClick,
    onKeyDown = props.onKeyDown,
    onFocus = props.onFocus,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, MenuItem_excluded2);
  var domDataId = useMenuId(eventKey);
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    onItemClick = _React$useContext.onItemClick,
    contextDisabled = _React$useContext.disabled,
    overflowDisabled = _React$useContext.overflowDisabled,
    contextItemIcon = _React$useContext.itemIcon,
    selectedKeys = _React$useContext.selectedKeys,
    onActive = _React$useContext.onActive;
  var _React$useContext2 = react.useContext(context_PrivateContext),
    _internalRenderMenuItem = _React$useContext2._internalRenderMenuItem;
  var itemCls = "".concat(prefixCls, "-item");
  var legacyMenuItemRef = react.useRef();
  var elementRef = react.useRef();
  var mergedDisabled = contextDisabled || disabled;
  var mergedEleRef = (0,es_ref/* useComposeRef */.x1)(ref, elementRef);
  var connectedKeys = useFullPath(eventKey);

  // ================================ Warn ================================
  if (false) {}

  // ============================= Info =============================
  var getEventInfo = function getEventInfo(e) {
    return {
      key: eventKey,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: (0,toConsumableArray/* default */.Z)(connectedKeys).reverse(),
      item: legacyMenuItemRef.current,
      domEvent: e
    };
  };

  // ============================= Icon =============================
  var mergedItemIcon = itemIcon || contextItemIcon;

  // ============================ Active ============================
  var _useActive = useActive(eventKey, mergedDisabled, onMouseEnter, onMouseLeave),
    active = _useActive.active,
    activeProps = (0,objectWithoutProperties/* default */.Z)(_useActive, MenuItem_excluded3);

  // ============================ Select ============================
  var selected = selectedKeys.includes(eventKey);

  // ======================== DirectionStyle ========================
  var directionStyle = useDirectionStyle(connectedKeys.length);

  // ============================ Events ============================
  var onInternalClick = function onInternalClick(e) {
    if (mergedDisabled) {
      return;
    }
    var info = getEventInfo(e);
    onClick === null || onClick === void 0 || onClick(warnItemProp(info));
    onItemClick(info);
  };
  var onInternalKeyDown = function onInternalKeyDown(e) {
    onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
    if (e.which === KeyCode/* default */.Z.ENTER) {
      var info = getEventInfo(e);

      // Legacy. Key will also trigger click event
      onClick === null || onClick === void 0 || onClick(warnItemProp(info));
      onItemClick(info);
    }
  };

  /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */
  var onInternalFocus = function onInternalFocus(e) {
    onActive(eventKey);
    onFocus === null || onFocus === void 0 || onFocus(e);
  };

  // ============================ Render ============================
  var optionRoleProps = {};
  if (props.role === 'option') {
    optionRoleProps['aria-selected'] = selected;
  }
  var renderNode = /*#__PURE__*/react.createElement(LegacyMenuItem, (0,esm_extends/* default */.Z)({
    ref: legacyMenuItemRef,
    elementRef: mergedEleRef,
    role: role === null ? 'none' : role || 'menuitem',
    tabIndex: disabled ? null : -1,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId
  }, (0,omit/* default */.Z)(restProps, ['extra']), activeProps, optionRoleProps, {
    component: "li",
    "aria-disabled": disabled,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, directionStyle), style),
    className: classnames_default()(itemCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(itemCls, "-active"), active), "".concat(itemCls, "-selected"), selected), "".concat(itemCls, "-disabled"), mergedDisabled), className),
    onClick: onInternalClick,
    onKeyDown: onInternalKeyDown,
    onFocus: onInternalFocus
  }), children, /*#__PURE__*/react.createElement(Icon, {
    props: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      isSelected: selected
    }),
    icon: mergedItemIcon
  }));
  if (_internalRenderMenuItem) {
    renderNode = _internalRenderMenuItem(renderNode, props, {
      selected: selected
    });
  }
  return renderNode;
});
function MenuItem(props, ref) {
  var eventKey = props.eventKey;

  // ==================== Record KeyPath ====================
  var measure = useMeasure();
  var connectedKeyPath = useFullPath(eventKey);

  // eslint-disable-next-line consistent-return
  react.useEffect(function () {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function () {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);
  if (measure) {
    return null;
  }

  // ======================== Render ========================
  return /*#__PURE__*/react.createElement(InternalMenuItem, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref
  }));
}
/* harmony default export */ var es_MenuItem = (/*#__PURE__*/react.forwardRef(MenuItem));
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/SubMenuList.js


var SubMenuList_excluded = ["className", "children"];



var InternalSubMenuList = function InternalSubMenuList(_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, SubMenuList_excluded);
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    mode = _React$useContext.mode,
    rtl = _React$useContext.rtl;
  return /*#__PURE__*/react.createElement("ul", (0,esm_extends/* default */.Z)({
    className: classnames_default()(prefixCls, rtl && "".concat(prefixCls, "-rtl"), "".concat(prefixCls, "-sub"), "".concat(prefixCls, "-").concat(mode === 'inline' ? 'inline' : 'vertical'), className),
    role: "menu"
  }, restProps, {
    "data-menu-list": true,
    ref: ref
  }), children);
};
var SubMenuList = /*#__PURE__*/react.forwardRef(InternalSubMenuList);
SubMenuList.displayName = 'SubMenuList';
/* harmony default export */ var SubMenu_SubMenuList = (SubMenuList);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/commonUtil.js



function parseChildren(children, keyPath) {
  return (0,toArray/* default */.Z)(children).map(function (child, index) {
    if ( /*#__PURE__*/react.isValidElement(child)) {
      var _eventKey, _child$props;
      var key = child.key;
      var eventKey = (_eventKey = (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.eventKey) !== null && _eventKey !== void 0 ? _eventKey : key;
      var emptyKey = eventKey === null || eventKey === undefined;
      if (emptyKey) {
        eventKey = "tmp_key-".concat([].concat((0,toConsumableArray/* default */.Z)(keyPath), [index]).join('-'));
      }
      var cloneProps = {
        key: eventKey,
        eventKey: eventKey
      };
      if (false) {}
      return /*#__PURE__*/react.cloneElement(child, cloneProps);
    }
    return child;
  });
}
// EXTERNAL MODULE: ./node_modules/@rc-component/trigger/es/index.js + 11 modules
var trigger_es = __webpack_require__(40228);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow
  }
};
var placementsRtl = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow
  },
  rightTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow
  },
  rightBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow
  },
  leftTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow
  },
  leftBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow
  }
};
/* harmony default export */ var es_placements = ((/* unused pure expression or super */ null && (placements)));
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/motionUtil.js
function getMotion(mode, motion, defaultMotions) {
  if (motion) {
    return motion;
  }
  if (defaultMotions) {
    return defaultMotions[mode] || defaultMotions.other;
  }
  return undefined;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/PopupTrigger.js










var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};
function PopupTrigger(_ref) {
  var prefixCls = _ref.prefixCls,
    visible = _ref.visible,
    children = _ref.children,
    popup = _ref.popup,
    popupStyle = _ref.popupStyle,
    popupClassName = _ref.popupClassName,
    popupOffset = _ref.popupOffset,
    disabled = _ref.disabled,
    mode = _ref.mode,
    onVisibleChange = _ref.onVisibleChange;
  var _React$useContext = react.useContext(MenuContext),
    getPopupContainer = _React$useContext.getPopupContainer,
    rtl = _React$useContext.rtl,
    subMenuOpenDelay = _React$useContext.subMenuOpenDelay,
    subMenuCloseDelay = _React$useContext.subMenuCloseDelay,
    builtinPlacements = _React$useContext.builtinPlacements,
    triggerSubMenuAction = _React$useContext.triggerSubMenuAction,
    forceSubMenuRender = _React$useContext.forceSubMenuRender,
    rootClassName = _React$useContext.rootClassName,
    motion = _React$useContext.motion,
    defaultMotions = _React$useContext.defaultMotions;
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    innerVisible = _React$useState2[0],
    setInnerVisible = _React$useState2[1];
  var placement = rtl ? (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, placementsRtl), builtinPlacements) : (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, placements), builtinPlacements);
  var popupPlacement = popupPlacementMap[mode];
  var targetMotion = getMotion(mode, motion, defaultMotions);
  var targetMotionRef = react.useRef(targetMotion);
  if (mode !== 'inline') {
    /**
     * PopupTrigger is only used for vertical and horizontal types.
     * When collapsed is unfolded, the inline animation will destroy the vertical animation.
     */
    targetMotionRef.current = targetMotion;
  }
  var mergedMotion = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, targetMotionRef.current), {}, {
    leavedClassName: "".concat(prefixCls, "-hidden"),
    removeOnLeave: false,
    motionAppear: true
  });

  // Delay to change visible
  var visibleRef = react.useRef();
  react.useEffect(function () {
    visibleRef.current = (0,raf/* default */.Z)(function () {
      setInnerVisible(visible);
    });
    return function () {
      raf/* default */.Z.cancel(visibleRef.current);
    };
  }, [visible]);
  return /*#__PURE__*/react.createElement(trigger_es/* default */.Z, {
    prefixCls: prefixCls,
    popupClassName: classnames_default()("".concat(prefixCls, "-popup"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), rtl), popupClassName, rootClassName),
    stretch: mode === 'horizontal' ? 'minWidth' : null,
    getPopupContainer: getPopupContainer,
    builtinPlacements: placement,
    popupPlacement: popupPlacement,
    popupVisible: innerVisible,
    popup: popup,
    popupStyle: popupStyle,
    popupAlign: popupOffset && {
      offset: popupOffset
    },
    action: disabled ? [] : [triggerSubMenuAction],
    mouseEnterDelay: subMenuOpenDelay,
    mouseLeaveDelay: subMenuCloseDelay,
    onPopupVisibleChange: onVisibleChange,
    forceRender: forceSubMenuRender,
    popupMotion: mergedMotion,
    fresh: true
  }, children);
}
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 13 modules
var rc_motion_es = __webpack_require__(29372);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/InlineSubMenuList.js








function InlineSubMenuList(_ref) {
  var id = _ref.id,
    open = _ref.open,
    keyPath = _ref.keyPath,
    children = _ref.children;
  var fixedMode = 'inline';
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    forceSubMenuRender = _React$useContext.forceSubMenuRender,
    motion = _React$useContext.motion,
    defaultMotions = _React$useContext.defaultMotions,
    mode = _React$useContext.mode;

  // Always use latest mode check
  var sameModeRef = react.useRef(false);
  sameModeRef.current = mode === fixedMode;

  // We record `destroy` mark here since when mode change from `inline` to others.
  // The inline list should remove when motion end.
  var _React$useState = react.useState(!sameModeRef.current),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    destroy = _React$useState2[0],
    setDestroy = _React$useState2[1];
  var mergedOpen = sameModeRef.current ? open : false;

  // ================================= Effect =================================
  // Reset destroy state when mode change back
  react.useEffect(function () {
    if (sameModeRef.current) {
      setDestroy(false);
    }
  }, [mode]);

  // ================================= Render =================================
  var mergedMotion = (0,objectSpread2/* default */.Z)({}, getMotion(fixedMode, motion, defaultMotions));

  // No need appear since nest inlineCollapse changed
  if (keyPath.length > 1) {
    mergedMotion.motionAppear = false;
  }

  // Hide inline list when mode changed and motion end
  var originOnVisibleChanged = mergedMotion.onVisibleChanged;
  mergedMotion.onVisibleChanged = function (newVisible) {
    if (!sameModeRef.current && !newVisible) {
      setDestroy(true);
    }
    return originOnVisibleChanged === null || originOnVisibleChanged === void 0 ? void 0 : originOnVisibleChanged(newVisible);
  };
  if (destroy) {
    return null;
  }
  return /*#__PURE__*/react.createElement(InheritableContextProvider, {
    mode: fixedMode,
    locked: !sameModeRef.current
  }, /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, (0,esm_extends/* default */.Z)({
    visible: mergedOpen
  }, mergedMotion, {
    forceRender: forceSubMenuRender,
    removeOnLeave: false,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }), function (_ref2) {
    var motionClassName = _ref2.className,
      motionStyle = _ref2.style;
    return /*#__PURE__*/react.createElement(SubMenu_SubMenuList, {
      id: id,
      className: motionClassName,
      style: motionStyle
    }, children);
  }));
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/index.js





var SubMenu_excluded = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"],
  SubMenu_excluded2 = ["active"];

















var InternalSubMenu = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var style = props.style,
    className = props.className,
    title = props.title,
    eventKey = props.eventKey,
    warnKey = props.warnKey,
    disabled = props.disabled,
    internalPopupClose = props.internalPopupClose,
    children = props.children,
    itemIcon = props.itemIcon,
    expandIcon = props.expandIcon,
    popupClassName = props.popupClassName,
    popupOffset = props.popupOffset,
    popupStyle = props.popupStyle,
    onClick = props.onClick,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onTitleClick = props.onTitleClick,
    onTitleMouseEnter = props.onTitleMouseEnter,
    onTitleMouseLeave = props.onTitleMouseLeave,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, SubMenu_excluded);
  var domDataId = useMenuId(eventKey);
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    mode = _React$useContext.mode,
    openKeys = _React$useContext.openKeys,
    contextDisabled = _React$useContext.disabled,
    overflowDisabled = _React$useContext.overflowDisabled,
    activeKey = _React$useContext.activeKey,
    selectedKeys = _React$useContext.selectedKeys,
    contextItemIcon = _React$useContext.itemIcon,
    contextExpandIcon = _React$useContext.expandIcon,
    onItemClick = _React$useContext.onItemClick,
    onOpenChange = _React$useContext.onOpenChange,
    onActive = _React$useContext.onActive;
  var _React$useContext2 = react.useContext(context_PrivateContext),
    _internalRenderSubMenuItem = _React$useContext2._internalRenderSubMenuItem;
  var _React$useContext3 = react.useContext(PathUserContext),
    isSubPathKey = _React$useContext3.isSubPathKey;
  var connectedPath = useFullPath();
  var subMenuPrefixCls = "".concat(prefixCls, "-submenu");
  var mergedDisabled = contextDisabled || disabled;
  var elementRef = react.useRef();
  var popupRef = react.useRef();

  // ================================ Warn ================================
  if (false) {}

  // ================================ Icon ================================
  var mergedItemIcon = itemIcon !== null && itemIcon !== void 0 ? itemIcon : contextItemIcon;
  var mergedExpandIcon = expandIcon !== null && expandIcon !== void 0 ? expandIcon : contextExpandIcon;

  // ================================ Open ================================
  var originOpen = openKeys.includes(eventKey);
  var open = !overflowDisabled && originOpen;

  // =============================== Select ===============================
  var childrenSelected = isSubPathKey(selectedKeys, eventKey);

  // =============================== Active ===============================
  var _useActive = useActive(eventKey, mergedDisabled, onTitleMouseEnter, onTitleMouseLeave),
    active = _useActive.active,
    activeProps = (0,objectWithoutProperties/* default */.Z)(_useActive, SubMenu_excluded2);

  // Fallback of active check to avoid hover on menu title or disabled item
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    childrenActive = _React$useState2[0],
    setChildrenActive = _React$useState2[1];
  var triggerChildrenActive = function triggerChildrenActive(newActive) {
    if (!mergedDisabled) {
      setChildrenActive(newActive);
    }
  };
  var onInternalMouseEnter = function onInternalMouseEnter(domEvent) {
    triggerChildrenActive(true);
    onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter({
      key: eventKey,
      domEvent: domEvent
    });
  };
  var onInternalMouseLeave = function onInternalMouseLeave(domEvent) {
    triggerChildrenActive(false);
    onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave({
      key: eventKey,
      domEvent: domEvent
    });
  };
  var mergedActive = react.useMemo(function () {
    if (active) {
      return active;
    }
    if (mode !== 'inline') {
      return childrenActive || isSubPathKey([activeKey], eventKey);
    }
    return false;
  }, [mode, active, activeKey, childrenActive, eventKey, isSubPathKey]);

  // ========================== DirectionStyle ==========================
  var directionStyle = useDirectionStyle(connectedPath.length);

  // =============================== Events ===============================
  // >>>> Title click
  var onInternalTitleClick = function onInternalTitleClick(e) {
    // Skip if disabled
    if (mergedDisabled) {
      return;
    }
    onTitleClick === null || onTitleClick === void 0 || onTitleClick({
      key: eventKey,
      domEvent: e
    });

    // Trigger open by click when mode is `inline`
    if (mode === 'inline') {
      onOpenChange(eventKey, !originOpen);
    }
  };

  // >>>> Context for children click
  var onMergedItemClick = useMemoCallback(function (info) {
    onClick === null || onClick === void 0 || onClick(warnItemProp(info));
    onItemClick(info);
  });

  // >>>>> Visible change
  var onPopupVisibleChange = function onPopupVisibleChange(newVisible) {
    if (mode !== 'inline') {
      onOpenChange(eventKey, newVisible);
    }
  };

  /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */
  var onInternalFocus = function onInternalFocus() {
    onActive(eventKey);
  };

  // =============================== Render ===============================
  var popupId = domDataId && "".concat(domDataId, "-popup");
  var expandIconNode = react.useMemo(function () {
    return /*#__PURE__*/react.createElement(Icon, {
      icon: mode !== 'horizontal' ? mergedExpandIcon : undefined,
      props: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
        isOpen: open,
        // [Legacy] Not sure why need this mark
        isSubMenu: true
      })
    }, /*#__PURE__*/react.createElement("i", {
      className: "".concat(subMenuPrefixCls, "-arrow")
    }));
  }, [mode, mergedExpandIcon, props, open, subMenuPrefixCls]);

  // >>>>> Title
  var titleNode = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    role: "menuitem",
    style: directionStyle,
    className: "".concat(subMenuPrefixCls, "-title"),
    tabIndex: mergedDisabled ? null : -1,
    ref: elementRef,
    title: typeof title === 'string' ? title : null,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId,
    "aria-expanded": open,
    "aria-haspopup": true,
    "aria-controls": popupId,
    "aria-disabled": mergedDisabled,
    onClick: onInternalTitleClick,
    onFocus: onInternalFocus
  }, activeProps), title, expandIconNode);

  // Cache mode if it change to `inline` which do not have popup motion
  var triggerModeRef = react.useRef(mode);
  if (mode !== 'inline' && connectedPath.length > 1) {
    triggerModeRef.current = 'vertical';
  } else {
    triggerModeRef.current = mode;
  }
  if (!overflowDisabled) {
    var triggerMode = triggerModeRef.current;

    // Still wrap with Trigger here since we need avoid react re-mount dom node
    // Which makes motion failed
    titleNode = /*#__PURE__*/react.createElement(PopupTrigger, {
      mode: triggerMode,
      prefixCls: subMenuPrefixCls,
      visible: !internalPopupClose && open && mode !== 'inline',
      popupClassName: popupClassName,
      popupOffset: popupOffset,
      popupStyle: popupStyle,
      popup: /*#__PURE__*/react.createElement(InheritableContextProvider
      // Special handle of horizontal mode
      , {
        mode: triggerMode === 'horizontal' ? 'vertical' : triggerMode
      }, /*#__PURE__*/react.createElement(SubMenu_SubMenuList, {
        id: popupId,
        ref: popupRef
      }, children)),
      disabled: mergedDisabled,
      onVisibleChange: onPopupVisibleChange
    }, titleNode);
  }

  // >>>>> List node
  var listNode = /*#__PURE__*/react.createElement(rc_overflow_es.Item, (0,esm_extends/* default */.Z)({
    ref: ref,
    role: "none"
  }, restProps, {
    component: "li",
    style: style,
    className: classnames_default()(subMenuPrefixCls, "".concat(subMenuPrefixCls, "-").concat(mode), className, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(subMenuPrefixCls, "-open"), open), "".concat(subMenuPrefixCls, "-active"), mergedActive), "".concat(subMenuPrefixCls, "-selected"), childrenSelected), "".concat(subMenuPrefixCls, "-disabled"), mergedDisabled)),
    onMouseEnter: onInternalMouseEnter,
    onMouseLeave: onInternalMouseLeave
  }), titleNode, !overflowDisabled && /*#__PURE__*/react.createElement(InlineSubMenuList, {
    id: popupId,
    open: open,
    keyPath: connectedPath
  }, children));
  if (_internalRenderSubMenuItem) {
    listNode = _internalRenderSubMenuItem(listNode, props, {
      selected: childrenSelected,
      active: mergedActive,
      open: open,
      disabled: mergedDisabled
    });
  }

  // >>>>> Render
  return /*#__PURE__*/react.createElement(InheritableContextProvider, {
    onItemClick: onMergedItemClick,
    mode: mode === 'horizontal' ? 'vertical' : mode,
    itemIcon: mergedItemIcon,
    expandIcon: mergedExpandIcon
  }, listNode);
});
var SubMenu = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var eventKey = props.eventKey,
    children = props.children;
  var connectedKeyPath = useFullPath(eventKey);
  var childList = parseChildren(children, connectedKeyPath);

  // ==================== Record KeyPath ====================
  var measure = useMeasure();

  // eslint-disable-next-line consistent-return
  react.useEffect(function () {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function () {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);
  var renderNode;

  // ======================== Render ========================
  if (measure) {
    renderNode = childList;
  } else {
    renderNode = /*#__PURE__*/react.createElement(InternalSubMenu, (0,esm_extends/* default */.Z)({
      ref: ref
    }, props), childList);
  }
  return /*#__PURE__*/react.createElement(PathTrackerContext.Provider, {
    value: connectedKeyPath
  }, renderNode);
});
if (false) {}
/* harmony default export */ var es_SubMenu = (SubMenu);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/Divider.js




function Divider(_ref) {
  var className = _ref.className,
    style = _ref.style;
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls;
  var measure = useMeasure();
  if (measure) {
    return null;
  }
  return /*#__PURE__*/react.createElement("li", {
    role: "separator",
    className: classnames_default()("".concat(prefixCls, "-item-divider"), className),
    style: style
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/MenuItemGroup.js


var MenuItemGroup_excluded = ["className", "title", "eventKey", "children"];






var InternalMenuItemGroup = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var className = props.className,
    title = props.title,
    eventKey = props.eventKey,
    children = props.children,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, MenuItemGroup_excluded);
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls;
  var groupPrefixCls = "".concat(prefixCls, "-item-group");
  return /*#__PURE__*/react.createElement("li", (0,esm_extends/* default */.Z)({
    ref: ref,
    role: "presentation"
  }, restProps, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: classnames_default()(groupPrefixCls, className)
  }), /*#__PURE__*/react.createElement("div", {
    role: "presentation",
    className: "".concat(groupPrefixCls, "-title"),
    title: typeof title === 'string' ? title : undefined
  }, title), /*#__PURE__*/react.createElement("ul", {
    role: "group",
    className: "".concat(groupPrefixCls, "-list")
  }, children));
});
var MenuItemGroup = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var eventKey = props.eventKey,
    children = props.children;
  var connectedKeyPath = useFullPath(eventKey);
  var childList = parseChildren(children, connectedKeyPath);
  var measure = useMeasure();
  if (measure) {
    return childList;
  }
  return /*#__PURE__*/react.createElement(InternalMenuItemGroup, (0,esm_extends/* default */.Z)({
    ref: ref
  }, (0,omit/* default */.Z)(props, ['warnKey'])), childList);
});
if (false) {}
/* harmony default export */ var es_MenuItemGroup = (MenuItemGroup);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/nodeUtil.js




var nodeUtil_excluded = ["label", "children", "key", "type", "extra"];






function convertItemsToNodes(list, components, prefixCls) {
  var MergedMenuItem = components.item,
    MergedMenuItemGroup = components.group,
    MergedSubMenu = components.submenu,
    MergedDivider = components.divider;
  return (list || []).map(function (opt, index) {
    if (opt && (0,esm_typeof/* default */.Z)(opt) === 'object') {
      var _ref = opt,
        label = _ref.label,
        children = _ref.children,
        key = _ref.key,
        type = _ref.type,
        extra = _ref.extra,
        restProps = (0,objectWithoutProperties/* default */.Z)(_ref, nodeUtil_excluded);
      var mergedKey = key !== null && key !== void 0 ? key : "tmp-".concat(index);

      // MenuItemGroup & SubMenuItem
      if (children || type === 'group') {
        if (type === 'group') {
          // Group
          return /*#__PURE__*/react.createElement(MergedMenuItemGroup, (0,esm_extends/* default */.Z)({
            key: mergedKey
          }, restProps, {
            title: label
          }), convertItemsToNodes(children, components, prefixCls));
        }

        // Sub Menu
        return /*#__PURE__*/react.createElement(MergedSubMenu, (0,esm_extends/* default */.Z)({
          key: mergedKey
        }, restProps, {
          title: label
        }), convertItemsToNodes(children, components, prefixCls));
      }

      // MenuItem & Divider
      if (type === 'divider') {
        return /*#__PURE__*/react.createElement(MergedDivider, (0,esm_extends/* default */.Z)({
          key: mergedKey
        }, restProps));
      }
      return /*#__PURE__*/react.createElement(MergedMenuItem, (0,esm_extends/* default */.Z)({
        key: mergedKey
      }, restProps, {
        extra: extra
      }), label, (!!extra || extra === 0) && /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-item-extra")
      }, extra));
    }
    return null;
  }).filter(function (opt) {
    return opt;
  });
}
function parseItems(children, items, keyPath, components, prefixCls) {
  var childNodes = children;
  var mergedComponents = (0,objectSpread2/* default */.Z)({
    divider: Divider,
    item: es_MenuItem,
    group: es_MenuItemGroup,
    submenu: es_SubMenu
  }, components);
  if (items) {
    childNodes = convertItemsToNodes(items, mergedComponents, prefixCls);
  }
  return parseChildren(childNodes, keyPath);
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/Menu.js






var Menu_excluded = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem", "_internalComponents"];





















/**
 * Menu modify after refactor:
 * ## Add
 * - disabled
 *
 * ## Remove
 * - openTransitionName
 * - openAnimation
 * - onDestroy
 * - siderCollapsed: Seems antd do not use this prop (Need test in antd)
 * - collapsedWidth: Seems this logic should be handle by antd Layout.Sider
 */

// optimize for render
var EMPTY_LIST = [];
var Menu = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _childList$;
  var _ref = props,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-menu' : _ref$prefixCls,
    rootClassName = _ref.rootClassName,
    style = _ref.style,
    className = _ref.className,
    _ref$tabIndex = _ref.tabIndex,
    tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
    items = _ref.items,
    children = _ref.children,
    direction = _ref.direction,
    id = _ref.id,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'vertical' : _ref$mode,
    inlineCollapsed = _ref.inlineCollapsed,
    disabled = _ref.disabled,
    disabledOverflow = _ref.disabledOverflow,
    _ref$subMenuOpenDelay = _ref.subMenuOpenDelay,
    subMenuOpenDelay = _ref$subMenuOpenDelay === void 0 ? 0.1 : _ref$subMenuOpenDelay,
    _ref$subMenuCloseDela = _ref.subMenuCloseDelay,
    subMenuCloseDelay = _ref$subMenuCloseDela === void 0 ? 0.1 : _ref$subMenuCloseDela,
    forceSubMenuRender = _ref.forceSubMenuRender,
    defaultOpenKeys = _ref.defaultOpenKeys,
    openKeys = _ref.openKeys,
    activeKey = _ref.activeKey,
    defaultActiveFirst = _ref.defaultActiveFirst,
    _ref$selectable = _ref.selectable,
    selectable = _ref$selectable === void 0 ? true : _ref$selectable,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    defaultSelectedKeys = _ref.defaultSelectedKeys,
    selectedKeys = _ref.selectedKeys,
    onSelect = _ref.onSelect,
    onDeselect = _ref.onDeselect,
    _ref$inlineIndent = _ref.inlineIndent,
    inlineIndent = _ref$inlineIndent === void 0 ? 24 : _ref$inlineIndent,
    motion = _ref.motion,
    defaultMotions = _ref.defaultMotions,
    _ref$triggerSubMenuAc = _ref.triggerSubMenuAction,
    triggerSubMenuAction = _ref$triggerSubMenuAc === void 0 ? 'hover' : _ref$triggerSubMenuAc,
    builtinPlacements = _ref.builtinPlacements,
    itemIcon = _ref.itemIcon,
    expandIcon = _ref.expandIcon,
    _ref$overflowedIndica = _ref.overflowedIndicator,
    overflowedIndicator = _ref$overflowedIndica === void 0 ? '...' : _ref$overflowedIndica,
    overflowedIndicatorPopupClassName = _ref.overflowedIndicatorPopupClassName,
    getPopupContainer = _ref.getPopupContainer,
    onClick = _ref.onClick,
    onOpenChange = _ref.onOpenChange,
    onKeyDown = _ref.onKeyDown,
    openAnimation = _ref.openAnimation,
    openTransitionName = _ref.openTransitionName,
    _internalRenderMenuItem = _ref._internalRenderMenuItem,
    _internalRenderSubMenuItem = _ref._internalRenderSubMenuItem,
    _internalComponents = _ref._internalComponents,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, Menu_excluded);
  var _React$useMemo = react.useMemo(function () {
      return [parseItems(children, items, EMPTY_LIST, _internalComponents, prefixCls), parseItems(children, items, EMPTY_LIST, {}, prefixCls)];
    }, [children, items, _internalComponents]),
    _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 2),
    childList = _React$useMemo2[0],
    measureChildList = _React$useMemo2[1];
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    mounted = _React$useState2[0],
    setMounted = _React$useState2[1];
  var containerRef = react.useRef();
  var uuid = useUUID(id);
  var isRtl = direction === 'rtl';

  // ========================= Warn =========================
  if (false) {}

  // ========================= Open =========================
  var _useMergedState = (0,useMergedState/* default */.Z)(defaultOpenKeys, {
      value: openKeys,
      postState: function postState(keys) {
        return keys || EMPTY_LIST;
      }
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    mergedOpenKeys = _useMergedState2[0],
    setMergedOpenKeys = _useMergedState2[1];

  // React 18 will merge mouse event which means we open key will not sync
  // ref: https://github.com/ant-design/ant-design/issues/38818
  var triggerOpenKeys = function triggerOpenKeys(keys) {
    var forceFlush = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    function doUpdate() {
      setMergedOpenKeys(keys);
      onOpenChange === null || onOpenChange === void 0 || onOpenChange(keys);
    }
    if (forceFlush) {
      (0,react_dom.flushSync)(doUpdate);
    } else {
      doUpdate();
    }
  };

  // >>>>> Cache & Reset open keys when inlineCollapsed changed
  var _React$useState3 = react.useState(mergedOpenKeys),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    inlineCacheOpenKeys = _React$useState4[0],
    setInlineCacheOpenKeys = _React$useState4[1];
  var mountRef = react.useRef(false);

  // ========================= Mode =========================
  var _React$useMemo3 = react.useMemo(function () {
      if ((mode === 'inline' || mode === 'vertical') && inlineCollapsed) {
        return ['vertical', inlineCollapsed];
      }
      return [mode, false];
    }, [mode, inlineCollapsed]),
    _React$useMemo4 = (0,slicedToArray/* default */.Z)(_React$useMemo3, 2),
    mergedMode = _React$useMemo4[0],
    mergedInlineCollapsed = _React$useMemo4[1];
  var isInlineMode = mergedMode === 'inline';
  var _React$useState5 = react.useState(mergedMode),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    internalMode = _React$useState6[0],
    setInternalMode = _React$useState6[1];
  var _React$useState7 = react.useState(mergedInlineCollapsed),
    _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
    internalInlineCollapsed = _React$useState8[0],
    setInternalInlineCollapsed = _React$useState8[1];
  react.useEffect(function () {
    setInternalMode(mergedMode);
    setInternalInlineCollapsed(mergedInlineCollapsed);
    if (!mountRef.current) {
      return;
    }
    // Synchronously update MergedOpenKeys
    if (isInlineMode) {
      setMergedOpenKeys(inlineCacheOpenKeys);
    } else {
      // Trigger open event in case its in control
      triggerOpenKeys(EMPTY_LIST);
    }
  }, [mergedMode, mergedInlineCollapsed]);

  // ====================== Responsive ======================
  var _React$useState9 = react.useState(0),
    _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
    lastVisibleIndex = _React$useState10[0],
    setLastVisibleIndex = _React$useState10[1];
  var allVisible = lastVisibleIndex >= childList.length - 1 || internalMode !== 'horizontal' || disabledOverflow;

  // Cache
  react.useEffect(function () {
    if (isInlineMode) {
      setInlineCacheOpenKeys(mergedOpenKeys);
    }
  }, [mergedOpenKeys]);
  react.useEffect(function () {
    mountRef.current = true;
    return function () {
      mountRef.current = false;
    };
  }, []);

  // ========================= Path =========================
  var _useKeyRecords = useKeyRecords(),
    registerPath = _useKeyRecords.registerPath,
    unregisterPath = _useKeyRecords.unregisterPath,
    refreshOverflowKeys = _useKeyRecords.refreshOverflowKeys,
    isSubPathKey = _useKeyRecords.isSubPathKey,
    getKeyPath = _useKeyRecords.getKeyPath,
    getKeys = _useKeyRecords.getKeys,
    getSubPathKeys = _useKeyRecords.getSubPathKeys;
  var registerPathContext = react.useMemo(function () {
    return {
      registerPath: registerPath,
      unregisterPath: unregisterPath
    };
  }, [registerPath, unregisterPath]);
  var pathUserContext = react.useMemo(function () {
    return {
      isSubPathKey: isSubPathKey
    };
  }, [isSubPathKey]);
  react.useEffect(function () {
    refreshOverflowKeys(allVisible ? EMPTY_LIST : childList.slice(lastVisibleIndex + 1).map(function (child) {
      return child.key;
    }));
  }, [lastVisibleIndex, allVisible]);

  // ======================== Active ========================
  var _useMergedState3 = (0,useMergedState/* default */.Z)(activeKey || defaultActiveFirst && ((_childList$ = childList[0]) === null || _childList$ === void 0 ? void 0 : _childList$.key), {
      value: activeKey
    }),
    _useMergedState4 = (0,slicedToArray/* default */.Z)(_useMergedState3, 2),
    mergedActiveKey = _useMergedState4[0],
    setMergedActiveKey = _useMergedState4[1];
  var onActive = useMemoCallback(function (key) {
    setMergedActiveKey(key);
  });
  var onInactive = useMemoCallback(function () {
    setMergedActiveKey(undefined);
  });
  (0,react.useImperativeHandle)(ref, function () {
    return {
      list: containerRef.current,
      focus: function focus(options) {
        var _childList$find;
        var keys = getKeys();
        var _refreshElements = refreshElements(keys, uuid),
          elements = _refreshElements.elements,
          key2element = _refreshElements.key2element,
          element2key = _refreshElements.element2key;
        var focusableElements = getFocusableElements(containerRef.current, elements);
        var shouldFocusKey = mergedActiveKey !== null && mergedActiveKey !== void 0 ? mergedActiveKey : focusableElements[0] ? element2key.get(focusableElements[0]) : (_childList$find = childList.find(function (node) {
          return !node.props.disabled;
        })) === null || _childList$find === void 0 ? void 0 : _childList$find.key;
        var elementToFocus = key2element.get(shouldFocusKey);
        if (shouldFocusKey && elementToFocus) {
          var _elementToFocus$focus;
          elementToFocus === null || elementToFocus === void 0 || (_elementToFocus$focus = elementToFocus.focus) === null || _elementToFocus$focus === void 0 || _elementToFocus$focus.call(elementToFocus, options);
        }
      }
    };
  });

  // ======================== Select ========================
  // >>>>> Select keys
  var _useMergedState5 = (0,useMergedState/* default */.Z)(defaultSelectedKeys || [], {
      value: selectedKeys,
      // Legacy convert key to array
      postState: function postState(keys) {
        if (Array.isArray(keys)) {
          return keys;
        }
        if (keys === null || keys === undefined) {
          return EMPTY_LIST;
        }
        return [keys];
      }
    }),
    _useMergedState6 = (0,slicedToArray/* default */.Z)(_useMergedState5, 2),
    mergedSelectKeys = _useMergedState6[0],
    setMergedSelectKeys = _useMergedState6[1];

  // >>>>> Trigger select
  var triggerSelection = function triggerSelection(info) {
    if (selectable) {
      // Insert or Remove
      var targetKey = info.key;
      var exist = mergedSelectKeys.includes(targetKey);
      var newSelectKeys;
      if (multiple) {
        if (exist) {
          newSelectKeys = mergedSelectKeys.filter(function (key) {
            return key !== targetKey;
          });
        } else {
          newSelectKeys = [].concat((0,toConsumableArray/* default */.Z)(mergedSelectKeys), [targetKey]);
        }
      } else {
        newSelectKeys = [targetKey];
      }
      setMergedSelectKeys(newSelectKeys);

      // Trigger event
      var selectInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, info), {}, {
        selectedKeys: newSelectKeys
      });
      if (exist) {
        onDeselect === null || onDeselect === void 0 || onDeselect(selectInfo);
      } else {
        onSelect === null || onSelect === void 0 || onSelect(selectInfo);
      }
    }

    // Whatever selectable, always close it
    if (!multiple && mergedOpenKeys.length && internalMode !== 'inline') {
      triggerOpenKeys(EMPTY_LIST);
    }
  };

  // ========================= Open =========================
  /**
   * Click for item. SubMenu do not have selection status
   */
  var onInternalClick = useMemoCallback(function (info) {
    onClick === null || onClick === void 0 || onClick(warnItemProp(info));
    triggerSelection(info);
  });
  var onInternalOpenChange = useMemoCallback(function (key, open) {
    var newOpenKeys = mergedOpenKeys.filter(function (k) {
      return k !== key;
    });
    if (open) {
      newOpenKeys.push(key);
    } else if (internalMode !== 'inline') {
      // We need find all related popup to close
      var subPathKeys = getSubPathKeys(key);
      newOpenKeys = newOpenKeys.filter(function (k) {
        return !subPathKeys.has(k);
      });
    }
    if (!(0,isEqual/* default */.Z)(mergedOpenKeys, newOpenKeys, true)) {
      triggerOpenKeys(newOpenKeys, true);
    }
  });

  // ==================== Accessibility =====================
  var triggerAccessibilityOpen = function triggerAccessibilityOpen(key, open) {
    var nextOpen = open !== null && open !== void 0 ? open : !mergedOpenKeys.includes(key);
    onInternalOpenChange(key, nextOpen);
  };
  var onInternalKeyDown = useAccessibility(internalMode, mergedActiveKey, isRtl, uuid, containerRef, getKeys, getKeyPath, setMergedActiveKey, triggerAccessibilityOpen, onKeyDown);

  // ======================== Effect ========================
  react.useEffect(function () {
    setMounted(true);
  }, []);

  // ======================= Context ========================
  var privateContext = react.useMemo(function () {
    return {
      _internalRenderMenuItem: _internalRenderMenuItem,
      _internalRenderSubMenuItem: _internalRenderSubMenuItem
    };
  }, [_internalRenderMenuItem, _internalRenderSubMenuItem]);

  // ======================== Render ========================

  // >>>>> Children
  var wrappedChildList = internalMode !== 'horizontal' || disabledOverflow ? childList :
  // Need wrap for overflow dropdown that do not response for open
  childList.map(function (child, index) {
    return (
      /*#__PURE__*/
      // Always wrap provider to avoid sub node re-mount
      react.createElement(InheritableContextProvider, {
        key: child.key,
        overflowDisabled: index > lastVisibleIndex
      }, child)
    );
  });

  // >>>>> Container
  var container = /*#__PURE__*/react.createElement(rc_overflow_es, (0,esm_extends/* default */.Z)({
    id: id,
    ref: containerRef,
    prefixCls: "".concat(prefixCls, "-overflow"),
    component: "ul",
    itemComponent: es_MenuItem,
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-root"), "".concat(prefixCls, "-").concat(internalMode), className, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-inline-collapsed"), internalInlineCollapsed), "".concat(prefixCls, "-rtl"), isRtl), rootClassName),
    dir: direction,
    style: style,
    role: "menu",
    tabIndex: tabIndex,
    data: wrappedChildList,
    renderRawItem: function renderRawItem(node) {
      return node;
    },
    renderRawRest: function renderRawRest(omitItems) {
      // We use origin list since wrapped list use context to prevent open
      var len = omitItems.length;
      var originOmitItems = len ? childList.slice(-len) : null;
      return /*#__PURE__*/react.createElement(es_SubMenu, {
        eventKey: OVERFLOW_KEY,
        title: overflowedIndicator,
        disabled: allVisible,
        internalPopupClose: len === 0,
        popupClassName: overflowedIndicatorPopupClassName
      }, originOmitItems);
    },
    maxCount: internalMode !== 'horizontal' || disabledOverflow ? rc_overflow_es.INVALIDATE : rc_overflow_es.RESPONSIVE,
    ssr: "full",
    "data-menu-list": true,
    onVisibleChange: function onVisibleChange(newLastIndex) {
      setLastVisibleIndex(newLastIndex);
    },
    onKeyDown: onInternalKeyDown
  }, restProps));

  // >>>>> Render
  return /*#__PURE__*/react.createElement(context_PrivateContext.Provider, {
    value: privateContext
  }, /*#__PURE__*/react.createElement(IdContext.Provider, {
    value: uuid
  }, /*#__PURE__*/react.createElement(InheritableContextProvider, {
    prefixCls: prefixCls,
    rootClassName: rootClassName,
    mode: internalMode,
    openKeys: mergedOpenKeys,
    rtl: isRtl
    // Disabled
    ,
    disabled: disabled
    // Motion
    ,
    motion: mounted ? motion : null,
    defaultMotions: mounted ? defaultMotions : null
    // Active
    ,
    activeKey: mergedActiveKey,
    onActive: onActive,
    onInactive: onInactive
    // Selection
    ,
    selectedKeys: mergedSelectKeys
    // Level
    ,
    inlineIndent: inlineIndent
    // Popup
    ,
    subMenuOpenDelay: subMenuOpenDelay,
    subMenuCloseDelay: subMenuCloseDelay,
    forceSubMenuRender: forceSubMenuRender,
    builtinPlacements: builtinPlacements,
    triggerSubMenuAction: triggerSubMenuAction,
    getPopupContainer: getPopupContainer
    // Icon
    ,
    itemIcon: itemIcon,
    expandIcon: expandIcon
    // Events
    ,
    onItemClick: onInternalClick,
    onOpenChange: onInternalOpenChange
  }, /*#__PURE__*/react.createElement(PathUserContext.Provider, {
    value: pathUserContext
  }, container), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'none'
    },
    "aria-hidden": true
  }, /*#__PURE__*/react.createElement(PathRegisterContext.Provider, {
    value: registerPathContext
  }, measureChildList)))));
});
/* harmony default export */ var es_Menu = (Menu);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/index.js







var ExportMenu = es_Menu;
ExportMenu.Item = es_MenuItem;
ExportMenu.SubMenu = es_SubMenu;
ExportMenu.ItemGroup = es_MenuItemGroup;
ExportMenu.Divider = Divider;
/* harmony default export */ var rc_menu_es = (ExportMenu);

/***/ }),

/***/ 9220:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es; }
});

// UNUSED EXPORTS: _rs

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(34203);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/Collection.js

var CollectionContext = /*#__PURE__*/react.createContext(null);
/**
 * Collect all the resize event from children ResizeObserver
 */
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = react.useRef(0);
  var resizeInfosRef = react.useRef([]);
  var onCollectionResize = react.useContext(CollectionContext);
  var onResize = react.useCallback(function (size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size: size,
      element: element,
      data: data
    });
    Promise.resolve().then(function () {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });

    // Continue bubbling if parent exist
    onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /*#__PURE__*/react.createElement(CollectionContext.Provider, {
    value: onResize
  }, children);
}
;// CONCATENATED MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.Math === Math) {
        return __webpack_require__.g;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ var ResizeObserver_es = (index);

;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/utils/observerUtil.js

// =============================== Const ===============================
var elementListeners = new Map();
function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function (listener) {
      return listener(target);
    });
  });
}

// Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new ResizeObserver_es(onResize);

// Dev env only
var _el = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
var _rs = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line

// ============================== Observe ==============================
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper = __webpack_require__(29388);
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js





/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
var DomWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(DomWrapper, _React$Component);
  var _super = (0,createSuper/* default */.Z)(DomWrapper);
  function DomWrapper() {
    (0,classCallCheck/* default */.Z)(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.Z)(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(react.Component);

;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/SingleObserver/index.js








function SingleObserver(props, ref) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = react.useRef(null);
  var wrapperRef = react.useRef(null);
  var onCollectionResize = react.useContext(CollectionContext);

  // =========================== Children ===========================
  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children;

  // ============================= Size =============================
  var sizeRef = react.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });

  // ============================= Ref ==============================
  var canRef = !isRenderProps && /*#__PURE__*/react.isValidElement(mergedChildren) && (0,es_ref/* supportRef */.Yr)(mergedChildren);
  var originRef = canRef ? (0,es_ref/* getNodeRef */.C4)(mergedChildren) : null;
  var mergedRef = (0,es_ref/* useComposeRef */.x1)(originRef, elementRef);
  var getDom = function getDom() {
    var _elementRef$current;
    return (0,findDOMNode/* default */.ZP)(elementRef.current) || (
    // Support `nativeElement` format
    elementRef.current && (0,esm_typeof/* default */.Z)(elementRef.current) === 'object' ? (0,findDOMNode/* default */.ZP)((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || (0,findDOMNode/* default */.ZP)(wrapperRef.current);
  };
  react.useImperativeHandle(ref, function () {
    return getDom();
  });

  // =========================== Observe ============================
  var propsRef = react.useRef(props);
  propsRef.current = props;

  // Handler
  var onInternalResize = react.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
      onResize = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;

    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth: offsetWidth,
        offsetHeight: offsetHeight
      };
      sizeRef.current = size;

      // IE is strange, right?
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });

      // Let collection know what happened
      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(function () {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);

  // Dynamic observe
  react.useEffect(function () {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function () {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);

  // ============================ Render ============================
  return /*#__PURE__*/react.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? /*#__PURE__*/react.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = /*#__PURE__*/react.forwardRef(SingleObserver);
if (false) {}
/* harmony default export */ var es_SingleObserver = (RefSingleObserver);
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/index.js






var INTERNAL_PREFIX_KEY = 'rc-observer-key';


function es_ResizeObserver(props, ref) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : (0,toArray/* default */.Z)(children);
  if (false) {}
  return childNodes.map(function (child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return /*#__PURE__*/react.createElement(es_SingleObserver, (0,esm_extends/* default */.Z)({}, props, {
      key: key,
      ref: index === 0 ? ref : undefined
    }), child);
  });
}
var RefResizeObserver = /*#__PURE__*/react.forwardRef(es_ResizeObserver);
if (false) {}
RefResizeObserver.Collection = Collection;
/* harmony default export */ var es = (RefResizeObserver);

/***/ }),

/***/ 50344:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ toArray; }
/* harmony export */ });
/* harmony import */ var _React_isFragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25517);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0,_React_isFragment__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

/***/ }),

/***/ 5110:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__.Z = (function (element) {
  if (!element) {
    return false;
  }
  if (element instanceof Element) {
    if (element.offsetParent) {
      return true;
    }
    if (element.getBBox) {
      var _getBBox = element.getBBox(),
        width = _getBBox.width,
        height = _getBBox.height;
      if (width || height) {
        return true;
      }
    }
    if (element.getBoundingClientRect) {
      var _element$getBoundingC = element.getBoundingClientRect(),
        _width = _element$getBoundingC.width,
        _height = _element$getBoundingC.height;
      if (_width || _height) {
        return true;
      }
    }
  }
  return false;
});

/***/ }),

/***/ 7028:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* unused harmony export resetUuid */
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97685);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);



function getUseId() {
  // We need fully clone React function here to avoid webpack warning React 17 do not export `useId`
  var fullClone = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2))));
  return fullClone.useId;
}
var uuid = 0;

/** @private Note only worked in develop env. Not work in production. */
function resetUuid() {
  if (false) {}
}
var useOriginId = getUseId();
/* harmony default export */ __webpack_exports__.Z = (useOriginId ?
// Use React `useId`
function useId(id) {
  var reactId = useOriginId();

  // Developer passed id is single source of truth
  if (id) {
    return id;
  }

  // Test env always return mock id
  if (false) {}
  return reactId;
} :
// Use compatible of `useId`
function useCompatId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('ssr-id'),
    _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var nextId = uuid;
    uuid += 1;
    setInnerId("rc_unique_".concat(nextId));
  }, []);

  // Developer passed id is single source of truth
  if (id) {
    return id;
  }

  // Test env always return mock id
  if (false) {}

  // Return react native id or inner id
  return innerId;
});

/***/ }),

/***/ 31131:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__.Z = (function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
});

/***/ }),

/***/ 98423:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ omit; }
/* harmony export */ });
function omit(obj, fields) {
  var clone = Object.assign({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }
  return clone;
}

/***/ })

}]);