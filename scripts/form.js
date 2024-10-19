const setCurrentYear = () => {
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
};

const setLastModifiedDate = () => {
    const modifiedP = document.getElementById('lastModified');
    if (modifiedP) {
        modifiedP.textContent = `Last modified: ${document.lastModified}`;
    }
};

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const populateProductSelect = () => {
    const productNameSelect = document.getElementById('product-name');
    if (productNameSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productNameSelect.appendChild(option);
        });
    }
};

const initializeReviewCounter = () => {
    if (!localStorage.getItem('reviewCount')) {
        localStorage.setItem('reviewCount', '0');
    }
};

const incrementReviewCounter = () => {
    let reviewCount = parseInt(localStorage.getItem('reviewCount'), 10);
    reviewCount += 1;
    localStorage.setItem('reviewCount', reviewCount);
};

const setupFormSubmitListener = () => {
    const reviewForm = document.querySelector('form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', () => {
            incrementReviewCounter();
        });
    }
};

const init = () => {
    setCurrentYear();
    setLastModifiedDate();
    populateProductSelect();
    initializeReviewCounter();
    setupFormSubmitListener();
};

document.addEventListener('DOMContentLoaded', init);
