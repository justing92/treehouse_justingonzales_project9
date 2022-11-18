const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const guesses = document.querySelector('.tries');
let li = document.querySelectorAll('li');
const h2 = document.getElementsByClassName('title');

let missed = 0;

let phrases = [
    'back to black',
    'love is a losing game',
    'tears dry on their own',
    'stronger than me',
    'some unholy war'
];


// start game

startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});


// get random phrase

function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    let phrase = arr[randomNumber];
    return phrase;
} 

const randomPhrase = getRandomPhraseAsArray(phrases);


// display game

function addPhraseToDisplay(arr) {

    for (let i = 0; i < randomPhrase.length; i++) {
        let text = arr[i];
        const li = document.createElement('li');
        li.textContent = text ;
        ul.appendChild(li);
        if (arr[i] === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
      }
    }
    
addPhraseToDisplay(randomPhrase);


// check letter function

qwerty.addEventListener ('click', (e) =>{
    if (e.target.tagName === 'BUTTON') {
        const btn = e.target; 
        btn.disabled = true;
        btn.className = "chosen";
        const letterGuess =  e.target.textContent;
        const check = checkLetter(letterGuess);
    }
});
    
function checkLetter(guess) {
    const correctGuess = randomPhrase.includes(guess);

    if (correctGuess === true){
        for (let i = 0; i < randomPhrase.length; i++) {
            if (randomPhrase[i]=== guess) {
                document.querySelectorAll('li')[i].classList.add('show');
            }
        }
    } else {
        const wrongGuess = document.querySelectorAll('.tries img')[missed];
        wrongGuess.src = 'images/lostHeart.png';
        wrongGuess.style.transition = "all .7s ease.in.out";
        missed++;
    }
    checkWin();
}

// check win or lost

function checkWin() {
    const letters = document.getElementsByClassName('letter');
    const shownLetters = document.getElementsByClassName('show');

    if (shownLetters.length === letters.length) {
        overlay.className = 'win';
        overlay.style.display = 'flex';
        overlay.children[0].textContent = "You Did It! Congrats!"
        startGame.textContent = "Play Again?";
        startGame.addEventListener ('click', () => {
            location.reload();  
        });
    } else if (missed >= 5) {
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        overlay.children[0].textContent = "Oh No! You Lost!"
        startGame.textContent = "Try Again?";
        startGame.addEventListener ('click', () => {
            location.reload();  
        });
    }
}

