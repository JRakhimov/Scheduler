"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const freshmen = require('./data/freshmen.json');
const subjects = require('./data/subjects.json');
const rooms = require('./data/rooms.json');
class Resource {
    constructor() {
        this.freshmen = freshmen;
        this.subjects = subjects;
        this.rooms = rooms;
    }
    getFreshmen() {
        return this.freshmen;
    }
    getSubjects() {
        return this.subjects;
    }
    getRooms() {
        return this.rooms
            .filter(el => el.seats)
            .sort((a, b) => {
            return a.seats - b.seats;
        });
    }
}
exports.default = Resource;
