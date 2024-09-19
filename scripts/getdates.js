document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const yearSpan = document.getElementById('currentyear');
    yearSpan.textContent = new Date().getFullYear();

    // Set last modified date
    const modifiedP = document.getElementById('lastModified');
    modifiedP.textContent = `Last modified: ${document.lastModified}`;
});
