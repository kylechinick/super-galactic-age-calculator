import $ from 'jquery';
import GalacticDatabase from './js/biz-func.js';
// import './css/styles.css';

$(document).ready(function () {
  $('#user-data-form').submit(function (event) {
    event.preventDefault();
    let userAgeVal = $('#user-age-input').val();
    const sectorOneDataBase = new GalacticDatabase(userAgeVal);
    sectorOneDataBase.databaseUserAge = userAgeVal;
    $('#earth-age-output').text(userAgeVal);
    $('#mercury-age-output').text(
      sectorOneDataBase.mercuryYearsConverter(userAgeVal)
    );
    $('#venus-age-output').text(
      sectorOneDataBase.venusYearsConverter(userAgeVal)
    );
    $('#mars-age-output').text(
      sectorOneDataBase.marsYearsConverter(userAgeVal)
    );
    $('#jupiter-age-output').text(
      sectorOneDataBase.jupiterYearsConverter(userAgeVal)
    );

    $('#earth-lifespan-output').text(
      sectorOneDataBase.yearsRemainingCalculator(userAgeVal, 100, 'earth')
    );
    $('#mercury-lifespan-output').text(
      sectorOneDataBase.yearsRemainingCalculator(userAgeVal, 100, 'mercury')
    );
    $('#venus-lifespan-output').text(
      sectorOneDataBase.yearsRemainingCalculator(userAgeVal, 100, 'venus')
    );
    $('#mars-lifespan-output').text(
      sectorOneDataBase.yearsRemainingCalculator(userAgeVal, 100, 'mars')
    );
    $('#jupiter-lifespan-output').text(
      sectorOneDataBase.yearsRemainingCalculator(userAgeVal, 100, 'jupiter')
    );
    document.getElementById('user-data-form').reset();
  });
});
