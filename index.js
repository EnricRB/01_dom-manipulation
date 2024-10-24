// EXERCISE 1: Selecting Elements
// TODO: Select the element with the ID 'mainTitle' and log it to the console.
let mainTitle = document.getElementById('mainTitle');
console.log(mainTitle);


// EXERCISE 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."
let paragraphs = document.querySelectorAll('p');

paragraphs[1].textContent = 'This paragraph has been changed.';


// EXERCISE 3: Changing CSS Styles
// TODO: Select the first list item and change its text color to red
let firstListItem = document.querySelector('#list li');

firstListItem.style.color = 'red';



// EXERCISE 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds
let firstParagraph = document.querySelector('p');

firstParagraph.classList.add('highlight');

setTimeout(() => {
    firstParagraph.classList.remove('highlight');
}, 3000);



// EXERCISE 5: Creating and Appending Elements
// TODO: Create a new list item with the text "Item 4" and append it to the existing list
let list = document.getElementById('list');

let newListItem = document.createElement('li');
newListItem.textContent = 'Item 4';

list.appendChild(newListItem);


// EXERCISE 6: Removing Elements
// TODO: Remove the last list item from the unordered list
list.removeChild(list.lastElementChild);



// EXERCISE 7: Handling Events
// TODO: Add a click event listener to the button that displays an alert saying "Button clicked!"
let button = document.getElementById('actionButton');

button.addEventListener('click', function() {
    alert('Button clicked!');
});


// Exercise 8: Working with Input
// TODO: Add an input event listener to the input field that displays the current input value in the result div
let inputField = document.getElementById('inputField');
let result = document.getElementById('result');

inputField.addEventListener('input', function() {
    result.textContent = inputField.value;
});


// Exercise 9: Toggling Visibility
// TODO: Add a click event listener to the button that toggles the visibility of the content div
let contentDiv = document.getElementById('content');

button.addEventListener('click', function() {
    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block';
    } else {
        contentDiv.style.display = 'none';
    }
});


// Exercise 10: Modifying Attributes
// TODO: Select the input field and change its placeholder text to "Insert your name"
inputField.setAttribute('placeholder', 'Insert your name');