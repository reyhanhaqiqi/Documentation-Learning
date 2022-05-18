"use strict";

var CACHE_KEY = "calculation_history";

function checkForStorage() {
  return typeof Storage !== "undefined";
}

function putHistory(data) {
  if (checkForStorage()) {
    var historyData = null;

    if (localStorage.getItem(CACHE_KEY) === null) {
      historyData = [];
    } else {
      historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
    }

    historyData.unshift(data);

    if (historyData.length > 5) {
      historyData.pop();
    }

    localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
  }
}

function showHistory() {
  if (checkForStorage) {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
  } else {
    return [];
  }
}

function renderHistory() {
  var historyData = showHistory();
  var historyList = document.querySelector("#historyList");
  historyList.innerHTML = "";
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = historyData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var history = _step.value;
      var row = document.createElement('tr');
      row.innerHTML = "<td>" + history.firstNumber + "</td>";
      row.innerHTML += "<td>" + history.operator + "</td>";
      row.innerHTML += "<td>" + history.secondNumber + "</td>";
      row.innerHTML += "<td>" + history.result + "</td>";
      historyList.appendChild(row);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

renderHistory();