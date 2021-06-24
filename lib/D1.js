"use strict";

var _D1Input = _interopRequireDefault(require("./input/D1Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var findSumDuo = function findSumDuo(input) {
  var diffMap = {};

  for (var i = 0; i < input.length; i++) {
    if (diffMap[input[i]]) {
      return input[i] * diffMap[input[i]];
    } else {
      diffMap[2020 - input[i]] = input[i];
    }
  }

  return null;
};

var findSumTriad = function findSumTriad(input) {
  var sorted = input.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < sorted.length; i++) {
    // pointers
    var l = i + 1;
    var r = sorted.length - 1;

    while (l < r) {
      var sum = sorted[l] + sorted[i] + sorted[r];

      if (sum === 2020) {
        return sorted[l] * sorted[i] * sorted[r];
      } else if (sum < 2020) {
        l++;
      } else {
        r--;
      }
    }
  }

  return null;
};

console.log(findSumTriad(_D1Input["default"]));