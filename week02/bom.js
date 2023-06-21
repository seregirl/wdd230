// declare three const variables that hold references to the input, button, and .list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#list');
// Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.
button.addEventListener('click', function() {
    // check to make sure the input is not blank before doing the following remaining tasks in this list using an if block, otherwise provide a message or at least do nothing and return the .focus() to the input field.
    if (input.value != '')
    {
        // create a li element

        const li = document.createElement('li');
        // create a delete button
        const deleteButton = document.createElement('button');
        
        // populate the li elements textContent or innerHtml with the input value.
        li.textContent = input.value;
        // populate the button textContent with a X
        deleteButton.textContent = 'X';
        // append the li element with the delette button
        li.append(deleteButton);
        // append the li element to the unordered list in your HTML
        list.append(li);
        // add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        })
        // send the focus to the input element
        input.focus();

    } 
    else {
            alert("please enter a book and chapter.");
            input.focus();
    }
});
