// get the span element with id visitor-count
const visitorCountSpan = document.getElementById("visitor-count");

// function to run on pageload
fetch("https://apcvisitorcount.azurewebsites.net/api/ResumeHttpTrigger?")
  .then((res) => res.json())
  .then((res) => {
    visitorCountSpan.innerHTML = res.value;
  })
  .catch((err) => {
    console.log(err);
  });
