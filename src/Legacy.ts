import * as _ from 'lodash';

class Room {
  seats: number;
  roomSpecification?: Specification;
  roomNumber: string;
}

class Subject {
  inWeekTimes: number;
  teacher: Teacher;
  requirement?: Specification;
  maxStudents: number;
}

class Teacher {
  name: string;
  id: string;
  subject: Subject;
  groups: Group[];
}

class Student {
  name: string;
  id: string;
  group: string;
  stage: Stage;
}

class Group {
  groupNumber: string;
  students: Student[]; // From 5 to 30
  studentsAmount: number = this.students.length;
}

class Section {
  sectionNumber: number;
  groups: Group[];
  groupsAmount: number = this.groups.length;
  students: Student[];
  studentsAmount: number = this.students.length;
}

const enum Stage {
  Freshman,
  Sophomore,
  Junior,
  Senior
}

const enum Specification {
  Computers,
  Experiment,
  Projector
}
