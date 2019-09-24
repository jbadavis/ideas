import getStateFromLocalStorage from './getStateFromLocalStorage';

describe('getStateFromLocalStorage', () => {
  beforeAll(() => {
    window.localStorage.__proto__.getItem = jest.fn();
  });

  describe('if an ideas object is in local storage', () => {
    const ideasMock = '{ "ideas": [] }';
    let result;

    beforeAll(() => {
      window.localStorage.__proto__.getItem.mockReturnValue(ideasMock);
      result = getStateFromLocalStorage();
    });

    it('should call localStorage.getItem', () => {
      expect(window.localStorage.getItem).toHaveBeenCalledWith('ideas');
    });

    it('should return the parsed JSON', () => {
      expect(result).toEqual(JSON.parse(ideasMock));
    });
  });

  describe('if an ideas object is not in local storage', () => {
    let result;

    beforeAll(() => {
      result = getStateFromLocalStorage();
    });

    it('should call localStorage.getItem', () => {
      expect(window.localStorage.getItem).toHaveBeenCalledWith('ideas');
    });

    it('should return an empty ideas object', () => {
      expect(result).toEqual({ideas: []});
    });
  });
});
