const sortIdeasAlphabetically = ideas =>
  ideas.sort((a, b) => {
    const aTitle = a.title.toUpperCase();
    const bTitle = b.title.toUpperCase();

    if (aTitle < bTitle) {
      return -1;
    }
    if (aTitle > bTitle) {
      return 1;
    }

    return 0;
  });

export default sortIdeasAlphabetically;
