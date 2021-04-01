"use strict";
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.VastElementRoot = void 0;
var flatten = require("array-flatten");
var xml_js_1 = require("xml-js");
var logs_1 = require("./utils/logs");
var string_1 = require("./utils/string");
var xmlDeclaration = {
  _declaration: {
    _attributes: {
      encoding: "utf-8",
      version: "1.0"
    }
  }
};
var VastElement = /** @class */ (function() {
  function VastElement(
    name,
    parent,
    baseInfos,
    contentOrAttributes,
    attributesIfContent
  ) {
    if (name === void 0) {
      name = "root";
    }
    if (parent === void 0) {
      parent = null;
    }
    if (baseInfos === void 0) {
      baseInfos = { attrs: [] };
    }
    this.parent = parent;
    this.name = name;
    if (typeof contentOrAttributes === "string") {
      if (string_1.hasCDATA(contentOrAttributes)) {
        this.cdataThisOne = true;
      }
      this.content = string_1.stripCDATA(contentOrAttributes);
      this.attrs = attributesIfContent || {};
    } else {
      this.content = null;
      this.attrs = contentOrAttributes || {};
    }
    this.childs = [];
    this.infos = {
      attrs: baseInfos.attrs || []
    };
    this.parseOptions((parent && parent.options) || {});
  }
  // > Get the node name
  // * getName(): string
  VastElement.prototype.getName = function() {
    return this.name;
  };
  // > alias for and()
  // * getParent(): Object
  VastElement.prototype.getParent = function() {
    return this.and();
  };
  // > Get filtered attributes (only specs valids one will be returned)
  // * getContent(): string
  VastElement.prototype.getContent = function() {
    return this.content;
  };
  VastElement.prototype.getInfos = function() {
    return this.infos;
  };
  // > Get a specific attr, it's case insensitive (only specs valids one will be returned)
  // * getAttr(attributeName: string): string
  VastElement.prototype.getAttr = function(attributeName) {
    var baseAttrs = this.getValidAttrs();
    var lowerCasedAttrs = Object.keys(this.getValidAttrs()).reduce(function(
      prev,
      next
    ) {
      prev[next.toLowerCase()] = baseAttrs[next];
      return prev;
    },
    {});
    return lowerCasedAttrs[attributeName.toLowerCase()];
  };
  // > Get filtered attributes (only specs valids one will be returned)
  // * getValidAttrs(): Object
  VastElement.prototype.getValidAttrs = function() {
    var _this = this;
    if (this.infos.attrs === "all") {
      return this.attrs;
    } else {
      return Object.keys(this.attrs).reduce(function(prev, next) {
        var _a;
        if (_this.infos.attrs.indexOf(next) !== -1) {
          return __assign(
            __assign({}, prev),
            ((_a = {}), (_a[next] = _this.attrs[next]), _a)
          );
        } else {
          logs_1.warnOrThrow(
            'WARNING: the attribute "' +
              next +
              '" does not exists in "' +
              _this.name +
              '" Tag. It was ignored.\n            Here is the allowed list: ' +
              _this.infos.attrs,
            _this.options
          );
          return prev;
        }
      }, {});
    }
  };
  /** @deprecated “getAttrs()“ method is deprecated, use getValidAttrs() instead. */
  VastElement.prototype.getAttrs = function() {
    logs_1.logWarn(
      "“getAttrs()“ method is deprecated, use getValidAttrs() instead."
    );
    return this.getValidAttrs();
  };
  // > return the parent element
  // * and(): VastElement
  VastElement.prototype.and = function() {
    return this.parent;
  };
  // > alias for .and().and()
  // * back(): VastElement
  VastElement.prototype.back = function() {
    return this.and().and();
  };
  // > force element content into cdata. return the current element
  // * cdata(): VastElement
  VastElement.prototype.cdata = function() {
    this.cdataThisOne = true;
    return this;
  };
  // > force element content into text. return the current element
  // * text(): VastElement
  VastElement.prototype.text = function() {
    this.cdataThisOne = false;
    return this;
  };
  VastElement.prototype.attachCustomTag = function(
    tagName,
    contentOrAttributes,
    attributesIfContent
  ) {
    var newElem = new VastElement(
      tagName,
      this,
      { attrs: "all" },
      contentOrAttributes,
      attributesIfContent
    );
    this.childs.push(newElem);
    return newElem;
  };
  VastElement.prototype.addCustomTag = function(
    tagName,
    contentOrAttributes,
    attributesIfContent
  ) {
    return this.attachCustomTag(
      tagName,
      // allow fallback on attachCustomTag overload
      contentOrAttributes,
      attributesIfContent
    ).and();
  };
  // undocumented
  VastElement.prototype.hasAttrs = function() {
    return Object.keys(this.attrs).length > 0;
  };
  // undocumented
  // return a JS object
  VastElement.prototype.getJson = function() {
    var childCode = {};
    this.childs.forEach(function(child) {
      childCode[child.name] = childCode[child.name] || [];
      var childJson = child.getJson();
      if (Object.keys(childJson).length > 0) {
        childCode[child.name].push(childJson);
      }
    });
    var jsonVast = {};
    if (this.hasAttrs()) {
      jsonVast._attributes = this.getValidAttrs();
    }
    if (this.content) {
      if (
        this.cdataThisOne === true ||
        (this.cdataThisOne !== false && this.options.cdata)
      ) {
        jsonVast._cdata = this.content;
      } else {
        jsonVast._text = this.content;
      }
    }
    return __assign(__assign({}, jsonVast), childCode);
  };
  // > Return the root VastElement
  // * getRoot(): VastElement
  VastElement.prototype.getRoot = function() {
    var parent = this.parent || this;
    while (parent.parent) {
      parent = parent.parent;
    }
    return parent;
  };
  // > Return the generated Vast string
  // * toXml(): string
  VastElement.prototype.toXml = function() {
    // todo, manage this
    // if (this.options.validateOnBuild) {
    //   this.validate();
    // }
    return xml_js_1.js2xml(
      __assign(__assign({}, xmlDeclaration), this.getRoot().getJson()),
      __assign({ compact: true }, this.options)
    );
  };
  // > return the current VAST api version
  // * getVastVersion(): number
  VastElement.prototype.getVastVersion = function() {
    return parseInt(this.getVersionRaw());
  };
  // > return the current VAST api version in snake case
  // * getVastSnakeVersion(): string
  VastElement.prototype.getVastSnakeVersion = function() {
    return this.getVersionRaw().replace(".", "_");
  };
  // > return an array all direct childs with "name"
  // * getChilds(name: string): Array<VastElement>
  VastElement.prototype.getChilds = function(name) {
    return this.childs.filter(function(c) {
      return c.name === name;
    });
  };
  // > return an array of all childs find recursively at "arrayOfNames" path in the hierarchy
  // * getChilds(arrayOfNames: Array<string>, fromRoot: boolean = true): Array<VastElement>
  VastElement.prototype.get = function(arrayOfTagNames, fromRoot) {
    if (arrayOfTagNames === void 0) {
      arrayOfTagNames = [];
    }
    if (fromRoot === void 0) {
      fromRoot = true;
    }
    if (arrayOfTagNames.length === 0) {
      return [this];
    }
    var findedNodes = [];
    var node = fromRoot ? this.getRoot() : this;
    Object.keys(node.childs).forEach(function(key) {
      var child = node.childs[key];
      if (child.name === arrayOfTagNames[0]) {
        if (arrayOfTagNames.length === 1) {
          findedNodes.push(child);
        } else {
          findedNodes.push(child.get(arrayOfTagNames.slice(1), false));
        }
      } else {
        findedNodes.push(child.get(arrayOfTagNames, false));
      }
    });
    return flatten(findedNodes);
  };
  VastElement.prototype.getCustom = function(arrayOfTagNames, fromRoot) {
    if (arrayOfTagNames === void 0) {
      arrayOfTagNames = [];
    }
    if (fromRoot === void 0) {
      fromRoot = true;
    }
    return this.get(arrayOfTagNames, fromRoot);
  };
  // > Return if current VastElement hierarchie is a Wrapper
  // * isWrapper(): boolean
  VastElement.prototype.isWrapper = function() {
    return this.get(["Wrapper"]).length > 0;
  };
  // undocumented
  VastElement.prototype.parseOptions = function(options) {
    this.options = __assign(
      { cdata: true, logWarn: true, spaces: 2, throwOnError: false },
      options
    );
  };
  // undocumented
  VastElement.prototype.getVersionRaw = function() {
    return this.getRoot()
      .getChilds("VAST")[0]
      .getAttr("version");
  };
  return VastElement;
})();
exports.default = VastElement;
// mainly used in tests to simulate VastElement root from build/api
var VastElementRoot = /** @class */ (function(_super) {
  __extends(VastElementRoot, _super);
  function VastElementRoot() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  VastElementRoot.prototype.and = function() {
    return this;
  };
  return VastElementRoot;
})(VastElement);
exports.VastElementRoot = VastElementRoot;
//# sourceMappingURL=vast-element.js.map
