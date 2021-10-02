// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"19KX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\n.skin * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.skin *::before {\n  box-sizing: border-box;\n}\n\n.skin *::after {\n  box-sizing: border-box;\n}\n\n.skin {\n  min-height: 50vh;\n  background: #FFE600;\n  position: relative;\n}\n\n.nose {\n  border: 14px solid transparent;\n  width: 10px;\n  border-radius: 10px;\n  border-top-color: black;\n  position: absolute;\n  left: 50%;\n  top: 140px;\n  margin-left: -14px;\n  z-index: 5;\n}\n\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  33% {\n    transform: rotate(4deg);\n  }\n\n  66% {\n    transform: rotate(-4deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.nose:hover {\n  transform-origin: center bottom;\n  animation: wave 150ms infinite linear;\n}\n\n.eye {\n  position: absolute;\n  border: 2px solid black;\n  width: 64px;\n  height: 64px;\n  left: 50%;\n  top: 100px;\n  margin-left: -32px;\n  background: #2e2e2e;\n  border-radius: 50%;\n}\n\n.eye::before {\n  content: '';\n  display: block;\n  border: 1px solid #000;\n  width: 30px;\n  height: 30px;\n  background: #fff;\n  border-radius: 50%;\n  position: relative;\n  top: 3px;\n  left: 8px;\n}\n\n.eye.left {\n  transform: translateX(-100px);\n}\n\n.eye.right {\n  transform: translateX(100px);\n}\n\n.mouth {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 170px;\n  margin-left: -100px;\n}\n\n.mouth .up {\n  position: relative;\n  top: -20px;\n  z-index: 1;\n}\n\n.mouth .up .lip {\n  border: 3px solid black;\n  height: 30px;\n  width: 100px;\n  border-top-color: transparent;\n  background-color: #FFE600;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n}\n\n.mouth .up .lip.left {\n  border-radius: 0 0 0 50px;\n  transform: rotate(-20deg) translateX(-55px);\n}\n\n.mouth .up .lip.right {\n  border-radius: 0 0 50px 0;\n  transform: rotate(20deg) translateX(55px);\n}\n\n\n.mouth .up .lip::before {\n  content: '';\n  display: block;\n  width: 7px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  background: #FFE600;\n}\n\n\n.mouth .up .lip.left::before {\n  right: -6px;\n}\n\n.mouth .up .lip.right::before {\n  left: -6px;\n}\n\n.mouth .down {\n  height: 186px;\n  position: absolute;\n  top: 4px;\n  width: 100%;\n  overflow: hidden;\n}\n\n.mouth .down .yuan1 {\n  border: 3px solid black;\n  width: 150px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 75px/300px;\n  background-color: #9B000A;\n  overflow: hidden;\n}\n\n.mouth .down .yuan1 .yuan2 {\n  width: 200px;\n  height: 300px;\n  position: absolute;\n  background-color: #FF485F;\n  bottom: -155px;\n  left: 50%;\n  margin-left: -100px;\n  border-radius: 100px;\n}\n\n.face {\n  border: 3px solid black;\n  position: absolute;\n  left: 50%;\n  width: 88px;\n  height: 88px;\n  top: 200px;\n  margin-left: -44px;\n  z-index: 2;\n}\n\n.face.left {\n  transform: translateX(-180px);\n  background: #FF0000;\n  border-radius: 50%;\n}\n\n.face.right {\n  transform: translateX(180px);\n  background: #FF0000;\n  border-radius: 50%;\n}\n";
// 模块化
exports.default = string;
},{}],"OSgC":[function(require,module,exports) {
'use strict';

var _dynamicCSS = require('./dynamicCSS.js');

var _dynamicCSS2 = _interopRequireDefault(_dynamicCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
    id: undefined,
    n: 1,
    time: 100,
    ui: {
        codeDemo: document.querySelector('#codeDemo'),
        demo: document.querySelector('#demo')
    },
    init: function init() {
        player.ui.codeDemo.innerText = _dynamicCSS2.default.substring(0, player.n);
        player.ui.demo.innerHTML = _dynamicCSS2.default.substring(0, player.n);
        player.bindEvents();
        player.play();
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
        '#btnReplay': 'replay',
        '#btnReturn': 'return'
    },
    bindEvents: function bindEvents() {
        for (var key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                var value = player.events[key];
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    return: function _return() {
        location.href = 'index.html';
    },
    run: function run() {
        player.n += 1;
        if (player.n > _dynamicCSS2.default.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.codeDemo.innerText = _dynamicCSS2.default.substring(0, player.n);
        player.ui.demo.innerHTML = _dynamicCSS2.default.substring(0, player.n);
        player.ui.codeDemo.scrollTop = player.ui.codeDemo.scrollHeight;
    },
    play: function play() {
        player.id = setInterval(player.run, player.time);
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    slow: function slow() {
        player.pause();
        player.time = 200;
        player.play();
    },
    normal: function normal() {
        player.pause();
        player.time = 80;
        player.play();
    },
    fast: function fast() {
        player.pause();
        player.time = 0;
        player.play();
    },
    replay: function replay() {
        player.ui.codeDemo.innerText = '';
        player.ui.demo.innerHTML = '';
        player.n = 0;
        player.init();
    }
};
player.init();
},{"./dynamicCSS.js":"19KX"}]},{},["OSgC"], null)
//# sourceMappingURL=dynamic.680dbea8.map