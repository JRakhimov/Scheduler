"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("./helpers/methods");
const microcontroller_1 = require("./microcontroller");
const resource = new microcontroller_1.default();
const freshmen = resource.getFreshmen();
const splittedGroups = methods_1.splitToGroups(freshmen.SOCIE);
console.table(splittedGroups);
