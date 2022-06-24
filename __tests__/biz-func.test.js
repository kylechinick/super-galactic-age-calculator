import GalacticDatabase from '../src/js/biz-func.js';

describe('GalacticDatabase', () => {
  test('Create an instance of the GalacticDatabase class', () => {
    const sectorOneDataBase = new GalacticDatabase();
    expect(sectorOneDataBase).toEqual({});
  });

  test('Create an instance of GalacticDatabase with a defined age property', () => {
    const sectorOneDataBase = new GalacticDatabase(20);
    expect(sectorOneDataBase.databaseUserAge).toEqual(20);
  });

  test('Return a number that is .24 times the value of databaseUserAge via the GalacticDatabase method mercuryYearsConverter', () => {
    const sectorOneDataBase = new GalacticDatabase(20);
    expect(sectorOneDataBase.mercuryYearsConverter()).toEqual(4.8);
  });
});
