"use strict";

var _input = require("./input");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var validPasswords = function validPasswords(input) {
  var validCount = 0;

  for (var i = 0; i < input.length; i++) {
    var _ref = _toConsumableArray(input[i].split(': ')),
        policy = _ref[0],
        password = _ref[1];

    var _ref2 = _toConsumableArray(policy.split(/[\s, -]/)),
        l = _ref2[0],
        r = _ref2[1],
        _char = _ref2[2];

    var charCount = 0;
    var valid = true;

    for (var j = 0; j < password.length; j++) {
      if (password[j] === _char) {
        charCount++;

        if (charCount > max) {
          valid = false;
          break;
        }
      }
    }

    if (charCount < min) valid = false;
    if (valid) validCount++;
  }

  return validCount;
};

var actualValidPasswords = function actualValidPasswords(input) {
  var validCount = 0;

  for (var i = 0; i < input.length; i++) {
    var _ref3 = _toConsumableArray(input[i].split(': ')),
        policy = _ref3[0],
        password = _ref3[1];

    var _ref4 = _toConsumableArray(policy.split(/[\s, -]/)),
        l = _ref4[0],
        r = _ref4[1],
        _char2 = _ref4[2];

    var first = password[l - 1];
    var second = password[r - 1];
    if ((first === _char2 || second === _char2) && first !== second) validCount++;
  }

  return validCount;
};

console.log(actualValidPasswords(_input.dayTwoInput));