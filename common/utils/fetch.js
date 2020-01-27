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
    var request = require("request");
    request(url, function (error, response, body) {
        if (error) {
            fail();
        }
        loadCallback(body);
    });
}
exports.fetchUrl = fetchUrl;
//# sourceMappingURL=fetch.js.map