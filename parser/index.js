"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flatten = require("array-flatten");
var browser_or_node_1 = require("browser-or-node");
var checks_1 = require("../common/utils/checks");
var logs_1 = require("../common/utils/logs");
var vast_1 = require("../common/utils/vast");
var VastParser = /** @class */ (function () {
    function VastParser(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.vasts = [];
    }
    /**
     * Usefull for tests, this method does not fetch anything. You can add wrappers and inlines manually.
     */
    VastParser.prototype.addVastWithoutFetching = function (vastXML) {
        this.vasts.push(vast_1.createVastWithBuilder(vastXML));
    };
    VastParser.prototype.parseAsync = function (vastUrl, callback) {
        var _this = this;
        this.cleanVasts();
        vast_1.downloadVastAndWrappersAsync(vastUrl, this.options, function (vasts) {
            _this.vasts = vasts;
            callback(_this);
        });
    };
    VastParser.prototype.parseSync = function (vastUrl) {
        this.cleanVasts();
        if (browser_or_node_1.isNode) {
            throw new Error("parseSync is only available in a browser context");
        }
        this.vasts = vast_1.downloadVastAndWrappersSync(vastUrl, this.options);
        return this;
    };
    VastParser.prototype.getVasts = function () {
        return this.vasts;
    };
    VastParser.prototype.getVastElements = function (arrayOfTagNames) {
        var vastElements = flatten(this.vasts.map(function (v) { return v.get(arrayOfTagNames, true); }));
        return vastElements;
    };
    VastParser.prototype.getCustomVastElements = function (arrayOfTagNames) {
        return this.getVastElements(arrayOfTagNames);
    };
    VastParser.prototype.getContents = function (arrayOfTagNames) {
        var _this = this;
        return this.getVastElements(arrayOfTagNames)
            .map(function (vastElement) {
            if (checks_1.isNull(vastElement.content)) {
                logs_1.warnOrThrow(vastElement.name + " does not have content", _this.options);
            }
            return vastElement.content;
        })
            .filter(function (x) { return x; });
    };
    VastParser.prototype.getCustomContents = function (arrayOfTagNames) {
        return this.getContents(arrayOfTagNames);
    };
    VastParser.prototype.getAttributes = function (arrayOfTagNames, attribute) {
        var _this = this;
        return this.getVastElements(arrayOfTagNames)
            .map(function (vastElement) {
            var attributeLowerCased = {};
            Object.keys(vastElement.attrs).forEach(function (attr) {
                attributeLowerCased[attr.toLowerCase()] = vastElement.attrs[attr];
            });
            if (checks_1.isNull(attributeLowerCased[attribute.toLowerCase()])) {
                logs_1.warnOrThrow(vastElement.name + " does not have attribute " + attribute, _this.options);
            }
            return attributeLowerCased[attribute.toLowerCase()];
        })
            .filter(function (x) { return x; });
    };
    VastParser.prototype.getCustomAttributes = function (arrayOfTagNames, attribute) {
        return this.getAttributes(arrayOfTagNames, attribute);
    };
    VastParser.prototype.cleanVasts = function () {
        this.vasts = [];
    };
    return VastParser;
}());
exports.default = VastParser;
//# sourceMappingURL=index.js.map