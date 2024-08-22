function Vg(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ff={exports:{}},Vo={},bf={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=Symbol.for("react.element"),Ug=Symbol.for("react.portal"),Fg=Symbol.for("react.fragment"),bg=Symbol.for("react.strict_mode"),zg=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Bg=Symbol.for("react.context"),Hg=Symbol.for("react.forward_ref"),Wg=Symbol.for("react.suspense"),Gg=Symbol.for("react.memo"),Kg=Symbol.for("react.lazy"),Oc=Symbol.iterator;function qg(t){return t===null||typeof t!="object"?null:(t=Oc&&t[Oc]||t["@@iterator"],typeof t=="function"?t:null)}var zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$f=Object.assign,Bf={};function Rr(t,e,n){this.props=t,this.context=e,this.refs=Bf,this.updater=n||zf}Rr.prototype.isReactComponent={};Rr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hf(){}Hf.prototype=Rr.prototype;function uu(t,e,n){this.props=t,this.context=e,this.refs=Bf,this.updater=n||zf}var cu=uu.prototype=new Hf;cu.constructor=uu;$f(cu,Rr.prototype);cu.isPureReactComponent=!0;var Dc=Array.isArray,Wf=Object.prototype.hasOwnProperty,du={current:null},Gf={key:!0,ref:!0,__self:!0,__source:!0};function Kf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wf.call(e,r)&&!Gf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$i,type:t,key:s,ref:o,props:i,_owner:du.current}}function Qg(t,e){return{$$typeof:$i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fu(t){return typeof t=="object"&&t!==null&&t.$$typeof===$i}function Yg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lc=/\/+/g;function va(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yg(""+t.key):e.toString(36)}function Rs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $i:case Ug:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+va(o,0):r,Dc(i)?(n="",t!=null&&(n=t.replace(Lc,"$&/")+"/"),Rs(i,e,n,"",function(u){return u})):i!=null&&(fu(i)&&(i=Qg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dc(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+va(s,a);o+=Rs(s,e,n,l,i)}else if(l=qg(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+va(s,a++),o+=Rs(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function as(t,e,n){if(t==null)return t;var r=[],i=0;return Rs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Jg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Te={current:null},As={transition:null},Xg={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:As,ReactCurrentOwner:du};function qf(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:as,forEach:function(t,e,n){as(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return as(t,function(){e++}),e},toArray:function(t){return as(t,function(e){return e})||[]},only:function(t){if(!fu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};M.Component=Rr;M.Fragment=Fg;M.Profiler=zg;M.PureComponent=uu;M.StrictMode=bg;M.Suspense=Wg;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xg;M.act=qf;M.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$f({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=du.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wf.call(e,l)&&!Gf.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$i,type:t.type,key:i,ref:s,props:r,_owner:o}};M.createContext=function(t){return t={$$typeof:Bg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$g,_context:t},t.Consumer=t};M.createElement=Kf;M.createFactory=function(t){var e=Kf.bind(null,t);return e.type=t,e};M.createRef=function(){return{current:null}};M.forwardRef=function(t){return{$$typeof:Hg,render:t}};M.isValidElement=fu;M.lazy=function(t){return{$$typeof:Kg,_payload:{_status:-1,_result:t},_init:Jg}};M.memo=function(t,e){return{$$typeof:Gg,type:t,compare:e===void 0?null:e}};M.startTransition=function(t){var e=As.transition;As.transition={};try{t()}finally{As.transition=e}};M.unstable_act=qf;M.useCallback=function(t,e){return Te.current.useCallback(t,e)};M.useContext=function(t){return Te.current.useContext(t)};M.useDebugValue=function(){};M.useDeferredValue=function(t){return Te.current.useDeferredValue(t)};M.useEffect=function(t,e){return Te.current.useEffect(t,e)};M.useId=function(){return Te.current.useId()};M.useImperativeHandle=function(t,e,n){return Te.current.useImperativeHandle(t,e,n)};M.useInsertionEffect=function(t,e){return Te.current.useInsertionEffect(t,e)};M.useLayoutEffect=function(t,e){return Te.current.useLayoutEffect(t,e)};M.useMemo=function(t,e){return Te.current.useMemo(t,e)};M.useReducer=function(t,e,n){return Te.current.useReducer(t,e,n)};M.useRef=function(t){return Te.current.useRef(t)};M.useState=function(t){return Te.current.useState(t)};M.useSyncExternalStore=function(t,e,n){return Te.current.useSyncExternalStore(t,e,n)};M.useTransition=function(){return Te.current.useTransition()};M.version="18.3.1";bf.exports=M;var E=bf.exports;const dt=jg(E),Zg=Vg({__proto__:null,default:dt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev=E,tv=Symbol.for("react.element"),nv=Symbol.for("react.fragment"),rv=Object.prototype.hasOwnProperty,iv=ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sv={key:!0,ref:!0,__self:!0,__source:!0};function Qf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rv.call(e,r)&&!sv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tv,type:t,key:s,ref:o,props:i,_owner:iv.current}}Vo.Fragment=nv;Vo.jsx=Qf;Vo.jsxs=Qf;Ff.exports=Vo;var p=Ff.exports,Xa={},Yf={exports:{}},Be={},Jf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,D){var L=C.length;C.push(D);e:for(;0<L;){var X=L-1>>>1,se=C[X];if(0<i(se,D))C[X]=D,C[L]=se,L=X;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var D=C[0],L=C.pop();if(L!==D){C[0]=L;e:for(var X=0,se=C.length,ss=se>>>1;X<ss;){var yn=2*(X+1)-1,ga=C[yn],_n=yn+1,os=C[_n];if(0>i(ga,L))_n<se&&0>i(os,ga)?(C[X]=os,C[_n]=L,X=_n):(C[X]=ga,C[yn]=L,X=yn);else if(_n<se&&0>i(os,L))C[X]=os,C[_n]=L,X=_n;else break e}}return D}function i(C,D){var L=C.sortIndex-D.sortIndex;return L!==0?L:C.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,v=!1,y=!1,_=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=C)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function w(C){if(_=!1,g(C),!y)if(n(l)!==null)y=!0,pa(T);else{var D=n(u);D!==null&&ma(w,D.startTime-C)}}function T(C,D){y=!1,_&&(_=!1,m(A),A=-1),v=!0;var L=h;try{for(g(D),d=n(l);d!==null&&(!(d.expirationTime>D)||C&&!Le());){var X=d.callback;if(typeof X=="function"){d.callback=null,h=d.priorityLevel;var se=X(d.expirationTime<=D);D=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&r(l),g(D)}else r(l);d=n(l)}if(d!==null)var ss=!0;else{var yn=n(u);yn!==null&&ma(w,yn.startTime-D),ss=!1}return ss}finally{d=null,h=L,v=!1}}var k=!1,R=null,A=-1,z=5,O=-1;function Le(){return!(t.unstable_now()-O<z)}function Ur(){if(R!==null){var C=t.unstable_now();O=C;var D=!0;try{D=R(!0,C)}finally{D?Fr():(k=!1,R=null)}}else k=!1}var Fr;if(typeof f=="function")Fr=function(){f(Ur)};else if(typeof MessageChannel<"u"){var xc=new MessageChannel,Mg=xc.port2;xc.port1.onmessage=Ur,Fr=function(){Mg.postMessage(null)}}else Fr=function(){I(Ur,0)};function pa(C){R=C,k||(k=!0,Fr())}function ma(C,D){A=I(function(){C(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||v||(y=!0,pa(T))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return C()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,D){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=h;h=C;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(C,D,L){var X=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,C){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=L+se,C={id:c++,callback:D,priorityLevel:C,startTime:L,expirationTime:se,sortIndex:-1},L>X?(C.sortIndex=L,e(u,C),n(l)===null&&C===n(u)&&(_?(m(A),A=-1):_=!0,ma(w,L-X))):(C.sortIndex=se,e(l,C),y||v||(y=!0,pa(T))),C},t.unstable_shouldYield=Le,t.unstable_wrapCallback=function(C){var D=h;return function(){var L=h;h=D;try{return C.apply(this,arguments)}finally{h=L}}}})(Xf);Jf.exports=Xf;var ov=Jf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av=E,$e=ov;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zf=new Set,pi={};function zn(t,e){mr(t,e),mr(t+"Capture",e)}function mr(t,e){for(pi[t]=e,t=0;t<e.length;t++)Zf.add(e[t])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Za=Object.prototype.hasOwnProperty,lv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mc={},Vc={};function uv(t){return Za.call(Vc,t)?!0:Za.call(Mc,t)?!1:lv.test(t)?Vc[t]=!0:(Mc[t]=!0,!1)}function cv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dv(t,e,n,r){if(e===null||typeof e>"u"||cv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pe[t]=new Pe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pe[e]=new Pe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pe[t]=new Pe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pe[t]=new Pe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pe[t]=new Pe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pe[t]=new Pe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pe[t]=new Pe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pe[t]=new Pe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pe[t]=new Pe(t,5,!1,t.toLowerCase(),null,!1,!1)});var hu=/[\-:]([a-z])/g;function pu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hu,pu);pe[e]=new Pe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hu,pu);pe[e]=new Pe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hu,pu);pe[e]=new Pe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pe[t]=new Pe(t,1,!1,t.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pe[t]=new Pe(t,1,!1,t.toLowerCase(),null,!0,!0)});function mu(t,e,n,r){var i=pe.hasOwnProperty(e)?pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dv(e,n,i,r)&&(n=null),r||i===null?uv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dt=av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ls=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),gu=Symbol.for("react.strict_mode"),el=Symbol.for("react.profiler"),eh=Symbol.for("react.provider"),th=Symbol.for("react.context"),vu=Symbol.for("react.forward_ref"),tl=Symbol.for("react.suspense"),nl=Symbol.for("react.suspense_list"),yu=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),nh=Symbol.for("react.offscreen"),jc=Symbol.iterator;function br(t){return t===null||typeof t!="object"?null:(t=jc&&t[jc]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,ya;function qr(t){if(ya===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ya=e&&e[1]||""}return`
`+ya+t}var _a=!1;function wa(t,e){if(!t||_a)return"";_a=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_a=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qr(t):""}function fv(t){switch(t.tag){case 5:return qr(t.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return t=wa(t.type,!1),t;case 11:return t=wa(t.type.render,!1),t;case 1:return t=wa(t.type,!0),t;default:return""}}function rl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qn:return"Fragment";case Kn:return"Portal";case el:return"Profiler";case gu:return"StrictMode";case tl:return"Suspense";case nl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case th:return(t.displayName||"Context")+".Consumer";case eh:return(t._context.displayName||"Context")+".Provider";case vu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yu:return e=t.displayName||null,e!==null?e:rl(t.type)||"Memo";case jt:e=t._payload,t=t._init;try{return rl(t(e))}catch{}}return null}function hv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rl(e);case 8:return e===gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function an(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pv(t){var e=rh(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function us(t){t._valueTracker||(t._valueTracker=pv(t))}function ih(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rh(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ws(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function il(t,e){var n=e.checked;return Q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=an(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sh(t,e){e=e.checked,e!=null&&mu(t,"checked",e,!1)}function sl(t,e){sh(t,e);var n=an(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ol(t,e.type,n):e.hasOwnProperty("defaultValue")&&ol(t,e.type,an(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ol(t,e,n){(e!=="number"||Ws(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qr=Array.isArray;function or(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+an(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function al(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Qr(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:an(n)}}function oh(t,e){var n=an(e.value),r=an(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ah(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ll(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ah(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cs,lh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mv=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(t){mv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ei[e]=ei[t]})});function uh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ei.hasOwnProperty(t)&&ei[t]?(""+e).trim():e+"px"}function ch(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gv=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ul(t,e){if(e){if(gv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function cl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dl=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fl=null,ar=null,lr=null;function $c(t){if(t=Wi(t)){if(typeof fl!="function")throw Error(S(280));var e=t.stateNode;e&&(e=zo(e),fl(t.stateNode,t.type,e))}}function dh(t){ar?lr?lr.push(t):lr=[t]:ar=t}function fh(){if(ar){var t=ar,e=lr;if(lr=ar=null,$c(t),e)for(t=0;t<e.length;t++)$c(e[t])}}function hh(t,e){return t(e)}function ph(){}var Ea=!1;function mh(t,e,n){if(Ea)return t(e,n);Ea=!0;try{return hh(t,e,n)}finally{Ea=!1,(ar!==null||lr!==null)&&(ph(),fh())}}function gi(t,e){var n=t.stateNode;if(n===null)return null;var r=zo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var hl=!1;if(Ct)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){hl=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{hl=!1}function vv(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ti=!1,Gs=null,Ks=!1,pl=null,yv={onError:function(t){ti=!0,Gs=t}};function _v(t,e,n,r,i,s,o,a,l){ti=!1,Gs=null,vv.apply(yv,arguments)}function wv(t,e,n,r,i,s,o,a,l){if(_v.apply(this,arguments),ti){if(ti){var u=Gs;ti=!1,Gs=null}else throw Error(S(198));Ks||(Ks=!0,pl=u)}}function $n(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bc(t){if($n(t)!==t)throw Error(S(188))}function Ev(t){var e=t.alternate;if(!e){if(e=$n(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bc(i),t;if(s===r)return Bc(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function vh(t){return t=Ev(t),t!==null?yh(t):null}function yh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yh(t);if(e!==null)return e;t=t.sibling}return null}var _h=$e.unstable_scheduleCallback,Hc=$e.unstable_cancelCallback,Sv=$e.unstable_shouldYield,Iv=$e.unstable_requestPaint,Z=$e.unstable_now,Tv=$e.unstable_getCurrentPriorityLevel,wu=$e.unstable_ImmediatePriority,wh=$e.unstable_UserBlockingPriority,qs=$e.unstable_NormalPriority,Pv=$e.unstable_LowPriority,Eh=$e.unstable_IdlePriority,jo=null,ft=null;function kv(t){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(jo,t,void 0,(t.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Av,Cv=Math.log,Rv=Math.LN2;function Av(t){return t>>>=0,t===0?32:31-(Cv(t)/Rv|0)|0}var ds=64,fs=4194304;function Yr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Yr(a):(s&=o,s!==0&&(r=Yr(s)))}else o=n&~i,o!==0?r=Yr(o):s!==0&&(r=Yr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tt(e),i=1<<n,r|=t[n],e&=~i;return r}function Nv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Nv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ml(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sh(){var t=ds;return ds<<=1,!(ds&4194240)&&(ds=64),t}function Sa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tt(e),t[e]=n}function Ov(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Eu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var b=0;function Ih(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Th,Su,Ph,kh,Ch,gl=!1,hs=[],qt=null,Qt=null,Yt=null,vi=new Map,yi=new Map,Ft=[],Dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wc(t,e){switch(t){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":vi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(e.pointerId)}}function $r(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wi(e),e!==null&&Su(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Lv(t,e,n,r,i){switch(e){case"focusin":return qt=$r(qt,t,e,n,r,i),!0;case"dragenter":return Qt=$r(Qt,t,e,n,r,i),!0;case"mouseover":return Yt=$r(Yt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vi.set(s,$r(vi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yi.set(s,$r(yi.get(s)||null,t,e,n,r,i)),!0}return!1}function Rh(t){var e=In(t.target);if(e!==null){var n=$n(e);if(n!==null){if(e=n.tag,e===13){if(e=gh(n),e!==null){t.blockedOn=e,Ch(t.priority,function(){Ph(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ns(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dl=r,n.target.dispatchEvent(r),dl=null}else return e=Wi(n),e!==null&&Su(e),t.blockedOn=n,!1;e.shift()}return!0}function Gc(t,e,n){Ns(t)&&n.delete(e)}function Mv(){gl=!1,qt!==null&&Ns(qt)&&(qt=null),Qt!==null&&Ns(Qt)&&(Qt=null),Yt!==null&&Ns(Yt)&&(Yt=null),vi.forEach(Gc),yi.forEach(Gc)}function Br(t,e){t.blockedOn===e&&(t.blockedOn=null,gl||(gl=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Mv)))}function _i(t){function e(i){return Br(i,t)}if(0<hs.length){Br(hs[0],t);for(var n=1;n<hs.length;n++){var r=hs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qt!==null&&Br(qt,t),Qt!==null&&Br(Qt,t),Yt!==null&&Br(Yt,t),vi.forEach(e),yi.forEach(e),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Rh(n),n.blockedOn===null&&Ft.shift()}var ur=Dt.ReactCurrentBatchConfig,Ys=!0;function Vv(t,e,n,r){var i=b,s=ur.transition;ur.transition=null;try{b=1,Iu(t,e,n,r)}finally{b=i,ur.transition=s}}function jv(t,e,n,r){var i=b,s=ur.transition;ur.transition=null;try{b=4,Iu(t,e,n,r)}finally{b=i,ur.transition=s}}function Iu(t,e,n,r){if(Ys){var i=vl(t,e,n,r);if(i===null)Oa(t,e,r,Js,n),Wc(t,r);else if(Lv(i,t,e,n,r))r.stopPropagation();else if(Wc(t,r),e&4&&-1<Dv.indexOf(t)){for(;i!==null;){var s=Wi(i);if(s!==null&&Th(s),s=vl(t,e,n,r),s===null&&Oa(t,e,r,Js,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Oa(t,e,r,null,n)}}var Js=null;function vl(t,e,n,r){if(Js=null,t=_u(r),t=In(t),t!==null)if(e=$n(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Js=t,null}function Ah(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tv()){case wu:return 1;case wh:return 4;case qs:case Pv:return 16;case Eh:return 536870912;default:return 16}default:return 16}}var Wt=null,Tu=null,xs=null;function Nh(){if(xs)return xs;var t,e=Tu,n=e.length,r,i="value"in Wt?Wt.value:Wt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xs=i.slice(t,1<r?1-r:void 0)}function Os(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ps(){return!0}function Kc(){return!1}function He(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ps:Kc,this.isPropagationStopped=Kc,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),e}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=He(Ar),Hi=Q({},Ar,{view:0,detail:0}),Uv=He(Hi),Ia,Ta,Hr,Uo=Q({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hr&&(Hr&&t.type==="mousemove"?(Ia=t.screenX-Hr.screenX,Ta=t.screenY-Hr.screenY):Ta=Ia=0,Hr=t),Ia)},movementY:function(t){return"movementY"in t?t.movementY:Ta}}),qc=He(Uo),Fv=Q({},Uo,{dataTransfer:0}),bv=He(Fv),zv=Q({},Hi,{relatedTarget:0}),Pa=He(zv),$v=Q({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=He($v),Hv=Q({},Ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wv=He(Hv),Gv=Q({},Ar,{data:0}),Qc=He(Gv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qv[t])?!!e[t]:!1}function ku(){return Yv}var Jv=Q({},Hi,{key:function(t){if(t.key){var e=Kv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Os(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(t){return t.type==="keypress"?Os(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Os(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xv=He(Jv),Zv=Q({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yc=He(Zv),ey=Q({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),ty=He(ey),ny=Q({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),ry=He(ny),iy=Q({},Uo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sy=He(iy),oy=[9,13,27,32],Cu=Ct&&"CompositionEvent"in window,ni=null;Ct&&"documentMode"in document&&(ni=document.documentMode);var ay=Ct&&"TextEvent"in window&&!ni,xh=Ct&&(!Cu||ni&&8<ni&&11>=ni),Jc=" ",Xc=!1;function Oh(t,e){switch(t){case"keyup":return oy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qn=!1;function ly(t,e){switch(t){case"compositionend":return Dh(e);case"keypress":return e.which!==32?null:(Xc=!0,Jc);case"textInput":return t=e.data,t===Jc&&Xc?null:t;default:return null}}function uy(t,e){if(Qn)return t==="compositionend"||!Cu&&Oh(t,e)?(t=Nh(),xs=Tu=Wt=null,Qn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xh&&e.locale!=="ko"?null:e.data;default:return null}}var cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cy[t.type]:e==="textarea"}function Lh(t,e,n,r){dh(r),e=Xs(e,"onChange"),0<e.length&&(n=new Pu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ri=null,wi=null;function dy(t){Wh(t,0)}function Fo(t){var e=Xn(t);if(ih(e))return t}function fy(t,e){if(t==="change")return e}var Mh=!1;if(Ct){var ka;if(Ct){var Ca="oninput"in document;if(!Ca){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),Ca=typeof ed.oninput=="function"}ka=Ca}else ka=!1;Mh=ka&&(!document.documentMode||9<document.documentMode)}function td(){ri&&(ri.detachEvent("onpropertychange",Vh),wi=ri=null)}function Vh(t){if(t.propertyName==="value"&&Fo(wi)){var e=[];Lh(e,wi,t,_u(t)),mh(dy,e)}}function hy(t,e,n){t==="focusin"?(td(),ri=e,wi=n,ri.attachEvent("onpropertychange",Vh)):t==="focusout"&&td()}function py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fo(wi)}function my(t,e){if(t==="click")return Fo(e)}function gy(t,e){if(t==="input"||t==="change")return Fo(e)}function vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rt=typeof Object.is=="function"?Object.is:vy;function Ei(t,e){if(rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Za.call(e,i)||!rt(t[i],e[i]))return!1}return!0}function nd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rd(t,e){var n=nd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nd(n)}}function jh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uh(){for(var t=window,e=Ws();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ws(t.document)}return e}function Ru(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yy(t){var e=Uh(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jh(n.ownerDocument.documentElement,n)){if(r!==null&&Ru(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=rd(n,s);var o=rd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _y=Ct&&"documentMode"in document&&11>=document.documentMode,Yn=null,yl=null,ii=null,_l=!1;function id(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||Yn==null||Yn!==Ws(r)||(r=Yn,"selectionStart"in r&&Ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ii&&Ei(ii,r)||(ii=r,r=Xs(yl,"onSelect"),0<r.length&&(e=new Pu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yn)))}function ms(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jn={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionend:ms("Transition","TransitionEnd")},Ra={},Fh={};Ct&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function bo(t){if(Ra[t])return Ra[t];if(!Jn[t])return t;var e=Jn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fh)return Ra[t]=e[n];return t}var bh=bo("animationend"),zh=bo("animationiteration"),$h=bo("animationstart"),Bh=bo("transitionend"),Hh=new Map,sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(t,e){Hh.set(t,e),zn(e,[t])}for(var Aa=0;Aa<sd.length;Aa++){var Na=sd[Aa],wy=Na.toLowerCase(),Ey=Na[0].toUpperCase()+Na.slice(1);un(wy,"on"+Ey)}un(bh,"onAnimationEnd");un(zh,"onAnimationIteration");un($h,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Bh,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function od(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wv(r,e,void 0,t),t.currentTarget=null}function Wh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;od(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;od(i,a,u),s=l}}}if(Ks)throw t=pl,Ks=!1,pl=null,t}function B(t,e){var n=e[Tl];n===void 0&&(n=e[Tl]=new Set);var r=t+"__bubble";n.has(r)||(Gh(e,t,2,!1),n.add(r))}function xa(t,e,n){var r=0;e&&(r|=4),Gh(n,t,r,e)}var gs="_reactListening"+Math.random().toString(36).slice(2);function Si(t){if(!t[gs]){t[gs]=!0,Zf.forEach(function(n){n!=="selectionchange"&&(Sy.has(n)||xa(n,!1,t),xa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gs]||(e[gs]=!0,xa("selectionchange",!1,e))}}function Gh(t,e,n,r){switch(Ah(e)){case 1:var i=Vv;break;case 4:i=jv;break;default:i=Iu}n=i.bind(null,e,n,t),i=void 0,!hl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Oa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=In(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}mh(function(){var u=s,c=_u(n),d=[];e:{var h=Hh.get(t);if(h!==void 0){var v=Pu,y=t;switch(t){case"keypress":if(Os(n)===0)break e;case"keydown":case"keyup":v=Xv;break;case"focusin":y="focus",v=Pa;break;case"focusout":y="blur",v=Pa;break;case"beforeblur":case"afterblur":v=Pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ty;break;case bh:case zh:case $h:v=Bv;break;case Bh:v=ry;break;case"scroll":v=Uv;break;case"wheel":v=sy;break;case"copy":case"cut":case"paste":v=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Yc}var _=(e&4)!==0,I=!_&&t==="scroll",m=_?h!==null?h+"Capture":null:h;_=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=gi(f,m),w!=null&&_.push(Ii(f,w,g)))),I)break;f=f.return}0<_.length&&(h=new v(h,y,null,n,c),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==dl&&(y=n.relatedTarget||n.fromElement)&&(In(y)||y[Rt]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?In(y):null,y!==null&&(I=$n(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=qc,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Yc,w="onPointerLeave",m="onPointerEnter",f="pointer"),I=v==null?h:Xn(v),g=y==null?h:Xn(y),h=new _(w,f+"leave",v,n,c),h.target=I,h.relatedTarget=g,w=null,In(c)===u&&(_=new _(m,f+"enter",y,n,c),_.target=g,_.relatedTarget=I,w=_),I=w,v&&y)t:{for(_=v,m=y,f=0,g=_;g;g=Wn(g))f++;for(g=0,w=m;w;w=Wn(w))g++;for(;0<f-g;)_=Wn(_),f--;for(;0<g-f;)m=Wn(m),g--;for(;f--;){if(_===m||m!==null&&_===m.alternate)break t;_=Wn(_),m=Wn(m)}_=null}else _=null;v!==null&&ad(d,h,v,_,!1),y!==null&&I!==null&&ad(d,I,y,_,!0)}}e:{if(h=u?Xn(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var T=fy;else if(Zc(h))if(Mh)T=gy;else{T=py;var k=hy}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=my);if(T&&(T=T(t,u))){Lh(d,T,n,c);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&ol(h,"number",h.value)}switch(k=u?Xn(u):window,t){case"focusin":(Zc(k)||k.contentEditable==="true")&&(Yn=k,yl=u,ii=null);break;case"focusout":ii=yl=Yn=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,id(d,n,c);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":id(d,n,c)}var R;if(Cu)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Qn?Oh(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(xh&&n.locale!=="ko"&&(Qn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Qn&&(R=Nh()):(Wt=c,Tu="value"in Wt?Wt.value:Wt.textContent,Qn=!0)),k=Xs(u,A),0<k.length&&(A=new Qc(A,t,null,n,c),d.push({event:A,listeners:k}),R?A.data=R:(R=Dh(n),R!==null&&(A.data=R)))),(R=ay?ly(t,n):uy(t,n))&&(u=Xs(u,"onBeforeInput"),0<u.length&&(c=new Qc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}Wh(d,e)})}function Ii(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gi(t,n),s!=null&&r.unshift(Ii(t,s,i)),s=gi(t,e),s!=null&&r.push(Ii(t,s,i))),t=t.return}return r}function Wn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ad(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=gi(n,s),l!=null&&o.unshift(Ii(n,l,a))):i||(l=gi(n,s),l!=null&&o.push(Ii(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Iy=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function ld(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(Ty,"")}function vs(t,e,n){if(e=ld(e),ld(t)!==e&&n)throw Error(S(425))}function Zs(){}var wl=null,El=null;function Sl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,Py=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(t){return ud.resolve(null).then(t).catch(Cy)}:Il;function Cy(t){setTimeout(function(){throw t})}function Da(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_i(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_i(e)}function Jt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Nr=Math.random().toString(36).slice(2),ut="__reactFiber$"+Nr,Ti="__reactProps$"+Nr,Rt="__reactContainer$"+Nr,Tl="__reactEvents$"+Nr,Ry="__reactListeners$"+Nr,Ay="__reactHandles$"+Nr;function In(t){var e=t[ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rt]||n[ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cd(t);t!==null;){if(n=t[ut])return n;t=cd(t)}return e}t=n,n=t.parentNode}return null}function Wi(t){return t=t[ut]||t[Rt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function zo(t){return t[Ti]||null}var Pl=[],Zn=-1;function cn(t){return{current:t}}function H(t){0>Zn||(t.current=Pl[Zn],Pl[Zn]=null,Zn--)}function $(t,e){Zn++,Pl[Zn]=t.current,t.current=e}var ln={},ye=cn(ln),Ne=cn(!1),An=ln;function gr(t,e){var n=t.type.contextTypes;if(!n)return ln;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xe(t){return t=t.childContextTypes,t!=null}function eo(){H(Ne),H(ye)}function dd(t,e,n){if(ye.current!==ln)throw Error(S(168));$(ye,e),$(Ne,n)}function Kh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,hv(t)||"Unknown",i));return Q({},n,r)}function to(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ln,An=ye.current,$(ye,t),$(Ne,Ne.current),!0}function fd(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Kh(t,e,An),r.__reactInternalMemoizedMergedChildContext=t,H(Ne),H(ye),$(ye,t)):H(Ne),$(Ne,n)}var yt=null,$o=!1,La=!1;function qh(t){yt===null?yt=[t]:yt.push(t)}function Ny(t){$o=!0,qh(t)}function dn(){if(!La&&yt!==null){La=!0;var t=0,e=b;try{var n=yt;for(b=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yt=null,$o=!1}catch(i){throw yt!==null&&(yt=yt.slice(t+1)),_h(wu,dn),i}finally{b=e,La=!1}}return null}var er=[],tr=0,no=null,ro=0,We=[],Ge=0,Nn=null,_t=1,wt="";function wn(t,e){er[tr++]=ro,er[tr++]=no,no=t,ro=e}function Qh(t,e,n){We[Ge++]=_t,We[Ge++]=wt,We[Ge++]=Nn,Nn=t;var r=_t;t=wt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var s=32-tt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_t=1<<32-tt(e)+i|n<<i|r,wt=s+t}else _t=1<<s|n<<i|r,wt=t}function Au(t){t.return!==null&&(wn(t,1),Qh(t,1,0))}function Nu(t){for(;t===no;)no=er[--tr],er[tr]=null,ro=er[--tr],er[tr]=null;for(;t===Nn;)Nn=We[--Ge],We[Ge]=null,wt=We[--Ge],We[Ge]=null,_t=We[--Ge],We[Ge]=null}var Fe=null,je=null,W=!1,et=null;function Yh(t,e){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fe=t,je=Jt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fe=t,je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nn!==null?{id:_t,overflow:wt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fe=t,je=null,!0):!1;default:return!1}}function kl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cl(t){if(W){var e=je;if(e){var n=e;if(!hd(t,e)){if(kl(t))throw Error(S(418));e=Jt(n.nextSibling);var r=Fe;e&&hd(t,e)?Yh(r,n):(t.flags=t.flags&-4097|2,W=!1,Fe=t)}}else{if(kl(t))throw Error(S(418));t.flags=t.flags&-4097|2,W=!1,Fe=t}}}function pd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fe=t}function ys(t){if(t!==Fe)return!1;if(!W)return pd(t),W=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sl(t.type,t.memoizedProps)),e&&(e=je)){if(kl(t))throw Jh(),Error(S(418));for(;e;)Yh(t,e),e=Jt(e.nextSibling)}if(pd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){je=Jt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}je=null}}else je=Fe?Jt(t.stateNode.nextSibling):null;return!0}function Jh(){for(var t=je;t;)t=Jt(t.nextSibling)}function vr(){je=Fe=null,W=!1}function xu(t){et===null?et=[t]:et.push(t)}var xy=Dt.ReactCurrentBatchConfig;function Wr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function _s(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function md(t){var e=t._init;return e(t._payload)}function Xh(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=tn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,w){return f===null||f.tag!==6?(f=za(g,m.mode,w),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,w){var T=g.type;return T===qn?c(m,f,g.props.children,w,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===jt&&md(T)===f.type)?(w=i(f,g.props),w.ref=Wr(m,f,g),w.return=m,w):(w=Fs(g.type,g.key,g.props,null,m.mode,w),w.ref=Wr(m,f,g),w.return=m,w)}function u(m,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=$a(g,m.mode,w),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,w,T){return f===null||f.tag!==7?(f=Cn(g,m.mode,w,T),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=za(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ls:return g=Fs(f.type,f.key,f.props,null,m.mode,g),g.ref=Wr(m,null,f),g.return=m,g;case Kn:return f=$a(f,m.mode,g),f.return=m,f;case jt:var w=f._init;return d(m,w(f._payload),g)}if(Qr(f)||br(f))return f=Cn(f,m.mode,g,null),f.return=m,f;_s(m,f)}return null}function h(m,f,g,w){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(m,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ls:return g.key===T?l(m,f,g,w):null;case Kn:return g.key===T?u(m,f,g,w):null;case jt:return T=g._init,h(m,f,T(g._payload),w)}if(Qr(g)||br(g))return T!==null?null:c(m,f,g,w,null);_s(m,g)}return null}function v(m,f,g,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(f,m,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ls:return m=m.get(w.key===null?g:w.key)||null,l(f,m,w,T);case Kn:return m=m.get(w.key===null?g:w.key)||null,u(f,m,w,T);case jt:var k=w._init;return v(m,f,g,k(w._payload),T)}if(Qr(w)||br(w))return m=m.get(g)||null,c(f,m,w,T,null);_s(f,w)}return null}function y(m,f,g,w){for(var T=null,k=null,R=f,A=f=0,z=null;R!==null&&A<g.length;A++){R.index>A?(z=R,R=null):z=R.sibling;var O=h(m,R,g[A],w);if(O===null){R===null&&(R=z);break}t&&R&&O.alternate===null&&e(m,R),f=s(O,f,A),k===null?T=O:k.sibling=O,k=O,R=z}if(A===g.length)return n(m,R),W&&wn(m,A),T;if(R===null){for(;A<g.length;A++)R=d(m,g[A],w),R!==null&&(f=s(R,f,A),k===null?T=R:k.sibling=R,k=R);return W&&wn(m,A),T}for(R=r(m,R);A<g.length;A++)z=v(R,m,A,g[A],w),z!==null&&(t&&z.alternate!==null&&R.delete(z.key===null?A:z.key),f=s(z,f,A),k===null?T=z:k.sibling=z,k=z);return t&&R.forEach(function(Le){return e(m,Le)}),W&&wn(m,A),T}function _(m,f,g,w){var T=br(g);if(typeof T!="function")throw Error(S(150));if(g=T.call(g),g==null)throw Error(S(151));for(var k=T=null,R=f,A=f=0,z=null,O=g.next();R!==null&&!O.done;A++,O=g.next()){R.index>A?(z=R,R=null):z=R.sibling;var Le=h(m,R,O.value,w);if(Le===null){R===null&&(R=z);break}t&&R&&Le.alternate===null&&e(m,R),f=s(Le,f,A),k===null?T=Le:k.sibling=Le,k=Le,R=z}if(O.done)return n(m,R),W&&wn(m,A),T;if(R===null){for(;!O.done;A++,O=g.next())O=d(m,O.value,w),O!==null&&(f=s(O,f,A),k===null?T=O:k.sibling=O,k=O);return W&&wn(m,A),T}for(R=r(m,R);!O.done;A++,O=g.next())O=v(R,m,A,O.value,w),O!==null&&(t&&O.alternate!==null&&R.delete(O.key===null?A:O.key),f=s(O,f,A),k===null?T=O:k.sibling=O,k=O);return t&&R.forEach(function(Ur){return e(m,Ur)}),W&&wn(m,A),T}function I(m,f,g,w){if(typeof g=="object"&&g!==null&&g.type===qn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ls:e:{for(var T=g.key,k=f;k!==null;){if(k.key===T){if(T=g.type,T===qn){if(k.tag===7){n(m,k.sibling),f=i(k,g.props.children),f.return=m,m=f;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===jt&&md(T)===k.type){n(m,k.sibling),f=i(k,g.props),f.ref=Wr(m,k,g),f.return=m,m=f;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===qn?(f=Cn(g.props.children,m.mode,w,g.key),f.return=m,m=f):(w=Fs(g.type,g.key,g.props,null,m.mode,w),w.ref=Wr(m,f,g),w.return=m,m=w)}return o(m);case Kn:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=$a(g,m.mode,w),f.return=m,m=f}return o(m);case jt:return k=g._init,I(m,f,k(g._payload),w)}if(Qr(g))return y(m,f,g,w);if(br(g))return _(m,f,g,w);_s(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=za(g,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return I}var yr=Xh(!0),Zh=Xh(!1),io=cn(null),so=null,nr=null,Ou=null;function Du(){Ou=nr=so=null}function Lu(t){var e=io.current;H(io),t._currentValue=e}function Rl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function cr(t,e){so=t,Ou=nr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ae=!0),t.firstContext=null)}function Qe(t){var e=t._currentValue;if(Ou!==t)if(t={context:t,memoizedValue:e,next:null},nr===null){if(so===null)throw Error(S(308));nr=t,so.dependencies={lanes:0,firstContext:t}}else nr=nr.next=t;return e}var Tn=null;function Mu(t){Tn===null?Tn=[t]:Tn.push(t)}function ep(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Mu(e)):(n.next=i.next,i.next=n),e.interleaved=n,At(t,r)}function At(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,At(t,n)}return i=r.interleaved,i===null?(e.next=e,Mu(r)):(e.next=i.next,i.next=e),r.interleaved=e,At(t,n)}function Ds(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Eu(t,n)}}function gd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function oo(t,e,n,r){var i=t.updateQueue;Ut=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,v=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(h=e,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(v,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(v,d,h):y,h==null)break e;d=Q({},d,h);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);On|=o,t.lanes=o,t.memoizedState=d}}function vd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Gi={},ht=cn(Gi),Pi=cn(Gi),ki=cn(Gi);function Pn(t){if(t===Gi)throw Error(S(174));return t}function ju(t,e){switch($(ki,e),$(Pi,t),$(ht,Gi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ll(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ll(e,t)}H(ht),$(ht,e)}function _r(){H(ht),H(Pi),H(ki)}function np(t){Pn(ki.current);var e=Pn(ht.current),n=ll(e,t.type);e!==n&&($(Pi,t),$(ht,n))}function Uu(t){Pi.current===t&&(H(ht),H(Pi))}var G=cn(0);function ao(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ma=[];function Fu(){for(var t=0;t<Ma.length;t++)Ma[t]._workInProgressVersionPrimary=null;Ma.length=0}var Ls=Dt.ReactCurrentDispatcher,Va=Dt.ReactCurrentBatchConfig,xn=0,q=null,te=null,ae=null,lo=!1,si=!1,Ci=0,Oy=0;function me(){throw Error(S(321))}function bu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rt(t[n],e[n]))return!1;return!0}function zu(t,e,n,r,i,s){if(xn=s,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ls.current=t===null||t.memoizedState===null?Vy:jy,t=n(r,i),si){s=0;do{if(si=!1,Ci=0,25<=s)throw Error(S(301));s+=1,ae=te=null,e.updateQueue=null,Ls.current=Uy,t=n(r,i)}while(si)}if(Ls.current=uo,e=te!==null&&te.next!==null,xn=0,ae=te=q=null,lo=!1,e)throw Error(S(300));return t}function $u(){var t=Ci!==0;return Ci=0,t}function at(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?q.memoizedState=ae=t:ae=ae.next=t,ae}function Ye(){if(te===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=te.next;var e=ae===null?q.memoizedState:ae.next;if(e!==null)ae=e,te=t;else{if(t===null)throw Error(S(310));te=t,t={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ae===null?q.memoizedState=ae=t:ae=ae.next=t}return ae}function Ri(t,e){return typeof e=="function"?e(t):e}function ja(t){var e=Ye(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((xn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,q.lanes|=c,On|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,rt(r,e.memoizedState)||(Ae=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,q.lanes|=s,On|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ua(t){var e=Ye(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rt(s,e.memoizedState)||(Ae=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function rp(){}function ip(t,e){var n=q,r=Ye(),i=e(),s=!rt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ae=!0),r=r.queue,Bu(ap.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Ai(9,op.bind(null,n,r,i,e),void 0,null),le===null)throw Error(S(349));xn&30||sp(n,e,i)}return i}function sp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function op(t,e,n,r){e.value=n,e.getSnapshot=r,lp(e)&&up(t)}function ap(t,e,n){return n(function(){lp(e)&&up(t)})}function lp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rt(t,n)}catch{return!0}}function up(t){var e=At(t,1);e!==null&&nt(e,t,1,-1)}function yd(t){var e=at();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:t},e.queue=t,t=t.dispatch=My.bind(null,q,t),[e.memoizedState,t]}function Ai(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function cp(){return Ye().memoizedState}function Ms(t,e,n,r){var i=at();q.flags|=t,i.memoizedState=Ai(1|e,n,void 0,r===void 0?null:r)}function Bo(t,e,n,r){var i=Ye();r=r===void 0?null:r;var s=void 0;if(te!==null){var o=te.memoizedState;if(s=o.destroy,r!==null&&bu(r,o.deps)){i.memoizedState=Ai(e,n,s,r);return}}q.flags|=t,i.memoizedState=Ai(1|e,n,s,r)}function _d(t,e){return Ms(8390656,8,t,e)}function Bu(t,e){return Bo(2048,8,t,e)}function dp(t,e){return Bo(4,2,t,e)}function fp(t,e){return Bo(4,4,t,e)}function hp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pp(t,e,n){return n=n!=null?n.concat([t]):null,Bo(4,4,hp.bind(null,e,t),n)}function Hu(){}function mp(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gp(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vp(t,e,n){return xn&21?(rt(n,e)||(n=Sh(),q.lanes|=n,On|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ae=!0),t.memoizedState=n)}function Dy(t,e){var n=b;b=n!==0&&4>n?n:4,t(!0);var r=Va.transition;Va.transition={};try{t(!1),e()}finally{b=n,Va.transition=r}}function yp(){return Ye().memoizedState}function Ly(t,e,n){var r=en(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_p(t))wp(e,n);else if(n=ep(t,e,n,r),n!==null){var i=Ie();nt(n,t,r,i),Ep(n,e,r)}}function My(t,e,n){var r=en(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_p(t))wp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,rt(a,o)){var l=e.interleaved;l===null?(i.next=i,Mu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ep(t,e,i,r),n!==null&&(i=Ie(),nt(n,t,r,i),Ep(n,e,r))}}function _p(t){var e=t.alternate;return t===q||e!==null&&e===q}function wp(t,e){si=lo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ep(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Eu(t,n)}}var uo={readContext:Qe,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Vy={readContext:Qe,useCallback:function(t,e){return at().memoizedState=[t,e===void 0?null:e],t},useContext:Qe,useEffect:_d,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ms(4194308,4,hp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ms(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ms(4,2,t,e)},useMemo:function(t,e){var n=at();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=at();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ly.bind(null,q,t),[r.memoizedState,t]},useRef:function(t){var e=at();return t={current:t},e.memoizedState=t},useState:yd,useDebugValue:Hu,useDeferredValue:function(t){return at().memoizedState=t},useTransition:function(){var t=yd(!1),e=t[0];return t=Dy.bind(null,t[1]),at().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=q,i=at();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),le===null)throw Error(S(349));xn&30||sp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_d(ap.bind(null,r,s,t),[t]),r.flags|=2048,Ai(9,op.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=at(),e=le.identifierPrefix;if(W){var n=wt,r=_t;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ci++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Oy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jy={readContext:Qe,useCallback:mp,useContext:Qe,useEffect:Bu,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:ja,useRef:cp,useState:function(){return ja(Ri)},useDebugValue:Hu,useDeferredValue:function(t){var e=Ye();return vp(e,te.memoizedState,t)},useTransition:function(){var t=ja(Ri)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:rp,useSyncExternalStore:ip,useId:yp,unstable_isNewReconciler:!1},Uy={readContext:Qe,useCallback:mp,useContext:Qe,useEffect:Bu,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:Ua,useRef:cp,useState:function(){return Ua(Ri)},useDebugValue:Hu,useDeferredValue:function(t){var e=Ye();return te===null?e.memoizedState=t:vp(e,te.memoizedState,t)},useTransition:function(){var t=Ua(Ri)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:rp,useSyncExternalStore:ip,useId:yp,unstable_isNewReconciler:!1};function Xe(t,e){if(t&&t.defaultProps){e=Q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Al(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ho={isMounted:function(t){return(t=t._reactInternals)?$n(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ie(),i=en(t),s=Tt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xt(t,s,i),e!==null&&(nt(e,t,i,r),Ds(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ie(),i=en(t),s=Tt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xt(t,s,i),e!==null&&(nt(e,t,i,r),Ds(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ie(),r=en(t),i=Tt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xt(t,i,r),e!==null&&(nt(e,t,r,n),Ds(e,t,r))}};function wd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ei(n,r)||!Ei(i,s):!0}function Sp(t,e,n){var r=!1,i=ln,s=e.contextType;return typeof s=="object"&&s!==null?s=Qe(s):(i=xe(e)?An:ye.current,r=e.contextTypes,s=(r=r!=null)?gr(t,i):ln),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ho,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ed(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ho.enqueueReplaceState(e,e.state,null)}function Nl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qe(s):(s=xe(e)?An:ye.current,i.context=gr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Al(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ho.enqueueReplaceState(i,i.state,null),oo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function wr(t,e){try{var n="",r=e;do n+=fv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Fy=typeof WeakMap=="function"?WeakMap:Map;function Ip(t,e,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fo||(fo=!0,zl=r),xl(t,e)},n}function Tp(t,e,n){n=Tt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xl(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xl(t,e),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Fy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Zy.bind(null,t,e,n),e.then(t,t))}function Id(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Td(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tt(-1,1),e.tag=2,Xt(n,e,1))),n.lanes|=1),t)}var by=Dt.ReactCurrentOwner,Ae=!1;function Ee(t,e,n,r){e.child=t===null?Zh(e,null,n,r):yr(e,t.child,n,r)}function Pd(t,e,n,r,i){n=n.render;var s=e.ref;return cr(e,i),r=zu(t,e,n,r,s,i),n=$u(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nt(t,e,i)):(W&&n&&Au(e),e.flags|=1,Ee(t,e,r,i),e.child)}function kd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Pp(t,e,s,r,i)):(t=Fs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(o,r)&&t.ref===e.ref)return Nt(t,e,i)}return e.flags|=1,t=tn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Pp(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ei(s,r)&&t.ref===e.ref)if(Ae=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ae=!0);else return e.lanes=t.lanes,Nt(t,e,i)}return Ol(t,e,n,r,i)}function kp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(ir,Me),Me|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(ir,Me),Me|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$(ir,Me),Me|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$(ir,Me),Me|=r;return Ee(t,e,i,n),e.child}function Cp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ol(t,e,n,r,i){var s=xe(n)?An:ye.current;return s=gr(e,s),cr(e,i),n=zu(t,e,n,r,s,i),r=$u(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nt(t,e,i)):(W&&r&&Au(e),e.flags|=1,Ee(t,e,n,i),e.child)}function Cd(t,e,n,r,i){if(xe(n)){var s=!0;to(e)}else s=!1;if(cr(e,i),e.stateNode===null)Vs(t,e),Sp(e,n,r),Nl(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=xe(n)?An:ye.current,u=gr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ed(e,o,r,u),Ut=!1;var h=e.memoizedState;o.state=h,oo(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ne.current||Ut?(typeof c=="function"&&(Al(e,n,c,r),l=e.memoizedState),(a=Ut||wd(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tp(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xe(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qe(l):(l=xe(n)?An:ye.current,l=gr(e,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Ed(e,o,r,l),Ut=!1,h=e.memoizedState,o.state=h,oo(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||Ne.current||Ut?(typeof v=="function"&&(Al(e,n,v,r),y=e.memoizedState),(u=Ut||wd(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Dl(t,e,n,r,s,i)}function Dl(t,e,n,r,i,s){Cp(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fd(e,n,!1),Nt(t,e,s);r=e.stateNode,by.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=yr(e,t.child,null,s),e.child=yr(e,null,a,s)):Ee(t,e,a,s),e.memoizedState=r.state,i&&fd(e,n,!0),e.child}function Rp(t){var e=t.stateNode;e.pendingContext?dd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dd(t,e.context,!1),ju(t,e.containerInfo)}function Rd(t,e,n,r,i){return vr(),xu(i),e.flags|=256,Ee(t,e,n,r),e.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function Ml(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ap(t,e,n){var r=e.pendingProps,i=G.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(G,i&1),t===null)return Cl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ko(o,r,0,null),t=Cn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ml(n),e.memoizedState=Ll,t):Wu(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return zy(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=tn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=tn(a,s):(s=Cn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ml(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ll,r}return s=t.child,t=s.sibling,r=tn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wu(t,e){return e=Ko({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ws(t,e,n,r){return r!==null&&xu(r),yr(e,t.child,null,n),t=Wu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fa(Error(S(422))),ws(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ko({mode:"visible",children:r.children},i,0,null),s=Cn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&yr(e,t.child,null,o),e.child.memoizedState=Ml(o),e.memoizedState=Ll,s);if(!(e.mode&1))return ws(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Fa(s,r,void 0),ws(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ae||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,At(t,i),nt(r,t,i,-1))}return Ju(),r=Fa(Error(S(421))),ws(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=e_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,je=Jt(i.nextSibling),Fe=e,W=!0,et=null,t!==null&&(We[Ge++]=_t,We[Ge++]=wt,We[Ge++]=Nn,_t=t.id,wt=t.overflow,Nn=e),e=Wu(e,r.children),e.flags|=4096,e)}function Ad(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rl(t.return,e,n)}function ba(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Np(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ee(t,e,r.children,n),r=G.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ad(t,n,e);else if(t.tag===19)Ad(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(G,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ao(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ba(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ao(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ba(e,!0,n,null,s);break;case"together":ba(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),On|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $y(t,e,n){switch(e.tag){case 3:Rp(e),vr();break;case 5:np(e);break;case 1:xe(e.type)&&to(e);break;case 4:ju(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$(io,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(G,G.current&1),e.flags|=128,null):n&e.child.childLanes?Ap(t,e,n):($(G,G.current&1),t=Nt(t,e,n),t!==null?t.sibling:null);$(G,G.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Np(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(G,G.current),r)break;return null;case 22:case 23:return e.lanes=0,kp(t,e,n)}return Nt(t,e,n)}var xp,Vl,Op,Dp;xp=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vl=function(){};Op=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pn(ht.current);var s=null;switch(n){case"input":i=il(t,i),r=il(t,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=al(t,i),r=al(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zs)}ul(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(pi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(pi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Dp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gr(t,e){if(!W)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function By(t,e,n){var r=e.pendingProps;switch(Nu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(e),null;case 1:return xe(e.type)&&eo(),ge(e),null;case 3:return r=e.stateNode,_r(),H(Ne),H(ye),Fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ys(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,et!==null&&(Hl(et),et=null))),Vl(t,e),ge(e),null;case 5:Uu(e);var i=Pn(ki.current);if(n=e.type,t!==null&&e.stateNode!=null)Op(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return ge(e),null}if(t=Pn(ht.current),ys(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ut]=e,r[Ti]=s,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Jr.length;i++)B(Jr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Uc(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":bc(r,s),B("invalid",r)}ul(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&vs(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vs(r.textContent,a,t),i=["children",""+a]):pi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":us(r),Fc(r,s,!0);break;case"textarea":us(r),zc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ah(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ut]=e,t[Ti]=r,xp(t,e,!1,!1),e.stateNode=t;e:{switch(o=cl(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<Jr.length;i++)B(Jr[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":Uc(t,r),i=il(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),B("invalid",t);break;case"textarea":bc(t,r),i=al(t,r),B("invalid",t);break;default:i=r}ul(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ch(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lh(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&mi(t,l):typeof l=="number"&&mi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&B("scroll",t):l!=null&&mu(t,s,l,o))}switch(n){case"input":us(t),Fc(t,r,!1);break;case"textarea":us(t),zc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+an(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?or(t,!!r.multiple,s,!1):r.defaultValue!=null&&or(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ge(e),null;case 6:if(t&&e.stateNode!=null)Dp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Pn(ki.current),Pn(ht.current),ys(e)){if(r=e.stateNode,n=e.memoizedProps,r[ut]=e,(s=r.nodeValue!==n)&&(t=Fe,t!==null))switch(t.tag){case 3:vs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=e,e.stateNode=r}return ge(e),null;case 13:if(H(G),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(W&&je!==null&&e.mode&1&&!(e.flags&128))Jh(),vr(),e.flags|=98560,s=!1;else if(s=ys(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[ut]=e}else vr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ge(e),s=!1}else et!==null&&(Hl(et),et=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||G.current&1?ie===0&&(ie=3):Ju())),e.updateQueue!==null&&(e.flags|=4),ge(e),null);case 4:return _r(),Vl(t,e),t===null&&Si(e.stateNode.containerInfo),ge(e),null;case 10:return Lu(e.type._context),ge(e),null;case 17:return xe(e.type)&&eo(),ge(e),null;case 19:if(H(G),s=e.memoizedState,s===null)return ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Gr(s,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ao(t),o!==null){for(e.flags|=128,Gr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(G,G.current&1|2),e.child}t=t.sibling}s.tail!==null&&Z()>Er&&(e.flags|=128,r=!0,Gr(s,!1),e.lanes=4194304)}else{if(!r)if(t=ao(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!W)return ge(e),null}else 2*Z()-s.renderingStartTime>Er&&n!==1073741824&&(e.flags|=128,r=!0,Gr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Z(),e.sibling=null,n=G.current,$(G,r?n&1|2:n&1),e):(ge(e),null);case 22:case 23:return Yu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Me&1073741824&&(ge(e),e.subtreeFlags&6&&(e.flags|=8192)):ge(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function Hy(t,e){switch(Nu(e),e.tag){case 1:return xe(e.type)&&eo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _r(),H(Ne),H(ye),Fu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uu(e),null;case 13:if(H(G),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));vr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(G),null;case 4:return _r(),null;case 10:return Lu(e.type._context),null;case 22:case 23:return Yu(),null;case 24:return null;default:return null}}var Es=!1,ve=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,P=null;function rr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(t,e,r)}else n.current=null}function jl(t,e,n){try{n()}catch(r){Y(t,e,r)}}var Nd=!1;function Gy(t,e){if(wl=Ys,t=Uh(),Ru(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(El={focusedElem:t,selectionRange:n},Ys=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,I=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Xe(e.type,_),I);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){Y(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return y=Nd,Nd=!1,y}function oi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jl(e,n,s)}i=i.next}while(i!==r)}}function Wo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ul(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lp(t){var e=t.alternate;e!==null&&(t.alternate=null,Lp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ut],delete e[Ti],delete e[Tl],delete e[Ry],delete e[Ay])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mp(t){return t.tag===5||t.tag===3||t.tag===4}function xd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zs));else if(r!==4&&(t=t.child,t!==null))for(Fl(t,e,n),t=t.sibling;t!==null;)Fl(t,e,n),t=t.sibling}function bl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bl(t,e,n),t=t.sibling;t!==null;)bl(t,e,n),t=t.sibling}var ue=null,Ze=!1;function Mt(t,e,n){for(n=n.child;n!==null;)Vp(t,e,n),n=n.sibling}function Vp(t,e,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(jo,n)}catch{}switch(n.tag){case 5:ve||rr(n,e);case 6:var r=ue,i=Ze;ue=null,Mt(t,e,n),ue=r,Ze=i,ue!==null&&(Ze?(t=ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ze?(t=ue,n=n.stateNode,t.nodeType===8?Da(t.parentNode,n):t.nodeType===1&&Da(t,n),_i(t)):Da(ue,n.stateNode));break;case 4:r=ue,i=Ze,ue=n.stateNode.containerInfo,Ze=!0,Mt(t,e,n),ue=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jl(n,e,o),i=i.next}while(i!==r)}Mt(t,e,n);break;case 1:if(!ve&&(rr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,e,a)}Mt(t,e,n);break;case 21:Mt(t,e,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,Mt(t,e,n),ve=r):Mt(t,e,n);break;default:Mt(t,e,n)}}function Od(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wy),e.forEach(function(r){var i=t_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ze=!1;break e;case 3:ue=a.stateNode.containerInfo,Ze=!0;break e;case 4:ue=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(ue===null)throw Error(S(160));Vp(s,o,i),ue=null,Ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jp(e,t),e=e.sibling}function jp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Je(e,t),st(t),r&4){try{oi(3,t,t.return),Wo(3,t)}catch(_){Y(t,t.return,_)}try{oi(5,t,t.return)}catch(_){Y(t,t.return,_)}}break;case 1:Je(e,t),st(t),r&512&&n!==null&&rr(n,n.return);break;case 5:if(Je(e,t),st(t),r&512&&n!==null&&rr(n,n.return),t.flags&32){var i=t.stateNode;try{mi(i,"")}catch(_){Y(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sh(i,s),cl(a,o);var u=cl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?ch(i,d):c==="dangerouslySetInnerHTML"?lh(i,d):c==="children"?mi(i,d):mu(i,c,d,u)}switch(a){case"input":sl(i,s);break;case"textarea":oh(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?or(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?or(i,!!s.multiple,s.defaultValue,!0):or(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ti]=s}catch(_){Y(t,t.return,_)}}break;case 6:if(Je(e,t),st(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Y(t,t.return,_)}}break;case 3:if(Je(e,t),st(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_i(e.containerInfo)}catch(_){Y(t,t.return,_)}break;case 4:Je(e,t),st(t);break;case 13:Je(e,t),st(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qu=Z())),r&4&&Od(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ve=(u=ve)||c,Je(e,t),ve=u):Je(e,t),st(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(d=P=c;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:oi(4,h,h.return);break;case 1:rr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Y(r,n,_)}}break;case 5:rr(h,h.return);break;case 22:if(h.memoizedState!==null){Ld(d);continue}}v!==null?(v.return=h,P=v):Ld(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uh("display",o))}catch(_){Y(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Y(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Je(e,t),st(t),r&4&&Od(t);break;case 21:break;default:Je(e,t),st(t)}}function st(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mi(i,""),r.flags&=-33);var s=xd(t);bl(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=xd(t);Fl(t,a,o);break;default:throw Error(S(161))}}catch(l){Y(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ky(t,e,n){P=t,Up(t)}function Up(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Es;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ve;a=Es;var u=ve;if(Es=o,(ve=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Md(i):l!==null?(l.return=o,P=l):Md(i);for(;s!==null;)P=s,Up(s),s=s.sibling;P=i,Es=a,ve=u}Dd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Dd(t)}}function Dd(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ve||Wo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xe(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&_i(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ve||e.flags&512&&Ul(e)}catch(h){Y(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Ld(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Md(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wo(4,e)}catch(l){Y(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Y(e,i,l)}}var s=e.return;try{Ul(e)}catch(l){Y(e,s,l)}break;case 5:var o=e.return;try{Ul(e)}catch(l){Y(e,o,l)}}}catch(l){Y(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var qy=Math.ceil,co=Dt.ReactCurrentDispatcher,Gu=Dt.ReactCurrentOwner,qe=Dt.ReactCurrentBatchConfig,U=0,le=null,ee=null,he=0,Me=0,ir=cn(0),ie=0,Ni=null,On=0,Go=0,Ku=0,ai=null,Ce=null,qu=0,Er=1/0,vt=null,fo=!1,zl=null,Zt=null,Ss=!1,Gt=null,ho=0,li=0,$l=null,js=-1,Us=0;function Ie(){return U&6?Z():js!==-1?js:js=Z()}function en(t){return t.mode&1?U&2&&he!==0?he&-he:xy.transition!==null?(Us===0&&(Us=Sh()),Us):(t=b,t!==0||(t=window.event,t=t===void 0?16:Ah(t.type)),t):1}function nt(t,e,n,r){if(50<li)throw li=0,$l=null,Error(S(185));Bi(t,n,r),(!(U&2)||t!==le)&&(t===le&&(!(U&2)&&(Go|=n),ie===4&&bt(t,he)),Oe(t,r),n===1&&U===0&&!(e.mode&1)&&(Er=Z()+500,$o&&dn()))}function Oe(t,e){var n=t.callbackNode;xv(t,e);var r=Qs(t,t===le?he:0);if(r===0)n!==null&&Hc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hc(n),e===1)t.tag===0?Ny(Vd.bind(null,t)):qh(Vd.bind(null,t)),ky(function(){!(U&6)&&dn()}),n=null;else{switch(Ih(r)){case 1:n=wu;break;case 4:n=wh;break;case 16:n=qs;break;case 536870912:n=Eh;break;default:n=qs}n=Gp(n,Fp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fp(t,e){if(js=-1,Us=0,U&6)throw Error(S(327));var n=t.callbackNode;if(dr()&&t.callbackNode!==n)return null;var r=Qs(t,t===le?he:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=po(t,r);else{e=r;var i=U;U|=2;var s=zp();(le!==t||he!==e)&&(vt=null,Er=Z()+500,kn(t,e));do try{Jy();break}catch(a){bp(t,a)}while(!0);Du(),co.current=s,U=i,ee!==null?e=0:(le=null,he=0,e=ie)}if(e!==0){if(e===2&&(i=ml(t),i!==0&&(r=i,e=Bl(t,i))),e===1)throw n=Ni,kn(t,0),bt(t,r),Oe(t,Z()),n;if(e===6)bt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Qy(i)&&(e=po(t,r),e===2&&(s=ml(t),s!==0&&(r=s,e=Bl(t,s))),e===1))throw n=Ni,kn(t,0),bt(t,r),Oe(t,Z()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:En(t,Ce,vt);break;case 3:if(bt(t,r),(r&130023424)===r&&(e=qu+500-Z(),10<e)){if(Qs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ie(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Il(En.bind(null,t,Ce,vt),e);break}En(t,Ce,vt);break;case 4:if(bt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qy(r/1960))-r,10<r){t.timeoutHandle=Il(En.bind(null,t,Ce,vt),r);break}En(t,Ce,vt);break;case 5:En(t,Ce,vt);break;default:throw Error(S(329))}}}return Oe(t,Z()),t.callbackNode===n?Fp.bind(null,t):null}function Bl(t,e){var n=ai;return t.current.memoizedState.isDehydrated&&(kn(t,e).flags|=256),t=po(t,e),t!==2&&(e=Ce,Ce=n,e!==null&&Hl(e)),t}function Hl(t){Ce===null?Ce=t:Ce.push.apply(Ce,t)}function Qy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bt(t,e){for(e&=~Ku,e&=~Go,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tt(e),r=1<<n;t[n]=-1,e&=~r}}function Vd(t){if(U&6)throw Error(S(327));dr();var e=Qs(t,0);if(!(e&1))return Oe(t,Z()),null;var n=po(t,e);if(t.tag!==0&&n===2){var r=ml(t);r!==0&&(e=r,n=Bl(t,r))}if(n===1)throw n=Ni,kn(t,0),bt(t,e),Oe(t,Z()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,En(t,Ce,vt),Oe(t,Z()),null}function Qu(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Er=Z()+500,$o&&dn())}}function Dn(t){Gt!==null&&Gt.tag===0&&!(U&6)&&dr();var e=U;U|=1;var n=qe.transition,r=b;try{if(qe.transition=null,b=1,t)return t()}finally{b=r,qe.transition=n,U=e,!(U&6)&&dn()}}function Yu(){Me=ir.current,H(ir)}function kn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Py(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Nu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eo();break;case 3:_r(),H(Ne),H(ye),Fu();break;case 5:Uu(r);break;case 4:_r();break;case 13:H(G);break;case 19:H(G);break;case 10:Lu(r.type._context);break;case 22:case 23:Yu()}n=n.return}if(le=t,ee=t=tn(t.current,null),he=Me=e,ie=0,Ni=null,Ku=Go=On=0,Ce=ai=null,Tn!==null){for(e=0;e<Tn.length;e++)if(n=Tn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Tn=null}return t}function bp(t,e){do{var n=ee;try{if(Du(),Ls.current=uo,lo){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lo=!1}if(xn=0,ae=te=q=null,si=!1,Ci=0,Gu.current=null,n===null||n.return===null){ie=1,Ni=e,ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=he,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Id(o);if(v!==null){v.flags&=-257,Td(v,o,a,s,e),v.mode&1&&Sd(s,u,e),e=v,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Sd(s,u,e),Ju();break e}l=Error(S(426))}}else if(W&&a.mode&1){var I=Id(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Td(I,o,a,s,e),xu(wr(l,a));break e}}s=l=wr(l,a),ie!==4&&(ie=2),ai===null?ai=[s]:ai.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Ip(s,l,e);gd(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zt===null||!Zt.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Tp(s,a,e);gd(s,w);break e}}s=s.return}while(s!==null)}Bp(n)}catch(T){e=T,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function zp(){var t=co.current;return co.current=uo,t===null?uo:t}function Ju(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(On&268435455)&&!(Go&268435455)||bt(le,he)}function po(t,e){var n=U;U|=2;var r=zp();(le!==t||he!==e)&&(vt=null,kn(t,e));do try{Yy();break}catch(i){bp(t,i)}while(!0);if(Du(),U=n,co.current=r,ee!==null)throw Error(S(261));return le=null,he=0,ie}function Yy(){for(;ee!==null;)$p(ee)}function Jy(){for(;ee!==null&&!Sv();)$p(ee)}function $p(t){var e=Wp(t.alternate,t,Me);t.memoizedProps=t.pendingProps,e===null?Bp(t):ee=e,Gu.current=null}function Bp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Hy(n,e),n!==null){n.flags&=32767,ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,ee=null;return}}else if(n=By(n,e,Me),n!==null){ee=n;return}if(e=e.sibling,e!==null){ee=e;return}ee=e=t}while(e!==null);ie===0&&(ie=5)}function En(t,e,n){var r=b,i=qe.transition;try{qe.transition=null,b=1,Xy(t,e,n,r)}finally{qe.transition=i,b=r}return null}function Xy(t,e,n,r){do dr();while(Gt!==null);if(U&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ov(t,s),t===le&&(ee=le=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ss||(Ss=!0,Gp(qs,function(){return dr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qe.transition,qe.transition=null;var o=b;b=1;var a=U;U|=4,Gu.current=null,Gy(t,n),jp(n,t),yy(El),Ys=!!wl,El=wl=null,t.current=n,Ky(n),Iv(),U=a,b=o,qe.transition=s}else t.current=n;if(Ss&&(Ss=!1,Gt=t,ho=i),s=t.pendingLanes,s===0&&(Zt=null),kv(n.stateNode),Oe(t,Z()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fo)throw fo=!1,t=zl,zl=null,t;return ho&1&&t.tag!==0&&dr(),s=t.pendingLanes,s&1?t===$l?li++:(li=0,$l=t):li=0,dn(),null}function dr(){if(Gt!==null){var t=Ih(ho),e=qe.transition,n=b;try{if(qe.transition=null,b=16>t?16:t,Gt===null)var r=!1;else{if(t=Gt,Gt=null,ho=0,U&6)throw Error(S(331));var i=U;for(U|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:oi(8,c,s)}var d=c.child;if(d!==null)d.return=c,P=d;else for(;P!==null;){c=P;var h=c.sibling,v=c.return;if(Lp(c),c===u){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var I=_.sibling;_.sibling=null,_=I}while(_!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wo(9,a)}}catch(T){Y(a,a.return,T)}if(a===o){P=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,P=w;break e}P=a.return}}if(U=i,dn(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(jo,t)}catch{}r=!0}return r}finally{b=n,qe.transition=e}}return!1}function jd(t,e,n){e=wr(n,e),e=Ip(t,e,1),t=Xt(t,e,1),e=Ie(),t!==null&&(Bi(t,1,e),Oe(t,e))}function Y(t,e,n){if(t.tag===3)jd(t,t,n);else for(;e!==null;){if(e.tag===3){jd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){t=wr(n,t),t=Tp(e,t,1),e=Xt(e,t,1),t=Ie(),e!==null&&(Bi(e,1,t),Oe(e,t));break}}e=e.return}}function Zy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ie(),t.pingedLanes|=t.suspendedLanes&n,le===t&&(he&n)===n&&(ie===4||ie===3&&(he&130023424)===he&&500>Z()-qu?kn(t,0):Ku|=n),Oe(t,e)}function Hp(t,e){e===0&&(t.mode&1?(e=fs,fs<<=1,!(fs&130023424)&&(fs=4194304)):e=1);var n=Ie();t=At(t,e),t!==null&&(Bi(t,e,n),Oe(t,n))}function e_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hp(t,n)}function t_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Hp(t,n)}var Wp;Wp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ne.current)Ae=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ae=!1,$y(t,e,n);Ae=!!(t.flags&131072)}else Ae=!1,W&&e.flags&1048576&&Qh(e,ro,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vs(t,e),t=e.pendingProps;var i=gr(e,ye.current);cr(e,n),i=zu(null,e,r,t,i,n);var s=$u();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xe(r)?(s=!0,to(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vu(e),i.updater=Ho,e.stateNode=i,i._reactInternals=e,Nl(e,r,t,n),e=Dl(null,e,r,!0,s,n)):(e.tag=0,W&&s&&Au(e),Ee(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=r_(r),t=Xe(r,t),i){case 0:e=Ol(null,e,r,t,n);break e;case 1:e=Cd(null,e,r,t,n);break e;case 11:e=Pd(null,e,r,t,n);break e;case 14:e=kd(null,e,r,Xe(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),Ol(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),Cd(t,e,r,i,n);case 3:e:{if(Rp(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tp(t,e),oo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=wr(Error(S(423)),e),e=Rd(t,e,r,n,i);break e}else if(r!==i){i=wr(Error(S(424)),e),e=Rd(t,e,r,n,i);break e}else for(je=Jt(e.stateNode.containerInfo.firstChild),Fe=e,W=!0,et=null,n=Zh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vr(),r===i){e=Nt(t,e,n);break e}Ee(t,e,r,n)}e=e.child}return e;case 5:return np(e),t===null&&Cl(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sl(r,i)?o=null:s!==null&&Sl(r,s)&&(e.flags|=32),Cp(t,e),Ee(t,e,o,n),e.child;case 6:return t===null&&Cl(e),null;case 13:return Ap(t,e,n);case 4:return ju(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=yr(e,null,r,n):Ee(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),Pd(t,e,r,i,n);case 7:return Ee(t,e,e.pendingProps,n),e.child;case 8:return Ee(t,e,e.pendingProps.children,n),e.child;case 12:return Ee(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$(io,r._currentValue),r._currentValue=o,s!==null)if(rt(s.value,o)){if(s.children===i.children&&!Ne.current){e=Nt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rl(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rl(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ee(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,cr(e,n),i=Qe(i),r=r(i),e.flags|=1,Ee(t,e,r,n),e.child;case 14:return r=e.type,i=Xe(r,e.pendingProps),i=Xe(r.type,i),kd(t,e,r,i,n);case 15:return Pp(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),Vs(t,e),e.tag=1,xe(r)?(t=!0,to(e)):t=!1,cr(e,n),Sp(e,r,i),Nl(e,r,i,n),Dl(null,e,r,!0,t,n);case 19:return Np(t,e,n);case 22:return kp(t,e,n)}throw Error(S(156,e.tag))};function Gp(t,e){return _h(t,e)}function n_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,n,r){return new n_(t,e,n,r)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function r_(t){if(typeof t=="function")return Xu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vu)return 11;if(t===yu)return 14}return 2}function tn(t,e){var n=t.alternate;return n===null?(n=Ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qn:return Cn(n.children,i,s,e);case gu:o=8,i|=8;break;case el:return t=Ke(12,n,e,i|2),t.elementType=el,t.lanes=s,t;case tl:return t=Ke(13,n,e,i),t.elementType=tl,t.lanes=s,t;case nl:return t=Ke(19,n,e,i),t.elementType=nl,t.lanes=s,t;case nh:return Ko(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eh:o=10;break e;case th:o=9;break e;case vu:o=11;break e;case yu:o=14;break e;case jt:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Ke(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cn(t,e,n,r){return t=Ke(7,t,r,e),t.lanes=n,t}function Ko(t,e,n,r){return t=Ke(22,t,r,e),t.elementType=nh,t.lanes=n,t.stateNode={isHidden:!1},t}function za(t,e,n){return t=Ke(6,t,null,e),t.lanes=n,t}function $a(t,e,n){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function i_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sa(0),this.expirationTimes=Sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zu(t,e,n,r,i,s,o,a,l){return t=new i_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ke(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vu(s),t}function s_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Kp(t){if(!t)return ln;t=t._reactInternals;e:{if($n(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(xe(n))return Kh(t,n,e)}return e}function qp(t,e,n,r,i,s,o,a,l){return t=Zu(n,r,!0,t,i,s,o,a,l),t.context=Kp(null),n=t.current,r=Ie(),i=en(n),s=Tt(r,i),s.callback=e??null,Xt(n,s,i),t.current.lanes=i,Bi(t,i,r),Oe(t,r),t}function qo(t,e,n,r){var i=e.current,s=Ie(),o=en(i);return n=Kp(n),e.context===null?e.context=n:e.pendingContext=n,e=Tt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xt(i,e,o),t!==null&&(nt(t,i,o,s),Ds(t,i,o)),o}function mo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ud(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ec(t,e){Ud(t,e),(t=t.alternate)&&Ud(t,e)}function o_(){return null}var Qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function tc(t){this._internalRoot=t}Qo.prototype.render=tc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));qo(t,e,null,null)};Qo.prototype.unmount=tc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dn(function(){qo(null,t,null,null)}),e[Rt]=null}};function Qo(t){this._internalRoot=t}Qo.prototype.unstable_scheduleHydration=function(t){if(t){var e=kh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ft.length&&e!==0&&e<Ft[n].priority;n++);Ft.splice(n,0,t),n===0&&Rh(t)}};function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fd(){}function a_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=mo(o);s.call(u)}}var o=qp(e,r,t,0,null,!1,!1,"",Fd);return t._reactRootContainer=o,t[Rt]=o.current,Si(t.nodeType===8?t.parentNode:t),Dn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=mo(l);a.call(u)}}var l=Zu(t,0,!1,null,null,!1,!1,"",Fd);return t._reactRootContainer=l,t[Rt]=l.current,Si(t.nodeType===8?t.parentNode:t),Dn(function(){qo(e,l,n,r)}),l}function Jo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=mo(o);a.call(l)}}qo(e,o,t,i)}else o=a_(n,e,t,i,r);return mo(o)}Th=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yr(e.pendingLanes);n!==0&&(Eu(e,n|1),Oe(e,Z()),!(U&6)&&(Er=Z()+500,dn()))}break;case 13:Dn(function(){var r=At(t,1);if(r!==null){var i=Ie();nt(r,t,1,i)}}),ec(t,1)}};Su=function(t){if(t.tag===13){var e=At(t,134217728);if(e!==null){var n=Ie();nt(e,t,134217728,n)}ec(t,134217728)}};Ph=function(t){if(t.tag===13){var e=en(t),n=At(t,e);if(n!==null){var r=Ie();nt(n,t,e,r)}ec(t,e)}};kh=function(){return b};Ch=function(t,e){var n=b;try{return b=t,e()}finally{b=n}};fl=function(t,e,n){switch(e){case"input":if(sl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zo(r);if(!i)throw Error(S(90));ih(r),sl(r,i)}}}break;case"textarea":oh(t,n);break;case"select":e=n.value,e!=null&&or(t,!!n.multiple,e,!1)}};hh=Qu;ph=Dn;var l_={usingClientEntryPoint:!1,Events:[Wi,Xn,zo,dh,fh,Qu]},Kr={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u_={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vh(t),t===null?null:t.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||o_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Is.isDisabled&&Is.supportsFiber)try{jo=Is.inject(u_),ft=Is}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l_;Be.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(e))throw Error(S(200));return s_(t,e,null,n)};Be.createRoot=function(t,e){if(!nc(t))throw Error(S(299));var n=!1,r="",i=Qp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zu(t,1,!1,null,null,n,!1,r,i),t[Rt]=e.current,Si(t.nodeType===8?t.parentNode:t),new tc(e)};Be.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=vh(e),t=t===null?null:t.stateNode,t};Be.flushSync=function(t){return Dn(t)};Be.hydrate=function(t,e,n){if(!Yo(e))throw Error(S(200));return Jo(null,t,e,!0,n)};Be.hydrateRoot=function(t,e,n){if(!nc(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Qp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qp(e,null,t,1,n??null,i,!1,s,o),t[Rt]=e.current,Si(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qo(e)};Be.render=function(t,e,n){if(!Yo(e))throw Error(S(200));return Jo(null,t,e,!1,n)};Be.unmountComponentAtNode=function(t){if(!Yo(t))throw Error(S(40));return t._reactRootContainer?(Dn(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[Rt]=null})}),!0):!1};Be.unstable_batchedUpdates=Qu;Be.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yo(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Jo(t,e,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function Yp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp)}catch(t){console.error(t)}}Yp(),Yf.exports=Be;var c_=Yf.exports,bd=c_;Xa.createRoot=bd.createRoot,Xa.hydrateRoot=bd.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xi.apply(this,arguments)}var Kt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kt||(Kt={}));const zd="popstate";function d_(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Wl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:go(i)}return h_(e,n,null,t)}function J(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function f_(){return Math.random().toString(36).substr(2,8)}function $d(t,e){return{usr:t.state,key:t.key,idx:e}}function Wl(t,e,n,r){return n===void 0&&(n=null),xi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xr(e):e,{state:n,key:e&&e.key||r||f_()})}function go(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function h_(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Kt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(xi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Kt.Pop;let I=c(),m=I==null?null:I-u;u=I,l&&l({action:a,location:_.location,delta:m})}function h(I,m){a=Kt.Push;let f=Wl(_.location,I,m);u=c()+1;let g=$d(f,u),w=_.createHref(f);try{o.pushState(g,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function v(I,m){a=Kt.Replace;let f=Wl(_.location,I,m);u=c();let g=$d(f,u),w=_.createHref(f);o.replaceState(g,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function y(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:go(I);return f=f.replace(/ $/,"%20"),J(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let _={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zd,d),l=I,()=>{i.removeEventListener(zd,d),l=null}},createHref(I){return e(i,I)},createURL:y,encodeLocation(I){let m=y(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(I){return o.go(I)}};return _}var Bd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Bd||(Bd={}));function p_(t,e,n){return n===void 0&&(n="/"),m_(t,e,n,!1)}function m_(t,e,n,r){let i=typeof e=="string"?xr(e):e,s=Sr(i.pathname||"/",n);if(s==null)return null;let o=Xp(t);g_(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=C_(s);a=P_(o[l],u,r)}return a}function Xp(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(J(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=nn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(J(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xp(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:I_(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Zp(s.path))i(s,o,l)}),e}function Zp(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Zp(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function g_(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:T_(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const v_=/^:[\w-]+$/,y_=3,__=2,w_=1,E_=10,S_=-2,Hd=t=>t==="*";function I_(t,e){let n=t.split("/"),r=n.length;return n.some(Hd)&&(r+=S_),e&&(r+=__),n.filter(i=>!Hd(i)).reduce((i,s)=>i+(v_.test(s)?y_:s===""?w_:E_),r)}function T_(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function P_(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=s==="/"?e:e.slice(s.length)||"/",d=vo({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=vo({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:nn([s,d.pathname]),pathnameBase:x_(nn([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=nn([s,d.pathnameBase]))}return o}function vo(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=k_(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:v}=c;if(h==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return v&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function k_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function C_(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function R_(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xr(t):t;return{pathname:n?n.startsWith("/")?n:A_(n,e):e,search:O_(r),hash:D_(i)}}function A_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ba(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function em(t,e){let n=N_(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function tm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xr(t):(i=xi({},t),J(!i.pathname||!i.pathname.includes("?"),Ba("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),Ba("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),Ba("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=R_(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const nn=t=>t.join("/").replace(/\/\/+/g,"/"),x_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),O_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,D_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function L_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const nm=["post","put","patch","delete"];new Set(nm);const M_=["get",...nm];new Set(M_);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oi.apply(this,arguments)}const Xo=E.createContext(null),rm=E.createContext(null),fn=E.createContext(null),Zo=E.createContext(null),hn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),im=E.createContext(null);function V_(t,e){let{relative:n}=e===void 0?{}:e;Ki()||J(!1);let{basename:r,navigator:i}=E.useContext(fn),{hash:s,pathname:o,search:a}=ea(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:nn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ki(){return E.useContext(Zo)!=null}function qi(){return Ki()||J(!1),E.useContext(Zo).location}function sm(t){E.useContext(fn).static||E.useLayoutEffect(t)}function pn(){let{isDataRoute:t}=E.useContext(hn);return t?Q_():j_()}function j_(){Ki()||J(!1);let t=E.useContext(Xo),{basename:e,future:n,navigator:r}=E.useContext(fn),{matches:i}=E.useContext(hn),{pathname:s}=qi(),o=JSON.stringify(em(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return sm(()=>{a.current=!0}),E.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=tm(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:nn([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function rc(){let{matches:t}=E.useContext(hn),e=t[t.length-1];return e?e.params:{}}function ea(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(fn),{matches:i}=E.useContext(hn),{pathname:s}=qi(),o=JSON.stringify(em(i,r.v7_relativeSplatPath));return E.useMemo(()=>tm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function U_(t,e){return F_(t,e)}function F_(t,e,n,r){Ki()||J(!1);let{navigator:i}=E.useContext(fn),{matches:s}=E.useContext(hn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=qi(),c;if(e){var d;let I=typeof e=="string"?xr(e):e;l==="/"||(d=I.pathname)!=null&&d.startsWith(l)||J(!1),c=I}else c=u;let h=c.pathname||"/",v=h;if(l!=="/"){let I=l.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(I.length).join("/")}let y=p_(t,{pathname:v}),_=H_(y&&y.map(I=>Object.assign({},I,{params:Object.assign({},a,I.params),pathname:nn([l,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?l:nn([l,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return e&&_?E.createElement(Zo.Provider,{value:{location:Oi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Kt.Pop}},_):_}function b_(){let t=q_(),e=L_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const z_=E.createElement(b_,null);class $_ extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(hn.Provider,{value:this.props.routeContext},E.createElement(im.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function B_(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Xo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(hn.Provider,{value:e},r)}function H_(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||J(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:v}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let v,y=!1,_=null,I=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||z_,l&&(u<0&&h===0?(y=!0,I=null):u===h&&(y=!0,I=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,h+1)),f=()=>{let g;return v?g=_:y?g=I:d.route.Component?g=E.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,E.createElement(B_,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?E.createElement($_,{location:n.location,revalidation:n.revalidation,component:_,error:v,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var om=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(om||{}),yo=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(yo||{});function W_(t){let e=E.useContext(Xo);return e||J(!1),e}function G_(t){let e=E.useContext(rm);return e||J(!1),e}function K_(t){let e=E.useContext(hn);return e||J(!1),e}function am(t){let e=K_(),n=e.matches[e.matches.length-1];return n.route.id||J(!1),n.route.id}function q_(){var t;let e=E.useContext(im),n=G_(yo.UseRouteError),r=am(yo.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Q_(){let{router:t}=W_(om.UseNavigateStable),e=am(yo.UseNavigateStable),n=E.useRef(!1);return sm(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Oi({fromRouteId:e},s)))},[t,e])}function ot(t){J(!1)}function Y_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kt.Pop,navigator:s,static:o=!1,future:a}=t;Ki()&&J(!1);let l=e.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:s,static:o,future:Oi({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=xr(r));let{pathname:c="/",search:d="",hash:h="",state:v=null,key:y="default"}=r,_=E.useMemo(()=>{let I=Sr(c,l);return I==null?null:{location:{pathname:I,search:d,hash:h,state:v,key:y},navigationType:i}},[l,c,d,h,v,y,i]);return _==null?null:E.createElement(fn.Provider,{value:u},E.createElement(Zo.Provider,{children:n,value:_}))}function J_(t){let{children:e,location:n}=t;return U_(Gl(e),n)}new Promise(()=>{});function Gl(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Gl(r.props.children,s));return}r.type!==ot&&J(!1),!r.props.index||!r.props.children||J(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Gl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_o.apply(this,arguments)}function lm(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function X_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Z_(t,e){return t.button===0&&(!e||e==="_self")&&!X_(t)}const e0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],t0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],n0="6";try{window.__reactRouterVersion=n0}catch{}const r0=E.createContext({isTransitioning:!1}),i0="startTransition",Wd=Zg[i0];function s0(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=d_({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=E.useCallback(d=>{u&&Wd?Wd(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>o.listen(c),[o,c]),E.createElement(Y_,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const o0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",a0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=lm(e,e0),{basename:v}=E.useContext(fn),y,_=!1;if(typeof u=="string"&&a0.test(u)&&(y=u,o0))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),T=Sr(w.pathname,v);w.origin===g.origin&&T!=null?u=T+w.search+w.hash:_=!0}catch{}let I=V_(u,{relative:i}),m=c0(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function f(g){r&&r(g),g.defaultPrevented||m(g)}return E.createElement("a",_o({},h,{href:y||I,onClick:_||s?r:f,ref:n,target:l}))}),l0=E.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=lm(e,t0),h=ea(l,{relative:d.relative}),v=qi(),y=E.useContext(rm),{navigator:_,basename:I}=E.useContext(fn),m=y!=null&&d0(h)&&u===!0,f=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,g=v.pathname,w=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(g=g.toLowerCase(),w=w?w.toLowerCase():null,f=f.toLowerCase()),w&&I&&(w=Sr(w,I)||w);const T=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let k=g===f||!o&&g.startsWith(f)&&g.charAt(T)==="/",R=w!=null&&(w===f||!o&&w.startsWith(f)&&w.charAt(f.length)==="/"),A={isActive:k,isPending:R,isTransitioning:m},z=k?r:void 0,O;typeof s=="function"?O=s(A):O=[s,k?"active":null,R?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let Le=typeof a=="function"?a(A):a;return E.createElement(fe,_o({},d,{"aria-current":z,className:O,ref:n,style:Le,to:l,unstable_viewTransition:u}),typeof c=="function"?c(A):c)});var Kl;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Kl||(Kl={}));var Gd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Gd||(Gd={}));function u0(t){let e=E.useContext(Xo);return e||J(!1),e}function c0(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=pn(),u=qi(),c=ea(t,{relative:o});return E.useCallback(d=>{if(Z_(d,n)){d.preventDefault();let h=r!==void 0?r:go(u)===go(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function d0(t,e){e===void 0&&(e={});let n=E.useContext(r0);n==null&&J(!1);let{basename:r}=u0(Kl.useViewTransitionState),i=ea(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Sr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Sr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return vo(i.pathname,o)!=null||vo(i.pathname,s)!=null}const Bn=dt.createContext({});var Kd={};/**
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
 */const um=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},f0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(h=64)),r.push(n[c],n[d],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(um(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):f0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new h0;const h=s<<2|a>>4;if(r.push(h),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class h0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const p0=function(t){const e=um(t);return cm.encodeByteArray(e,!0)},wo=function(t){return p0(t).replace(/\./g,"")},dm=function(t){try{return cm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function m0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const g0=()=>m0().__FIREBASE_DEFAULTS__,v0=()=>{if(typeof process>"u"||typeof Kd>"u")return;const t=Kd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},y0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dm(t[1]);return e&&JSON.parse(e)},ic=()=>{try{return g0()||v0()||y0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fm=t=>{var e,n;return(n=(e=ic())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_0=t=>{const e=fm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hm=()=>{var t;return(t=ic())===null||t===void 0?void 0:t.config},pm=t=>{var e;return(e=ic())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class w0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function E0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wo(JSON.stringify(n)),wo(JSON.stringify(o)),""].join(".")}/**
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function S0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function I0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function T0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P0(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function k0(){try{return typeof indexedDB=="object"}catch{return!1}}function C0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const R0="FirebaseError";class Lt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=R0,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?A0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Lt(i,a,r)}}function A0(t,e){return t.replace(N0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const N0=/\{\$([^}]+)}/g;function x0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qd(s)&&qd(o)){if(!Ir(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qd(t){return t!==null&&typeof t=="object"}/**
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
 */function Yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function O0(t,e){const n=new D0(t,e);return n.subscribe.bind(n)}class D0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");L0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ha),i.error===void 0&&(i.error=Ha),i.complete===void 0&&(i.complete=Ha);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ha(){}/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}class Ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sn="[DEFAULT]";/**
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
 */class M0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new w0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(j0(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:V0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function V0(t){return t===Sn?void 0:t}function j0(t){return t.instantiationMode==="EAGER"}/**
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
 */class U0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new M0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const F0={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},b0=F.INFO,z0={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},$0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=z0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sc{constructor(e){this.name=e,this._logLevel=b0,this._logHandler=$0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?F0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const B0=(t,e)=>e.some(n=>t instanceof n);let Qd,Yd;function H0(){return Qd||(Qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W0(){return Yd||(Yd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mm=new WeakMap,ql=new WeakMap,gm=new WeakMap,Wa=new WeakMap,oc=new WeakMap;function G0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mm.set(n,t)}).catch(()=>{}),oc.set(e,t),e}function K0(t){if(ql.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ql.set(t,e)}let Ql={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ql.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function q0(t){Ql=t(Ql)}function Q0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ga(this),e,...n);return gm.set(r,e.sort?e.sort():[e]),rn(r)}:W0().includes(t)?function(...e){return t.apply(Ga(this),e),rn(mm.get(this))}:function(...e){return rn(t.apply(Ga(this),e))}}function Y0(t){return typeof t=="function"?Q0(t):(t instanceof IDBTransaction&&K0(t),B0(t,H0())?new Proxy(t,Ql):t)}function rn(t){if(t instanceof IDBRequest)return G0(t);if(Wa.has(t))return Wa.get(t);const e=Y0(t);return e!==t&&(Wa.set(t,e),oc.set(e,t)),e}const Ga=t=>oc.get(t);function J0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=rn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(rn(o.result),l.oldVersion,l.newVersion,rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const X0=["get","getKey","getAll","getAllKeys","count"],Z0=["put","add","delete","clear"],Ka=new Map;function Jd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ka.get(e))return Ka.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Z0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||X0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ka.set(e,s),s}q0(t=>({...t,get:(e,n,r)=>Jd(e,n)||t.get(e,n,r),has:(e,n)=>!!Jd(e,n)||t.has(e,n)}));/**
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
 */class ew{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yl="@firebase/app",Xd="0.10.6";/**
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
 */const Mn=new sc("@firebase/app"),nw="@firebase/app-compat",rw="@firebase/analytics-compat",iw="@firebase/analytics",sw="@firebase/app-check-compat",ow="@firebase/app-check",aw="@firebase/auth",lw="@firebase/auth-compat",uw="@firebase/database",cw="@firebase/database-compat",dw="@firebase/functions",fw="@firebase/functions-compat",hw="@firebase/installations",pw="@firebase/installations-compat",mw="@firebase/messaging",gw="@firebase/messaging-compat",vw="@firebase/performance",yw="@firebase/performance-compat",_w="@firebase/remote-config",ww="@firebase/remote-config-compat",Ew="@firebase/storage",Sw="@firebase/storage-compat",Iw="@firebase/firestore",Tw="@firebase/vertexai-preview",Pw="@firebase/firestore-compat",kw="firebase",Cw="10.12.3";/**
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
 */const Jl="[DEFAULT]",Rw={[Yl]:"fire-core",[nw]:"fire-core-compat",[iw]:"fire-analytics",[rw]:"fire-analytics-compat",[ow]:"fire-app-check",[sw]:"fire-app-check-compat",[aw]:"fire-auth",[lw]:"fire-auth-compat",[uw]:"fire-rtdb",[cw]:"fire-rtdb-compat",[dw]:"fire-fn",[fw]:"fire-fn-compat",[hw]:"fire-iid",[pw]:"fire-iid-compat",[mw]:"fire-fcm",[gw]:"fire-fcm-compat",[vw]:"fire-perf",[yw]:"fire-perf-compat",[_w]:"fire-rc",[ww]:"fire-rc-compat",[Ew]:"fire-gcs",[Sw]:"fire-gcs-compat",[Iw]:"fire-fst",[Pw]:"fire-fst-compat",[Tw]:"fire-vertex","fire-js":"fire-js",[kw]:"fire-js-all"};/**
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
 */const Eo=new Map,Aw=new Map,Xl=new Map;function Zd(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tr(t){const e=t.name;if(Xl.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;Xl.set(e,t);for(const n of Eo.values())Zd(n,t);for(const n of Aw.values())Zd(n,t);return!0}function ac(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ct(t){return t.settings!==void 0}/**
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
 */const Nw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new Qi("app","Firebase",Nw);/**
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
 */class xw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=Cw;function vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sn.create("bad-app-name",{appName:String(i)});if(n||(n=hm()),!n)throw sn.create("no-options");const s=Eo.get(i);if(s){if(Ir(n,s.options)&&Ir(r,s.config))return s;throw sn.create("duplicate-app",{appName:i})}const o=new U0(i);for(const l of Xl.values())o.addComponent(l);const a=new xw(n,r,o);return Eo.set(i,a),a}function ym(t=Jl){const e=Eo.get(t);if(!e&&t===Jl&&hm())return vm();if(!e)throw sn.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=Rw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(a.join(" "));return}Tr(new Ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ow="firebase-heartbeat-database",Dw=1,Di="firebase-heartbeat-store";let qa=null;function _m(){return qa||(qa=J0(Ow,Dw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Di)}catch(n){console.warn(n)}}}}).catch(t=>{throw sn.create("idb-open",{originalErrorMessage:t.message})})),qa}async function Lw(t){try{const n=(await _m()).transaction(Di),r=await n.objectStore(Di).get(wm(t));return await n.done,r}catch(e){if(e instanceof Lt)Mn.warn(e.message);else{const n=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function ef(t,e){try{const r=(await _m()).transaction(Di,"readwrite");await r.objectStore(Di).put(e,wm(t)),await r.done}catch(n){if(n instanceof Lt)Mn.warn(n.message);else{const r=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function wm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Mw=1024,Vw=30*24*60*60*1e3;class jw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Vw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tf(),{heartbeatsToSend:r,unsentEntries:i}=Uw(this._heartbeatsCache.heartbeats),s=wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function tf(){return new Date().toISOString().substring(0,10)}function Uw(t,e=Mw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return k0()?C0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Lw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ef(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ef(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nf(t){return wo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bw(t){Tr(new Ln("platform-logger",e=>new ew(e),"PRIVATE")),Tr(new Ln("heartbeat",e=>new jw(e),"PRIVATE")),on(Yl,Xd,t),on(Yl,Xd,"esm2017"),on("fire-js","")}bw("");var zw="firebase",$w="10.12.3";/**
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
 */on(zw,$w,"app");/**
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
 */let Dr="10.12.3";/**
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
 */const Pr=new sc("@firebase/firestore");function So(t,...e){if(Pr.logLevel<=F.DEBUG){const n=e.map(uc);Pr.debug(`Firestore (${Dr}): ${t}`,...n)}}function lc(t,...e){if(Pr.logLevel<=F.ERROR){const n=e.map(uc);Pr.error(`Firestore (${Dr}): ${t}`,...n)}}function Em(t,...e){if(Pr.logLevel<=F.WARN){const n=e.map(uc);Pr.warn(`Firestore (${Dr}): ${t}`,...n)}}function uc(t){if(typeof t=="string")return t;try{/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Dr}) INTERNAL ASSERTION FAILED: `+t;throw lc(e),new Error(e)}function be(t,e){t||K()}function Ji(t,e){return t}/**
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
 */const rf="ok",Bw="cancelled",ui="unknown",j="invalid-argument",Hw="deadline-exceeded",Ww="not-found",Gw="permission-denied",Zl="unauthenticated",Kw="resource-exhausted",kr="failed-precondition",qw="aborted",Qw="out-of-range",Sm="unimplemented",Yw="internal",Jw="unavailable";class x extends Lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Im{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class Zw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eE{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(be(typeof e.accessToken=="string"),new Im(e.accessToken,new ke(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class tE{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class nE{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new tE(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iE{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(be(typeof e.token=="string"),new rE(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class sE{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Li&&e.projectId===this.projectId&&e.database===this.database}}class Mi{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends Mi{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(j,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const oE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends Mi{construct(e,n,r){return new Re(e,n,r)}static isValidIdentifier(e){return oE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(j,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(j,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(j,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(j,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
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
 */function Tm(t,e,n){if(!n)throw new x(j,`Function ${t}() cannot be called with an empty ${e}.`)}function sf(t){if(!Se.isDocumentKey(t))throw new x(j,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function of(t){if(Se.isDocumentKey(t))throw new x(j,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(j,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cc(t);throw new x(j,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Pm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let Ts=null;function aE(){return Ts===null?Ts=function(){return 268435456+Math.round(2147483648*Math.random())}():Ts++,"0x"+Ts.toString(16)}/**
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
 */function lE(t){return t==null}function Io(t){return t===0&&1/t==-1/0}/**
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
 */const uE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var af,V;function lf(t){if(t===void 0)return lc("RPC_ERROR","HTTP error has no status"),ui;switch(t){case 200:return rf;case 400:return kr;case 401:return Zl;case 403:return Gw;case 404:return Ww;case 409:return qw;case 416:return Qw;case 429:return Kw;case 499:return Bw;case 500:return ui;case 501:return Sm;case 503:return Jw;case 504:return Hw;default:return t>=200&&t<300?rf:t>=400&&t<500?kr:t>=500&&t<600?Yw:ui}}/**
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
 */(V=af||(af={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";class cE extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get R(){return!1}P(n,r,i,s,o){const a=aE(),l=this.I(n,r.toUriEncodedString());So("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(c=>(So("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Em("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}g(n,r,i,s,o,a){return this.P(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Dr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=uE[n];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new x(lf(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new x(lf(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
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
 */function dE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class fE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function km(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */function uf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class hE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hE("Invalid base64 string: "+s):s}}(e);return new xt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const pE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(be(!!t),typeof t=="string"){let e=0;const n=pE.exec(t);if(be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(t.seconds),nanos:ne(t.nanos)}}function ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vi(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
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
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(j,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(j,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(j,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(j,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Cm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rm(t){const e=t.mapValue.fields.__previous_value__;return Cm(e)?Rm(e):e}function ji(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */const Ps={fields:{__type__:{stringValue:"__max__"}}};function jn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cm(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:K()}function To(t,e){if(t===e)return!0;const n=jn(t);if(n!==jn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ji(t).isEqual(ji(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vn(i.timestampValue),a=Vn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Vi(i.bytesValue).isEqual(Vi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ne(i.geoPointValue.latitude)===ne(s.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ne(i.integerValue)===ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ne(i.doubleValue),a=ne(s.doubleValue);return o===a?Io(o)===Io(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return km(t.arrayValue.values||[],e.arrayValue.values||[],To);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(uf(o)!==uf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!To(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function Ui(t,e){return(t.values||[]).find(n=>To(n,e))!==void 0}function Po(t,e){if(t===e)return 0;const n=jn(t),r=jn(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ne(s.integerValue||s.doubleValue),l=ne(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return cf(t.timestampValue,e.timestampValue);case 4:return cf(ji(t),ji(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Vi(s),l=Vi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=oe(a[u],l[u]);if(c!==0)return c}return oe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=oe(ne(s.latitude),ne(o.latitude));return a!==0?a:oe(ne(s.longitude),ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Po(a[u],l[u]);if(c)return c}return oe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ps&&o===Ps)return 0;if(s===Ps)return 1;if(o===Ps)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=oe(l[d],c[d]);if(h!==0)return h;const v=Po(a[l[d]],u[c[d]]);if(v!==0)return v}return oe(l.length,c.length)}(t.mapValue,e.mapValue);default:throw K()}}function cf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Vn(t),r=Vn(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Am(t){return!!t&&"arrayValue"in t}function df(t){return!!t&&"nullValue"in t}function ff(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qa(t){return!!t&&"mapValue"in t}function ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}class hf{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class Nm{}class gt extends Nm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mE(e,n,r):n==="array-contains"?new yE(e,r):n==="in"?new _E(e,r):n==="not-in"?new wE(e,r):n==="array-contains-any"?new EE(e,r):new gt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gE(e,r):new vE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Po(n,this.value)):n!==null&&jn(this.value)===jn(n)&&this.matchesComparison(Po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ta extends Nm{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new ta(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class mE extends gt{constructor(e,n,r){super(e,n,r),this.key=Se.fromName(r.referenceValue)}matches(e){const n=Se.comparator(e.key,this.key);return this.matchesComparison(n)}}class gE extends gt{constructor(e,n){super(e,"in",n),this.keys=xm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vE extends gt{constructor(e,n){super(e,"not-in",n),this.keys=xm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Se.fromName(r.referenceValue))}class yE extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Am(n)&&Ui(n.arrayValue,this.value)}}class _E extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ui(this.value.arrayValue,n)}}class wE extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ui(this.value.arrayValue,n)}}class EE extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Am(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ui(this.value.arrayValue,r))}}/**
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
 */class eu{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class ko{constructor(e,n){this.comparator=e,this.root=n||de.EMPTY}insert(e,n){return new ko(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new ko(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ks(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ks(this.root,e,this.comparator,!1)}getReverseIterator(){return new ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ks(this.root,e,this.comparator,!0)}}class ks{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??de.RED,this.left=i??de.EMPTY,this.right=s??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new de(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return de.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new de(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fi{constructor(e){this.comparator=e,this.data=new ko(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pf(this.data.getIterator())}getIteratorFrom(e){return new pf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fi)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fi(this.comparator);return n.data=e,n}}class pf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Un([])}unionWith(e){let n=new Fi(Re.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return km(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(n)}setAll(e){let n=Re.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ci(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return To(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ve(ci(this.value))}}/**
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
 */class lt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,ce.min(),ce.min(),ce.min(),Ve.empty(),0)}static newFoundDocument(e,n,r,i){return new lt(e,1,n,ce.min(),r,i,0)}static newNoDocument(e,n){return new lt(e,2,n,ce.min(),ce.min(),Ve.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,ce.min(),ce.min(),Ve.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class SE{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function mf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new SE(t,e,n,r,i,s,o)}/**
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
 */class IE{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function TE(t){const e=Ji(t);if(e.S===null){e.S=[];const n=new Set;for(const s of e.explicitOrderBy)e.S.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Fi(Re.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.S.push(new eu(s,r))}),n.has(Re.keyField().canonicalString())||e.S.push(new eu(Re.keyField(),r))}return e.S}function PE(t){const e=Ji(t);return e.N||(e.N=kE(e,TE(t))),e.N}function kE(t,e){if(t.limitType==="F")return mf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new eu(i.field,s)});const n=t.endAt?new hf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hf(t.startAt.position,t.startAt.inclusive):null;return mf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}/**
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
 */function CE(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Io(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Io(i)?"-0":i}}(t,e)}/**
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
 */class na{constructor(){this._=void 0}}class RE extends na{}class Om extends na{constructor(e){super(),this.elements=e}}class Dm extends na{constructor(e){super(),this.elements=e}}class AE extends na{constructor(e,n){super(),this.serializer=e,this.q=n}}/**
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
 */class Lm{constructor(e,n){this.field=e,this.transform=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ra{}class Mm extends ra{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class dc extends ra{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class Vm extends ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NE extends ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const xE={asc:"ASCENDING",desc:"DESCENDING"},OE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DE={and:"AND",or:"OR"};class LE{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ME(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VE(t,e){return tu(t,e.toTimestamp())}function di(t){return be(!!t),ce.fromTimestamp(function(n){const r=Vn(n);return new ze(r.seconds,r.nanos)}(t))}function fc(t,e){return nu(t,e).canonicalString()}function nu(t,e){const n=function(i){return new re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Co(t,e){return fc(t.databaseId,e.path)}function ru(t,e){const n=function(i){const s=re.fromString(i);return be(Um(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new x(j,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(j,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Se(function(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function gf(t,e,n){return{name:Co(t,e),fields:n.value.mapValue.fields}}function jE(t,e){return"found"in e?function(r,i){be(!!i.found),i.found.name,i.found.updateTime;const s=ru(r,i.found.name),o=di(i.found.updateTime),a=i.found.createTime?di(i.found.createTime):ce.min(),l=new Ve({mapValue:{fields:i.found.fields}});return lt.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){be(!!i.missing),be(!!i.readTime);const s=ru(r,i.missing),o=di(i.readTime);return lt.newNoDocument(s,o)}(t,e):K()}function UE(t,e){let n;if(e instanceof Mm)n={update:gf(t,e.key,e.value)};else if(e instanceof Vm)n={delete:Co(t,e.key)};else if(e instanceof dc)n={update:gf(t,e.key,e.data),updateMask:BE(e.fieldMask)};else{if(!(e instanceof NE))return K();n={verify:Co(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof RE)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Om)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Dm)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof AE)return{fieldPath:o.field.canonicalString(),increment:a.q};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:VE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function FE(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(u,c){return fc(u.databaseId,c)}(t,i);const s=function(u){if(u.length!==0)return jm(ta.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Gn(h.field),direction:bE(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=function(u,c){return u.useProto3Json||lE(c)?c:{value:c}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{B:n,parent:i}}function bE(t){return xE[t]}function zE(t){return OE[t]}function $E(t){return DE[t]}function Gn(t){return{fieldPath:t.canonicalString()}}function jm(t){return t instanceof gt?function(n){if(n.op==="=="){if(ff(n.value))return{unaryFilter:{field:Gn(n.field),op:"IS_NAN"}};if(df(n.value))return{unaryFilter:{field:Gn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ff(n.value))return{unaryFilter:{field:Gn(n.field),op:"IS_NOT_NAN"}};if(df(n.value))return{unaryFilter:{field:Gn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gn(n.field),op:zE(n.op),value:n.value}}}(t):t instanceof ta?function(n){const r=n.getFilters().map(i=>jm(i));return r.length===1?r[0]:{compositeFilter:{op:$E(n.op),filters:r}}}(t):K()}function BE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Um(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function hc(t){return new LE(t,!0)}/**
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
 */class HE extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new x(kr,"The client has already been terminated.")}P(e,n,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,nu(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Zl&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(ui,s.toString())})}g(e,n,r,i,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,nu(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Zl&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(ui,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function pc(t,e){const n=Ji(t),r={writes:e.map(i=>UE(n.serializer,i))};await n.P("Commit",n.serializer.databaseId,re.emptyPath(),r)}async function WE(t,e){const n=Ji(t),r={documents:e.map(a=>Co(n.serializer,a))},i=await n.g("BatchGetDocuments",n.serializer.databaseId,re.emptyPath(),r,e.length),s=new Map;i.forEach(a=>{const l=jE(n.serializer,a);s.set(l.key.toString(),l)});const o=[];return e.forEach(a=>{const l=s.get(a.toString());be(!!l),o.push(l)}),o}async function GE(t,e){const n=Ji(t),{B:r,parent:i}=FE(n.serializer,PE(e));return(await n.g("RunQuery",n.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,l,u){const c=ru(a,l.name),d=di(l.updateTime),h=l.createTime?di(l.createTime):ce.min(),v=new Ve({mapValue:{fields:l.fields}}),y=lt.newFoundDocument(c,d,h,v);return u&&y.setHasCommittedMutations(),u?y.setHasCommittedMutations():y}(n.serializer,s.document,void 0))}/**
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
 */const fi=new Map;function Zi(t){if(t._terminated)throw new x(kr,"The client has already been terminated.");if(!fi.has(t)){So("ComponentProvider","Initializing Datastore");const e=function(s){return new cE(s,fetch.bind(null))}(function(s,o,a,l){return new sE(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Pm(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=hc(t._databaseId),r=function(s,o,a,l){return new HE(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);fi.set(t,r)}return fi.get(t)}class vf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(j,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(j,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new x(j,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(j,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(j,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(j,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ia{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(kr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(kr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xw;switch(r.type){case"firstParty":return new nE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(j,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fi.get(n);r&&(So("ComponentProvider","Removing Datastore"),fi.delete(n),r.terminate())}(this),Promise.resolve()}}function KE(t,e){const n=typeof t=="object"?t:ym(),r=typeof t=="string"?t:"(default)",i=ac(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=_0("firestore");s&&qE(i,...s)}return i}function qE(t,e,n,r={}){var i;const s=(t=Lr(t,ia))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Em("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ke.MOCK_USER;else{a=E0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new x(j,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ke(u)}t._authCredentials=new Zw(new Im(a,l))}}/**
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
 */class sa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sa(this.firestore,e,this._query)}}class De{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class Pt extends sa{constructor(e,n,r){super(e,n,function(s){return new IE(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new Se(e))}withConverter(e){return new Pt(this.firestore,e,this._path)}}function mc(t,e,...n){if(t=we(t),Tm("collection","path",e),t instanceof ia){const r=re.fromString(e,...n);return of(r),new Pt(t,null,r)}{if(!(t instanceof De||t instanceof Pt))throw new x(j,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return of(r),new Pt(t.firestore,null,r)}}function Mr(t,e,...n){if(t=we(t),arguments.length===1&&(e=fE.newId()),Tm("doc","path",e),t instanceof ia){const r=re.fromString(e,...n);return sf(r),new De(t,null,new Se(r))}{if(!(t instanceof De||t instanceof Pt))throw new x(j,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return sf(r),new De(t.firestore,t instanceof Pt?t.converter:null,new Se(r))}}/**
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
 */class Cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cr(xt.fromBase64String(e))}catch(n){throw new x(j,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cr(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(j,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class es{constructor(e){this._methodName=e}}/**
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
 */class gc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(j,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(j,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const QE=/^__.*__$/;class YE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dc(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mm(e,this.data,n,this.fieldTransforms)}}class Fm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dc(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class aa{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new aa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return Ro(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(bm(this.et)&&QE.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class JE{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hc(e)}ht(e,n,r,i=!1){return new aa({et:e,methodName:n,lt:r,path:Re.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zm(t){const e=t._freezeSettings(),n=hc(t._databaseId);return new JE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XE(t,e,n,r,i,s={}){const o=t.ht(s.merge||s.mergeFields?2:0,e,n,i);_c("Data must be an object, but it was:",o,r);const a=Bm(r,o);let l,u;if(s.merge)l=new Un(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=iu(e,d,n);if(!o.contains(h))throw new x(j,`Field '${h}' is specified in your field mask but missing from your input data.`);Wm(c,h)||c.push(h)}l=new Un(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new YE(new Ve(a),l,u)}class la extends es{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e._t(`${this._methodName}() can only appear at the top level of your update data`):e._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof la}}function $m(t,e,n){return new aa({et:3,lt:e.settings.lt,methodName:t._methodName,it:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class vc extends es{constructor(e,n){super(e),this.dt=n}_toFieldTransform(e){const n=$m(this,e,!0),r=this.dt.map(s=>Vr(s,n)),i=new Om(r);return new Lm(e.path,i)}isEqual(e){return e instanceof vc&&Ir(this.dt,e.dt)}}class yc extends es{constructor(e,n){super(e),this.dt=n}_toFieldTransform(e){const n=$m(this,e,!0),r=this.dt.map(s=>Vr(s,n)),i=new Dm(r);return new Lm(e.path,i)}isEqual(e){return e instanceof yc&&Ir(this.dt,e.dt)}}function ZE(t,e,n,r){const i=t.ht(1,e,n);_c("Data must be an object, but it was:",i,r);const s=[],o=Ve.empty();Xi(r,(l,u)=>{const c=wc(e,l,n);u=we(u);const d=i.ot(c);if(u instanceof la)s.push(c);else{const h=Vr(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new Un(s);return new Fm(o,a,i.fieldTransforms)}function eS(t,e,n,r,i,s){const o=t.ht(1,e,n),a=[iu(e,r,n)],l=[i];if(s.length%2!=0)throw new x(j,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(iu(e,s[h])),l.push(s[h+1]);const u=[],c=Ve.empty();for(let h=a.length-1;h>=0;--h)if(!Wm(u,a[h])){const v=a[h];let y=l[h];y=we(y);const _=o.ot(v);if(y instanceof la)u.push(v);else{const I=Vr(y,_);I!=null&&(u.push(v),c.set(v,I))}}const d=new Un(u);return new Fm(c,d,o.fieldTransforms)}function Vr(t,e){if(Hm(t=we(t)))return _c("Unsupported field value:",e,t),Bm(t,e);if(t instanceof es)return function(r,i){if(!bm(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Vr(a,i.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ze.fromDate(r);return{timestampValue:tu(i.serializer,s)}}if(r instanceof ze){const s=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tu(i.serializer,s)}}if(r instanceof gc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cr)return{bytesValue:ME(i.serializer,r._byteString)};if(r instanceof De){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i._t(`Unsupported field value: ${cc(r)}`)}(t,e)}function Bm(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(t,(r,i)=>{const s=Vr(i,e.nt(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Hm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof gc||t instanceof Cr||t instanceof De||t instanceof es)}function _c(t,e,n){if(!Hm(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=cc(n);throw r==="an object"?e._t(t+" a custom object"):e._t(t+" "+r)}}function iu(t,e,n){if((e=we(e))instanceof oa)return e._internalPath;if(typeof e=="string")return wc(t,e);throw Ro("Field path arguments must be of type string or ",t,!1,void 0,n)}const tS=new RegExp("[~\\*/\\[\\]]");function wc(t,e,n){if(e.search(tS)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oa(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ro(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(j,a+t+l)}function Wm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Gm{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Km(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Km extends Gm{data(){return super.data()}}class nS{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function rS(t,e){return typeof e=="string"?wc(t,e):e instanceof oa?e._internalPath:e._delegate._internalPath}/**
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
 */function iS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class qm extends class{convertValue(n,r="none"){switch(jn(n)){case 0:return null;case 1:return n.booleanValue;case 2:return ne(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(Vi(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw K()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return Xi(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(n){return new gc(ne(n.latitude),ne(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=Rm(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(ji(n));default:return null}}convertTimestamp(n){const r=Vn(n);return new ze(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=re.fromString(n);be(Um(i));const s=new Li(i.get(1),i.get(3)),o=new Se(i.popFirst(5));return s.isEqual(r)||lc(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,n)}}function sS(t){const e=Zi((t=Lr(t,De)).firestore),n=new qm(t.firestore);return WE(e,[t._key]).then(r=>{be(r.length===1);const i=r[0];return new Gm(t.firestore,n,t._key,i.isFoundDocument()?i:null,t.converter)})}function Qm(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new x(Sm,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Lr(t,sa))._query);const e=Zi(t.firestore),n=new qm(t.firestore);return GE(e,t._query).then(r=>{const i=r.map(s=>new Km(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new nS(t,i)})}function Ec(t,e,n,...r){const i=zm((t=Lr(t,De)).firestore);let s;return s=typeof(e=we(e))=="string"||e instanceof oa?eS(i,"updateDoc",t._key,e,n,r):ZE(i,"updateDoc",t._key,e),pc(Zi(t.firestore),[s.toMutation(t._key,Rn.exists(!0))])}function oS(t){return pc(Zi((t=Lr(t,De)).firestore),[new Vm(t._key,Rn.none())])}function aS(t,e){const n=Mr(t=Lr(t,Pt)),r=iS(t.converter,e),i=XE(zm(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return pc(Zi(t.firestore),[i.toMutation(n._key,Rn.exists(!1))]).then(()=>n)}function lS(...t){return new vc("arrayUnion",t)}function uS(...t){return new yc("arrayRemove",t)}(function(){(function(n){Dr=n})(`${Or}_lite`),Tr(new Ln("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new ia(new eE(e.getProvider("auth-internal")),new iE(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(j,'"projectId" not provided in firebase.initializeApp.');return new Li(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),on("firestore-lite","4.6.4",""),on("firestore-lite","4.6.4","esm2017")})();function Sc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ym(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cS=Ym,Jm=new Qi("auth","Firebase",Ym());/**
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
 */const Ao=new sc("@firebase/auth");function dS(t,...e){Ao.logLevel<=F.WARN&&Ao.warn(`Auth (${Or}): ${t}`,...e)}function bs(t,...e){Ao.logLevel<=F.ERROR&&Ao.error(`Auth (${Or}): ${t}`,...e)}/**
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
 */function it(t,...e){throw Ic(t,...e)}function pt(t,...e){return Ic(t,...e)}function Xm(t,e,n){const r=Object.assign(Object.assign({},cS()),{[e]:n});return new Qi("auth","Firebase",r).create(e,{appName:t.name})}function kt(t){return Xm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ic(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jm.create(t,...e)}function N(t,e,...n){if(!t)throw Ic(e,...n)}function Et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bs(e),new Error(e)}function Ot(t,e){t||Et(e)}/**
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
 */function su(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fS(){return yf()==="http:"||yf()==="https:"}function yf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function hS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fS()||I0()||"connection"in navigator)?navigator.onLine:!0}function pS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ot(n>e,"Short delay should be less than long delay!"),this.isMobile=S0()||T0()}get(){return hS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tc(t,e){Ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gS=new ts(3e4,6e4);function mn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gn(t,e,n,r,i={}){return eg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Zm.fetch()(tg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function eg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mS),e);try{const i=new yS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Cs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Cs(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Xm(t,c,u);it(t,c)}}catch(i){if(i instanceof Lt)throw i;it(t,"network-request-failed",{message:String(i)})}}async function ns(t,e,n,r,i={}){const s=await gn(t,e,n,r,i);return"mfaPendingCredential"in s&&it(t,"multi-factor-auth-required",{_serverResponse:s}),s}function tg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tc(t.config,i):`${t.config.apiScheme}://${i}`}function vS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),gS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pt(t,e,r);return i.customData._tokenResponse=n,i}function _f(t){return t!==void 0&&t.enterprise!==void 0}class _S{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function wS(t,e){return gn(t,"GET","/v2/recaptchaConfig",mn(t,e))}/**
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
 */async function ES(t,e){return gn(t,"POST","/v1/accounts:delete",e)}async function ng(t,e){return gn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SS(t,e=!1){const n=we(t),r=await n.getIdToken(e),i=Pc(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hi(Ya(i.auth_time)),issuedAtTime:hi(Ya(i.iat)),expirationTime:hi(Ya(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ya(t){return Number(t)*1e3}function Pc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bs("JWT malformed, contained fewer than 3 sections"),null;try{const i=dm(n);return i?JSON.parse(i):(bs("Failed to decode base64 JWT payload"),null)}catch(i){return bs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wf(t){const e=Pc(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Lt&&IS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class TS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ou{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hi(this.lastLoginAt),this.creationTime=hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function No(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bi(t,ng(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?rg(s.providerUserInfo):[],a=kS(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ou(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function PS(t){const e=we(t);await No(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rg(t){return t.map(e=>{var{providerId:n}=e,r=Sc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function CS(t,e){const n=await eg(t,{},async()=>{const r=Yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=tg(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RS(t,e){return gn(t,"POST","/v2/accounts:revokeToken",mn(t,e))}/**
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
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){N(e.length!==0,"internal-error");const n=wf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await CS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fr;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function Vt(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class St{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ou(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SS(this,e)}reload(){return PS(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await No(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(kt(this.auth));const e=await this.getIdToken();return await bi(this,ES(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:T,providerData:k,stsTokenManager:R}=n;N(g&&R,e,"internal-error");const A=fr.fromJSON(this.name,R);N(typeof g=="string",e,"internal-error"),Vt(d,e.name),Vt(h,e.name),N(typeof w=="boolean",e,"internal-error"),N(typeof T=="boolean",e,"internal-error"),Vt(v,e.name),Vt(y,e.name),Vt(_,e.name),Vt(I,e.name),Vt(m,e.name),Vt(f,e.name);const z=new St({uid:g,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:T,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:A,createdAt:m,lastLoginAt:f});return k&&Array.isArray(k)&&(z.providerData=k.map(O=>Object.assign({},O))),I&&(z._redirectEventId=I),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new fr;i.updateFromServerResponse(n);const s=new St({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await No(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];N(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?rg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new fr;a.updateFromIdToken(r);const l=new St({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ou(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const Ef=new Map;function It(t){Ot(t instanceof Function,"Expected a class definition");let e=Ef.get(t);return e?(Ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ef.set(t,e),e)}/**
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
 */class ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ig.type="NONE";const Sf=ig;/**
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
 */function zs(t,e,n){return`firebase:${t}:${e}:${n}`}class hr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zs(this.userKey,i.apiKey,s),this.fullPersistenceKey=zs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?St._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hr(It(Sf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||It(Sf);const o=zs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=St._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new hr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new hr(s,e,r))}}/**
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
 */function If(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ag(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ug(e))return"Blackberry";if(cg(e))return"Webos";if(kc(e))return"Safari";if((e.includes("chrome/")||og(e))&&!e.includes("edge/"))return"Chrome";if(lg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sg(t=_e()){return/firefox\//i.test(t)}function kc(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function og(t=_e()){return/crios\//i.test(t)}function ag(t=_e()){return/iemobile/i.test(t)}function lg(t=_e()){return/android/i.test(t)}function ug(t=_e()){return/blackberry/i.test(t)}function cg(t=_e()){return/webos/i.test(t)}function ua(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AS(t=_e()){var e;return ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NS(){return P0()&&document.documentMode===10}function dg(t=_e()){return ua(t)||lg(t)||cg(t)||ug(t)||/windows phone/i.test(t)||ag(t)}function xS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fg(t,e=[]){let n;switch(t){case"Browser":n=If(_e());break;case"Worker":n=`${If(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
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
 */class OS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function DS(t,e={}){return gn(t,"GET","/v2/passwordPolicy",mn(t,e))}/**
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
 */const LS=6;class MS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:LS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class VS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tf(this),this.idTokenSubscription=new Tf(this),this.beforeStateQueue=new OS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ng(this,{idToken:e}),r=await St._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await No(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(kt(this));const n=e?we(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DS(this),n=new MS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await RS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&It(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hn(t){return we(t)}class Tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=O0(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ca={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jS(t){ca=t}function hg(t){return ca.loadJS(t)}function US(){return ca.recaptchaEnterpriseScript}function FS(){return ca.gapiScript}function bS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const zS="recaptcha-enterprise",$S="NO_RECAPTCHA";class BS{constructor(e){this.type=zS,this.auth=Hn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{wS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new _S(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;_f(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o($S)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&_f(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=US();l.length!==0&&(l+=a),hg(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Pf(t,e,n,r=!1){const i=new BS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function au(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Pf(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Pf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function HS(t,e){const n=ac(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ir(s,e??{}))return i;it(i,"already-initialized")}return n.initialize({options:e})}function WS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(It);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GS(t,e,n){const r=Hn(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=pg(e),{host:o,port:a}=KS(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),qS()}function pg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KS(t){const e=pg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kf(o)}}}function kf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Cc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,n){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}async function QS(t,e){return gn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function YS(t,e){return ns(t,"POST","/v1/accounts:signInWithPassword",mn(t,e))}/**
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
 */async function JS(t,e){return ns(t,"POST","/v1/accounts:signInWithEmailLink",mn(t,e))}async function XS(t,e){return ns(t,"POST","/v1/accounts:signInWithEmailLink",mn(t,e))}/**
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
 */class zi extends Cc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new zi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return au(e,n,"signInWithPassword",YS);case"emailLink":return JS(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return au(e,r,"signUpPassword",QS);case"emailLink":return XS(e,{idToken:n,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function pr(t,e){return ns(t,"POST","/v1/accounts:signInWithIdp",mn(t,e))}/**
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
 */const ZS="http://localhost";class Fn extends Cc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Sc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pr(e,n)}buildRequest(){const e={requestUri:ZS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yi(n)}return e}}/**
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
 */function e1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t1(t){const e=Xr(Zr(t)).link,n=e?Xr(Zr(e)).deep_link_id:null,r=Xr(Zr(t)).deep_link_id;return(r?Xr(Zr(r)).link:null)||r||n||e||t}class Rc{constructor(e){var n,r,i,s,o,a;const l=Xr(Zr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=e1((i=l.mode)!==null&&i!==void 0?i:null);N(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=t1(e);try{return new Rc(n)}catch{return null}}}/**
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
 */class jr{constructor(){this.providerId=jr.PROVIDER_ID}static credential(e,n){return zi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rc.parseLink(n);return N(r,"argument-error"),zi._fromEmailAndCode(e,r.code,r.tenantId)}}jr.PROVIDER_ID="password";jr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class mg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rs extends mg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends rs{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class $t extends rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
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
 */class Bt extends rs{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class Ht extends rs{constructor(){super("twitter.com")}static credential(e,n){return Fn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */async function n1(t,e){return ns(t,"POST","/v1/accounts:signUp",mn(t,e))}/**
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
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await St._fromIdTokenResponse(e,r,i),o=Cf(r);return new bn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Cf(r);return new bn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Cf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xo extends Lt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xo(e,n,r,i)}}function gg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(t,s,e,r):s})}async function r1(t,e,n=!1){const r=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",r)}/**
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
 */async function i1(t,e,n=!1){const{auth:r}=t;if(ct(r.app))return Promise.reject(kt(r));const i="reauthenticate";try{const s=await bi(t,gg(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=Pc(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),bn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&it(r,"user-mismatch"),s}}/**
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
 */async function vg(t,e,n=!1){if(ct(t.app))return Promise.reject(kt(t));const r="signIn",i=await gg(t,r,e),s=await bn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function s1(t,e){return vg(Hn(t),e)}/**
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
 */async function yg(t){const e=Hn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function o1(t,e,n){if(ct(t.app))return Promise.reject(kt(t));const r=Hn(t),o=await au(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",n1).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&yg(t),l}),a=await bn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function a1(t,e,n){return ct(t.app)?Promise.reject(kt(t)):s1(we(t),jr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yg(t),r})}function l1(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function u1(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function c1(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}const Oo="__sak";/**
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
 */class _g{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oo,"1"),this.storage.removeItem(Oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function d1(){const t=_e();return kc(t)||ua(t)}const f1=1e3,h1=10;class wg extends _g{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=d1()&&xS(),this.fallbackToPolling=dg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,h1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},f1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wg.type="LOCAL";const p1=wg;/**
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
 */class Eg extends _g{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Eg.type="SESSION";const Sg=Eg;/**
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
 */function m1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await m1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}da.receivers=[];/**
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
 */function Ac(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class g1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ac("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mt(){return window}function v1(t){mt().location.href=t}/**
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
 */function Ig(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function y1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function w1(){return Ig()?self:null}/**
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
 */const Tg="firebaseLocalStorageDb",E1=1,Do="firebaseLocalStorage",Pg="fbase_key";class is{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fa(t,e){return t.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function S1(){const t=indexedDB.deleteDatabase(Tg);return new is(t).toPromise()}function lu(){const t=indexedDB.open(Tg,E1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Do,{keyPath:Pg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Do)?e(r):(r.close(),await S1(),e(await lu()))})})}async function Rf(t,e,n){const r=fa(t,!0).put({[Pg]:e,value:n});return new is(r).toPromise()}async function I1(t,e){const n=fa(t,!1).get(e),r=await new is(n).toPromise();return r===void 0?null:r.value}function Af(t,e){const n=fa(t,!0).delete(e);return new is(n).toPromise()}const T1=800,P1=3;class kg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>P1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ig()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=da._getInstance(w1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await y1(),!this.activeServiceWorker)return;this.sender=new g1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lu();return await Rf(e,Oo,"1"),await Af(e,Oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>I1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fa(i,!1).getAll();return new is(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),T1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kg.type="LOCAL";const k1=kg;new ts(3e4,6e4);/**
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
 */function C1(t,e){return e?It(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nc extends Cc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function R1(t){return vg(t.auth,new Nc(t),t.bypassAuthState)}function A1(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),i1(n,new Nc(t),t.bypassAuthState)}async function N1(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),r1(n,new Nc(t),t.bypassAuthState)}/**
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
 */class Cg{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R1;case"linkViaPopup":case"linkViaRedirect":return N1;case"reauthViaPopup":case"reauthViaRedirect":return A1;default:it(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const x1=new ts(2e3,1e4);class sr extends Cg{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=Ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,x1.get())};e()}}sr.currentPopupAction=null;/**
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
 */const O1="pendingRedirect",$s=new Map;class D1 extends Cg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$s.get(this.auth._key());if(!e){try{const r=await L1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$s.set(this.auth._key(),e)}return this.bypassAuthState||$s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L1(t,e){const n=j1(e),r=V1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function M1(t,e){$s.set(t._key(),e)}function V1(t){return It(t._redirectPersistence)}function j1(t){return zs(O1,t.config.apiKey,t.name)}async function U1(t,e,n=!1){if(ct(t.app))return Promise.reject(kt(t));const r=Hn(t),i=C1(r,e),o=await new D1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const F1=10*60*1e3;class b1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nf(e))}saveEventToCache(e){this.cachedEventUids.add(Nf(e)),this.lastProcessedEventTime=Date.now()}}function Nf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rg(t);default:return!1}}/**
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
 */async function $1(t,e={}){return gn(t,"GET","/v1/projects",e)}/**
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
 */const B1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H1=/^https?/;async function W1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $1(t);for(const n of e)try{if(G1(n))return}catch{}it(t,"unauthorized-domain")}function G1(t){const e=su(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!H1.test(n))return!1;if(B1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const K1=new ts(3e4,6e4);function xf(){const t=mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function q1(t){return new Promise((e,n)=>{var r,i,s;function o(){xf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xf(),n(pt(t,"network-request-failed"))},timeout:K1.get()})}if(!((i=(r=mt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mt().gapi)===null||s===void 0)&&s.load)o();else{const a=bS("iframefcb");return mt()[a]=()=>{gapi.load?o():n(pt(t,"network-request-failed"))},hg(`${FS()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bs=null,e})}let Bs=null;function Q1(t){return Bs=Bs||q1(t),Bs}/**
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
 */const Y1=new ts(5e3,15e3),J1="__/auth/iframe",X1="emulator/auth/iframe",Z1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tI(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tc(e,X1):`https://${t.config.authDomain}/${J1}`,r={apiKey:e.apiKey,appName:t.name,v:Or},i=eI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yi(r).slice(1)}`}async function nI(t){const e=await Q1(t),n=mt().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:tI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pt(t,"network-request-failed"),a=mt().setTimeout(()=>{s(o)},Y1.get());function l(){mt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const rI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iI=500,sI=600,oI="_blank",aI="http://localhost";class Of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lI(t,e,n,r=iI,i=sI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_e().toLowerCase();n&&(a=og(u)?oI:n),sg(u)&&(e=e||aI,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[v,y])=>`${h}${v}=${y},`,"");if(AS(u)&&a!=="_self")return uI(e||"",a),new Of(null);const d=window.open(e||"",a,c);N(d,t,"popup-blocked");try{d.focus()}catch{}return new Of(d)}function uI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cI="__/auth/handler",dI="emulator/auth/handler",fI=encodeURIComponent("fac");async function Df(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Or,eventId:i};if(e instanceof mg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",x0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(e instanceof rs){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${fI}=${encodeURIComponent(l)}`:"";return`${hI(t)}?${Yi(a).slice(1)}${u}`}function hI({config:t}){return t.emulator?Tc(t,dI):`https://${t.authDomain}/${cI}`}/**
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
 */const Ja="webStorageSupport";class pI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sg,this._completeRedirectFn=U1,this._overrideRedirectResult=M1}async _openPopup(e,n,r,i){var s;Ot((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Df(e,n,r,su(),i);return lI(e,o,Ac())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Df(e,n,r,su(),i);return v1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ot(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nI(e),r=new b1(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ja,{type:Ja},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ja];o!==void 0&&n(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=W1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dg()||kc()||ua()}}const mI=pI;var Lf="@firebase/auth",Mf="1.7.5";/**
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
 */class gI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yI(t){Tr(new Ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fg(t)},u=new VS(r,i,s,l);return WS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tr(new Ln("auth-internal",e=>{const n=Hn(e.getProvider("auth").getImmediate());return(r=>new gI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Lf,Mf,vI(t)),on(Lf,Mf,"esm2017")}/**
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
 */const _I=5*60,wI=pm("authIdTokenMaxAge")||_I;let Vf=null;const EI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wI)return;const i=n==null?void 0:n.token;Vf!==i&&(Vf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SI(t=ym()){const e=ac(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HS(t,{popupRedirectResolver:mI,persistence:[k1,p1,Sg]}),r=pm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=EI(s.toString());u1(n,o,()=>o(n.currentUser)),l1(n,a=>o(a))}}const i=fm("auth");return i&&GS(n,`http://${i}`),n}function II(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",II().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yI("Browser");const TI={apiKey:"AIzaSyC9OluXDIcn8WLVurVeMIJxazZYvQQ79Bs",authDomain:"game-site-2a632.firebaseapp.com",databaseURL:"https://game-site-2a632-default-rtdb.europe-west1.firebasedatabase.app",projectId:"game-site-2a632",storageBucket:"game-site-2a632.appspot.com",messagingSenderId:"333537408032",appId:"1:333537408032:web:fdf39a8e93aa84df9df845"},Ag=vm(TI),vn=KE(Ag),ha=SI(Ag);function PI(t,e){return a1(ha,t.value,e.value).then(()=>{console.log("succcessfully logged in")})}function kI(t,e){return o1(ha,t.value,e.value).then(()=>{console.log("Succcessfully regirstrated!")})}function CI(){ha.signOut()}const RI="/game-app/controller.png",AI=()=>{const t=pn(),e=E.useContext(Bn),n=r=>{r.preventDefault(),CI(),t("/")};return p.jsx("header",{children:p.jsxs("nav",{className:"top-nav",children:[p.jsx("section",{children:p.jsx("h2",{className:"top-nav-header",children:p.jsx(fe,{to:"/",children:"Game Site"})})}),p.jsxs("section",{className:"nav-icon-section",children:[p.jsx(fe,{to:"/categories/All",className:"nav-icon",children:p.jsx("img",{src:RI,alt:"Controller"})}),p.jsx(fe,{to:"/profile",children:p.jsx("h3",{children:e==null?void 0:e.email})})]}),p.jsx("section",{className:"top-nav-auth-section",children:e?p.jsxs("ul",{className:"top-nav-list",children:[p.jsx("li",{className:"top-nav-list-item",children:p.jsx(fe,{to:"/create-game",children:"Create"})}),p.jsx("li",{className:"top-nav-list-item",onClick:n,children:p.jsx(fe,{to:"/logout",children:"Logout"})})]}):p.jsxs("ul",{className:"top-nav-list",children:[p.jsx("li",{className:"top-nav-list-item",children:p.jsx(fe,{to:"/login",children:"Login"})}),p.jsx("li",{className:"top-nav-list-item",children:p.jsx(fe,{to:"/register",children:"Register"})})]})})]})})};async function NI(t){const n=await(await Qm(mc(vn,"games"))).docs.map(r=>({id:r.id,...r.data()}));return t!="All"?n.filter(i=>i.category==t):n}async function Hs(t){const e=await sS(Mr(vn,"games",`${t}`));return{id:e.id,...e.data()}}async function xI(t){return await(await Qm(mc(vn,"games"))).docs.map(r=>({id:r.id,...r.data()})).filter(r=>r.creator==t)}async function OI(t){try{const e=await aS(mc(vn,"games"),t)}catch(e){console.error("Error adding document: ",e)}}async function DI(t,e){try{const n=Mr(vn,"games",t);await Ec(n,e)}catch(n){console.error("Error adding document: ",n)}}async function LI(t,e){const n=await Mr(vn,"games",e);return await Ec(n,{likes:lS(t)})}async function MI(t,e){const n=await Mr(vn,"games",e);return await Ec(n,{likes:uS(t)})}async function VI(t){return await oS(Mr(vn,"games",t))}var Ng={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jf=dt.createContext&&dt.createContext(Ng),jI=["attr","size","title"];function UI(t,e){if(t==null)return{};var n=FI(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function FI(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Lo(){return Lo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lo.apply(this,arguments)}function Uf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Mo(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Uf(Object(n),!0).forEach(function(r){bI(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Uf(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function bI(t,e,n){return e=zI(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zI(t){var e=$I(t,"string");return typeof e=="symbol"?e:e+""}function $I(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xg(t){return t&&t.map((e,n)=>dt.createElement(e.tag,Mo({key:n},e.attr),xg(e.child)))}function BI(t){return e=>dt.createElement(HI,Lo({attr:Mo({},t.attr)},e),xg(t.child))}function HI(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=UI(t,jI),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),dt.createElement("svg",Lo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Mo(Mo({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&dt.createElement("title",null,s),t.children)};return jf!==void 0?dt.createElement(jf.Consumer,null,n=>e(n)):e(Ng)}function WI(t){return BI({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}const Og=()=>{const[t,e]=E.useState(!1),n=()=>e(!t),r=["All","Adventure","Fighting","Racing","RPG","Shooter","Sports","Strategy","Others"];return E.useEffect(()=>{let i=document.querySelector(".aside-list");window.innerWidth<740&&i.classList.add("hide"),window.addEventListener("resize",()=>{window.innerWidth<740?i.classList.add("hide"):window.innerWidth>740&&i.classList.remove("hide")})},[]),p.jsxs("aside",{id:"aside",children:[p.jsxs("section",{className:"aside-header",children:[p.jsx("h2",{children:"Categories"}),p.jsx(WI,{className:"aside-icon",onClick:n})]}),p.jsx("ul",{className:t?"aside-list hide":"aside-list",children:r.map(i=>p.jsx("li",{children:p.jsx(l0,{className:({isActive:s})=>s?"selected-category":"nav-category",to:`/categories/${i}`,children:i})},i))})]})},Dg=t=>p.jsx("article",{children:p.jsxs(fe,{to:`/${t.id}/details`,className:"game-card",children:[p.jsx("div",{className:"game-card-image",children:p.jsx("img",{src:t.image,alt:"Game picture"})}),p.jsx("h4",{className:"card-header",children:t.title})]})}),GI=()=>{const[t,e]=E.useState([]),[n,r]=E.useState([]),{category:i}=rc();let s=document.getElementById("search");E.useEffect(()=>{NI(i).then(a=>{r(a),e(a)}),s&&(s.value="")},[i]);const o=a=>{let l=a.target.value;if(l==""){e(n),console.log("ops");return}e(n.filter(u=>u.title.toLowerCase().includes(l.toLowerCase())))};return p.jsxs("main",{className:"categories-main",children:[p.jsx(Og,{}),p.jsxs("section",{className:"home-container",children:[p.jsx("input",{type:"text",id:"search",className:"form-control",placeholder:"Search",name:"search",onChange:o}),p.jsx("article",{className:"home-container-games",children:t.map(a=>p.jsx(Dg,{title:a.title,image:a.imageUrl,id:a.id},a.id))})]})]})},Ue=({children:t})=>t?p.jsx("div",{className:"error-div",children:t}):null,KI=()=>{const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),o=pn(),a=c=>{const d=c.target.value;e(""),s(""),d.includes("@")||e("Invalid email - @ missing!"),d.length<6&&e("Invalid email!"),d.length<1&&e("Please insert email!")},l=c=>{const d=c.target.value;r(""),s(""),d.length<6&&r("Password must be at least 6 characters long!"),d.length<1&&r("Please insert password!")},u=c=>{c.preventDefault(),s("");const{email:d,password:h}=c.target;t<1&&n<1&&d.value!=""&&h.value!=""&&PI(d,h).then(()=>{o("/categories/All"),console.log("Successfully!")}).catch(v=>{v.message=="Firebase: Error (auth/wrong-password)."?s("Wrong password! Please try again!"):v.message=="Firebase: Error (auth/user-not-found)."&&s("Username not found!")})};return p.jsx("main",{children:p.jsxs("form",{className:"form",onSubmit:u,children:[p.jsx("h1",{children:"Login"}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"email",children:"Email"}),p.jsx("input",{type:"email",className:"form-control",placeholder:"Email",name:"email",autoComplete:"on",onBlur:a}),p.jsx(Ue,{children:t})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"password",children:"Password"}),p.jsx("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",autoComplete:"on",onBlur:l}),p.jsx(Ue,{children:n})]}),p.jsx("button",{className:"btn",children:"Login"}),p.jsx(Ue,{children:i})]})})},qI=()=>{const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),[o,a]=E.useState(""),l=pn(),u=v=>{const y=v.target.value;e(""),a(""),y.includes("@")||e("Invalid email - @ missing!"),y.length<6&&e("Invalid email!"),y.length<1&&e("Please insert email!")},c=v=>{const y=v.target.value;r(""),a(""),y.length<6&&r("Password must be at least 6 characters long!"),y.length<1&&r("Please insert password!")},d=v=>{const y=v.target.value;s(""),a(""),y.length<6&&s("Password must be at least 6 characters long!"),y.length<1&&s("Please insert password!")},h=v=>{v.preventDefault();const{email:y,password:_,rePassword:I}=v.target;if(_.value!==I.value){a("Password do not match!");return}t<1&&n<1&&i<1&&(a(""),t<1&&n<1&&i<1&&y.value!=""&&_.value!=""&&I.value!=""&&kI(y,_).then(()=>{l("/categories/All")}).catch(m=>{console.log("Something is wrong"),console.log(m),a(m)}))};return p.jsx("main",{children:p.jsxs("form",{className:"form",onSubmit:h,children:[p.jsx("h1",{children:"Register"}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"email",children:"Email"}),p.jsx("input",{type:"email",className:"form-control",placeholder:"Email",name:"email",autoComplete:"on",onBlur:u}),p.jsx(Ue,{children:t})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"password",children:"Password"}),p.jsx("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",autoComplete:"on",onBlur:c}),p.jsx(Ue,{children:n})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"repeatPassword",children:"Repeat Password"}),p.jsx("input",{type:"password",className:"form-control",placeholder:"Repeat Password",name:"rePassword",autoComplete:"on",onBlur:d}),p.jsx(Ue,{children:i})]}),p.jsx("button",{className:"btn",children:"Register"}),p.jsx(Ue,{children:o})]})})},Lg=t=>n=>{const r=E.useContext(Bn),i=pn();return E.useEffect(()=>{if(!r){i("/");return}},[]),p.jsx(t,{...n})},QI=()=>{const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),o=pn(),a=E.useContext(Bn),l=h=>{const v=h.target.value;e(""),v.length<3&&e("Title must be at least 6 characters!"),v.length<1&&e("Please insert title!"),v.length>70&&e("Title too long!")},u=h=>{const v=h.target.value;r(""),v.length<6&&r("Description must be at least 6 characters!"),v.length<1&&r("Please insert Description!")},c=h=>{const v=h.target.value;s(""),v.length<10&&s("Image URL must be at least 6 characters!"),v.length<1&&s("Please insert image URL!")},d=h=>{h.preventDefault();const{category:v,title:y,description:_,imageUrl:I}=h.target,m={title:y.value,description:_.value,imageUrl:I.value,likes:[],category:v.value=="Select Category"?"Others":v.value,creator:a.uid};t.length<1&&n.length<1&&i.length<1&&y.value!=""&&_.value!=""&&I.value!=""&&(OI(m).then(()=>{o("/categories/All")}).catch(()=>{console.log("problem with logging in")}),y.value="",_.value="",I.value="",v.value="Select Category")};return p.jsx("main",{children:p.jsxs("form",{className:"form",onSubmit:d,children:[p.jsx("h1",{children:"Add Game"}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"title",children:"Game Title"}),p.jsx("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",onBlur:l}),p.jsx(Ue,{children:t})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"description",children:"Game Description"}),p.jsx("textarea",{className:"form-control form-description",placeholder:"Description",name:"description",onBlur:u}),p.jsx(Ue,{children:n})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"imageUrl",children:"Image url"}),p.jsx("textarea",{type:"text",className:"form-control",placeholder:"Image Url",name:"imageUrl",onBlur:c}),p.jsx(Ue,{children:i})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"category",children:"Choose category"}),p.jsxs("select",{name:"category",className:"form-control",children:[p.jsx("option",{value:"Select Category",children:"Select category"}),p.jsx("option",{value:"Adventure",children:"Adventure"}),p.jsx("option",{value:"Fighting",children:"Fighting"}),p.jsx("option",{value:"Racing",children:"Racing"}),p.jsx("option",{value:"RPG",children:"RPG"}),p.jsx("option",{value:"Shooter",children:"Shooter"}),p.jsx("option",{value:"Sports",children:"Sports"}),p.jsx("option",{value:"Strategy",children:"Strategy"}),p.jsx("option",{value:"Others",children:"Others"})]})]}),p.jsx("button",{type:"submit",className:"btn",children:"Create"})]})})},YI=Lg(QI),JI=()=>{var l,u;const t=E.useContext(Bn),{id:e}=rc(),[n,r]=E.useState({}),i=pn();E.useEffect(()=>{Hs(e).then(c=>{r(c)})},[]);function s(){LI(t.uid,e).then(()=>{Hs(e).then(c=>{r(c)})})}function o(){MI(t.uid,e).then(()=>{Hs(e).then(c=>{r(c)})})}function a(){VI(e).then(c=>{i("/categories/All")})}return p.jsxs("main",{className:"game-details-main",children:[p.jsx(Og,{}),p.jsxs("section",{className:"game-details-section",children:[p.jsxs("article",{className:"game-details-article",children:[p.jsx("div",{className:"game-details-image",children:p.jsx("img",{src:n.imageUrl})}),p.jsxs("div",{className:"game-details-article-content",children:[p.jsx("h2",{children:n.title}),p.jsxs("article",{className:"game-details-content-details",children:[p.jsxs("div",{className:"game-details-criteries",children:[p.jsxs("p",{children:["Category: ",n.category]}),p.jsxs("p",{children:["Likes: ",(l=n.likes)==null?void 0:l.length]})]}),p.jsx("div",{className:"game-details-btns",children:(t==null?void 0:t.uid)==n.creator?p.jsxs("div",{className:"btns",children:[p.jsx(fe,{to:`/${n.id}/edit`,className:"btn",children:"Edit"}),p.jsx(fe,{className:"btn",onClick:a,children:"Delete"})]}):p.jsx("div",{className:"btns",children:(u=n.likes)!=null&&u.includes(t==null?void 0:t.uid)?p.jsx(fe,{className:"btn",onClick:o,children:"Unlike"}):t?p.jsx(fe,{className:"btn",onClick:s,children:"Like"}):""})})]})]})]}),p.jsx("article",{className:"game-details-description",children:p.jsx("p",{children:n.description})})]})]})},XI="/game-app/profile.png",ZI=()=>{const t=E.useContext(Bn),[e,n]=E.useState([]);return E.useEffect(()=>{xI(t==null?void 0:t.uid).then(r=>n(r))},[]),p.jsx("main",{children:p.jsxs("section",{className:"profile-section",children:[p.jsxs("article",{className:"profile-article",children:[p.jsx("div",{className:"profile-pic",children:p.jsx("img",{src:XI})}),p.jsxs("div",{children:[p.jsxs("p",{children:["Email: ",t==null?void 0:t.email]}),p.jsxs("p",{children:["Total games: ",e==null?void 0:e.length]})]})]}),p.jsx("article",{className:"profile-games",children:e.map(r=>p.jsx(Dg,{title:r.title,image:r.imageUrl,id:r.id},r.id))})]})})},eT=()=>{const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),o=pn(),{id:a}=rc(),[l,u]=E.useState({});E.useEffect(()=>{Hs(a).then(y=>{u(y)})},[]);const c=y=>{const _=y.target.value;e(""),_.length<3&&e("Title must be at least 6 characters!"),_.length<1&&e("Please insert title!"),_.length>70&&e("Title too long!")},d=y=>{const _=y.target.value;r(""),_.length<6&&r("Description must be at least 6 characters!"),_.length<1&&r("Please insert Description!")},h=y=>{const _=y.target.value;s(""),_.length<10&&s("Image URL must be at least 6 characters!"),_.length<1&&s("Please insert image URL!")},v=y=>{y.preventDefault();const{category:_,title:I,description:m,imageUrl:f}=y.target,g={title:I.value,description:m.value,imageUrl:f.value,category:_.value=="Select Category"?"Others":_.value};t.length<1&&n.length<1&&i.length<1&&I.value!=""&&m.value!=""&&f.value!=""&&DI(a,g).then(()=>{o("/categories/All")}).catch(()=>{console.log("problem with logging in")})};return p.jsx("main",{children:p.jsxs("form",{className:"form",onSubmit:v,children:[p.jsx("h1",{children:"Edit Game"}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"title",children:"Game Title"}),p.jsx("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",defaultValue:l.title,onBlur:c}),p.jsx(Ue,{children:t})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"description",children:"Game Description"}),p.jsx("textarea",{className:"form-control form-description",placeholder:"Description",name:"description",defaultValue:l.description,onBlur:d}),p.jsx(Ue,{children:n})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"imageUrl",children:"Image url"}),p.jsx("textarea",{type:"text",className:"form-control",placeholder:"Image Url",name:"imageUrl",defaultValue:l.imageUrl,onBlur:h}),p.jsx(Ue,{children:i})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{htmlFor:"category",children:"Choose category"}),p.jsxs("select",{name:"category",className:"form-control",defaultValue:l.category,children:[p.jsx("option",{value:l.category,children:l.category}),p.jsx("option",{value:"Adventure",children:"Adventure"}),p.jsx("option",{value:"Fighting",children:"Fighting"}),p.jsx("option",{value:"Racing",children:"Racing"}),p.jsx("option",{value:"RPG",children:"RPG"}),p.jsx("option",{value:"Shooter",children:"Shooter"}),p.jsx("option",{value:"Sports",children:"Sports"}),p.jsx("option",{value:"Strategy",children:"Strategy"}),p.jsx("option",{value:"Others",children:"Others"})]})]}),p.jsx("button",{type:"submit",className:"btn",children:"Edit"})]})})},tT=Lg(eT),nT="/game-app/spiderman.png",rT="/game-app/ronaldo.png",iT="/game-app/godofwar.png",sT=()=>{const t=E.useContext(Bn);return p.jsxs("main",{className:"home-page",children:[p.jsxs("article",{className:"home-article",children:[p.jsx("div",{className:"godofwar",children:p.jsx("img",{src:iT})}),t?p.jsx(fe,{className:"home-btns",to:"/categories/All",children:"Categories"}):p.jsx(fe,{className:"home-btns",to:"/login",children:"Login"})]}),p.jsxs("article",{className:"home-article",children:[p.jsx("h1",{children:"Welcome to our Game site!"}),p.jsx("h2",{children:t?"Enjoy":"Please Login "}),p.jsx("div",{className:"spiderman",children:p.jsx("img",{src:nT})})]}),p.jsxs("article",{className:"home-article",children:[p.jsx("div",{className:"ronaldo",children:p.jsx("img",{src:rT})}),t?p.jsx(fe,{className:"home-btns",to:"/create-game",children:"Create"}):p.jsx(fe,{className:"home-btns",to:"/register",children:"Register"})]})]})},oT=()=>p.jsx("main",{children:p.jsxs("div",{className:"error-page",children:[p.jsx("h1",{children:"Your url is not valid!"}),p.jsx("h2",{children:"Please insert valid url!"})]})});function aT(){const[t,e]=E.useState(null);return E.useEffect(()=>{c1(ha,e)},[]),p.jsxs(Bn.Provider,{value:t,children:[p.jsx(AI,{}),p.jsxs(J_,{children:[p.jsx(ot,{path:"/",element:p.jsx(sT,{})}),p.jsx(ot,{path:"/categories/:category",element:p.jsx(GI,{})}),p.jsx(ot,{path:"/login",element:p.jsx(KI,{})}),p.jsx(ot,{path:"/register",element:p.jsx(qI,{})}),p.jsx(ot,{path:"/create-game",element:p.jsx(YI,{})}),p.jsx(ot,{path:"/:id/edit",element:p.jsx(tT,{})}),p.jsx(ot,{path:"/:id/details",element:p.jsx(JI,{})}),p.jsx(ot,{path:"/profile",element:p.jsx(ZI,{})}),p.jsx(ot,{path:"*",element:p.jsx(oT,{})})]})]})}Xa.createRoot(document.getElementById("root")).render(p.jsx(dt.StrictMode,{children:p.jsx(s0,{basename:"/game-app/",children:p.jsx(aT,{})})}));
