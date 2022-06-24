import GalacticDatabase from '../src/js/biz-func.js';

describe('GalacticDatabase', () => {
  // test('Create an instance of the GalacticDatabase class', () => {
  //   const sectorOneDataBase = new GalacticDatabase();
  //   expect(sectorOneDataBase).toEqual({});
  // });

  // test('Create an instance of GalacticDatabase with a defined age property', () => {
  //   const sectorOneDataBase = new GalacticDatabase(20);
  //   expect(sectorOneDataBase.databaseUserAge).toEqual(20);
  // });

  // test('Return a number that is .24 times the value of databaseUserAge via the GalacticDatabase method mercuryYearsConverter', () => {
  //   const sectorOneDataBase = new GalacticDatabase(20);
  //   expect(sectorOneDataBase.mercuryYearsConverter()).toEqual(4.8);
  // });

  test('Return a number that is .62 times the value of databaseUserAge via the GalacticDatabase method venusYearsConverter', () => {
    const sectorOneDataBase = new GalacticDatabase(20);
    expect(sectorOneDataBase.venusYearsConverter(20)).toEqual(12.4);
  });

  test('Return a number that is 1.88 times the value of databaseUserAge via the GalacticDatabase method marsYearsConverter', () => {
    const sectorOneDataBase = new GalacticDatabase(20);
    expect(
      sectorOneDataBase.marsYearsConverter(sectorOneDataBase.databaseUserAge)
    ).toEqual(37.6);
  });

  // test('Return a number that is 11.86 times the value of databaseUserAge via the GalacticDatabase method jupiterYearsConverter', () => {
  //   const sectorOneDataBase = new GalacticDatabase(20);
  //   expect(sectorOneDataBase.jupiterYearsConverter()).toEqual(237.2);
  // });

  // test('Return the number result of subtracting databaseUserAge from 100 via the GalacticDatabase method yearsRemainingCalculator()', () => {
  //   const sectorOneDataBase = new GalacticDatabase(20);
  //   expect(sectorOneDataBase.yearsRemainingCalculator()).toEqual(80);
  // });

  test('Return result of subtracting the planet-converted user age from the planet-converted average lifespan via the GalacticDatabase method yearsRemainingCalculator()', () => {
    const sectorOneDataBase = new GalacticDatabase(20);
    expect(sectorOneDataBase.yearsRemainingCalculator(20, 100, 'mars')).toEqual(
      150.4
    );
  });

  // // test('Return the number result of subtracting databaseUserAge from 100 via the GalacticDatabase method yearsRemainingCalculator() as a positive number if databaseUserAge is greater than 100 ', () => {
  // //   const sectorOneDataBase = new GalacticDatabase(120);
  // //   expect(sectorOneDataBase.yearsRemainingCalculator()).toEqual(20);
  // // });

  // test('Return a string stating the positive number of years above 100 that the user has lived based on databaseUserAge', () => {
  //   const sectorOneDataBase = new GalacticDatabase(120);
  //   expect(sectorOneDataBase.yearsRemainingCalculator()).toEqual(
  //     'You have lived 20 years past average life expectancy, keep it up!'
  //   );
  // });

  test('Return the converted average lifespan', () => {
    const sectorOneDataBase = new GalacticDatabase(20);
    expect(sectorOneDataBase.averageLifespanConverter(100, 'mars')).toEqual(
      188
    );
  });

  // test('Return the planet-converted number of years remaining or exceeded against planet-converted average life-span of 100 Earth years', () => {
  //   const sectorOneDataBase = new GalacticDatabase(20);
  //   expect(sectorOneDataBase.yearsRemainingCalculator(20, 100, 'mars')).toEqual(
  //     150.4
  //   );
  // });
});
