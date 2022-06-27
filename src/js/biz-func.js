export default class GalacticDatabase {
  constructor(databaseUserAge) {
    this.databaseUserAge = databaseUserAge;
  }

  mercuryYearsConverter(ageToConvert) {
    return parseFloat((ageToConvert * 0.24).toFixed(1));
  }

  venusYearsConverter(ageToConvert) {
    return parseFloat((ageToConvert * 0.62).toFixed(1));
  }

  marsYearsConverter(ageToConvert) {
    return parseFloat((ageToConvert * 1.88).toFixed(1));
  }

  jupiterYearsConverter(ageToConvert) {
    return parseFloat((ageToConvert * 11.86).toFixed(1));
  }

  averageLifespanConverter(averageEarthLifespan, targetConversionPlanet) {
    let convertedAverageLifespan;

    switch (targetConversionPlanet) {
      case 'earth':
        convertedAverageLifespan = averageEarthLifespan;
        break;
      case 'mercury':
        convertedAverageLifespan =
          this.mercuryYearsConverter(averageEarthLifespan);
        break;
      case 'venus':
        convertedAverageLifespan =
          this.venusYearsConverter(averageEarthLifespan);
        break;
      case 'mars':
        convertedAverageLifespan =
          this.marsYearsConverter(averageEarthLifespan);
        break;
      case 'jupiter':
        convertedAverageLifespan =
          this.jupiterYearsConverter(averageEarthLifespan);
        break;

      default:
        return 'Average lifespan conversion failed to execute properly';
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

    let convertedUserAge;
    switch (targetConversionPlanet) {
      case 'earth':
        convertedUserAge = targetAge;
        break;
      case 'mercury':
        convertedUserAge = this.mercuryYearsConverter(targetAge);
        break;
      case 'venus':
        convertedUserAge = this.venusYearsConverter(targetAge);
        break;
      case 'mars':
        convertedUserAge = this.marsYearsConverter(targetAge);
        break;
      case 'jupiter':
        convertedUserAge = this.jupiterYearsConverter(targetAge);
        break;

      default:
        return 'Average lifespan conversion failed to execute properly';
    }

    // const convertedUserAge = this.earYearsConverter(targetAge);
    // const convertedUserAge = this.marsYearsConverter(targetAge);
    // const convertedUserAge = this.marsYearsConverter(targetAge);
    // const convertedUserAge = this.marsYearsConverter(targetAge);
    // const convertedUserAge = this.marsYearsConverter(targetAge);

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
