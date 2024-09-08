function Kg(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Wf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function qg(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Gf={exports:{}},Fo={},Kf={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wi=Symbol.for("react.element"),Qg=Symbol.for("react.portal"),Yg=Symbol.for("react.fragment"),Jg=Symbol.for("react.strict_mode"),Xg=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),ev=Symbol.for("react.context"),tv=Symbol.for("react.forward_ref"),nv=Symbol.for("react.suspense"),rv=Symbol.for("react.memo"),iv=Symbol.for("react.lazy"),Vc=Symbol.iterator;function sv(t){return t===null||typeof t!="object"?null:(t=Vc&&t[Vc]||t["@@iterator"],typeof t=="function"?t:null)}var qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qf=Object.assign,Yf={};function xr(t,e,n){this.props=t,this.context=e,this.refs=Yf,this.updater=n||qf}xr.prototype.isReactComponent={};xr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jf(){}Jf.prototype=xr.prototype;function mu(t,e,n){this.props=t,this.context=e,this.refs=Yf,this.updater=n||qf}var gu=mu.prototype=new Jf;gu.constructor=mu;Qf(gu,xr.prototype);gu.isPureReactComponent=!0;var Uc=Array.isArray,Xf=Object.prototype.hasOwnProperty,vu={current:null},Zf={key:!0,ref:!0,__self:!0,__source:!0};function eh(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xf.call(e,r)&&!Zf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Wi,type:t,key:s,ref:o,props:i,_owner:vu.current}}function ov(t,e){return{$$typeof:Wi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wi}function av(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fc=/\/+/g;function Ea(t,e){return typeof t=="object"&&t!==null&&t.key!=null?av(""+t.key):e.toString(36)}function Ns(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wi:case Qg:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ea(o,0):r,Uc(i)?(n="",t!=null&&(n=t.replace(Fc,"$&/")+"/"),Ns(i,e,n,"",function(u){return u})):i!=null&&(yu(i)&&(i=ov(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Uc(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ea(s,a);o+=Ns(s,e,n,l,i)}else if(l=sv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ea(s,a++),o+=Ns(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cs(t,e,n){if(t==null)return t;var r=[],i=0;return Ns(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Te={current:null},Os={transition:null},uv={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:Os,ReactCurrentOwner:vu};function th(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:cs,forEach:function(t,e,n){cs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cs(t,function(){e++}),e},toArray:function(t){return cs(t,function(e){return e})||[]},only:function(t){if(!yu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};M.Component=xr;M.Fragment=Yg;M.Profiler=Xg;M.PureComponent=mu;M.StrictMode=Jg;M.Suspense=nv;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uv;M.act=th;M.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xf.call(e,l)&&!Zf.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Wi,type:t.type,key:i,ref:s,props:r,_owner:o}};M.createContext=function(t){return t={$$typeof:ev,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zg,_context:t},t.Consumer=t};M.createElement=eh;M.createFactory=function(t){var e=eh.bind(null,t);return e.type=t,e};M.createRef=function(){return{current:null}};M.forwardRef=function(t){return{$$typeof:tv,render:t}};M.isValidElement=yu;M.lazy=function(t){return{$$typeof:iv,_payload:{_status:-1,_result:t},_init:lv}};M.memo=function(t,e){return{$$typeof:rv,type:t,compare:e===void 0?null:e}};M.startTransition=function(t){var e=Os.transition;Os.transition={};try{t()}finally{Os.transition=e}};M.unstable_act=th;M.useCallback=function(t,e){return Te.current.useCallback(t,e)};M.useContext=function(t){return Te.current.useContext(t)};M.useDebugValue=function(){};M.useDeferredValue=function(t){return Te.current.useDeferredValue(t)};M.useEffect=function(t,e){return Te.current.useEffect(t,e)};M.useId=function(){return Te.current.useId()};M.useImperativeHandle=function(t,e,n){return Te.current.useImperativeHandle(t,e,n)};M.useInsertionEffect=function(t,e){return Te.current.useInsertionEffect(t,e)};M.useLayoutEffect=function(t,e){return Te.current.useLayoutEffect(t,e)};M.useMemo=function(t,e){return Te.current.useMemo(t,e)};M.useReducer=function(t,e,n){return Te.current.useReducer(t,e,n)};M.useRef=function(t){return Te.current.useRef(t)};M.useState=function(t){return Te.current.useState(t)};M.useSyncExternalStore=function(t,e,n){return Te.current.useSyncExternalStore(t,e,n)};M.useTransition=function(){return Te.current.useTransition()};M.version="18.3.1";Kf.exports=M;var E=Kf.exports;const dt=Wf(E),cv=Kg({__proto__:null,default:dt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv=E,fv=Symbol.for("react.element"),hv=Symbol.for("react.fragment"),pv=Object.prototype.hasOwnProperty,mv=dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gv={key:!0,ref:!0,__self:!0,__source:!0};function nh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pv.call(e,r)&&!gv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fv,type:t,key:s,ref:o,props:i,_owner:mv.current}}Fo.Fragment=hv;Fo.jsx=nh;Fo.jsxs=nh;Gf.exports=Fo;var h=Gf.exports,il={},rh={exports:{}},Be={},ih={exports:{}},sh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,D){var L=C.length;C.push(D);e:for(;0<L;){var X=L-1>>>1,se=C[X];if(0<i(se,D))C[X]=D,C[L]=se,L=X;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var D=C[0],L=C.pop();if(L!==D){C[0]=L;e:for(var X=0,se=C.length,ls=se>>>1;X<ls;){var _n=2*(X+1)-1,wa=C[_n],wn=_n+1,us=C[wn];if(0>i(wa,L))wn<se&&0>i(us,wa)?(C[X]=us,C[wn]=L,X=wn):(C[X]=wa,C[_n]=L,X=_n);else if(wn<se&&0>i(us,L))C[X]=us,C[wn]=L,X=wn;else break e}}return D}function i(C,D){var L=C.sortIndex-D.sortIndex;return L!==0?L:C.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,p=3,v=!1,y=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=C)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function w(C){if(_=!1,g(C),!y)if(n(l)!==null)y=!0,ya(T);else{var D=n(u);D!==null&&_a(w,D.startTime-C)}}function T(C,D){y=!1,_&&(_=!1,m(A),A=-1),v=!0;var L=p;try{for(g(D),d=n(l);d!==null&&(!(d.expirationTime>D)||C&&!Le());){var X=d.callback;if(typeof X=="function"){d.callback=null,p=d.priorityLevel;var se=X(d.expirationTime<=D);D=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&r(l),g(D)}else r(l);d=n(l)}if(d!==null)var ls=!0;else{var _n=n(u);_n!==null&&_a(w,_n.startTime-D),ls=!1}return ls}finally{d=null,p=L,v=!1}}var k=!1,R=null,A=-1,z=5,O=-1;function Le(){return!(t.unstable_now()-O<z)}function Fr(){if(R!==null){var C=t.unstable_now();O=C;var D=!0;try{D=R(!0,C)}finally{D?br():(k=!1,R=null)}}else k=!1}var br;if(typeof f=="function")br=function(){f(Fr)};else if(typeof MessageChannel<"u"){var jc=new MessageChannel,Gg=jc.port2;jc.port1.onmessage=Fr,br=function(){Gg.postMessage(null)}}else br=function(){S(Fr,0)};function ya(C){R=C,k||(k=!0,br())}function _a(C,D){A=S(function(){C(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||v||(y=!0,ya(T))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var L=p;p=D;try{return C()}finally{p=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,D){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=p;p=C;try{return D()}finally{p=L}},t.unstable_scheduleCallback=function(C,D,L){var X=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,C){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=L+se,C={id:c++,callback:D,priorityLevel:C,startTime:L,expirationTime:se,sortIndex:-1},L>X?(C.sortIndex=L,e(u,C),n(l)===null&&C===n(u)&&(_?(m(A),A=-1):_=!0,_a(w,L-X))):(C.sortIndex=se,e(l,C),y||v||(y=!0,ya(T))),C},t.unstable_shouldYield=Le,t.unstable_wrapCallback=function(C){var D=p;return function(){var L=p;p=D;try{return C.apply(this,arguments)}finally{p=L}}}})(sh);ih.exports=sh;var vv=ih.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=E,$e=vv;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oh=new Set,mi={};function $n(t,e){vr(t,e),vr(t+"Capture",e)}function vr(t,e){for(mi[t]=e,t=0;t<e.length;t++)oh.add(e[t])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,_v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bc={},zc={};function wv(t){return sl.call(zc,t)?!0:sl.call(bc,t)?!1:_v.test(t)?zc[t]=!0:(bc[t]=!0,!1)}function Ev(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Sv(t,e,n,r){if(e===null||typeof e>"u"||Ev(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pe[t]=new Pe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pe[e]=new Pe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pe[t]=new Pe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pe[t]=new Pe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pe[t]=new Pe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pe[t]=new Pe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pe[t]=new Pe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pe[t]=new Pe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pe[t]=new Pe(t,5,!1,t.toLowerCase(),null,!1,!1)});var _u=/[\-:]([a-z])/g;function wu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_u,wu);pe[e]=new Pe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_u,wu);pe[e]=new Pe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_u,wu);pe[e]=new Pe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pe[t]=new Pe(t,1,!1,t.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pe[t]=new Pe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Eu(t,e,n,r){var i=pe.hasOwnProperty(e)?pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sv(e,n,i,r)&&(n=null),r||i===null?wv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lt=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ds=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),Su=Symbol.for("react.strict_mode"),ol=Symbol.for("react.profiler"),ah=Symbol.for("react.provider"),lh=Symbol.for("react.context"),Iu=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),Tu=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),uh=Symbol.for("react.offscreen"),$c=Symbol.iterator;function zr(t){return t===null||typeof t!="object"?null:(t=$c&&t[$c]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,Sa;function Qr(t){if(Sa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sa=e&&e[1]||""}return`
`+Sa+t}var Ia=!1;function Ta(t,e){if(!t||Ia)return"";Ia=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ia=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qr(t):""}function Iv(t){switch(t.tag){case 5:return Qr(t.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return t=Ta(t.type,!1),t;case 11:return t=Ta(t.type.render,!1),t;case 1:return t=Ta(t.type,!0),t;default:return""}}function ul(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yn:return"Fragment";case Qn:return"Portal";case ol:return"Profiler";case Su:return"StrictMode";case al:return"Suspense";case ll:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lh:return(t.displayName||"Context")+".Consumer";case ah:return(t._context.displayName||"Context")+".Provider";case Iu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tu:return e=t.displayName||null,e!==null?e:ul(t.type)||"Memo";case Ut:e=t._payload,t=t._init;try{return ul(t(e))}catch{}}return null}function Tv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(e);case 8:return e===Su?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ln(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ch(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Pv(t){var e=ch(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fs(t){t._valueTracker||(t._valueTracker=Pv(t))}function dh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ch(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cl(t,e){var n=e.checked;return Q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ln(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fh(t,e){e=e.checked,e!=null&&Eu(t,"checked",e,!1)}function dl(t,e){fh(t,e);var n=ln(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fl(t,e.type,n):e.hasOwnProperty("defaultValue")&&fl(t,e.type,ln(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fl(t,e,n){(e!=="number"||qs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yr=Array.isArray;function lr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ln(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Yr(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ln(n)}}function hh(t,e){var n=ln(e.value),r=ln(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ph(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ph(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hs,mh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hs=hs||document.createElement("div"),hs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function gi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kv=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(t){kv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ti[e]=ti[t]})});function gh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ti.hasOwnProperty(t)&&ti[t]?(""+e).trim():e+"px"}function vh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Cv=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(t,e){if(e){if(Cv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function gl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function Pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yl=null,ur=null,cr=null;function Kc(t){if(t=qi(t)){if(typeof yl!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Ho(e),yl(t.stateNode,t.type,e))}}function yh(t){ur?cr?cr.push(t):cr=[t]:ur=t}function _h(){if(ur){var t=ur,e=cr;if(cr=ur=null,Kc(t),e)for(t=0;t<e.length;t++)Kc(e[t])}}function wh(t,e){return t(e)}function Eh(){}var Pa=!1;function Sh(t,e,n){if(Pa)return t(e,n);Pa=!0;try{return wh(t,e,n)}finally{Pa=!1,(ur!==null||cr!==null)&&(Eh(),_h())}}function vi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ho(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var _l=!1;if(Rt)try{var $r={};Object.defineProperty($r,"passive",{get:function(){_l=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{_l=!1}function Rv(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ni=!1,Qs=null,Ys=!1,wl=null,Av={onError:function(t){ni=!0,Qs=t}};function xv(t,e,n,r,i,s,o,a,l){ni=!1,Qs=null,Rv.apply(Av,arguments)}function Nv(t,e,n,r,i,s,o,a,l){if(xv.apply(this,arguments),ni){if(ni){var u=Qs;ni=!1,Qs=null}else throw Error(I(198));Ys||(Ys=!0,wl=u)}}function Bn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ih(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qc(t){if(Bn(t)!==t)throw Error(I(188))}function Ov(t){var e=t.alternate;if(!e){if(e=Bn(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qc(i),t;if(s===r)return qc(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Th(t){return t=Ov(t),t!==null?Ph(t):null}function Ph(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ph(t);if(e!==null)return e;t=t.sibling}return null}var kh=$e.unstable_scheduleCallback,Qc=$e.unstable_cancelCallback,Dv=$e.unstable_shouldYield,Lv=$e.unstable_requestPaint,Z=$e.unstable_now,Mv=$e.unstable_getCurrentPriorityLevel,ku=$e.unstable_ImmediatePriority,Ch=$e.unstable_UserBlockingPriority,Js=$e.unstable_NormalPriority,jv=$e.unstable_LowPriority,Rh=$e.unstable_IdlePriority,bo=null,ft=null;function Vv(t){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(bo,t,void 0,(t.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:bv,Uv=Math.log,Fv=Math.LN2;function bv(t){return t>>>=0,t===0?32:31-(Uv(t)/Fv|0)|0}var ps=64,ms=4194304;function Jr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Jr(a):(s&=o,s!==0&&(r=Jr(s)))}else o=n&~i,o!==0?r=Jr(o):s!==0&&(r=Jr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tt(e),i=1<<n,r|=t[n],e&=~i;return r}function zv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $v(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=zv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function El(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ah(){var t=ps;return ps<<=1,!(ps&4194240)&&(ps=64),t}function ka(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tt(e),t[e]=n}function Bv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var b=0;function xh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nh,Ru,Oh,Dh,Lh,Sl=!1,gs=[],Qt=null,Yt=null,Jt=null,yi=new Map,_i=new Map,bt=[],Hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yc(t,e){switch(t){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":yi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(e.pointerId)}}function Br(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qi(e),e!==null&&Ru(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Wv(t,e,n,r,i){switch(e){case"focusin":return Qt=Br(Qt,t,e,n,r,i),!0;case"dragenter":return Yt=Br(Yt,t,e,n,r,i),!0;case"mouseover":return Jt=Br(Jt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return yi.set(s,Br(yi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_i.set(s,Br(_i.get(s)||null,t,e,n,r,i)),!0}return!1}function Mh(t){var e=Tn(t.target);if(e!==null){var n=Bn(e);if(n!==null){if(e=n.tag,e===13){if(e=Ih(n),e!==null){t.blockedOn=e,Lh(t.priority,function(){Oh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ds(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Il(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return e=qi(n),e!==null&&Ru(e),t.blockedOn=n,!1;e.shift()}return!0}function Jc(t,e,n){Ds(t)&&n.delete(e)}function Gv(){Sl=!1,Qt!==null&&Ds(Qt)&&(Qt=null),Yt!==null&&Ds(Yt)&&(Yt=null),Jt!==null&&Ds(Jt)&&(Jt=null),yi.forEach(Jc),_i.forEach(Jc)}function Hr(t,e){t.blockedOn===e&&(t.blockedOn=null,Sl||(Sl=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Gv)))}function wi(t){function e(i){return Hr(i,t)}if(0<gs.length){Hr(gs[0],t);for(var n=1;n<gs.length;n++){var r=gs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qt!==null&&Hr(Qt,t),Yt!==null&&Hr(Yt,t),Jt!==null&&Hr(Jt,t),yi.forEach(e),_i.forEach(e),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Mh(n),n.blockedOn===null&&bt.shift()}var dr=Lt.ReactCurrentBatchConfig,Zs=!0;function Kv(t,e,n,r){var i=b,s=dr.transition;dr.transition=null;try{b=1,Au(t,e,n,r)}finally{b=i,dr.transition=s}}function qv(t,e,n,r){var i=b,s=dr.transition;dr.transition=null;try{b=4,Au(t,e,n,r)}finally{b=i,dr.transition=s}}function Au(t,e,n,r){if(Zs){var i=Il(t,e,n,r);if(i===null)ja(t,e,r,eo,n),Yc(t,r);else if(Wv(i,t,e,n,r))r.stopPropagation();else if(Yc(t,r),e&4&&-1<Hv.indexOf(t)){for(;i!==null;){var s=qi(i);if(s!==null&&Nh(s),s=Il(t,e,n,r),s===null&&ja(t,e,r,eo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ja(t,e,r,null,n)}}var eo=null;function Il(t,e,n,r){if(eo=null,t=Pu(r),t=Tn(t),t!==null)if(e=Bn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ih(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eo=t,null}function jh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mv()){case ku:return 1;case Ch:return 4;case Js:case jv:return 16;case Rh:return 536870912;default:return 16}default:return 16}}var Gt=null,xu=null,Ls=null;function Vh(){if(Ls)return Ls;var t,e=xu,n=e.length,r,i="value"in Gt?Gt.value:Gt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ls=i.slice(t,1<r?1-r:void 0)}function Ms(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vs(){return!0}function Xc(){return!1}function He(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vs:Xc,this.isPropagationStopped=Xc,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vs)},persist:function(){},isPersistent:vs}),e}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=He(Nr),Ki=Q({},Nr,{view:0,detail:0}),Qv=He(Ki),Ca,Ra,Wr,zo=Q({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wr&&(Wr&&t.type==="mousemove"?(Ca=t.screenX-Wr.screenX,Ra=t.screenY-Wr.screenY):Ra=Ca=0,Wr=t),Ca)},movementY:function(t){return"movementY"in t?t.movementY:Ra}}),Zc=He(zo),Yv=Q({},zo,{dataTransfer:0}),Jv=He(Yv),Xv=Q({},Ki,{relatedTarget:0}),Aa=He(Xv),Zv=Q({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),ey=He(Zv),ty=Q({},Nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ny=He(ty),ry=Q({},Nr,{data:0}),ed=He(ry),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oy[t])?!!e[t]:!1}function Ou(){return ay}var ly=Q({},Ki,{key:function(t){if(t.key){var e=iy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ms(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(t){return t.type==="keypress"?Ms(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ms(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uy=He(ly),cy=Q({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=He(cy),dy=Q({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),fy=He(dy),hy=Q({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),py=He(hy),my=Q({},zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gy=He(my),vy=[9,13,27,32],Du=Rt&&"CompositionEvent"in window,ri=null;Rt&&"documentMode"in document&&(ri=document.documentMode);var yy=Rt&&"TextEvent"in window&&!ri,Uh=Rt&&(!Du||ri&&8<ri&&11>=ri),nd=" ",rd=!1;function Fh(t,e){switch(t){case"keyup":return vy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jn=!1;function _y(t,e){switch(t){case"compositionend":return bh(e);case"keypress":return e.which!==32?null:(rd=!0,nd);case"textInput":return t=e.data,t===nd&&rd?null:t;default:return null}}function wy(t,e){if(Jn)return t==="compositionend"||!Du&&Fh(t,e)?(t=Vh(),Ls=xu=Gt=null,Jn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uh&&e.locale!=="ko"?null:e.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ey[t.type]:e==="textarea"}function zh(t,e,n,r){yh(r),e=to(e,"onChange"),0<e.length&&(n=new Nu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ii=null,Ei=null;function Sy(t){Xh(t,0)}function $o(t){var e=er(t);if(dh(e))return t}function Iy(t,e){if(t==="change")return e}var $h=!1;if(Rt){var xa;if(Rt){var Na="oninput"in document;if(!Na){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),Na=typeof sd.oninput=="function"}xa=Na}else xa=!1;$h=xa&&(!document.documentMode||9<document.documentMode)}function od(){ii&&(ii.detachEvent("onpropertychange",Bh),Ei=ii=null)}function Bh(t){if(t.propertyName==="value"&&$o(Ei)){var e=[];zh(e,Ei,t,Pu(t)),Sh(Sy,e)}}function Ty(t,e,n){t==="focusin"?(od(),ii=e,Ei=n,ii.attachEvent("onpropertychange",Bh)):t==="focusout"&&od()}function Py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $o(Ei)}function ky(t,e){if(t==="click")return $o(e)}function Cy(t,e){if(t==="input"||t==="change")return $o(e)}function Ry(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rt=typeof Object.is=="function"?Object.is:Ry;function Si(t,e){if(rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sl.call(e,i)||!rt(t[i],e[i]))return!1}return!0}function ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ld(t,e){var n=ad(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ad(n)}}function Hh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wh(){for(var t=window,e=qs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qs(t.document)}return e}function Lu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ay(t){var e=Wh(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hh(n.ownerDocument.documentElement,n)){if(r!==null&&Lu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ld(n,s);var o=ld(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xy=Rt&&"documentMode"in document&&11>=document.documentMode,Xn=null,Tl=null,si=null,Pl=!1;function ud(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||Xn==null||Xn!==qs(r)||(r=Xn,"selectionStart"in r&&Lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),si&&Si(si,r)||(si=r,r=to(Tl,"onSelect"),0<r.length&&(e=new Nu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Xn)))}function ys(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zn={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionend:ys("Transition","TransitionEnd")},Oa={},Gh={};Rt&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Bo(t){if(Oa[t])return Oa[t];if(!Zn[t])return t;var e=Zn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gh)return Oa[t]=e[n];return t}var Kh=Bo("animationend"),qh=Bo("animationiteration"),Qh=Bo("animationstart"),Yh=Bo("transitionend"),Jh=new Map,cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(t,e){Jh.set(t,e),$n(e,[t])}for(var Da=0;Da<cd.length;Da++){var La=cd[Da],Ny=La.toLowerCase(),Oy=La[0].toUpperCase()+La.slice(1);cn(Ny,"on"+Oy)}cn(Kh,"onAnimationEnd");cn(qh,"onAnimationIteration");cn(Qh,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Yh,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function dd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Nv(r,e,void 0,t),t.currentTarget=null}function Xh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;dd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;dd(i,a,u),s=l}}}if(Ys)throw t=wl,Ys=!1,wl=null,t}function B(t,e){var n=e[xl];n===void 0&&(n=e[xl]=new Set);var r=t+"__bubble";n.has(r)||(Zh(e,t,2,!1),n.add(r))}function Ma(t,e,n){var r=0;e&&(r|=4),Zh(n,t,r,e)}var _s="_reactListening"+Math.random().toString(36).slice(2);function Ii(t){if(!t[_s]){t[_s]=!0,oh.forEach(function(n){n!=="selectionchange"&&(Dy.has(n)||Ma(n,!1,t),Ma(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_s]||(e[_s]=!0,Ma("selectionchange",!1,e))}}function Zh(t,e,n,r){switch(jh(e)){case 1:var i=Kv;break;case 4:i=qv;break;default:i=Au}n=i.bind(null,e,n,t),i=void 0,!_l||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ja(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Tn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Sh(function(){var u=s,c=Pu(n),d=[];e:{var p=Jh.get(t);if(p!==void 0){var v=Nu,y=t;switch(t){case"keypress":if(Ms(n)===0)break e;case"keydown":case"keyup":v=uy;break;case"focusin":y="focus",v=Aa;break;case"focusout":y="blur",v=Aa;break;case"beforeblur":case"afterblur":v=Aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=fy;break;case Kh:case qh:case Qh:v=ey;break;case Yh:v=py;break;case"scroll":v=Qv;break;case"wheel":v=gy;break;case"copy":case"cut":case"paste":v=ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=td}var _=(e&4)!==0,S=!_&&t==="scroll",m=_?p!==null?p+"Capture":null:p;_=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=vi(f,m),w!=null&&_.push(Ti(f,w,g)))),S)break;f=f.return}0<_.length&&(p=new v(p,y,null,n,c),d.push({event:p,listeners:_}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&n!==vl&&(y=n.relatedTarget||n.fromElement)&&(Tn(y)||y[At]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Tn(y):null,y!==null&&(S=Bn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=Zc,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=td,w="onPointerLeave",m="onPointerEnter",f="pointer"),S=v==null?p:er(v),g=y==null?p:er(y),p=new _(w,f+"leave",v,n,c),p.target=S,p.relatedTarget=g,w=null,Tn(c)===u&&(_=new _(m,f+"enter",y,n,c),_.target=g,_.relatedTarget=S,w=_),S=w,v&&y)t:{for(_=v,m=y,f=0,g=_;g;g=Gn(g))f++;for(g=0,w=m;w;w=Gn(w))g++;for(;0<f-g;)_=Gn(_),f--;for(;0<g-f;)m=Gn(m),g--;for(;f--;){if(_===m||m!==null&&_===m.alternate)break t;_=Gn(_),m=Gn(m)}_=null}else _=null;v!==null&&fd(d,p,v,_,!1),y!==null&&S!==null&&fd(d,S,y,_,!0)}}e:{if(p=u?er(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var T=Iy;else if(id(p))if($h)T=Cy;else{T=Py;var k=Ty}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=ky);if(T&&(T=T(t,u))){zh(d,T,n,c);break e}k&&k(t,p,u),t==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&fl(p,"number",p.value)}switch(k=u?er(u):window,t){case"focusin":(id(k)||k.contentEditable==="true")&&(Xn=k,Tl=u,si=null);break;case"focusout":si=Tl=Xn=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,ud(d,n,c);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":ud(d,n,c)}var R;if(Du)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Jn?Fh(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Uh&&n.locale!=="ko"&&(Jn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Jn&&(R=Vh()):(Gt=c,xu="value"in Gt?Gt.value:Gt.textContent,Jn=!0)),k=to(u,A),0<k.length&&(A=new ed(A,t,null,n,c),d.push({event:A,listeners:k}),R?A.data=R:(R=bh(n),R!==null&&(A.data=R)))),(R=yy?_y(t,n):wy(t,n))&&(u=to(u,"onBeforeInput"),0<u.length&&(c=new ed("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}Xh(d,e)})}function Ti(t,e,n){return{instance:t,listener:e,currentTarget:n}}function to(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vi(t,n),s!=null&&r.unshift(Ti(t,s,i)),s=vi(t,e),s!=null&&r.push(Ti(t,s,i))),t=t.return}return r}function Gn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=vi(n,s),l!=null&&o.unshift(Ti(n,l,a))):i||(l=vi(n,s),l!=null&&o.push(Ti(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ly=/\r\n?/g,My=/\u0000|\uFFFD/g;function hd(t){return(typeof t=="string"?t:""+t).replace(Ly,`
`).replace(My,"")}function ws(t,e,n){if(e=hd(e),hd(t)!==e&&n)throw Error(I(425))}function no(){}var kl=null,Cl=null;function Rl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,pd=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof pd<"u"?function(t){return pd.resolve(null).then(t).catch(Uy)}:Al;function Uy(t){setTimeout(function(){throw t})}function Va(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wi(e)}function Xt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function md(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Or=Math.random().toString(36).slice(2),ut="__reactFiber$"+Or,Pi="__reactProps$"+Or,At="__reactContainer$"+Or,xl="__reactEvents$"+Or,Fy="__reactListeners$"+Or,by="__reactHandles$"+Or;function Tn(t){var e=t[ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[At]||n[ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=md(t);t!==null;){if(n=t[ut])return n;t=md(t)}return e}t=n,n=t.parentNode}return null}function qi(t){return t=t[ut]||t[At],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function er(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Ho(t){return t[Pi]||null}var Nl=[],tr=-1;function dn(t){return{current:t}}function H(t){0>tr||(t.current=Nl[tr],Nl[tr]=null,tr--)}function $(t,e){tr++,Nl[tr]=t.current,t.current=e}var un={},ye=dn(un),xe=dn(!1),xn=un;function yr(t,e){var n=t.type.contextTypes;if(!n)return un;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(t){return t=t.childContextTypes,t!=null}function ro(){H(xe),H(ye)}function gd(t,e,n){if(ye.current!==un)throw Error(I(168));$(ye,e),$(xe,n)}function ep(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Tv(t)||"Unknown",i));return Q({},n,r)}function io(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||un,xn=ye.current,$(ye,t),$(xe,xe.current),!0}function vd(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=ep(t,e,xn),r.__reactInternalMemoizedMergedChildContext=t,H(xe),H(ye),$(ye,t)):H(xe),$(xe,n)}var _t=null,Wo=!1,Ua=!1;function tp(t){_t===null?_t=[t]:_t.push(t)}function zy(t){Wo=!0,tp(t)}function fn(){if(!Ua&&_t!==null){Ua=!0;var t=0,e=b;try{var n=_t;for(b=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_t=null,Wo=!1}catch(i){throw _t!==null&&(_t=_t.slice(t+1)),kh(ku,fn),i}finally{b=e,Ua=!1}}return null}var nr=[],rr=0,so=null,oo=0,We=[],Ge=0,Nn=null,wt=1,Et="";function En(t,e){nr[rr++]=oo,nr[rr++]=so,so=t,oo=e}function np(t,e,n){We[Ge++]=wt,We[Ge++]=Et,We[Ge++]=Nn,Nn=t;var r=wt;t=Et;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var s=32-tt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wt=1<<32-tt(e)+i|n<<i|r,Et=s+t}else wt=1<<s|n<<i|r,Et=t}function Mu(t){t.return!==null&&(En(t,1),np(t,1,0))}function ju(t){for(;t===so;)so=nr[--rr],nr[rr]=null,oo=nr[--rr],nr[rr]=null;for(;t===Nn;)Nn=We[--Ge],We[Ge]=null,Et=We[--Ge],We[Ge]=null,wt=We[--Ge],We[Ge]=null}var Fe=null,Ve=null,W=!1,et=null;function rp(t,e){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fe=t,Ve=Xt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fe=t,Ve=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nn!==null?{id:wt,overflow:Et}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fe=t,Ve=null,!0):!1;default:return!1}}function Ol(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dl(t){if(W){var e=Ve;if(e){var n=e;if(!yd(t,e)){if(Ol(t))throw Error(I(418));e=Xt(n.nextSibling);var r=Fe;e&&yd(t,e)?rp(r,n):(t.flags=t.flags&-4097|2,W=!1,Fe=t)}}else{if(Ol(t))throw Error(I(418));t.flags=t.flags&-4097|2,W=!1,Fe=t}}}function _d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fe=t}function Es(t){if(t!==Fe)return!1;if(!W)return _d(t),W=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rl(t.type,t.memoizedProps)),e&&(e=Ve)){if(Ol(t))throw ip(),Error(I(418));for(;e;)rp(t,e),e=Xt(e.nextSibling)}if(_d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ve=Xt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ve=null}}else Ve=Fe?Xt(t.stateNode.nextSibling):null;return!0}function ip(){for(var t=Ve;t;)t=Xt(t.nextSibling)}function _r(){Ve=Fe=null,W=!1}function Vu(t){et===null?et=[t]:et.push(t)}var $y=Lt.ReactCurrentBatchConfig;function Gr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Ss(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wd(t){var e=t._init;return e(t._payload)}function sp(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=nn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,w){return f===null||f.tag!==6?(f=Wa(g,m.mode,w),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,w){var T=g.type;return T===Yn?c(m,f,g.props.children,w,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ut&&wd(T)===f.type)?(w=i(f,g.props),w.ref=Gr(m,f,g),w.return=m,w):(w=$s(g.type,g.key,g.props,null,m.mode,w),w.ref=Gr(m,f,g),w.return=m,w)}function u(m,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ga(g,m.mode,w),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,w,T){return f===null||f.tag!==7?(f=Rn(g,m.mode,w,T),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Wa(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ds:return g=$s(f.type,f.key,f.props,null,m.mode,g),g.ref=Gr(m,null,f),g.return=m,g;case Qn:return f=Ga(f,m.mode,g),f.return=m,f;case Ut:var w=f._init;return d(m,w(f._payload),g)}if(Yr(f)||zr(f))return f=Rn(f,m.mode,g,null),f.return=m,f;Ss(m,f)}return null}function p(m,f,g,w){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(m,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ds:return g.key===T?l(m,f,g,w):null;case Qn:return g.key===T?u(m,f,g,w):null;case Ut:return T=g._init,p(m,f,T(g._payload),w)}if(Yr(g)||zr(g))return T!==null?null:c(m,f,g,w,null);Ss(m,g)}return null}function v(m,f,g,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(f,m,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ds:return m=m.get(w.key===null?g:w.key)||null,l(f,m,w,T);case Qn:return m=m.get(w.key===null?g:w.key)||null,u(f,m,w,T);case Ut:var k=w._init;return v(m,f,g,k(w._payload),T)}if(Yr(w)||zr(w))return m=m.get(g)||null,c(f,m,w,T,null);Ss(f,w)}return null}function y(m,f,g,w){for(var T=null,k=null,R=f,A=f=0,z=null;R!==null&&A<g.length;A++){R.index>A?(z=R,R=null):z=R.sibling;var O=p(m,R,g[A],w);if(O===null){R===null&&(R=z);break}t&&R&&O.alternate===null&&e(m,R),f=s(O,f,A),k===null?T=O:k.sibling=O,k=O,R=z}if(A===g.length)return n(m,R),W&&En(m,A),T;if(R===null){for(;A<g.length;A++)R=d(m,g[A],w),R!==null&&(f=s(R,f,A),k===null?T=R:k.sibling=R,k=R);return W&&En(m,A),T}for(R=r(m,R);A<g.length;A++)z=v(R,m,A,g[A],w),z!==null&&(t&&z.alternate!==null&&R.delete(z.key===null?A:z.key),f=s(z,f,A),k===null?T=z:k.sibling=z,k=z);return t&&R.forEach(function(Le){return e(m,Le)}),W&&En(m,A),T}function _(m,f,g,w){var T=zr(g);if(typeof T!="function")throw Error(I(150));if(g=T.call(g),g==null)throw Error(I(151));for(var k=T=null,R=f,A=f=0,z=null,O=g.next();R!==null&&!O.done;A++,O=g.next()){R.index>A?(z=R,R=null):z=R.sibling;var Le=p(m,R,O.value,w);if(Le===null){R===null&&(R=z);break}t&&R&&Le.alternate===null&&e(m,R),f=s(Le,f,A),k===null?T=Le:k.sibling=Le,k=Le,R=z}if(O.done)return n(m,R),W&&En(m,A),T;if(R===null){for(;!O.done;A++,O=g.next())O=d(m,O.value,w),O!==null&&(f=s(O,f,A),k===null?T=O:k.sibling=O,k=O);return W&&En(m,A),T}for(R=r(m,R);!O.done;A++,O=g.next())O=v(R,m,A,O.value,w),O!==null&&(t&&O.alternate!==null&&R.delete(O.key===null?A:O.key),f=s(O,f,A),k===null?T=O:k.sibling=O,k=O);return t&&R.forEach(function(Fr){return e(m,Fr)}),W&&En(m,A),T}function S(m,f,g,w){if(typeof g=="object"&&g!==null&&g.type===Yn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ds:e:{for(var T=g.key,k=f;k!==null;){if(k.key===T){if(T=g.type,T===Yn){if(k.tag===7){n(m,k.sibling),f=i(k,g.props.children),f.return=m,m=f;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ut&&wd(T)===k.type){n(m,k.sibling),f=i(k,g.props),f.ref=Gr(m,k,g),f.return=m,m=f;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===Yn?(f=Rn(g.props.children,m.mode,w,g.key),f.return=m,m=f):(w=$s(g.type,g.key,g.props,null,m.mode,w),w.ref=Gr(m,f,g),w.return=m,m=w)}return o(m);case Qn:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Ga(g,m.mode,w),f.return=m,m=f}return o(m);case Ut:return k=g._init,S(m,f,k(g._payload),w)}if(Yr(g))return y(m,f,g,w);if(zr(g))return _(m,f,g,w);Ss(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Wa(g,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return S}var wr=sp(!0),op=sp(!1),ao=dn(null),lo=null,ir=null,Uu=null;function Fu(){Uu=ir=lo=null}function bu(t){var e=ao.current;H(ao),t._currentValue=e}function Ll(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function fr(t,e){lo=t,Uu=ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ae=!0),t.firstContext=null)}function Qe(t){var e=t._currentValue;if(Uu!==t)if(t={context:t,memoizedValue:e,next:null},ir===null){if(lo===null)throw Error(I(308));ir=t,lo.dependencies={lanes:0,firstContext:t}}else ir=ir.next=t;return e}var Pn=null;function zu(t){Pn===null?Pn=[t]:Pn.push(t)}function ap(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zu(e)):(n.next=i.next,i.next=n),e.interleaved=n,xt(t,r)}function xt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ft=!1;function $u(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xt(t,n)}return i=r.interleaved,i===null?(e.next=e,zu(r)):(e.next=i.next,i.next=e),r.interleaved=e,xt(t,n)}function js(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cu(t,n)}}function Ed(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uo(t,e,n,r){var i=t.updateQueue;Ft=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var p=a.lane,v=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(p=e,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(v,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(v,d,p):y,p==null)break e;d=Q({},d,p);break e;case 2:Ft=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dn|=o,t.lanes=o,t.memoizedState=d}}function Sd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Qi={},ht=dn(Qi),ki=dn(Qi),Ci=dn(Qi);function kn(t){if(t===Qi)throw Error(I(174));return t}function Bu(t,e){switch($(Ci,e),$(ki,t),$(ht,Qi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pl(e,t)}H(ht),$(ht,e)}function Er(){H(ht),H(ki),H(Ci)}function up(t){kn(Ci.current);var e=kn(ht.current),n=pl(e,t.type);e!==n&&($(ki,t),$(ht,n))}function Hu(t){ki.current===t&&(H(ht),H(ki))}var G=dn(0);function co(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fa=[];function Wu(){for(var t=0;t<Fa.length;t++)Fa[t]._workInProgressVersionPrimary=null;Fa.length=0}var Vs=Lt.ReactCurrentDispatcher,ba=Lt.ReactCurrentBatchConfig,On=0,q=null,te=null,ae=null,fo=!1,oi=!1,Ri=0,By=0;function me(){throw Error(I(321))}function Gu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rt(t[n],e[n]))return!1;return!0}function Ku(t,e,n,r,i,s){if(On=s,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vs.current=t===null||t.memoizedState===null?Ky:qy,t=n(r,i),oi){s=0;do{if(oi=!1,Ri=0,25<=s)throw Error(I(301));s+=1,ae=te=null,e.updateQueue=null,Vs.current=Qy,t=n(r,i)}while(oi)}if(Vs.current=ho,e=te!==null&&te.next!==null,On=0,ae=te=q=null,fo=!1,e)throw Error(I(300));return t}function qu(){var t=Ri!==0;return Ri=0,t}function at(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?q.memoizedState=ae=t:ae=ae.next=t,ae}function Ye(){if(te===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=te.next;var e=ae===null?q.memoizedState:ae.next;if(e!==null)ae=e,te=t;else{if(t===null)throw Error(I(310));te=t,t={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ae===null?q.memoizedState=ae=t:ae=ae.next=t}return ae}function Ai(t,e){return typeof e=="function"?e(t):e}function za(t){var e=Ye(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((On&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,q.lanes|=c,Dn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,rt(r,e.memoizedState)||(Ae=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,q.lanes|=s,Dn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $a(t){var e=Ye(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rt(s,e.memoizedState)||(Ae=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cp(){}function dp(t,e){var n=q,r=Ye(),i=e(),s=!rt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ae=!0),r=r.queue,Qu(pp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,xi(9,hp.bind(null,n,r,i,e),void 0,null),le===null)throw Error(I(349));On&30||fp(n,e,i)}return i}function fp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hp(t,e,n,r){e.value=n,e.getSnapshot=r,mp(e)&&gp(t)}function pp(t,e,n){return n(function(){mp(e)&&gp(t)})}function mp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rt(t,n)}catch{return!0}}function gp(t){var e=xt(t,1);e!==null&&nt(e,t,1,-1)}function Id(t){var e=at();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:t},e.queue=t,t=t.dispatch=Gy.bind(null,q,t),[e.memoizedState,t]}function xi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vp(){return Ye().memoizedState}function Us(t,e,n,r){var i=at();q.flags|=t,i.memoizedState=xi(1|e,n,void 0,r===void 0?null:r)}function Go(t,e,n,r){var i=Ye();r=r===void 0?null:r;var s=void 0;if(te!==null){var o=te.memoizedState;if(s=o.destroy,r!==null&&Gu(r,o.deps)){i.memoizedState=xi(e,n,s,r);return}}q.flags|=t,i.memoizedState=xi(1|e,n,s,r)}function Td(t,e){return Us(8390656,8,t,e)}function Qu(t,e){return Go(2048,8,t,e)}function yp(t,e){return Go(4,2,t,e)}function _p(t,e){return Go(4,4,t,e)}function wp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ep(t,e,n){return n=n!=null?n.concat([t]):null,Go(4,4,wp.bind(null,e,t),n)}function Yu(){}function Sp(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ip(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tp(t,e,n){return On&21?(rt(n,e)||(n=Ah(),q.lanes|=n,Dn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ae=!0),t.memoizedState=n)}function Hy(t,e){var n=b;b=n!==0&&4>n?n:4,t(!0);var r=ba.transition;ba.transition={};try{t(!1),e()}finally{b=n,ba.transition=r}}function Pp(){return Ye().memoizedState}function Wy(t,e,n){var r=tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kp(t))Cp(e,n);else if(n=ap(t,e,n,r),n!==null){var i=Ie();nt(n,t,r,i),Rp(n,e,r)}}function Gy(t,e,n){var r=tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kp(t))Cp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,rt(a,o)){var l=e.interleaved;l===null?(i.next=i,zu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ap(t,e,i,r),n!==null&&(i=Ie(),nt(n,t,r,i),Rp(n,e,r))}}function kp(t){var e=t.alternate;return t===q||e!==null&&e===q}function Cp(t,e){oi=fo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rp(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cu(t,n)}}var ho={readContext:Qe,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Ky={readContext:Qe,useCallback:function(t,e){return at().memoizedState=[t,e===void 0?null:e],t},useContext:Qe,useEffect:Td,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Us(4194308,4,wp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Us(4194308,4,t,e)},useInsertionEffect:function(t,e){return Us(4,2,t,e)},useMemo:function(t,e){var n=at();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=at();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Wy.bind(null,q,t),[r.memoizedState,t]},useRef:function(t){var e=at();return t={current:t},e.memoizedState=t},useState:Id,useDebugValue:Yu,useDeferredValue:function(t){return at().memoizedState=t},useTransition:function(){var t=Id(!1),e=t[0];return t=Hy.bind(null,t[1]),at().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=q,i=at();if(W){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),le===null)throw Error(I(349));On&30||fp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Td(pp.bind(null,r,s,t),[t]),r.flags|=2048,xi(9,hp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=at(),e=le.identifierPrefix;if(W){var n=Et,r=wt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ri++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=By++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qy={readContext:Qe,useCallback:Sp,useContext:Qe,useEffect:Qu,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:Ip,useReducer:za,useRef:vp,useState:function(){return za(Ai)},useDebugValue:Yu,useDeferredValue:function(t){var e=Ye();return Tp(e,te.memoizedState,t)},useTransition:function(){var t=za(Ai)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:cp,useSyncExternalStore:dp,useId:Pp,unstable_isNewReconciler:!1},Qy={readContext:Qe,useCallback:Sp,useContext:Qe,useEffect:Qu,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:Ip,useReducer:$a,useRef:vp,useState:function(){return $a(Ai)},useDebugValue:Yu,useDeferredValue:function(t){var e=Ye();return te===null?e.memoizedState=t:Tp(e,te.memoizedState,t)},useTransition:function(){var t=$a(Ai)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:cp,useSyncExternalStore:dp,useId:Pp,unstable_isNewReconciler:!1};function Xe(t,e){if(t&&t.defaultProps){e=Q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ml(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ko={isMounted:function(t){return(t=t._reactInternals)?Bn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ie(),i=tn(t),s=Pt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(nt(e,t,i,r),js(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ie(),i=tn(t),s=Pt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zt(t,s,i),e!==null&&(nt(e,t,i,r),js(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ie(),r=tn(t),i=Pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zt(t,i,r),e!==null&&(nt(e,t,r,n),js(e,t,r))}};function Pd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Si(n,r)||!Si(i,s):!0}function Ap(t,e,n){var r=!1,i=un,s=e.contextType;return typeof s=="object"&&s!==null?s=Qe(s):(i=Ne(e)?xn:ye.current,r=e.contextTypes,s=(r=r!=null)?yr(t,i):un),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ko,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ko.enqueueReplaceState(e,e.state,null)}function jl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},$u(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qe(s):(s=Ne(e)?xn:ye.current,i.context=yr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ml(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ko.enqueueReplaceState(i,i.state,null),uo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Sr(t,e){try{var n="",r=e;do n+=Iv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ba(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yy=typeof WeakMap=="function"?WeakMap:Map;function xp(t,e,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){mo||(mo=!0,Kl=r),Vl(t,e)},n}function Np(t,e,n){n=Pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vl(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vl(t,e),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Yy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=c_.bind(null,t,e,n),e.then(t,t))}function Rd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ad(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pt(-1,1),e.tag=2,Zt(n,e,1))),n.lanes|=1),t)}var Jy=Lt.ReactCurrentOwner,Ae=!1;function Ee(t,e,n,r){e.child=t===null?op(e,null,n,r):wr(e,t.child,n,r)}function xd(t,e,n,r,i){n=n.render;var s=e.ref;return fr(e,i),r=Ku(t,e,n,r,s,i),n=qu(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nt(t,e,i)):(W&&n&&Mu(e),e.flags|=1,Ee(t,e,r,i),e.child)}function Nd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ic(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Op(t,e,s,r,i)):(t=$s(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Si,n(o,r)&&t.ref===e.ref)return Nt(t,e,i)}return e.flags|=1,t=nn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Op(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Si(s,r)&&t.ref===e.ref)if(Ae=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ae=!0);else return e.lanes=t.lanes,Nt(t,e,i)}return Ul(t,e,n,r,i)}function Dp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(or,Me),Me|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(or,Me),Me|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$(or,Me),Me|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$(or,Me),Me|=r;return Ee(t,e,i,n),e.child}function Lp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ul(t,e,n,r,i){var s=Ne(n)?xn:ye.current;return s=yr(e,s),fr(e,i),n=Ku(t,e,n,r,s,i),r=qu(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nt(t,e,i)):(W&&r&&Mu(e),e.flags|=1,Ee(t,e,n,i),e.child)}function Od(t,e,n,r,i){if(Ne(n)){var s=!0;io(e)}else s=!1;if(fr(e,i),e.stateNode===null)Fs(t,e),Ap(e,n,r),jl(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=Ne(n)?xn:ye.current,u=yr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&kd(e,o,r,u),Ft=!1;var p=e.memoizedState;o.state=p,uo(e,r,o,i),l=e.memoizedState,a!==r||p!==l||xe.current||Ft?(typeof c=="function"&&(Ml(e,n,c,r),l=e.memoizedState),(a=Ft||Pd(e,n,a,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,lp(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xe(e.type,a),o.props=u,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qe(l):(l=Ne(n)?xn:ye.current,l=yr(e,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&kd(e,o,r,l),Ft=!1,p=e.memoizedState,o.state=p,uo(e,r,o,i);var y=e.memoizedState;a!==d||p!==y||xe.current||Ft?(typeof v=="function"&&(Ml(e,n,v,r),y=e.memoizedState),(u=Ft||Pd(e,n,u,r,p,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Fl(t,e,n,r,s,i)}function Fl(t,e,n,r,i,s){Lp(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vd(e,n,!1),Nt(t,e,s);r=e.stateNode,Jy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wr(e,t.child,null,s),e.child=wr(e,null,a,s)):Ee(t,e,a,s),e.memoizedState=r.state,i&&vd(e,n,!0),e.child}function Mp(t){var e=t.stateNode;e.pendingContext?gd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gd(t,e.context,!1),Bu(t,e.containerInfo)}function Dd(t,e,n,r,i){return _r(),Vu(i),e.flags|=256,Ee(t,e,n,r),e.child}var bl={dehydrated:null,treeContext:null,retryLane:0};function zl(t){return{baseLanes:t,cachePool:null,transitions:null}}function jp(t,e,n){var r=e.pendingProps,i=G.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(G,i&1),t===null)return Dl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yo(o,r,0,null),t=Rn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zl(n),e.memoizedState=bl,t):Ju(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Xy(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=nn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=nn(a,s):(s=Rn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bl,r}return s=t.child,t=s.sibling,r=nn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ju(t,e){return e=Yo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Is(t,e,n,r){return r!==null&&Vu(r),wr(e,t.child,null,n),t=Ju(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ba(Error(I(422))),Is(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yo({mode:"visible",children:r.children},i,0,null),s=Rn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&wr(e,t.child,null,o),e.child.memoizedState=zl(o),e.memoizedState=bl,s);if(!(e.mode&1))return Is(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Ba(s,r,void 0),Is(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ae||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xt(t,i),nt(r,t,i,-1))}return rc(),r=Ba(Error(I(421))),Is(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=d_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ve=Xt(i.nextSibling),Fe=e,W=!0,et=null,t!==null&&(We[Ge++]=wt,We[Ge++]=Et,We[Ge++]=Nn,wt=t.id,Et=t.overflow,Nn=e),e=Ju(e,r.children),e.flags|=4096,e)}function Ld(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ll(t.return,e,n)}function Ha(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Vp(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ee(t,e,r.children,n),r=G.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ld(t,n,e);else if(t.tag===19)Ld(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(G,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&co(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ha(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&co(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ha(e,!0,n,null,s);break;case"together":Ha(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zy(t,e,n){switch(e.tag){case 3:Mp(e),_r();break;case 5:up(e);break;case 1:Ne(e.type)&&io(e);break;case 4:Bu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$(ao,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(G,G.current&1),e.flags|=128,null):n&e.child.childLanes?jp(t,e,n):($(G,G.current&1),t=Nt(t,e,n),t!==null?t.sibling:null);$(G,G.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Vp(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(G,G.current),r)break;return null;case 22:case 23:return e.lanes=0,Dp(t,e,n)}return Nt(t,e,n)}var Up,$l,Fp,bp;Up=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$l=function(){};Fp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kn(ht.current);var s=null;switch(n){case"input":i=cl(t,i),r=cl(t,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=hl(t,i),r=hl(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=no)}ml(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Kr(t,e){if(!W)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function e_(t,e,n){var r=e.pendingProps;switch(ju(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(e),null;case 1:return Ne(e.type)&&ro(),ge(e),null;case 3:return r=e.stateNode,Er(),H(xe),H(ye),Wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Es(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,et!==null&&(Yl(et),et=null))),$l(t,e),ge(e),null;case 5:Hu(e);var i=kn(Ci.current);if(n=e.type,t!==null&&e.stateNode!=null)Fp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return ge(e),null}if(t=kn(ht.current),Es(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ut]=e,r[Pi]=s,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Xr.length;i++)B(Xr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Bc(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":Wc(r,s),B("invalid",r)}ml(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ws(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ws(r.textContent,a,t),i=["children",""+a]):mi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":fs(r),Hc(r,s,!0);break;case"textarea":fs(r),Gc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=no)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ph(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ut]=e,t[Pi]=r,Up(t,e,!1,!1),e.stateNode=t;e:{switch(o=gl(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xr.length;i++)B(Xr[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":Bc(t,r),i=cl(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),B("invalid",t);break;case"textarea":Wc(t,r),i=hl(t,r),B("invalid",t);break;default:i=r}ml(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?vh(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mh(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&gi(t,l):typeof l=="number"&&gi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&B("scroll",t):l!=null&&Eu(t,s,l,o))}switch(n){case"input":fs(t),Hc(t,r,!1);break;case"textarea":fs(t),Gc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ln(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?lr(t,!!r.multiple,s,!1):r.defaultValue!=null&&lr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=no)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ge(e),null;case 6:if(t&&e.stateNode!=null)bp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=kn(Ci.current),kn(ht.current),Es(e)){if(r=e.stateNode,n=e.memoizedProps,r[ut]=e,(s=r.nodeValue!==n)&&(t=Fe,t!==null))switch(t.tag){case 3:ws(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ws(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=e,e.stateNode=r}return ge(e),null;case 13:if(H(G),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(W&&Ve!==null&&e.mode&1&&!(e.flags&128))ip(),_r(),e.flags|=98560,s=!1;else if(s=Es(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[ut]=e}else _r(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ge(e),s=!1}else et!==null&&(Yl(et),et=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||G.current&1?ie===0&&(ie=3):rc())),e.updateQueue!==null&&(e.flags|=4),ge(e),null);case 4:return Er(),$l(t,e),t===null&&Ii(e.stateNode.containerInfo),ge(e),null;case 10:return bu(e.type._context),ge(e),null;case 17:return Ne(e.type)&&ro(),ge(e),null;case 19:if(H(G),s=e.memoizedState,s===null)return ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Kr(s,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=co(t),o!==null){for(e.flags|=128,Kr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(G,G.current&1|2),e.child}t=t.sibling}s.tail!==null&&Z()>Ir&&(e.flags|=128,r=!0,Kr(s,!1),e.lanes=4194304)}else{if(!r)if(t=co(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!W)return ge(e),null}else 2*Z()-s.renderingStartTime>Ir&&n!==1073741824&&(e.flags|=128,r=!0,Kr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Z(),e.sibling=null,n=G.current,$(G,r?n&1|2:n&1),e):(ge(e),null);case 22:case 23:return nc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Me&1073741824&&(ge(e),e.subtreeFlags&6&&(e.flags|=8192)):ge(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function t_(t,e){switch(ju(e),e.tag){case 1:return Ne(e.type)&&ro(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Er(),H(xe),H(ye),Wu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hu(e),null;case 13:if(H(G),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));_r()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(G),null;case 4:return Er(),null;case 10:return bu(e.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var Ts=!1,ve=!1,n_=typeof WeakSet=="function"?WeakSet:Set,P=null;function sr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(t,e,r)}else n.current=null}function Bl(t,e,n){try{n()}catch(r){Y(t,e,r)}}var Md=!1;function r_(t,e){if(kl=Zs,t=Wh(),Lu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===t)break t;if(p===n&&++u===i&&(a=o),p===s&&++c===r&&(l=o),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:t,selectionRange:n},Zs=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,S=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Xe(e.type,_),S);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){Y(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return y=Md,Md=!1,y}function ai(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bl(e,n,s)}i=i.next}while(i!==r)}}function qo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zp(t){var e=t.alternate;e!==null&&(t.alternate=null,zp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ut],delete e[Pi],delete e[xl],delete e[Fy],delete e[by])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $p(t){return t.tag===5||t.tag===3||t.tag===4}function jd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$p(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=no));else if(r!==4&&(t=t.child,t!==null))for(Wl(t,e,n),t=t.sibling;t!==null;)Wl(t,e,n),t=t.sibling}function Gl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gl(t,e,n),t=t.sibling;t!==null;)Gl(t,e,n),t=t.sibling}var ue=null,Ze=!1;function jt(t,e,n){for(n=n.child;n!==null;)Bp(t,e,n),n=n.sibling}function Bp(t,e,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(bo,n)}catch{}switch(n.tag){case 5:ve||sr(n,e);case 6:var r=ue,i=Ze;ue=null,jt(t,e,n),ue=r,Ze=i,ue!==null&&(Ze?(t=ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ze?(t=ue,n=n.stateNode,t.nodeType===8?Va(t.parentNode,n):t.nodeType===1&&Va(t,n),wi(t)):Va(ue,n.stateNode));break;case 4:r=ue,i=Ze,ue=n.stateNode.containerInfo,Ze=!0,jt(t,e,n),ue=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bl(n,e,o),i=i.next}while(i!==r)}jt(t,e,n);break;case 1:if(!ve&&(sr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,e,a)}jt(t,e,n);break;case 21:jt(t,e,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,jt(t,e,n),ve=r):jt(t,e,n);break;default:jt(t,e,n)}}function Vd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new n_),e.forEach(function(r){var i=f_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ze=!1;break e;case 3:ue=a.stateNode.containerInfo,Ze=!0;break e;case 4:ue=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(ue===null)throw Error(I(160));Bp(s,o,i),ue=null,Ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hp(e,t),e=e.sibling}function Hp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Je(e,t),st(t),r&4){try{ai(3,t,t.return),qo(3,t)}catch(_){Y(t,t.return,_)}try{ai(5,t,t.return)}catch(_){Y(t,t.return,_)}}break;case 1:Je(e,t),st(t),r&512&&n!==null&&sr(n,n.return);break;case 5:if(Je(e,t),st(t),r&512&&n!==null&&sr(n,n.return),t.flags&32){var i=t.stateNode;try{gi(i,"")}catch(_){Y(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&fh(i,s),gl(a,o);var u=gl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?vh(i,d):c==="dangerouslySetInnerHTML"?mh(i,d):c==="children"?gi(i,d):Eu(i,c,d,u)}switch(a){case"input":dl(i,s);break;case"textarea":hh(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?lr(i,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?lr(i,!!s.multiple,s.defaultValue,!0):lr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Pi]=s}catch(_){Y(t,t.return,_)}}break;case 6:if(Je(e,t),st(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Y(t,t.return,_)}}break;case 3:if(Je(e,t),st(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(e.containerInfo)}catch(_){Y(t,t.return,_)}break;case 4:Je(e,t),st(t);break;case 13:Je(e,t),st(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ec=Z())),r&4&&Vd(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ve=(u=ve)||c,Je(e,t),ve=u):Je(e,t),st(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(d=P=c;P!==null;){switch(p=P,v=p.child,p.tag){case 0:case 11:case 14:case 15:ai(4,p,p.return);break;case 1:sr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Y(r,n,_)}}break;case 5:sr(p,p.return);break;case 22:if(p.memoizedState!==null){Fd(d);continue}}v!==null?(v.return=p,P=v):Fd(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gh("display",o))}catch(_){Y(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Y(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Je(e,t),st(t),r&4&&Vd(t);break;case 21:break;default:Je(e,t),st(t)}}function st(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($p(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gi(i,""),r.flags&=-33);var s=jd(t);Gl(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=jd(t);Wl(t,a,o);break;default:throw Error(I(161))}}catch(l){Y(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function i_(t,e,n){P=t,Wp(t)}function Wp(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ts;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ve;a=Ts;var u=ve;if(Ts=o,(ve=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?bd(i):l!==null?(l.return=o,P=l):bd(i);for(;s!==null;)P=s,Wp(s),s=s.sibling;P=i,Ts=a,ve=u}Ud(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Ud(t)}}function Ud(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ve||qo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xe(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&wi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ve||e.flags&512&&Hl(e)}catch(p){Y(e,e.return,p)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Fd(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function bd(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qo(4,e)}catch(l){Y(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Y(e,i,l)}}var s=e.return;try{Hl(e)}catch(l){Y(e,s,l)}break;case 5:var o=e.return;try{Hl(e)}catch(l){Y(e,o,l)}}}catch(l){Y(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var s_=Math.ceil,po=Lt.ReactCurrentDispatcher,Xu=Lt.ReactCurrentOwner,qe=Lt.ReactCurrentBatchConfig,U=0,le=null,ee=null,he=0,Me=0,or=dn(0),ie=0,Ni=null,Dn=0,Qo=0,Zu=0,li=null,Ce=null,ec=0,Ir=1/0,yt=null,mo=!1,Kl=null,en=null,Ps=!1,Kt=null,go=0,ui=0,ql=null,bs=-1,zs=0;function Ie(){return U&6?Z():bs!==-1?bs:bs=Z()}function tn(t){return t.mode&1?U&2&&he!==0?he&-he:$y.transition!==null?(zs===0&&(zs=Ah()),zs):(t=b,t!==0||(t=window.event,t=t===void 0?16:jh(t.type)),t):1}function nt(t,e,n,r){if(50<ui)throw ui=0,ql=null,Error(I(185));Gi(t,n,r),(!(U&2)||t!==le)&&(t===le&&(!(U&2)&&(Qo|=n),ie===4&&zt(t,he)),Oe(t,r),n===1&&U===0&&!(e.mode&1)&&(Ir=Z()+500,Wo&&fn()))}function Oe(t,e){var n=t.callbackNode;$v(t,e);var r=Xs(t,t===le?he:0);if(r===0)n!==null&&Qc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qc(n),e===1)t.tag===0?zy(zd.bind(null,t)):tp(zd.bind(null,t)),Vy(function(){!(U&6)&&fn()}),n=null;else{switch(xh(r)){case 1:n=ku;break;case 4:n=Ch;break;case 16:n=Js;break;case 536870912:n=Rh;break;default:n=Js}n=Zp(n,Gp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gp(t,e){if(bs=-1,zs=0,U&6)throw Error(I(327));var n=t.callbackNode;if(hr()&&t.callbackNode!==n)return null;var r=Xs(t,t===le?he:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vo(t,r);else{e=r;var i=U;U|=2;var s=qp();(le!==t||he!==e)&&(yt=null,Ir=Z()+500,Cn(t,e));do try{l_();break}catch(a){Kp(t,a)}while(!0);Fu(),po.current=s,U=i,ee!==null?e=0:(le=null,he=0,e=ie)}if(e!==0){if(e===2&&(i=El(t),i!==0&&(r=i,e=Ql(t,i))),e===1)throw n=Ni,Cn(t,0),zt(t,r),Oe(t,Z()),n;if(e===6)zt(t,r);else{if(i=t.current.alternate,!(r&30)&&!o_(i)&&(e=vo(t,r),e===2&&(s=El(t),s!==0&&(r=s,e=Ql(t,s))),e===1))throw n=Ni,Cn(t,0),zt(t,r),Oe(t,Z()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Sn(t,Ce,yt);break;case 3:if(zt(t,r),(r&130023424)===r&&(e=ec+500-Z(),10<e)){if(Xs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ie(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Al(Sn.bind(null,t,Ce,yt),e);break}Sn(t,Ce,yt);break;case 4:if(zt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*s_(r/1960))-r,10<r){t.timeoutHandle=Al(Sn.bind(null,t,Ce,yt),r);break}Sn(t,Ce,yt);break;case 5:Sn(t,Ce,yt);break;default:throw Error(I(329))}}}return Oe(t,Z()),t.callbackNode===n?Gp.bind(null,t):null}function Ql(t,e){var n=li;return t.current.memoizedState.isDehydrated&&(Cn(t,e).flags|=256),t=vo(t,e),t!==2&&(e=Ce,Ce=n,e!==null&&Yl(e)),t}function Yl(t){Ce===null?Ce=t:Ce.push.apply(Ce,t)}function o_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zt(t,e){for(e&=~Zu,e&=~Qo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tt(e),r=1<<n;t[n]=-1,e&=~r}}function zd(t){if(U&6)throw Error(I(327));hr();var e=Xs(t,0);if(!(e&1))return Oe(t,Z()),null;var n=vo(t,e);if(t.tag!==0&&n===2){var r=El(t);r!==0&&(e=r,n=Ql(t,r))}if(n===1)throw n=Ni,Cn(t,0),zt(t,e),Oe(t,Z()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sn(t,Ce,yt),Oe(t,Z()),null}function tc(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Ir=Z()+500,Wo&&fn())}}function Ln(t){Kt!==null&&Kt.tag===0&&!(U&6)&&hr();var e=U;U|=1;var n=qe.transition,r=b;try{if(qe.transition=null,b=1,t)return t()}finally{b=r,qe.transition=n,U=e,!(U&6)&&fn()}}function nc(){Me=or.current,H(or)}function Cn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jy(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(ju(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ro();break;case 3:Er(),H(xe),H(ye),Wu();break;case 5:Hu(r);break;case 4:Er();break;case 13:H(G);break;case 19:H(G);break;case 10:bu(r.type._context);break;case 22:case 23:nc()}n=n.return}if(le=t,ee=t=nn(t.current,null),he=Me=e,ie=0,Ni=null,Zu=Qo=Dn=0,Ce=li=null,Pn!==null){for(e=0;e<Pn.length;e++)if(n=Pn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pn=null}return t}function Kp(t,e){do{var n=ee;try{if(Fu(),Vs.current=ho,fo){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fo=!1}if(On=0,ae=te=q=null,oi=!1,Ri=0,Xu.current=null,n===null||n.return===null){ie=1,Ni=e,ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=he,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Rd(o);if(v!==null){v.flags&=-257,Ad(v,o,a,s,e),v.mode&1&&Cd(s,u,e),e=v,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Cd(s,u,e),rc();break e}l=Error(I(426))}}else if(W&&a.mode&1){var S=Rd(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ad(S,o,a,s,e),Vu(Sr(l,a));break e}}s=l=Sr(l,a),ie!==4&&(ie=2),li===null?li=[s]:li.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=xp(s,l,e);Ed(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(en===null||!en.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Np(s,a,e);Ed(s,w);break e}}s=s.return}while(s!==null)}Yp(n)}catch(T){e=T,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function qp(){var t=po.current;return po.current=ho,t===null?ho:t}function rc(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(Dn&268435455)&&!(Qo&268435455)||zt(le,he)}function vo(t,e){var n=U;U|=2;var r=qp();(le!==t||he!==e)&&(yt=null,Cn(t,e));do try{a_();break}catch(i){Kp(t,i)}while(!0);if(Fu(),U=n,po.current=r,ee!==null)throw Error(I(261));return le=null,he=0,ie}function a_(){for(;ee!==null;)Qp(ee)}function l_(){for(;ee!==null&&!Dv();)Qp(ee)}function Qp(t){var e=Xp(t.alternate,t,Me);t.memoizedProps=t.pendingProps,e===null?Yp(t):ee=e,Xu.current=null}function Yp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=t_(n,e),n!==null){n.flags&=32767,ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,ee=null;return}}else if(n=e_(n,e,Me),n!==null){ee=n;return}if(e=e.sibling,e!==null){ee=e;return}ee=e=t}while(e!==null);ie===0&&(ie=5)}function Sn(t,e,n){var r=b,i=qe.transition;try{qe.transition=null,b=1,u_(t,e,n,r)}finally{qe.transition=i,b=r}return null}function u_(t,e,n,r){do hr();while(Kt!==null);if(U&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Bv(t,s),t===le&&(ee=le=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ps||(Ps=!0,Zp(Js,function(){return hr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qe.transition,qe.transition=null;var o=b;b=1;var a=U;U|=4,Xu.current=null,r_(t,n),Hp(n,t),Ay(Cl),Zs=!!kl,Cl=kl=null,t.current=n,i_(n),Lv(),U=a,b=o,qe.transition=s}else t.current=n;if(Ps&&(Ps=!1,Kt=t,go=i),s=t.pendingLanes,s===0&&(en=null),Vv(n.stateNode),Oe(t,Z()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mo)throw mo=!1,t=Kl,Kl=null,t;return go&1&&t.tag!==0&&hr(),s=t.pendingLanes,s&1?t===ql?ui++:(ui=0,ql=t):ui=0,fn(),null}function hr(){if(Kt!==null){var t=xh(go),e=qe.transition,n=b;try{if(qe.transition=null,b=16>t?16:t,Kt===null)var r=!1;else{if(t=Kt,Kt=null,go=0,U&6)throw Error(I(331));var i=U;for(U|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:ai(8,c,s)}var d=c.child;if(d!==null)d.return=c,P=d;else for(;P!==null;){c=P;var p=c.sibling,v=c.return;if(zp(c),c===u){P=null;break}if(p!==null){p.return=v,P=p;break}P=v}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ai(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qo(9,a)}}catch(T){Y(a,a.return,T)}if(a===o){P=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,P=w;break e}P=a.return}}if(U=i,fn(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(bo,t)}catch{}r=!0}return r}finally{b=n,qe.transition=e}}return!1}function $d(t,e,n){e=Sr(n,e),e=xp(t,e,1),t=Zt(t,e,1),e=Ie(),t!==null&&(Gi(t,1,e),Oe(t,e))}function Y(t,e,n){if(t.tag===3)$d(t,t,n);else for(;e!==null;){if(e.tag===3){$d(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){t=Sr(n,t),t=Np(e,t,1),e=Zt(e,t,1),t=Ie(),e!==null&&(Gi(e,1,t),Oe(e,t));break}}e=e.return}}function c_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ie(),t.pingedLanes|=t.suspendedLanes&n,le===t&&(he&n)===n&&(ie===4||ie===3&&(he&130023424)===he&&500>Z()-ec?Cn(t,0):Zu|=n),Oe(t,e)}function Jp(t,e){e===0&&(t.mode&1?(e=ms,ms<<=1,!(ms&130023424)&&(ms=4194304)):e=1);var n=Ie();t=xt(t,e),t!==null&&(Gi(t,e,n),Oe(t,n))}function d_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jp(t,n)}function f_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Jp(t,n)}var Xp;Xp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xe.current)Ae=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ae=!1,Zy(t,e,n);Ae=!!(t.flags&131072)}else Ae=!1,W&&e.flags&1048576&&np(e,oo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fs(t,e),t=e.pendingProps;var i=yr(e,ye.current);fr(e,n),i=Ku(null,e,r,t,i,n);var s=qu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ne(r)?(s=!0,io(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$u(e),i.updater=Ko,e.stateNode=i,i._reactInternals=e,jl(e,r,t,n),e=Fl(null,e,r,!0,s,n)):(e.tag=0,W&&s&&Mu(e),Ee(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=p_(r),t=Xe(r,t),i){case 0:e=Ul(null,e,r,t,n);break e;case 1:e=Od(null,e,r,t,n);break e;case 11:e=xd(null,e,r,t,n);break e;case 14:e=Nd(null,e,r,Xe(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),Ul(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),Od(t,e,r,i,n);case 3:e:{if(Mp(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,lp(t,e),uo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Sr(Error(I(423)),e),e=Dd(t,e,r,n,i);break e}else if(r!==i){i=Sr(Error(I(424)),e),e=Dd(t,e,r,n,i);break e}else for(Ve=Xt(e.stateNode.containerInfo.firstChild),Fe=e,W=!0,et=null,n=op(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===i){e=Nt(t,e,n);break e}Ee(t,e,r,n)}e=e.child}return e;case 5:return up(e),t===null&&Dl(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rl(r,i)?o=null:s!==null&&Rl(r,s)&&(e.flags|=32),Lp(t,e),Ee(t,e,o,n),e.child;case 6:return t===null&&Dl(e),null;case 13:return jp(t,e,n);case 4:return Bu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wr(e,null,r,n):Ee(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),xd(t,e,r,i,n);case 7:return Ee(t,e,e.pendingProps,n),e.child;case 8:return Ee(t,e,e.pendingProps.children,n),e.child;case 12:return Ee(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$(ao,r._currentValue),r._currentValue=o,s!==null)if(rt(s.value,o)){if(s.children===i.children&&!xe.current){e=Nt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Pt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ll(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ll(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ee(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,fr(e,n),i=Qe(i),r=r(i),e.flags|=1,Ee(t,e,r,n),e.child;case 14:return r=e.type,i=Xe(r,e.pendingProps),i=Xe(r.type,i),Nd(t,e,r,i,n);case 15:return Op(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),Fs(t,e),e.tag=1,Ne(r)?(t=!0,io(e)):t=!1,fr(e,n),Ap(e,r,i),jl(e,r,i,n),Fl(null,e,r,!0,t,n);case 19:return Vp(t,e,n);case 22:return Dp(t,e,n)}throw Error(I(156,e.tag))};function Zp(t,e){return kh(t,e)}function h_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,n,r){return new h_(t,e,n,r)}function ic(t){return t=t.prototype,!(!t||!t.isReactComponent)}function p_(t){if(typeof t=="function")return ic(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Iu)return 11;if(t===Tu)return 14}return 2}function nn(t,e){var n=t.alternate;return n===null?(n=Ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $s(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ic(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yn:return Rn(n.children,i,s,e);case Su:o=8,i|=8;break;case ol:return t=Ke(12,n,e,i|2),t.elementType=ol,t.lanes=s,t;case al:return t=Ke(13,n,e,i),t.elementType=al,t.lanes=s,t;case ll:return t=Ke(19,n,e,i),t.elementType=ll,t.lanes=s,t;case uh:return Yo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ah:o=10;break e;case lh:o=9;break e;case Iu:o=11;break e;case Tu:o=14;break e;case Ut:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Ke(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rn(t,e,n,r){return t=Ke(7,t,r,e),t.lanes=n,t}function Yo(t,e,n,r){return t=Ke(22,t,r,e),t.elementType=uh,t.lanes=n,t.stateNode={isHidden:!1},t}function Wa(t,e,n){return t=Ke(6,t,null,e),t.lanes=n,t}function Ga(t,e,n){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function m_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sc(t,e,n,r,i,s,o,a,l){return t=new m_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ke(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$u(s),t}function g_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function em(t){if(!t)return un;t=t._reactInternals;e:{if(Bn(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ne(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Ne(n))return ep(t,n,e)}return e}function tm(t,e,n,r,i,s,o,a,l){return t=sc(n,r,!0,t,i,s,o,a,l),t.context=em(null),n=t.current,r=Ie(),i=tn(n),s=Pt(r,i),s.callback=e??null,Zt(n,s,i),t.current.lanes=i,Gi(t,i,r),Oe(t,r),t}function Jo(t,e,n,r){var i=e.current,s=Ie(),o=tn(i);return n=em(n),e.context===null?e.context=n:e.pendingContext=n,e=Pt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zt(i,e,o),t!==null&&(nt(t,i,o,s),js(t,i,o)),o}function yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function oc(t,e){Bd(t,e),(t=t.alternate)&&Bd(t,e)}function v_(){return null}var nm=typeof reportError=="function"?reportError:function(t){console.error(t)};function ac(t){this._internalRoot=t}Xo.prototype.render=ac.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Jo(t,e,null,null)};Xo.prototype.unmount=ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ln(function(){Jo(null,t,null,null)}),e[At]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bt.length&&e!==0&&e<bt[n].priority;n++);bt.splice(n,0,t),n===0&&Mh(t)}};function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hd(){}function y_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=yo(o);s.call(u)}}var o=tm(e,r,t,0,null,!1,!1,"",Hd);return t._reactRootContainer=o,t[At]=o.current,Ii(t.nodeType===8?t.parentNode:t),Ln(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=yo(l);a.call(u)}}var l=sc(t,0,!1,null,null,!1,!1,"",Hd);return t._reactRootContainer=l,t[At]=l.current,Ii(t.nodeType===8?t.parentNode:t),Ln(function(){Jo(e,l,n,r)}),l}function ea(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=yo(o);a.call(l)}}Jo(e,o,t,i)}else o=y_(n,e,t,i,r);return yo(o)}Nh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jr(e.pendingLanes);n!==0&&(Cu(e,n|1),Oe(e,Z()),!(U&6)&&(Ir=Z()+500,fn()))}break;case 13:Ln(function(){var r=xt(t,1);if(r!==null){var i=Ie();nt(r,t,1,i)}}),oc(t,1)}};Ru=function(t){if(t.tag===13){var e=xt(t,134217728);if(e!==null){var n=Ie();nt(e,t,134217728,n)}oc(t,134217728)}};Oh=function(t){if(t.tag===13){var e=tn(t),n=xt(t,e);if(n!==null){var r=Ie();nt(n,t,e,r)}oc(t,e)}};Dh=function(){return b};Lh=function(t,e){var n=b;try{return b=t,e()}finally{b=n}};yl=function(t,e,n){switch(e){case"input":if(dl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ho(r);if(!i)throw Error(I(90));dh(r),dl(r,i)}}}break;case"textarea":hh(t,n);break;case"select":e=n.value,e!=null&&lr(t,!!n.multiple,e,!1)}};wh=tc;Eh=Ln;var __={usingClientEntryPoint:!1,Events:[qi,er,Ho,yh,_h,tc]},qr={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w_={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Th(t),t===null?null:t.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||v_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ks.isDisabled&&ks.supportsFiber)try{bo=ks.inject(w_),ft=ks}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__;Be.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(e))throw Error(I(200));return g_(t,e,null,n)};Be.createRoot=function(t,e){if(!lc(t))throw Error(I(299));var n=!1,r="",i=nm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sc(t,1,!1,null,null,n,!1,r,i),t[At]=e.current,Ii(t.nodeType===8?t.parentNode:t),new ac(e)};Be.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Th(e),t=t===null?null:t.stateNode,t};Be.flushSync=function(t){return Ln(t)};Be.hydrate=function(t,e,n){if(!Zo(e))throw Error(I(200));return ea(null,t,e,!0,n)};Be.hydrateRoot=function(t,e,n){if(!lc(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=nm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tm(e,null,t,1,n??null,i,!1,s,o),t[At]=e.current,Ii(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xo(e)};Be.render=function(t,e,n){if(!Zo(e))throw Error(I(200));return ea(null,t,e,!1,n)};Be.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(I(40));return t._reactRootContainer?(Ln(function(){ea(null,null,t,!1,function(){t._reactRootContainer=null,t[At]=null})}),!0):!1};Be.unstable_batchedUpdates=tc;Be.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zo(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return ea(t,e,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm)}catch(t){console.error(t)}}rm(),rh.exports=Be;var E_=rh.exports,Wd=E_;il.createRoot=Wd.createRoot,il.hydrateRoot=Wd.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oi.apply(this,arguments)}var qt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qt||(qt={}));const Gd="popstate";function S_(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Jl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_o(i)}return T_(e,n,null,t)}function J(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function im(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function I_(){return Math.random().toString(36).substr(2,8)}function Kd(t,e){return{usr:t.state,key:t.key,idx:e}}function Jl(t,e,n,r){return n===void 0&&(n=null),Oi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Dr(e):e,{state:n,key:e&&e.key||r||I_()})}function _o(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Dr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function T_(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=qt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Oi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=qt.Pop;let S=c(),m=S==null?null:S-u;u=S,l&&l({action:a,location:_.location,delta:m})}function p(S,m){a=qt.Push;let f=Jl(_.location,S,m);u=c()+1;let g=Kd(f,u),w=_.createHref(f);try{o.pushState(g,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function v(S,m){a=qt.Replace;let f=Jl(_.location,S,m);u=c();let g=Kd(f,u),w=_.createHref(f);o.replaceState(g,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function y(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:_o(S);return f=f.replace(/ $/,"%20"),J(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let _={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Gd,d),l=S,()=>{i.removeEventListener(Gd,d),l=null}},createHref(S){return e(i,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:v,go(S){return o.go(S)}};return _}var qd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qd||(qd={}));function P_(t,e,n){return n===void 0&&(n="/"),k_(t,e,n,!1)}function k_(t,e,n,r){let i=typeof e=="string"?Dr(e):e,s=Tr(i.pathname||"/",n);if(s==null)return null;let o=sm(t);C_(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=U_(s);a=j_(o[l],u,r)}return a}function sm(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(J(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=rn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(J(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sm(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:L_(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of om(s.path))i(s,o,l)}),e}function om(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=om(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function C_(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:M_(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const R_=/^:[\w-]+$/,A_=3,x_=2,N_=1,O_=10,D_=-2,Qd=t=>t==="*";function L_(t,e){let n=t.split("/"),r=n.length;return n.some(Qd)&&(r+=D_),e&&(r+=x_),n.filter(i=>!Qd(i)).reduce((i,s)=>i+(R_.test(s)?A_:s===""?N_:O_),r)}function M_(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function j_(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=s==="/"?e:e.slice(s.length)||"/",d=wo({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),p=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=wo({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:rn([s,d.pathname]),pathnameBase:$_(rn([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=rn([s,d.pathnameBase]))}return o}function wo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=V_(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:v}=c;if(p==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return v&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function V_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),im(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function U_(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return im(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Tr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function F_(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Dr(t):t;return{pathname:n?n.startsWith("/")?n:b_(n,e):e,search:B_(r),hash:H_(i)}}function b_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ka(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function am(t,e){let n=z_(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Dr(t):(i=Oi({},t),J(!i.pathname||!i.pathname.includes("?"),Ka("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),Ka("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),Ka("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=F_(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const rn=t=>t.join("/").replace(/\/\/+/g,"/"),$_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),B_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,H_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function W_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const um=["post","put","patch","delete"];new Set(um);const G_=["get",...um];new Set(G_);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Di(){return Di=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Di.apply(this,arguments)}const ta=E.createContext(null),cm=E.createContext(null),hn=E.createContext(null),na=E.createContext(null),pn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),dm=E.createContext(null);function K_(t,e){let{relative:n}=e===void 0?{}:e;Yi()||J(!1);let{basename:r,navigator:i}=E.useContext(hn),{hash:s,pathname:o,search:a}=ra(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:rn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Yi(){return E.useContext(na)!=null}function Ji(){return Yi()||J(!1),E.useContext(na).location}function fm(t){E.useContext(hn).static||E.useLayoutEffect(t)}function mn(){let{isDataRoute:t}=E.useContext(pn);return t?o0():q_()}function q_(){Yi()||J(!1);let t=E.useContext(ta),{basename:e,future:n,navigator:r}=E.useContext(hn),{matches:i}=E.useContext(pn),{pathname:s}=Ji(),o=JSON.stringify(am(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return fm(()=>{a.current=!0}),E.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=lm(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:rn([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function uc(){let{matches:t}=E.useContext(pn),e=t[t.length-1];return e?e.params:{}}function ra(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(hn),{matches:i}=E.useContext(pn),{pathname:s}=Ji(),o=JSON.stringify(am(i,r.v7_relativeSplatPath));return E.useMemo(()=>lm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Q_(t,e){return Y_(t,e)}function Y_(t,e,n,r){Yi()||J(!1);let{navigator:i}=E.useContext(hn),{matches:s}=E.useContext(pn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ji(),c;if(e){var d;let S=typeof e=="string"?Dr(e):e;l==="/"||(d=S.pathname)!=null&&d.startsWith(l)||J(!1),c=S}else c=u;let p=c.pathname||"/",v=p;if(l!=="/"){let S=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=P_(t,{pathname:v}),_=t0(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:rn([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:rn([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&_?E.createElement(na.Provider,{value:{location:Di({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:qt.Pop}},_):_}function J_(){let t=s0(),e=W_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const X_=E.createElement(J_,null);class Z_ extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(pn.Provider,{value:this.props.routeContext},E.createElement(dm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e0(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(ta);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(pn.Provider,{value:e},r)}function t0(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||J(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:v}=n,y=d.route.loader&&p[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,p)=>{let v,y=!1,_=null,S=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||X_,l&&(u<0&&p===0?(y=!0,S=null):u===p&&(y=!0,S=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,p+1)),f=()=>{let g;return v?g=_:y?g=S:d.route.Component?g=E.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,E.createElement(e0,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?E.createElement(Z_,{location:n.location,revalidation:n.revalidation,component:_,error:v,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var hm=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(hm||{}),Eo=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Eo||{});function n0(t){let e=E.useContext(ta);return e||J(!1),e}function r0(t){let e=E.useContext(cm);return e||J(!1),e}function i0(t){let e=E.useContext(pn);return e||J(!1),e}function pm(t){let e=i0(),n=e.matches[e.matches.length-1];return n.route.id||J(!1),n.route.id}function s0(){var t;let e=E.useContext(dm),n=r0(Eo.UseRouteError),r=pm(Eo.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function o0(){let{router:t}=n0(hm.UseNavigateStable),e=pm(Eo.UseNavigateStable),n=E.useRef(!1);return fm(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Di({fromRouteId:e},s)))},[t,e])}function ot(t){J(!1)}function a0(t){let{basename:e="/",children:n=null,location:r,navigationType:i=qt.Pop,navigator:s,static:o=!1,future:a}=t;Yi()&&J(!1);let l=e.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:s,static:o,future:Di({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Dr(r));let{pathname:c="/",search:d="",hash:p="",state:v=null,key:y="default"}=r,_=E.useMemo(()=>{let S=Tr(c,l);return S==null?null:{location:{pathname:S,search:d,hash:p,state:v,key:y},navigationType:i}},[l,c,d,p,v,y,i]);return _==null?null:E.createElement(hn.Provider,{value:u},E.createElement(na.Provider,{children:n,value:_}))}function l0(t){let{children:e,location:n}=t;return Q_(Xl(e),n)}new Promise(()=>{});function Xl(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Xl(r.props.children,s));return}r.type!==ot&&J(!1),!r.props.index||!r.props.children||J(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Xl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},So.apply(this,arguments)}function mm(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function u0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function c0(t,e){return t.button===0&&(!e||e==="_self")&&!u0(t)}const d0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],f0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],h0="6";try{window.__reactRouterVersion=h0}catch{}const p0=E.createContext({isTransitioning:!1}),m0="startTransition",Yd=cv[m0];function g0(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=S_({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(d=>{u&&Yd?Yd(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.createElement(a0,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const v0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",y0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,p=mm(e,d0),{basename:v}=E.useContext(hn),y,_=!1;if(typeof u=="string"&&y0.test(u)&&(y=u,v0))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),T=Tr(w.pathname,v);w.origin===g.origin&&T!=null?u=T+w.search+w.hash:_=!0}catch{}let S=K_(u,{relative:i}),m=E0(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function f(g){r&&r(g),g.defaultPrevented||m(g)}return E.createElement("a",So({},p,{href:y||S,onClick:_||s?r:f,ref:n,target:l}))}),_0=E.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=mm(e,f0),p=ra(l,{relative:d.relative}),v=Ji(),y=E.useContext(cm),{navigator:_,basename:S}=E.useContext(hn),m=y!=null&&S0(p)&&u===!0,f=_.encodeLocation?_.encodeLocation(p).pathname:p.pathname,g=v.pathname,w=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(g=g.toLowerCase(),w=w?w.toLowerCase():null,f=f.toLowerCase()),w&&S&&(w=Tr(w,S)||w);const T=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let k=g===f||!o&&g.startsWith(f)&&g.charAt(T)==="/",R=w!=null&&(w===f||!o&&w.startsWith(f)&&w.charAt(f.length)==="/"),A={isActive:k,isPending:R,isTransitioning:m},z=k?r:void 0,O;typeof s=="function"?O=s(A):O=[s,k?"active":null,R?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let Le=typeof a=="function"?a(A):a;return E.createElement(fe,So({},d,{"aria-current":z,className:O,ref:n,style:Le,to:l,unstable_viewTransition:u}),typeof c=="function"?c(A):c)});var Zl;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Zl||(Zl={}));var Jd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Jd||(Jd={}));function w0(t){let e=E.useContext(ta);return e||J(!1),e}function E0(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=mn(),u=Ji(),c=ra(t,{relative:o});return E.useCallback(d=>{if(c0(d,n)){d.preventDefault();let p=r!==void 0?r:_o(u)===_o(c);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function S0(t,e){e===void 0&&(e={});let n=E.useContext(p0);n==null&&J(!1);let{basename:r}=w0(Zl.useViewTransitionState),i=ra(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Tr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Tr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return wo(i.pathname,o)!=null||wo(i.pathname,s)!=null}const Hn=dt.createContext({});var Xd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},I0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(p=64)),r.push(n[c],n[d],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):I0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new T0;const p=s<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class T0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P0=function(t){const e=gm(t);return vm.encodeByteArray(e,!0)},Io=function(t){return P0(t).replace(/\./g,"")},ym=function(t){try{return vm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=()=>k0().__FIREBASE_DEFAULTS__,R0=()=>{if(typeof process>"u"||typeof Xd>"u")return;const t=Xd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},A0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ym(t[1]);return e&&JSON.parse(e)},cc=()=>{try{return C0()||R0()||A0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_m=t=>{var e,n;return(n=(e=cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},x0=t=>{const e=_m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wm=()=>{var t;return(t=cc())===null||t===void 0?void 0:t.config},Em=t=>{var e;return(e=cc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Io(JSON.stringify(n)),Io(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function D0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function L0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function M0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function j0(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function V0(){try{return typeof indexedDB=="object"}catch{return!1}}function U0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=F0,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?b0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mt(i,a,r)}}function b0(t,e){return t.replace(z0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const z0=/\{\$([^}]+)}/g;function $0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zd(s)&&Zd(o)){if(!Pr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ei(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function B0(t,e){const n=new H0(t,e);return n.subscribe.bind(n)}class H0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");W0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qa),i.error===void 0&&(i.error=qa),i.complete===void 0&&(i.complete=qa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new N0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(q0(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:K0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K0(t){return t===In?void 0:t}function q0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new G0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const Y0={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},J0=F.INFO,X0={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Z0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=X0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dc{constructor(e){this.name=e,this._logLevel=J0,this._logHandler=Z0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const ew=(t,e)=>e.some(n=>t instanceof n);let ef,tf;function tw(){return ef||(ef=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nw(){return tf||(tf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sm=new WeakMap,eu=new WeakMap,Im=new WeakMap,Qa=new WeakMap,fc=new WeakMap;function rw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sm.set(n,t)}).catch(()=>{}),fc.set(e,t),e}function iw(t){if(eu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});eu.set(t,e)}let tu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return eu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sw(t){tu=t(tu)}function ow(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ya(this),e,...n);return Im.set(r,e.sort?e.sort():[e]),sn(r)}:nw().includes(t)?function(...e){return t.apply(Ya(this),e),sn(Sm.get(this))}:function(...e){return sn(t.apply(Ya(this),e))}}function aw(t){return typeof t=="function"?ow(t):(t instanceof IDBTransaction&&iw(t),ew(t,tw())?new Proxy(t,tu):t)}function sn(t){if(t instanceof IDBRequest)return rw(t);if(Qa.has(t))return Qa.get(t);const e=aw(t);return e!==t&&(Qa.set(t,e),fc.set(e,t)),e}const Ya=t=>fc.get(t);function lw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=sn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sn(o.result),l.oldVersion,l.newVersion,sn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const uw=["get","getKey","getAll","getAllKeys","count"],cw=["put","add","delete","clear"],Ja=new Map;function nf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ja.get(e))return Ja.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ja.set(e,s),s}sw(t=>({...t,get:(e,n,r)=>nf(e,n)||t.get(e,n,r),has:(e,n)=>!!nf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nu="@firebase/app",rf="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new dc("@firebase/app"),hw="@firebase/app-compat",pw="@firebase/analytics-compat",mw="@firebase/analytics",gw="@firebase/app-check-compat",vw="@firebase/app-check",yw="@firebase/auth",_w="@firebase/auth-compat",ww="@firebase/database",Ew="@firebase/database-compat",Sw="@firebase/functions",Iw="@firebase/functions-compat",Tw="@firebase/installations",Pw="@firebase/installations-compat",kw="@firebase/messaging",Cw="@firebase/messaging-compat",Rw="@firebase/performance",Aw="@firebase/performance-compat",xw="@firebase/remote-config",Nw="@firebase/remote-config-compat",Ow="@firebase/storage",Dw="@firebase/storage-compat",Lw="@firebase/firestore",Mw="@firebase/vertexai-preview",jw="@firebase/firestore-compat",Vw="firebase",Uw="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="[DEFAULT]",Fw={[nu]:"fire-core",[hw]:"fire-core-compat",[mw]:"fire-analytics",[pw]:"fire-analytics-compat",[vw]:"fire-app-check",[gw]:"fire-app-check-compat",[yw]:"fire-auth",[_w]:"fire-auth-compat",[ww]:"fire-rtdb",[Ew]:"fire-rtdb-compat",[Sw]:"fire-fn",[Iw]:"fire-fn-compat",[Tw]:"fire-iid",[Pw]:"fire-iid-compat",[kw]:"fire-fcm",[Cw]:"fire-fcm-compat",[Rw]:"fire-perf",[Aw]:"fire-perf-compat",[xw]:"fire-rc",[Nw]:"fire-rc-compat",[Ow]:"fire-gcs",[Dw]:"fire-gcs-compat",[Lw]:"fire-fst",[jw]:"fire-fst-compat",[Mw]:"fire-vertex","fire-js":"fire-js",[Vw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map,bw=new Map,iu=new Map;function sf(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kr(t){const e=t.name;if(iu.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;iu.set(e,t);for(const n of To.values())sf(n,t);for(const n of bw.values())sf(n,t);return!0}function hc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ct(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new Xi("app","Firebase",zw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=Uw;function Tm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ru,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=wm()),!n)throw on.create("no-options");const s=To.get(i);if(s){if(Pr(n,s.options)&&Pr(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new Q0(i);for(const l of iu.values())o.addComponent(l);const a=new $w(n,r,o);return To.set(i,a),a}function Pm(t=ru){const e=To.get(t);if(!e&&t===ru&&wm())return Tm();if(!e)throw on.create("no-app",{appName:t});return e}function an(t,e,n){var r;let i=(r=Fw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}kr(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="firebase-heartbeat-database",Hw=1,Li="firebase-heartbeat-store";let Xa=null;function km(){return Xa||(Xa=lw(Bw,Hw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Li)}catch(n){console.warn(n)}}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),Xa}async function Ww(t){try{const n=(await km()).transaction(Li),r=await n.objectStore(Li).get(Cm(t));return await n.done,r}catch(e){if(e instanceof Mt)jn.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(n.message)}}}async function of(t,e){try{const r=(await km()).transaction(Li,"readwrite");await r.objectStore(Li).put(e,Cm(t)),await r.done}catch(n){if(n instanceof Mt)jn.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function Cm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=1024,Kw=30*24*60*60*1e3;class qw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=af();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Kw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=af(),{heartbeatsToSend:r,unsentEntries:i}=Qw(this._heartbeatsCache.heartbeats),s=Io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function af(){return new Date().toISOString().substring(0,10)}function Qw(t,e=Gw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Yw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return V0()?U0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ww(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lf(t){return Io(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t){kr(new Mn("platform-logger",e=>new dw(e),"PRIVATE")),kr(new Mn("heartbeat",e=>new qw(e),"PRIVATE")),an(nu,rf,t),an(nu,rf,"esm2017"),an("fire-js","")}Jw("");var Xw="firebase",Zw="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(Xw,Zw,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new dc("@firebase/firestore");function Po(t,...e){if(Cr.logLevel<=F.DEBUG){const n=e.map(mc);Cr.debug(`Firestore (${Mr}): ${t}`,...n)}}function pc(t,...e){if(Cr.logLevel<=F.ERROR){const n=e.map(mc);Cr.error(`Firestore (${Mr}): ${t}`,...n)}}function Rm(t,...e){if(Cr.logLevel<=F.WARN){const n=e.map(mc);Cr.warn(`Firestore (${Mr}): ${t}`,...n)}}function mc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: `+t;throw pc(e),new Error(e)}function be(t,e){t||K()}function es(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="ok",eE="cancelled",ci="unknown",V="invalid-argument",tE="deadline-exceeded",nE="not-found",rE="permission-denied",su="unauthenticated",iE="resource-exhausted",Rr="failed-precondition",sE="aborted",oE="out-of-range",Am="unimplemented",aE="internal",lE="unavailable";class N extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class cE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dE{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(be(typeof e.accessToken=="string"),new xm(e.accessToken,new ke(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class fE{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class hE{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new fE(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mE{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(be(typeof e.token=="string"),new pE(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Mi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mi&&e.projectId===this.projectId&&e.database===this.database}}class ji{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ji.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ji?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends ji{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(V,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const vE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends ji{construct(e,n,r){return new Re(e,n,r)}static isValidIdentifier(e){return vE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(V,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(V,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(V,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(V,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.path=e}static fromPath(e){return new Se(re.fromString(e))}static fromName(e){return new Se(re.fromString(e).popFirst(5))}static empty(){return new Se(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Se(new re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t,e,n){if(!n)throw new N(V,`Function ${t}() cannot be called with an empty ${e}.`)}function cf(t){if(!Se.isDocumentKey(t))throw new N(V,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function df(t){if(Se.isDocumentKey(t))throw new N(V,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function jr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(V,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gc(t);throw new N(V,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs=null;function yE(){return Cs===null?Cs=function(){return 268435456+Math.round(2147483648*Math.random())}():Cs++,"0x"+Cs.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t){return t==null}function ko(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ff,j;function hf(t){if(t===void 0)return pc("RPC_ERROR","HTTP error has no status"),ci;switch(t){case 200:return uf;case 400:return Rr;case 401:return su;case 403:return rE;case 404:return nE;case 409:return sE;case 416:return oE;case 429:return iE;case 499:return eE;case 500:return ci;case 501:return Am;case 503:return lE;case 504:return tE;default:return t>=200&&t<300?uf:t>=400&&t<500?Rr:t>=500&&t<600?aE:ci}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(j=ff||(ff={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";class EE extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get R(){return!1}P(n,r,i,s,o){const a=yE(),l=this.I(n,r.toUriEncodedString());Po("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(c=>(Po("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Rm("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}g(n,r,i,s,o,a){return this.P(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=wE[n];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new N(hf(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new N(hf(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=SE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Dm(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TE("Invalid base64 string: "+s):s}}(e);return new Ot(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const PE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(be(!!t),typeof t=="string"){let e=0;const n=PE.exec(t);if(be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(t.seconds),nanos:ne(t.nanos)}}function ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vi(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(V,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(V,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(V,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(V,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mm(t){const e=t.mapValue.fields.__previous_value__;return Lm(e)?Mm(e):e}function Ui(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs={fields:{__type__:{stringValue:"__max__"}}};function Un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lm(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:K()}function Co(t,e){if(t===e)return!0;const n=Un(t);if(n!==Un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ui(t).isEqual(Ui(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vn(i.timestampValue),a=Vn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Vi(i.bytesValue).isEqual(Vi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ne(i.geoPointValue.latitude)===ne(s.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ne(i.integerValue)===ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ne(i.doubleValue),a=ne(s.doubleValue);return o===a?ko(o)===ko(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Dm(t.arrayValue.values||[],e.arrayValue.values||[],Co);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(pf(o)!==pf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Co(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function Fi(t,e){return(t.values||[]).find(n=>Co(n,e))!==void 0}function Ro(t,e){if(t===e)return 0;const n=Un(t),r=Un(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ne(s.integerValue||s.doubleValue),l=ne(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return mf(t.timestampValue,e.timestampValue);case 4:return mf(Ui(t),Ui(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Vi(s),l=Vi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=oe(a[u],l[u]);if(c!==0)return c}return oe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=oe(ne(s.latitude),ne(o.latitude));return a!==0?a:oe(ne(s.longitude),ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ro(a[u],l[u]);if(c)return c}return oe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Rs&&o===Rs)return 0;if(s===Rs)return 1;if(o===Rs)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const p=oe(l[d],c[d]);if(p!==0)return p;const v=Ro(a[l[d]],u[c[d]]);if(v!==0)return v}return oe(l.length,c.length)}(t.mapValue,e.mapValue);default:throw K()}}function mf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Vn(t),r=Vn(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function jm(t){return!!t&&"arrayValue"in t}function gf(t){return!!t&&"nullValue"in t}function vf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Za(t){return!!t&&"mapValue"in t}function di(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=di(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=di(t.arrayValue.values[n]);return e}return Object.assign({},t)}class yf{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{}class gt extends Vm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kE(e,n,r):n==="array-contains"?new AE(e,r):n==="in"?new xE(e,r):n==="not-in"?new NE(e,r):n==="array-contains-any"?new OE(e,r):new gt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CE(e,r):new RE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ro(n,this.value)):n!==null&&Un(this.value)===Un(n)&&this.matchesComparison(Ro(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ia extends Vm{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new ia(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class kE extends gt{constructor(e,n,r){super(e,n,r),this.key=Se.fromName(r.referenceValue)}matches(e){const n=Se.comparator(e.key,this.key);return this.matchesComparison(n)}}class CE extends gt{constructor(e,n){super(e,"in",n),this.keys=Um("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RE extends gt{constructor(e,n){super(e,"not-in",n),this.keys=Um("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Um(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Se.fromName(r.referenceValue))}class AE extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jm(n)&&Fi(n.arrayValue,this.value)}}class xE extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fi(this.value.arrayValue,n)}}class NE extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fi(this.value.arrayValue,n)}}class OE extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new ze(0,0))}static max(){return new ce(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n){this.comparator=e,this.root=n||de.EMPTY}insert(e,n){return new Ao(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new Ao(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new As(this.root,e,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new As(this.root,e,this.comparator,!0)}}class As{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??de.RED,this.left=i??de.EMPTY,this.right=s??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new de(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return de.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new de(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.comparator=e,this.data=new Ao(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _f(this.data.getIterator())}getIteratorFrom(e){return new _f(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bi(this.comparator);return n.data=e,n}}class _f{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Fn([])}unionWith(e){let n=new bi(Re.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dm(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=di(n)}setAll(e){let n=Re.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=di(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Co(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Za(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ts(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new je(di(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,ce.min(),ce.min(),ce.min(),je.empty(),0)}static newFoundDocument(e,n,r,i){return new lt(e,1,n,ce.min(),r,i,0)}static newNoDocument(e,n){return new lt(e,2,n,ce.min(),ce.min(),je.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,ce.min(),ce.min(),je.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function wf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DE(t,e,n,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function ME(t){const e=es(t);if(e.S===null){e.S=[];const n=new Set;for(const s of e.explicitOrderBy)e.S.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new bi(Re.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.S.push(new ou(s,r))}),n.has(Re.keyField().canonicalString())||e.S.push(new ou(Re.keyField(),r))}return e.S}function jE(t){const e=es(t);return e.N||(e.N=VE(e,ME(t))),e.N}function VE(t,e){if(t.limitType==="F")return wf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ou(i.field,s)});const n=t.endAt?new yf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yf(t.startAt.position,t.startAt.inclusive):null;return wf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!ko(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ko(i)?"-0":i}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this._=void 0}}class FE extends sa{}class Fm extends sa{constructor(e){super(),this.elements=e}}class bm extends sa{constructor(e){super(),this.elements=e}}class bE extends sa{constructor(e,n){super(),this.serializer=e,this.q=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){this.field=e,this.transform=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class oa{}class $m extends oa{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vc extends oa{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class Bm extends oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zE extends oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E={asc:"ASCENDING",desc:"DESCENDING"},BE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HE={and:"AND",or:"OR"};class WE{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function au(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KE(t,e){return au(t,e.toTimestamp())}function fi(t){return be(!!t),ce.fromTimestamp(function(n){const r=Vn(n);return new ze(r.seconds,r.nanos)}(t))}function yc(t,e){return lu(t,e).canonicalString()}function lu(t,e){const n=function(i){return new re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xo(t,e){return yc(t.databaseId,e.path)}function uu(t,e){const n=function(i){const s=re.fromString(i);return be(Wm(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new N(V,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(V,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Se(function(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function Ef(t,e,n){return{name:xo(t,e),fields:n.value.mapValue.fields}}function qE(t,e){return"found"in e?function(r,i){be(!!i.found),i.found.name,i.found.updateTime;const s=uu(r,i.found.name),o=fi(i.found.updateTime),a=i.found.createTime?fi(i.found.createTime):ce.min(),l=new je({mapValue:{fields:i.found.fields}});return lt.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){be(!!i.missing),be(!!i.readTime);const s=uu(r,i.missing),o=fi(i.readTime);return lt.newNoDocument(s,o)}(t,e):K()}function QE(t,e){let n;if(e instanceof $m)n={update:Ef(t,e.key,e.value)};else if(e instanceof Bm)n={delete:xo(t,e.key)};else if(e instanceof vc)n={update:Ef(t,e.key,e.data),updateMask:eS(e.fieldMask)};else{if(!(e instanceof zE))return K();n={verify:xo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof FE)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fm)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof bm)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bE)return{fieldPath:o.field.canonicalString(),increment:a.q};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:KE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function YE(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(u,c){return yc(u.databaseId,c)}(t,i);const s=function(u){if(u.length!==0)return Hm(ia.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(p){return{field:qn(p.field),direction:JE(p.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=function(u,c){return u.useProto3Json||_E(c)?c:{value:c}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{B:n,parent:i}}function JE(t){return $E[t]}function XE(t){return BE[t]}function ZE(t){return HE[t]}function qn(t){return{fieldPath:t.canonicalString()}}function Hm(t){return t instanceof gt?function(n){if(n.op==="=="){if(vf(n.value))return{unaryFilter:{field:qn(n.field),op:"IS_NAN"}};if(gf(n.value))return{unaryFilter:{field:qn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vf(n.value))return{unaryFilter:{field:qn(n.field),op:"IS_NOT_NAN"}};if(gf(n.value))return{unaryFilter:{field:qn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qn(n.field),op:XE(n.op),value:n.value}}}(t):t instanceof ia?function(n){const r=n.getFilters().map(i=>Hm(i));return r.length===1?r[0]:{compositeFilter:{op:ZE(n.op),filters:r}}}(t):K()}function eS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Wm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t){return new WE(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new N(Rr,"The client has already been terminated.")}P(e,n,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,lu(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===su&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(ci,s.toString())})}g(e,n,r,i,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,lu(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===su&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(ci,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function wc(t,e){const n=es(t),r={writes:e.map(i=>QE(n.serializer,i))};await n.P("Commit",n.serializer.databaseId,re.emptyPath(),r)}async function nS(t,e){const n=es(t),r={documents:e.map(a=>xo(n.serializer,a))},i=await n.g("BatchGetDocuments",n.serializer.databaseId,re.emptyPath(),r,e.length),s=new Map;i.forEach(a=>{const l=qE(n.serializer,a);s.set(l.key.toString(),l)});const o=[];return e.forEach(a=>{const l=s.get(a.toString());be(!!l),o.push(l)}),o}async function rS(t,e){const n=es(t),{B:r,parent:i}=YE(n.serializer,jE(e));return(await n.g("RunQuery",n.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,l,u){const c=uu(a,l.name),d=fi(l.updateTime),p=l.createTime?fi(l.createTime):ce.min(),v=new je({mapValue:{fields:l.fields}}),y=lt.newFoundDocument(c,d,p,v);return u&&y.setHasCommittedMutations(),u?y.setHasCommittedMutations():y}(n.serializer,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Map;function ns(t){if(t._terminated)throw new N(Rr,"The client has already been terminated.");if(!hi.has(t)){Po("ComponentProvider","Initializing Datastore");const e=function(s){return new EE(s,fetch.bind(null))}(function(s,o,a,l){return new gE(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Om(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=_c(t._databaseId),r=function(s,o,a,l){return new tS(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);hi.set(t,r)}return hi.get(t)}class Sf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(V,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(V,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new N(V,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Om((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(V,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(V,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(V,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class aa{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(Rr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(Rr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uE;switch(r.type){case"firstParty":return new hE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(V,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hi.get(n);r&&(Po("ComponentProvider","Removing Datastore"),hi.delete(n),r.terminate())}(this),Promise.resolve()}}function iS(t,e){const n=typeof t=="object"?t:Pm(),r=typeof t=="string"?t:"(default)",i=hc(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=x0("firestore");s&&sS(i,...s)}return i}function sS(t,e,n,r={}){var i;const s=(t=jr(t,aa))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Rm("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ke.MOCK_USER;else{a=O0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new N(V,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ke(u)}t._authCredentials=new cE(new xm(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new la(this.firestore,e,this._query)}}class De{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class kt extends la{constructor(e,n,r){super(e,n,function(s){return new LE(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new Se(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function Ec(t,e,...n){if(t=we(t),Nm("collection","path",e),t instanceof aa){const r=re.fromString(e,...n);return df(r),new kt(t,null,r)}{if(!(t instanceof De||t instanceof kt))throw new N(V,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return df(r),new kt(t.firestore,null,r)}}function gn(t,e,...n){if(t=we(t),arguments.length===1&&(e=IE.newId()),Nm("doc","path",e),t instanceof aa){const r=re.fromString(e,...n);return cf(r),new De(t,null,new Se(r))}{if(!(t instanceof De||t instanceof kt))throw new N(V,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return cf(r),new De(t.firestore,t instanceof kt?t.converter:null,new Se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ar(Ot.fromBase64String(e))}catch(n){throw new N(V,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ar(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(V,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(V,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(V,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=/^__.*__$/;class aS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vc(e,this.data,this.fieldMask,n,this.fieldTransforms):new $m(e,this.data,n,this.fieldTransforms)}}class Gm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vc(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Km(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class ca{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new ca(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return No(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(Km(this.et)&&oS.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class lS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_c(e)}ht(e,n,r,i=!1){return new ca({et:e,methodName:n,lt:r,path:Re.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qm(t){const e=t._freezeSettings(),n=_c(t._databaseId);return new lS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uS(t,e,n,r,i,s={}){const o=t.ht(s.merge||s.mergeFields?2:0,e,n,i);Pc("Data must be an object, but it was:",o,r);const a=Ym(r,o);let l,u;if(s.merge)l=new Fn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const p=cu(e,d,n);if(!o.contains(p))throw new N(V,`Field '${p}' is specified in your field mask but missing from your input data.`);Xm(c,p)||c.push(p)}l=new Fn(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new aS(new je(a),l,u)}class da extends rs{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e._t(`${this._methodName}() can only appear at the top level of your update data`):e._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof da}}function Qm(t,e,n){return new ca({et:3,lt:e.settings.lt,methodName:t._methodName,it:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ic extends rs{constructor(e,n){super(e),this.dt=n}_toFieldTransform(e){const n=Qm(this,e,!0),r=this.dt.map(s=>Vr(s,n)),i=new Fm(r);return new zm(e.path,i)}isEqual(e){return e instanceof Ic&&Pr(this.dt,e.dt)}}class Tc extends rs{constructor(e,n){super(e),this.dt=n}_toFieldTransform(e){const n=Qm(this,e,!0),r=this.dt.map(s=>Vr(s,n)),i=new bm(r);return new zm(e.path,i)}isEqual(e){return e instanceof Tc&&Pr(this.dt,e.dt)}}function cS(t,e,n,r){const i=t.ht(1,e,n);Pc("Data must be an object, but it was:",i,r);const s=[],o=je.empty();ts(r,(l,u)=>{const c=kc(e,l,n);u=we(u);const d=i.ot(c);if(u instanceof da)s.push(c);else{const p=Vr(u,d);p!=null&&(s.push(c),o.set(c,p))}});const a=new Fn(s);return new Gm(o,a,i.fieldTransforms)}function dS(t,e,n,r,i,s){const o=t.ht(1,e,n),a=[cu(e,r,n)],l=[i];if(s.length%2!=0)throw new N(V,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(cu(e,s[p])),l.push(s[p+1]);const u=[],c=je.empty();for(let p=a.length-1;p>=0;--p)if(!Xm(u,a[p])){const v=a[p];let y=l[p];y=we(y);const _=o.ot(v);if(y instanceof da)u.push(v);else{const S=Vr(y,_);S!=null&&(u.push(v),c.set(v,S))}}const d=new Fn(u);return new Gm(c,d,o.fieldTransforms)}function Vr(t,e){if(Jm(t=we(t)))return Pc("Unsupported field value:",e,t),Ym(t,e);if(t instanceof rs)return function(r,i){if(!Km(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Vr(a,i.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ze.fromDate(r);return{timestampValue:au(i.serializer,s)}}if(r instanceof ze){const s=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:au(i.serializer,s)}}if(r instanceof Sc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ar)return{bytesValue:GE(i.serializer,r._byteString)};if(r instanceof De){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i._t(`Unsupported field value: ${gc(r)}`)}(t,e)}function Ym(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(r,i)=>{const s=Vr(i,e.nt(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Jm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Sc||t instanceof Ar||t instanceof De||t instanceof rs)}function Pc(t,e,n){if(!Jm(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=gc(n);throw r==="an object"?e._t(t+" a custom object"):e._t(t+" "+r)}}function cu(t,e,n){if((e=we(e))instanceof ua)return e._internalPath;if(typeof e=="string")return kc(t,e);throw No("Field path arguments must be of type string or ",t,!1,void 0,n)}const fS=new RegExp("[~\\*/\\[\\]]");function kc(t,e,n){if(e.search(fS)>=0)throw No(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ua(...e.split("."))._internalPath}catch{throw No(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function No(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(V,a+t+l)}function Xm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eg extends Zm{data(){return super.data()}}class hS{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function pS(t,e){return typeof e=="string"?kc(t,e):e instanceof ua?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class tg extends class{convertValue(n,r="none"){switch(Un(n)){case 0:return null;case 1:return n.booleanValue;case 2:return ne(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(Vi(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw K()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return ts(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(n){return new Sc(ne(n.latitude),ne(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=Mm(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(Ui(n));default:return null}}convertTimestamp(n){const r=Vn(n);return new ze(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=re.fromString(n);be(Wm(i));const s=new Mi(i.get(1),i.get(3)),o=new Se(i.popFirst(5));return s.isEqual(r)||pc(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ar(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,n)}}function ng(t){const e=ns((t=jr(t,De)).firestore),n=new tg(t.firestore);return nS(e,[t._key]).then(r=>{be(r.length===1);const i=r[0];return new Zm(t.firestore,n,t._key,i.isFoundDocument()?i:null,t.converter)})}function rg(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new N(Am,"limitToLast() queries require specifying at least one orderBy() clause")})((t=jr(t,la))._query);const e=ns(t.firestore),n=new tg(t.firestore);return rS(e,t._query).then(r=>{const i=r.map(s=>new eg(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new hS(t,i)})}function fa(t,e,n,...r){const i=qm((t=jr(t,De)).firestore);let s;return s=typeof(e=we(e))=="string"||e instanceof ua?dS(i,"updateDoc",t._key,e,n,r):cS(i,"updateDoc",t._key,e),wc(ns(t.firestore),[s.toMutation(t._key,An.exists(!0))])}function gS(t){return wc(ns((t=jr(t,De)).firestore),[new Bm(t._key,An.none())])}function vS(t,e){const n=gn(t=jr(t,kt)),r=mS(t.converter,e),i=uS(qm(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return wc(ns(t.firestore),[i.toMutation(n._key,An.exists(!1))]).then(()=>n)}function ig(...t){return new Ic("arrayUnion",t)}function yS(...t){return new Tc("arrayRemove",t)}(function(){(function(n){Mr=n})(`${Lr}_lite`),kr(new Mn("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new aa(new dE(e.getProvider("auth-internal")),new mE(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(V,'"projectId" not provided in firebase.initializeApp.');return new Mi(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),an("firestore-lite","4.6.4",""),an("firestore-lite","4.6.4","esm2017")})();function Cc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function sg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _S=sg,og=new Xi("auth","Firebase",sg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new dc("@firebase/auth");function wS(t,...e){Oo.logLevel<=F.WARN&&Oo.warn(`Auth (${Lr}): ${t}`,...e)}function Bs(t,...e){Oo.logLevel<=F.ERROR&&Oo.error(`Auth (${Lr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,...e){throw Rc(t,...e)}function pt(t,...e){return Rc(t,...e)}function ag(t,e,n){const r=Object.assign(Object.assign({},_S()),{[e]:n});return new Xi("auth","Firebase",r).create(e,{appName:t.name})}function Ct(t){return ag(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return og.create(t,...e)}function x(t,e,...n){if(!t)throw Rc(e,...n)}function St(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bs(e),new Error(e)}function Dt(t,e){t||St(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ES(){return If()==="http:"||If()==="https:"}function If(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ES()||L0()||"connection"in navigator)?navigator.onLine:!0}function IS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dt(n>e,"Short delay should be less than long delay!"),this.isMobile=D0()||M0()}get(){return SS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t,e){Dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=new is(3e4,6e4);function vn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yn(t,e,n,r,i={}){return ug(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Zi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),lg.fetch()(cg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ug(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TS),e);try{const i=new CS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xs(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ag(t,c,u);it(t,c)}}catch(i){if(i instanceof Mt)throw i;it(t,"network-request-failed",{message:String(i)})}}async function ss(t,e,n,r,i={}){const s=await yn(t,e,n,r,i);return"mfaPendingCredential"in s&&it(t,"multi-factor-auth-required",{_serverResponse:s}),s}function cg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ac(t.config,i):`${t.config.apiScheme}://${i}`}function kS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),PS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pt(t,e,r);return i.customData._tokenResponse=n,i}function Tf(t){return t!==void 0&&t.enterprise!==void 0}class RS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function AS(t,e){return yn(t,"GET","/v2/recaptchaConfig",vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){return yn(t,"POST","/v1/accounts:delete",e)}async function dg(t,e){return yn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NS(t,e=!1){const n=we(t),r=await n.getIdToken(e),i=xc(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:pi(el(i.auth_time)),issuedAtTime:pi(el(i.iat)),expirationTime:pi(el(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function el(t){return Number(t)*1e3}function xc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bs("JWT malformed, contained fewer than 3 sections"),null;try{const i=ym(n);return i?JSON.parse(i):(Bs("Failed to decode base64 JWT payload"),null)}catch(i){return Bs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pf(t){const e=xc(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&OS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pi(this.lastLoginAt),this.creationTime=pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zi(t,dg(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fg(s.providerUserInfo):[],a=MS(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fu(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function LS(t){const e=we(t);await Do(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fg(t){return t.map(e=>{var{providerId:n}=e,r=Cc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(t,e){const n=await ug(t,{},async()=>{const r=Zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=cg(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VS(t,e){return yn(t,"POST","/v2/accounts:revokeToken",vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=Pf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new pr;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class It{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zi(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NS(this,e)}reload(){return LS(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Do(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(Ct(this.auth));const e=await this.getIdToken();return await zi(this,xS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:T,providerData:k,stsTokenManager:R}=n;x(g&&R,e,"internal-error");const A=pr.fromJSON(this.name,R);x(typeof g=="string",e,"internal-error"),Vt(d,e.name),Vt(p,e.name),x(typeof w=="boolean",e,"internal-error"),x(typeof T=="boolean",e,"internal-error"),Vt(v,e.name),Vt(y,e.name),Vt(_,e.name),Vt(S,e.name),Vt(m,e.name),Vt(f,e.name);const z=new It({uid:g,auth:e,email:p,emailVerified:w,displayName:d,isAnonymous:T,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:A,createdAt:m,lastLoginAt:f});return k&&Array.isArray(k)&&(z.providerData=k.map(O=>Object.assign({},O))),S&&(z._redirectEventId=S),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new pr;i.updateFromServerResponse(n);const s=new It({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Do(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];x(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new pr;a.updateFromIdToken(r);const l=new It({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=new Map;function Tt(t){Dt(t instanceof Function,"Expected a class definition");let e=kf.get(t);return e?(Dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hg.type="NONE";const Cf=hg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t,e,n){return`firebase:${t}:${e}:${n}`}class mr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?It._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mr(Tt(Cf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Tt(Cf);const o=Hs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=It._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new mr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new mr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yg(e))return"Blackberry";if(_g(e))return"Webos";if(Nc(e))return"Safari";if((e.includes("chrome/")||mg(e))&&!e.includes("edge/"))return"Chrome";if(vg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pg(t=_e()){return/firefox\//i.test(t)}function Nc(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mg(t=_e()){return/crios\//i.test(t)}function gg(t=_e()){return/iemobile/i.test(t)}function vg(t=_e()){return/android/i.test(t)}function yg(t=_e()){return/blackberry/i.test(t)}function _g(t=_e()){return/webos/i.test(t)}function ha(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function US(t=_e()){var e;return ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FS(){return j0()&&document.documentMode===10}function wg(t=_e()){return ha(t)||vg(t)||_g(t)||yg(t)||/windows phone/i.test(t)||gg(t)}function bS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t,e=[]){let n;switch(t){case"Browser":n=Rf(_e());break;case"Worker":n=`${Rf(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(t,e={}){return yn(t,"GET","/v2/passwordPolicy",vn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=6;class HS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Af(this),this.idTokenSubscription=new Af(this),this.beforeStateQueue=new zS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dg(this,{idToken:e}),r=await It._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Do(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(Ct(this));const n=e?we(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $S(this),n=new HS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Eg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wn(t){return we(t)}class Af{constructor(e){this.auth=e,this.observer=null,this.addObserver=B0(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GS(t){pa=t}function Sg(t){return pa.loadJS(t)}function KS(){return pa.recaptchaEnterpriseScript}function qS(){return pa.gapiScript}function QS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const YS="recaptcha-enterprise",JS="NO_RECAPTCHA";class XS{constructor(e){this.type=YS,this.auth=Wn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{AS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new RS(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Tf(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(JS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Tf(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=KS();l.length!==0&&(l+=a),Sg(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function xf(t,e,n,r=!1){const i=new XS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await xf(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t,e){const n=hc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Pr(s,e??{}))return i;it(i,"already-initialized")}return n.initialize({options:e})}function e1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function t1(t,e,n){const r=Wn(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ig(e),{host:o,port:a}=n1(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),r1()}function Ig(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function n1(t){const e=Ig(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nf(o)}}}function Nf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function r1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return St("not implemented")}_getIdTokenResponse(e){return St("not implemented")}_linkToIdToken(e,n){return St("not implemented")}_getReauthenticationResolver(e){return St("not implemented")}}async function i1(t,e){return yn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(t,e){return ss(t,"POST","/v1/accounts:signInWithPassword",vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",vn(t,e))}async function a1(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Oc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hu(e,n,"signInWithPassword",s1);case"emailLink":return o1(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hu(e,r,"signUpPassword",i1);case"emailLink":return a1(e,{idToken:n,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(t,e){return ss(t,"POST","/v1/accounts:signInWithIdp",vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="http://localhost";class bn extends Oc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gr(e,n)}buildRequest(){const e={requestUri:l1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function c1(t){const e=Zr(ei(t)).link,n=e?Zr(ei(e)).deep_link_id:null,r=Zr(ei(t)).deep_link_id;return(r?Zr(ei(r)).link:null)||r||n||e||t}class Dc{constructor(e){var n,r,i,s,o,a;const l=Zr(ei(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=u1((i=l.mode)!==null&&i!==void 0?i:null);x(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=c1(e);try{return new Dc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.providerId=Ur.PROVIDER_ID}static credential(e,n){return $i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dc.parseLink(n);return x(r,"argument-error"),$i._fromEmailAndCode(e,r.code,r.tenantId)}}Ur.PROVIDER_ID="password";Ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Tg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends os{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends os{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends os{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends os{constructor(){super("twitter.com")}static credential(e,n){return bn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e){return ss(t,"POST","/v1/accounts:signUp",vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await It._fromIdTokenResponse(e,r,i),o=Of(r);return new zn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Of(r);return new zn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Of(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Mt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lo(e,n,r,i)}}function Pg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(t,s,e,r):s})}async function f1(t,e,n=!1){const r=await zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(t,e,n=!1){const{auth:r}=t;if(ct(r.app))return Promise.reject(Ct(r));const i="reauthenticate";try{const s=await zi(t,Pg(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=xc(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),zn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&it(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(t,e,n=!1){if(ct(t.app))return Promise.reject(Ct(t));const r="signIn",i=await Pg(t,r,e),s=await zn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function p1(t,e){return kg(Wn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(t){const e=Wn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function m1(t,e,n){if(ct(t.app))return Promise.reject(Ct(t));const r=Wn(t),o=await hu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",d1).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Cg(t),l}),a=await zn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function g1(t,e,n){return ct(t.app)?Promise.reject(Ct(t)):p1(we(t),Ur.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cg(t),r})}function v1(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function y1(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function _1(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}const Mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(){const t=_e();return Nc(t)||ha(t)}const E1=1e3,S1=10;class Ag extends Rg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=w1()&&bS(),this.fallbackToPolling=wg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,S1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},E1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ag.type="LOCAL";const I1=Ag;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends Rg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xg.type="SESSION";const Ng=xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ma(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await T1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Lc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return window}function k1(t){mt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function C1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function A1(){return Og()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="firebaseLocalStorageDb",x1=1,jo="firebaseLocalStorage",Lg="fbase_key";class as{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(t,e){return t.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function N1(){const t=indexedDB.deleteDatabase(Dg);return new as(t).toPromise()}function pu(){const t=indexedDB.open(Dg,x1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jo,{keyPath:Lg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await N1(),e(await pu()))})})}async function Df(t,e,n){const r=ga(t,!0).put({[Lg]:e,value:n});return new as(r).toPromise()}async function O1(t,e){const n=ga(t,!1).get(e),r=await new as(n).toPromise();return r===void 0?null:r.value}function Lf(t,e){const n=ga(t,!0).delete(e);return new as(n).toPromise()}const D1=800,L1=3;class Mg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>L1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(A1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await C1(),!this.activeServiceWorker)return;this.sender=new P1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pu();return await Df(e,Mo,"1"),await Lf(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Df(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>O1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ga(i,!1).getAll();return new as(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mg.type="LOCAL";const M1=Mg;new is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e){return e?Tt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends Oc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function V1(t){return kg(t.auth,new Mc(t),t.bypassAuthState)}function U1(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),h1(n,new Mc(t),t.bypassAuthState)}async function F1(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),f1(n,new Mc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return V1;case"linkViaPopup":case"linkViaRedirect":return F1;case"reauthViaPopup":case"reauthViaRedirect":return U1;default:it(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=new is(2e3,1e4);class ar extends jg{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,b1.get())};e()}}ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="pendingRedirect",Ws=new Map;class $1 extends jg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ws.get(this.auth._key());if(!e){try{const r=await B1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ws.set(this.auth._key(),e)}return this.bypassAuthState||Ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B1(t,e){const n=G1(e),r=W1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function H1(t,e){Ws.set(t._key(),e)}function W1(t){return Tt(t._redirectPersistence)}function G1(t){return Hs(z1,t.config.apiKey,t.name)}async function K1(t,e,n=!1){if(ct(t.app))return Promise.reject(Ct(t));const r=Wn(t),i=j1(r,e),o=await new $1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=10*60*1e3;class Q1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=q1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mf(e))}saveEventToCache(e){this.cachedEventUids.add(Mf(e)),this.lastProcessedEventTime=Date.now()}}function Mf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(t,e={}){return yn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z1=/^https?/;async function eI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await J1(t);for(const n of e)try{if(tI(n))return}catch{}it(t,"unauthorized-domain")}function tI(t){const e=du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Z1.test(n))return!1;if(X1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new is(3e4,6e4);function jf(){const t=mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rI(t){return new Promise((e,n)=>{var r,i,s;function o(){jf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jf(),n(pt(t,"network-request-failed"))},timeout:nI.get()})}if(!((i=(r=mt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mt().gapi)===null||s===void 0)&&s.load)o();else{const a=QS("iframefcb");return mt()[a]=()=>{gapi.load?o():n(pt(t,"network-request-failed"))},Sg(`${qS()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gs=null,e})}let Gs=null;function iI(t){return Gs=Gs||rI(t),Gs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=new is(5e3,15e3),oI="__/auth/iframe",aI="emulator/auth/iframe",lI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cI(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ac(e,aI):`https://${t.config.authDomain}/${oI}`,r={apiKey:e.apiKey,appName:t.name,v:Lr},i=uI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zi(r).slice(1)}`}async function dI(t){const e=await iI(t),n=mt().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:cI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pt(t,"network-request-failed"),a=mt().setTimeout(()=>{s(o)},sI.get());function l(){mt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hI=500,pI=600,mI="_blank",gI="http://localhost";class Vf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vI(t,e,n,r=hI,i=pI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_e().toLowerCase();n&&(a=mg(u)?mI:n),pg(u)&&(e=e||gI,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[v,y])=>`${p}${v}=${y},`,"");if(US(u)&&a!=="_self")return yI(e||"",a),new Vf(null);const d=window.open(e||"",a,c);x(d,t,"popup-blocked");try{d.focus()}catch{}return new Vf(d)}function yI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="__/auth/handler",wI="emulator/auth/handler",EI=encodeURIComponent("fac");async function Uf(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lr,eventId:i};if(e instanceof Tg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(e instanceof os){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${EI}=${encodeURIComponent(l)}`:"";return`${SI(t)}?${Zi(a).slice(1)}${u}`}function SI({config:t}){return t.emulator?Ac(t,wI):`https://${t.authDomain}/${_I}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="webStorageSupport";class II{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ng,this._completeRedirectFn=K1,this._overrideRedirectResult=H1}async _openPopup(e,n,r,i){var s;Dt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Uf(e,n,r,du(),i);return vI(e,o,Lc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Uf(e,n,r,du(),i);return k1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dI(e),r=new Q1(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tl,{type:tl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tl];o!==void 0&&n(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wg()||Nc()||ha()}}const TI=II;var Ff="@firebase/auth",bf="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CI(t){kr(new Mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Eg(t)},u=new WS(r,i,s,l);return e1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kr(new Mn("auth-internal",e=>{const n=Wn(e.getProvider("auth").getImmediate());return(r=>new PI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Ff,bf,kI(t)),an(Ff,bf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=5*60,AI=Em("authIdTokenMaxAge")||RI;let zf=null;const xI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AI)return;const i=n==null?void 0:n.token;zf!==i&&(zf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function NI(t=Pm()){const e=hc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZS(t,{popupRedirectResolver:TI,persistence:[M1,I1,Ng]}),r=Em("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=xI(s.toString());y1(n,o,()=>o(n.currentUser)),v1(n,a=>o(a))}}const i=_m("auth");return i&&t1(n,`http://${i}`),n}function OI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}GS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CI("Browser");const DI={apiKey:"AIzaSyC9OluXDIcn8WLVurVeMIJxazZYvQQ79Bs",authDomain:"game-site-2a632.firebaseapp.com",databaseURL:"https://game-site-2a632-default-rtdb.europe-west1.firebasedatabase.app",projectId:"game-site-2a632",storageBucket:"game-site-2a632.appspot.com",messagingSenderId:"333537408032",appId:"1:333537408032:web:fdf39a8e93aa84df9df845"},Ug=Tm(DI),vt=iS(Ug),va=NI(Ug);function LI(t,e){return g1(va,t.value,e.value).then(()=>{console.log("succcessfully logged in")})}function MI(t,e){return m1(va,t.value,e.value).then(()=>{console.log("Succcessfully regirstrated!")})}function jI(){va.signOut()}const VI="/game-app/controller.png",UI=()=>{const t=mn(),e=E.useContext(Hn),n=r=>{r.preventDefault(),jI(),t("/")};return h.jsx("header",{children:h.jsxs("nav",{className:"top-nav",children:[h.jsx("section",{children:h.jsx("h2",{className:"top-nav-header",children:h.jsx(fe,{to:"/",children:"Game Site"})})}),h.jsxs("section",{className:"nav-icon-section",children:[h.jsx(fe,{to:"/categories/All",className:"nav-icon",children:h.jsx("img",{src:VI,alt:"Controller"})}),h.jsx(fe,{to:"/profile",children:h.jsx("h3",{children:e==null?void 0:e.email})})]}),h.jsx("section",{className:"top-nav-auth-section",children:e?h.jsxs("ul",{className:"top-nav-list",children:[h.jsx("li",{className:"top-nav-list-item",children:h.jsx(fe,{to:"/create-game",children:"Create"})}),h.jsx("li",{className:"top-nav-list-item",onClick:n,children:h.jsx(fe,{to:"/logout",children:"Logout"})})]}):h.jsxs("ul",{className:"top-nav-list",children:[h.jsx("li",{className:"top-nav-list-item",children:h.jsx(fe,{to:"/login",children:"Login"})}),h.jsx("li",{className:"top-nav-list-item",children:h.jsx(fe,{to:"/register",children:"Register"})})]})})]})})};function FI(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Bi={exports:{}};const bI={},zI=Object.freeze(Object.defineProperty({__proto__:null,default:bI},Symbol.toStringTag,{value:"Module"})),$I=qg(zI);var Fg=typeof process<"u"&&process.pid?process.pid.toString(36):"",bg="";if(typeof __webpack_require__!="function"&&typeof FI<"u"){var nl="",$f=$I;if($f.networkInterfaces)var rl=$f.networkInterfaces();if(rl){e:for(let t in rl){const e=rl[t],n=e.length;for(var Kn=0;Kn<n;Kn++)if(e[Kn]!==void 0&&e[Kn].mac&&e[Kn].mac!="00:00:00:00:00:00"){nl=e[Kn].mac;break e}}bg=nl?parseInt(nl.replace(/\:|\D+/gi,"")).toString(36):""}}Bi.exports=Bi.exports.default=function(t,e){return(t||"")+bg+Fg+Hi().toString(36)+(e||"")};Bi.exports.process=function(t,e){return(t||"")+Fg+Hi().toString(36)+(e||"")};Bi.exports.time=function(t,e){return(t||"")+Hi().toString(36)+(e||"")};function Hi(){var t=Date.now(),e=Hi.last||t;return Hi.last=t>e?t:e+1}var BI=Bi.exports;const HI=Wf(BI);async function WI(t){const n=await(await rg(Ec(vt,"games"))).docs.map(r=>({id:r.id,...r.data()}));return t!="All"?n.filter(i=>i.category==t):n}async function Ks(t){const e=await ng(gn(vt,"games",`${t}`));return{id:e.id,...e.data()}}async function GI(t){return await(await rg(Ec(vt,"games"))).docs.map(r=>({id:r.id,...r.data()})).filter(r=>r.creator==t)}async function KI(t){try{const e=await vS(Ec(vt,"games"),t)}catch(e){console.error("Error adding document: ",e)}}async function qI(t,e){try{const n=gn(vt,"games",t);await fa(n,e)}catch(n){console.error("Error adding document: ",n)}}async function QI(t,e){const n=await gn(vt,"games",e);return await fa(n,{likes:ig(t)})}async function YI(t,e){const n=await gn(vt,"games",e);return await fa(n,{likes:yS(t)})}async function JI(t){return await gS(gn(vt,"games",t))}async function XI(t,e,n){const r=await gn(vt,"games",t);return await fa(r,{comments:ig({user:e,comment:n,id:HI()})})}async function ZI(t){return(await ng(gn(vt,"games",`${t}`))).data().comments}var zg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bf=dt.createContext&&dt.createContext(zg),eT=["attr","size","title"];function tT(t,e){if(t==null)return{};var n=nT(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function nT(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Vo(){return Vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vo.apply(this,arguments)}function Hf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Uo(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hf(Object(n),!0).forEach(function(r){rT(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hf(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rT(t,e,n){return e=iT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function iT(t){var e=sT(t,"string");return typeof e=="symbol"?e:e+""}function sT(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function $g(t){return t&&t.map((e,n)=>dt.createElement(e.tag,Uo({key:n},e.attr),$g(e.child)))}function oT(t){return e=>dt.createElement(aT,Vo({attr:Uo({},t.attr)},e),$g(t.child))}function aT(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=tT(t,eT),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),dt.createElement("svg",Vo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Uo(Uo({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&dt.createElement("title",null,s),t.children)};return Bf!==void 0?dt.createElement(Bf.Consumer,null,n=>e(n)):e(zg)}function lT(t){return oT({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}const Bg=()=>{const[t,e]=E.useState(!1),n=()=>e(!t),r=["All","Adventure","Fighting","Racing","RPG","Shooter","Sports","Strategy","Others"];return E.useEffect(()=>{let i=document.querySelector(".aside-list");window.innerWidth<740&&i.classList.add("hide"),window.addEventListener("resize",()=>{window.innerWidth<740?i.classList.add("hide"):window.innerWidth>740&&i.classList.remove("hide")})},[]),h.jsxs("aside",{id:"aside",children:[h.jsxs("section",{className:"aside-header",children:[h.jsx("h2",{children:"Categories"}),h.jsx(lT,{className:"aside-icon",onClick:n})]}),h.jsx("ul",{className:t?"aside-list hide":"aside-list",children:r.map(i=>h.jsx("li",{children:h.jsx(_0,{className:({isActive:s})=>s?"selected-category":"nav-category",to:`/categories/${i}`,children:i})},i))})]})},Hg=t=>h.jsx("article",{children:h.jsxs(fe,{to:`/${t.id}/details`,className:"game-card",children:[h.jsx("div",{className:"game-card-image",children:h.jsx("img",{src:t.image,alt:"Game picture"})}),h.jsx("h4",{className:"card-header",children:t.title})]})}),uT=()=>{const[t,e]=E.useState([]),[n,r]=E.useState([]),{category:i}=uc();let s=document.getElementById("search");E.useEffect(()=>{WI(i).then(a=>{r(a),e(a)}),s&&(s.value="")},[i]);const o=a=>{let l=a.target.value;if(l==""){e(n);return}e(n.filter(u=>u.title.toLowerCase().includes(l.toLowerCase())))};return h.jsxs("main",{className:"categories-main",children:[h.jsx(Bg,{}),h.jsxs("section",{className:"home-container",children:[h.jsx("input",{type:"text",id:"search",className:"form-control",placeholder:"Search",name:"search",onChange:o}),h.jsx("article",{className:"home-container-games",children:t.map(a=>h.jsx(Hg,{title:a.title,image:a.imageUrl,id:a.id},a.id))})]})]})},Ue=({children:t})=>t?h.jsx("div",{className:"error-div",children:t}):null,cT=()=>{const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),o=mn(),a=c=>{const d=c.target.value;e(""),s(""),d.includes("@")||e("Invalid email - @ missing!"),d.length<6&&e("Invalid email!"),d.length<1&&e("Please insert email!")},l=c=>{const d=c.target.value;r(""),s(""),d.length<6&&r("Password must be at least 6 characters long!"),d.length<1&&r("Please insert password!")},u=c=>{c.preventDefault(),s("");const{email:d,password:p}=c.target;t<1&&n<1&&d.value!=""&&p.value!=""&&LI(d,p).then(()=>{o("/categories/All"),console.log("Successfully!")}).catch(v=>{v.message=="Firebase: Error (auth/wrong-password)."?s("Wrong password! Please try again!"):v.message=="Firebase: Error (auth/user-not-found)."&&s("Username not found!")})};return h.jsx("main",{children:h.jsxs("form",{className:"form",onSubmit:u,children:[h.jsx("h1",{children:"Login"}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"email",children:"Email"}),h.jsx("input",{type:"email",className:"form-control",placeholder:"Email",name:"email",autoComplete:"on",onBlur:a}),h.jsx(Ue,{children:t})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"password",children:"Password"}),h.jsx("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",autoComplete:"on",onBlur:l}),h.jsx(Ue,{children:n})]}),h.jsx("button",{className:"btn",children:"Login"}),h.jsx(Ue,{children:i})]})})},dT=()=>{const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),[o,a]=E.useState(""),l=mn(),u=v=>{const y=v.target.value;e(""),a(""),y.includes("@")||e("Invalid email - @ missing!"),y.length<6&&e("Invalid email!"),y.length<1&&e("Please insert email!")},c=v=>{const y=v.target.value;r(""),a(""),y.length<6&&r("Password must be at least 6 characters long!"),y.length<1&&r("Please insert password!")},d=v=>{const y=v.target.value;s(""),a(""),y.length<6&&s("Password must be at least 6 characters long!"),y.length<1&&s("Please insert password!")},p=v=>{v.preventDefault();const{email:y,password:_,rePassword:S}=v.target;if(_.value!==S.value){a("Password do not match!");return}t<1&&n<1&&i<1&&(a(""),t<1&&n<1&&i<1&&y.value!=""&&_.value!=""&&S.value!=""&&MI(y,_).then(()=>{l("/categories/All")}).catch(m=>{console.log("Something is wrong"),console.log(m),a(m)}))};return h.jsx("main",{children:h.jsxs("form",{className:"form",onSubmit:p,children:[h.jsx("h1",{children:"Register"}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"email",children:"Email"}),h.jsx("input",{type:"email",className:"form-control",placeholder:"Email",name:"email",autoComplete:"on",onBlur:u}),h.jsx(Ue,{children:t})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"password",children:"Password"}),h.jsx("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",autoComplete:"on",onBlur:c}),h.jsx(Ue,{children:n})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"repeatPassword",children:"Repeat Password"}),h.jsx("input",{type:"password",className:"form-control",placeholder:"Repeat Password",name:"rePassword",autoComplete:"on",onBlur:d}),h.jsx(Ue,{children:i})]}),h.jsx("button",{className:"btn",children:"Register"}),h.jsx(Ue,{children:o})]})})},Wg=t=>n=>{const r=E.useContext(Hn),i=mn();return E.useEffect(()=>{if(!r){i("/");return}},[]),h.jsx(t,{...n})},fT=()=>{const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),o=mn(),a=E.useContext(Hn),l=p=>{const v=p.target.value;e(""),v.length<3&&e("Title must be at least 6 characters!"),v.length<1&&e("Please insert title!"),v.length>70&&e("Title too long!")},u=p=>{const v=p.target.value;r(""),v.length<6&&r("Description must be at least 6 characters!"),v.length<1&&r("Please insert Description!")},c=p=>{const v=p.target.value;s(""),v.length<10&&s("Image URL must be at least 6 characters!"),v.length<1&&s("Please insert image URL!")},d=p=>{p.preventDefault();const{category:v,title:y,description:_,imageUrl:S}=p.target,m={title:y.value,description:_.value,imageUrl:S.value,likes:[],category:v.value=="Select Category"?"Others":v.value,creator:a.uid};t.length<1&&n.length<1&&i.length<1&&y.value!=""&&_.value!=""&&S.value!=""&&(KI(m).then(()=>{o("/categories/All")}).catch(()=>{console.log("problem with logging in")}),y.value="",_.value="",S.value="",v.value="Select Category")};return h.jsx("main",{children:h.jsxs("form",{className:"form",onSubmit:d,children:[h.jsx("h1",{children:"Add Game"}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"title",children:"Game Title"}),h.jsx("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",onBlur:l}),h.jsx(Ue,{children:t})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"description",children:"Game Description"}),h.jsx("textarea",{className:"form-control form-description",placeholder:"Description",name:"description",onBlur:u}),h.jsx(Ue,{children:n})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"imageUrl",children:"Image url"}),h.jsx("textarea",{type:"text",className:"form-control",placeholder:"Image Url",name:"imageUrl",onBlur:c}),h.jsx(Ue,{children:i})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"category",children:"Choose category"}),h.jsxs("select",{name:"category",className:"form-control",children:[h.jsx("option",{value:"Select Category",children:"Select category"}),h.jsx("option",{value:"Adventure",children:"Adventure"}),h.jsx("option",{value:"Fighting",children:"Fighting"}),h.jsx("option",{value:"Racing",children:"Racing"}),h.jsx("option",{value:"RPG",children:"RPG"}),h.jsx("option",{value:"Shooter",children:"Shooter"}),h.jsx("option",{value:"Sports",children:"Sports"}),h.jsx("option",{value:"Strategy",children:"Strategy"}),h.jsx("option",{value:"Others",children:"Others"})]})]}),h.jsx("button",{type:"submit",className:"btn",children:"Create"})]})})},hT=Wg(fT),pT=t=>{var e;return h.jsxs("section",{className:"game-details-comments-section",children:[h.jsxs("form",{onSubmit:t.onAddComment,className:"game-details-form",children:[h.jsx("h4",{children:"Write your comment here:"}),h.jsx("input",{type:"text",name:"user",placeholder:"Name",className:"game-details-input-name"}),h.jsx("input",{type:"text",name:"comment",placeholder:"Comment here...",className:"game-details-comments-input"}),h.jsx("button",{type:"submit",className:"add-comment-btn",children:"Add comment"})]}),t.comments?h.jsxs("article",{className:"game-details-comments",children:[h.jsx("h3",{children:"Comments"}),(e=t.comments)==null?void 0:e.map(n=>h.jsxs("article",{className:"game-details-comment-container",children:[h.jsx("h4",{children:n.user}),h.jsx("p",{children:n.comment})]},n.id))]}):h.jsx("h3",{children:"No comments..."})]})},mT=()=>{var d,p;const t=E.useContext(Hn),{id:e}=uc(),[n,r]=E.useState({}),[i,s]=E.useState([]),o=mn();E.useEffect(()=>{Ks(e).then(v=>{r(v),s(v.comments)})},[]);function a(){QI(t.uid,e).then(()=>{Ks(e).then(v=>{r(v)})})}function l(){YI(t.uid,e).then(()=>{Ks(e).then(v=>{r(v)})})}function u(){JI(e).then(v=>{o("/categories/All")})}function c(v){v.preventDefault();const[y,_]=v.target;XI(e,y.value,_.value).then(()=>{ZI(e).then(S=>s(S)).catch(S=>console.log(S))}).catch(S=>console.log(S)),y.value="",_.value=""}return h.jsxs("main",{className:"game-details-main",children:[h.jsx(Bg,{}),h.jsxs("section",{className:"game-details-section",children:[h.jsxs("article",{className:"game-details-article",children:[h.jsx("div",{className:"game-details-image",children:h.jsx("img",{src:n.imageUrl})}),h.jsxs("div",{className:"game-details-article-content",children:[h.jsx("h2",{children:n.title}),h.jsxs("article",{className:"game-details-content-details",children:[h.jsxs("div",{className:"game-details-criteries",children:[h.jsxs("p",{children:["Category: ",n.category]}),h.jsxs("p",{children:["Likes: ",(d=n.likes)==null?void 0:d.length]})]}),h.jsx("div",{className:"game-details-btns",children:(t==null?void 0:t.uid)==n.creator?h.jsxs("div",{className:"btns",children:[h.jsx(fe,{to:`/${n.id}/edit`,className:"btn",children:"Edit"}),h.jsx(fe,{className:"btn",onClick:u,children:"Delete"})]}):h.jsx("div",{className:"btns",children:(p=n.likes)!=null&&p.includes(t==null?void 0:t.uid)?h.jsx(fe,{className:"btn",onClick:l,children:"Unlike"}):t?h.jsx(fe,{className:"btn",onClick:a,children:"Like"}):""})})]})]})]}),h.jsx("article",{className:"game-details-description",children:h.jsx("p",{children:n.description})}),h.jsx(pT,{onAddComment:c,comments:i})]})]})},gT="/game-app/profile.png",vT=()=>{const t=E.useContext(Hn),[e,n]=E.useState([]);return E.useEffect(()=>{GI(t==null?void 0:t.uid).then(r=>n(r))},[]),h.jsx("main",{children:h.jsxs("section",{className:"profile-section",children:[h.jsxs("article",{className:"profile-article",children:[h.jsx("div",{className:"profile-pic",children:h.jsx("img",{src:gT})}),h.jsxs("div",{children:[h.jsxs("p",{children:["Email: ",t==null?void 0:t.email]}),h.jsxs("p",{children:["Total games: ",e==null?void 0:e.length]})]})]}),h.jsx("article",{className:"profile-games",children:e.map(r=>h.jsx(Hg,{title:r.title,image:r.imageUrl,id:r.id},r.id))})]})})},yT=()=>{const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),o=mn(),{id:a}=uc(),[l,u]=E.useState({});E.useEffect(()=>{Ks(a).then(y=>{u(y)})},[]);const c=y=>{const _=y.target.value;e(""),_.length<3&&e("Title must be at least 6 characters!"),_.length<1&&e("Please insert title!"),_.length>70&&e("Title too long!")},d=y=>{const _=y.target.value;r(""),_.length<6&&r("Description must be at least 6 characters!"),_.length<1&&r("Please insert Description!")},p=y=>{const _=y.target.value;s(""),_.length<10&&s("Image URL must be at least 6 characters!"),_.length<1&&s("Please insert image URL!")},v=y=>{y.preventDefault();const{category:_,title:S,description:m,imageUrl:f}=y.target,g={title:S.value,description:m.value,imageUrl:f.value,category:_.value=="Select Category"?"Others":_.value};t.length<1&&n.length<1&&i.length<1&&S.value!=""&&m.value!=""&&f.value!=""&&qI(a,g).then(()=>{o("/categories/All")}).catch(()=>{console.log("problem with logging in")})};return h.jsx("main",{children:h.jsxs("form",{className:"form",onSubmit:v,children:[h.jsx("h1",{children:"Edit Game"}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"title",children:"Game Title"}),h.jsx("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",defaultValue:l.title,onBlur:c}),h.jsx(Ue,{children:t})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"description",children:"Game Description"}),h.jsx("textarea",{className:"form-control form-description",placeholder:"Description",name:"description",defaultValue:l.description,onBlur:d}),h.jsx(Ue,{children:n})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"imageUrl",children:"Image url"}),h.jsx("textarea",{type:"text",className:"form-control",placeholder:"Image Url",name:"imageUrl",defaultValue:l.imageUrl,onBlur:p}),h.jsx(Ue,{children:i})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"category",children:"Choose category"}),h.jsxs("select",{name:"category",className:"form-control",defaultValue:l.category,children:[h.jsx("option",{value:l.category,children:l.category}),h.jsx("option",{value:"Adventure",children:"Adventure"}),h.jsx("option",{value:"Fighting",children:"Fighting"}),h.jsx("option",{value:"Racing",children:"Racing"}),h.jsx("option",{value:"RPG",children:"RPG"}),h.jsx("option",{value:"Shooter",children:"Shooter"}),h.jsx("option",{value:"Sports",children:"Sports"}),h.jsx("option",{value:"Strategy",children:"Strategy"}),h.jsx("option",{value:"Others",children:"Others"})]})]}),h.jsx("button",{type:"submit",className:"btn",children:"Edit"})]})})},_T=Wg(yT),wT="/game-app/spiderman.png",ET="/game-app/ronaldo.png",ST="/game-app/godofwar.png",IT=()=>{const t=E.useContext(Hn);return h.jsxs("main",{className:"home-page",children:[h.jsxs("article",{className:"home-article",children:[h.jsx("div",{className:"godofwar",children:h.jsx("img",{src:ST})}),t?h.jsx(fe,{className:"home-btns",to:"/categories/All",children:"Categories"}):h.jsx(fe,{className:"home-btns",to:"/login",children:"Login"})]}),h.jsxs("article",{className:"home-article home-headings",children:[h.jsx("h1",{children:"Welcome to our Game site!"}),h.jsx("h2",{children:t?"Enjoy":"Please Login "}),h.jsx("div",{className:"spiderman",children:h.jsx("img",{src:wT})})]}),h.jsxs("article",{className:"home-article",children:[h.jsx("div",{className:"ronaldo",children:h.jsx("img",{src:ET})}),t?h.jsx(fe,{className:"home-btns",to:"/create-game",children:"Create"}):h.jsx(fe,{className:"home-btns",to:"/register",children:"Register"})]})]})},TT=()=>h.jsx("main",{children:h.jsxs("div",{className:"error-page",children:[h.jsx("h1",{children:"Your url is not valid!"}),h.jsx("h2",{children:"Please insert valid url!"})]})});function PT(){const[t,e]=E.useState(null);return E.useEffect(()=>{_1(va,e)},[]),h.jsxs(Hn.Provider,{value:t,children:[h.jsx(UI,{}),h.jsxs(l0,{children:[h.jsx(ot,{path:"/",element:h.jsx(IT,{})}),h.jsx(ot,{path:"/categories/:category",element:h.jsx(uT,{})}),h.jsx(ot,{path:"/login",element:h.jsx(cT,{})}),h.jsx(ot,{path:"/register",element:h.jsx(dT,{})}),h.jsx(ot,{path:"/create-game",element:h.jsx(hT,{})}),h.jsx(ot,{path:"/:id/edit",element:h.jsx(_T,{})}),h.jsx(ot,{path:"/:id/details",element:h.jsx(mT,{})}),h.jsx(ot,{path:"/profile",element:h.jsx(vT,{})}),h.jsx(ot,{path:"*",element:h.jsx(TT,{})})]})]})}il.createRoot(document.getElementById("root")).render(h.jsx(dt.StrictMode,{children:h.jsx(g0,{basename:"/game-app/",children:h.jsx(PT,{})})}));
