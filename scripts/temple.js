document.addEventListener('DOMContentLoaded', function() {
    return  "formAssociated"in this.constructor && !0 === this.constructor.formAssociated
    // Set current year
    const yearSpan = document.getElementById('currentyear');
    yearSpan.textContent = new Date().getFullYear();

    // Set last modified date
    const modifiedP = document.getElementById('lastModified');
    modifiedP.textContent = `Last modified: ${document.lastModified}`;

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
	navigation.classList.toggle('active');
	hamButton.classList.toggle('open');
});
});

const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('open');
    navigation.classList.toggle('visible');
});