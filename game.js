const rock = document.querySelector('.fa-hand-rock');
const paper = document.querySelector('.fa-hand-paper');
const scissors = document.querySelector('.fa-hand-scissors');

function handleClick() {
  PlayGame('rock');
}

rock.addEventListener('click', handleClick);

paper.addEventListener(
  'click',
  (fn = () => {
    PlayGame('paper');
  })
);

scissors.addEventListener(
  'click',
  (fn = () => {
    PlayGame('scissors');
  })
);

const container2 = document.querySelector('.container2');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const cpu_choice = document.querySelector('.cpu_choice');
let youResult = 0;
let cpuResult = 0;
left.innerHTML = youResult;
right.innerHTML = cpuResult;


const PlayGame = (a) => {
  const cpuChoice = ['rock', 'paper', 'scissors'];
  let cpuNumberChoice = Math.floor(Math.random() * 3 + 0);
  let cpuChoiceRandom = cpuChoice[cpuNumberChoice];

  let gameResult = a + cpuChoiceRandom;

  const draw = () => {
    left.classList.add('draw');
    right.classList.add('draw');
    setTimeout(function () {
      left.classList.remove('draw');
      right.classList.remove('draw');
    }, 500);
  };

  const win = () => {
    youResult = ++youResult;
    left.innerHTML = youResult;
    left.classList.add('green');
    setTimeout(function () {
      left.classList.remove('green');
    }, 500);
    end();
  };

  const lose = () => {
    right.classList.add('green');
    setTimeout(function () {
      right.classList.remove('green');
    }, 500);
    ++cpuResult;
    right.innerHTML = cpuResult;
    end();
  };

  
  const end = () => {
    
    if (youResult === 3) {
    alert("end game")
      setTimeout(function () {
        youResult = 0;
        left.innerHTML = youResult;
        cpuResult = 0;
        right.innerHTML = cpuResult;
       
        
      }, 1 * 1000);
    } else if (cpuResult === 3) {
    alert("end game")

      setTimeout(function () {
        cpuResult = 0;
        right.innerHTML = cpuResult;
        youResult = 0;
        left.innerHTML = youResult;

      }, 1 * 1000);
    }
  };
  if (gameResult === 'rockrock') {
    draw();
  } else if (gameResult === 'rockscissors') {
    win();
  } else if (gameResult === 'rockpaper') {
    lose();
  } else if (gameResult === 'paperpaper') {
    draw();
  } else if (gameResult === 'paperscissors') {
    lose();
  } else if (gameResult === 'paperrock') {
    win();
  } else if (gameResult === 'scissorsscissors') {
    draw();
  } else if (gameResult === 'scissorsrock') {
    lose();
  } else if (gameResult === 'scissorspaper') {
    win();
  }
};

// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });
