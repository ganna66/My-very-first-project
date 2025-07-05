'use strict';
console.log('JS file is connected ✅');
// console.log(document.querySelector('.check').textContent);
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
console.log('the random number choosen is', number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //   document.querySelector('.message').textContent = 'correct the number';

  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  //when there is no number entered
  if (!guess) {
    displayMessage(' 👀 NO NUMBER');
    //when user wins
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      'The number should be between 1 and 20 ❌';
  } else if (number === guess) {
    document.querySelector('.message').textContent = 'You Won 🎉🎉';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    let highScore = document.querySelector('.highscore').textContent;

    if (highScore > score) {
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.highscore').textContent = score;
    }

    //general code when both guessing is high or low to apply the dry principle
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? ' 📈 Too high' : ' 📉 Too low';
      displayMessage(guess > number ? ' 📈 Too high' : ' 📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//click on again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; //
  document.querySelector('.score').textContent = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
