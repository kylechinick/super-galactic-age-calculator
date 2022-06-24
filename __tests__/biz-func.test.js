import GalacticDatabase from '../src/js/biz-func.js';

describe('GalacticDatabase', () => {
  test('Create an instance of the galacticDatabase class', () => {
    const sectorOneDataBase = new GalacticDatabase();
    expect(sectorOneDataBase).toEqual({});
  });
});
