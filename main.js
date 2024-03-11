const dict = {
    donkey : '../data/images/animals/donkey.jpg', 
    camel : '../data/images/animals/camel.jpg',
    cat: '../data/images/animals/cat.jpg',
    dog: '../data/images/animals/dog.jpg',
    elephant: '../data/images/animals/elephant.jpg',
    giraffe: '../data/images/animals/giraffe.jpg',
    duck: '../data/images/animals/duck.jpg',
    goat: '../data/images/animals/goat.jpg',
    rooster: '../data/images/animals/rooster.jpg',
    hyena: '../data/images/animals/hyena.jpg'
}

const questions = 7;
let answerArray = [];
const gameContainer = document.querySelector('.gameContainer');

/* Define buttons from the page */
const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('.reset-btn');
const soundBtn = document.querySelector('.sound-btn');

function loadQuestions() 
{
    document.querySelector('.marks-container').classList.add('hidden');
    answerArray = [];
    keysArray = Object.keys(dict);
    for(let i = 0; i < questions; i++ ){
        let word = randWord(keysArray);
        answerArray.push(word);
        keysArray.splice(keysArray.indexOf(word),1);

        let imageQuestion = document.createElement('div');
        imageQuestion.classList.add('image-question', 'flex', 'column');

        let gameImage = document.createElement('img');
        gameImage.classList.add('gameImage');
        gameImage.src = dict[word];

        let textBox = document.createElement('input');
        textBox.type = 'text';
        textBox.classList.add('text-box');

        imageQuestion.append(gameImage, textBox);
        
        gameContainer.append(imageQuestion);
    }
}
function randWord(array) 
{
    let num = Math.floor(Math.random()*array.length);
    return array[num];
}

resetBtn.addEventListener('click', () => {
    gameContainer.innerHTML = " ";
    loadQuestions();
}, false);

submitBtn.addEventListener('click', ()=> {
let marks = 0;

let inputs = document.querySelectorAll('.text-box');
for(let i = 0 ; i < inputs.length; i++)
{
    if (inputs[i].value.toLowerCase() === answerArray[i])
    {
        marks += 10;
        inputs[i].classList.add('correct-answer');
    }
    else if ((inputs[i].value.toLowerCase() != answerArray[i]) || inputs[i].value.toLowerCase() == "" )
    {
        inputs[i].classList.add('wrong-answer');
    }
}
 document.querySelector('.marks').innerText = marks;
 document.querySelector('.hidden').classList.remove('hidden');
});
