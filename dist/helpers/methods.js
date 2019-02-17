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
function splitToSections(groups, subject) {
    function sortGroups(groups) {
        for (let i = 0; i < groups.length; i++) {
            for (let j = 0; j < groups.length - i - 1; j++) {
                if (groups[j].studentsAmount > groups[j + 1].studentsAmount) {
                    let temp = groups[j];
                    groups[j] = groups[j + 1];
                    groups[j + 1] = temp;
                }
            }
        }
        return groups;
    }
    const sections = [];
    const removedItems = [];
    groups = sortGroups(groups);
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
