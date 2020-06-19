// get all hamburger slices
const hamburgerIcon = document.querySelector('.hamburger');
// let menuOpen = false;  // to check if menu is or is not open

// animate hamburger slices (you want 45 deg) by adding .change class to hamburger container
// hamburgerIcon.addEventListener('click', () => {
//     if (!menuOpen) {
//         hamburgerIcon.classList.add('open');
//         menuOpen = true;
//     } else {
//         hamburgerIcon.classList.remove('open');
//         menuOpen = false;
//     }
// });


hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('open');
});