import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import GalacticDatabase from './js/biz-func.js';
// import './css/styles.css';

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    const userAgeVal = $('#user-age-input').val();
    const sectorOneDataBase = new GalacticDatabase(userAgeVal);
    sectorOneDataBase.databaseUserAge = userAgeVal;
    $('#mercury-age-output').text(
      sectorOneDataBase.mercuryYearsConverter(userAgeVal)
    );
  });
});
