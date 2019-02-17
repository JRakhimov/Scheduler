const freshmen: Students = require('./data/freshmen.json');
const subjects: Subjects = require('./data/subjects.json');
import { Students, Subjects } from '../typings';

export default class Resource {
  private freshmen: Students;
  private subjects: Subjects;

  constructor() {
    this.freshmen = freshmen;
    this.subjects = subjects;
  }

  getFreshmen(): Students {
    return this.freshmen;
  }

  getSubjects(): Subjects {
    return this.subjects;
  }
}
