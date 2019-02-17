"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const freshmen = require('./data/freshmen.json');
class Resource {
    constructor() {
        this.freshmen = freshmen;
    }
    getFreshmen() {
        return this.freshmen;
    }
}
exports.default = Resource;
