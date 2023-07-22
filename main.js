let randomNumber = Math.floor(Math.random() * 100) +1;
let restart = document.querySelector('#restart')
console.log(randomNumber)
var turn = 0

function guessNumber() {
    const inputNumber = document.querySelector('#inputNumber').value;
    
    turn++;

    if(inputNumber == randomNumber) {
        document.querySelector('#restart').disabled = false;
        document.querySelector('#btn').disabled = true;
        alert('Win')
    } else if (inputNumber < randomNumber) {
        displayLower()
    } else {
        displayHigher()
    }
    
    if(turn == 10) {
        document.querySelector('#btn').disabled = true
        document.querySelector('#restart').disabled = false;
    }   
}

restart.addEventListener('click', () => {
    document.querySelector('#restart').disabled = true;
    document.querySelector('#btn').disabled = false;

    randomNumber = Math.floor(Math.random() * 100) +1;
    console.log(randomNumber)
    clear()
    turn = 0
})


function displayLower() {
    let number = document.querySelector('#inputNumber')
    number.value

    let div = document.querySelector('.guess-holder')

    let guessedNumber = document.createElement('h2')
    guessedNumber.classList.add('turns')
    guessedNumber.innerText = number.value
    
    let bigOrSmall = document.createElement('h2')
    bigOrSmall.classList.add('bigOrSmall')
    bigOrSmall.innerText ='bigger,'
    
    div.append(guessedNumber)
    div.append(bigOrSmall)
}


function displayHigher() {
    let number = document.querySelector('#inputNumber')
    number.value

    let div = document.querySelector('.guess-holder')

    let guessedNumber = document.createElement('h2')
    guessedNumber.classList.add('turns')
    guessedNumber.innerText = number.value

    let bigOrSmall = document.createElement('h2')
    bigOrSmall.classList.add('bigOrSmall')
    bigOrSmall.innerText = 'smaller,'

    div.append(guessedNumber)
    div.append(bigOrSmall)  
}


function clear() {
    let h2 = document.querySelectorAll('h2')
    
    h2.forEach((item) => {
        item.remove()
    })       
}