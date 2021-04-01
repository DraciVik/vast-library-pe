"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUrl = void 0;
function fetchUrl(_a) {
  var url = _a.url,
    _b = _a.headers,
    headers = _b === void 0 ? {} : _b,
    _c = _a.loadCallback,
    loadCallback = _c === void 0 ? function() {} : _c,
    _d = _a.syncInBrowser,
    syncInBrowser = _d === void 0 ? false : _d;
  if (!url) {
    throw new Error("'url' is undefined");
  }
  var fail = function() {
    throw new Error(url + " fetch failed");
  };
  var fetchReq = new XMLHttpRequest();
  if (syncInBrowser) {
    fetchReq.open("GET", url, false);
    Object.keys(headers).forEach(function(header) {
      fetchReq.setRequestHeader(header, headers[header]);
    });
    fetchReq.send();
    if (fetchReq.status === 200) {
      loadCallback(fetchReq.responseText);
      return fetchReq.responseText;
    } else {
      fail();
    }
  } else {
    fetchReq.open("GET", url, true);
    Object.keys(headers).forEach(function(header) {
      fetchReq.setRequestHeader(header, headers[header]);
    });
    fetchReq.onerror = fail;
    fetchReq.onload = function(res) {
      loadCallback(res.responseText);
    };
    fetchReq.send();
  }
  throw new Error(url + " was not found");
}
exports.fetchUrl = fetchUrl;
//# sourceMappingURL=fetch.browser.js.map
