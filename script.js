const h1 = document.querySelector("h1");
const valueOne = document.querySelector("#valueOne");
const valueTwo = document.querySelector("#valueTwo");
const btnAction = document.querySelector("#btnAction");
const resultText = document.querySelector("#result");
const formAction = document.querySelector("#formAction");

const sum = (event) => {
  event.preventDefault();
  const valueOne = document.querySelector("#valueOne").value;
  const valueTwo = document.querySelector("#valueTwo").value;
  resultText.innerText = parseInt(valueOne) + parseInt(valueTwo);
};

formAction.addEventListener("submit", sum);
