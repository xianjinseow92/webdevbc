// $ is short for jQuery, which is short for document.querySelector();
$(document).ready(function () {
  $("h1").css("color", "red");
});
const fillDiv = () => {
  textContainer.text(message);
  textContainer.css('color', 'white');
  textContainer.css('margin-top', '10px');
}

const message = "This is a message, so please respond!";

// Get elements
$('.click-me-one').click(fillDiv);
const textContainer = $('.fill-me-up');
// Define functions



