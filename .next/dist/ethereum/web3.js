'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keys = require('../config/keys');


var web3 = void 0;

if (typeof window != 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in the browser
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server  *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider(keys.RINKEBY_INFURA_URI);

  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsia2V5cyIsInJlcXVpcmUiLCJXZWIzIiwid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiUklOS0VCWV9JTkZVUkFfVVJJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxBQUFPOzs7Ozs7QUFEUCxJQUFNLE9BQU8sUUFBYixBQUFhLEFBQVE7OztBQUdyQixJQUFJLFlBQUo7O0FBRUEsSUFBRyxPQUFBLEFBQU8sVUFBUCxBQUFpQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQWpELEFBQTBELGFBQVksQUFDcEU7QUFDQTtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDN0I7QUFIRCxPQUdNLEFBQ0o7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUNsQyxLQURGLEFBQWlCLEFBQ1YsQUFHUDs7U0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNqQjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmNlbGFuaXMva2lja3N0YXJ0In0=