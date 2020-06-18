// Create a function that takes a character and checks it against the switch statement in order to play the correct sound.
// And then call it inside event listener for keypress and drum button.
function makeSound(inputKey) {
    switch (inputKey) {
        case 'w':   // when 'w' key is pressed, play this sound.
            var tom1 = new Audio('./sounds/tom-1.mp3')   // this is the code for how audio is played
            tom1.play()
            break;
        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3')   // new Audio('..') creates a HTMLAudioElement. we save this HTMLAudioElement object in a variable.
            tom2.play()                                  // now this variable, which is a HTMLAudioElement object, cam be called using the method `.play()`. 
            break;                                       // HTMLAudioElement is also a HTMLMediaElement, which is a whole bunch of methods, including `.play()`;

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

// define query to all buttons with the class .drum. We do this so that we don't add an eventlistener to ALL buttons
const ALLDRUMBUTTONS = document.querySelectorAll('.drum'); 
let numDrumButtons = ALLDRUMBUTTONS.length;

// Detecting button click
for (i = 0; i < numDrumButtons; i++) { 

    
    ALLDRUMBUTTONS[i].addEventListener('click', function(eventClick) { // add event listener to all buttons
        // when clicked on, will trigger the function attached to the event listener

        // `this` is the identity of the button that was clicked.
        // Remember, `this` has different values depending on where it's placed. 
            // In an event listener, it represents the element. As an inner method, it represents the outer func.
        var buttonInnerHTML = this.innerHTML;  // grab the innerHTML of each button. 'w', 'a', ... 


        makeSound(buttonInnerHTML);  // checks the value of the buttonInnerHTML, which is the key, and passes it into makeSound which plays audio if key matches switch case

        console.log(eventClick);

    })
}


// Detecting keyboard press on the browser window
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
// BUTTON.addEventListener('click', handleClick);  // if handleClick() is used instead, it CALLS the function because of the ();
// /* merely handleClick with no paranthesis because 
// we want to pass the function in for the eventlistener to call it */


// We can also write the above code using an anoymous function 
/* 
const BUTTONW = document.querySelector('button');
BUTTONW.addEventListener('click', function() {
    alert('I got clicked!') // what to do when click is detected
})
*/