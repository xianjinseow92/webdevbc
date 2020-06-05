const ALLDRUMBUTTONS = document.querySelectorAll('.drum'); // define query to all buttons

// Create a function that takes a character and checks it against the switch statement in order to play the correct sound.
// And then call it inside event listener for keypress and drum button.
function makeSound(inputKey) {
    switch (inputKey) {
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
            break;
        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()               
            break;

        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()              
            break;

        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play()
            break;

        case 'j':
            var snare = new Audio('./sounds/snare.mp3')
            snare.play()
            break;

        case 'k':
            var crash = new  Audio('./sounds/crash.mp3')
            crash.play()
            break;

        case 'l':
            var kick = new Audio('./sounds/kick-bass.mp3')
            kick.play()
            break;    

        default: console.log(buttonInnerHTML)
            break;
    }
}


// Detecting Button Press
for (i = 0; i < ALLDRUMBUTTONS.length; i++) {
    ALLDRUMBUTTONS[i].addEventListener('click', function(eventClick) {

        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);  // checks key and plays audio
        console.log(eventClick);

    })
}


// Detecting keyboard press
document.addEventListener('keydown', function(event) {
    // alert('A key was pressed!'); // alert deselects the document tree

    makeSound(event.key);  // checks key and plays audio

    console.log(event.key);
})



/* Other notes */ 
// function handleClick() {
//     alert("I got clicked!");
// }

// const BUTTON = document.querySelector('button');
// BUTTON.addEventListener('click', handleClick);  // if handleClick() is used instead, it CALLS the function. 
// /* merely handleClick with no paranthesis because 
// we want to pass the function in for the eventlistener to call it */


// We can also write the above code using an anoymous function 
/* 
const BUTTONW = document.querySelector('button');
BUTTONW.addEventListener('click', function() {
    alert('I got clicked!') // what to do when click is detected
})
*/