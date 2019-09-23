import sortIdeasByDate from './sortIdeasByDate';

describe('sortIdeasByDate', () => {
  const dateOne = new Date(2017, 0, 3);
  const dateTwo = new Date(2017, 0, 2);
  const dateThree = new Date(2017, 0, 1);

  it('should sort ideas by date', () => {
    expect(
      sortIdeasByDate([
        { time: dateOne },
        { time: dateThree },
        { time: dateTwo },
      ]),
    ).toEqual([
      { time: dateOne },
      { time: dateTwo },
      { time: dateThree },
    ]);
  });
});
