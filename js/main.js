let player = document.getElementById('player');
let score = document.getElementById('score');
let realScore = 0;
let timer = document.getElementById('timer');
let realTimer = 20;
let timerRange = 500;
let backgroundMusic = new Audio('./sound/background.wav');

document.body.addEventListener('click', () => {
    backgroundMusic.play();
})

let interval = setInterval(startTimer, timerRange);

player.addEventListener('click', () => {

    realScore++;
    score.textContent = 'Score: ' + realScore;
    realTimer ++;
    timer.textContent = 'Timer: ' + realTimer;
    
    let randomPositionX = Math.floor(Math.random() * 500);
    let randomPositionY = Math.floor(Math.random() * 500);

    player.style.marginLeft = randomPositionX + 'px';
    player.style.marginTop = randomPositionY + 'px';

    let randomSize = Math.floor(Math.random() * 100);

    if(randomSize < 10) {
        randomSize += 10;
        player.style.width = randomSize + 'px';
        player.style.height = randomSize + 'px';
    }
        player.style.width = randomSize + 'px';
        player.style.height = randomSize + 'px';
});

function startTimer() {
    realTimer--;
    timer.textContent = 'Time: ' + realTimer;

    if(realTimer < 1 ) {
        endTime();
    }
}
function endTime() {
    Swal.fire('You Lose! Your Score: ' + realScore);
    clearInterval(interval);
}