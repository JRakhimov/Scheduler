import { splitToGroups, splitToSections } from './helpers/methods';
import Resource from './microcontroller';

const resource = new Resource();
const freshmen = resource.getFreshmen();
const subjects = resource.getSubjects();

const splittedGroups = splitToGroups(freshmen.SOCIE);

const splittedSections = splitToSections(splittedGroups, subjects.freshman_1[0]); // Caution! Mutation sorts the groups array

console.table(subjects.freshman_1);
console.table(splittedGroups);
console.table(splittedSections);
