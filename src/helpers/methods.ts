import { Student, Group } from '../typings';

/**
 * @param {number} min - Minimum number for random
 * @param {number} max - Maximum number for random
 * @return - Randommed number
 */
export function randomNumber(min: number, max: number): number {
  let random = min - 0.5 + Math.random() * (max - min + 1);
  random = Math.round(random);
  return random;
}

/**
 * @param students - List of students
 * @param {number} min - Minimum amount of students in each group
 * @param {number} max - Maximum amount of students in each group
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
