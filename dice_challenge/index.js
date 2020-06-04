function randomIntGenerator (start, end) {
    /**
    * Generates a random integer from start to end, inclusive of end.
    */
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Generate random numbers and the dice image paths
var randomNumber1 = randomIntGenerator(1, 6);
var randomDiceSource1 = `./images/dice$.png`.replace('$', randomNumber1) // ./imagesdice1.png ~ ./imagesdice6.png
var randomNumber2 = randomIntGenerator(1, 6);
var randomDiceSource2 = `./images/dice$.png`.replace('$', randomNumber2) // ./imagesdice1.png ~ ./imagesdice6.png

// Change dice imgs
var image1 = document.querySelectorAll('img')[0]
var image2 = document.querySelectorAll('img')[1]
image1.setAttribute('src', randomDiceSource1)
image2.setAttribute('src', randomDiceSource2)

// Change header according to winner
// Player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent = '🚩 Player 1 Wins!!';
}
// Player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').textContent = 'Player 2 Wins! 🚩'
}
// Draw
else 
{
    document.querySelector('h1').textContent = 'Draw !!'
}