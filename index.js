/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const lengthEl = document.getElementById("length-conversion-txt");
const volumeEl = document.getElementById("volume-conversion-txt");
const massEl = document.getElementById("mass-conversion-txt");

function render() {
  const inputVal = Number(inputEl.value);

  const metersToFeet = inputVal * 3.281;
  const feetToMeters = inputVal / 3.281;
  const lengthText = `${inputVal} meters = ${metersToFeet.toFixed(3)} feet | ${inputVal} feet = ${feetToMeters.toFixed(3)} meters`;
  lengthEl.textContent = lengthText;

  const litersToGallons = inputVal * 0.264;
  const gallonsToLiters = inputVal / 0.264;
  const volumeText = `${inputVal} liters = ${litersToGallons.toFixed(3)} gallons | ${inputVal} gallons = ${gallonsToLiters.toFixed(3)} liters`;
  volumeEl.textContent = volumeText;

  const kilogramToPounds = inputVal * 2.204;
  const poundsToKilogram = inputVal / 2.204;
  const massText = `${inputVal} kilos = ${kilogramToPounds.toFixed(3)} pounds | ${inputVal} pounds = ${poundsToKilogram.toFixed(3)} kilos`;
  massEl.textContent = massText;
}

// btnEl.addEventListener("click", (event) => {
//   render();
// });

// event listener with 1 seconds debounce
let timeOutId;
inputEl.addEventListener("input", (event) => {
  if (timeOutId) {
    clearTimeout(timeOutId);
  }
  timeOutId = setTimeout(() => {
    render();
  }, 1000);
});

render();
