import { splitToGroups, splitToSections, findRoom } from './helpers/methods';
import Resource from './microcontroller';

const resource = new Resource();
const freshmen = resource.getFreshmen();
const subjects = resource.getSubjects();
const rooms = resource.getRooms();

const splittedGroups = splitToGroups(freshmen.SOCIE);
const splittedSections = splitToSections(splittedGroups, subjects.freshman_1[0]); // Caution! Mutation sorts the groups array

console.table(subjects.freshman_1);
console.table(splittedGroups);
console.table(splittedSections);
console.table(rooms);

console.log('Room: ', findRoom(splittedSections[0], rooms));
