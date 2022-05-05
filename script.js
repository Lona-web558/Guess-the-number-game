let secretNumber = 100;
let score = 100;
let highestRecord = 0;

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('.score').textContent = 'Score: ' + score;
  document.querySelector('.message').textContent = 'Guess the number!';
  secretNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.record').textContent = 'Highest Record: ' + 0;
  console.log(secretNumber);
});

document.querySelector('.check-btn').addEventListener('click', function () {
  let inputNumber = document.querySelector('.guess-number').value;
  console.log(inputNumber === secretNumber);
  console.log(secretNumber);
  if (inputNumber == secretNumber) {
    document.querySelector('.message').textContent = 'Congratulations!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(98,67,56)';
    if (score > highestRecord) {
      document.querySelector('.record').textContent =
        'Highest Record: ' + score;
    }
    return;
  } else if (inputNumber < secretNumber) {
    document.querySelector('.message').textContent = 'You guess is too small!';
    score--;
  } else {
    document.querySelector('.message').textContent = 'You guess is too large!';
    score--;
  }
  document.querySelector('.score').textContent = 'Score: ' + score;
});

document.querySelector('.again-btn').addEventListener('click', function () {
  score = 100;
  secretNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector('.score').textContent = 'Score: ' + score;
  document.querySelector('.message').textContent = 'Guess the number!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'rgb(45,67,54)';
});
