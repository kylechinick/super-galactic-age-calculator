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

  test('Return a number that is .62 times the value of databaseUserAge via the GalacticDatabase method venusYearsConverter', () => {
    const sectorOneDataBase = new GalacticDatabase(20);
    expect(sectorOneDataBase.venusYearsConverter()).toEqual(12.4);
  });

  test('Return a number that is 1.88 times the value of databaseUserAge via the GalacticDatabase method marsYearsConverter', () => {
    const sectorOneDataBase = new GalacticDatabase(20);
    expect(sectorOneDataBase.marsYearsConverter()).toEqual(37.6);
  });

  test('Return a number that is 11.86 times the value of databaseUserAge via the GalacticDatabase method jupiterYearsConverter', () => {
    const sectorOneDataBase = new GalacticDatabase(20);
    expect(sectorOneDataBase.jupiterYearsConverter()).toEqual(237.2);
  });

  test('Return the number result of subtracting databaseUserAge from 100 via the GalacticDatabase method yearsRemainingCalculator()', () => {
    const sectorOneDataBase = new GalacticDatabase(20);
    expect(sectorOneDataBase.yearsRemainingCalculator()).toEqual(80);
  });
});
