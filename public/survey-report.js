const surveyReport = {
  init: function (settings) {
    surveyReport.config = {
      url: "/api/survey_answers",
    };

    $.extend(surveyReport.config, settings);

    surveyReport.getData();
  },

  getData: function () {
    let that = this;
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
        that.averageAge = that.calculateAverage(ages).toPrecision(4);
        that.averageExperience = that
          .calculateAverage(experiences)
          .toPrecision(2);
        const genders = data.map((item) => item.gender);
        that.maleDistribution = that.countOccurences(genders, "male");
        that.femaleDistribution = that.countOccurences(genders, "female");
        that.nonBinaryDistribution = that.countOccurences(
          genders,
          "non-binary"
        );
        const countries = data.map((item) => item.country);
        const uniqueCountries = countries.filter(
          (item, i, ar) => ar.indexOf(item) === i
        );
        that.countryDistributions = [];
        uniqueCountries.forEach((country) => {
          if (!country) return;
          const countryCount = that.countOccurences(countries, country);
          that.countryDistributions.push(
            "<div>" + country + ": " + countryCount + "</div>"
          );
        });
        that.totalResponses = data.length;

        that.showData();
      },
    });
  },

  calculateAverage: function (array) {
    let total = 0;
    let notNull = 0;
    array.forEach((value) => {
      if (value) {
        total += parseInt(value);
        notNull++;
      }
    });
    return total / notNull;
  },

  countOccurences: function (array, value) {
    return array.reduce((a, v) => (v === value ? a + 1 : a), 0);
  },

  findUniques: function (array, key) {
    return array.map((item) => item[key]);
  },

  buildCountryDistribution: function (country, count) {},

  showData: function () {
    $("#survey-age-average").html(this.averageAge);
    $("#survey-experience-average").html(this.averageExperience);
    $("#survey-male-distribution").html(this.maleDistribution);
    $("#survey-female-distribution").html(this.femaleDistribution);
    $("#survey-non-binary-distribution").html(this.nonBinaryDistribution);
    $("#survey-country-distribution").html(this.countryDistributions);
    $("#survey-total-results").html(this.totalResponses);
  },
};

$(document).ready(surveyReport.init);
