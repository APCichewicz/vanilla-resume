// get the span element with id visitor-count
const visitorCountSpan = document.getElementById("visitor-count");

// function to run on pageload

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.countapi.xyz/update/visitors/website/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      visitorCountSpan.innerHTML = res.value;
    })
    .catch((err) => {
      console.log(err);
    });
});
