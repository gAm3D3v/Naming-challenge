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
const gameContainer = document.querySelector('.gameContainer');

function loadQuestions() 
{
    keysArray = Object.keys(dict);
    for(let i = 0; i < questions; i++ ){
        let word = randWord(keysArray);
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

loadQuestions();