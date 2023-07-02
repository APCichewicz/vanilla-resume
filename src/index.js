// get the span element with id visitor-count
const visitorCountSpan = document.getElementById("visitor-count");

// function to run on pageload
fetch(
  "https://apcresumeapi.azure-api.net/apcvisitorcount/ResumeHttpTrigger?subscription-key=82b91c6d16254f6583170cd080fec7ac"
)
  .then((res) => res.json())
  .then((res) => {
    visitorCountSpan.innerHTML = res;
  })
  .catch((err) => {
    console.log(err);
  });
