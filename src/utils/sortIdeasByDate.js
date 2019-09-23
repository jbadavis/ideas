import { compareDesc } from "date-fns";

export const sortIdeasByDate = ideas =>
  ideas.sort((a, b) => compareDesc(a.time, b.time));

export default sortIdeasByDate
