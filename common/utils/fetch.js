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
	
	var q = url.indexOf('?');
	if (q === -1 )
	{	
		var url = url + '?rand=' + Math.floor(Math.random() * 10000000);
	} else {
		var url = url + '&rand=' + Math.floor(Math.random() * 10000000);	
	}	
	
	var options = {
	  url: url,
	  headers: {
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'
	  }
	};
	
    request(options, function (error, response, body) {
        if (error) {
            fail();
        }
        loadCallback(body);
    });
}
exports.fetchUrl = fetchUrl;
//# sourceMappingURL=fetch.js.map