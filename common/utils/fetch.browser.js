"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchUrl(_a) {
    var url = _a.url, _b = _a.loadCallback, loadCallback = _b === void 0 ? function () { } : _b, _c = _a.syncInBrowser, syncInBrowser = _c === void 0 ? false : _c;
    if (!url) {
        throw new Error("'url' is undefined");
    }
    var fail = function () {
        throw new Error(url + " fetch failed");
    };
    var fetchReq = new XMLHttpRequest();
    if (syncInBrowser) {
        fetchReq.open("GET", url, false);
        fetchReq.send();
        if (fetchReq.status === 200) {
            loadCallback(fetchReq.responseText);
            return fetchReq.responseText;
        }
        else {
            fail();
        }
    }
    else {
        fetchReq.open("GET", url, true);
        fetchReq.onerror = fail;
        fetchReq.onload = function (res) {
            loadCallback(res.responseText);
        };
        fetchReq.send();
    }
    throw new Error(url + " was not found");
}
exports.fetchUrl = fetchUrl;
//# sourceMappingURL=fetch.browser.js.map