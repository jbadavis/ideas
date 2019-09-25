import {compareDesc} from 'date-fns';

export const sortIdeasByDate = ideas =>
  ideas.sort((a, b) => compareDesc(new Date(a.time), new Date(b.time)));

export default sortIdeasByDate;
