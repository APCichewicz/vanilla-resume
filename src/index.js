import axios from "axios";

// get the span element with id visitor-count
const visitorCountSpan = document.getElementById("visitor-count");

// function to run on pageload

document.addEventListener("DOMContentLoaded", function () {
  axios
    .get("https://apcvisitorcount.azurewebsites.net/api/ResumeHttpTrigger?")
    .then(function (response) {
      visitorCountSpan.innerHTML = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
});
