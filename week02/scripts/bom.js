// Step 1: Selecting elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.chapter-list');

// Step 2: Add event listener for button click
button.addEventListener('click', () => {
    const chapter = input.value.trim();

    if (chapter !== '') {
        // Step 3: Create new list item (li) and delete button
        const li = document.createElement('li');
        li.textContent = chapter;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

        // Step 4: Append the delete button to the li element
        li.appendChild(deleteButton);

        // Step 5: Append the li to the list
        list.appendChild(li);

        // Step 6: Add functionality to remove chapter
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        // Step 7: Clear input field after adding
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a chapter.');
    }
});
