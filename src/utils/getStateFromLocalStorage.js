const getStateFromLocalStorage = () => {
  const ideas = localStorage.getItem('ideas');

  return ideas 
    ? JSON.parse(ideas) 
    : {ideas: []};
};

export default getStateFromLocalStorage;


