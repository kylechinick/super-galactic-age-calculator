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
}
