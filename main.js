const target = document.getElementById('target');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');

let score = 0;

function moveTarget() {
const maxX = gameArea.clientWidth - target.clientWidth;
const maxY = gameArea.clientWidth - target.clientHeight;

const randomX = Math.floor(Math.random() * maxX)
const randomY = Math.floor(Math.random() * maxY)

target.style.left = randomX + 'px';
target.style.top = random Y + 'px';
}

target.addEventListener('click' () => {
    score+++;
    scoreDisplay.textContent = score;
    moveTarget();
});



