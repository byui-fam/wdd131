const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
button.addEventListener('click', () => {
    const chapter = input.value.trim();

    if (chapter !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = chapter;
        deleteButton.textContent = '❌';

        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        input.value = '';
        input.focus();
    } else {
        alert('Please enter a chapter.');
        input.focus();
    }
});
