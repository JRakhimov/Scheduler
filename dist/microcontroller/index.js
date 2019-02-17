"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const freshmen = require('./data/freshmen.json');
const subjects = require('./data/subjects.json');
class Resource {
    constructor() {
        this.freshmen = freshmen;
        this.subjects = subjects;
    }
    getFreshmen() {
        return this.freshmen;
    }
    getSubjects() {
        return this.subjects;
    }
}
exports.default = Resource;
