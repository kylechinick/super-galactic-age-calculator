// import $ from 'jquery';

export default class GalacticDatabase {
  constructor(databaseUserAge) {
    this.databaseUserAge = databaseUserAge;
  }

  // mercuryYearsConverter() {
  //   return this.databaseUserAge * 0.24;
  // }
  venusYearsConverter(ageToConvert) {
    return parseFloat((ageToConvert * 0.62).toFixed(1));
  }

  marsYearsConverter(ageToConvert) {
    return parseFloat((ageToConvert * 1.88).toFixed(1));
  }
  // jupiterYearsConverter() {
  //   return parseFloat((this.databaseUserAge * 11.86).toFixed(1));
  // }

  averageLifespanConverter(averageEarthLifespan, targetConversionPlanet) {
    let convertedAverageLifespan;

    switch (targetConversionPlanet) {
      case 'mars':
        convertedAverageLifespan =
          this.marsYearsConverter(averageEarthLifespan);
        break;

      default:
        break;
    }
    return convertedAverageLifespan;
  }

  yearsRemainingCalculator(
    targetAge,
    averageEarthLifespan,
    targetConversionPlanet
  ) {
    const convertedAverageLifespan = this.averageLifespanConverter(
      averageEarthLifespan,
      targetConversionPlanet
    );

    const convertedUserAge = this.marsYearsConverter(targetAge);

    const userAgeVsAverageLifespan = Math.abs(
      parseFloat((convertedAverageLifespan - convertedUserAge).toFixed(1))
    );
    if (convertedUserAge < convertedAverageLifespan) {
      return userAgeVsAverageLifespan;
    } else {
      return `You have lived ${userAgeVsAverageLifespan} years past average life expectancy, keep it up!`;
    }
  }
}
