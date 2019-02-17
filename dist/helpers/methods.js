"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumber(min, max) {
    let random = min - 0.5 + Math.random() * (max - min + 1);
    random = Math.round(random);
    return random;
}
exports.randomNumber = randomNumber;
function splitToGroups(students, min = 5, max = 25) {
    const groups = [];
    let groupNumber = 1;
    while (students.length !== 0) {
        const minAmount = students.length <= 5 ? students.length : min;
        const maxAmount = students.length <= 5 ? students.length : max;
        const randomAmountOfStudents = randomNumber(minAmount, maxAmount);
        const randomToStartSplice = randomNumber(0, students.length);
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
