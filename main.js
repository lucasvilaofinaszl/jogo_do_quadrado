window.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('target');
  const gameArea = document.getElementById('gameArea');
  const scoreDisplay = document.getElementById('score');

  let score = 0;
  let targetVisible = false;

  function moveTarget() {
    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
  }

const randomTime = Math.floor(Math.random() * 1500) + 500; // Entre 500ms e 2s
  setTimeout(() => {
    target.style.opacity = 0;
    targetVisible = false;
    setTimeout(() => {
      if (!targetVisible) {
        moveTarget();
        target.style.opacity = 1;
        targetVisible = true;
      }
    }, 300); // 
  }, randomTime);
}

target.addEventListener('click', () => {
  if (targetVisible) {
    score++;
    scoreDisplay.textContent = score;
    target.style.opacity = 0;
    targetVisible = false;
    setTimeout(moveTarget, 300);
  }
});

// Inicia o jogo
moveTarget();









