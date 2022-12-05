let button1 = document.getElementById("button1");


function sumOfNumbers() {
  let userInput = document.getElementById("user-number");
  let inputValue = userInput.value;

  let result = 0;
  for (let i = 0; i <= inputValue; i++) {
    result = result + i;
  }
  
  let displayedResult = document.getElementById("calculated-sum");
  displayedResult.textContent = result;
  displayedResult.style.display = "block";
}

button1.addEventListener("click", sumOfNumbers);


// Higlight links exercise solution

let highlightingButton = document.querySelector('#highlight-links button');

function linkHighlighter() {
  let linkTag = document.querySelectorAll('#highlight-links a');
  for (let links of linkTag) {
    links.classList.add('highlight');
  }
};
highlightingButton.addEventListener('click', linkHighlighter);


//Display user data exercise

let userData = {
  name: 'Emin',
  age: 36,
  gender: 'male',
  marriage: 'single'
}

let displayUserDataButton = document.querySelector('#user-data button')

function displayData() {
  let outputUl = document.querySelector('#output-user-data');
  outputUl.innerHTML = '';
  
  for (let key in userData) {
    let outputList = document.createElement('li');
    let listInnerText = key.toUpperCase() + ': ' + userData[key];
    outputList.textContent = listInnerText;
    outputUl.append(outputList);
  };
};

displayUserDataButton.addEventListener('click', displayData);

// Rol dice exercise

let rollDiceButton = document.querySelector('#statistics button');

function rollDice() {
  let diceRollUl = document.getElementById('dice-rolls');
  diceRollUl.innerHTML = '';
  let userInput = document.querySelector('#user-target-number');
  let inputNumber = userInput.value;
  let howManyTimesRolled = 0
  let matchNumber = false;

  while (!matchNumber) {
    let dicedNumber = Math.floor(Math.random() * 6) + 1;
    howManyTimesRolled++;
    let listItem = document.createElement('li');
    let listContent = 'Rol ' + howManyTimesRolled + ': ' + dicedNumber;
    listItem.textContent = listContent;
    diceRollUl.append(listItem);
    matchNumber = inputNumber == dicedNumber;
  };

  let totalRolls = document.getElementById('output-total-rolls');
  totalRolls.textContent = howManyTimesRolled;
  let outputTarget = document.getElementById('output-target-number');
  outputTarget.textContent = inputNumber;
}

rollDiceButton.addEventListener('click', rollDice);
