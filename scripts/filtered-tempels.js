const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "April 6, 1893",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
},
{
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    area: 40000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
},
{
    name: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "May 21, 2017",
    area: 48000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
},
];

function generateTempleCards(temples) {
  const main = document.querySelector('main');
  main.innerHTML = '';

  temples.forEach(temple => {
      const figure = document.createElement('figure');
      figure.innerHTML = `
          <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy" width="200">
          <figcaption>${temple.name} - ${temple.location}<br>
          Dedicated: ${temple.dedicated}<br>
          Area: ${temple.area} sq ft</figcaption>
      `;
      main.appendChild(figure);
  });
}

function filterTemples(criteria) {
  let filteredTemples;
  switch (criteria) {
      case 'old':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          break;
      case 'new':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
          break;
      case 'large':
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
      case 'small':
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
      default:
          filteredTemples = temples;
          break;
  }
  generateTempleCards(filteredTemples);
}

document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      const criteria = event.target.getAttribute('href');
      filterTemples(criteria);
  });
});

const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('open');
    navigation.classList.toggle('visible');
});

generateTempleCards(temples);

// Set current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date in the footer
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
