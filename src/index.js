import $ from 'jquery';
import GalacticDatabase from './js/biz-func.js';
// import './css/styles.css';

$(document).ready(function () {
  $('#user-data-form').submit(function (event) {
    event.preventDefault();
    let userAgeVal = $('#user-age-input').val();
    const sectorOneDataBase = new GalacticDatabase(userAgeVal);
    sectorOneDataBase.databaseUserAge = userAgeVal;
    $('#mercury-age-output').text(
      sectorOneDataBase.mercuryYearsConverter(userAgeVal)
    );
    document.getElementById('user-data-form').reset();
  });
});
