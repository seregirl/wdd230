// declare three const variables that hold references to the input, button, and .list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');

const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter)
});

button.addEventListener('click', () => {
    if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '',
    input.focus;
}
else {
    alert("please enter a book and chapter.");
    input.focus();
}
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getChapterList()
{
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter (chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
      }

// // Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.
// button.addEventListener('click', function() {
//     // check to make sure the input is not blank before doing the following remaining tasks in this list using an if block, otherwise provide a message or at least do nothing and return the .focus() to the input field.
//     if (input.value != '')
//     {
//         // create a li element

//         const li = document.createElement('li');
//         // create a delete button
//         const deleteButton = document.createElement('button');
        
//         // populate the li elements textContent or innerHtml with the input value.
//         li.textContent = input.value;
//         // populate the button textContent with a X
//         deleteButton.textContent = '❌';
//         // append the li element with the delette button
//         li.append(deleteButton);
//         // append the li element to the unordered list in your HTML
//         list.append(li);
//         // add an event listener to the delete button that removes the li element when clicked
//         deleteButton.addEventListener('click', function() {
//             list.removeChild(li);
//             input.focus();
//         })
//         // send the focus to the input element
//         input.focus();

//     } 
//     else {
//             alert("please enter a book and chapter.");
//             input.focus();
//     }
// });
