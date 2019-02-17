const freshmen: Students = require('./data/freshmen.json');
import { Students } from '../typings';

export default class Resource {
  private freshmen: Students;

  /**
   * @param freshmen List of students
   */
  constructor() {
    this.freshmen = freshmen;
  }

  getFreshmen(): Students {
    return this.freshmen;
  }
}
