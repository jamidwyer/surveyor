$(document).ready(function () {
  function manipIframe() {
    el = $("body", $("#survey-iframe").contents());
    if (el.length != 1) {
      setTimeout(manipIframe, 100);
      return;
    }
    const goodSchema = {
      name: {
        type: "string",
        title: "Name",
        required: true,
      },
      email: {
        type: "string",
        title: "Email",
        required: true,
      },
      age: {
        type: "number",
        title: "Age",
      },
      gender: {
        title: "Gender",
        default: "female",
        type: "string",
        enum: ["male", "female", "non-binary"],
      },
      country: {
        title: "Country",
        default: "United States",
        type: "string",
        enum: [
          "Afghanistan",
          "Albania",
          "Algeria",
          "Andorra",
          "Angola",
          "Antigua & Deps",
          "Argentina",
          "Armenia",
          "Australia",
          "Austria",
          "Azerbaijan",
          "Bahamas",
          "Bahrain",
          "Bangladesh",
          "Barbados",
          "Belarus",
          "Belgium",
          "Belize",
          "Benin",
          "Bhutan",
          "Bolivia",
          "Bosnia Herzegovina",
          "Botswana",
          "Brazil",
          "Brunei",
          "Bulgaria",
          "Burkina",
          "Burundi",
          "Cambodia",
          "Cameroon",
          "Canada",
          "Cape Verde",
          "Central African Rep",
          "Chad",
          "Chile",
          "China",
          "Colombia",
          "Comoros",
          "Congo",
          "Congo {Democratic Rep}",
          "Costa Rica",
          "Croatia",
          "Cuba",
          "Cyprus",
          "Czech Republic",
          "Denmark",
          "Djibouti",
          "Dominica",
          "Dominican Republic",
          "East Timor",
          "Ecuador",
          "Egypt",
          "El Salvador",
          "Equatorial Guinea",
          "Eritrea",
          "Estonia",
          "Ethiopia",
          "Fiji",
          "Finland",
          "France",
          "Gabon",
          "Gambia",
          "Georgia",
          "Germany",
          "Ghana",
          "Greece",
          "Grenada",
          "Guatemala",
          "Guinea",
          "Guinea-Bissau",
          "Guyana",
          "Haiti",
          "Honduras",
          "Hungary",
          "Iceland",
          "India",
          "Indonesia",
          "Iran",
          "Iraq",
          "Ireland",
          "Israel",
          "Italy",
          "Ivory Coast",
          "Jamaica",
          "Japan",
          "Jordan",
          "Kazakhstan",
          "Kenya",
          "Kiribati",
          "Korea North",
          "Korea South",
          "Kosovo",
          "Kuwait",
          "Kyrgyzstan",
          "Laos",
          "Latvia",
          "Lebanon",
          "Lesotho",
          "Liberia",
          "Libya",
          "Liechtenstein",
          "Lithuania",
          "Luxembourg",
          "Macedonia",
          "Madagascar",
          "Malawi",
          "Malaysia",
          "Maldives",
          "Mali",
          "Malta",
          "Marshall Islands",
          "Mauritania",
          "Mauritius",
          "Mexico",
          "Micronesia",
          "Moldova",
          "Monaco",
          "Mongolia",
          "Montenegro",
          "Morocco",
          "Mozambique",
          "Myanmar, {Burma}",
          "Namibia",
          "Nauru",
          "Nepal",
          "Netherlands",
          "New Zealand",
          "Nicaragua",
          "Niger",
          "Nigeria",
          "Norway",
          "Oman",
          "Pakistan",
          "Palau",
          "Panama",
          "Papua New Guinea",
          "Paraguay",
          "Peru",
          "Philippines",
          "Poland",
          "Portugal",
          "Qatar",
          "Romania",
          "Russian Federation",
          "Rwanda",
          "St Kitts & Nevis",
          "St Lucia",
          "Saint Vincent & the Grenadines",
          "Samoa",
          "San Marino",
          "Sao Tome & Principe",
          "Saudi Arabia",
          "Senegal",
          "Serbia",
          "Seychelles",
          "Sierra Leone",
          "Singapore",
          "Slovakia",
          "Slovenia",
          "Solomon Islands",
          "Somalia",
          "South Africa",
          "South Sudan",
          "Spain",
          "Sri Lanka",
          "Sudan",
          "Suriname",
          "Swaziland",
          "Sweden",
          "Switzerland",
          "Syria",
          "Taiwan",
          "Tajikistan",
          "Tanzania",
          "Thailand",
          "Togo",
          "Tonga",
          "Trinidad & Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Tuvalu",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United Kingdom",
          "United States",
          "Uruguay",
          "Uzbekistan",
          "Vanuatu",
          "Vatican City",
          "Venezuela",
          "Vietnam",
          "Yemen",
          "Zambia",
          "Zimbabwe",
        ],
      },
      experience: {
        title: "Experience Level",
        type: "number",
        enum: [1, 2, 3, 4, 5],
      },
      suggestions: {
        title: "Suggested Improvements",
        type: "text",
      },
      origin: {
        type: "string",
        title: "Origin Page",
        default: window.location.pathname,
      },
    };
    const form = [
      {
        key: "suggestions",
        type: "textarea",
      },
      {
        key: "experience",
        type: "radios",
      },
      {
        key: "gender",
        type: "radios",
      },
      {
        key: "origin",
        type: "hidden",
      },
      {
        type: "submit",
        title: "Send Feedback",
      },
    ];

    function closeWindow() {
      e.preventDefault();

      $(window.parent.document).find("#survey-modal-container").modal("hide");
      $(window.parent.document).find("body").removeClass("modal-open");
      $(window.parent.document).find(".modal-backdrop").remove();
      $(window.parent.document).find("#survey-modal-container").html("");
    }

    const $modalContent = $("#survey-iframe")
      .contents()
      .find("#survey-modal-content");
    $("#survey-iframe")
      .contents()
      .find("#survey-form")
      .jsonForm({
        schema: goodSchema,
        onSubmit: function (errors, values) {
          console.log(errors, values);
          $.ajax({
            url: "/api/survey_answers",
            type: "POST",
            dataType: "json",
            data: values,
          });
          if (errors) {
            console.log("errors", errors);
            $("#survey-result").html("<p>Sorry, that didn't work.</p>");
          } else {
            $modalContent.html();
            $("#survey-iframe")
              .contents()
              .find("#survey-result")
              .html(
                "<div><p>Thank you for sending your feedback! You can <span id='close' onclick='$( \"#surveyClose\" ).trigger( \"click\" )'; return false;'>close this window</span> to go back to where you were.</p></div>"
              );
          }
        },
      });
  }

  manipIframe();

  $("#surveyLink").click(function (e) {
    e.preventDefault();
    $("#survey-modal-container").append(
      '<iframe id="survey-iframe" src="survey-modal.html" height="600px" width="800px" frameborder="0"></iframe>'
    );

    $("#survey-modal-container").modal("show");
  });

  $("#surveyClose").click(function (e) {
    e.preventDefault();

    $(window.parent.document).find("#survey-modal-container").modal("hide");
    $(window.parent.document).find("body").removeClass("modal-open");
    $(window.parent.document).find(".modal-backdrop").remove();
    $(window.parent.document).find("#survey-modal-container").html("");
  });
});
