const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const reset = document.querySelector('#reset');
let result = 0
let hitPosition
let currentTime = 10
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.innerHTML = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
    currentTime--
    timeleft.textContent = currentTime
    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over!')
    }
}

reset.addEventListener('click',() =>{

    score.innerText = 0;
    timeleft.innerText = 10;
    moveMole()
})

let countDownTimerId = setInterval(countDown, 1000)