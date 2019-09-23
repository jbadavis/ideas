import sortIdeasAlphabetically from './sortIdeasAlphabetically';

describe('sortIdeasAlphabetically', () => {
  it('should sort ideas alphabetically', () => {
    expect(
      sortIdeasAlphabetically([
        { title: 'c' },
        { title: 'a' },
        { title: 'B' },
      ]),
    ).toEqual([
      { title: 'a' },
      { title: 'B' },
      { title: 'c' },
    ]);
  });
});
