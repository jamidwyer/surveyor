const surveyReport = (function () {
  let averageAge = 40;
  let averageExperience = 2.5;
  let maleDistribution = 49;
  let femaleDistribution = 49;
  let nonBinaryDistribution = 2;
  let countryDistributions = [];
  let totalResponses = 0;
  const init = function (settings) {
    surveyReport.getData();
  };

  const getData = function () {
    $.ajax({
      type: "GET",
      url: "http://localhost:9000/api/survey_answers",
      cache: false,
      success: function (data) {
        const ages = data.map(function (value) {
          return value.age;
        });
        const experiences = data.map(function (value) {
          return value.experience;
        });
        averageAge = calculateAverage(ages).toPrecision(4);
        averageExperience = calculateAverage(experiences).toPrecision(2);
        const genders = data.map((item) => item.gender);
        maleDistribution = countOccurences(genders, "male");
        femaleDistribution = countOccurences(genders, "female");
        nonBinaryDistribution = countOccurences(genders, "non-binary");
        const countries = data.map((item) => item.country);
        const uniqueCountries = countries.filter(
          (item, i, ar) => ar.indexOf(item) === i
        );
        countryDistributions = [];
        uniqueCountries.forEach((country) => {
          if (!country) return;
          const countryCount = countOccurences(countries, country);
          countryDistributions.push(
            "<div>" + country + ": " + countryCount + "</div>"
          );
        });
        totalResponses = data.length;

        showData();
      },
    });
  };

  const calculateAverage = function (array) {
    let total = 0;
    let notNull = 0;
    array.forEach((value) => {
      if (value) {
        total += parseInt(value);
        notNull++;
      }
    });
    return total / notNull;
  };

  const countOccurences = function (array, value) {
    return array.reduce((a, v) => (v === value ? a + 1 : a), 0);
  };

  const showData = function () {
    $("#survey-age-average").html(averageAge);
    $("#survey-experience-average").html(averageExperience);
    $("#survey-male-distribution").html(maleDistribution);
    $("#survey-female-distribution").html(femaleDistribution);
    $("#survey-non-binary-distribution").html(nonBinaryDistribution);
    $("#survey-country-distribution").html(countryDistributions);
    $("#survey-total-results").html(totalResponses);
  };

  return {
    init: init,
    getData: getData,
    calculateAverage: calculateAverage,
    countOccurences: countOccurences,
  };
})();

$(document).ready(surveyReport.init);

export default surveyReport;
