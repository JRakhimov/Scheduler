import { splitToGroups, splitToSections, findRoom } from './helpers/methods';
import Resource from './microcontroller';
import { Subject, Subjects, Student } from './typings';

const resource = new Resource();
const freshmen = resource.getFreshmen();
const subjects = resource.getSubjects();
const rooms = resource.getRooms();

console.log('Subjects:');
console.table(subjects.freshman_1);
console.log('Rooms:');
console.table(rooms);

// console.log('Room: ', findRoom(splittedSections[0], rooms));

function genSchedule(students: Student[], subjects: Subject[]) {
  const splittedGroups = splitToGroups(students);
  console.log('Groups:');
  console.table(splittedGroups);

  const schedule = [];

  subjects.forEach(subject => {
    const splittedSections = splitToSections(splittedGroups, subject);
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
