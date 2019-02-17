"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("./helpers/methods");
const microcontroller_1 = require("./microcontroller");
const resource = new microcontroller_1.default();
const freshmen = resource.getFreshmen();
const subjects = resource.getSubjects();
const splittedGroups = methods_1.splitToGroups(freshmen.SOCIE);
const splittedSections = methods_1.splitToSections(splittedGroups, subjects.freshman_1[0]);
console.table(subjects.freshman_1);
console.table(splittedGroups);
console.table(splittedSections);
