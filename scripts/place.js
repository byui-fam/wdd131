// Function to display the current year and last modified date
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}

// Static values for temperature and wind speed
const temperature = 10; // in °C
const windSpeed = 5; // in km/h

// Check conditions for wind chill calculation
if (temperature <= 10 && windSpeed > 4.8) {
    const windChillFactor = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = `${windChillFactor.toFixed(2)} °C`;
} else {
    document.getElementById('windChill').textContent = "N/A";
}
