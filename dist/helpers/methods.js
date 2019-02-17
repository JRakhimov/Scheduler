"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formaters_1 = require("./formaters");
function splitToGroups(students, min = 5, max = 25) {
    const groups = [];
    let groupNumber = 1;
    while (students.length !== 0) {
        const minAmount = students.length <= 5 ? students.length : min;
        const maxAmount = students.length <= 5 ? students.length : max;
        const randomAmountOfStudents = formaters_1.randomNumber(minAmount, maxAmount);
        const randomToStartSplice = formaters_1.randomNumber(0, students.length);
        const removedStudents = students.splice(randomToStartSplice, randomAmountOfStudents);
        if (removedStudents.length && removedStudents.length >= min) {
            groups.push({
                groupNumber: `CIE-18-${groupNumber}`,
                students: removedStudents,
                studentsAmount: removedStudents.length
            });
            groupNumber++;
        }
    }
    return groups;
}
exports.splitToGroups = splitToGroups;
function splitToSections(groups, subject) {
    const sections = [];
    const removedItems = [];
    groups.sort((a, b) => a.studentsAmount - b.studentsAmount);
    for (let i = 0; i < groups.length; i++) {
        if (removedItems.indexOf(i) === -1) {
            const section = {
                studentsAmount: groups[i].studentsAmount,
                groups: [groups[i]]
            };
            for (let j = groups.length - 1; j > 0; j--) {
                if (i !== j && removedItems.indexOf(j) === -1) {
                    if (section.studentsAmount + groups[j].studentsAmount <= subject.maxStudents) {
                        section.studentsAmount += groups[j].studentsAmount;
                        section.groups.push(groups[j]);
                        removedItems.push(j);
                    }
                }
            }
            sections.push(section);
        }
    }
    sections.forEach((el, index) => (el.number = index + 1));
    return sections;
}
exports.splitToSections = splitToSections;
function findRoom(section, rooms) {
    const needSeats = section.studentsAmount;
    let room;
    rooms.forEach(el => {
        if (room && el.seats >= needSeats && room.seats > el.seats) {
            room = el;
        }
        else if (!room && needSeats <= el.seats) {
            room = el;
        }
    });
    return room;
}
exports.findRoom = findRoom;
