const freshmen: Students = require('./data/freshmen.json');
const subjects: Subjects = require('./data/subjects.json');
const rooms: Room[] = require('./data/rooms.json');
import { Students, Subjects, Room } from '../typings';

export default class Resource {
  private freshmen: Students;
  private subjects: Subjects;
  private rooms: Room[];

  constructor() {
    this.freshmen = freshmen;
    this.subjects = subjects;
    this.rooms = rooms;
  }

  getFreshmen(): Students {
    return this.freshmen;
  }

  getSubjects(): Subjects {
    return this.subjects;
  }

  getRooms(): Room[] {
    return this.rooms
      .filter(el => el.seats)
      .sort((a, b) => {
        return a.seats - b.seats;
      });
  }
}
