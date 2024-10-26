// Function to set the current year in the footer
function setFooterYear() {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

// Function to set the last modified date in the footer
function setLastModified() {
    const lastModifiedSpan = document.getElementById('last-modified');
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Function to toggle the mobile navigation menu
function toggleMenu() {
    const menuButton = document.getElementById('menu');
    const navLinks = document.querySelector('.nav-link');
    
    menuButton.classList.toggle('open');
    navLinks.classList.toggle('show');
}

// Event listener for the hamburger menu button
function addMenuEventListener() {
    const menuButton = document.getElementById('menu');
    menuButton.addEventListener('click', toggleMenu);
}

// Store user's favorite sneakers in localStorage
function storeFavoriteSneakers() {
    const sneakers = [
        { name: 'Air Max 270', brand: 'Nike', price: 150 },
        { name: 'Yeezy Boost 350', brand: 'Adidas', price: 220 },
        { name: 'Chuck Taylor All-Star', brand: 'Converse', price: 60 }
    ];

    localStorage.setItem('favoriteSneakers', JSON.stringify(sneakers));
}

// Retrieve and display favorite sneakers from localStorage
function displayFavoriteSneakers() {
    const sneakersContainer = document.createElement('div');
    sneakersContainer.id = 'sneakers-list';
    document.body.appendChild(sneakersContainer);

    const sneakers = JSON.parse(localStorage.getItem('favoriteSneakers')) || [];
    
    if (sneakers.length > 0) {
        sneakersContainer.innerHTML = `
            <h3>Your Favorite Sneakers:</h3>
            <ul>
                ${sneakers.map(sneaker => `<li>${sneaker.name} by ${sneaker.brand} - $${sneaker.price}</li>`).join('')}
            </ul>
        `;
    } else {
        sneakersContainer.textContent = 'No favorite sneakers found in local storage.';
    }
}

// Initialize the app
function initializeApp() {
    setFooterYear();
    setLastModified();
    addMenuEventListener();
    storeFavoriteSneakers();
    displayFavoriteSneakers();
}

// Call initializeApp when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);
