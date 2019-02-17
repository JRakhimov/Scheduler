"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("./helpers/methods");
const microcontroller_1 = require("./microcontroller");
const resource = new microcontroller_1.default();
const freshmen = resource.getFreshmen();
const subjects = resource.getSubjects();
const rooms = resource.getRooms();
console.log('Subjects:');
console.table(subjects.freshman_1);
console.log('Rooms:');
console.table(rooms);
function genSchedule(students, subjects) {
    const splittedGroups = methods_1.splitToGroups(students);
    console.log('Groups:');
    console.table(splittedGroups);
    const schedule = [];
    subjects.forEach(subject => {
        const splittedSections = methods_1.splitToSections(splittedGroups, subject);
        console.log(`Subject: ${subject.name}`);
        console.table(splittedSections);
        schedule.push({
            subject: subject.name,
            sections: splittedSections,
            sectionsAmount: splittedSections.length
        });
    });
    console.log('Schedule:');
    console.table(schedule);
    return schedule;
}
genSchedule(freshmen.SOCIE, subjects.freshman_1);
