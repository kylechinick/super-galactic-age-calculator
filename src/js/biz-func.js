// import $ from 'jquery';

export default class GalacticDatabase {
  constructor(databaseUserAge) {
    this.databaseUserAge = databaseUserAge;
  }

  mercuryYearsConverter() {
    return this.databaseUserAge * 0.24;
  }
  venusYearsConverter() {
    return this.databaseUserAge * 0.62;
  }
  marsYearsConverter() {
    return parseFloat((this.databaseUserAge * 1.88).toFixed(1));
  }
  jupiterYearsConverter() {
    return parseFloat((this.databaseUserAge * 11.86).toFixed(1));
  }
  yearsRemainingCalculator() {
    const userAgeVsExpectancyAge = Math.abs(
      parseFloat((100 - this.databaseUserAge).toFixed(1))
    );
    if (this.databaseUserAge < 100) {
      return userAgeVsExpectancyAge;
    } else {
      return `You have lived ${userAgeVsExpectancyAge} years past average life expectancy, keep it up!`;
    }
  }
}
