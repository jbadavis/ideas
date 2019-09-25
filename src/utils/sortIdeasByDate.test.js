import sortIdeasByDate from './sortIdeasByDate';

describe('sortIdeasByDate', () => {
  const dateOne = "2000-09-03T20:40:51.117Z"
  const dateTwo = "2000-09-02T20:40:51.117Z"
  const dateThree = "2000-09-01T20:40:51.117Z"

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
