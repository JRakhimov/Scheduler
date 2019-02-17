import { splitToGroups } from './helpers/methods';
import Resource from './microcontroller';

const resource = new Resource();
const freshmen = resource.getFreshmen();

const splittedGroups = splitToGroups(freshmen.SOCIE);
console.table(splittedGroups);
