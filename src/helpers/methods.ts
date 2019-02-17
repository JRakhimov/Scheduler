import { Student, Subject, Section, Group } from '../typings';

/**
 * @param min - Minimum number for random
 * @param max - Maximum number for random
 * @return - Randommed number
 */
export function randomNumber(min: number, max: number): number {
  let random = min - 0.5 + Math.random() * (max - min + 1);
  random = Math.round(random);
  return random;
}

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
  function sortGroups(groups: Group[]): Group[] {
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

  sections.forEach((el: Section, index: number) => (el.number = index + 1));

  return sections;
}
