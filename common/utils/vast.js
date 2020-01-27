"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var xml_js_1 = require("xml-js");
var vast_element_1 = require("../vast-element");
var fetch_1 = require("../utils/fetch");
var logs_1 = require("./logs");
function buildVast(current, currentTag) {
    /* istanbul ignore next */
    if (current && current.elements) {
        if (current.elements.length === 1 &&
            (current.elements[0].text || current.elements[0].cdata)) {
            var currentTmp = current.elements[0];
            var currentText = String(currentTmp.text || currentTmp.cdata);
            currentTag.content = currentText;
        }
        else {
            var currentChild = void 0;
            for (var i = 0; i < current.elements.length; i++) {
                var currentTmp = current.elements[i];
                // TODO refacto attachCustomTag from real tag for better integration
                // and fallback on dangerous
                currentChild = currentTag.attachCustomTag(currentTmp.name, currentTmp.attributes);
                buildVast(currentTmp, currentChild);
            }
        }
    }
}
exports.buildVast = buildVast;
// TODO this is only exported for test, it should not be
function createVastWithBuilder(vastRawCode, options) {
    if (options === void 0) { options = {}; }
    options = __assign({ logWarn: false }, options);
    var parsedXml;
    try {
        parsedXml = xml_js_1.xml2js(vastRawCode);
    }
    catch (e) {
        logs_1.warnOrThrow("Error during the vast parsing, it seems not valid XML", options);
    }
    return createVastFromJson(parsedXml);
}
exports.createVastWithBuilder = createVastWithBuilder;
function createVastFromJson(vastJsonCode, options) {
    if (options === void 0) { options = {}; }
    options = __assign({ logWarn: false }, options);
    var root = new vast_element_1.default();
    root.parseOptions(options);
    buildVast(vastJsonCode, root);
    return root;
}
function downloadVastAndWrappersSync(vastUrl, options) {
    var vastAndWrappers = [];
    var currentVast;
    do {
        var vastRawContent = fetch_1.fetchUrl({ url: vastUrl, syncInBrowser: true });
        currentVast = createVastWithBuilder(vastRawContent);
        vastAndWrappers.push(currentVast);
        if (currentVast.isWrapper()) {
            var VASTAdTagURI = currentVast.get(["VASTAdTagURI"])[0];
            if (VASTAdTagURI) {
                vastUrl = VASTAdTagURI.getContent();
            }
        }
    } while (currentVast.isWrapper());
    return vastAndWrappers;
}
exports.downloadVastAndWrappersSync = downloadVastAndWrappersSync;
function downloadVastAndWrappersAsync(vastUrl, options, callback, actualDownloadedVasts) {
    var vastAndWrappers = actualDownloadedVasts || [];
    var currentVast;
    fetch_1.fetchUrl({
        loadCallback: function (vastRawContent) {
            currentVast = createVastWithBuilder(vastRawContent);
            vastAndWrappers.push(currentVast);
            if (currentVast.isWrapper()) {
                var VASTAdTagURI = currentVast.get(["VASTAdTagURI"])[0];
                if (VASTAdTagURI) {
                    vastUrl = VASTAdTagURI.getContent();
                }
                downloadVastAndWrappersAsync(vastUrl, options, callback, vastAndWrappers);
            }
            else {
                callback(vastAndWrappers);
            }
        },
        syncInBrowser: true,
        url: vastUrl
    });
}
exports.downloadVastAndWrappersAsync = downloadVastAndWrappersAsync;
//# sourceMappingURL=vast.js.map