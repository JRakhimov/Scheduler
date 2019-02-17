import { Student, Subject, Section, Group, Room } from '../typings';
import { randomNumber } from './formaters';

/**
 * @param students - List of students
 * @param min - Minimum amount of students in each group
 * @param max - Maximum amount of students in each group
 * @return - List of groups
 */
export function splitToGroups(students: Student[], min = 5, max = 25): Group[] {
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

/**
 * @param groups - List of groups
 * @param subject - Subject, to know maximum students amount
 * @return - List of sections
 */
export function splitToSections(groups: Group[], subject: Subject): Section[] {
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

  sections.forEach((el: Section, index: number) => (el.number = index + 1));

  return sections;
}

/**
 * @param section - Section object
 * @param rooms - List of rooms
 * @return - Room object
 */
export function findRoom(section: Section, rooms: Room[]): Room {
  const needSeats = section.studentsAmount;
  let room: Room;

  rooms.forEach(el => {
    if (room && el.seats >= needSeats && room.seats > el.seats) {
      room = el;
    } else if (!room && needSeats <= el.seats) {
      room = el;
    }
  });

  return room;
}
