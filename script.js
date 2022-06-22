function generateaRandomNr() {
  return Math.floor(Math.random() * nrOfButtons() + 1);
}
function nrOfButtons() {
  return document.getElementById("numb").value;
}
function generateBtn(i) {
  var button = document.createElement("button");
  button.innerHTML = i;
  button.id = i;
  button.className = "m-1 btn btn-primary btn-lg";
  button.onclick = function winnerButton() {
    if (button.id == generateaRandomNr()) {
      alert("You find it!");
    } else {
      alert("Try again!");
    }
  };
  document.body.appendChild(button);
}
function addButtons() {
  for (let i = 1; i <= nrOfButtons(); ++i) {
    generateBtn(i);
  }
}