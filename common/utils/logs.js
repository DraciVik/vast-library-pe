"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWarn = exports.logError = exports.warnOrThrow = void 0;
var yellow = "\x1b[33m";
var red = "\x1b[31m";
var reset = "\x1b[0m";
var introError =
  yellow + "VAST-LIBRARY " + red + "ERROR" + yellow + ":" + reset;
var introWarning = yellow + "VAST-LIBRARY WARNING:" + reset;
function warnOrThrow(msg, options, isError) {
  if (isError === void 0) {
    isError = false;
  }
  if (options.logWarn) {
    if (isError) {
      logError(msg);
    } else {
      logWarn(msg);
    }
  }
  if (isError && options.throwOnError) {
    throw new Error(msg);
  }
}
exports.warnOrThrow = warnOrThrow;
// tslint:disable:no-console variable-name
function logError(error) {
  try {
    console.error(introError + " " + error);
  } catch (O_o) {
    console.log(introError + " " + error);
  }
}
exports.logError = logError;
function logWarn(warning) {
  try {
    console.warn(introWarning + " " + warning);
  } catch (O_o) {
    console.log(introWarning + " " + warning);
  }
}
exports.logWarn = logWarn;
//# sourceMappingURL=logs.js.map
