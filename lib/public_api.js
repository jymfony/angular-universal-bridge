"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Http = require("./Injection/Http");
var Di = require("./Injection/DependencyInjection");
var RESPONSE = Http.RESPONSE, REQUEST = Http.REQUEST;
exports.RESPONSE = RESPONSE;
exports.REQUEST = REQUEST;
var CONTAINER = Di.CONTAINER;
exports.CONTAINER = CONTAINER;
__export(require("./Service/ServerResponse"));
__export(require("./Module/AngularUniversalBridgeModule"));
