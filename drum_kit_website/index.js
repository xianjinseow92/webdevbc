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

// const ALLDRUMBUTTONS = document.querySelectorAll('.drum'); // select all button elements

// for (i=0; i < ALLDRUMBUTTONS.length; i++) {

//     ALLDRUMBUTTONS[i].addEventListener('click', function() {   // apply click event listener to all buttons
//         alert('I got clicked!')
//     })

// }

const ALLDRUMBUTTONS = document.querySelectorAll('.drum');

for (i=0; i < ALLDRUMBUTTONS.length; i++) {

    ALLDRUMBUTTONS[i].addEventListener('click', clickResponseAudio);
}

function clickResponseAudio() {
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
}