/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	__webpack_require__(2);

	var Hello = React.createClass({displayName: 'Hello',

	  getInitialState: function() {
	    return {
	      name: 'Strongbad'
	    };  
	  },  

	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("div", {dangerouslySetInnerHTML: {__html: '<my-element username=' + this.state.name + '></my-element>'}}), 
	        React.createElement("p", null, 
	          "Hello from outside my-element.", 
	          React.createElement("span", {className: "red"}, "The global red class is set to color: blue")
	        ), 
	        React.createElement("p", null, 
	          React.createElement("button", {className: "btn btn-primary"}, "Regular button")
	        )
	      )
	    );  
	  }   
	}); 

	React.render(React.createElement(Hello, {name: "World"}), document.body);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "module.exports = \"<link rel=\\\"import\\\" href=\\\"../bower_components/polymer/polymer.html\\\">\\n<!-- <link rel=\\\"import\\\" href=\\\"/path/to/other/element\\\"  -->\\n\\n<polymer-element name=\\\"my-element\\\" attributes=\\\"username\\\">\\n  <template>\\n  <link rel=\\\"stylesheet\\\" href=\\\"../bower_components/bootstrap/dist/css/bootstrap.min.css\\\">\\n  <style>\\n    :host {\\n      font-family: sans-serif;\\n    }\\n\\n    .red {\\n      color: red;\\n    }\\n  \\n    .username {\\n      color: orange;\\n      border: 1px solid #777;\\n      padding: 5px;\\n    }\\n  </style>\\n  <p>\\n    <span class=\\\"red\\\">Hello from red class with color: red</span> inside of \\n    <b> my-element</b>. This is my Shadow DOM. Yo yo, \\n    <span id=\\\"username\\\" class=\\\"username\\\">{{ username }}</span> likes data-binding  \\n  </p>\\n  <p>\\n    <button class=\\\"btn btn-primary\\\">Bootstrap Button</button>\\n  </p>\\n  </template>\\n  <script>\\n    Polymer({\\n      ready: function() {\\n        console.log('element is ready');\\n      }\\n    });\\n  \\n    function innerFunc() {\\n      console.log('calling function inside of web component');\\n    }\\n  \\n    innerFunc();\\n  </script>\\n</polymer-element>\\n\";";

/***/ }
/******/ ])