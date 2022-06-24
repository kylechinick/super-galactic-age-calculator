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
}
