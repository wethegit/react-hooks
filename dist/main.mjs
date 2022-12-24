import*as e from"react";var r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)},t={};r.d(t,{XZ:()=>v,r5:()=>l,_:()=>y,C_:()=>b});const n=(o={createContext:()=>e.createContext,useCallback:()=>e.useCallback,useContext:()=>e.useContext,useEffect:()=>e.useEffect,useReducer:()=>e.useReducer,useRef:()=>e.useRef,useState:()=>e.useState},u={},r.d(u,o),u);var o,u;function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return u}}(e,r)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var l=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(0,n.useState)("idle"),o=a(t,2),u=o[0],c=o[1],l=(0,n.useState)(null),i=a(l,2),f=i[0],s=i[1],d=(0,n.useState)(null),y=a(d,2),m=y[0],p=y[1],h=(0,n.useCallback)((function(){return c("pending"),e().then((function(e){s(e),c("success")})).catch((function(e){p(e),c("error")}))}),[e]);return(0,n.useEffect)((function(){r||h()}),[r,h]),{run:h,data:f,status:u,error:m}},i=function(e){return"boolean"==typeof e?e:"true"===e};function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return u}}(e,r)||function(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var d=function(e,r){return"string"!=typeof r||"true"!==r&&"false"!==r?r:i(r)},y=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=(0,n.useReducer)(d,r),o=f(t,2),u=o[0],a=o[1];return(0,n.useEffect)((function(){if("undefined"!=typeof window){var t=window.localStorage.getItem(e);a(t||r)}}),[r,e]),(0,n.useEffect)((function(){window.localStorage.setItem(e,u)}),[e,u]),[u,a]};function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return u}}(e,r)||function(e,r){if(e){if("string"==typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var h=(0,n.createContext)(),v=function(e){var r=e.children,t=m(y("prefersReducedMotion",!1),2),o=t[0],u=t[1],a=m(y("prefersReducedData",!1),2),c=a[0],l=a[1],f=m(y("prefersDarkColorScheme",!1),2),s=f[0],d=f[1],p=(0,n.useRef)(null),v=(0,n.useRef)(null),b=(0,n.useRef)(null);return(0,n.useEffect)((function(){p.current=window.matchMedia("(prefers-reduced-motion: reduce)").matches,v.current=window.matchMedia("(prefers-reduced-data: reduce)").matches,b.current=window.matchMedia("(prefers-color-scheme: dark)").matches,p.current&&u(!0),v.current&&l(!0),b.current&&d(!0)}),[d,l,u]),(0,n.useEffect)((function(){document.body.classList[i(o)?"add":"remove"]("is-reduced-motion")}),[o]),React.createElement(h.Provider,{value:{prefersDarkColorScheme:s,setPrefersDarkColorScheme:d,prefersReducedData:c,setPrefersReducedData:l,prefersReducedMotion:o,setPrefersReducedMotion:u}},r)},b=function(){var e=(0,n.useContext)(h),r=e.prefersDarkColorScheme,t=e.setPrefersDarkColorScheme,o=e.prefersReducedData,u=e.setPrefersReducedData,a=e.prefersReducedMotion,c=e.setPrefersReducedMotion;return{prefersDarkColorScheme:r,togglePrefersDarkColorScheme:function(){t(!i(r))},prefersReducedData:o,togglePrefersReducedData:function(){u(!i(o))},prefersReducedMotion:a,togglePrefersReducedMotion:function(){c(!i(a))}}},g=t.XZ,S=t.r5,w=t._,R=t.C_;export{g as UserPreferencesProvider,S as useAsync,w as useLocalStorage,R as useUserPrefs};