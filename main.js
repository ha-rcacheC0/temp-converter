const textBox = document.getElementById("text-box");
const toFar = document.getElementById("to-far");
const toCel = document.getElementById("to-cel");
const result = document.getElementById("result");
let temp;

function convert() {

  if (toFar.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + `°F`;
  } else if (toCel.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(1) + `°F`;
  } else {
    result.textContent = `Select a unit`
  }
}