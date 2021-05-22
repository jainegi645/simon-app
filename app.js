let sequence = [];
let humanSequence = [];
let level = 0;



function activateTile(color){
    const tile = document.querySelector(`[data-tile = '${color}']`);
    const sound = document.querySelector(`[data-sound = '${color}']`);

    tile.classList.add('activated');
    sound.play();

    setTimeout(()=>{
        tile.classList.remove('activated');
    }, 300);
}


function playRound(nextSequence){
    nextSequence.forEach((color,index) => {
        setTimeout(()=>{
            activateTile(color);

        }, (index + 1) * 600);
    });
}



//next step 
function nextStep(){

    const tiles = ['red', 'green','blue','yellow'];
    const random = tiles[Math.floor(Math.random()*tiles.length)];

    return random;
}


//Start the next round
function nextRound(){
    level += 1;

//copy all the elements in the 'seqence' array to 'nextSeqence'
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
    playRound(nextSequence);
}


//to start a new game
const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');
startButton.addEventListener('click', startGame);

function startGame(){
    startButton.classList.add('hidden');
    info.classList.remove('hidden');
    info.textContent = 'wait fot the computer';
    nextRound();
}

//play the next round
const heading = document.querySelector('.js-heading');
const tileContainer = document.querySelector('.js-container');

function humanTurn(level){
    tileContainer.classList.remove('unclickable');
    info.textContent = `your turn: ${level} Tap${level>1 ? 's' : ''}`;
}


