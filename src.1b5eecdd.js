parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=document.querySelector("body"),t=document.querySelector(".btn-success"),o=document.querySelector(".btn-danger"),r={bodyEl:e,startBtnEl:t,stopBtnEl:o};exports.default=r;
},{}],"aepf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./refs"));function e(t){return t&&t.__esModule?t:{default:t}}var r=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],l=0,n=r.length-1,a=1e3,o=null;function u(){t.default.startBtnEl.disabled=!0,o=setInterval(function(){t.default.bodyEl.style.backgroundColor=r[f(l,n)]},a)}function d(){t.default.startBtnEl.disabled=!1,clearInterval(o)}var f=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},s={onStartBtnClick:u,onStopBtnClick:d};exports.default=s;
},{"./refs":"VyiV"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var t=s(require("./js/refs")),e=s(require("./js/switchColor"));function s(t){return t&&t.__esModule?t:{default:t}}t.default.startBtnEl.addEventListener("click",e.default.onStartBtnClick),t.default.stopBtnEl.addEventListener("click",e.default.onStopBtnClick);
},{"./sass/main.scss":"clu1","./js/refs":"VyiV","./js/switchColor":"aepf"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.1b5eecdd.js.map