// this script will make a request to an azure function app and take the response and add it to the content of span with id visitor-count

// import the axios library, to make http requests
import axios from "axios";

// make an axios request to the azure function app
let count = axios.get(
  "https://apcvisitorcount.azurewebsites.net/api/ResumeHttpTrigger?"
);

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
